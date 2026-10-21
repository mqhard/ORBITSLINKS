import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile, rename, readdir, lstat, copyFile, access, unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomBytes } from 'node:crypto';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const releases = join(root, '.local-releases');
const currentPath = join(releases, 'current.json');
const action = process.argv[2] || 'status';
const allowed = ['release', 'start', 'rollback', 'list', 'status', 'stop'];
const idPattern = /^\d{8}T\d{9}Z-[a-f0-9]{8}-[a-f0-9]{4}$/;

function run(command, args, { capture = false, env = process.env, cwd = root } = {}) {
  const result = spawnSync(command, args, { cwd, env, encoding: 'utf8', stdio: capture ? 'pipe' : 'inherit' });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || `${command} ${args.join(' ')} failed${capture ? `: ${result.stderr}` : ''}`);
  return capture ? result.stdout.trim() : '';
}
async function json(path) { return JSON.parse(await readFile(path, 'utf8')); }
async function current() {
  try { return await json(currentPath); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}
async function record(path, value) {
  const temp = `${path}.tmp`;
  await writeFile(temp, JSON.stringify(value, null, 2) + '\n');
  await rename(temp, path);
}
function compose(image, ...args) {
  run('docker', ['compose', '-f', join(root, 'compose.yaml'), ...args], { env: { ...process.env, ORBITS_IMAGE: image } });
}
async function copySource(from, to) {
  const stat = await lstat(from);
  if (stat.isSymbolicLink()) throw new Error(`Source snapshot refuses symlinks: ${from}`);
  if (stat.isDirectory()) {
    await mkdir(to, { recursive: true });
    for (const name of await readdir(from)) {
      if (name === '.DS_Store' || name.startsWith('.env')) continue;
      await copySource(join(from, name), join(to, name));
    }
  } else if (stat.isFile()) {
    await mkdir(dirname(to), { recursive: true });
    await copyFile(from, to);
  }
}
async function loadRelease(id) {
  if (!idPattern.test(id || '')) throw new Error('Choose an exact release ID from npm run local:releases.');
  const release = await json(join(releases, id, 'release.json'));
  if (release.id !== id || release.image !== `orbits-links-local:${id}` || !/^sha256:[a-f0-9]{64}$/.test(release.imageId)) throw new Error('Invalid release manifest.');
  const result = spawnSync('docker', ['image', 'inspect', release.image, '--format', '{{.Id}}'], { encoding: 'utf8' });
  if (result.status !== 0) run('docker', ['image', 'load', '--input', join(releases, id, 'image.tar')]);
  const actual = run('docker', ['image', 'inspect', release.image, '--format', '{{.Id}}'], { capture: true });
  if (actual !== release.imageId) throw new Error('Image does not match the saved release. Refusing activation.');
  return release;
}
async function activate(release) {
  const previous = await current();
  try {
    compose(release.image, 'up', '-d', '--wait', '--wait-timeout', '60');
  } catch (error) {
    if (previous && previous.id !== release.id) {
      console.error('Activation failed. Restoring the previously selected release.');
      const restored = await loadRelease(previous.id);
      compose(restored.image, 'up', '-d', '--wait', '--wait-timeout', '60');
    }
    throw error;
  }
  await record(currentPath, { id: release.id, image: release.image, activatedAt: new Date().toISOString() });
  console.log(`\nRunning ${release.id}\nHome: http://localhost:4173/\nVisibility: http://localhost:4173/visibility/`);
}

let locked = false;
try {
  if (!allowed.includes(action)) throw new Error(`Unknown action: ${action}`);
  await mkdir(releases, { recursive: true });
  if (action === 'list') {
    const selected = await current();
    for (const id of (await readdir(releases)).filter(name => idPattern.test(name)).sort().reverse()) {
      try { const item = await json(join(releases, id, 'release.json')); console.log(`${id === selected?.id ? '*' : ' '} ${id}  ${item.createdAt}`); }
      catch { console.log(`  ${id}  incomplete build (not activatable)`); }
    }
  } else {
    run('docker', ['info', '--format', '{{.ServerVersion}}'], { capture: true });
    if (action !== 'status') {
      await writeFile(join(releases, '.lock'), String(process.pid), { flag: 'wx' });
      locked = true;
    }
    if (action === 'release') {
      const sha = run('git', ['rev-parse', 'HEAD'], { capture: true });
      const id = `${new Date().toISOString().replace(/[-:.]/g, '')}-${sha.slice(0, 8)}-${randomBytes(2).toString('hex')}`;
      const folder = join(releases, id);
      const source = join(folder, 'source');
      await mkdir(source, { recursive: true });
      // Explicit allowlist: no Git credentials, environment files or unrelated projects.
      for (const name of ['src', 'public', 'references', 'docker', 'scripts', 'package.json', 'package-lock.json', 'next.config.ts', 'next-env.d.ts', 'tsconfig.json', 'Dockerfile', '.dockerignore', 'compose.yaml', '.gitignore', 'README.md', 'AGENTS.md']) {
        try { await access(join(root, name)); }
        catch (error) { if (error.code === 'ENOENT') continue; throw error; }
        await copySource(join(root, name), join(source, name));
      }
      const image = `orbits-links-local:${id}`;
      console.log(`Saving and building release ${id}`);
      run('docker', ['build', '--tag', image, '--label', `org.opencontainers.image.revision=${sha}`, source]);
      const imageId = run('docker', ['image', 'inspect', image, '--format', '{{.Id}}'], { capture: true });
      run('docker', ['image', 'save', '--output', join(folder, 'image.tar'), image]);
      const release = { id, image, imageId, createdAt: new Date().toISOString(), baseCommit: sha, workingTreeStatus: run('git', ['status', '--short'], { capture: true }), source: 'source/', archive: 'image.tar' };
      await record(join(folder, 'release.json'), release);
      await activate(release);
    } else if (action === 'start' || action === 'rollback') {
      const id = action === 'rollback' ? process.argv[3] : (await current())?.id;
      if (!id) throw new Error('No saved release selected. Run npm run local:release first.');
      await activate(await loadRelease(id));
    } else {
      const selected = await current();
      if (!selected) throw new Error('No saved release selected. Run npm run local:release first.');
      compose(selected.image, action === 'stop' ? 'stop' : 'ps');
    }
  }
} catch (error) {
  console.error(`\n${error.code === 'EEXIST' ? 'Another local release operation holds .local-releases/.lock. Wait for it to finish.' : error.message}`);
  process.exitCode = 1;
} finally {
  if (locked) await unlink(join(releases, '.lock'));
}
