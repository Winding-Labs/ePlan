# eplan.ai: SEO, ad landing pages and speed, in fix-pack rounds (2026-10-02)

Status: **Round 1 in progress** (branch `feat/seo-fixpack-1`, stacked on #34).
Builds on `2026-10-02-seo-ads-analytics-audit.md` (technical SEO basics, shipped in
#34) and `2026-10-02-analytics-master-pattern.md` (tracking, #34). This plan covers
what those leave open outside the page system, which dash-0b owns (#35/#36): legal
pages, crawlable and cacheable HTML, page speed, dead code, and checking the ads
against the live pages after every release.

## 1. What we measured (2026-10-02)

| Source | Result |
|---|---|
| DataForSEO Labs `ranked_keywords`, `domain_rank_overview`, `site:eplan.ai` | **eplan.ai ranks for 0 keywords.** Only the home page is indexed. Searches for "eplan.ai" and "eplan ai" return EPLAN (electrical CAD), EPLAN Copilot and Tennessee's ePlan, never us. |
| DataForSEO volumes (1,108 keywords from dash research + 32 new SERPs, $0.20) | 19,300 searches/mo are addressable, excluding the two head terms "nepa" (22,200) and "ceqa" (5,400). Explainer intent carries the volume: EIS ~2,390, EA/FONSI ~1,730, CE ~1,660, NEPA process ~1,810, CEQA ~6,580, CEQA exemptions ~1,910. "… template" queries are 10–90/mo, and agency PDFs win those SERPs. |
| SERPs | AI Overview on 60/61 and People Also Ask on 53/61. epa.gov, energy.gov, lci.ca.gov, npi.org and Harvard EELP own them. Weak SERPs to win first: "EIS example" (Quora/Medium in the top 10), "fonsi nepa", "finding of no significant impact", "nepa compliance", "ceqa and nepa". |
| Google Ads account 256-990-8425 (read-only GAQL) | **0 campaigns, ever.** One conversion action, "Sign-up". Two specs disagree: ash main #229 lands on `/nepa*`, open ash #232 on `/templates/*`. Every final URL except `/` returns 404 on prod. |
| Ad copy vs pages | Template pages had no pricing, "free" or "minutes" text, yet every ad headline says it. Some ad claims are only partly true: "Cites Regulation & Location" (the drafting prompt doesn't require a citation), EIS drafting (Max lists EA/EIR/Decision Memos only), and Appendix G (the generic generator handles it). The display path `nepa-ceqa/documents` is shown on NEPA-only ads. |
| Crawl (#34 audit, 267 URLs) | Fixed in #34: robots, sitemap, titles, canonicals, og:image, docs branding. **Still open:** soft 404s on `/projects/*`, lists rendered client-side, `no-store` HTML, no privacy/terms page, no Organization JSON-LD. |
| Code | Two page systems for the same keywords: #34 `/templates/[slug]` (5 pages) and `feat/nepa-seo-pages` 8efe489 (6 pages, cited sources, pricing, no PR). knip flags 23 unused files and 24 unused dependencies (22 and 27 after grep checks) in `apps/landing-page`. Checkout asks users to agree to Terms and a Privacy Policy that don't exist. |
| Speed | See §5 (Lighthouse, mobile and desktop). |

## 2. Decisions

1. **Pages are owned by dash-0b (owner's call, 2026-10-02), on top of #35.** That plan is
   #36 (`2026-10-02-eplan-page-system.md`). It includes one page system, one URL per keyword
   cluster under `/nepa/*` and `/ceqa/*`, 308s from `/templates/*` and `/categorical-exclusions`,
   a keyword-contract test and shared home-v2 components. These fix packs don't touch
   `src/{app,components/home-v2,components/nepa-page,consts}` except where §3 says so. They
   carry the DataForSEO and ad-match findings (§1) over to that work.

   Agreed URL map (ads final URLs; ash #232 v1.1):

   | Cluster | URL | Was |
   |---|---|---|
   | NEPA process / what is NEPA | `/nepa` | — |
   | Categorical exclusions | `/nepa/categorical-exclusion` | `/categorical-exclusions`, `/templates/categorical-exclusion-decision-memo` |
   | EA + FONSI | `/nepa/environmental-assessment` | `/templates/nepa-environmental-assessment` |
   | EIS + ROD | `/nepa/environmental-impact-statement` | `/templates/environmental-impact-statement` |
   | Scoping letters | `/nepa/scoping-letter` | `/templates/nepa-scoping-letter` |
   | CEQA Initial Study / MND | `/ceqa/initial-study` | `/templates/ceqa-initial-study` |
   | NEPA AI & software (ad group) | `/nepa-software` | — |
   | Brand | `/` | — |
2. **Pages say only what's true, and the ads say only what's on the page.** Ad
   copy is fixed in the ash spec (owner: dash-0b, #232) and page copy in #36. No
   "cites the regulation" claim until the product does it (§4, Round 3).
3. **Privacy and Terms pages ship before any campaign is enabled.** They follow the
   sibling products' pattern (meetzest.com, ionwarp.com: plain pages naming the
   service) and list the processors actually used.
4. **Marketing HTML is static and cacheable.** The root layout stops reading the
   session and cookies, so `/`, `/nepa/*`, `/ceqa/*` and `/docs/*` prerender. The
   signed-in navbar state moves client-side.
5. **Delete what isn't used:** unused files and dependencies, the landing app's own
   boilerplate Playwright suite, the ESLint and Prettier setup (the repo uses Biome), and
   `dotenv` in the root layout.

## 3. Coordination

| Who | Owns | Agreed |
|---|---|---|
| eplan-53 | #34: analytics + SEO basics (`lib/seo.ts`, robots, sitemap, canonicals) | Base of this stack. Tracking goes through `@wildfires-org/turboplan-analytics` |
| dash-0b | Pages (#35 → #36 → its rounds), the shared home-v2 components and footer, and ash #232 (ads) | Adds the Privacy/Terms footer links. Updates final URLs and copy before #232 merges. No bootstrap until the URLs return 200 on eplan.ai |
| eplan-89 (this plan) | Legal pages, checkout legal links, dead code, page speed and caching (root layout, navbar session state), crawlability of `/projects`, re-audits of each release | Round 2 touches `src/app/layout.tsx` and the session part of `home-v2/navbar.tsx`, once dash-0b agrees |

## 4. Rounds

Each round is one PR (one fix pack). The steps:

1. Local: typecheck, unit tests, `next build`, then Playwright e2e against the local
   landing site (desktop and mobile), the technical-SEO skill, and Lighthouse.
2. PR to `develop`, stacked on #34 until it merges. CI, then preview
   (`turboplan-landing-pr-<n>`), then a Chrome check on the preview.
3. Merge to `develop` (staging), then release PR `develop` → `main` (production
   eplan.ai).
4. Chrome check and an audit of eplan.ai. Findings become the next round's fix pack.

### Round 1: legal pages, checkout links, dead code

- `/privacy` and `/terms` (`components/legal/legal-page.tsx`). They list the processors the
  product actually uses and read the brand name and support email from env, so forks
  rebrand them.
- Both checkout flows (landing `CheckoutView`, app `UpgradeModal`) link "Terms of
  Service" and "Privacy Policy" to those pages through a new `getLandingUrl()`. They
  pointed at `#` or nothing.
- Delete 22 unused files and 27 unused dependencies (knip, each hit grep-verified;
  `lib/telemetry-proxy.ts` is used by `middleware.ts` and stays). Also delete the landing
  app's own Playwright suite (one test of playwright.dev), `.eslintrc.json`, the
  Prettier/next-lint scripts, `jest.setup.ts` (jest-dom in a node environment), the
  dead `NEXT_PUBLIC_CATALOG_BASE_URL`, and `dotenv.config()` in the root layout. Rewrite
  the landing `CLAUDE.md`, which described tools and folders that no longer exist.

### Round 2: static, cacheable, crawlable HTML + speed

- Root layout without `getSession()`/`cookies()`. Session UI client-side. Drop the
  root `<Suspense fallback>` so `notFound()` returns real 404s (fixes the
  `/projects/*` soft 404s). Cache headers for marketing routes.
- Server-render the organization and office lists, or add a dynamic sitemap from
  the public API. Fix the truncated office slug in the data.
- The Lighthouse opportunities in §5: fonts (9 Geist weights + Inter), unused JS
  per route, image weight.

### Round 3: ads ↔ live pages, citation claim, operator steps

- Re-run the ads ↔ page check (`ads-landing-match`: every ash spec headline against
  its final URL's live text) on eplan.ai once #36's pages ship, and fix what doesn't
  match.
- Decide whether drafts cite the governing regulation. Either add the rule to
  the drafting prompt with an eval on real AI output, or drop the claim
  everywhere.
- Operator: Search Console + Bing (sitemap, request indexing for the guide pages),
  GA4 ↔ Ads link and conversion import (#34 §7), then the ash bootstrap with the
  final URLs.

## 5. Speed

(Filled in from the Lighthouse pass. See Round 2.)

## 6. Acceptance per round

- Every URL in the sitemap returns 200, is self-canonical, has a unique title
  (≤ 60) and description (≤ 155), and has one H1.
- Unknown paths return 404 (including under `/projects`). Once #36 ships, every
  `/templates/*` URL returns 308.
- Every ad final URL returns 200 on eplan.ai, and each ad group's headlines
  appear in that page's text (checked by script against the ash spec).
- Lighthouse mobile performance ≥ 90 on `/` and `/docs`. CLS < 0.1.
- No new dead code (knip clean for `apps/landing-page`).
