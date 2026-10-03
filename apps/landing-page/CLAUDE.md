# CLAUDE.md

The marketing site (eplan.ai): a Next.js 15 App Router app under
`apps/landing-page`. The repo-root `CLAUDE.md` and `.claude/rules/` apply here
too: Biome for lint/format, kebab-case files, no `process.env` (use
`@wildfires-org/turboplan-env`).

## Commands

```bash
pnpm dev          # dev server on port 3002
pnpm build        # production build
pnpm typecheck    # tsc --noEmit
pnpm test         # Jest unit tests (src/**/*.test.ts)
```

E2E tests for this site live in the repo-root `e2e/tests/apps/landing*.spec.ts`.

## Layout

- `src/app/` – routes: `/` (home), `/docs` (Fumadocs, `content/docs`),
  `/projects` (public catalog),
  `/checkout`, `/privacy`, `/terms`, `robots.ts`, `sitemap.ts`.
- `src/components/home-v2/` – home sections; the shared navbar and footer.
- `src/components/catalog/` – the public project catalog.
- `src/lib/seo.ts` – `buildPageMetadata()`: every page's title, description,
  canonical and social cards.
- `src/lib/brand.ts` + `public/brand/` – the brand override surface for forks.

## Conventions

- Every indexable page sets metadata through `buildPageMetadata` (a
  self-referencing canonical) and appears in `sitemap.ts`.
- Analytics go through `@wildfires-org/turboplan-analytics`
  (`useAnalytics().captureEvent(events.X, …)`); never call posthog or gtag
  directly.
- Prices come from the billing catalog (`@wildfires-org/turboplan-billing/types`),
  never typed by hand.
- Tailwind v4: theme tokens live in `src/globals.css` (`@theme`); layout
  constants live in `src/components/home-v2/ui/layout.ts`.

Environment variables: `.env.example` and `CONFIGURATION.md` at the repo root.
