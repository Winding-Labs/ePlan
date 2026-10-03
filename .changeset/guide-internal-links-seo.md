---
"turboplan-landing-page": minor
---

Internal linking and technical SEO for every /for guide page, from a SEOmator
audit (373 rules) and Serpie's internal-link-builder topical-cluster plan.

- **Footer:** links every guide by family, plus the site and legal pages, on every route.
- **In-copy links:** 140 contextual links between guides (from 14). Each family hub
  links its whole family, and every guide gets at least two links from other guides'
  copy, enforced by tests. "Keep reading" leads with the guides a page links to.
- **One nav module:** `consts/guides/nav.ts` holds each guide's name, family and hub.
  The footer, the /for index and the breadcrumbs read it.
- **Meta descriptions:** every one fits the width Google shows (≤920px, measured by
  `snippetWidthPx`), and a test enforces it.
- **Hero and CTA headings:** they no longer contain the typewriter's sizing copies,
  so crawlers read one headline instead of five run together.
- **Middleware:** it moved to `src/middleware.ts`. It never ran from the app root, so
  the /ingest credential stripping and CORS preflight now take effect, and a trailing
  slash 308s to the canonical URL.
- **Structured data:** Article JSON-LD with dates and citations, plus a `<time>`
  element on guides; Organization and WebSite on home; CollectionPage and
  BreadcrumbList on /for.
- **Also:** `/llms.txt` lists every guide, and a skip-to-content link was added.
