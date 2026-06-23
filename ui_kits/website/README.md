# EchoIT Website — UI kit

A responsive marketing homepage for **EchoIT**, an IT company positioning around **AX (AI Transformation)**. It is a high-fidelity recreation built entirely from the design-system primitives.

## Run it
Open `index.html`. It loads `../../styles.css` (tokens + fonts), `site.css` (kit layout), the compiled `_ds_bundle.js`, and the section files below.

## Sections (each a small JSX file, exported to `window`)
| File | Component(s) | What it shows |
|---|---|---|
| `SiteHeader.jsx` | `SiteHeader` | Sticky header, desktop nav, mobile slide-in menu, theme toggle, contact CTA |
| `SiteHero.jsx` | `SiteHero` | Headline, brand-gradient panel with floating AX metric cards, stat row |
| `SiteServices.jsx` | `SiteClients`, `SiteServices` | Client logo strip + 4-up services grid (outlined cards) |
| `SiteAX.jsx` | `SiteAX`, `SiteImpact` | Tabbed AX-platform showcase with a live mock dashboard + impact stats |
| `SiteSections.jsx` | `SiteInsights`, `SiteCTA` | Insight cards + closing gradient CTA band |
| `SiteFooter.jsx` | `SiteFooter` | Brand, link columns, contact line |
| `index.html` | `App` | Assembles all sections; owns theme state, contact `Dialog`, and `Snackbar` |

## Interactions
- **AX 도입 문의** anywhere opens a `Dialog` with a `TextField` form → submit shows a confirmation `Snackbar`.
- **Theme toggle** (header) flips `data-theme` between light/dark across the whole system.
- **Tabs** in the AX section swap the feature list and animate the mock dashboard bars.
- **Mobile menu** appears below 768px (hamburger).

## Responsive
Breakpoints per brief: **1024px** (tablet — 2-up grids, stacked hero) and **768px** (mobile — single column, nav collapses to the slide-in menu). Defined in `site.css`.

## Note
Client names (SAMSUNG, LG CNS, …) and insight headlines are **placeholder content** for layout demonstration — replace with real EchoIT assets before production.
