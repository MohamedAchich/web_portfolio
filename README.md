# UI kit — One-page engineer portfolio

The single product this design system serves: a one-page software-engineer portfolio with
home, about, skills, projects (with a testimonials subsection), blogs and contact sections
plus a persistent **Download Resume** CTA.

Open `index.html`. It composes design-system components only where practical — the Skills
section uses a small local `SkillChip` (logo + label) since the shared `Pill` has no icon slot.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell: links `styles.css`, `_ds_bundle.js`, Lucide, `responsive.css`, then each section script |
| `data.js` | All copy and content (`PROFILE`, `LANGUAGES_FRAMEWORKS`, `TOOLS`, `PROJECTS`, `TESTIMONIALS`, `BLOGS`, `NAV_ITEMS`) — edit here, not in the sections |
| `Hero.jsx` | Dark starfield hero: eyebrow, 88px display headline with lime keyword, resume CTA, full (uncropped) portrait photo |
| `AboutSection.jsx` | Light canvas prose plus two availability cards (one inverted featured) |
| `SkillsSection.jsx` | Dark canvas, two logo-chip groups: languages/frameworks and tools/platforms |
| `ProjectsSection.jsx` | Light canvas, detailed bullet cards per project, external/preview buttons, plus a dark-card testimonials subsection |
| `BlogsSection.jsx` | Dark canvas, tag + title + blurb rows — each row links out to `./blogs/<slug>.html` |
| `ContactSection.jsx` | Dark band holding a light form panel; submitting swaps to a sent state |
| `Portfolio.jsx` | Sticky nav, section order, footer; smooth-scroll navigation |
| `responsive.css` | Breakpoint overrides for the fixed grids above (components are inline-styled) |
| `blogs/*.html` | Standalone article pages for each blog post, linked from `BlogsSection.jsx` |
| `assets/portrait.png`, `assets/logo/*`, `CV_Mohamed_Achich.pdf` | The real photo, tech-stack logos, and résumé, self-contained in this folder |

## Interactions that work

- Nav links scroll to their section and take the lime active underline; below 768px they
  collapse behind a hamburger toggle.
- Project cards without a real public URL open a "Preview" modal (honestly labeled — no
  fabricated screenshots); the EasyCWMP card links straight to easycwmp.org.
- Blog rows are real links to standalone article pages under `blogs/`.
- The contact form validates required fields and switches to a confirmation state.

## Polarity map

Sections alternate: Home (dark) → About (light) → Skills (dark) → Projects (light,
with dark accent cards — same pattern as the featured `PricingCard` in About) →
Blogs (dark) → Contact (dark). No band blends two polarities. The only lime elements
per viewport are the headline keyword and the nav's active underline.

## Placeholders — replace before publishing

- `TESTIMONIALS` in `data.js` are **fictional** placeholder quotes, written to demonstrate
  layout. Swap in real client quotes, or remove the subsection — publishing invented
  endorsements as genuine would misrepresent them to site visitors.
- `BLOGS` in `data.js` and the pages under `blogs/` are **fictional** placeholder articles
  demonstrating real technical range (Go, NestJS, Redis, RabbitMQ/NATS). Replace with real
  writing, or keep them but be aware they aren't things the user has actually published.
- Project "Preview" modals (in `ProjectsSection.jsx`) say plainly that no public screenshot
  exists yet — replace that placeholder with a real `<img>` once screenshots are available.
