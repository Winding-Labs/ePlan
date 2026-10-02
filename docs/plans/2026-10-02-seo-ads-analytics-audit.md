# SEO, Ads and Analytics audit: eplan.ai (2026-10-02)

Short version: the site couldn't be crawled or indexed properly, so it couldn't
rank. Ads should wait until conversions are tracked and verified, and until the
landing pages match what people search for. This PR fixes the technical SEO and
adds five document pages. Tracking is being fixed in the same PR by the
analytics work (see `2026-10-02-analytics-master-pattern.md`).

## How this was measured

- A crawl of every internal link reachable from `https://eplan.ai/`: 267 unique
  URLs, all 200. The crawler used curl and only followed links in the
  server-rendered HTML. It covered the homepage, nav, footer, `/docs` (18 pages)
  and `/projects` (5 organizations, 239 office pages).
- Direct checks of `/robots.txt`, `/sitemap.xml`, `/pricing`, `/contact`,
  `/login` and other guessable URLs, plus `app.eplan.ai` logged out.
- Code review of `apps/landing-page/src/app/**`, `next.config.ts`, the
  Fumadocs config and `.github/workflows/cloudflare-deploy.yml`.

## Findings (live production, 2026-10-02)

| # | Finding | Evidence | Severity | Status |
|---|---|---|---|---|
| 1 | No robots.txt or sitemap | `/robots.txt` and `/sitemap.xml` returned 404 (an HTML 404 page) | High | Fixed |
| 2 | Duplicate titles and descriptions | 247 of 267 pages shared the title "ePlan.ai \| AI Environmental Planning Platform", and 249 shared one description. Only `/docs/*` and `/checkout` set their own | High | Fixed |
| 3 | No canonical tags | 0 of 267 pages had `<link rel="canonical">`. `/?tryIt=true` duplicated the homepage | High | Fixed |
| 4 | `metadataBase` resolved to localhost | `og:image` and `twitter:image` were `http://localhost:3000/brand/og-image.png` on every page. The landing deploy job never set `NEXT_PUBLIC_LANDING_URL` or `LANDING_URL` (the API and web jobs did), so Next fell back to localhost. Social cards were broken site-wide | High | Fixed (workflow + guard) |
| 5 | Docs used the upstream brand | `/docs` was titled "TurboPlan Documentation" with an H1 to match. 23–31 "TurboPlan" mentions per docs page, in titles, sidebar, prose and search | High | Fixed |
| 6 | `app.eplan.ai` was indexable and competed with the homepage | `/login` returned 200 with no robots meta and the **same title and description** as eplan.ai. `/profile` and `/logout` returned 200 to anonymous visitors. No robots.txt. Every eplan.ai page links to `app.eplan.ai/login` | High | robots.txt added; noindex meta still open (see Open items) |
| 7 | Soft 404s | Unknown URLs under `/docs`, `/projects/<org>` and `/projects/<org>/<office>` returned **200** with a noindex not-found page, including for the Googlebot user agent. A truncated slug (`/projects/dot/pipeline-and-hazardous-materials-safety-`) is linked from `/projects/dot` and soft-404s. Cause: the root layout wraps every page in `<Suspense>`, so the status is sent before `notFound()` runs | Medium | Fixed for `/docs` and `/templates` (`dynamicParams = false`). `/projects/*` remains (Open items) |
| 8 | `/pricing` returned 404 | Nothing links to it (the nav uses `/#pricing`), but it is the URL people type and the obvious Ads URL | Medium | Fixed: 307 to `/#pricing` |
| 9 | `/login`, `/signup`, `/privacy`, `/terms`, `/about` returned 404 | Direct requests | Medium | `/login` redirects to the app. **No privacy policy or terms page exists** (Ads blocker, see below) |
| 10 | Project and template lists aren't in the HTML | Office pages server-render only the hero. Project and template cards load client-side over SWR, so the HTML has no links to project or template detail pages. Google may find them after rendering JavaScript; other crawlers won't | Medium | Open |
| 11 | No structured data | 0 JSON-LD blocks on 267 pages | Low | Added to template pages |
| 12 | Old copy confused keyword tools | The description "plan projects in minutes instead of months" reads as project-management software. Google's site keyword tool returned 0 NEPA ideas | Medium | Fixed: title and description lead with NEPA/CEQA |
| 13 | Marketing HTML is never cached | `cache-control: private, no-cache, no-store` on `/` because the root layout reads cookies and the session. Every visit renders on the Worker. TTFB was about 0.3 s in testing | Low (CWV) | Open |
| 14 | Image weight | The homepage uses `next/image` with `sizes`. Missing alt text was decorative `alt=""` only. The heaviest assets are `og-image.png` (814 KB, social only) and `project-header-default-background.jpg` (456 KB, served optimized). Homepage HTML is 189 KB raw / 21 KB gzip with 29 script tags and 2 CSS files (38 KB) | Low | No action |
| 15 | Headings | Every crawled page had exactly one `<h1>` (the not-found page had none) | — | OK |
| 16 | Analytics/Ads tags not live | The production HTML had no `gtag`/`AW-`/`G-` references. The GitHub vars `GA_MEASUREMENT_ID`, `GOOGLE_ADS_TAG_ID` and `NEXT_PUBLIC_POSTHOG_KEY` exist | High (for Ads) | Analytics PR |

Found during the fix: **fumadocs-mdx 11.10.1 ignores collection `schema` under
webpack.** Its webpack adapter calls `querystring.parse(this.resourceQuery)`,
which keeps the leading `?`, so the key is `?collection` and no frontmatter
schema or transform ever runs. Global `mdxOptions` still apply. Frontmatter
rebranding therefore runs as a `loader()` plugin in `src/lib/source.ts`. Worth
reporting upstream.

## What this PR changes

**Crawling and indexing**
- `apps/landing-page/src/app/robots.ts`: allows the site, disallows `/api/`,
  `/ingest/` and `/monitoring`, and points to the sitemap. `/checkout` is not
  disallowed on purpose: it carries `noindex`, which crawlers must be able to
  fetch to see. When `APP_ENV` is set to anything other than `production`
  (develop, pr_preview), robots.txt disallows everything. An unset `APP_ENV`
  counts as production, so a fork can't accidentally de-index its live site.
- `apps/landing-page/src/app/sitemap.ts`: home, `/templates` plus the 5 pages,
  the `/projects` index pages and all 18 docs pages from the Fumadocs source.
  Public organizations, offices, projects and templates are **not** listed
  because enumerating them needs the API at build time. A follow-up could serve
  a dynamic sitemap from the public API.
- `apps/turboplan/app/robots.ts`: `Disallow: /` for the web app.
- `.github/workflows/cloudflare-deploy.yml`: the landing job now resolves
  `landing_url` (production uses `PRODUCTION_LANDING_DOMAIN=eplan.ai`) and
  passes `NEXT_PUBLIC_LANDING_URL` to the build and deploy steps.

**Metadata**
- `src/lib/seo.ts` provides `buildPageMetadata()`: per-page title,
  description, canonical, `og:url` and full OG/Twitter blocks. Next merges
  metadata shallowly, so a page-level `openGraph` used to drop the siteName and
  image. The canonical is omitted if the site URL is unknown, rather than
  pointing to localhost. A title that already contains the brand skips the
  template.
- The root layout uses a title template (`%s | ePlan.ai`) and a default title
  of "ePlan.ai — AI for NEPA & CEQA Documents: Scoping Letters, CEs, EAs". The
  NEPA/CEQA description replaces "plan projects in minutes instead of months".
  The "open source" claim was dropped from the description. I couldn't verify
  it, and the request was for NEPA/CEQA-first copy; restore it if it should
  stay.
- `/docs` pages use `%s | ePlan.ai Docs`. Organization, office, project and
  template catalog pages get `generateMetadata` (via `src/lib/catalog-metadata.ts`
  for organizations and offices). `/checkout` is `noindex, follow`.
- The homepage `page.tsx` is now a server component, so it can export metadata.
  Its content moved to `components/home-v2/home-page.tsx`.

**Docs branding.** "TurboPlan" becomes `brand.name` in prose and copy-bearing
JSX props (remark plugin) and in titles and descriptions (source loader
plugin). The MDX stays identical to upstream, so docs merges don't conflict.
URLs and code identifiers (`/docs/getting-started/what-is-turboplan`,
`turboplan-catalog`) are unchanged.

**Links.** `/pricing` returns 307 to `/#pricing` and `/login` returns 307 to
the app's `/login` (both temporary, like `/contact`). The footer gains a
"Templates" link. Unknown `/docs/*` and `/templates/*` URLs now return 404.

## The five pages chosen and why

Each page covers a document the product drafts today. Evidence: the home FAQ
("scoping letters, Categorical Exclusion decision memos, Environmental
Assessments"), `pricing.yaml` ("Generate CEQA/NEPA scoping letters",
"EA/EIR/Decision Memos"), the NEPA and CEQA lists in
`turboplan-ai/src/prompts/next-step-suggestions.ts` ("EA with FONSI, or EIS
with ROD"; Initial Study, MND, MMRP), and the live public catalog (6 USFS
categorical-exclusion templates). Phase I ESA, SWPPP and Biological Assessment
were rejected: nothing in the product generates them. A purpose-and-need page
was replaced by the EIS page because of volume (about 20/mo); purpose and need
is now a linked section on the EA and EIS pages.

Keyword data: DataForSEO + Google Keyword Planner, US 12-mo avg, 2026-10-02
(dash-0b research).

| Slug (fixed; the ads plan uses these) | Title | Target terms (monthly volume) |
|---|---|---|
| `categorical-exclusion-decision-memo` | NEPA Categorical Exclusion (CE) Decision Memo Template & Examples | nepa categorical exclusion 390, categorical exclusion 320, decision memo 170, 23 CFR 771.117 170, 43 CFR 46.210 50, 10 CFR 1021 50, CE checklist/examples ~60 (cluster ≈1,200) |
| `nepa-scoping-letter` | NEPA Scoping Letter Template and Guide | The only term with real ad bids ($4.60–16.86 CPC). **Google Ads landing page for the Scoping ad group** |
| `nepa-environmental-assessment` | NEPA Environmental Assessment (EA) & FONSI Template and Outline | nepa environmental assessment 210, fonsi nepa 170, what is an environmental assessment 110, finding of no significant impact 50, ea vs eis 50, environmental assessment example 50. Bare "environmental assessment" is **not** targeted (Phase I ESA dominates it); the page says it isn't a Phase I ESA |
| `ceqa-initial-study` | CEQA Initial Study & Mitigated Negative Declaration (Appendix G Checklist) | ceqa appendix g 170, mitigated negative declaration ~100–220, is mnd 70, ceqa checklist 70, appendix g checklist ~60, ceqa initial study 50 |
| `environmental-impact-statement` | Environmental Impact Statement (EIS) Template, Outline & Examples | environmental impact statement 1,300, what is an environmental impact statement 480, definition 210, EIS example/sample ~140 each, nepa eis 170, record of decision 90 |

What each page has:
- A unique title, description and H1.
- What the document is, when it's used, and its typical sections.
- In-depth sections: agency CE lists, FONSI, EA vs EIS, the Appendix G
  checklist, MND, the EIS process, record of decision, and purpose and need.
- How ePlan drafts it, with an example project description.
- An FAQ with `FAQPage` JSON-LD, plus `BreadcrumbList` JSON-LD.
- Links to the other pages, the docs and the project-template catalog.
- A disclaimer.

All content comes from one typed file (`src/consts/document-templates.ts`), and
one route (`/templates/[slug]`) uses `generateStaticParams` with
`dynamicParams = false`.

How visitors convert: the hero embeds the homepage's project prompt
(`SearchInput`). Submitting opens the signup modal on the template page itself
(the existing `hero_prompt_submitted` and `signup_started` events), with no
detour through the homepage. "Try an example" fires `quick_start_selected` with
`{surface: "template_page", template}`. The bottom "Start drafting" fires
`try_it_clicked` with `{surface: "template_page", template, placement}`. The
`/templates` index CTA goes to `/?tryIt=true` and fires `try_it_clicked` with
`template: "index"`.

Regulatory copy stays conservative. It describes the NEPA statute as amended in
2023 (EA 75 pages/1 year, EIS 150–300 pages/2 years), lists agency CE lists in
general terms, and tells readers to check current text because CEQ rescinded
its NEPA regulations and agencies revised their procedures in 2025. It quotes
no rescinded CEQ sections and makes no statistics or legal guarantees. Search
volume for "nepa regulations" peaked at 2,900/mo in Feb 2025 and is now 140.

Note: Google has shown FAQ rich results only for well-known government and
health sites since 2023, so the FAQPage markup won't produce rich results for
eplan.ai. It is still valid and describes the content.

## Ads: why to wait, and what to do before launching

Demand is thin (the largest target is about 1,300/mo) and searchers want a
specific document. Only the scoping cluster has real bids. Spending before the
following are true buys clicks with no way to measure them:

1. **Conversion tracking live and verified.** After the analytics PR deploys,
   use Tag Assistant to confirm the `AW-18490467941` tag and GA4 load on
   eplan.ai and app.eplan.ai. Confirm `sign_up` and `purchase` (from
   `checkout_completed`) reach GA4 DebugView with the server-side `_ga`
   session join working.
2. **GA4 linked to Google Ads.** Import `sign_up` (primary) and `purchase`
   (primary, with value) as conversions, and keep `try_it_clicked` and
   `signup_started` secondary. Enable auto-tagging (gclid) and confirm gclid
   survives the eplan.ai → app.eplan.ai handoff.
3. **Privacy policy and terms pages** (currently 404). Google's Analytics and
   Ads terms require a privacy policy disclosing these tags and cookies. A
   consent banner may also be needed, depending on the audience. Product/legal
   decision.
4. **Landing pages that match intent.** Send the Scoping ad group to
   `/templates/nepa-scoping-letter` and give other ad groups their matching
   `/templates/*` page, never the homepage. Wait about 2–4 weeks of organic
   indexing to see which pages Google trusts.
5. **Negative keywords for thin demand:** "phase i", "esa" (site assessment),
   "real estate", "jobs", "salary", "course", "training", "certification",
   "pdf download free", "template word free" (decide), and state acts that are
   out of scope (SEQRA, SEPA) until those pages exist.
6. **Budget guardrails.** Exact/phrase match only at launch, a daily cap, a
   CPA target set from trial-to-paid data, the US only, and weekly
   search-terms review. Stop if CPA exceeds 2× target after about 30
   conversions.

## Operator steps (not code)

- Verify `eplan.ai` in Google Search Console (DNS TXT on the domain property),
  submit `https://eplan.ai/sitemap.xml`, and request indexing for the five
  `/templates/*` pages. Repeat in Bing Webmaster Tools.
- After deploy, check that `https://eplan.ai/robots.txt` lists the sitemap,
  that `og:image` is `https://eplan.ai/brand/og-image.png` (not localhost), and
  that `app.eplan.ai/robots.txt` returns `Disallow: /`.

## Open items

- **Noindex on app.eplan.ai.** robots.txt `Disallow` stops crawling but doesn't
  remove URLs Google already knows about (linked from every eplan.ai page).
  Add `robots: { index: false, follow: false }` to the metadata in
  `apps/turboplan/app/layout.tsx`, which is outside this task's scope. For
  pages already indexed, either use Search Console's removals tool, or briefly
  allow crawling with noindex until they drop out and then disallow.
- **Soft 404s on `/projects/*`.** The root `<Suspense>` streams a 200 before
  the page's `notFound()` runs. `generateMetadata` now calls `notFound()` too,
  which gives noindex but still a 200 in dev for Googlebot and Bingbot. A real
  fix would move the Suspense below the page or check the organization or
  office in middleware. Also fix the truncated office slug
  (`pipeline-and-hazardous-materials-safety-`) in the data.
- **Server-render project and template lists** on organization and office
  pages, or add a dynamic sitemap from the public API, so detail pages are
  discoverable without JavaScript.
- **Cache marketing HTML.** It is `no-store` because the root layout reads the
  session and cookies. Moving the session-dependent navbar bits client-side
  would let `/`, `/templates/*` and `/docs/*` be cached.
- **Organization/WebSite JSON-LD** on the homepage (brand knowledge panel).
- **Content follow-ups for a later `/regulations` library** (out of scope
  here): state acts (NY SEQRA, WA SEPA), the CEQ 2025 rescission and agency
  procedure changes ("nepa regulations" peaked at 2,900/mo in Feb 2025, now
  140), and named-project pages.
- **Product copy to confirm.** Whether "open source" belongs in the site
  description, and the home FAQ's data-storage answer, which is marked TODO in
  code.
