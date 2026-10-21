# ORBITS LINKS

## Official repository and approved baseline

The official repository is <https://github.com/mqhard/ORBITSLINKS>.
The user-approved source of truth is the Docker release from October 21, 2026,
preserved by Git tag `approved-docker-2026-10-21`. Do not replace it with the
older October 20 design without explicit approval.

See [the baseline and update workflow](references/APPROVED_BASELINE.md) and
[local Docker instructions](references/LOCAL_DOCKER.md).

## Initial implementation notes

The first local implementation is a bilingual public homepage foundation. It
includes the shared header, hero form, Arabic/English direction handling, and
light/dark/system theme preferences. The hero form is a local UI demonstration
and does not submit data to a backend.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Available checks

```bash
npm run typecheck
npm run build
```
