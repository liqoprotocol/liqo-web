# Brand Guidelines

The Liqo brand should communicate what the product is: **serious, modern financial infrastructure that is a pleasure to build on.** Confident, clean, developer-first — never hype-driven.

> The values below are the source of truth used by the website (`app/globals.css`, `lib/seo/config.ts`). Keep this document and those files in sync.

## Name & Positioning

- **Name:** Liqo (always capitalized "Liqo"; never "LIQO" or "liqo" in prose).
- **Primary descriptor:** **Global Payments Infrastructure for Modern Businesses.**
- **Tagline:** *Move money globally without the technical heavy lifting.*
- **One-liner:** Accept payments in crypto or fiat from anywhere and settle in your preferred currency — through a single API.
- **Terminology note:** describe the overall product as *Global Payments Infrastructure for Modern Businesses*. Use *liquidity routing engine* (or *routing engine*) only when referring specifically to the routing subsystem — never as a description of Liqo as a whole.

## Logo

Brand marks live in [`public/`](./public):

| Asset | File | Use |
|---|---|---|
| Wordmark | `logo-with-text.svg` | Primary logo (README, headers) |
| Icon (SVG) | `logo.svg`, `icon.svg` | Favicon, avatars, mask icon |
| Icon (raster) | `logo.png`, `apple-icon.png` | App icons, social |
| Social preview | `og-image.png` (1200×630) | Open Graph / Twitter cards |

**Usage rules**

- Maintain clear space around the logo equal to the height of the icon.
- Do not stretch, recolor arbitrarily, rotate, or add effects to the mark.
- On dark backgrounds (the default), use the standard mark; ensure sufficient contrast on light backgrounds.
- Do not place the logo on low-contrast or busy backgrounds without a solid backing.

## Color Palette

**Primary**

| Token | Hex | Use |
|---|---|---|
| Primary (brand green) | `#0FFD41` | Primary actions, highlights, accents |
| Primary Dark | `#0CC537` | Hover / active states |
| Primary Soft | `rgba(15,255,65,0.14)` | Tints, glows, subtle backgrounds |

**Secondary & Tertiary**

| Token | Hex |
|---|---|
| Secondary (blue) | `#0368F4` |
| Secondary Dark | `#0252C8` |
| Tertiary (violet) | `#4E39D9` |
| Tertiary Dark | `#3A28A6` |

**Surfaces & Text**

| Token | Hex |
|---|---|
| Theme / dark background | `#0A0A0A` |
| Text on dark | `#F8FAFC` |
| Light surface | `#FFFFFF` |
| Text primary (light) | `#020617` |
| Text secondary | `#475569` |
| Text muted | `#64748B` |
| Border | `#E2E8F0` |

**Semantic**

| Token | Hex |
|---|---|
| Success | `#0FFD41` |
| Info | `#3B82F6` |
| Warning | `#F59E0B` |
| Danger | `#EF4444` |

Accessibility: verify text/background pairings meet **WCAG 2.1 AA** contrast (≥ 4.5:1 for body text). The bright primary green is an accent — avoid it for small body text on white.

## Typography

- **Primary typeface:** [Outfit](https://fonts.google.com/specimen/Outfit) (loaded via `next/font`, exposed as `--font-sans`).
- **Monospace:** `ui-monospace` system stack for code.
- **Scale:** use consistent Tailwind type scale; headings bold and tight, body comfortable and legible.

## Shape & Motion

- **Corner radius:** base `0.625rem`; **buttons are fully rounded (pill-shaped)**.
- **Elevation:** soft, low-opacity shadows (see `--shadow-card`, `--shadow-md`).
- **Motion:** purposeful and smooth (Framer Motion; three.js for the hero). Subtle, never distracting. Respect `prefers-reduced-motion`.

## Iconography

- Icon set: [Lucide](https://lucide.dev) (`lucide-react`). Use consistent stroke weight and size; align icon color to text or brand accent.

## Brand Voice

- **Clear over clever.** Explain, don't dazzle. Developers can smell filler.
- **Confident, not boastful.** State what Liqo does plainly; let the capability speak.
- **Precise.** Use correct technical terms; never overstate what's built (see [SCF.md](./SCF.md) for our honesty standard).
- **Human.** Write for a person, not a committee.

**Do:** "Accept fiat or crypto and settle in the asset you want — with one API call."
**Don't:** "Revolutionary next-gen AI-powered blockchain payment paradigm."

## Contact for Brand Assets

For high-resolution logos, brand approvals, and press assets, see [PRESS.md](./PRESS.md).
