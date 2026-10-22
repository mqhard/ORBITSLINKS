# ORBITS BUILD

## Routes

- `/build/`: BUILD introduction (no earlier BUILD route existed in this checkout).
- `/build/start/`: start, conditional discovery, assessment and editable blueprint.
  `?track=new|gaps|specific` selects an entry path; `?id=...` resumes a local draft.
- `/workspace/builds/`: My Builds with Draft / Active / Completed filters.
- `/workspace/builds/project/?id=...&view=...`: individual project workspace.
  Query IDs preserve static-export hosting; unknown IDs show a local not-found state.
- `/auth/?mode=signup&next=...`: existing account UI retains only a validated local
  BUILD destination. There is no authentication bypass or simulated login.

## Boundaries

- `src/content/build.ts`: bilingual capability definitions and labels.
- `src/lib/build-model.ts`: types, assessment rules, dependency recommendations,
  scope and readiness calculations.
- `src/lib/build-store.ts`: browser storage adapter and same-tab/cross-tab events.
- `build-start.tsx`: discovery flow and persistent drafts.
- `build-shared.tsx`: blueprint editor, progress, notices and website journey.
- `build-workspace.tsx`: project list and workspace sections.
- `build-landing.tsx`: public BUILD presentation using existing header/footer.
- `Workspace` accepts optional children; existing modules keep their existing UI.

## Behavior and limitations

Assessments are rule-based from user answers, not AI audits. Specific requests
include selected capabilities and optional prerequisite inputs; users can remove,
postpone, add, mark existing or complete any capability. Missing dependencies are
advisory. Resubmitting discovery explicitly replaces earlier scope/work edits.

Progress excludes optional, postponed and removed items. Existing assets count as
ready. Completed reviewable work counts as ready only once approved. The launch
button additionally requires explicit sign-off and a nonempty included scope.
Subsequent scope/work changes reopen a completed build and clear launch sign-off.

Projects persist only in this browser (`orbits-builds-v1`). Save failures are visible
and do not advance the flow. Shared URLs do not transfer local data. Account
submission remains disabled; users explicitly choose a local preview. Production
access control and account-scoped persistence must be implemented at the auth/data
boundaries before this can become a private multi-user product.

Deliverables are user-supplied HTTP(S) references and notes, not generated or uploaded
files. Owners are reference names, not user accounts. Review decisions are local
records, not messages or signed approvals. System connection states are explicitly
self-reported; changing them performs no integration. Growth is a completion/handoff
panel only and starts no new service or subscription.

No packages, fonts, backend endpoints, theme or i18n systems were added.
No automated tests, build, diff verification or browser review were run, following
the user's instruction to perform their own verification.
