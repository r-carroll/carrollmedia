# CarrollMedia — Design System

**Websites that book jobs, not compliments.**

CarrollMedia is a web design and software studio in Columbus, Ohio, serving local
service businesses — roofing, electrical, HVAC, plumbing, remodeling — and,
increasingly, other industries that need a real engineer rather than a marketing
shop. Founded by Ryan Carroll, a lead software engineer with ten years of
production experience in insurance and healthcare. **Tradely** — field-service
software for the trades — is a CarrollMedia product, and it is the studio's
flagship case study.

The studio's structural advantages, both of which this system is built to express:

1. **The person who sells the work also builds it.** No account manager, no
   handoff, no thousand-a-month retainer for work that already shipped.
2. **We fly.** Aerial footage of the client's real building, shot in-house. Very
   few people selling websites to a roofer can say that.

## The identity in one line

**Cinema-first, dark, one tally light.** Footage owns the top of every page and
the interface cuts like an edit — but the money sections (pricing, scope,
contact) stay plain, dense and full-size. The cinema is the frame, not the whole
page. A contractor scanning on a phone between jobs must find the price, the
timeline and the phone number without hunting.

## Why this system exists separately from Tradely

Tradely (Swiss Industrial: paper surfaces, burnt orange, condensed display type)
is a **product** design system. CarrollMedia is an **agency**. Dressing the agency
in the product's clothes made the studio's own site look like a Tradely feature,
capped it at trades, and demonstrated "I can apply someone else's system" when
the thing a design client actually buys is range and taste.

Three deliberate structural breaks from the industrial vocabulary, because a dark
inversion of the same grid is still the same grid:

| Tradely / industrial | CarrollMedia |
| --- | --- |
| Centered single measure | **The frame** — a fixed left slate rail plus a wide content column. Nothing is centered. |
| Numbered sections `01` / `02` | **Frame counters** `[0100]` / `[0201]` — bracketed, four digits, film-slate rather than assembly-line. |
| Square everything, radius 0 | **Radius 5px** (6px on plates). Only full-bleed footage is square. |

The two systems are maintained independently. Nothing here imports from Tradely.

## The core decision: one brand colour, and it is a tally light

The chrome is a nine-step achromatic ramp. The one hue the studio owns is
`--record` **#FF3B18** — the record light on a camera. It marks exactly three
things: the single action on a view, a live/recording state, and the active nav
item. Roughly two percent of the pixels on a page.

Every other hue belongs either to a client's **register** or to footage we shot
ourselves. The reason is commercial: the studio serves a roofer and a
cybersecurity firm in the same quarter, and a palette would fight every client we
take. Monochrome chrome plus one tally light means the work is always the loudest
thing on the page.

---

## CONTENT FUNDAMENTALS

**Tone: confident craftsman.** Trades-native, plain, a little swagger. The voice
of someone who has done the work and will tell you what it costs.

**Person.** The studio says **"we"** throughout — it will not always be one
person, and a contractor hiring a company wants a company. Ryan is named,
photographed and quoted as founder, and the promise that the person selling the
work also builds it is stated plainly while it is true. There is **no team
roster**: inventing colleagues is exactly the kind of tell this system exists to
avoid. He appears **once** on any sales page, late, as credibility; the full
background, track record and side projects live on the Founder page for the
people who came looking for them.

**Casing.** Display type is uppercase. Body copy is sentence case. Mono labels are
uppercase and tracked. Nothing is Title Case.

**US spelling throughout** — "neighborhood", "inquiry", "color". The studio is in
Columbus, Ohio and its clients are American.

**Numbers are always numerals and always mono.** "$4,500", "2–3 wks", "10 yrs".
Never "forty-five hundred", never a number set in the body face.

### Rules

- **Say the number.** Prices, timelines and what's included are published, not
  quoted on request. Publishing them is the differentiator, so the layout has to
  make room for specifics.
- **Ask before diagnosing.** The studio does not publish an analysis of a site it
  has not discussed with its owner. What a job is worth, which jobs the owner
  wants to stop taking, and what a replacement earns against a repair cannot be
  read off a homepage — so the copy says so, and the offer is a conversation. See
  **The offer** below; this is the single most load-bearing content rule here.
- **Talk about booked jobs and answered phones.** Never "digital presence",
  "brand journey" or "elevate".
- **Name what the client owns.** Domain, code, hosting, analytics — in their
  account, in writing, at launch.
- **Label concept work as concept.** Every time, without being asked.
- **Photography and drone video are a differentiator, not a service line.** "We
  fly" is a reason to hire the studio, and the shoot is included with a build. It
  does not get its own top-level page competing with the web work.
- **No jargon and no acronyms** a tradesperson wouldn't use on a job site. "What
  Google can't read" beats "crawlability".
- **Japanese accents** (a holdover from the founder's personal portfolio, e.g.
  `LABS / 実験室`) belong to the Founder and Labs pages **only** — never in the
  sales path, where they read as designing for oneself.
- **No emoji.** Anywhere.

### Voice examples

| Say | Not |
| --- | --- |
| "Websites that book jobs, not compliments." | "Elevate your digital presence." |
| "Call us. Thirty minutes, your site up on the screen." | "Book a free consultation to discuss your needs." |
| "Anyone who tells you what's wrong with your site without asking what a good job is worth is guessing." | "Get your free website audit." |
| "What a job costs is on this page. What it's worth to you is what we talk about on the phone." | "Let's discuss your investment." |
| "You own the domain, the code and the hosting account." | "Fully managed hosting solutions." |
| "From $4,500. Half up front, half at launch." | "Pricing available on request." |
| "Which pages pull repair calls when you want replacements." | "Conversion funnel optimisation." |

Real customer language, taken from discovery sessions, is the source for sales
copy. A roofer described `$360/month` hosting he couldn't move as "a big dent in
my pocket" — that sentence is worth more than any headline we would invent, and
it is quoted verbatim on the pitch deck's problem slide.

### The offer

**The primary action everywhere is a phone call.** Not a form, not a URL field,
not a recorded audit. This is a correction, and the reasoning matters enough to
write down.

The studio lost a roofing job to a competitor who ran a **live, in-person teardown
of the contractor's site** at a networking event in front of around a hundred
people. The contractor's own feedback was that CarrollMedia's proposal was more
detailed and more personalised — and that the live teardown "sealed it." The
competitor also **led with business discovery**, asking about margins, revenue and
overhead before proposing anything, and gave practical advice (steering them off
Facebook lead forms toward a landing-page flow) rather than a pitch.

The wrong lesson is "we need a teardown too." An async recorded teardown is the
weaker half of that move: it competes on the same axis while giving up the part
that actually won, and it forces the studio to guess at keywords, ideal customer
and what the owner is optimising for. Guessing in public is exactly the kind of
tell this system exists to avoid.

So the offer inverts it. **The honest limit of a blind audit is the hook:**

> Anyone who tells you what's wrong with your site without asking what a good job
> is worth to you is guessing.

Then it resolves into the thing the competitor actually did — a conversation that
starts with the money. Thirty minutes, the owner's site up on the screen, and the
first questions are about margins and which jobs they'd rather stop taking, not
about design.

Rules that follow from this:

- **`CallStrip` is the primary action on every sales surface.** The phone number is
  the largest fact on the page after the headline.
- **Never gate the offer behind a form.** The form is the thing this offer is
  deliberately not. No "request a callback", no email capture standing in for a
  conversation.
- **Lead with the money question, not the design question.** "What's a good job
  worth to you" comes before anything about pages, photography or SEO.
- **State the duration as a numeral** — thirty minutes — and say what happens on
  the call. "No slides" is part of the promise.
- **Don't claim insight the studio hasn't earned.** Mechanical facts (a slow site,
  a broken mobile layout, pages Google can't read) can be named unasked. Strategy,
  keywords and lead quality cannot.

---

## VISUAL FOUNDATIONS

### Motif

**Shot from above, cut like film.** The identity is a motion and photographic
language, not a palette. Two ideas stack: the interface **cuts** like an edit, and
what it cuts to is **aerial footage**. The page furniture is camera furniture —
frame counters, slate data, timecode, letterbox, a tally light.

### Colour

Nine achromatic values (`--ink` #08080A through `--white`), one tally red, three
client-register accents. Backgrounds alternate between `--ink` and `--surface`
(#0F0F11) to separate sections — never more than those two grounds on a page. The
light register (`[data-register="light"]`) is the single sanctioned inversion, for
medical and practice clients.

### Type

Three faces, three jobs, no overlap. **Archivo 800** uppercase for display, at
`-0.038em` tracking and 0.9 leading — set large, tightly packed, doing the work
that gradients and glass do on lesser sites. **Geist 300** for body: the light
weight is deliberate against the heavy display. **Geist Mono** is the camera voice
— every number, price, duration, label, frame counter and timecode. If it is a
fact, it is mono.

The cinema rule cuts both ways: on a plate, type shrinks to captions and slate
data; in a money section it goes straight back up. A price is never a caption.

### Layout

**The frame.** Every content section is a two-column asymmetric grid: a fixed
`--rail` (152px) carrying the frame counter, section label and slate data, and
content in the wide right column. Nothing is centered. Below 940px the rail
collapses to a horizontal slate line above the content.

Single measure `--measure` 1320px with a 40px gutter, 22px under 940px. Copy caps
at `--copy-measure` (64ch), headlines at `--headline-measure` (17ch). Sticky
header at 64px. Frame counters increment by 100 per section in document order;
rows inside a section take that hundred (`[0201]`, `[0202]`). Tap targets never
below 44px, 56px for hero actions and fields: this gets read on a phone, on a
roof, in gloves.

### Corners, borders, cards

**Radius 5px** — a lens-barrel edge, not a rounded app card. Plates and letterbox
insets get 6px; the tally dot is the only fully round thing; only full-bleed
footage is square. Cards are a 1px hairline (`rgba(228,228,231,0.11)`) with no
shadow and no fill change; where a card needs to sit above the ground it moves to
`--raise`. Grids are built as 1px gaps over a border-coloured parent, so **the
dividing line IS the gap** (`.cm-hairline-grid`).

### Elevation

**No shadows.** A drop shadow on near-black is invisible, so the system doesn't
pretend otherwise. Depth comes from hairlines and ground shifts only.

### Backgrounds

Flat `--ink` or `--surface`, or full-bleed aerial photography. **No decorative
gradients.** Gradients exist for exactly one purpose: making footage legible under
type (`--plate-scrim`, `--plate-scrim-soft`). A single soft radial bloom behind a
masthead headline is permitted at ≤14% opacity; anything more saturated is out.

### Imagery

Cool, high-contrast, desaturated. Aerial plates are graded to greyscale in our own
chrome (`--grade-plate`, brightness 0.52; `--grade-strip` 0.72 for scene breaks)
and run **full colour inside a client case study** (`--grade-case`) — the ungraded
shot is the proof the shoot happened. On a work card the plate is graded at rest
and goes full colour on hover, for the same reason.

**No stock photography, ever.** It is the client's own crews, trucks and roofs, or
nothing — and "nothing" is a labelled empty well reading `FOOTAGE NOT SHOT YET`,
not a substitute image. See `guidelines/empty-plate.card.html`.

### Motion

Eight named moves and no others, all in `tokens/motion.css`:

| Move | Timing | Used for |
| --- | --- | --- |
| **Cut** | 80ms `steps(1, end)` | The house signature — labels, meta rows, facts |
| **Rise** | 380ms decel, 0.42em | Display type and headlines |
| **Wipe** | 720ms decel | Footage only, opening from the centre line |
| **Draw** | 520ms decel | Section rules, left to right |
| **Push** | 14s | The slow scale on every aerial plate |
| **Stagger** | 70ms per line, max 6 | Rise applied down a group |
| **Count** | 900ms cubic-out | Numbers, on entry, once |
| **Tally** | 1.6s `steps(1)` | The record dot — live states only |

Standard easing is `cubic-bezier(0.16, 1, 0.3, 1)` — a hard decelerate. **Interface
moves in cuts; only footage is allowed slow motion.** Anything slower than 380ms
that is not a photograph or the tally light is a bug.

Two composite behaviours worth naming: the **scroll-scrubbed plate** (scrolling
scrubs the drone flight rather than playing it — the visitor operates the shot;
never autoplay, a roofer on a phone shouldn't wait for video) and the **hover
plate** (pointing at a project reveals its aerial under the cursor, carried
forward from the founder's original portfolio).

Reveals are opt-in via `[data-reveal]` + a host IntersectionObserver that adds
`[data-in]`. Everything is **collapsed at rest**, so disabling motion can never
leave a letterbox bar covering the page. `prefers-reduced-motion` and a
`[data-reduce-motion]` root attribute both neutralise every move.

**Two traps to avoid.** Cut timing belongs on `animation`, never on `transition` —
`steps(1, end)` on a transition latches the stale frame and the element appears
frozen. Hover states use `transition: … 80ms linear` instead (`.cm-cut-transition`).

And **a load-time move must not be driven by a scroll observer.** Collapsed-at-rest
targets have a zero-area transformed box (wipe is clipped to `inset(50% 0)`), and
IntersectionObserver computes ratios on the transformed box, so a non-zero
threshold is unreachable — observe reveals at `threshold: 0` and rely on
`isIntersecting`. The letterbox bars went further and are not observed at all:
they are a masthead entrance, the bottom bar of a 560px plate sits below the fold
on a short viewport, and an observed animation gets restarted by any re-render
that re-observes it — which latched a black block over the hero headline.
`AerialPlate` transitions them on mount instead, since a transition cannot be
restarted by a re-render. **If a move belongs to load, own it in the component.**

Related: keep the host's MutationObserver rescan **debounced to a frame**.
`StatBlock`'s counter calls `setState` every frame for 900ms, and an undebounced
rescan re-observes in-flight reveals and restarts them.

### Hover, press, focus

Hover **inverts** rather than tints: an action button goes to `--record-hot`, an
outline button fills with `--color-foreground` and flips its label to
`--color-background`. Row hover is a 4% white wash at 80ms linear, and the row's
mono fact flips to `--record-text`. No transforms, no lifts, no scale on press.
Focus uses a 1px `--record` outline offset 2px — never a glow.

### Transparency and blur

Sparingly and functionally. The sticky header is `rgba(8,8,10,0.86)` with a 16px
backdrop blur so footage reads underneath it. Hairlines are alpha so they hold
over both flat ground and photography. Nothing else is translucent.

---

## ICONOGRAPHY

**The system is deliberately almost icon-free.** No icon font, no icon library, no
SVG set. The reasons are consistent with everything else here: mono type carries
labelling duty, and a hand-drawn icon set would be one more invented thing for a
studio whose argument is that it doesn't invent credentials.

What stands in for icons:

- **The bracketed four-digit frame counter** (`[0100]`, `[0201]`) labels sections,
  list rows, process steps and work entries. This is the system's dominant
  "iconography" and its clearest structural signature.
- **The tally dot** — a 6px `--record` circle, blinking on a 1.6s step. The only
  round shape in the system, and only ever on genuinely live states.
- **Unicode arrows and rules** — `→` for links and continuation, `↻` for replay,
  `—` as a list bullet in price scopes. Nothing else.
- **Hairline rules** as structural marks: the drawing rule in a section slate, the
  2px `--record` progress bar on a scrubbed plate, the 3px register underline on
  a work card's plate.
- **The 26px square swatch** in register cards, standing in for a palette chip.

**No emoji, anywhere.** If a future need for a real icon set arises, link a
CDN-hosted 1.5px-stroke outline set (Lucide is the closest match to the hairline
weight) and document the addition here — do not draw one.

### Logo

**No logo mark exists.** None was supplied and none has been drawn. The wordmark
is set in type: `CARROLLMEDIA` in Archivo 800, uppercase, `0.15em` tracking, with
the second half dropped to `--dim` (or `--record-text` on a sales page). See
`guidelines/wordmark.card.html`. **Ask before any mark is designed.**

The only vector asset in the project is `assets/favicon.svg`, carried over from
the source folder.

---

## Components

**Core** — `components/core/`

- **Button** — action / outline / solid / ghost, three sizes. One action variant per view.
- **FrameMark** — the bracketed four-digit frame counter, with optional tally dot.
- **SectionSlate** — frame counter, tracked label, drawn rule. Opens every section.
- **ScopeRow** — frame-marked list row for services, process steps and scope lines.
- **StatBlock** — published figures in a hairline grid; owns its own counter.
- **Tag** — mono hairline label, including the mandatory `CONCEPT` tone.

**Media** — `components/media/`

- **AerialPlate** — full-bleed masthead: greyscale grade, 14s push, scrim, letterbox bars.
- **Letterbox** — 2.39:1 inset scene break; renders the labelled empty well with no `src`.
- **ScopeStrip** — 96px band of graded footage between two dense sections.
- **HoverPlateList** — the work index; pointing at a row floats its aerial under the cursor.

**Sales** — `components/sales/`

- **CallStrip** — the phone number as primary action. Replaced `TeardownForm`; see **The offer**.
- **PriceCard** — published price and fixed scope.
- **WorkCard** — work entry with plate, frame mark and honest status.
- **RegisterCard** — specimen for a client register.

### Intentional additions

- **FrameMark** and **Letterbox** have no counterpart in the source folder. They
  exist because the frame counter and the 2.39:1 scene break are the two devices
  that carry the structural break from the industrial grid, and each needed to be
  a real component rather than an inline pattern repeated by hand.
- **CallStrip** replaced a `TeardownForm` component that captured a URL for an
  async audit. The component was removed rather than kept alongside, because
  leaving a form in the kit is how the weaker offer creeps back in.
- **RegisterCard** has no counterpart in a conventional design system. It exists
  because "one studio, many client registers" is the system's central mechanism,
  and it needed a specimen so the rule is demonstrable rather than described.
- `SectionHeader` and `NumberedRow` from the source folder are replaced by
  **SectionSlate** and **ScopeRow** — same roles, frame-counter vocabulary.

---

## Index

| Path | What |
| --- | --- |
| `styles.css` | Entry point. Imports only — link this one file. |
| `tokens/colors.css` | Ramp, tally red, registers, footage grades |
| `tokens/typography.css` | Three faces, scale, `.text-*` classes |
| `tokens/spacing.css` | Spacing, 5px radius, tap targets |
| `tokens/motion.css` | The eight moves, keyframes, reveal contract |
| `tokens/layout.css` | The frame (rail grid), measure, letterbox |
| `components/core/` | Button, FrameMark, SectionSlate, ScopeRow, StatBlock, Tag |
| `components/media/` | AerialPlate, Letterbox, ScopeStrip, HoverPlateList |
| `components/sales/` | CallStrip, PriceCard, WorkCard, RegisterCard |
| `guidelines/*.card.html` | 21 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/agency-site/` | The studio's own site — seven click-through screens |
| `slides/` | Six 1280×720 pitch slide types for in-person meetings |
| `assets/aerial/` | Drone plates |
| `assets/favicon.svg` | The only vector asset supplied |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills manifest for use outside this project |

Paths in this index are relative to the design project, not this repository.
See SKILL.md for where each piece lives here.

---

## Sources

- **Attached codebase:** `carrollmedia-ds/` — an earlier iteration of this design
  system (dark achromatic chrome, action blue #2E6CFF, radius 0, numbered `01`
  section markers, Archivo/Geist/Geist Mono). Read in full and used as the
  starting point; the tokens, motion system, voice rules and component roles
  carry forward, the structure does not. Assets copied: `assets/aerial/*`,
  `assets/favicon.svg`.
- **Referenced inside that folder but not present on disk:** `assets/portfolio/`
  (eubanks.JPG, db.png, dash.png) and `CM-hero.mp4`. The earlier UI kit pointed
  at them; they were not in the attachment, so every screen here that would have
  used them renders a labelled empty well instead.
- **Discovery notes:** Granola sessions with a roofing contractor (Pegasus
  Roofing), covering a lost bid, the competing vendor's approach, and the
  contractor's own language about hosting cost and lead quality. Sales copy is
  drawn from these. Queried directly for this revision: the competitor's live
  in-person teardown in front of ~100 people, his discovery-first sequence
  (margins, revenue, overhead), his roofing-specific referral credibility, and the
  contractor's verdict that the live teardown "sealed it" despite a higher price.
  These drove the rewrite documented under **The offer**.
- **Original site:** the founder's Next.js portfolio (App Router, Tailwind, Framer
  Motion, SCSS modules). Palette `#E70865` / `#4c97f8` on `#050505`, Syne + Geist.
  Described in the source folder; the code itself was not attached. This system
  replaces it.
- **Tradely — Swiss Industrial** design system, referenced only as the thing this
  system deliberately diverges from. Not attached; not imported.

## Known gaps

- **One image in the whole project.** `assets/aerial/aerial-01.jpg` is a landscape
  plate. For a cinema-first system that is the single biggest gap: sales pages
  need real job-site plates, and a mountain behind a roofing pitch is decoration.
  Every screen that needs footage it doesn't have says so on the page.
- **No founder portrait.** The Founder page renders `PORTRAIT NOT SHOT YET`.
- **Fonts are Google-hosted** (Archivo, Geist, Geist Mono) rather than self-hosted
  binaries, so there are no `@font-face` rules and no font files in the project.
  All three are the intended faces, not substitutions — but if you have the
  licensed binaries, drop them in and add a `tokens/fonts.css`.
- **One live client** (Eubanks Electric). Concept work is labelled as such.
- **No logo.** See Iconography.
- **Client work in the UI kit is placeholder-real:** Eubanks is live, Tradely is a
  real product, and Pegasus / Sec/Ops / Bexley are labelled concepts. Nothing is
  presented as a client that isn't one.
