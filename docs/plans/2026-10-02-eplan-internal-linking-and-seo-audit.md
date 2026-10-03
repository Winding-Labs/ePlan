# eplan.ai: internal linking plan + technical SEO audit fixes (2026-10-02)

Owner, 2026-10-02:
- *"Run our Claude SEO skill against all these pages and make any improvements."*
- *"Make sure to do an internal linking plan from the Claude SEO recommendation skills and connect the footer nice to make sure it's all linked … they have the best footer SEO configuration."*

**Skills used:**
- `technical-seo-audit` (SEOmator 5.1.0, 373 rules) on all 34 production URLs (32 guides, `/for`, home), plus its manual curl checklist.
- Serpie's `internal-link-builder`, with the topical-clusters variant: pillar ↔ spoke links, contextual links over navigation links, and 3–5 new links per page.

## 1. Internal linking plan

### Clusters (pillar → spokes)

| Cluster | Pillar | Spokes |
|---|---|---|
| NEPA documents | `/for/nepa` | categorical exclusions, environmental assessment, EIS, scoping letter, NEPA regulations |
| Agency NEPA procedures | `/for/nepa` (its "Where NEPA procedures live now" bullets) | Forest Service, Interior/BLM, FHWA, DOE, FAA, FEMA, HUD |
| CEQA | `/for/ceqa` | initial study, exemptions, EIR, CEQA and NEPA, CEQAnet |
| State review | `/for/state-environmental-review` | NY SEQR, WA SEPA, MA MEPA, HI HEPA (and CEQA) |
| Federal reviews alongside NEPA | `/for/nepa` | Section 106, ESA section 7, HUD Part 58, FEMA EHP |
| Research tools | `/for/nepa-examples` | EIS database, NEPAssist, IPaC, CEQAnet |
| Product | `/for/nepa-software` | AI tools for NEPA |

### Rules, each enforced by `consts/guides/guides.test.ts`

- **Contextual links:** every guide is linked from **at least two other guides' copy**, not only from the footer. Links are written into the copy as `[anchor](/for/slug)` and render through `CitedText`. The anchor is the target page's keyword, in a sentence that is already on the page.
- **Hubs:** each family hub links **every page in its family**: `/for/nepa` (NEPA), `/for/ceqa` (CEQA), `/for/state-environmental-review` (state).
- **Valid targets:** every in-copy link targets a registered page, and FAQ answers stay plain because they feed JSON-LD.
- **Footer:** `nav.ts` names every registered page under a family the footer lists. It is `Record<GuidePath, …>`, so the compiler refuses a page that is left out.

### Result

| | Before | After |
|---|---|---|
| Contextual links between guides | 14 | **140** |
| Guides with fewer than 2 contextual inbound links | 25 of 32 | **0** |
| Footer guide links | 7 (a partial row under the footer card) | **every guide (32)** by family, plus `/for`, Projects, Docs, Contact, Sign In, Privacy, Terms |
| "Keep reading" cards | same family first | the guides this page links to in its copy first, then its family |

### How the anchors were chosen

1. For each page, a target list per cluster: the pillar, then 2–4 siblings.
2. The first natural occurrence of the target's keyword in the page's own text becomes the anchor. 78 links came from this pass, for example "7 CFR 1b" → Forest Service and "CEQAnet" → CEQAnet.
3. Where the copy had no such phrase, one short sentence was added to the outline intro. Those 20 sentences restate a fact already on the page or the target page, such as "SEQR is one of the state environmental policy acts similar to NEPA."
4. The pillar's agency bullets became links. A cited line covers FAA (Order 1050.1G), FEMA (Directive 108-1) and HUD (24 CFR Part 58).

### One nav module

`consts/guides/nav.ts` holds every guide's name, family and hub, and no page content. The footer is a client component, so it can import nav without bundling the 32 pages. The `/for` index, breadcrumbs, related cards and `llms.txt` read the same list. Page modules now write only their content (`GuideContent`), and `index.ts` merges in their place in the site.

## 2. Technical SEO audit (SEOmator, production, before this PR)

Median score **92/100** (A) across the pages audited. The issues to fix were template-level, the same on every page.

| Finding (rule) | Pages | Fix in this PR |
|---|---|---|
| Meta description wider than the ~920 px Google shows (`content-description-pixel-width`) | 32/32 guides + home + `/for` | Every description rewritten to ≤ 889 px. `snippetWidthPx()` in `lib/seo.ts` (Arial at 15 px; matches SEOmator's 1,033 px within 4 px) and a test hold every guide, the home page and `/for` to `DESCRIPTION_MAX_PX = 920`. |
| Hero and bottom-CTA headings contained every typewriter sizing copy, so crawlers read 5 headlines run together as the page's H2 (manual checklist: "typewriter sizing copies") | all | Sizing copies moved out of the heading into an `aria-hidden` sibling in the same grid cell. Same layout; the heading is its label plus one live line. |
| Trailing slash served a duplicate 200 (`/for/nepa/`) | all | 308 to the slashless URL, with the query kept. |
| **`middleware.ts` never ran**: it sat at the app root, but with a `src/` dir Next.js only loads `src/middleware.ts`. Since v1.0.0 the `/ingest` credential stripping and the CORS preflight were dead code. | all | Moved to `src/middleware.ts`. `/ingest` returns early, so PostHog's trailing-slash paths are untouched. |
| No content date signal (`eeat-content-dates`) and no Article schema | guides | `Article` JSON-LD (headline, `datePublished`/`dateModified` = sources read date, publisher, `citation` = every source URL) plus a `<time datetime>` on "each read on …". |
| No JSON-LD on home or `/for` (`schema-present`, `schema-website-search`) | 2 | Home: `Organization` + `WebSite`. `/for`: `CollectionPage` (every guide) + `BreadcrumbList`. |
| No `llms.txt` (`geo-llms-txt`) | all | `/llms.txt`: every guide by family with its description, from the same registry. |
| No skip link (`a11y-skip-link`) | all | "Skip to content" → `#main-content`. |
| Sitemap URLs not linked from crawled pages (`crawl-sitemap-orphan-urls`, 41/55) | all | Fixed by the footer: every guide is linked from every page. |

**Already fixed on develop by other PRs, not yet on production:**
- the 2400×1260, 814 KB OG image (now 1200×630, 201 KB);
- `private, no-store` HTML (#43 prerenders pages);
- the soft 404 for an unknown `/for/<slug>` (#39);
- the duplicate `<main>` landmark.

**Left as is, with the reason:**
- **Not search signals (owner or infra calls):** CSP, HSTS preload, COOP and Trusted Types; consent mode (an Ads/legal decision for the owner).
- **Heuristics:** "social share buttons", "author byline" (organization-authored, cited guides), "reading level" (legal topic), "stop word in URL" (`/for` is the owner's choice).
- **Contradicted by our own tests:** `mobile-horizontal-scroll`, which reads `width="1554"` on responsive images. Playwright measures no overflow at 390 px on all 32 pages.
- **Not broken:** "unreachable external links". `leginfo.legislature.ca.gov` refuses bots, and the citations open for people.
- **Weight:** HTML weight and DOM size are template weight (showcase and features). #43 halved the JavaScript; more is a design change, not a fix.

## 3. Verify after release

1. Re-run SEOmator on the same 34 URLs and run `seomator compare eplan.ai`. Every row in §2 should flip.
2. Run the Rich Results Test on one guide (Article, Breadcrumb).
3. In Search Console (after the owner verifies the domain), submit `sitemap.xml`. `llms.txt` is not part of the sitemap.

## 4. Round 3 (2026-10-03): ads ↔ pages audit + SEOmator re-audit

**Inputs:**
- eplan-36's round-3 audit of the 26 ad final URLs against the live account.
- The SEOmator re-audit of all 34 URLs after release #48. Median 92 → 92 (max 95). Description-width fails went **29 → 0**, inline-JS fails 17 → 4, and the skip link, main landmark, content dates, OG image and sitemap lastmod all flipped to pass.

| Finding | Fix |
|---|---|
| Phone: no guide showed a signup action in the first screen ("Draft yours" at y=787–946 on a 664 px iPhone 13) | "Draft yours with ePlan" renders right under the H1 below `sm` (y=330–411); from `sm` up it stays in the pair. One visible copy per breakpoint. |
| Nav "Create Project", the bottom CTA and Starter's "Start free" all sent a guide's visitor to `/` | **Meta root cause:** every try-it button hard-coded `routing.home({tryIt})`. Now there is one helper: `routing.tryIt(pathname)` uses this page's own prompt (home and every guide), and the hero scrolls to the prompt, not the page top. Nav "Pricing" uses `routing.pricingOn(pathname)` (the guide's own `#pricing`). |
| Two guides targeting the same query: "23 cfr 771.117" (CE + FHWA), "record of decision" (NEPA + EIS), "decision memo", "categorical exclusion examples", "environmental assessment/EIS example(s)", "ipac", "nepa ai" | Test: **every keyword belongs to exactly one page** (plural-folded). Each keyword was resolved to the page whose subject it is. |
| "seqr" passed the secondary-keyword check only as part of "seqra" | Keywords match whole words, plural allowed (canaried: a planted "nepa doc" goes RED). |
| Top ad keywords missing from the title/H1 | `/for/nepa` "NEPA Process & NEPA Documents"; SEQR title "SEQRA and SEQR"; FHWA title "23 CFR 771.117"; EIS title "NEPA … (EIS)"; CEQA H1 "What is CEQA?"; initial study H1 spells out "mitigated negative declarations"; the ESA, Section 106 and EIR descriptions spell out the act and the notice of determination. |
| 15 descriptions shorter than 120 characters (SEOmator `core-description-length`) | Test: `DESCRIPTION_MIN_LENGTH = 120`, alongside the ≤920 px width. All 15 were rewritten. |
| The shared price line "Scoping letters on the free plan; EAs, EIRs…" matched the ads `banned_copy` free-EA rule, so an ad could not quote it | "Scoping letters are free. EAs, EIRs and decision memos are on Max at $199 a month" |
| `/for` listed 32 `Article` nodes with no author or dates (`schema-article` fail) | `CollectionPage.mainEntity` is an `ItemList` of links; each guide's own page carries its Article. |
| Two Organization nodes per guide, with no `@id` (`schema-entity-id`) | One `organizationJsonLd()` with `@id` `/#organization`, used by home, the WebSite publisher and every Article's author and publisher. |

**Left as is:**
- Link density (`content-article-links`, 34 pages): the full footer is the owner's call.
- HTML cache policy: HTML is cached at the edge (`s-maxage`), not in browsers, by design.
- Font preloads (10 files): a design change, not a fix.
