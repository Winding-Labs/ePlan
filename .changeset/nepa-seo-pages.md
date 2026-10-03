---
"turboplan-landing-page": minor
---

Add six NEPA guide pages and tighten the landing page's SEO.

- One data-driven template renders `/nepa`, `/categorical-exclusions`,
  `/nepa/environmental-assessment`, `/nepa/scoping-letter`, `/nepa-software`
  and `/compare/nepa-ai-tools`: a short answer, a sourced explainer with
  numbered citations to the statute, Federal Register, agency procedures and
  vendor pages (each dated), a document outline, a "Draft yours" prompt that
  opens the existing signup flow prefilled per page (or from the
  `projectDescription` URL param), the product showcase, pricing, an FAQ with
  FAQPage JSON-LD, BreadcrumbList JSON-LD and related guides. They are in the
  sitemap, and the footer links all six from every page.
- Metadata resolves before the `<head>` is sent for every user agent
  (`htmlLimitedBots: /.*/`), so titles and canonicals are never streamed into
  `<body>`.
- Only https://eplan.ai is indexable (decided by the site URL, not `APP_ENV`):
  elsewhere robots.txt disallows everything and every page carries `noindex`.
- Catalog pages whose lists render in the browser (all projects, all
  templates, an organization's project and template lists, and office pages)
  are `noindex, follow` and left out of the sitemap.
- Pages link the existing favicon (16–48px). The site title and description
  fit Google's limits (60 and 155 characters).
- The prompt textarea and the hero's file input have accessible labels.
- `Faq` takes `items`, `CtaBottom` can skip its footer, and `FeatureShowcase`
  can show a subset of slides; the home page renders as before.
