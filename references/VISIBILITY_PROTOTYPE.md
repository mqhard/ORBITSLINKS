# ORBITS LINKS — Visibility experience

Implemented 21 October 2026 as an isolated `/visibility/` route. The existing homepage, workspace, onboarding and commercial pages are not replaced by this prototype.

## Scope and design

- English, left-to-right experience with scoped CSS Modules and the approved six-colour palette.
- Approved logo files are preserved in `references/brand/approved-logo/`. Byte-identical public copies are in `public/brand/`; no geometry was recreated or generated.
- Original code-native illustrations: a capability relationship map, an editorial brief composition and a signal-to-decision framework. These remain crisp, responsive and independent of external image services.
- No fabricated clients, metrics, results or pricing. Practical outputs are explicitly marked as examples.
- Existing preference settings are not overwritten. The prototype has its own language, direction and palette.

## Experience

1. Start from “Help more people find us.”
2. Play a finite Connect → Align → Orbit → Expand sequence, or choose any step directly. Pause, replay and skip are available.
3. Explore seven connected capabilities. Selection is shared between the diagram and the practical capability panel.
4. Review example outputs and the delivery approach. Scope and timing remain subject to discovery.
5. Create a local starting brief, edit answers, copy or download the text. Nothing is submitted, audited or persisted to a backend. Reloading clears answers.

## Motion and accessibility

- The logo and core remain stable. Only the surrounding guide responds slightly to a mouse pointer, using requestAnimationFrame.
- Formation stops after its fourth stage; there is no perpetual spinning or scroll hijacking.
- `prefers-reduced-motion` stops playback and transitions and disables pointer response. Starting the sequence then reveals the complete system immediately.
- Small screens use a compact capability grid instead of dense crossing lines. Direct links remain available.
- Native buttons, labelled fields, visible focus, a skip link, pressed states, live descriptions and summary focus are provided. Escape closes the mobile navigation.

## Verification

- TypeScript check passed after implementation.
- Browser verified at desktop size, 390 × 844 and 320 × 740; no horizontal document overflow at either phone width.
- Verified finite formation, node-to-detail selection, Enter activation, mobile menu opening/closing and anchor navigation.
- Verified creation of a brief with sample answers, preserved answers when editing, and downloaded text matching the displayed brief.
- Reduced-motion handling reviewed in code; OS-level motion preference was not changed for testing.
- No new dependencies or external requests are required by the prototype.

## Files

- `src/app/visibility/page.tsx`: isolated route and metadata.
- `src/components/visibility/visibility-experience.tsx`: experience and local interactions.
- `src/components/visibility/visibility.module.css`: scoped responsive visual and motion system.
- `src/content/visibility.ts`: capability descriptions and relationships.

Backend automation, production agents, analytics integrations, commercial plans and the remaining Worlds are intentionally outside this pass.
