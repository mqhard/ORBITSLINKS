# ORBITS LINKS — Semrush Master Reference Inventory

**Target project:** ORBITS LINKS  
**Reference site:** https://www.semrush.com/  
**Document role:** MASTER REFERENCE / RESEARCH INVENTORY  
**Status:** ACTIVE RESEARCH — NOT SOURCE OF TRUTH  
**Last verified:** 2026-10-19

---

# 0. Why this file exists

This is the **single master research file** for the Semrush reference.

The goal is to collect the reference site as a connected system, not as disconnected screenshots or loose notes.

This file should ultimately contain:

- every global navigation element,
- every homepage section,
- every primary page family,
- every product/tool path,
- every solution path,
- pricing paths,
- resource paths,
- free-tool paths,
- enterprise paths,
- user journeys,
- page-to-page relationships,
- CTAs and destinations,
- interaction states,
- layout patterns,
- content hierarchy,
- responsive behavior,
- motion behavior,
- conversion logic,
- reusable page patterns,
- and a separate creative translation layer for ORBITS LINKS.

**Important:**  
Nothing in this file is automatically approved for ORBITS LINKS.

The workflow is:

```text
SEMRUSH REFERENCE
↓
MASTER INVENTORY
↓
RELATIONSHIP MAP
↓
ADOPT / ADAPT / REJECT
↓
ORBITS LINKS CREATIVE TRANSLATION
↓
SOURCE OF TRUTH
↓
IMPLEMENTATION DELTA
```

---

# 1. Status Legend

Every item uses one of these states:

- `VERIFIED` — directly observed on the current public site.
- `PARTIALLY VERIFIED` — main structure is known but visual/interaction detail is incomplete.
- `TO CAPTURE` — still needs direct inspection.
- `INFERRED` — interpretation, not directly stated.
- `CANDIDATE` — potentially useful for ORBITS LINKS.
- `APPROVED` — explicitly approved for ORBITS LINKS.
- `REJECTED` — explicitly rejected.

---

## 1.1 Evidence Integrity Rules

Evidence status is assigned from the current observation, not inherited from earlier notes.

- `VERIFIED` requires a direct observation of the current public page or its rendered accessibility/DOM state.
- `PARTIALLY VERIFIED` means that the structure or behavior was observed but one or more requested states remain untested.
- `INFERRED` must never be presented as directly observed.
- `UNKNOWN` means no reliable evidence is available.
- `TO CAPTURE` identifies a specific missing observation.
- A rendered anchor `href` verifies the URL exposed by the current page; it does not verify the content, availability, or redirect chain of the destination page.
- `Internal` means `semrush.com` or one of its subdomains. All other domains are classified as `External`.
- No login, signup, form submission, destination-page crawl, or authenticated action was performed in this round.

## 1.2 Evidence Register — P0 / P1

| Evidence ID | Page / Area | URL | Verified Date | Verification Method | Viewport | Language / Region | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| EVI-GS-001 | Global header — default desktop | https://www.semrush.com/ | 2026-10-19 | Live public render; accessibility snapshot; rendered DOM inspection | Desktop 1440×900 | English; region not exposed | VERIFIED | Logo, campaign strip, navigation order, login and signup links observed. |
| EVI-GS-002 | Product mega menu | https://www.semrush.com/ | 2026-10-19 | Opened menu; accessibility snapshot; rendered anchor extraction; visual inspection | Desktop 1440×900 | English; region not exposed | PARTIALLY VERIFIED | All 21 rendered links and exposed URLs recorded. Pointer-hover styling and animation timing remain TO CAPTURE. |
| EVI-GS-003 | Solutions mega menu | https://www.semrush.com/ | 2026-10-19 | Opened menu; accessibility snapshot; rendered anchor extraction; visual inspection | Desktop 1440×900 | English; region not exposed | PARTIALLY VERIFIED | All 28 rendered links and exposed URLs recorded. Pointer-hover styling and animation timing remain TO CAPTURE. |
| EVI-GS-004 | Resources mega menu | https://www.semrush.com/ | 2026-10-19 | Opened menu; accessibility snapshot; rendered anchor extraction; visual inspection | Desktop 1440×900 | English; region not exposed | PARTIALLY VERIFIED | All 23 rendered links and exposed URLs recorded. Pointer-hover styling and animation timing remain TO CAPTURE. |
| EVI-GS-005 | Header keyboard and focus | https://www.semrush.com/ | 2026-10-19 | Keyboard interaction against rendered controls | Desktop 1440×900 | English; region not exposed | VERIFIED | Enter opens a menu, Escape closes it, Tab enters the first menu link, and the focused link receives a visible browser focus outline. |
| EVI-GS-006 | Header scroll / sticky state | https://www.semrush.com/ | 2026-10-19 | Live scroll observation; bounding-box and computed-position inspection | Desktop 1440×900 | English; region not exposed | VERIFIED | Campaign strip scrolls away; main header remains visible at viewport top with `position: sticky`. |
| EVI-GS-007 | Mobile header and submenus | https://www.semrush.com/ | 2026-10-19 | Live responsive render; open/close/back interactions; accessibility snapshot | Mobile 390×844 | English; region not exposed | VERIFIED | Closed launcher, full-screen menu, Product/Solutions/Resources drill-in panels, Back, Close, Log In and Start for free observed. |
| EVI-GS-008 | Tablet header | https://www.semrush.com/ | 2026-10-19 | Live responsive render; visibility inspection; menu open interaction | Tablet 768×1024 | English; region not exposed | PARTIALLY VERIFIED | Hamburger launcher plus visible Log In and Start for free in closed header; full-screen menu when opened. Exact breakpoint remains TO CAPTURE. |
| EVI-GS-009 | Footer — desktop | https://www.semrush.com/ | 2026-10-19 | Accessibility snapshot; rendered DOM link extraction | Desktop 1440×900 | English; region not exposed | VERIFIED | Five primary columns, social row, Adobe link, legal row and language selector observed; 45 links/actions recorded. |
| EVI-GS-010 | Footer — mobile | https://www.semrush.com/ | 2026-10-19 | Live responsive render; accordion interactions; visual inspection | Mobile 390×844 | English; region not exposed | VERIFIED | Primary groups and Legal become accordions; opening another group closes the previous group. |
| EVI-GS-011 | Footer — tablet | https://www.semrush.com/ | 2026-10-19 | Live responsive render; accessibility snapshot | Tablet 768×1024 | English; region not exposed | VERIFIED | Footer retains expanded multi-column structure at this viewport. |
| EVI-GS-012 | Footer language selector | https://www.semrush.com/ | 2026-10-19 | Opened selector; accessibility and rendered menu inspection; Escape close | Desktop 1440×900 | English; region not exposed | PARTIALLY VERIFIED | Fourteen language choices observed. Selecting another locale and persistence behavior were not tested. |

## 1.3 P0 / P1 TO CAPTURE Register

| ID | Missing evidence | Status |
|---|---|---|
| TC-GS-001 | Exact pointer-hover styling for top-level header controls | TO CAPTURE |
| TC-GS-002 | Exact pointer-hover styling for individual mega-menu links | TO CAPTURE |
| TC-GS-003 | Definitive click-outside close behavior for mega menus | TO CAPTURE |
| TC-GS-004 | Open/close animation duration, easing and transition sequence | TO CAPTURE |
| TC-GS-005 | Current-page active styling on Pricing, Enterprise and destination pages | TO CAPTURE |
| TC-GS-006 | Logo and campaign-link hover/focus styling | TO CAPTURE |
| TC-GS-007 | Final redirect/status/content validation for destination URLs | TO CAPTURE |
| TC-GS-008 | Exact responsive breakpoint thresholds | TO CAPTURE |
| TC-GS-009 | Tablet submenu drill-in details at additional tablet widths | TO CAPTURE |
| TC-GS-010 | Mobile menu scroll lock, overscroll and long-submenu behavior | TO CAPTURE |
| TC-GS-011 | Locale navigation, selected-language behavior and persistence | TO CAPTURE |
| TC-GS-012 | Exact footer link hover/focus styling | TO CAPTURE |
| TC-GS-013 | Runtime behavior of JavaScript privacy/cookie actions without activating them | TO CAPTURE |
| TC-GS-014 | Geographic, personalized or experiment-driven header/footer variations | TO CAPTURE |

## 1.4 Homepage Evidence Register

All homepage evidence below was collected from the current public page without submitting the domain input, opening signup/login, or activating destination links.

| Evidence ID | Page / Area | URL | Verified Date | Viewports | Verification Method | Status | Notes |
|---|---|---|---|---|---|---|---|
| EVI-HP-001 | HP-01 Hero / Primary Entry | https://www.semrush.com/ | 2026-10-19 | 1440×900; 768×1024; 390×844 | Live render, accessibility snapshot, DOM attributes, keyboard focus traversal | PARTIALLY VERIFIED | Default input, country list and keyboard order verified. Submission, validation and result states were not triggered. |
| EVI-HP-002 | HP-02 Semrush One | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Live render, card switching, media-state inspection, CTA `href` extraction | PARTIALLY VERIFIED | Desktop expanded/collapsed behavior and active-video playback verified. Entrance/hover states remain. |
| EVI-HP-003 | HP-03 AI Assistant / Data Connection | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Live render, card switching, media-state inspection, CTA `href` extraction | PARTIALLY VERIFIED | Desktop switching and active-video playback verified. Entrance/hover states remain. |
| EVI-HP-004 | HP-04 Customer / Brand Proof | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Rendered logo extraction; timed position comparison | PARTIALLY VERIFIED | Twelve unique logos verified; duplicated track and continuous movement verified at tablet/mobile. Reduced-motion behavior remains. |
| EVI-HP-005 | HP-05 Enterprise Positioning | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Live render, CTA extraction, video property and current-time observation | PARTIALLY VERIFIED | In-view muted looping playback verified. Failure/fallback states remain. |
| EVI-HP-006 | HP-06 Solutions Collection | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Nine safe expand/minimize cycles, carousel controls, responsive render, media/CTA extraction | PARTIALLY VERIFIED | All nine cards, descriptions, images and CTA URLs verified; desktop and mobile expansion behavior differs. |
| EVI-HP-007 | HP-07 Stats and Facts | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Rendered metric extraction, active-item interaction, computed transition inspection | PARTIALLY VERIFIED | Five metrics and active selection verified; keyboard semantics and entrance/counter behavior remain. |
| EVI-HP-008 | HP-08 AI Visibility Index | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Table extraction, rendered media/CTA inspection, responsive layout inspection | PARTIALLY VERIFIED | Ten visible rows and external CTA verified; data provenance/update and entrance motion remain. |
| EVI-HP-009 | HP-09 Customer Story / Results | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Semantic content/media extraction and responsive layout inspection | PARTIALLY VERIFIED | Quote, attribution, result metric and stacking verified; entrance behavior remains. |
| EVI-HP-010 | HP-10 Resources Collection | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Nine card/link/media extractions and carousel-control interaction | PARTIALLY VERIFIED | All visible cards and destinations verified; touch swipe and exact carousel timing remain. |
| EVI-HP-011 | HP-11 Final Conversion CTA | https://www.semrush.com/ | 2026-10-19 | Desktop / Tablet / Mobile | Rendered content, CTA `href` and layout inspection | PARTIALLY VERIFIED | Signup destination exposed by anchor; signup flow not entered. |

## 1.5 Homepage Interaction Verification Register

| ID | Section | Verified interaction | Status |
|---|---|---|---|
| INT-HP-001 | HP-01 | Keyboard focus order: domain input → country selector → Get insights | VERIFIED |
| INT-HP-002 | HP-01 | Country selector opens and closes by trigger activation | VERIFIED |
| INT-HP-003 | HP-01 | Country selector exposes 135 rendered options | VERIFIED |
| INT-HP-004 | HP-02 / HP-03 | Selecting either desktop card changes the expanded card | VERIFIED |
| INT-HP-005 | HP-02 / HP-03 | Only the expanded desktop card's video plays; the other pauses | VERIFIED |
| INT-HP-006 | HP-05 | Enterprise video begins muted looping playback while in view | VERIFIED |
| INT-HP-007 | HP-06 | Desktop Expand reveals description, CTA and expanded product visual | VERIFIED |
| INT-HP-008 | HP-06 | Minimize restores the compact state and hides description/CTA | VERIFIED |
| INT-HP-009 | HP-06 | More than one solution card can remain expanded simultaneously | VERIFIED |
| INT-HP-010 | HP-06 | Desktop Previous/Next controls shift active carousel position | VERIFIED |
| INT-HP-011 | HP-06 | Mobile tap opens and closes the vertical solution item | VERIFIED |
| INT-HP-012 | HP-06 | Multiple mobile solution items can remain open simultaneously | VERIFIED |
| INT-HP-013 | HP-07 | Activating a metric changes the single active metric | VERIFIED |
| INT-HP-014 | HP-10 | Previous/Next controls move the resources carousel one card | VERIFIED |
| INT-HP-015 | HP-10 | Previous is disabled at the first resource card; enabled after advancing | VERIFIED |

## 1.6 Homepage Motion Verification Register

| ID | Section | Motion behavior | Measured behavior | Status |
|---|---|---|---|---|
| MOT-HP-001 | HP-02 / HP-03 | Desktop card expansion | Width transition, `0.4s`, `ease-in-out` | VERIFIED |
| MOT-HP-002 | HP-02 / HP-03 | Product video playback | Active card plays; collapsed card pauses; videos are muted and looped | VERIFIED |
| MOT-HP-003 | HP-04 | Responsive logo marquee | Continuous leftward movement observed on tablet/mobile; desktop remained static in the sampled interval | VERIFIED |
| MOT-HP-004 | HP-05 | Enterprise media playback | Viewport-visible video plays muted and looped without controls | VERIFIED |
| MOT-HP-005 | HP-06 | Desktop card expansion | Width transition, `0.4s`, `ease-in-out` | VERIFIED |
| MOT-HP-006 | HP-06 | Mobile accordion content | `max-height` transition, `0.2s`, `ease-out` | VERIFIED |
| MOT-HP-007 | HP-06 | Desktop carousel movement | Track translates by one card per control activation; exact duration was not exposed after the action | PARTIALLY VERIFIED |
| MOT-HP-008 | HP-07 | Active metric styling | Color transition, `0.42s`, `ease-in-out` | VERIFIED |
| MOT-HP-009 | HP-10 | Resource carousel movement | Track translates by one card per control activation; exact duration/easing remain TO CAPTURE | PARTIALLY VERIFIED |

## 1.7 Homepage TO CAPTURE Register

| ID | Section | Missing evidence | Status |
|---|---|---|---|
| TC-HP-001 | HP-01 | Empty-submit validation | TO CAPTURE |
| TC-HP-002 | HP-01 | Invalid-domain validation copy and state | TO CAPTURE |
| TC-HP-003 | HP-01 | Loading state after Get insights | TO CAPTURE |
| TC-HP-004 | HP-01 | Success result and destination/route | TO CAPTURE |
| TC-HP-005 | HP-01 | Network/server error state | TO CAPTURE |
| TC-HP-006 | HP-01 | Domain suggestions/autocomplete behavior after typing | TO CAPTURE |
| TC-HP-007 | HP-01 | Pointer-hover styling for input, selector and CTA | TO CAPTURE |
| TC-HP-008 | HP-02 / HP-03 | Pointer-hover trigger and styling independent of click | TO CAPTURE |
| TC-HP-009 | HP-02 / HP-03 | Entrance/exit and scroll-trigger relationship | TO CAPTURE |
| TC-HP-010 | HP-02 / HP-03 | Exact video pause/reset behavior after leaving viewport | TO CAPTURE |
| TC-HP-011 | HP-04 | Marquee controller, exact duration/easing and loop seam | TO CAPTURE |
| TC-HP-012 | HP-04 | Hover/touch pause behavior | TO CAPTURE |
| TC-HP-013 | HP-04 | Reduced-motion behavior | TO CAPTURE |
| TC-HP-014 | HP-05 | Video load failure, fallback and replay behavior | TO CAPTURE |
| TC-HP-015 | HP-05 | Entrance/exit and exact scroll boundary for playback | TO CAPTURE |
| TC-HP-016 | HP-06 | Pointer-hover styling for cards, toggles and CTA | TO CAPTURE |
| TC-HP-017 | HP-06 | Exact desktop carousel duration/easing | TO CAPTURE |
| TC-HP-018 | HP-06 | Keyboard focus sequence and focus styling across all nine items | TO CAPTURE |
| TC-HP-019 | HP-06 | Reduced-motion behavior | TO CAPTURE |
| TC-HP-020 | HP-07 | Whether pointer hover alone, click, or both is the canonical active trigger | TO CAPTURE |
| TC-HP-021 | HP-07 | Keyboard operability of non-button metric items | TO CAPTURE |
| TC-HP-022 | HP-07 | Counter/arrow entrance and scroll-trigger behavior | TO CAPTURE |
| TC-HP-023 | HP-08 | Data source, refresh schedule and dynamic update behavior | TO CAPTURE |
| TC-HP-024 | HP-08 | Table/bar entrance motion and row interaction, if any | TO CAPTURE |
| TC-HP-025 | HP-09 | Entrance/scroll motion, if any | TO CAPTURE |
| TC-HP-026 | HP-10 | Touch-swipe behavior | TO CAPTURE |
| TC-HP-027 | HP-10 | Exact carousel duration/easing | TO CAPTURE |
| TC-HP-028 | HP-10 | Card/link pointer-hover and focus styling | TO CAPTURE |
| TC-HP-029 | HP-10 | Destination availability and redirect outcomes | TO CAPTURE |
| TC-HP-030 | HP-11 | CTA hover/focus styling and signup redirect outcome | TO CAPTURE |
| TC-HP-031 | All homepage sections | Exact responsive breakpoint thresholds | TO CAPTURE |
| TC-HP-032 | All homepage sections | Reduced-motion mode outside explicitly measured components | TO CAPTURE |
| TC-HP-033 | All homepage sections | Geographic, personalized or experiment-driven variants | TO CAPTURE |

## 1.8 P3 Product / Features Evidence Register

P3 observations were made against the current public English pages on 2026-10-19. No login, signup, trial, demo request, prompt copy, MCP connection, form submission or authenticated product route was activated. A visible `href` verifies the destination exposed by the rendered page, not the redirect outcome or the authenticated state beyond it.

| Evidence ID | Page / Area | URL | Verified Date | Verification Method | Viewport | Language / Region | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| EVI-P3-001 | Features index | https://www.semrush.com/features/ | 2026-10-19 | Live public render; accessibility snapshot; visible-tab and anchor extraction | Effective desktop render 1280×720 | English; region not exposed | VERIFIED | 13 canonical Feature pages verified in three groups: Research, Create & Optimize and Track. |
| EVI-P3-002 | Semrush One | https://www.semrush.com/one/ | 2026-10-19 | Live public render; heading, media and anchor extraction | Effective desktop render 1280×720 | English; `en.semrush.com` signup destination exposed | PARTIALLY VERIFIED | Seven unique logical sections documented; DOM contains duplicated wrapper sections. Responsive and button-state coverage remains. |
| EVI-P3-003 | Keyword Research | https://www.semrush.com/features/keyword-research/ | 2026-10-19 | Live public render; full section order; CTA/media/control extraction; safe carousel and FAQ interaction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 18 sections. Carousel next/previous state, FAQ expansion and exposed destinations verified. |
| EVI-P3-004 | Competitor Analysis | https://www.semrush.com/features/competitor-analysis/ | 2026-10-19 | Live public render; accessibility snapshot; section/link/media extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 20 sections and four capability conversion routes documented. |
| EVI-P3-005 | AI Visibility | https://www.semrush.com/features/ai-visibility/ | 2026-10-19 | Live public render; accessibility snapshot; section/link/media extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 21 sections; seven capability routes and five tool-family relationships documented. |
| EVI-P3-006 | Prompt Research | https://www.semrush.com/features/prompt-research/ | 2026-10-19 | Live public render; accessibility snapshot; section/link/media extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 20 sections; prompt-volume, market coverage and AI-tool relationships documented. |
| EVI-P3-007 | Local SEO | https://www.semrush.com/features/local-seo/ | 2026-10-19 | Live public render; complete section, CTA, gallery and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 21 sections; six workflow capabilities and eight linked tools documented. Three rendered capability CTAs expose `#` on the public page. |
| EVI-P3-008 | Market Analysis | https://www.semrush.com/features/market-analysis/ | 2026-10-19 | Live public render; complete section, CTA, gallery and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 19 sections; four capability routes and six linked tools documented. |
| EVI-P3-009 | Content Creation | https://www.semrush.com/features/content-marketing/ | 2026-10-19 | Live public render; complete section, CTA, gallery and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 21 sections; five tool links documented. SEO Brief Generator exposes a malformed-looking rendered URL and remains flagged. |
| EVI-P3-010 | Technical Site Health / Site Audit | https://www.semrush.com/features/site-audit/ | 2026-10-19 | Live public render; complete section, CTA and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 18 sections; four conversion routes and Enterprise Site Intelligence relationship documented. |
| EVI-P3-011 | Digital PR | https://www.semrush.com/features/digital-pr/ | 2026-10-19 | Live public render; complete section, CTA, gallery and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 18 sections; five capability cards and four public tool destinations documented. |
| EVI-P3-012 | Rank Tracking | https://www.semrush.com/features/rank-tracking/ | 2026-10-19 | Live public render; complete section, media, CTA and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 16 sections; search-engine, LLM, device, location and competitor tracking relationships documented. |
| EVI-P3-013 | Marketing Reports | https://www.semrush.com/features/reports/ | 2026-10-19 | Live public render; complete section, CTA, integrations and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 16 sections; four report-workflow routes and 20+ integration claim documented. Final CTA exposes a Position Tracking redirect and is flagged. |
| EVI-P3-014 | AI Brand Sentiment | https://www.semrush.com/features/brand-sentiment/ | 2026-10-19 | Live public render; complete section, metric, link and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 20 sections; five narrative-analysis capabilities documented. Three story cards expose same-page `#` anchors. |
| EVI-P3-015 | Backlink Analysis | https://www.semrush.com/features/backlink-analysis/ | 2026-10-19 | Live public render; complete section, CTA, gallery and FAQ extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | 17 sections; four workflow routes and six linked tools documented. |
| EVI-P3-016 | Advertising Toolkit | https://www.semrush.com/advertising/ | 2026-10-19 | Live public render; heading sequence, buttons and exposed anchor extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | Additional Product discovered from Homepage. Eleven logical modules documented; multiple button-only actions have no rendered destination. |
| EVI-P3-017 | Social Toolkit | https://www.semrush.com/social-media/ | 2026-10-19 | Live public render; section, button and anchor extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | Additional Product discovered from Homepage. Six logical sections documented; most CTAs are buttons without exposed `href`. |
| EVI-P3-018 | Semrush MCP | https://www.semrush.com/mcp/ | 2026-10-19 | Live public render; heading, FAQ, button and external/internal anchor extraction | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | Additional Product from Product menu/Footer. Setup destinations for ChatGPT, Claude, Cursor, VS Code, Gemini, Perplexity and custom agents documented; connection action not opened. |
| EVI-P3-019 | Shared Feature Detail interactions and motion | https://www.semrush.com/features/keyword-research/ | 2026-10-19 | Safe interaction with rendered carousel and FAQ; computed transition and video-property inspection | Effective desktop render 1280×720 | English; region not exposed | PARTIALLY VERIFIED | Next enables Previous; FAQ `aria-expanded` changes false→true. Link/button transitions expose 0.15s, FAQ grid/opacity 0.3s and some reveal opacity/transform 1.5s. Hero video is autoplay/loop/muted by attribute but was paused in background. |

## 1.9 P3 TO CAPTURE Register

| ID | Page / Area | Missing evidence | Status |
|---|---|---|---|
| TC-P3-001 | Semrush One | Tablet and mobile layout, navigation, stacking and media behavior | TO CAPTURE |
| TC-P3-002 | Keyword Research | Tablet and mobile layout, carousel density, stacking and CTA changes | TO CAPTURE |
| TC-P3-003 | Competitor Analysis | Tablet and mobile layout, carousel density, stacking and CTA changes | TO CAPTURE |
| TC-P3-004 | AI Visibility | Tablet and mobile layout, carousel density, stacking and CTA changes | TO CAPTURE |
| TC-P3-005 | Prompt Research | Tablet and mobile layout, carousel density, stacking and CTA changes | TO CAPTURE |
| TC-P3-006 | Local SEO | Tablet and mobile layout, workflow cards, gallery and CTA behavior | TO CAPTURE |
| TC-P3-007 | Market Analysis | Tablet and mobile layout, workflow cards, gallery and CTA behavior | TO CAPTURE |
| TC-P3-008 | Content Creation | Tablet and mobile layout, workflow cards, gallery and CTA behavior | TO CAPTURE |
| TC-P3-009 | Site Audit | Tablet and mobile layout, capability rows and CTA behavior | TO CAPTURE |
| TC-P3-010 | Digital PR | Tablet and mobile layout, capability rows and gallery behavior | TO CAPTURE |
| TC-P3-011 | Rank Tracking | Tablet and mobile layout, step cards and proof modules | TO CAPTURE |
| TC-P3-012 | Marketing Reports | Tablet and mobile layout, report workflow and CTA behavior | TO CAPTURE |
| TC-P3-013 | AI Brand Sentiment | Tablet and mobile layout, capability rows and story cards | TO CAPTURE |
| TC-P3-014 | Backlink Analysis | Tablet and mobile layout, gallery density and CTA behavior | TO CAPTURE |
| TC-P3-015 | Advertising | Tablet and mobile module order, embedded demo and button states | TO CAPTURE |
| TC-P3-016 | Social | Tablet and mobile tab/role-switching and CTA behavior | TO CAPTURE |
| TC-P3-017 | Semrush MCP | Tablet and mobile platform-guide layout, FAQ and CTA behavior | TO CAPTURE |
| TC-P3-018 | All P3 pages | Exact responsive breakpoint thresholds | TO CAPTURE |
| TC-P3-019 | Shared Feature Detail | Pointer-hover styling for links, cards, CTAs, arrows and media | TO CAPTURE |
| TC-P3-020 | Shared Feature Detail | Full keyboard focus order and visible focus treatment per page | TO CAPTURE |
| TC-P3-021 | Carousels | Touch swipe, drag and keyboard-arrow behavior | TO CAPTURE |
| TC-P3-022 | Carousels | Exact track-transition duration and easing | TO CAPTURE |
| TC-P3-023 | Shared Feature Detail | Section entrance/exit triggers and scroll relationship | TO CAPTURE |
| TC-P3-024 | Video / reveal motion | In-viewport play/pause, fallback, replay and reduced-motion behavior | TO CAPTURE |
| TC-P3-025 | All destination links | Final HTTP status, redirect chain, availability and authenticated outcome | TO CAPTURE |
| TC-P3-026 | Signup / trial / demo | Loading, validation, success and error states; intentionally not entered | TO CAPTURE |
| TC-P3-027 | Product application routes | Authenticated tool UI, reports, saved state and limits | TO CAPTURE |
| TC-P3-028 | Footer-only product routes | Deep inventory for Enterprise SEO/AIO/SI, Insights24, Mfour, App Center, Top Websites, Sensor and API documentation | TO CAPTURE |
| TC-P3-029 | Social | Destination/state of Get started, Analyze competitors, Drive engagement, Amplify success and role buttons | TO CAPTURE |
| TC-P3-030 | Advertising | Destination/state of Try it now, Ask Agent, Create Ads Now and Launch Ads button actions | TO CAPTURE |
| TC-P3-031 | Semrush MCP | Connect modal, Copy prompt, Try this prompt and resulting states | TO CAPTURE |
| TC-P3-032 | Link anomalies | Validate Keyword final CTA, Reports final CTA, Content SEO Brief URL, Local `#` CTAs and Brand story `#` anchors | TO CAPTURE |
| TC-P3-033 | All P3 pages | Geographic, personalized, language or experiment-driven variants | TO CAPTURE |

---

# 2. Master Coverage Index

| Area | Coverage | Next Action |
|---|---|---|
| Global header | PARTIALLY VERIFIED | URLs, keyboard, scroll, desktop/tablet/mobile states captured; close remaining TC-GS items |
| Product mega menu | PARTIALLY VERIFIED | 21 links captured; pointer hover, animation and destination outcomes remain |
| Solutions mega menu | PARTIALLY VERIFIED | 28 links captured; pointer hover, animation and destination outcomes remain |
| Resources mega menu | PARTIALLY VERIFIED | 23 links captured; pointer hover, animation and destination outcomes remain |
| Homepage | DETAILED REFERENCE INVENTORY — PARTIALLY VERIFIED | 11 sections, 24 known CTA destinations, 15 verified interactions and 33 explicit TO CAPTURE items |
| Homepage footer | PARTIALLY VERIFIED | 45 links/actions plus desktop/tablet/mobile structure captured; styling and destination outcomes remain |
| Product / Features universe | DEEP INVENTORY — PARTIALLY VERIFIED | 17 public Product/Feature pages, 279 logical sections, 220 unique CTA label→destination pairs, 81 capability relationships and 33 explicit TC-P3 items recorded |
| Solutions / Use Cases | PARTIALLY VERIFIED | Crawl each solution page |
| Pricing | PARTIALLY VERIFIED | Map all pricing families + states |
| Enterprise | TO CAPTURE | Full page inventory |
| Free tools | TO CAPTURE | Full tool inventory |
| App Center | TO CAPTURE | Full ecosystem inventory |
| Resources | TO CAPTURE | Blog / Academy / KB / Webinars / Success Stories |
| Login / trial flows | TO CAPTURE | Public flow only unless explicitly authorized |
| Mobile behavior | PARTIALLY VERIFIED | Global header/footer captured at 390×844; homepage and page families remain |
| Motion system | TO CAPTURE | Record section entrances/exits/interactions |
| Design tokens | TO CAPTURE | Visual inspection |
| User journeys | PARTIALLY VERIFIED | Expand after page crawling |
| ORBITS creative layer | NOT STARTED | Start only after reference inventory is stable |

---

# 3. GLOBAL SYSTEM

## 3.1 Global Header

**Status:** `PARTIALLY VERIFIED`

**Primary evidence:** EVI-GS-001, EVI-GS-005, EVI-GS-006, EVI-GS-007, EVI-GS-008.

### 3.1.1 Observed order

```text
Campaign strip
→ Semrush logo / home
→ Product
→ Pricing
→ Solutions
→ Resources
→ Enterprise
→ Log In
→ Start for free
```

An accessibility-only `Skip to content` button also precedes the visible header. Its observed activation moved focus to the next focusable campaign link rather than clearly to the main content; expected skip-target behavior therefore remains `PARTIALLY VERIFIED`.

### 3.1.2 Header element register

| Item | Label | Type | Trigger | Destination URL | I/E | Click behavior | Hover behavior | Active / focus behavior | Mobile / tablet equivalent | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| H-00 | GET YOUR SPOTLIGHT TICKET | Campaign link | Link activation | https://www.spotlightconf.com/register?utm_source=website&utm_medium=banner&utm_campaign=semrush_web_topbanner&utm_term=semrush_website&utm_content=spotlight_2026 | External | Anchor opens with `target=_blank` | TO CAPTURE | Focus styling TO CAPTURE | Present above closed header; scrolls away | Campaign/event acquisition path. |
| H-01 | Semrush homepage | Logo / home anchor | Link activation | https://www.semrush.com/ | Internal | Navigates to home | TO CAPTURE | Focus styling TO CAPTURE | Logo remains in closed and open mobile/tablet header | Logo includes “An Adobe Company” lockup in the observed render. |
| H-02 | Product | Disclosure button | Click or Enter | No direct URL | — | Toggles Product mega menu | TO CAPTURE | `aria-expanded`; underline and upward chevron when open; keyboard focusable | Opens Product drill-in panel with Back and Close | Discovery by platform, feature and task. |
| H-03 | Pricing | Navigation link | Link activation | https://www.semrush.com/pricing/ | Internal | Direct anchor navigation; not activated in this round | TO CAPTURE | Current-page active style TO CAPTURE | Direct link inside open mobile/tablet menu | Commercial evaluation. Pricing page itself was not inventoried. |
| H-04 | Solutions | Disclosure button | Click or Enter | No direct URL | — | Toggles Solutions mega menu | TO CAPTURE | `aria-expanded`; underline and upward chevron when open; keyboard focusable | Opens Solutions drill-in panel with Back and Close | Discovery by use case, size, role or industry. |
| H-05 | Resources | Disclosure button | Click or Enter | No direct URL | — | Toggles Resources mega menu | TO CAPTURE | `aria-expanded`; underline and upward chevron when open; Tab moves to Blog with visible focus outline | Opens Resources drill-in panel with Back and Close | Education, proof, free utility, platform and company discovery. |
| H-06 | Enterprise | Navigation link | Link activation | https://enterprise.semrush.com/ | Internal subdomain | Direct anchor navigation; not activated in this round | TO CAPTURE | Current-page active style TO CAPTURE | Direct link with external-style arrow glyph in mobile/tablet menu | Enterprise buyer entry. |
| H-07 | Log In | Navigation link / outlined CTA | Link activation | https://www.semrush.com/login/?src=header | Internal | Direct anchor navigation; not activated | TO CAPTURE | Focus styling TO CAPTURE | Hidden in closed 390px header; visible at bottom of open menu. Visible in closed 768px header and open menu | Existing-user path; authenticated behavior is out of scope. |
| H-08 | Start for free | Navigation link / primary CTA | Link activation | https://www.semrush.com/signup/?src=header | Internal | Direct anchor navigation; not activated | TO CAPTURE | Focus styling TO CAPTURE | Hidden in closed 390px header; visible at bottom of open menu. Visible in closed 768px header and open menu | New-user conversion path; signup was not entered. |
| H-A11Y-01 | Skip to content | Accessibility button | Keyboard focus / activation | No exposed URL | — | Activation behavior only partially verified | Focus-triggered visibility TO CAPTURE | Keyboard reachable | Present at all tested viewports | Observed focus result did not conclusively reach the main content. |

### 3.1.3 Verified header interaction states

| State | Result | Status | Evidence |
|---|---|---|---|
| Default desktop | Logo, five primary navigation entries, Log In and Start for free are visible; Product/Solutions/Resources are collapsed | VERIFIED | EVI-GS-001 |
| Open menu | Full-width panel opens below the main header; active trigger is underlined with upward chevron | VERIFIED | EVI-GS-002 to EVI-GS-004 |
| Switch menu | Opening another disclosure closes the previously open mega menu | VERIFIED | EVI-GS-002 to EVI-GS-004 |
| Close by trigger | Clicking the active trigger again closes its menu | VERIFIED | EVI-GS-002 |
| Close by Escape | Escape closes an open menu | VERIFIED | EVI-GS-005 |
| Open by keyboard | Enter opens the focused disclosure | VERIFIED | EVI-GS-005 |
| Keyboard traversal | Tab from Resources moves focus to Blog and exposes a visible focus outline | VERIFIED | EVI-GS-005 |
| Click outside | One attempt did not provide conclusive evidence of intended behavior | TO CAPTURE | TC-GS-003 |
| Scroll / sticky | Campaign strip leaves the viewport; the main header stays at the top as sticky navigation | VERIFIED | EVI-GS-006 |
| Header transformation | Desktop header changes from campaign-strip + header to sticky header without the campaign strip | VERIFIED | EVI-GS-006 |
| Pointer hover | Reliable pointer-hover state was not available in the verification surface | TO CAPTURE | TC-GS-001, TC-GS-002 |
| Animation | Transition sequence was observed visually but duration/easing were not measured | TO CAPTURE | TC-GS-004 |

### 3.1.4 Responsive behavior

- **Desktop 1440×900 — VERIFIED:** inline navigation; three mega-menu disclosures; Log In and Start for free at right; full-width dropdown panels.
- **Tablet 768×1024 — PARTIALLY VERIFIED:** hamburger launcher replaces inline primary navigation while Log In and Start for free remain visible in the closed header; opening the launcher produces a full-screen menu. Exact breakpoints remain TO CAPTURE.
- **Mobile 390×844 — VERIFIED:** closed header contains logo and hamburger only. The open state is a full-screen panel with Product, Pricing, Solutions, Resources and Enterprise; Log In and Start for free are pinned near the bottom.
- **Mobile submenus — VERIFIED:** Product, Solutions and Resources replace the first-level list with their submenu; `Back` returns to the first level and `Close` dismisses the panel.

### 3.1.5 Relationship model

```text
Product → task/product groups → product or feature pages → product discovery
Pricing → pricing page → pricing family → commercial evaluation
Solutions → use case / size / role / industry → solution pages → problem/audience discovery
Resources → education / free utility / platform / company → resource and utility pages → learn/prove/try
Enterprise → enterprise subdomain → enterprise family → high-complexity evaluation
Log In → login entry → authenticated product environment → existing-user access
Start for free → signup entry → trial/onboarding family → new-user conversion
```

---

# 4. PRODUCT MEGA MENU

**Status:** `PARTIALLY VERIFIED`

**Evidence:** EVI-GS-002, EVI-GS-005, EVI-GS-007, EVI-GS-008.

The desktop panel renders four text columns plus one promotional module. No per-item descriptions or per-item icons were observed in the rendered menu. The promotional module contains a dedicated visual. All ordinary links open in the current tab; the promotional link exposes `target=_blank`.

| ID | Group | Label | Description | URL | Destination type | Icon / visual | Relationship | User intent |
|---|---|---|---|---|---|---|---|---|
| PM-01 | Get started | Semrush One | — | https://www.semrush.com/one/ | Platform/product landing | None observed | Platform family | Evaluate unified platform |
| PM-02 | Get started | Enterprise | — | https://www.semrush.com/enterprise/ | Enterprise landing | None observed | Enterprise product family | Evaluate enterprise offering |
| PM-03 | Get started | Semrush MCP | — | https://www.semrush.com/mcp/ | Product/integration landing | None observed | MCP / integration family | Connect Semrush data to AI tools |
| PM-04 | Get started | Semrush API | — | https://developer.semrush.com/api/ | Developer documentation portal | None observed | API / developer family | Programmatic access |
| PM-05 | Get started | Our data | — | https://www.semrush.com/stats/ | Data/trust page | None observed | Data authority / trust | Assess dataset scale |
| PM-06 | Get started | Book a demo | — | https://www.semrush.com/kb/request-demo/ | Demo-request information page | None observed | Sales conversion | Begin assisted evaluation |
| PM-07 | Discover | Keyword Research | — | https://www.semrush.com/features/keyword-research/ | Feature landing | None observed | Research feature family | Discover keyword opportunities |
| PM-08 | Discover | Competitor Analysis | — | https://www.semrush.com/features/competitor-analysis/ | Feature landing | None observed | Competitive research family | Investigate competitors |
| PM-09 | Discover | AI Visibility | — | https://www.semrush.com/features/ai-visibility/ | Feature landing | None observed | AI visibility family | Measure AI-answer presence |
| PM-10 | Discover | Prompt Research | — | https://www.semrush.com/features/prompt-research/ | Feature landing | None observed | AI/prompt research family | Research prompts |
| PM-11 | Discover | Local SEO | — | https://www.semrush.com/features/local-seo/ | Feature landing | None observed | Local SEO family | Improve local visibility |
| PM-12 | Discover | Market Analysis | — | https://www.semrush.com/features/market-analysis/ | Feature landing | None observed | Market intelligence family | Understand market and traffic |
| PM-13 | Create and optimize | Content Creation | — | https://www.semrush.com/features/content-marketing/ | Feature landing | None observed | Content family | Create and optimize content |
| PM-14 | Create and optimize | Technical Site Health | — | https://www.semrush.com/features/site-audit/ | Feature landing | None observed | Technical SEO family | Diagnose site health |
| PM-15 | Create and optimize | Digital PR | — | https://www.semrush.com/features/digital-pr/ | Feature landing | None observed | Digital PR family | Build earned authority |
| PM-16 | Track | Rank Tracking | — | https://www.semrush.com/features/rank-tracking/ | Feature landing | None observed | Tracking family | Monitor rankings |
| PM-17 | Track | Marketing Reports | — | https://www.semrush.com/features/reports/ | Feature landing | None observed | Reporting family | Consolidate performance reporting |
| PM-18 | Track | AI Brand Sentiment | — | https://www.semrush.com/features/brand-sentiment/ | Feature landing | None observed | AI visibility / sentiment family | Monitor AI brand sentiment |
| PM-19 | Track | Backlink Analysis | — | https://www.semrush.com/features/backlink-analysis/ | Feature landing | None observed | Backlink feature family | Analyze authority and links |
| PM-20 | Track | See all features | — | https://www.semrush.com/features/ | Feature index | Arrow at label end | Features master family | Browse complete feature catalog |
| PM-21 | Promotional module | Connect Semrush MCP to AI | Short positioning about using Semrush datasets inside AI assistants | https://www.semrush.com/signup/?src=header_promo&redirect_to=%2Fmcp%2F&trial=force | Signup / MCP conversion | Large AI-assistant visual | MCP → signup/trial | Activate MCP access |

### 4.1 Interaction and relationship behavior

- Product is a disclosure button, not a destination link.
- Click or Enter opens the menu; clicking the active trigger or pressing Escape closes it.
- Tab enters the menu links. Exact per-link focus sequence beyond the first item was not exhaustively tested.
- Opening Solutions or Resources replaces the Product panel.
- On mobile/tablet, Product opens as a drill-in submenu with Back and Close controls.
- Individual pointer-hover states: `TO CAPTURE`.
- Exact open/close motion timing and easing: `TO CAPTURE`.
- Relationship chain:

```text
Product
→ Get started / Discover / Create and optimize / Track
→ platform, feature, data, API or sales page
→ corresponding product/feature family
→ evaluate, research, execute or monitor
```

---

# 5. SOLUTIONS MEGA MENU

**Status:** `PARTIALLY VERIFIED`

**Evidence:** EVI-GS-003, EVI-GS-005, EVI-GS-007, EVI-GS-008.

The desktop panel renders four text columns plus one Semrush One promotional module. No per-item icons or descriptions were observed for ordinary links.

| ID | Group | Label | URL | Destination | Audience / intent | Relationship to products/features | Interaction state |
|---|---|---|---|---|---|---|---|
| SM-01 | Use cases | Grow search visibility | https://www.semrush.com/solutions/search-visibility/ | Use-case landing | Improve organic discovery | Maps to SEO, keyword, technical and tracking capabilities | Focusable link in open menu |
| SM-02 | Use cases | Get recommended by AI | https://www.semrush.com/solutions/ai-visibility/ | Use-case landing | Improve AI-answer visibility | Maps to AI Visibility and prompt/sentiment capabilities | Focusable link in open menu |
| SM-03 | Use cases | Research your market | https://www.semrush.com/solutions/analyze-competitors-market/ | Use-case landing | Competitive and market research | Maps to competitor and market analysis | Focusable link in open menu |
| SM-04 | Use cases | Connect with local customers | https://www.semrush.com/solutions/local-search/ | Use-case landing | Local-customer acquisition | Maps to Local SEO | Focusable link in open menu |
| SM-05 | Use cases | Create engaging content | https://www.semrush.com/solutions/create-content/ | Use-case landing | Content production and optimization | Maps to Content Creation | Focusable link in open menu |
| SM-06 | Use cases | Fix technical site issues | https://www.semrush.com/solutions/technical-seo/ | Use-case landing | Resolve technical SEO problems | Maps to Technical Site Health / Site Audit | Focusable link in open menu |
| SM-07 | Use cases | Grow off-site authority | https://www.semrush.com/solutions/off-site-visibility/ | Use-case landing | Improve authority outside owned site | Maps to backlinks and Digital PR | Focusable link in open menu |
| SM-08 | Use cases | Build client strategies | https://www.semrush.com/solutions/client-strategy/ | Use-case landing | Agency/client planning | Maps to research, reporting and agency workflows | Focusable link in open menu |
| SM-09 | Use cases | See all use cases | https://www.semrush.com/solutions/use-cases/ | Use-case index | Browse all problem-led paths | Solutions master family | Focusable link; arrow visual |
| SM-10 | By size | Enterprise | https://enterprise.semrush.com/ | Enterprise subdomain landing | Large organizations | Enterprise platform family | Focusable link in open menu |
| SM-11 | By size | Mid-market | https://www.semrush.com/solutions/mid-market/ | Audience landing | Mid-market organizations | Audience-led capability bundle | Focusable link in open menu |
| SM-12 | By size | Small teams | https://www.semrush.com/solutions/small-teams/ | Audience landing | Small teams | Audience-led capability bundle | Focusable link in open menu |
| SM-13 | By size | Solopreneurs | https://www.semrush.com/solutions/solopreneurs/ | Audience landing | Individual business operators | Audience-led capability bundle | Focusable link in open menu |
| SM-14 | By size | Freelancers | https://www.semrush.com/solutions/freelancers/ | Audience landing | Freelance practitioners | Audience-led capability bundle | Focusable link in open menu |
| SM-15 | By size | Agencies | https://www.semrush.com/solutions/agencies/ | Audience landing | Agencies | Agency product/workflow family | Focusable link in open menu |
| SM-16 | By role | Business Owner | https://www.semrush.com/solutions/business-owners/ | Role landing | Business owners | Role-led capability bundle | Focusable link in open menu |
| SM-17 | By role | Agency Owner | https://www.semrush.com/solutions/agencies/ | Role/audience landing | Agency owners | Same destination as Agencies | Focusable link in open menu |
| SM-18 | By role | SEO Specialist | https://www.semrush.com/solutions/seo-professionals/ | Role landing | SEO professionals | SEO feature bundle | Focusable link in open menu |
| SM-19 | By role | Content Marketer | https://www.semrush.com/solutions/content-marketers/ | Role landing | Content marketers | Content and research features | Focusable link in open menu |
| SM-20 | By role | Full-Stack Growth Marketers | https://www.semrush.com/solutions/growth-marketers/ | Role landing | Growth marketers | Cross-product capability bundle | Focusable link in open menu |
| SM-21 | By industry | Professional Services | https://www.semrush.com/solutions/professional-services/ | Industry landing | Professional-services firms | Industry-led solution bundle | Focusable link in open menu |
| SM-22 | By industry | Retail & Ecommerce | https://www.semrush.com/solutions/ecommerce/ | Industry landing | Retail and ecommerce | Industry-led solution bundle | Focusable link in open menu |
| SM-23 | By industry | Agencies | https://www.semrush.com/solutions/agencies/ | Audience/industry landing | Agencies | Same destination as size and agency-owner entries | Focusable link in open menu |
| SM-24 | By industry | SaaS & B2B Tech | https://www.semrush.com/solutions/saas/ | Industry landing | SaaS and B2B technology | Industry-led solution bundle | Focusable link in open menu |
| SM-25 | By industry | Healthcare | https://www.semrush.com/solutions/healthcare/ | Industry landing | Healthcare organizations | Industry-led solution bundle | Focusable link in open menu |
| SM-26 | By industry | Local Business | https://www.semrush.com/solutions/local-business/ | Industry/audience landing | Local businesses | Local SEO and visibility capabilities | Focusable link in open menu |
| SM-27 | By industry | See all industries | https://www.semrush.com/solutions/industry/ | Industry index | Browse all industry paths | Solutions industry family | Focusable link; arrow visual |
| SM-28 | Promotional module | Try Semrush One for free | https://www.semrush.com/one/?utm_source=semrush&utm_medium=header | Product landing / trial entry | Evaluate unified SEO and AI visibility platform | Semrush One platform family | Visual card; opens with `target=_blank` |

### 5.1 Interaction and relationship behavior

- Solutions is a disclosure button and has no direct destination URL.
- Click or Enter opens; Escape or activating the trigger again closes.
- Selecting another mega-menu trigger replaces the panel.
- Mobile/tablet use a drill-in submenu with Back and Close.
- Ordinary links expose no per-item visual icons; the promotional module has a large Semrush One visual.
- Pointer-hover styling and transition timing: `TO CAPTURE`.

```text
Solutions
→ Use cases / By size / By role / By industry
→ solution or audience page
→ related product and feature bundle
→ problem-led or audience-led evaluation
```

---

# 6. RESOURCES MEGA MENU

**Status:** `PARTIALLY VERIFIED`

**Evidence:** EVI-GS-004, EVI-GS-005, EVI-GS-007, EVI-GS-008.

The desktop panel renders four text columns plus one event promotional module. No per-item icons or descriptions were observed for ordinary links.

| ID | Group | Label | URL | Destination type | User intent | Conversion / education role | Relationship |
|---|---|---|---|---|---|---|---|
| RM-01 | Grow with Semrush | Blog | https://www.semrush.com/blog/ | Editorial hub | Learn tactics and trends | Education / authority | Resource family |
| RM-02 | Grow with Semrush | Knowledge Base | https://www.semrush.com/kb/ | Support documentation | Learn how to use products | Support / activation | Product support family |
| RM-03 | Grow with Semrush | Academy | https://www.semrush.com/academy/ | Education hub | Build skills | Education / certification | Academy family |
| RM-04 | Grow with Semrush | Success Stories | https://www.semrush.com/company/stories/ | Customer-proof hub | Evaluate outcomes | Proof / consideration | Company + proof family |
| RM-05 | Grow with Semrush | AI Visibility Index | https://ai-visibility-index.semrush.com/ | Data/index subdomain | Explore AI visibility benchmarks | Data utility / proof | AI visibility family |
| RM-06 | Grow with Semrush | Webinars | https://www.semrush.com/academy/webinars/ | Webinar hub | Attend educational sessions | Education / lead nurture | Academy family |
| RM-07 | Grow with Semrush | News | https://www.semrush.com/news/ | News hub | Follow company/product updates | Authority / recency | News family |
| RM-08 | Explore Free Tools | AI Visibility Checker | https://www.semrush.com/free-tools/ai-search-visibility-checker/ | Free tool | Check AI-search visibility | Free utility / product entry | AI visibility family |
| RM-09 | Explore Free Tools | SEO Checker | https://www.semrush.com/siteaudit/ | Tool entry | Check technical/SEO health | Free utility / product entry | Site Audit family |
| RM-10 | Explore Free Tools | Website Traffic Checker | https://www.semrush.com/website/ | Tool entry | Estimate website traffic | Free utility / product entry | Traffic/market family |
| RM-11 | Explore Free Tools | Keyword Tool | https://www.semrush.com/analytics/keywordmagic/ | Tool entry | Research keywords | Free utility / product entry | Keyword research family |
| RM-12 | Explore Free Tools | Backlink Checker | https://www.semrush.com/analytics/backlinks/ | Tool entry | Inspect backlinks | Free utility / product entry | Backlink family |
| RM-13 | Explore Free Tools | Top Websites by Traffic | https://www.semrush.com/trending-websites/global/all/ | Data ranking experience | Browse leading websites | Free data utility | Traffic/market family |
| RM-14 | Explore Free Tools | Explore Other Free Tools | https://www.semrush.com/free-tools/ | Free-tools index | Browse all free utilities | Acquisition index | Free utility family |
| RM-15 | Platform | Our Data | https://www.semrush.com/stats/ | Data/trust page | Assess dataset scale | Trust / consideration | Data authority family |
| RM-16 | Platform | Integrations | https://www.semrush.com/company/partner-integrations/ | Integration index | Connect other platforms | Ecosystem / activation | Integration family |
| RM-17 | Platform | App Center | https://www.semrush.com/apps/ | App marketplace | Extend platform capability | Ecosystem / conversion | App Center family |
| RM-18 | About Semrush | About Us | https://www.semrush.com/company/ | Company page | Understand the company | Trust | Company family |
| RM-19 | About Semrush | Careers | https://careers.semrush.com/?utm_source=Main+website | Careers subdomain | Explore employment | Recruitment | Company family |
| RM-20 | About Semrush | Stats and Facts | https://www.semrush.com/stats/ | Data/trust page | Validate scale and credibility | Trust / proof | Same destination as Our Data |
| RM-21 | About Semrush | Affiliate Program | https://www.semrush.com/lp/affiliate-program/en/ | Affiliate landing | Explore partnership/commission path | Partner acquisition | Partner family |
| RM-22 | About Semrush | Contact Us | https://www.semrush.com/company/contacts/ | Contact index | Find contact route | Support / sales routing | Company/contact family |
| RM-23 | Promotional module | Get your ticket now | https://www.spotlightconf.com/register?utm_source=semrush&utm_medium=resourceslink&utm_campaign=launch_promo&utm_content=spotlight_2026 | External event registration | Attend Semrush Spotlight | Event conversion | Event/campaign family |

### 6.1 Promotional module

- Large Spotlight event visual.
- Short event positioning, date `October 13, 2026`, and location `London, UK` were visible.
- Link exposes `target=_blank` and leaves the Semrush domain.
- Registration was not opened or submitted.

### 6.2 Interaction and relationship behavior

- Resources is a disclosure button and has no direct destination URL.
- Click or Enter opens; Escape or activating the trigger again closes.
- Tab enters the first link (`Blog`) with a visible focus outline.
- Mobile/tablet use a drill-in submenu with Back and Close.
- Individual pointer-hover styling and animation timing: `TO CAPTURE`.

```text
Resources
→ Grow / Free Tools / Platform / About
→ resource, utility, ecosystem or company destination
→ resource/product/trust family
→ learn, prove, try, extend or contact
```

---

# 7. HOMEPAGE — DETAILED REFERENCE INVENTORY

**Reference:** https://www.semrush.com/  
**Status:** `DETAILED REFERENCE INVENTORY — PARTIALLY VERIFIED`

All eleven public homepage sections are documented below at content, UI, media, CTA, interaction, state, motion, responsive, relationship and evidence levels. Unexecuted submission states and unmeasured behaviors remain explicitly marked `TO CAPTURE` or `UNKNOWN`.

**Current measured coverage:** 11 section records; 24 known CTA destinations; 15 verified interactions; 33 section/viewport responsive states (11 sections × desktop/tablet/mobile); 9 motion behavior records; 33 homepage `TO CAPTURE` items.

---

## HP-01 — Hero / Primary Entry

**Order:** 01 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-001

### Purpose / intent / business function

- **Purpose:** State the platform outcome and give the visitor an immediate domain-led entry.
- **User intent:** Evaluate their own website visibility without first selecting a product.
- **Business function:** Convert anonymous homepage interest into a personalized analysis/onboarding path.

### Content

- **Eyebrow:** None observed.
- **Heading:** “Be found and chosen everywhere search happens”.
- **Supporting copy:** Positions Semrush as a platform for measuring and growing visibility across search results and AI answers.
- **Input label presented visually/accessibly:** “Enter your website”.
- **Country default:** `US`; selector exposes 135 rendered country/database options.
- **CTA:** “Get insights”.
- **Metrics / badges / disclaimers:** None observed.

### UI / visual hierarchy

- Centered H1 followed by supporting copy, then the conversion control.
- Desktop/tablet control is one horizontal unit: domain combobox + country disclosure + CTA.
- Mobile keeps the input and country selector in one row and moves the CTA to a full-width row below.
- Input is a text `combobox` with `aria-autocomplete=list`, `aria-controls=suggest-list`, `autocomplete=off` and no native `required` or `pattern` attribute.
- CTA is a `button`; it exposes no static destination URL.

### Media

- No standalone image, video or product screenshot was observed in the Hero.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Get insights | `UNKNOWN — no static href` | Domain-analysis/result flow | Internal behavior inferred; not executed | Activation / discovery |

### Interaction / states

- **Default:** empty domain field, US selected, CTA enabled.
- **Keyboard:** focus order is input → country selector → Get insights.
- **Focus:** CTA received a visible blue focus ring.
- **Country selector:** click opens a listbox; a second trigger click closes it.
- **Input behavior:** rendered as a suggestion-capable combobox, but suggestions were not triggered.
- **Hover:** TO CAPTURE.
- **Validation / invalid domain / loading / success / error:** TO CAPTURE; no data was entered and no action was submitted.

### Motion / responsive

- No reliable Hero entrance/exit motion was verified.
- **Desktop 1440×900:** wide centered heading; 594px horizontal control.
- **Tablet 768×1024:** horizontal 594px control retained.
- **Mobile 390×844:** control stacks into input/select row plus CTA; no Hero content was hidden or reordered beyond CTA stacking.
- Exact breakpoints: TO CAPTURE.

### Relationships

- **Related product/features:** Cross-platform visibility entry; exact result product UNKNOWN.
- **Related solution/audience:** Broad new visitor with an owned website/domain.
- **Related pricing/resource:** None directly exposed.
- **Next journey step:** Domain result or onboarding route — UNKNOWN because submission was prohibited.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## 10A.4 Exact logical section order by page

Each numbered item is a logical section in current top-to-bottom order. Parenthetical text records the main UI/media/CTA relationship without reproducing long marketing copy.

### PF-01 — Semrush One — 7 sections

1. **Win in search, era after era** — hero; SEO + AI positioning; looping video; `Try free for 7 days` → `https://en.semrush.com/signup/?src=lp-semrush-one-en&custom=ai-seo&trial=force&domain=off&redirect_to=%2fai-seo%2foverview%2f`.
2. **Built for how people search today** — three value cards: own every result, act with trusted data, receive next-step recommendations.
3. **Platform scale** — 28M marketers, 35% of Fortune 500, 21 suite awards.
4. **The only tool you need to win in modern search** — combined keyword, backlink and AI-prompt data; UI/icon grid; data/freshness claims.
5. **AI covered. SEO covered. Total visibility.** — four capability cards: visibility tracking, prompt monitoring, competitive research, website optimization.
6. **Win every search with Semrush One** — repeated trial CTA.
7. **Awards / category proof** — SEO, competitive intelligence, software and AEO recognition strip.

### PF-02 — Keyword Research — 18 sections

1. Hero: **Find keywords worth winning**; 2. Brand logos; 3. Promise: discover valuable search terms; 4. Three-part overview: audience searches / competition / plan; 5. Customer quote; 6. **Find valuable keywords in any niche** → Keyword Magic signup redirect; 7. **Unlock keyword gaps** → Keyword Gap signup redirect; 8. **Spot optimization opportunities** → Organic Research signup redirect; 9. **Track keyword rankings** → Position Tracking signup redirect; 10. Metrics: 28B+ keywords / 808M domains / 142 databases / monthly refresh / exports; 11. Seven-tool gallery; 12. Reviews carousel; 13. Rating strip; 14. Platform-scale stats; 15. Three customer stories; 16. Three education resources; 17. FAQ accordion; 18. Final conversion CTA.

### PF-03 — Competitor Analysis — 20 sections

1. Hero: **See the strategy behind any competitor’s growth**; 2. Brand logos; 3. Promise: information competitors do not want exposed; 4. Overview: snapshot / channels / AI positioning; 5. Customer quote; 6. Capability intro; 7. **Capture keywords driving rival traffic** → Organic Research; 8. **See where AI leaves you out** → AI competitor research; 9. **Find audiences competitors are winning** → Market Overview; 10. **Never miss a competitor’s next move** → Competitor Monitoring; 11. Metrics: clickstream / AI channel / 36M+ brands / 808M+ domains / history; 12. Four-tool gallery; 13. Reviews; 14. Ratings; 15. Platform stats; 16. Three stories; 17. Three guides; 18. Enterprise competitive intelligence; 19. FAQ; 20. Final conversion CTA.

### PF-04 — AI Visibility — 21 sections

1. Hero: **Own how your brand shows up in AI answers**; 2. Brand logos; 3. Promise: be recommended by AI platforms; 4. Overview: measure / benchmark / grow share of voice; 5. Customer quote; 6. **Track AI visibility**; 7. **See what LLMs say about you**; 8. **Conduct prompt research**; 9. **Run AI search health audits**; 10. **Analyze competitors’ AI visibility**; 11. **Track AI visibility and SEO in one place**; 12. **Automate AI visibility reporting**; 13. Reporting/refresh/export metrics; 14. Five-tool gallery; 15. Reviews; 16. Ratings; 17. Platform stats; 18. Three AI-visibility stories; 19. Three education resources; 20. Enterprise AI Optimization; 21. Final conversion CTA. No FAQ section was observed on the current public render.

### PF-05 — Prompt Research — 20 sections

1. Hero: **Know what people ask AI before your competitors do**; 2. Brand logos; 3. Promise: 17 years of intelligence rebuilt for AI search; 4. Overview: topics / valuable prompts / monitoring; 5. Customer quote; 6. Capability intro; 7. **Check AI topic volume and intent**; 8. **Benchmark competitors**; 9. **Analyze visibility across LLMs and markets**; 10. **Monitor AI brand sentiment**; 11. Metrics: 28B+ keywords / 317M+ prompts / 42 databases / 36M+ brands / refresh cadence; 12. Five-tool AI gallery; 13. Reviews; 14. Ratings; 15. Platform stats; 16. Three stories; 17. Three guides; 18. Enterprise prompt-data upsell; 19. FAQ; 20. Final trial/demo CTA.

### PF-06 — Local SEO — 21 sections

1. Hero: **Get found by customers in your area**; 2. Brand logos; 3. Promise: more visibility, calls and customers; 4. Three-step workflow: listings / GBP automation / local-rank gaps; 5. Customer quote; 6. Workflow intro; 7. **GBP AI Agent** → `/gbp-ai-agent/start`; 8. **Listing Management** → `/listings-management/`; 9. **Review Generation and Management** → `/review-management/`; 10. **Map Rank Tracker** → rendered `#`; 11. **Brand Performance** → rendered `#`; 12. **Position Tracking** → rendered `#`; 13. Surface coverage strip: LLMs / Maps / Google + AI Overviews / GBP + directories / mobile + desktop; 14. Eight-tool gallery; 15. Reviews; 16. Ratings; 17. Platform stats; 18. Three local stories; 19. Three guides; 20. FAQ; 21. Final Local-toolkit trial CTA.

### PF-07 — Market Analysis — 19 sections

1. Hero: **See the full market landscape before your next move**; 2. Brand logos; 3. Promise: detect shifts from a 200M+ panel across 190+ countries; 4. Overview: channels / markets / fast-growing pages; 5. Customer quote; 6. Capability intro; 7. **Monitor competitor activity** → Competitor Monitoring; 8. **Spot emerging trends** → Traffic Overview; 9. **Map market position** → Market Overview; 10. **Know competitor audiences** → Market Overview; 11. Reporting/alert/export metrics; 12. Six-tool gallery; 13. Reviews; 14. Ratings; 15. Platform stats; 16. Three stories; 17. Three guides; 18. FAQ; 19. Final trial CTA.

### PF-08 — Content Creation — 21 sections

1. Hero: **Create content for more channels with less effort**; 2. Brand logos; 3. Promise: end-to-end content pipeline; 4. Overview: generate / optimize / repurpose; 5. Customer quote; 6. Capability intro; 7. **Optimize search and AI with one workflow**; 8. **Find high-potential topics**; 9. **Scale without losing brand voice**; 10. **Publish directly across channels**; 11. **Transform keywords to briefs**; 12. Data/integration metrics; 13. Five-tool gallery; 14. Reviews; 15. Ratings; 16. Platform stats; 17. Three content stories; 18. Three guides; 19. Enterprise content scale; 20. FAQ; 21. Final Content-toolkit trial CTA.

### PF-09 — Technical Site Health / Site Audit — 18 sections

1. Hero: **Find the technical issues hurting your site’s visibility**; 2. Brand logos; 3. Promise: see visibility blockers; 4. Overview: health / severity / thematic issues; 5. Customer quote; 6. Capability intro; 7. **Know site health at a glance** → Site Audit signup; 8. **Fix issues keeping you out of AI answers** → Site Audit signup; 9. **Tackle every fix with confidence** → Site Audit signup; 10. **Dig into weak areas** → Site Audit signup; 11. Reporting/alert/export metrics; 12. Reviews; 13. Ratings; 14. Platform stats; 15. Three technical-SEO guides; 16. Enterprise Site Intelligence; 17. FAQ; 18. Final trial/demo CTA.

### PF-10 — Digital PR — 18 sections

1. Hero: **Get media coverage that drives AI visibility**; 2. Brand logos; 3. Promise: secure mentions in sources that influence AI; 4. Three-step workflow: trusted media / outreach / impact; 5. Capability intro; 6. **See which sources AI trusts**; 7. **Find the right journalist**; 8. **Send pitches journalists act on**; 9. **Tie coverage to campaigns**; 10. **Turn competitor intelligence into outreach**; 11. Metrics: 600K+ journalists / authenticated-domain outreach / mention monitoring / email engagement / AI-cited lists; 12. Four-tool gallery; 13. Reviews; 14. Ratings; 15. Platform stats; 16. Three PR guides; 17. FAQ; 18. Final trial CTA.

### PF-11 — Rank Tracking — 16 sections

1. Hero: **Track your place in the search results**; 2. Brand logos; 3. Promise: diagnose visibility loss; 4. Three-step setup: mode / competitors / daily reports; 5. Capability intro; 6. **See how you show up, not only rank**; 7. **Never miss visibility changes**; 8. **Prioritize high-ROI keywords**; 9. Reporting/alert/export metrics; 10. Reviews; 11. Ratings; 12. Platform stats; 13. Three ranking stories; 14. Three guides; 15. FAQ; 16. Final Position Tracking trial CTA.

### PF-12 — Marketing Reports — 16 sections

1. Hero: **Create custom marketing reports that prove your value**; 2. Brand logos; 3. Promise: pull all needed data together; 4. Three-step workflow: template / data + branding / delivery; 5. Capability intro; 6. **Build white-labeled reports** → My Reports; 7. **Generate an AI summary** → My Reports; 8. **Schedule and send automatically** → My Reports; 9. **Connect cross-channel data** → My Reports; 10. Reporting metrics: shareable dashboards / refresh cadence / white label / 20+ integrations / benchmarks; 11. Reviews; 12. Ratings; 13. Platform stats; 14. Three reporting guides; 15. FAQ; 16. Final CTA. The rendered final `Start free trial` URL redirects to Position Tracking and is flagged as an anomaly.

### PF-13 — AI Brand Sentiment — 20 sections

1. Hero: **Know and control your brand’s AI narrative**; 2. Brand logos; 3. Promise: AI is already describing the brand; 4. Overview: current description / competitor benchmark / share-of-voice trend; 5. Customer quote; 6. Capability intro; 7. **Monitor brand narrative**; 8. **See strengths and areas for improvement**; 9. **Measure mentions across key areas**; 10. **Get strategy recommendations**; 11. **Discover prompts driving sentiment**; 12. Metrics: 68K locations / 317M+ prompts / 42 databases / 36M+ brands / weekly-monthly refresh; 13. Reviews; 14. Ratings; 15. Platform stats; 16. Three AI stories with same-page `#` destinations; 17. Three guides; 18. Enterprise sentiment analysis; 19. FAQ; 20. Final trial CTA.

### PF-14 — Backlink Analysis — 17 sections

1. Hero: **Grow your domain’s authority with backlinks**; 2. Brand logos; 3. Promise: link intelligence for ranking and AI visibility; 4. Three-step overview: profile / gaps / AI-trusted outreach; 5. Customer quote; 6. **Complete backlink analysis** → Backlinks signup; 7. **Backlink gaps** → Backlink Gap signup; 8. **AI-powered PR workflows** → Media Lists signup; 9. **Brand mention monitoring** → Media Monitoring signup; 10. Metrics: 28B+ keywords / 289M+ prompts / 142 databases / 808M domains / 43T+ backlinks; 11. Six-tool gallery; 12. Reviews; 13. Ratings; 14. Platform stats; 15. Three link-building guides; 16. FAQ; 17. Final trial CTA.

### PF-15 — Advertising Toolkit — 11 sections

1. Hero: **Run more effective ad campaigns**; 2. **See the Advertising Toolkit in action** embedded/demo area; 3. **End-to-end campaigns constantly optimized for ROI**; 4. **Meet your Ads AI Agent**; 5. **Get exclusive ad intelligence** → `https://www.semrush.com/analytics/adwords/positions`; 6. **Fast and simple ad creation**; 7. **Run ads effortlessly**; 8. **Optimize ad performance in one click**; 9. Testimonial carousel; 10. FAQ; 11. Final targeted-ads CTA. The public page exposes public links to `/advertising/ads-ai-agent` and `/advertising/ads-launch-assistant`; most demo/actions are buttons without an exposed URL.

### PF-16 — Social Toolkit — 6 sections

1. Hero: **Social Media Management as Easy as Click, Click**; 2. Three-part product value: competitor analysis / publishing / analytics; 3. **Unlock our most advanced plan** — social management + influencer discovery + listening; `Try for free` → `https://www.semrush.com/influencer-analytics/#social_business_open`; 4. Role switcher: Business Owner / Digital Marketer / Social Media Manager / Digital Agency; 5. Role-specific time/value proposition; 6. Testimonials and final Get started action. Button-only destinations remain TO CAPTURE.

### PF-17 — Semrush MCP — 10 sections

1. Hero: **Live Semrush data in your AI assistants**; 2. **Zero code. One setup. All your Semrush data**; 3. Platform setup guides; 4. **One prompt. Complete workflows**; 5. Workflow: **Spot your next search opportunity**; 6. Workflow: **Refresh and expand your content**; 7. Workflow: **Report fast. Drive decisions**; 8. Data-scale proof: **The world’s deepest search data**; 9. FAQ covering platform setup, plan, prompts, data and support; 10. Final **Bring Semrush data where decisions are made** CTA. Connect/Copy/Try-prompt controls are buttons and were not activated.

---

## HP-02 — Semrush One / Search + AI Visibility

**Order:** 02 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-002

### Purpose / intent / business function

- **Purpose:** Introduce Semrush One as the combined SEO and AI-visibility platform.
- **User intent:** Understand whether one product covers traditional search and AI discovery.
- **Business function:** Route platform-level interest into a free signup/trial flow.

### Content / UI / media

- **Eyebrow:** None observed.
- **Heading:** “Get found in search and AI answers.”
- **Body summary:** Trusted SEO and competitive data support visibility across search, AI answers and customer decisions.
- Desktop shares a two-card row with HP-03; the initially expanded card is wider.
- Card contains heading, looping muted product-interface video, body copy and CTA.
- Video: `sem_one.mp4`; poster: `sem_one.webp`; no controls.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Try for free | https://www.semrush.com/signup/?src=main_promo&custom=ai-seo&redirect_to=%2Fseo%2F&trial=force | Signup/trial with SEO redirect | Internal | Conversion |

### Interaction / states / motion

- **Desktop default/active:** expanded initially; video visible and playing while the card is active.
- **Collapsed:** width contracts; video becomes hidden and pauses; heading, summary and CTA remain available.
- Selecting HP-03 makes this card collapsed; selecting this card restores expansion.
- Only one of HP-02/HP-03 is expanded on desktop.
- **Transition:** card width, `0.4s`, `ease-in-out`.
- Hover, entrance and exit motion: TO CAPTURE.

### Responsive

- **Desktop:** paired horizontal layout; expanded card approximately twice the width of collapsed card.
- **Tablet / Mobile:** cards stack vertically at equal full container width; both videos and complete content remain visible; desktop expansion switching no longer changes the layout.
- No elements were hidden on mobile beyond removal of the desktop width-switch behavior.

### Relationships

- **Product:** Semrush One.
- **Features/solutions:** SEO authority + AI visibility.
- **Audience:** Marketers wanting a unified platform.
- **Pricing:** Trial relationship via signup; plan details not inspected.
- **Next journey step:** Signup → SEO product route.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-03 — AI Assistant / Data Connection

**Order:** 03 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-003

### Purpose / intent / business function

- **Purpose:** Show Semrush data operating inside conversational AI workflows.
- **User intent:** Connect live SEO, market and brand-visibility data to an AI assistant.
- **Business function:** Convert integration interest into an MCP-oriented signup path.

### Content / UI / media

- **Heading:** “Ask AI. Get Semrush data.”
- **Body summary:** Users can query live Semrush data in chat to generate workflows and strategies.
- Shares the two-card promotional layout with HP-02.
- Video: `sem_mcp.mp4`; poster: `sem_mcp.webp`; muted, looped and without controls.
- No eyebrow, badge, metric or disclaimer observed.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Connect your data | https://www.semrush.com/signup/?src=main_promo&redirect_to=%2Fmcp%2F&trial=force | Signup/trial with MCP redirect | Internal | Conversion / activation |

### Interaction / states / motion

- **Desktop default:** collapsed relative to HP-02; video hidden and paused.
- **Expanded:** selecting the card increases its width, exposes/plays the video and collapses HP-02.
- **Transition:** width, `0.4s`, `ease-in-out`.
- Heading, body and CTA remain present in both desktop width states.
- Hover, entrance and exit behavior: TO CAPTURE.

### Responsive

- **Desktop:** second card in the horizontal pair; active state controls width and video playback.
- **Tablet / Mobile:** stacked after HP-02 at equal full width; video and complete content visible; click no longer changes card size.

### Relationships

- **Product:** Semrush MCP.
- **Features/solutions:** Live Semrush data in AI assistants; integration workflow.
- **Audience:** Marketers and operators using conversational AI.
- **Pricing:** Trial relationship; pricing not inspected.
- **Next journey step:** Signup → MCP route.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-04 — Customer / Brand Logo Proof

**Order:** 04 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-004

### Purpose / intent / business function

- **Purpose:** Supply recognizable customer proof before the enterprise and solution sections.
- **User intent:** Validate adoption by established brands.
- **Business function:** Reduce trust friction without requiring a CTA.

### Content / UI / media

- No visible heading, body copy, CTA, metric or disclaimer.
- Horizontal logo-marquee container with twelve unique SVG brand marks: Shopify, Decathlon, Booking.com, P&G, Samsung, FedEx, Amazon, General Electric, Airbnb, Netflix, TikTok and Dropbox.
- The DOM contains two repeated logo groups to support continuous-track behavior.

### Interaction / states / motion

- No direct user interaction or destination link was exposed.
- Desktop sample remained static during the observation interval.
- Tablet and mobile showed continuous leftward logo movement while visible.
- Exact controller, speed curve, loop seam, pause behavior and reduced-motion handling: TO CAPTURE.

### Responsive

- **Desktop:** large horizontal row with 100px track height.
- **Tablet:** compact continuous marquee.
- **Mobile:** 32px-high compact moving logo track; content remains a single horizontal line and is clipped by the viewport.

### Relationships

- **Related family:** Customer proof / trust.
- **Related audience:** General prospects and enterprise evaluators.
- **Next journey step:** Continue to HP-05 Enterprise Positioning.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-05 — Enterprise Positioning

**Order:** 05 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-005

### Purpose / intent / business function

- **Purpose:** Present a dedicated high-scale route after general customer proof.
- **User intent:** Assess suitability for multi-market or multi-domain enterprise use.
- **Business function:** Generate assisted-sales/demo demand.

### Content / UI / media

- **Heading:** “Bigger scale. Bigger advantage.”
- **Body summary:** Enterprise visibility across markets and domains.
- Desktop uses a wide two-part card: copy/CTA area plus product/brand video.
- Video source: `enterprise_video.mp4`; poster: `enterprise_poster.webp`; muted, looped, no controls.
- No eyebrow, badge, metric or disclaimer observed.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Book a demo | https://www.semrush.com/enterprise/seo/?utm_source=semrush&utm_medium=main_block | Enterprise SEO landing / demo route | Internal | Enterprise consideration / sales |

### Interaction / states / motion

- CTA is a standard link; destination was not opened.
- Video begins muted looping playback when the section is visible.
- No video controls are exposed.
- Loading failure, fallback, playback boundary, entrance and exit states: TO CAPTURE.

### Responsive

- **Desktop:** copy and media occupy a wide two-column card.
- **Tablet / Mobile:** content changes to a vertical card; video becomes a smaller full-width media block inside the card, followed by the conversion content.
- No enterprise information or CTA was hidden.

### Relationships

- **Product/solution:** Enterprise SEO / enterprise brand visibility.
- **Audience:** Large organizations operating across markets/domains.
- **Pricing:** Custom/assisted sales relationship; pricing not inspected.
- **Next journey step:** Enterprise page → demo path.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-06 — Solutions Collection

**Order:** 06 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-006

### Purpose / intent / business function

- **Purpose:** Expose the nine main solution/toolkit families without forcing immediate navigation.
- **User intent:** Compare outcomes, supporting capabilities and product proof.
- **Business function:** Route product-family interest into targeted signup/trial paths.

### Content / hierarchy

- **Eyebrow:** “SOLUTIONS (9)”.
- **Heading:** “GET SEEN. GET CITED. BE THE ANSWER.”
- Each item contains a family label, outcome heading, expand/minimize trigger, compact image, expanded image, short explanatory copy and CTA.
- No global disclaimer or shared pricing statement was observed.

### Solution item inventory

| ID | Family / outcome | Expanded-copy summary | CTA | Destination | Product visual | Relationship / next step |
|---|---|---|---|---|---|---|
| HP-06A | **Semrush One** — Rank on Google and get recommended by AI | Combines traditional SEO and AI-search visibility | Explore Semrush One | https://www.semrush.com/signup/?src=main_slider&custom=ai-seo&redirect_to=%2Fseo%2F&trial=force | AI-visibility-over-time graph | Semrush One → SEO + AI visibility → signup/trial |
| HP-06B | **SEO** — Build the SEO foundation for brand visibility | Keyword, backlink, ranking, traffic and technical-audit capabilities | Try for free | https://www.semrush.com/signup/?src=main_slider&tk=seo | Site Audit insights | SEO toolkit → search visibility → signup |
| HP-06C | **AI Visibility** — Get LLMs to cite your brand | Prompt-level visibility, AI market share and competitor analysis | Start now | https://www.semrush.com/signup/?src=main_slider&toolkit=ai&trial=force&redirect_to=%2Fai-seo%2Foverview%2F | Competitor market-share and sentiment graph | AI Visibility → AI discovery → signup/trial |
| HP-06D | **Traffic and Market** — See where any website's traffic comes from | Trends, competitor benchmarks and audience insight | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=traffic-and-market&trial=force&redirect_to=%2Fanalytics%2Ftraffic%2F | Traffic-distribution graph | Traffic & Market → market intelligence → signup/trial |
| HP-06E | **Content** — Craft SEO and AI-ready content in minutes | Topic discovery plus AI scoring and real-time optimization | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=content&trial=force&redirect_to=%2Fcontent%2F | Generated articles and ideas | Content toolkit → content creation → signup/trial |
| HP-06F | **Local** — Own your local presence | Business-profile optimization, directories and AI-assisted service | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=local&trial=force&redirect_to=%2Flocal-business%2Fstart%2F | Google Business Profile performance | Local toolkit → local visibility → signup/trial |
| HP-06G | **Advertising** — Make every ad dollar work harder | AI insights, testing and competitor advertising research | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=advertising&trial=force&redirect_to=%2Fadvertising%2F | Advertising campaign interface | Advertising toolkit → paid acquisition → signup/trial |
| HP-06H | **AI PR** — Build AI trust through earned press | LLM-trusted media discovery, pitching and PR-result tracking | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=pr&trial=force&redirect_to=%2Fpr-toolkit%2F | Expert/media search results | AI PR → earned authority → signup/trial |
| HP-06I | **Social** — Manage social all in one place | AI-assisted planning, publishing, monitoring and influencer discovery | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=social&trial=force&redirect_to=%2Fsocial-media%2F | Scheduled posts across platforms | Social toolkit → social management → signup/trial |

All nine CTA destinations are internal Semrush signup routes at the **consideration/conversion** stage. Destination flows were not opened.

### Desktop interaction and states

- **Default/collapsed:** all nine cards initially expose family, outcome, compact product image and `Expand`; description and CTA are hidden.
- **Expanded:** button becomes `Minimize`; description and CTA become visible; the compact image is replaced by the expanded product visual; width grows from approximately 430px to 798px.
- **Collapse:** Minimize returns the card to the compact state.
- **Multiplicity:** opening a second card does **not** close the first; multiple cards can remain expanded simultaneously.
- **Carousel:** Previous/Next move the horizontal track one card; Previous is disabled at the initial position.
- **Active slide:** carousel active state is separate from expanded/collapsed state.
- **Expansion transition:** width, `0.4s`, `ease-in-out`.
- Carousel duration/easing, hover and focus styling: TO CAPTURE.

### Tablet / mobile / touch behavior

- **Tablet:** retains horizontal carousel-style cards.
- **Mobile:** carousel controls are hidden and all nine items become a vertical accordion/list.
- Mobile default height is compact; tapping `Expand` reveals image, description and CTA and changes the label to `Minimize`.
- Multiple mobile items can remain expanded simultaneously.
- Mobile content transition: `max-height`, `0.2s`, `ease-out`.
- Mobile uses tap/click rather than carousel navigation; no content family is removed or reordered.
- Pointer hover, complete keyboard traversal, exact touch target behavior and reduced-motion mode: TO CAPTURE.

### Relationships

- **Products/features:** nine toolkit families shown in the table.
- **Solutions:** search visibility, AI visibility, intelligence, content, local, paid, PR and social outcomes.
- **Audience:** broad marketing teams and specialists; no audience-specific filters in the section.
- **Pricing:** all links move toward signup/trial; pricing is not surfaced in-section.
- **Resources:** none directly linked.
- **Next journey step:** Selected toolkit signup/onboarding route.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-07 — Stats and Facts

**Order:** 07 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-007

### Purpose / intent / business function

- **Purpose:** Demonstrate database scale and coverage.
- **User intent:** Validate Semrush's data authority before deeper evaluation.
- **Business function:** Support trust and move the visitor toward the data/stats page.

### Content / UI / media

- **Eyebrow:** “STATS AND FACTS”.
- **Heading:** “THE DATA YOU NEED TO OUTRANK THE COMPETITION”.
- Five vertically stacked metric items:
  - `29B` Keywords — breadth of keyword opportunity.
  - `43T` Backlinks — link-database scale.
  - `808M` Domain profiles — market/domain insight scale.
  - `142` Geo databases — geographic coverage.
  - `317M+` LLM prompts — AI visibility monitoring scale.
- Active item uses a high-contrast metric block with arrow graphic; inactive items are visually muted.
- No independent image/video; the arrow and metric treatment function as data visualization.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Learn more | https://www.semrush.com/stats/ | Data/stats authority page | Internal | Consideration / trust |

### Interaction / states / motion

- First metric is active by default.
- Activating another metric moves the single active state to that item; only one active item was observed at a time.
- The items are rendered as `li` elements without button role, `tabindex` or `aria-expanded`; keyboard operability is therefore TO CAPTURE.
- Active color transition: `0.42s`, `ease-in-out`.
- Counter/arrow entrance, hover semantics and scroll-trigger behavior: TO CAPTURE.

### Responsive

- **Desktop:** each metric uses a wide horizontal row: arrow/number, label and description across the section.
- **Tablet / Mobile:** each metric becomes a vertical compact block while the five-item sequence is preserved.
- Tap activation works on mobile; no metrics are hidden or reordered.

### Relationships

- **Product/feature:** Cross-platform data foundation.
- **Solution/audience:** Buyers seeking evidence of coverage and reliability.
- **Related resource:** Stats and Facts page.
- **Next journey step:** Data proof → HP-08 live index or stats page.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-08 — AI Visibility Index

**Order:** 08 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-008

### Purpose / intent / business function

- **Purpose:** Turn the preceding data-scale claim into a concrete AI-search intelligence example.
- **User intent:** Inspect leading brands and learn how AI-search visibility is measured.
- **Business function:** Drive qualified traffic to an owned Semrush data product/subdomain.

### Content / UI / media

- **Heading:** “AI VISIBILITY INDEX”.
- **Body summary:** Explore strategies behind AI-search leaders and identify actionable next steps.
- Context label: `AI Platform: ChatGPT, September 2026`.
- White data-table card on a dark section with decorative vertical data bars.
- Columns: Brand, Mentions and proportional horizontal bar.
- Visible rows: google.com 851K; apple.com 560K; youtube.com 447K; reddit.com 358K; instagram.com 352K; amazon.com 326K; microsoft.com 303K; walmart.com 301K; tiktok.com 278K; facebook.com 251K.
- Decorative media asset: `ai_visibility_index.svg`; empty alt text.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Explore the index | https://ai-visibility-index.semrush.com/ | AI Visibility Index subdomain | Internal subdomain; `target=_blank` | Discovery / consideration |

### Interaction / states / motion

- No tabs, sorting controls, row links, accordion or data input were observed.
- Table was static in the sampled state.
- CTA exposes a computed color/background/border transition of `0.2s ease-in-out`; actual pointer-hover appearance was not verified.
- Data source, refresh schedule, row interaction and table/bar entrance motion: TO CAPTURE.

### Responsive

- **Desktop:** three-part grid with brand, mentions and long proportional bars inside a wide centered card.
- **Tablet / Mobile:** table narrows and reflows; brand and mention values remain readable while the bar area compresses.
- All ten rows remain present; no row reordering was observed.

### Relationships

- **Product/feature:** AI Visibility / proprietary index data.
- **Solution:** Get recommended by AI / monitor AI visibility.
- **Audience:** SEO, AI-search and brand-visibility teams.
- **Related resource:** AI Visibility Index.
- **Next journey step:** Open the index in a new tab.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-09 — Customer Story / Results

**Order:** 09 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-009

### Purpose / intent / business function

- **Purpose:** Provide a named customer story with a quantified business outcome.
- **User intent:** Validate real-world value after seeing product and data claims.
- **Business function:** Strengthen consideration using attributable social proof.

### Content / UI / media

- **Eyebrow:** “OUR CUSTOMERS”.
- **Heading:** “HOW WE HELP MARKETERS WIN”.
- **Customer:** ZoomInfo.
- **Quote summary:** Enterprise use improved team efficiency by reducing manual work and freeing attention for audience engagement and growth.
- **Attribution:** James Roth, CRO at ZoomInfo.
- **Metric:** `+373%` increase in share of voice.
- Desktop layout is a two-column grid: quote/attribution block plus result-metric block.
- Media: ZoomInfo logo and James Roth portrait.
- No CTA, carousel controls, tabs, disclaimers or additional customer states were exposed.

### Interaction / states / motion

- Static single-story presentation in the observed render.
- No hover, click, expanded, collapsed, loading, error or navigation states were exposed.
- Entrance/scroll motion: TO CAPTURE.

### Responsive

- **Desktop:** quote block and metric block sit side by side.
- **Tablet / Mobile:** layout becomes a vertical stack with quote first and metric second.
- Attribution, images and metric remain visible; no reordering beyond stacking.

### Relationships

- **Product/solution:** Semrush for Enterprise.
- **Audience:** Enterprise marketing leaders and evaluation teams.
- **Related resource:** Customer success/proof family; no direct link in-section.
- **Next journey step:** Continue to HP-10 resources for additional education and proof.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-10 — Resources Collection

**Order:** 10 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-010

### Purpose / intent / business function

- **Purpose:** Present timely company, product, event, playbook, article and academy content.
- **User intent:** Learn, validate product momentum or access an educational resource.
- **Business function:** Build authority and route visitors into multiple nurture paths.

### Content / UI

- **Eyebrow:** “RESOURCES (9)”.
- **Heading:** “STAY AHEAD OF WHAT’S NEXT”.
- Horizontal carousel of image-led cards; each card contains image, title link, short summary and one or two type labels.
- Desktop shows approximately three 430px cards; tablet/mobile use 268px cards with the next card partially visible.

### Resource card and CTA inventory

| ID | Title / summary | Labels | URL | Destination type | I/E | Relationship / stage |
|---|---|---|---|---|---|---|
| HP-10A | Introducing Adobe Brand Visibility — unified GEO visibility, intelligence and optimization | News; Product Update | https://www.semrush.com/news/462048-introducing-adobe-brand-visibility-a-unified-solution-for-the-ai-search-era/ | News article | Internal | Product update / education |
| HP-10B | Semrush Launches the AI Search Operating System — free AI-search playbook | News; Playbook | https://ai-search.semrush.com/ | Resource subdomain | Internal subdomain | Education / acquisition |
| HP-10C | The Future of Brand Visibility Starts Here — Spotlight event | Event | https://www.spotlightconf.com/register?utm_source=website&utm_medium=banner&utm_campaign=semrush_web_resourcescard&utm_term=semrush_website&utm_content=spotlight_2026 | Event registration | External | Event conversion |
| HP-10D | Semrush partnership with Lovable — embedded search intelligence | News; Product Update | https://www.semrush.com/news/457747-semrush-announces-partnership-with-lovable-bringing-search-intelligence-into-the-building-experience/ | News article | Internal | Ecosystem/product education |
| HP-10E | Adobe completes Semrush acquisition | News | https://www.semrush.com/news/455953-adobe-completes-semrush-acquisition-strengthening-cx-enterprise-with-enhanced-brand-visibility-capabilities/ | News article | Internal | Company/trust information |
| HP-10F | Customer FAQ about Adobe acquiring Semrush | News | https://www.semrush.com/news/455963-faq-for-customers-adobe-acquires-semrush/ | News/FAQ article | Internal | Customer reassurance |
| HP-10G | Direct Access to Semrush Data in ChatGPT | News; Product Update | https://www.semrush.com/news/439260-semrush-launches-official-app-in-chatgpt-offering-users-direct-access-to-semrush-data/ | News article | Internal | Integration/product education |
| HP-10H | How Semrush is driving LLM visibility — result-led methodology article | Blog; Article | https://www.semrush.com/blog/how-we-are-using-semrush-to-drive-llm-visibility/ | Blog article | Internal | Proof / education |
| HP-10I | Free AI Visibility Essentials course | Academy Course | https://www.semrush.com/academy/courses/ai-visibility-essentials-with-semrush/ | Academy course | Internal | Education / activation |

Each title is the card CTA. Images are rendered for all nine cards; image alt text is empty in the observed DOM.

### Interaction / states / motion

- Previous/Next buttons move the carousel one card at a time.
- Previous is disabled at the initial card and becomes enabled after advancing.
- Active/next slide classes update with movement.
- No autoplay was observed.
- Exact carousel duration/easing, card hover/focus and touch swipe: TO CAPTURE.
- No loading, success, error or validation states apply to the static cards.

### Responsive

- **Desktop:** roughly three cards visible simultaneously.
- **Tablet / Mobile:** cards retain a fixed compact width in a horizontally clipped track; partial next-card exposure signals more content.
- Navigation buttons remain visible on mobile.
- Card order and all nine destinations are preserved.

### Relationships

- **Products/features:** Adobe Brand Visibility, AI Search OS, integrations, AI visibility and Academy.
- **Solutions/audiences:** AI-search leaders, marketers and existing customers.
- **Related resource types:** News, playbook, event, blog article and academy course.
- **Next journey step:** Selected resource destination; only the event leaves the Semrush domain.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

## HP-11 — Final Conversion CTA

**Order:** 11 of 11  
**Status:** `PARTIALLY VERIFIED`  
**Evidence:** EVI-HP-011

### Purpose / intent / business function

- **Purpose:** Close the homepage narrative with a direct free-trial offer.
- **User intent:** Begin evaluation after reviewing platform, proof and resources.
- **Business function:** Final self-serve conversion before footer navigation.

### Content / UI / media

- **Heading:** “GET STARTED WITH SEMRUSH TODAY”.
- **Supporting copy:** Seven-day free trial with cancellation reassurance.
- Single CTA block immediately before the footer link groups.
- No image, video, input, tab, card collection, metric or disclaimer beyond the reassurance line.

### CTA

| Label | URL | Destination type | I/E | Conversion stage |
|---|---|---|---|---|
| Start free trial | https://www.semrush.com/signup/?src=footer | Signup/trial | Internal | Conversion |

### Interaction / states / motion

- Standard anchor link; signup was not opened.
- No loading, success, error or validation state is present before navigation.
- Hover/focus styling, signup redirect outcome and entrance/exit motion: TO CAPTURE.

### Responsive

- **Desktop:** CTA content occupies the left portion of the pre-footer area.
- **Tablet / Mobile:** content becomes a single full-width block; CTA remains content-width rather than full-width.
- Heading, supporting copy and CTA retain their order.

### Relationships

- **Product:** General Semrush trial.
- **Audience:** High-intent visitors after full-page evaluation.
- **Pricing:** Free-trial relationship; plan pricing not displayed in-section.
- **Next journey step:** Signup/trial route.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

# 8. HOMEPAGE NARRATIVE FLOW

## 8.1 Verified section order and transition function

```text
HP-01 Primary outcome + owned-domain action
→ HP-02 Unified SEO + AI platform proposition
→ HP-03 AI-assistant / MCP extension
→ HP-04 Recognizable customer proof
→ HP-05 Enterprise-scale route
→ HP-06 Nine solution/toolkit choices
→ HP-07 Dataset-scale credibility
→ HP-08 Concrete AI Visibility Index demonstration
→ HP-09 Named customer outcome
→ HP-10 Current resources and education
→ HP-11 Final free-trial conversion
→ Global footer
```

| Transition | Narrative function |
|---|---|
| HP-01 → HP-02 | Moves from a broad visibility promise and immediate action to the unified platform that supports it. |
| HP-02 → HP-03 | Extends the platform from native SEO/AI visibility into conversational-AI data access. |
| HP-03 → HP-04 | Follows product claims with adoption proof from recognizable brands. |
| HP-04 → HP-05 | Converts general trust into a specific enterprise-scale commercial route. |
| HP-05 → HP-06 | Broadens from enterprise positioning to the full solution/toolkit range for multiple needs. |
| HP-06 → HP-07 | Supports solution breadth with quantitative evidence of the underlying dataset. |
| HP-07 → HP-08 | Turns abstract scale metrics into a concrete owned intelligence experience. |
| HP-08 → HP-09 | Moves from product/data proof to an attributable customer result. |
| HP-09 → HP-10 | Extends proof into ongoing education, news, ecosystem updates and events. |
| HP-10 → HP-11 | Ends the learn/explore path with a clear self-serve trial conversion. |

## 8.2 Homepage CTA relationship map

| Section | CTA | Destination | Product / Feature / Resource | Conversion stage |
|---|---|---|---|---|
| HP-01 | Get insights | UNKNOWN — no static URL; submission not executed | Domain analysis / product entry UNKNOWN | Activation / discovery |
| HP-02 | Try for free | https://www.semrush.com/signup/?src=main_promo&custom=ai-seo&redirect_to=%2Fseo%2F&trial=force | Semrush One / SEO | Conversion |
| HP-03 | Connect your data | https://www.semrush.com/signup/?src=main_promo&redirect_to=%2Fmcp%2F&trial=force | Semrush MCP | Conversion / activation |
| HP-04 | None | — | Customer proof | Trust |
| HP-05 | Book a demo | https://www.semrush.com/enterprise/seo/?utm_source=semrush&utm_medium=main_block | Enterprise SEO | Enterprise consideration / sales |
| HP-06A | Explore Semrush One | https://www.semrush.com/signup/?src=main_slider&custom=ai-seo&redirect_to=%2Fseo%2F&trial=force | Semrush One | Conversion |
| HP-06B | Try for free | https://www.semrush.com/signup/?src=main_slider&tk=seo | SEO toolkit | Conversion |
| HP-06C | Start now | https://www.semrush.com/signup/?src=main_slider&toolkit=ai&trial=force&redirect_to=%2Fai-seo%2Foverview%2F | AI Visibility | Conversion |
| HP-06D | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=traffic-and-market&trial=force&redirect_to=%2Fanalytics%2Ftraffic%2F | Traffic and Market | Conversion |
| HP-06E | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=content&trial=force&redirect_to=%2Fcontent%2F | Content | Conversion |
| HP-06F | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=local&trial=force&redirect_to=%2Flocal-business%2Fstart%2F | Local | Conversion |
| HP-06G | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=advertising&trial=force&redirect_to=%2Fadvertising%2F | Advertising | Conversion |
| HP-06H | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=pr&trial=force&redirect_to=%2Fpr-toolkit%2F | AI PR | Conversion |
| HP-06I | Try for free | https://www.semrush.com/signup/?src=main_slider&toolkit=social&trial=force&redirect_to=%2Fsocial-media%2F | Social | Conversion |
| HP-07 | Learn more | https://www.semrush.com/stats/ | Stats and Facts | Consideration / trust |
| HP-08 | Explore the index | https://ai-visibility-index.semrush.com/ | AI Visibility Index | Discovery / consideration |
| HP-09 | None | — | Enterprise customer proof | Trust |
| HP-10A | Adobe Brand Visibility article | https://www.semrush.com/news/462048-introducing-adobe-brand-visibility-a-unified-solution-for-the-ai-search-era/ | News / product update | Education |
| HP-10B | AI Search Operating System | https://ai-search.semrush.com/ | Playbook | Education / acquisition |
| HP-10C | Spotlight event | https://www.spotlightconf.com/register?utm_source=website&utm_medium=banner&utm_campaign=semrush_web_resourcescard&utm_term=semrush_website&utm_content=spotlight_2026 | External event | Event conversion |
| HP-10D | Lovable partnership article | https://www.semrush.com/news/457747-semrush-announces-partnership-with-lovable-bringing-search-intelligence-into-the-building-experience/ | News / ecosystem update | Education |
| HP-10E | Adobe acquisition announcement | https://www.semrush.com/news/455953-adobe-completes-semrush-acquisition-strengthening-cx-enterprise-with-enhanced-brand-visibility-capabilities/ | News | Trust / information |
| HP-10F | Adobe acquisition FAQ | https://www.semrush.com/news/455963-faq-for-customers-adobe-acquires-semrush/ | News / FAQ | Customer reassurance |
| HP-10G | ChatGPT access article | https://www.semrush.com/news/439260-semrush-launches-official-app-in-chatgpt-offering-users-direct-access-to-semrush-data/ | News / integration update | Education |
| HP-10H | LLM visibility article | https://www.semrush.com/blog/how-we-are-using-semrush-to-drive-llm-visibility/ | Blog article | Proof / education |
| HP-10I | AI Visibility Essentials | https://www.semrush.com/academy/courses/ai-visibility-essentials-with-semrush/ | Academy course | Education / activation |
| HP-11 | Start free trial | https://www.semrush.com/signup/?src=footer | General Semrush trial | Conversion |

**Known CTA destinations:** 24.  
**CTA with unresolved destination:** HP-01 Get insights.

This map documents the reference site's information and conversion logic only. It does not define any ORBITS visual or creative direction.

---

# 9. GLOBAL FOOTER

**Status:** `PARTIALLY VERIFIED`

**Evidence:** EVI-GS-009, EVI-GS-010, EVI-GS-011, EVI-GS-012.

The rendered footer exposes **45 link/action elements**: one final-conversion CTA, 34 grouped navigation links, six social links, one Adobe link and three legal/privacy actions.

## 9.1 Footer link register

| ID | Group | Label | URL / action | Destination type | I/E |
|---|---|---|---|---|---|
| FT-01 | Final CTA | Start free trial | https://www.semrush.com/signup/?src=footer | Signup/trial | Internal |
| FT-02 | Semrush | Semrush One | https://www.semrush.com/one/ | Product/platform landing | Internal |
| FT-03 | Semrush | Features | https://www.semrush.com/features/ | Feature index | Internal |
| FT-04 | Semrush | Solutions | https://www.semrush.com/solutions/ | Solutions index | Internal |
| FT-05 | Semrush | Pricing | https://www.semrush.com/pricing/ | Pricing landing | Internal |
| FT-06 | Semrush | Free Trial | https://www.semrush.com/semrush-free-trial/ | Trial information/entry | Internal |
| FT-07 | Semrush | Compare Semrush | https://www.semrush.com/vs/ | Comparison index | Internal |
| FT-08 | Semrush | Success Stories | https://www.semrush.com/company/stories/ | Customer-proof hub | Internal |
| FT-09 | Semrush | Stats and Facts | https://www.semrush.com/stats/ | Data/trust page | Internal |
| FT-10 | Semrush | Affiliate Program | https://www.semrush.com/lp/affiliate-program/en/?utm_source=semrush&utm_medium=footer | Affiliate landing | Internal |
| FT-11 | More tools | Semrush MCP | https://www.semrush.com/mcp/ | Product/integration landing | Internal |
| FT-12 | More tools | Enterprise SEO | https://enterprise.semrush.com/?utm_source=semrush&utm_medium=footer | Enterprise subdomain | Internal |
| FT-13 | More tools | Enterprise AIO | https://www.semrush.com/lp/enterprise-aio/en/ | Enterprise product landing | Internal |
| FT-14 | More tools | Enterprise SI | https://www.semrush.com/lp/site-intelligence/en/ | Enterprise product landing | Internal |
| FT-15 | More tools | Insights24 | https://www.semrush.com/lp/insights/en/?utm_source=semrush&utm_medium=footer | Tool/product landing | Internal |
| FT-16 | More tools | Mfour | https://www.semrush.com/lp/mfour/en/?utm_source=semrush&utm_medium=footer | Tool/product landing | Internal |
| FT-17 | More tools | App Center | https://www.semrush.com/apps/?utm_source=semrush&utm_medium=footer | App marketplace | Internal |
| FT-18 | More tools | Top Websites | https://www.semrush.com/website/top/?utm_source=semrush&utm_medium=footer | Data ranking experience | Internal |
| FT-19 | More tools | Free Tools | https://www.semrush.com/free-tools/?utm_source=semrush&utm_medium=footer | Free-tools index | Internal |
| FT-20 | More tools | Sensor | https://www.semrush.com/sensor/?utm_source=semrush&utm_medium=footer | Search-volatility tool | Internal |
| FT-21 | Company | About Us | https://www.semrush.com/company/ | Company page | Internal |
| FT-22 | Company | Semrush Questions | https://www.semrush.com/semrush-questions/ | Community/Q&A page | Internal |
| FT-23 | Company | News | https://www.semrush.com/news/ | News hub | Internal |
| FT-24 | Company | Careers | https://careers.semrush.com/ | Careers subdomain | Internal |
| FT-25 | Company | Partners | https://www.semrush.com/company/partners/ | Partner page | Internal |
| FT-26 | Company | Semrush Select | https://www.semrush.com/company/semrush-select/ | Company/program page | Internal |
| FT-27 | Company | Global Issues Index | https://www.semrush.com/company/global-issues/ | Data/index page | Internal |
| FT-28 | Company | Do not sell my personal info | `javascript:window.showDontSellMyDataSettings();` | Privacy-settings action | Internal action |
| FT-29 | Company | Contact Us | https://www.semrush.com/company/contacts/ | Contact index | Internal |
| FT-30 | Support | Knowledge Base | https://www.semrush.com/kb/ | Support documentation | Internal |
| FT-31 | Support | Academy | https://www.semrush.com/academy/ | Education hub | Internal |
| FT-32 | Support | Semrush API | https://www.semrush.com/api-documentation/ | API documentation | Internal |
| FT-33 | Community | Semrush Blog | https://www.semrush.com/blog/ | Editorial hub | Internal |
| FT-34 | Community | Webinars | https://www.semrush.com/academy/webinars/ | Webinar hub | Internal |
| FT-35 | Community | Ambassador Program | https://www.semrush.com/lp/semrush-circle/en/?utm_source=semrush&utm_medium=footer | Community program landing | Internal |
| FT-36 | Social | LinkedIn | https://www.linkedin.com/company/semrush | Social profile | External |
| FT-37 | Social | Instagram | https://instagram.com/semrush/ | Social profile | External |
| FT-38 | Social | TikTok | https://www.tiktok.com/@semrush | Social profile | External |
| FT-39 | Social | YouTube | https://www.youtube.com/user/SemrushHQ | Social channel | External |
| FT-40 | Social | Facebook | https://www.facebook.com/Semrush | Social profile | External |
| FT-41 | Social | X / Twitter | https://x.com/semrush | Social profile | External |
| FT-42 | Ownership | Adobe | https://business.adobe.com/ | Parent-company site | External; `target=_blank` |
| FT-43 | Legal | Privacy Policy | https://www.semrush.com/company/legal/privacy-policy/ | Legal document | Internal |
| FT-44 | Legal | Terms of Service | https://www.semrush.com/company/legal/ | Legal document/index | Internal |
| FT-45 | Legal | Cookies Settings | `javascript:window.showConsentSettings();` | Cookie-settings action | Internal action |

The displayed copyright line was `© 2026 Semrush Holdings. All rights reserved.`

## 9.2 Desktop and tablet structure

- **Desktop 1440×900 — VERIFIED:** Semrush, More tools, Company, Support and Community are expanded columns. Social links, Adobe, copyright, legal links and language control sit below.
- **Tablet 768×1024 — VERIFIED:** the footer still exposes expanded lists rather than mobile accordions.
- Final conversion CTA appears before the navigation groups.
- Spacing measurements and exact layout tokens are outside P0/P1 and were not captured.

## 9.3 Mobile structure

- **Mobile 390×844 — VERIFIED:** Semrush, More tools, Company, Support, Community and Legal are accordion buttons.
- All navigation groups are collapsed by default in the observed mobile state.
- Opening a group exposes its links; opening another group closes the previously open group.
- Social icons, Adobe link, copyright and language selector remain visible outside the primary accordions.
- Exact accordion animation timing/easing and overscroll behavior remain `TO CAPTURE`.

## 9.4 Language selector

**Trigger:** button labelled `English` with collapsed/expanded state.

**Observed choices (14):** English, Deutsch, Español, Français, Italiano, Nederlands, Polski, Português (Brasil), Svenska, Tiếng Việt, Türkçe, 中文, 日本語, 한국어.

- Click opens the menu; Escape closes it.
- Options render as `menuitem` buttons rather than anchors.
- Locale destination, URL change and persistence were not tested: `TO CAPTURE`.

## 9.5 Footer relationship model

```text
Footer group
→ destination link
→ product / feature / solution / resource / company / support / legal family
→ convert, evaluate, learn, extend, seek support, verify trust or manage privacy
```

Footer link `href` and action values are directly verified from the rendered page. Destination content and redirect chains were not opened in this round.

---

# 10. PRIMARY SITE FAMILIES TO INVENTORY

The full site should be mapped through these families.

---

## F-01 — Platform / Product

- Semrush One
- Features
- Enterprise
- MCP
- API
- Our Data
- Integrations
- App Center

**Status:** `PARTIALLY VERIFIED`

---

## F-02 — Research / Discovery Features

Known feature paths include:

- Keyword Research
- Competitor Analysis
- AI Visibility
- Prompt Research
- Local Search Visibility
- Market Analysis
- AI Brand Sentiment
- Backlink Analysis

**Status:** `DEEP INVENTORY — PARTIALLY VERIFIED; eight canonical Feature pages documented in P3`

---

## F-03 — Create / Optimize Features

Known paths include:

- Content Creation
- Technical Site Health / Site Audit
- Digital PR

**Status:** `DEEP INVENTORY — PARTIALLY VERIFIED; three canonical Feature pages documented in P3`

---

## F-04 — Tracking / Reporting

Known paths include:

- Rank Tracking
- Marketing Reports
- AI Visibility
- AI Brand Sentiment
- Backlink Analysis

**Status:** `DEEP INVENTORY — PARTIALLY VERIFIED; two canonical tracking/reporting pages plus repeated AI/backlink relationships documented in P3`

---

## F-05 — Solutions / Use Cases

- Grow search visibility
- Get recommended by AI
- Research your market
- Connect with local customers
- Create engaging content
- Fix technical site issues
- Grow off-site authority
- Build client strategies

**Status:** `TO CRAWL PAGE-BY-PAGE`

---

## F-06 — Audience Segmentation

### Size
- Enterprise
- Mid-market
- Small teams
- Solopreneurs
- Freelancers
- Agencies

### Role
- Business Owner
- Agency Owner
- SEO Specialist
- Content Marketer
- Full-Stack Growth Marketers

### Industry
- Professional Services
- Retail & Ecommerce
- Agencies
- SaaS & B2B Tech
- Healthcare
- Local Business

**Status:** `TO CRAWL PAGE-BY-PAGE`

---

## F-07 — Pricing

Current pricing families visible in navigation include:

- SEO + AI Search
- AI Visibility
- Traffic & Market
- Local
- Content
- Social
- Advertising
- AI PR
- Enterprise
- App Center

### Pricing interaction states to capture

- monthly
- annual
- save percentage
- plan cards
- free plan
- trial path
- subscribe path
- custom enterprise path
- plan comparison
- expandable details
- add-ons
- FAQ

**Status:** `PARTIALLY VERIFIED`

---

## F-08 — Free Utility Layer

Known free-tool examples:

- AI Visibility Checker
- SEO Checker
- Website Traffic Checker
- Keyword Tool
- Backlink Checker
- Top Websites by Traffic
- Other Free Tools

**Status:** `TO CRAWL`

---

## F-09 — Resources / Authority Layer

- Blog
- Knowledge Base
- Academy
- Success Stories
- AI Visibility Index
- Webinars
- News

**Status:** `TO CRAWL`

---

## F-10 — Company / Trust

- About Us
- Careers
- Stats and Facts
- Affiliate Program
- Contact Us
- Partners
- Ambassador Program
- related company/community pages

**Status:** `TO CRAWL`

---

# 10A. P3 — PRODUCT & FEATURES DEEP INVENTORY

## 10A.1 Scope, counting rules and state

**P2 prerequisite:** confirmed present in this Master before P3 began: HP-01 through HP-11, homepage CTA map, interaction/motion registers and TC-HP register.

**P3 state:** `DEEP INVENTORY — PARTIALLY VERIFIED`

The canonical Features index currently exposes 13 Feature pages. Semrush One adds the requested platform Product. Advertising and Social were added because the Homepage exposes them as product families with public landing pages. Semrush MCP was added because it appears in the Product menu and Footer and has a public landing page. Footer-only Enterprise products, App Center/data tools and API documentation are registered as discovered routes but are not misrepresented as deeply inventoried pages.

Counting basis:

- **17 pages** means 14 requested Product/Feature families plus Advertising, Social and Semrush MCP.
- **279 sections** means unique logical content modules; duplicated responsive/wrapper DOM sections on Semrush One are counted once.
- **220 CTA pairs** means unique visible label/action → exposed destination pairs within each page. Repeated placements of the same label and destination on one page count once; buttons without an exposed destination do not count.
- **81 relationships** means page-to-capability relationship rows in the capability matrix, each extended to a Solution intent and audience.
- `VERIFIED` applies only to the observed public content/URL/state. Every page remains `PARTIALLY VERIFIED` until its responsive, hover/focus, motion and destination-outcome gaps are closed.

## 10A.2 Page inventory index

| Page ID | Page name | URL | Family | Sections | CTA pairs | Entry paths | Primary user intent | Primary business goal | Evidence / status |
|---|---|---|---|---:|---:|---|---|---|---|
| PF-01 | Semrush One | https://www.semrush.com/one/ | Platform / unified SEO + AI search | 7 | 1 | Product menu; Homepage HP-02; Footer | Manage traditional and AI search visibility together | Convert to the unified paid/trial platform | EVI-P3-002 — PARTIALLY VERIFIED |
| PF-02 | Keyword Research | https://www.semrush.com/features/keyword-research/ | Research | 18 | 20 | Product menu; Features index; SEO/Homepage relationships | Find, qualify, group and track valuable keywords | Convert research demand to SEO toolkit trial | EVI-P3-003 — PARTIALLY VERIFIED |
| PF-03 | Competitor Analysis | https://www.semrush.com/features/competitor-analysis/ | Research / competitive intelligence | 20 | 18 | Product menu; Features index; Market/AI relationships | Reverse-engineer competitor channels, audiences and gaps | Sell multi-dataset competitive intelligence | EVI-P3-004 — PARTIALLY VERIFIED |
| PF-04 | AI Visibility | https://www.semrush.com/features/ai-visibility/ | AI search visibility | 21 | 21 | Product menu; Features index Research/Track; Homepage AI Visibility | Measure and improve brand presence in AI answers | Convert AI-search uncertainty into toolkit adoption | EVI-P3-005 — PARTIALLY VERIFIED |
| PF-05 | Prompt Research | https://www.semrush.com/features/prompt-research/ | AI research | 20 | 15 | Product menu; Features index; Keyword/AI galleries | Discover real AI prompts, topics, intent and winning brands | Establish prompt data as an AI-search acquisition product | EVI-P3-006 — PARTIALLY VERIFIED |
| PF-06 | Local SEO | https://www.semrush.com/features/local-seo/ | Local visibility | 21 | 23 | Product menu; Features index; Homepage Local | Manage local listings, GBP, reviews and local rank visibility | Convert multi-location/local operators to Local toolkit | EVI-P3-007 — PARTIALLY VERIFIED |
| PF-07 | Market Analysis | https://www.semrush.com/features/market-analysis/ | Traffic & Market | 19 | 19 | Product menu; Features index; Homepage Traffic and Market | Size markets, track rivals and understand audiences | Sell market/traffic intelligence subscriptions | EVI-P3-008 — PARTIALLY VERIFIED |
| PF-08 | Content Creation | https://www.semrush.com/features/content-marketing/ | Create & optimize | 21 | 15 | Product menu; Features index; Homepage Content | Plan, generate, optimize and repurpose content | Convert content teams to the Content toolkit | EVI-P3-009 — PARTIALLY VERIFIED |
| PF-09 | Technical Site Health / Site Audit | https://www.semrush.com/features/site-audit/ | Technical SEO | 18 | 11 | Product menu; Features index; SEO/Local galleries | Find, prioritize and fix crawl, performance and AI-bot issues | Convert technical pain to SEO toolkit trial/demo | EVI-P3-010 — PARTIALLY VERIFIED |
| PF-10 | Digital PR | https://www.semrush.com/features/digital-pr/ | AI PR / off-site authority | 18 | 15 | Product menu; Features index; Homepage AI PR; Backlink gallery | Find trusted media, pitch journalists and measure citations | Convert PR/outreach teams to AI PR toolkit | EVI-P3-011 — PARTIALLY VERIFIED |
| PF-11 | Rank Tracking | https://www.semrush.com/features/rank-tracking/ | Track | 16 | 9 | Product menu; Features index; Keyword/Local galleries | Monitor rankings and AI/search visibility across segments | Convert ongoing monitoring demand to subscription | EVI-P3-012 — PARTIALLY VERIFIED |
| PF-12 | Marketing Reports | https://www.semrush.com/features/reports/ | Reporting | 16 | 10 | Product menu; Features index; AI Visibility relationships | Build, brand, summarize, schedule and share reports | Increase platform stickiness and agency/team conversion | EVI-P3-013 — PARTIALLY VERIFIED |
| PF-13 | AI Brand Sentiment | https://www.semrush.com/features/brand-sentiment/ | AI reputation | 20 | 15 | Product menu; Features index Research/Track; AI Visibility | Understand and improve how LLMs describe a brand | Convert reputation risk into AI toolkit adoption | EVI-P3-014 — PARTIALLY VERIFIED |
| PF-14 | Backlink Analysis | https://www.semrush.com/features/backlink-analysis/ | Authority / link intelligence | 17 | 16 | Product menu; Features index Research/Track; Digital PR | Audit links, find gaps and earn trusted citations | Convert link-building/authority demand to SEO and PR products | EVI-P3-015 — PARTIALLY VERIFIED |
| PF-15 | Advertising Toolkit | https://www.semrush.com/advertising/ | Paid media | 11 | 3 | Homepage HP-06 Advertising; direct toolkit route | Research rivals, create, launch and optimize ads | Convert paid-media users to Advertising toolkit | EVI-P3-016 — PARTIALLY VERIFIED |
| PF-16 | Social Toolkit | https://www.semrush.com/social-media/ | Social media | 6 | 1 | Homepage HP-06 Social; direct toolkit route | Analyze competitors, publish, measure and extend with influencer/listening | Convert social teams to Social subscription | EVI-P3-017 — PARTIALLY VERIFIED |
| PF-17 | Semrush MCP | https://www.semrush.com/mcp/ | Integration / agent data access | 10 | 8 | Product menu; Homepage HP-03; Footer More tools | Bring Semrush data into AI assistants and agent workflows | Expand data usage and connect trial/paid accounts | EVI-P3-018 — PARTIALLY VERIFIED |

## 10A.3 Shared section-detail contract

The 13 canonical `/features/` pages use one reusable Feature Detail Template. The ordered lists in §10A.4 identify the exact instance on each page; each instance inherits the following documented section behavior unless a page note overrides it.

| Section type | Purpose / user question / business function | Content and capability | UI / media | CTA and destination role | Interaction and state | Responsive | Motion | Relationships |
|---|---|---|---|---|---|---|---|---|
| FD-HERO | Define the problem and answer “what can this feature do for me?”; start conversion | Eyebrow H1, outcome headline, short supporting copy | Wide hero, two CTAs, autoplay/loop/muted product video or product UI | Trial/signup plus request-demo | Links expose destinations; hover/focus and submitted states TO CAPTURE | Desktop verified; tablet/mobile TO CAPTURE | Link transition 0.15s; video viewport behavior TO CAPTURE | Page family → trial/demo → acquisition |
| FD-LOGOS | Establish brand trust | Customer-logo strip | Repeating logo row | None | No direct control observed | Tablet/mobile TO CAPTURE | Loop/marquee not measured | Proof → enterprise/team confidence |
| FD-PROMISE | Frame the central outcome | H2 and optional supporting copy | Centered statement | Usually none | Static | TO CAPTURE | Entrance TO CAPTURE | Problem → value proposition |
| FD-OVERVIEW | Explain the 3-step or 3-benefit mental model | Three capability summaries | Cards/carousel with UI screenshots | Usually none | Slide indicators or responsive cards; exact switching varies | TO CAPTURE | Track transition TO CAPTURE | Feature → initial workflow → user outcome |
| FD-QUOTE | Add named customer validation | Quote, role and company | Portrait/logo testimonial block | None | Static | TO CAPTURE | Entrance TO CAPTURE | Capability → proof |
| FD-CAPABILITY-INTRO | Transition from promise to detailed product workflow | Section headline, sometimes subheading | Full-width divider/statement | None | Static | TO CAPTURE | Entrance TO CAPTURE | Overview → detailed capability set |
| FD-CAPABILITY | Answer a specific task question and show the product surface | Capability headline, concise benefit copy, sometimes metric/limit | Alternating text + product screenshot/data visualization | Optional deep signup redirect or whole-card conversion link | Default link/card observed; hover/focus TO CAPTURE | Alternating desktop layout; stacking TO CAPTURE | Multiple blocks expose opacity/transform 1.5s; trigger/easing TO CAPTURE | Product → feature → solution → audience → conversion |
| FD-METRICS | Quantify scale, freshness or delivery | Database sizes, refresh cadence, exports/alerts/reporting | Metric/icon strip | None | Static | TO CAPTURE | Entrance TO CAPTURE | Data credibility → evaluation |
| FD-TOOL-GALLERY | Reveal tools composing the family | Tool name and one-line task description | Horizontal card carousel | Public tool/product route | Next verified to enable Previous; cards are anchors | Density/swipe TO CAPTURE | Exact track duration/easing TO CAPTURE | Product family → concrete tool/action |
| FD-REVIEWS | Provide third-party/user proof | Review excerpts and roles | Testimonial carousel | None | Previous/Next controls visible | Density/swipe TO CAPTURE | Exact track duration/easing TO CAPTURE | Proof → risk reduction |
| FD-RATINGS | Aggregate third-party scores | 4.5 / 4.7 / 4.4 observed on canonical pages | Rating/logo strip | None | Static | TO CAPTURE | Entrance TO CAPTURE | Trust |
| FD-STATS | Reinforce platform scale | 28M, 35%, 21 claims on current pages | Three-stat block | None | Static | TO CAPTURE | Entrance TO CAPTURE | Trust → enterprise reassurance |
| FD-STORIES | Move from claim to case evidence | Three customer-story cards where present | Card carousel/grid with logos/images | Success-story pages | Anchor activation only inspected | Density/swipe TO CAPTURE | TO CAPTURE | Feature → customer result → proof |
| FD-RESOURCES | Support education and organic discovery | Three related guides/articles where present | Article-card carousel/grid | Blog/resource page | Anchor activation only inspected | Density/swipe TO CAPTURE | TO CAPTURE | Feature → education → informed evaluation |
| FD-ENTERPRISE | Upsell scale, depth or governance | Enterprise positioning copy | Text + enterprise visual | Enterprise demo | Anchor destination exposed | TO CAPTURE | TO CAPTURE | Feature → enterprise solution → demo |
| FD-FAQ | Resolve objections and define the feature | Four or five questions; first item expanded by default | Accessible accordion buttons | None | Verified `aria-expanded=false→true`; only one sampled item interaction | TO CAPTURE | Grid/opacity transition 0.3s | Education → objection handling |
| FD-FINAL | Repeat conversion after education/proof | Final growth statement and trial/demo copy | Full-width CTA band | Signup/trial and sometimes demo | Anchor only; no form entered | TO CAPTURE | Link transition 0.15s | Evaluation → conversion |

**State coverage:** default, carousel initial/advanced, FAQ expanded/collapsed and disabled/enabled arrow states are directly observed. Hover, focus styling, loading, success, error, validation and authenticated results remain `TO CAPTURE` unless separately stated.

**ORBITS CREATIVE TRANSLATION:** `NOT STARTED`

---

# 11. PAGE INVENTORY TEMPLATE

Every page added to this master file must use this exact structure.

```text
PAGE ID:
PAGE NAME:
URL:
FAMILY:
STATUS:

ENTRY PATHS:
- ...

PRIMARY USER INTENT:
- ...

PRIMARY BUSINESS GOAL:
- ...

SECTION ORDER:
01.
02.
03.
...

FOR EACH SECTION:
- section purpose
- headline
- supporting copy
- visual/media
- UI components
- CTA
- destination
- interaction
- state changes
- responsive behavior
- motion behavior

PAGE CTA MAP:
- CTA → destination

RELATED PRODUCTS:
- ...

RELATED SOLUTIONS:
- ...

RELATED AUDIENCES:
- ...

PRICING RELATIONSHIP:
- ...

NEXT/PREVIOUS JOURNEY:
- ...

REUSABLE PAGE PATTERN:
- ...

ORBITS CREATIVE TRANSLATION:
- NOT STARTED
```

---

# 12. SECTION INVENTORY TEMPLATE

Every section must be captured at this level:

```text
SECTION ID:
PAGE:
ORDER:
SECTION NAME:

PURPOSE:
USER QUESTION ANSWERED:
BUSINESS FUNCTION:

CONTENT:
- eyebrow
- heading
- subheading
- body
- labels
- metrics
- disclaimer

UI:
- container
- grid
- cards
- tabs
- accordions
- input
- button
- visual
- icons

MEDIA:
- image
- video
- product UI
- data visualization
- illustration

INTERACTION:
- hover
- click
- expand
- collapse
- drag
- scroll
- sticky
- autoplay
- input behavior

STATE:
- default
- hover
- focus
- active
- loading
- expanded
- collapsed
- success
- error

CTA:
- label
- destination
- internal/external
- conversion stage

MOTION:
- entrance
- active-state transition
- exit
- scroll relationship
- easing
- duration

RESPONSIVE:
- desktop
- tablet
- mobile

RELATIONSHIPS:
- product
- feature
- solution
- audience
- pricing
- resource

ORBITS CREATIVE FIELD:
- preserve function:
- replace presentation:
- orbit metaphor:
- motion idea:
- transition-in:
- transition-out:
```

---

# 13. USER JOURNEY MAP

The reference should ultimately be mapped through complete user journeys.

## J-01 — User knows the product

```text
HEADER
→ PRODUCT
→ FEATURE / TOOL
→ PRODUCT PAGE
→ TRY / START
→ ACCOUNT / TRIAL
```

## J-02 — User knows the problem

```text
HEADER
→ SOLUTIONS
→ USE CASE
→ RECOMMENDED CAPABILITIES
→ PRODUCT
→ CONVERSION
```

## J-03 — User wants proof first

```text
HOMEPAGE
→ DATA / STATS
→ CUSTOMER STORY
→ SUCCESS STORY
→ PRODUCT
→ CONVERSION
```

## J-04 — User wants free value first

```text
RESOURCES
→ FREE TOOL
→ INPUT DATA
→ RESULT
→ LIMIT / NEXT STEP
→ PAID PRODUCT
```

## J-05 — User compares cost

```text
PRICING
→ PRODUCT FAMILY
→ PLAN
→ DETAILS
→ ADD-ON
→ TRIAL / SUBSCRIBE
```

## J-06 — Enterprise buyer

```text
ENTERPRISE
→ ENTERPRISE CAPABILITY
→ PROOF
→ DEMO
→ SALES
```

## J-07 — Existing user

```text
HEADER
→ LOG IN
→ PRODUCT ENVIRONMENT
```

Authenticated behavior is outside scope unless explicitly authorized.

---

# 14. RELATIONSHIP MAP

The final reference map should connect:

```text
PRODUCT
↕
FEATURE
↕
SOLUTION
↕
AUDIENCE
↕
PRICING
↕
RESOURCE
↕
CTA
↕
DESTINATION
```

This prevents the site from becoming a list of disconnected pages.

---

# 15. DESIGN CAPTURE LAYER

The following should be recorded separately from information architecture.

## Typography
- font family
- display styles
- heading levels
- body
- labels
- buttons
- metrics
- line height
- tracking

## Color
- backgrounds
- foregrounds
- brand
- accents
- status colors
- borders

## Layout
- max-width
- grids
- gutters
- section spacing
- card spacing
- page rhythm

## Components
- buttons
- cards
- tabs
- accordions
- inputs
- nav
- mega menus
- pricing cards
- testimonials
- data displays
- badges
- tool previews

## Imagery
- screenshots
- illustrations
- photography
- diagrams
- data visualizations

## Status
`TO CAPTURE`

---

# 16. MOTION / INTERACTION CAPTURE LAYER

This is especially important because ORBITS LINKS will use a different creative motion language.

For every meaningful interaction record:

```text
INTERACTION ID:
PAGE:
SECTION:
TRIGGER:
INITIAL STATE:
ACTION:
TRANSITION:
FINAL STATE:
DURATION:
EASING:
SCROLL-DEPENDENT:
RESPONSIVE DIFFERENCE:
PURPOSE:
```

Capture:

- header dropdowns
- hover states
- accordion transitions
- product-card expansion
- tab transitions
- pricing toggles
- carousel behavior
- sticky regions
- section entrances
- counters/data motion
- input feedback
- modal behavior
- mobile menus

---

# 17. CONVERSION MAP

Every CTA should eventually be logged.

Example schema:

| CTA | Location | Intent | Destination | Stage |
|---|---|---|---|---|
| Get insights | Hero | Immediate utility | TO CAPTURE | Discovery |
| Try for free | Product section | Trial | Product/trial | Consideration |
| Start now | Product section | Start product | Product flow | Consideration |
| Book a demo | Enterprise | Sales | Demo flow | Enterprise |
| Start free trial | Final CTA | Trial | Trial | Conversion |

---

# 18. REUSABLE PAGE PATTERNS

The goal is not only to list pages, but to detect repeated structures.

Potential page families to verify:

1. Feature detail page
2. Product/toolkit page
3. Solution/use-case page
4. Audience page
5. Industry page
6. Pricing family page
7. Free tool page
8. Resource article
9. Success story
10. Enterprise page
11. Index/data experience
12. Integration page

For each family, document the template once, then record page-specific differences.

---

# 19. ORBITS LINKS CREATIVE TRANSLATION LAYER

This layer stays separate from the Semrush reference.

For every section/page, ORBITS should answer:

```text
WHAT FUNCTION MUST REMAIN?
WHAT INFORMATION MUST REMAIN?
WHAT USER ACTION MUST REMAIN?
WHAT COMMERCIAL PURPOSE MUST REMAIN?

WHAT PRESENTATION CAN CHANGE?
WHAT MOTION CAN CHANGE?
WHAT STORY CAN CHANGE?
WHAT VISUAL METAPHOR CAN CHANGE?
```

Creative language currently proposed for exploration:

- orbit
- node
- signal
- connection
- field
- gravity
- cluster
- trajectory
- expansion
- convergence
- live system
- spatial transitions

**Status:** `CANDIDATE — NOT APPROVED`

---

# 20. ORBITS SECTION CREATIVE FIELDS

Each reference section receives this block only after its function is documented.

```text
ORBITS EQUIVALENT:
CREATIVE CONCEPT:
VISUAL STATE:
ENTRY MOTION:
ACTIVE MOTION:
EXIT MOTION:
TRANSITION TO NEXT SECTION:
PRODUCT RELATIONSHIP:
USER ACTION:
LIVE / DATA ELEMENT:
ENTERTAINMENT VALUE:
PROFESSIONAL CONTROL:
```

---

# 21. NON-NEGOTIABLE WORKFLOW

Do not design a section before its reference function is understood.

Do not copy Semrush's protected visual assets or copy verbatim.

Do not simplify away useful product depth.

Do not treat screenshots as the only source of truth.

Do not mix observed reference facts with ORBITS creative decisions.

The order is always:

```text
CAPTURE
↓
DOCUMENT
↓
CONNECT
↓
UNDERSTAND
↓
CREATIVE TRANSLATION
↓
APPROVE
↓
IMPLEMENT
```

---

# 22. NEXT RESEARCH ORDER

To complete the reference systematically:

1. Close remaining `TC-GS-*` global-system evidence gaps
2. Close remaining `TC-HP-*` homepage evidence gaps
3. Features master page
4. Each feature family
5. Solutions master page
6. Use cases
7. Size / role / industry
8. Pricing families
9. Free tools
10. Resources
11. Enterprise
12. App ecosystem
13. User journey validation
14. Responsive validation
15. Motion inventory
16. Final relationship map
17. ORBITS creative translation — only after reference inventory stability and an explicit next-stage instruction

---

# 23. Current State

## Reference architecture
`IN PROGRESS`

## Homepage structural inventory
`DETAILED REFERENCE INVENTORY — PARTIALLY VERIFIED; HP-01 to HP-11 documented across desktop, tablet and mobile; 33 TC-HP items remain`

## Header structural inventory
`PARTIALLY VERIFIED — structure, URLs, keyboard, scroll and responsive states captured; TC-GS-001 to TC-GS-010 remain`

## Footer structural inventory
`PARTIALLY VERIFIED — 45 links/actions and desktop/tablet/mobile structure captured; TC-GS-011 to TC-GS-014 remain`

## Full site page-by-page inventory
`NOT YET COMPLETE`

## Full interaction inventory
`NOT YET COMPLETE`

## Full visual design inventory
`NOT YET COMPLETE`

## ORBITS creative system
`NOT YET STARTED`

---

# 24. Core Principle

This document is not intended to say:

> “Make ORBITS look like Semrush.”

It is intended to answer:

> “What exactly exists in the reference, how is it connected, why does it exist, where does each user path lead, and what must ORBITS preserve functionally before we redesign the entire experience creatively?”

---

# End of Master Reference Inventory
