---
"turboplan-landing-page": minor
---

Add SEO basics and six NEPA guide pages to the landing page.

- `robots.txt` and `sitemap.xml` (home, NEPA guides, docs). The landing deploy
  now passes `NEXT_PUBLIC_LANDING_URL`, so `metadataBase`, canonical URLs and
  Open Graph images use the real site origin instead of localhost.
- Home, the NEPA guides and docs pages set a canonical URL; the home page gets
  its own title and description. Catalog listing pages under `/projects` are
  `noindex, follow` (their lists render client-side); project and template
  detail pages stay indexable.
- One data-driven template renders `/nepa`, `/categorical-exclusions`,
  `/nepa/environmental-assessment`, `/nepa/scoping-letter`, `/nepa-software`
  and `/compare/nepa-ai-tools`: a short answer, a sourced explainer with
  numbered citations to the statute, Federal Register, agency procedures and
  vendor pages (each dated), a document outline, a "Draft yours" prompt that
  opens the existing signup flow prefilled per page (or from the
  `projectDescription` URL param), the product showcase, pricing, an FAQ with
  FAQPage JSON-LD, BreadcrumbList JSON-LD and related guides.
- Metadata resolves before the `<head>` is sent for every user agent
  (`htmlLimitedBots: /.*/`), so titles and canonicals are never streamed into
  `<body>`. Pages link the existing favicon (16–48px). Only https://eplan.ai is
  indexable: elsewhere robots.txt disallows everything and pages carry
  `noindex`. The prompt textarea and the hero's file input have accessible
  labels.
- The footer links every guide page. `Faq` takes `items`, `CtaBottom` can skip
  its footer, and `FeatureShowcase` can show a subset of slides; the home page
  is unchanged.
