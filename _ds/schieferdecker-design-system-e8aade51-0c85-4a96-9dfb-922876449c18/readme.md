# Schieferdecker Design System

The design language for **Mika Schieferdecker Webdesign** — an independent web & brand studio. The system is a study in *reverent presentation framed by near-invisible UI*: the work speaks, the interface recedes. Pages are built as a stack of edge-to-edge tiles that alternate light and dark, each centered on a confident-but-quiet headline, a one-line tagline, and at most two tiny blue CTAs. There is one accent color, one drop-shadow, and no decorative chrome.

> **Source & lineage.** This system was authored from a written brand-analysis brief (no codebase or Figma file was attached). The reference aesthetic is a low-density, photography-first, single-accent gallery style. It is expressed here entirely as Mika Schieferdecker's own agency brand — the tokens, components, and UI kit are generic studio surfaces, not any third party's product pages or logos.

---

## Font substitution — please read

The reference calls for **SF Pro Display / SF Pro Text**, which is Apple's proprietary system font and **cannot be redistributed**. The system therefore:

1. Lists `SF Pro Display` / `SF Pro Text` first in the stack — on macOS / iOS / Safari `system-ui` and `-apple-system` resolve to the *real* SF Pro automatically.
2. Falls back to **Inter** (variable, open source, loaded from Google Fonts in `tokens/fonts.css`) everywhere else — the closest match, with the ladder trimmed to 300 / 400 / 600 / 700.

**➡️ Action for you:** if you have a licensed SF Pro (or a chosen substitute) you'd like shipped as a real webfont, upload the files and I'll wire up the `@font-face` rules. Until then the fallback stack renders and looks correct on Apple hardware.

---

## CONTENT FUNDAMENTALS

How the studio writes.

- **Voice: calm, declarative, understated.** Short sentences. Confidence without volume. Headlines state a stance, not a pitch — "Design that gets out of the way", not "The #1 agency for growth!".
- **Person:** speaks as *we* (the studio) and addresses the client as *you*. Never first-person singular, never corporate "the client".
- **Casing: sentence case everywhere** — headlines, buttons, nav. No Title Case, no ALL-CAPS except tiny eyebrow labels and column headings (tracked out ~0.06em).
- **CTAs are verbs, two words max:** "Start a project", "See the work", "Learn more", "View case study". The second CTA in a pair is always the softer/secondary read.
- **Numbers are quiet.** Prices and years appear plainly ("from €18,000", "2026"); no badges, no "🚀 50% faster" stat-slop.
- **No emoji.** Not in copy, not in UI. The single green accent is the only visual "excitement".
- **Taglines are one line.** If it wraps past two lines it's too long — cut it.
- **Tone example (hero):** *Design that gets out of the way* / *Brand, web and motion for people who care about the details.*
- **Tone example (case study eyebrow → headline → tagline):** *Case study* → *Aurora* → *A calm, editorial identity for a climate fund.*

---

## VISUAL FOUNDATIONS

- **Color.** One accent — **Action Green `#3f9973`** — carries every interactive element (links, pill CTAs, focus). No second brand color exists. Focus ring uses a slightly deeper `#358a66`; inline links *on dark tiles* use the brighter **Mint Link `#4fb88a`** because the base green dims on near-black. Surfaces are pure white, **Parchment `#f5f5f7`** (the signature off-white), and near-black tiles (`#272729` / `#2a2a2c` / `#252527` — micro-steps apart) plus true black for the nav bar and void.
- **Type.** SF Pro / Inter. Ladder is **300 / 400 / 600 / 700 — weight 500 is deliberately absent.** Headlines are 600 with negative tracking (`-0.28 → -0.374px`) for the signature tight cadence. Body runs **17px, not 16px** (a reading, not scanning, pace) at line-height 1.47. Weight 300 is real but rare (airy leads, the store-hero CTA).
- **Spacing.** 8px base; structural layout snaps to 8/12/16/20/24. Tiles carry **80px** vertical padding; cards **24px**. Whitespace is the pedestal — ≥64px of air above every tile headline, ≥40px around any product visual.
- **Backgrounds.** No gradients, ever. Depth comes from (a) **alternating tile color** — the light↔dark change *is* the section divider, so tiles are edge-to-edge with 0 gap and no border — and (b) atmosphere inside photography itself. Full-bleed rectangular imagery in heroes; rounded crops only on inline card imagery.
- **Elevation.** **Exactly one shadow** in the whole system — `rgba(0,0,0,0.22) 3px 5px 30px` — applied only to a product/work visual resting on a surface. Never on cards, buttons, or text. Chrome elevates via surface-color change and backdrop-blur only.
- **Borders & hairlines.** 1px `#e0e0e0` hairline on utility cards and chips; a softer `rgba(0,0,0,0.08)` ring under the sub-nav and on inputs. Secondary buttons use a 3px `rgba(0,0,0,0.04)` ring that reads as a soft edge, not a line.
- **Corner radii.** Don't mix grammars: `sm` (8px) compact utility, `md` (11px) the rare Pearl button, `lg` (18px) utility cards, `pill` (∞) every action + the search input, `none` (0) full-bleed tiles.
- **Cards.** White fill, 1px hairline, 18px radius, 24px padding, **no shadow** by default.
- **Transparency & blur.** `saturate(180%) blur(20px)` frosted glass on the sub-nav and floating sticky bar (parchment at 80%). Circular controls over photography use a translucent gray chip (`rgba(210,210,215,0.64)`) with the same blur.
- **Animation.** Minimal. The one system-wide micro-interaction is the **press state: `transform: scale(0.95)`** on every button. Transitions are short (~120ms ease). No bounces, no decorative loops.
- **Hover vs press.** The system documents **default and pressed only** — press shrinks to 0.95 and (buttons) shows the 2px Focus-Green ring on keyboard focus. Hover is intentionally undefined.
- **Imagery vibe.** Photographic-realistic, neutral-to-warm, high-key on light tiles and moody on dark; product/work renders sit on a tinted surface that becomes the tile background.

---

## ICONOGRAPHY

- **No proprietary icon font was provided.** The system uses **[Lucide](https://lucide.dev)** (thin, consistent 1.5px stroke, rounded joins) loaded from CDN — the closest open match to the minimal, quiet line-icon style the aesthetic calls for. **Flagged substitution:** if the studio has its own icon set, share it and I'll swap Lucide out.
- **Usage.** Icons are used sparingly and only functionally — search, menu/hamburger, chevrons for carousels, close (×), external-link chevrons on text links. Never decorative, never filled, never multicolor. Render at 18px in nav/controls, 14px muted inside the search input.
- **No emoji, no Unicode-glyph icons** in UI. The `›` chevron used after text links is the single typographic exception.
- **Load it:** `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>` then `<i data-lucide="search"></i>` and call `lucide.createIcons()`.

---

## INDEX

**Root**
- `styles.css` — the single entry point consumers link; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Shapes).
- `components/` — reusable primitives (below).
- `ui_kits/agency-site/` — a full interactive studio-website recreation.
- `templates/` — starting-point templates for consuming projects.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**Components** (namespace `SchieferdeckerDesignSystem_e8aade`)
- `core/` — **Button**, **IconButton**, **TextLink**, **Tag**, **Input**, **Chip**, **Card**
- `navigation/` — **GlobalNav**, **SubNav**, **Footer**
- `surfaces/` — **ProductTile**, **StickyBar**

**UI kits**
- `agency-site` — home, work index, and case-study surfaces, interactive.
