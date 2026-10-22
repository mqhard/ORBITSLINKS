import { capabilities, focuses, type Text, type Category, type tracks, type assessmentLabels, type stateLabels, type approvalLabels } from '@/content/build';
export type AssessmentState = keyof typeof assessmentLabels;
export type WorkState = keyof typeof stateLabels;
export type ApprovalState = keyof typeof approvalLabels;
export type Brief = { name: string; description: string; track: keyof typeof tracks; focuses: string[]; industry: string; market: string; audience: string; location: string; offering: string; model: string; stage: string; launchDate: string; priority: string; tools: string; website: string; existing: Record<string, AssessmentState> };
export type BuildItem = { id: string; assessment: AssessmentState; state: WorkState; owner: string; approval: ApprovalState; feedback: string; url: string; note: string; connected: boolean };
export type BuildProject = { id: string; brief: Brief; step: number; status: 'draft' | 'active' | 'completed'; items: BuildItem[]; activity: { id: string; at: string; message: Text }[]; createdAt: string; updatedAt: string; launchApproved: boolean };
export const emptyBrief: Brief = { name: '', description: '', track: 'new', focuses: [], industry: '', market: '', audience: '', location: '', offering: '', model: '', stage: '', launchDate: '', priority: '', tools: '', website: '', existing: {} };
export function relevantCapabilities(brief: Brief) {
  if (brief.track !== 'specific') return capabilities.filter(c => c.id !== 'custom');
  const selected = new Set(focuses.filter(f => brief.focuses.includes(f.id)).flatMap(f => f.ids));
  return capabilities.filter(c => selected.has(c.id));
}
export function discoveryCapabilities(brief: Brief) {
  const relevant = relevantCapabilities(brief);
  const ids = new Set(relevant.flatMap(c => [c.id, ...c.dependencies]));
  return capabilities.filter(c => ids.has(c.id));
}
export function assess(brief: Brief): BuildItem[] {
  const primary = new Set(relevantCapabilities(brief).map(c => c.id));
  const optional = new Set(['naming', 'agent', 'support', 'deck', 'templates', 'reporting']);
  return discoveryCapabilities(brief).map(c => {
    const assessment = brief.existing[c.id] || (!primary.has(c.id) || (brief.track !== 'specific' && optional.has(c.id)) ? 'optional' : 'missing');
    return makeItem(c.id, assessment);
  });
}
export function makeItem(id: string, assessment: AssessmentState = 'missing'): BuildItem {
  return { id, assessment, state: assessment === 'ready' ? 'existing' : assessment === 'optional' ? 'optional' : assessment === 'unnecessary' ? 'removed' : 'todo', owner: '', approval: 'waiting', feedback: '', url: '', note: '', connected: false };
}
export const inScope = (item: BuildItem) => !['removed', 'postponed', 'optional'].includes(item.state);
export const delivered = (item: BuildItem) => item.state === 'complete' || item.state === 'existing';
export function readyItem(item: BuildItem) {
  return delivered(item) && (item.state === 'existing' || !capabilities.find(c => c.id === item.id)?.approval || item.approval === 'approved');
}
export function progressOf(project: BuildProject) {
  const active = project.items.filter(inScope);
  return active.length ? Math.round(active.reduce((n, i) => n + (readyItem(i) ? 1 : i.state === 'progress' || delivered(i) ? .5 : 0), 0) / active.length * 100) : 0;
}
export function dependenciesFor(project: BuildProject, id: string) {
  return (capabilities.find(c => c.id === id)?.dependencies || []).filter(dep => !project.items.some(i => i.id === dep && readyItem(i)));
}
export function currentCategory(project: BuildProject): Category | undefined {
  const next = project.items.find(i => inScope(i) && !readyItem(i));
  return capabilities.find(c => c.id === next?.id)?.category;
}
export function record(project: BuildProject, message: Text): BuildProject {
  const at = new Date().toISOString();
  return { ...project, updatedAt: at, activity: [{ id: crypto.randomUUID(), at, message }, ...project.activity].slice(0, 40) };
}
export function newProject(brief: Brief): BuildProject {
  const now = new Date().toISOString();
  return { id: crypto.randomUUID(), brief, step: 1, status: 'draft', items: [], activity: [], createdAt: now, updatedAt: now, launchApproved: false };
}
export function updateItem(project: BuildProject, id: string, patch: Partial<BuildItem>): BuildProject {
  return { ...project, status: project.status === 'completed' ? 'active' : project.status, launchApproved: false, items: project.items.map(i => i.id !== id ? i : { ...i, ...patch, approval: patch.approval ?? ((patch.state !== undefined && patch.state !== i.state) || (patch.url !== undefined && patch.url !== i.url) || (patch.note !== undefined && patch.note !== i.note) ? 'waiting' : i.approval) }) };
}
export const projectHref = (id: string) => `/workspace/builds/project/?id=${encodeURIComponent(id)}`;
export const safeResourceUrl = (value: string) => { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
