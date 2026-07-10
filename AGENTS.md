# Soswer

Astro 5 static site for a software development company. Deployed on Vercel.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |

No lint, test, or typecheck scripts configured.

## Architecture

- **Framework**: Astro 5 + React JSX components (islands pattern)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin, dark mode via `dark:` class
- **Deployment**: `@astrojs/vercel` static adapter
- **Icons**: `lucide-react`
- **Contact form**: `react-google-recaptcha`, keys in `.env` (`PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`)

### SSR / client directives

- `client:load` — Navbar, Hero, Contact
- `client:visible` — Services, Process, CaseStudies, CTA, Footer

### i18n

Bilingual: `/` (en), `/es/` (es). Content driven by `src/data/translations.js` — single file, uses `lang` prop to switch.

### Pages

- `/` — single-page landing (Hero, Services, Process, Case Studies, CTA, Contact sections)
- `/contact` — standalone contact page
- `/process` — about + process
- `/projects` — case studies grid
- `/projects/[slug]` — individual project detail

### Known issues

- `src/styles/global.css:12` — missing closing brace on `html:not(.dark)` block

## Environment

Required in `.env`:
```
PUBLIC_RECAPTCHA_SITE_KEY=<your-site-key>
RECAPTCHA_SECRET_KEY=<your-secret-key>
```
