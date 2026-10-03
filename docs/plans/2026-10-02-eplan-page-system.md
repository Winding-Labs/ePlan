# eplan.ai page system: every page, the keywords it must win, and the ads that land on it (2026-10-02)

Owner, 2026-10-02: *"Give me what pages we need to build for the full eplan system … the
campaigns & the pages you want on eplan.ai and what keywords they need to hit and what
works in terms of keywords. You should build it on top of this PR"* (ePlan #35).

**As built, 2026-10-02 (owner: *"let's do /for/ instead of /templates … all of the Google
ads and SEO keywords have pages … based off of the shared template and they have the for
prefix"*):** every page below lives at **`eplan.ai/for/<slug>`**: 32 pages on one shared
template, served by one route, with a `/for` index. The URL paths that #35 and #34 shipped
308 to them. §2 is the system, §3 the pages, §4 the campaigns.

**Started from ePlan #35** (`feat/nepa-seo-pages`). It shipped:
- the one page template (`components/nepa-page/nepa-page.tsx`), with page bodies in `consts/nepa-pages.ts`;
- dated, numbered citations, enforced by `nepa-pages.test.ts`;
- FAQPage and BreadcrumbList JSON-LD;
- a "Draft yours" prompt that hands off to signup;
- robots.ts, sitemap.ts, canonicals and the `NEXT_PUBLIC_LANDING_URL` fix;
- noindex on the client-rendered catalog listings;
- six pages: `/nepa`, `/categorical-exclusions`, `/nepa/environmental-assessment`,
  `/nepa/scoping-letter`, `/nepa-software`, `/compare/nepa-ai-tools`.

#35's content and citations carried over. Its template was replaced by the shared one in §2.

**Evidence:** DataForSEO and Google Keyword Planner, US / English, measured 2026-10-02.
- Google Ads volume, a 12-month average with a 24-month series.
- Clickstream cross-checks on every Google number over 1,000.
- 34 live SERPs plus 4 checked in Chrome.
- Transect's ranked keywords.

The full data and method are in dash `docs/plans/2026-10-02-eplan-keyword-research.md`.
- 1,108 keywords, each with a target page: dash `agents/skills/google-ads-optimize/references/research-2026-10-02-eplan/keywords.csv`.
- The report: <https://claude.ai/artifact/4jyqczFDbSmeaR7h3JG8ag>.

Volumes below are US searches/month. "cs" means the clickstream figure, used where Google's
number is inflated by grouping.

## 1. What works in keywords

1. **Search the document, not the tool.** Planners type the document they owe:
   - "nepa categorical exclusion" 390
   - "fonsi nepa" 170
   - "ceqa appendix g" 170
   - "24 cfr part 58" 260 (cs 407)

   Tool words have no demand. Each of these gets 0–10/month:
   - "nepa software"
   - "environmental planning software"
   - "ai environmental review"
   - "accelerate environmental planning"
   - "ai nepa software"

   **So:** the product's names ("AI NEPA Software", "Accelerate Environmental Planning")
   go in headlines, H1s and copy. The keyword targets are documents.
2. **Citations are keywords.** Practitioners search the CFR section or handbook. These are
   near-zero competition, and only professionals type them:

   | Citation | Volume |
   |---|---|
   | 23 cfr 771.117 | 170 |
   | 7 cfr 1b (USDA's 2026 rules) | 140 |
   | doi nepa handbook | 140 |
   | 36 cfr part 800 | 210 |
   | faa order 1050.1f | 70 |
   | 36 cfr 218 | 70 |
   | fema ehp | 70 |
   | 24 cfr 58.35 | 50 |
   | 43 cfr 46.210 | 50 |
   | 10 cfr 1021 | 50 |

   Every page names its citations in a heading, not only in a footnote.
3. **Acronym and modifier forms.** Each document has an acronym form and a modifier
   form, and the page must answer both on one URL.
   - Acronyms: FONSI, ROD, NOI, MND, IS/MND, NOE, NOD, EAF, DNS.
   - Modifiers: "template", "example(s)", "checklist", "outline", "format".
     "eis examples" is 140; the other modifier forms are 10–60 each.

   Separate how-to and comparison pages earn nothing. Each of these is 0/month:
   - "eir vs mnd"
   - "how long does ceqa take"
   - "section 106 timeline"
   - "nepa comment letter"
4. **Head terms are big, informational, and polluted.** SEO can earn them. Ads must never
   buy them bare.

   | Head term | What else it means |
   |---|---|
   | "nepa" (cs ~10,300) | Northeastern Pennsylvania; the Newar language |
   | "eis" | a wine; an airport; executive information systems |
   | "environmental assessment" | Phase I environmental *site* assessments, 8,100–14,800 |
   | "sepa" | euro payments |
   | "sb 131" | a Hublot watch |
   | "ipac" (12,100) | USFWS's IPaC tool, but **verify intent before building** |

5. **Demand follows rule changes.** Search spikes last 1–3 months:

   | Term | Peak | Now |
   |---|---|---|
   | "nepa regulations" | 2,900 (Feb 2025, CEQ rule) | 140 |
   | "speed act" | 9,900 (Dec 2025) | 590 |
   | "sb 131" / "ceqa reform" | 3,600 (Jul 2025) | 260 |
   | "section 106" | 5,400 (Jul 2026, +900% in 3 months) | 3,600 |

   Pages that track rules carry a "last reviewed" date and get updated when the rule
   lands.
6. **Nobody bids, and AI Overviews top the results.** There are 0 ads on 34/34 NEPA/CEQA
   SERPs. Top-of-page bids are $1–8. An AI Overview appears on 33/34. Each page opens with
   a one-paragraph answer that an Overview can quote (#35's "Short answer" card), then a
   table, an FAQ built from People Also Ask, and primary-source links.
7. **Named projects are precedent, not traffic.** "Mountain Valley Pipeline" gets 90,500,
   but "<project> eis" gets 10–20. Examples pages and the catalog's project pages serve
   planners; news posts do not.
8. **Google currently files eplan.ai under project management.** `keywords_for_site`
   returned 53 of 53 project-planning ideas. Topical pages with document-first titles fix
   this. Until they do, ads stay exact/phrase only: no broad match, DSA, PMax or AI Max.

## 2. One page system, one URL per keyword

- **One URL scheme: `/for/<slug>`.** One route, `app/for/[slug]/page.tsx`, is built
  statically from the registry. `generateStaticParams` returns every guide, and
  `dynamicParams = false`, so an unknown slug 404s. `/for` is the index, grouped by family.
- **308s from every earlier URL** (`next.config.ts`):
  - `/templates`, `/templates/*`;
  - `/nepa`, `/nepa/*`, `/ceqa`, `/ceqa/*`;
  - `/categorical-exclusions`;
  - `/nepa-software`;
  - `/compare/nepa-ai-tools`.

  #34's `/templates` system and #35's `nepa-page` template and `nepa-pages.ts` are
  deleted.
- **A registry, one file per page.** `consts/guides/paths.ts` lists every path. Each page's
  content lives in `consts/guides/pages/<slug>.ts` (or `nepa.ts` / `product.ts`), typed
  `GuideEntry`. A page carries:
  - `primaryKeyword` + `secondaryKeywords`;
  - a cited `answer`;
  - `glance` rows;
  - `hero` examples;
  - a `draft` mock;
  - `comparison` rows;
  - `sections`, `outline`, `faq`;
  - its own sources.
- **Every page is the home page's own components, fed this page's data.** Nothing is
  copied:

  | Order | Component | What this page passes it |
  |---|---|---|
  | 1 | `GuideHeader` (new) | breadcrumbs, H1, the cited short answer, "ePlan gets you", "at a glance" |
  | 2 | home `Hero` | the prompt, plus five examples for this document ("Scoping Letter for Guardrail Repair", …); a pill fills the prompt and starts signup |
  | 3 | home `FeatureShowcase` | first tab "Create AI draft of <document>" with this document's draft mock, then the home tabs |
  | 4 | `ComparisonTable` (new) | ePlan vs. by hand: six shared product rows plus the page's own |
  | 5 | home `Features` | unchanged home sections |
  | 6 | article sections, outline, sources, pricing, FAQ, related guides, contact, CTA | page data |

  `HeroContent`, the showcase `tabs`, `DraftMock` and `AppPath` became props of the home
  components, with the home's own values as defaults. A product change to the hero or the
  draft view shows on every page.
- **A keyword contract that goes red** (`consts/guides/guides.test.ts`). It fails when:
  - the primary keyword is missing from the title or H1, or two pages share one;
  - a secondary keyword appears in none of the answer, an H2, the outline, an FAQ
    question or a glance row;
  - a title runs over 49 characters (49 + " | ePlan.ai" = 60);
  - a description runs over 155;
  - a citation has no source;
  - the copy claims approval, compliance or citations the product doesn't enforce;
  - a price disagrees with the billing catalog;
  - a draft mock lacks an `[INSERT]`.

## 3. The pages

**Every page below is built at its `/for` URL** (the ePlan page-system PR). The Status
column records the round that planned it. Not built: Montana MEPA and Minnesota EAW
(20–30 searches/month); the state hub covers both.

### R0: launch blockers (no ad spend until these are done)

| Page / fix | Why |
|---|---|
| `/privacy` | Required by the Google Ads and GA4 terms for the tags #34 adds. Live: 404. Must disclose the GA4, Google Ads, PostHog and cookie use. |
| `/terms` | Live: 404. Linked from the footer and the signup modal. |
| `www.eplan.ai` → `eplan.ai` | It serves a parked "/lander" page today. That is a DNS/redirect fix, not a page. |
| `app.eplan.ai` noindex | robots.txt Disallow does not drop URLs Google already knows. Needs `robots: { index: false }` in `apps/turboplan` metadata. |
| Search Console + Bing | Verify `eplan.ai`, submit the sitemap, request indexing for the guide pages. This is an operator step. |

### NEPA core

| URL | Status | Title / H1 must lead with | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|---|
| `/for/nepa` (hub) | #35 | "What Is NEPA? The NEPA Process, Documents & 2026 Rules" | what is nepa 1,600 (cs 661) | national environmental policy act / nepa (cs ~10,300), nepa process 390, nepa review 320, nepa documentation 170, nepa compliance 140, nepa permitting 110, nepa requirements 90, record of decision 90, nepa process flowchart 70 | NEPA process |
| `/for/nepa-categorical-exclusion` | #35 (renamed in R1) | "NEPA Categorical Exclusions (CE): Checklist, Examples & Decision Memo" | nepa categorical exclusion 390 | categorical exclusion 320, decision memo 170, ce explorer 20, categorical exclusion checklist/examples/form 10–30 | Categorical exclusions |
| `/for/nepa-environmental-assessment` | #35 | "NEPA Environmental Assessment (EA) & FONSI" | nepa environmental assessment 210 (cs 457) | fonsi nepa 170, what is an environmental assessment 110, finding of no significant impact 50, ea vs eis 50 + 50, environmental assessment examples 50, mitigated fonsi 20, EA template/outline/format 10 each | EA & FONSI |
| `/for/nepa-scoping-letter` | #35 | "NEPA Scoping Letter: Template, Example & What to Include" | scoping letter 40 ($4.60–16.86, the only real bid) | public scoping 10, nepa scoping 10, scoping letter template/example | Scoping letters |
| `/for/environmental-impact-statement` | **R1** (from #34's EIS page) | "Environmental Impact Statement (EIS): Outline, Examples & ROD" | environmental impact statement 1,300 (cs 457–1,160) | what is an environmental impact statement 480, EIS definition 210, nepa eis 170, eis examples 140 + example/sample variants, record of decision 90, programmatic EIS 40, supplemental EIS 30, notice of intent nepa 10; draft EIS 1,900 / final EIS 2,900 (unconfirmed by clickstream) | EIS (paused: no plan lists EIS drafting; Max lists EA/EIR/decision memos) |
| `/for/nepa-regulations` | **R2** | "NEPA Regulations in 2026: What Changed and Where the Rules Live Now" | nepa regulations 210 | speed act 2,400, permitting reform 1,000, fast-41 720, seven county infrastructure coalition v eagle county 260 + 210, permitting council 210, ceq nepa 170, nepa reform 110, federal permitting dashboard 90, 40 cfr 1500 70, fiscal responsibility act nepa 20 | NEPA regulations (paused until live) |
| `/for/nepa-examples` | **R5** | "NEPA Document Examples: EIS, EA and CE by Project Type" | eis examples 140 | environmental assessment examples 50, nepa examples 20, categorical exclusion examples 10; links to the catalog's server-rendered project pages (precedent) | — |

### CEQA

| URL | Status | Title / H1 must lead with | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|---|
| `/for/ceqa` (hub) | **R2** | "What Is CEQA? The CEQA Process, Guidelines & Documents" | ceqa 5,400 (cs 4,935) | ceqa california 1,300, california environmental quality act 880, ceqa guidelines 590, what is ceqa 480, ceqa meaning 260, ceqa reform 140, ceqa process 90, ceqa guidelines 2025/2026 90/70 | CEQA documents |
| `/for/ceqa-initial-study` | **R1** (from #34's CEQA page) | "CEQA Initial Study & Mitigated Negative Declaration (Appendix G Checklist)" | ceqa appendix g 170 | mitigated negative declaration ~150 (cs; Google says 14,800), ceqa checklist 70, negative declaration 70, ceqa initial study / initial study ceqa 50 + 50, ceqa mitigated negative declaration 40, mitigation monitoring and reporting program 30 | Initial Study & MND |
| `/for/ceqa-exemptions` | **R2** | "CEQA Exemptions: Categorical & Statutory Exemptions, Notice of Exemption, SB 131" | ceqa exemption 390 | ceqa categorical exemption 260, sb 131 480 (CEQA reform only), notice of exemption 140 + ceqa NOE 110, categorical exemption 70, ceqa statutory exemptions 70, ab 130 ceqa exemption 70, class 32 exemption 30–50, ceqa infill exemption 30 | CEQA exemptions (paused until live; the product must draft an NOE first) |
| `/for/ceqa-environmental-impact-report` | **R2** | "CEQA Environmental Impact Report (EIR), NOP & Notice of Determination" | notice of determination 390 | environmental impact report 210, ceqa notice of determination 90, ceqa eir 70, ab 52 tribal consultation 70, eir ceqa 40, draft eir 20, notice of preparation 10–20, final eir 10 | CEQA documents |
| `/for/ceqa-and-nepa` | **R2** | "CEQA and NEPA: Joint Documents and How the Two Reviews Differ" | ceqa and nepa 320 (Google groups the nepa/ceqa word orders) | nepa vs ceqa 20, ceqa vs nepa 10 | CEQA documents |

### Federal reviews that run alongside NEPA

| URL | Status | Title / H1 must lead with | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|---|
| `/for/section-106` | **R3** | "Section 106 Review: NHPA Consultation Under 36 CFR Part 800" | section 106 1,900 (cs 1,679; +900% in 3 months) | nhpa section 106 720, national historic preservation act section 106 590, 36 cfr part 800 210, section 106 review 170, section 106 consultation 110, section 106 process 90, section 106 regulations 70, shpo review 30 | Section 106 (paused until live + product) |
| `/for/hud-environmental-review` | **R3** | "HUD Environmental Review (24 CFR Part 58): The Environmental Review Record" | 24 cfr part 58 260 (cs 407) | hud environmental review 210, 24 cfr 58 110, part 58 environmental review 50, 24 cfr 58.35 50, hud exchange environmental review 50, hud part 58 40, 24 cfr 58.5 40, environmental review record 20, part 50 environmental review 20 | HUD Part 58 (paused until live + product) |
| `/for/esa-section-7` | **R3** | "ESA Section 7 Consultation & Biological Assessments" | esa section 7 390 | endangered species act section 7 170, biological assessment 140, section 7 consultation 110, biological opinion 50, esa section 7 consultation 40, biological evaluation 40, usfws ipac 1,600 (a section, see `/for/ipac`) | ESA Section 7 (new, paused) |

### Agency NEPA procedures + categorical exclusions (one `agency` page each)

The agencies replaced CEQ's regulations with their own procedures in 2025–2026 (cited in
#35). Each page covers: where the agency's procedures live now, its CE list in plain
English, extraordinary circumstances, how it documents a CE, and the decision document.

| URL | Status | Primary keyword | Secondary keywords |
|---|---|---|---|
| `/for/usda-forest-service-nepa` | **R3** | 7 cfr 1b 140 | 36 cfr 218 70, usda nepa regulations 50, forest service nepa / usfs nepa 40 + 40, 36 cfr 220 40, 36 cfr 220.6 20 (cite as superseded), forest service nepa handbook 10 |
| `/for/interior-blm-nepa` | **R3** | doi nepa handbook 140 | blm nepa 70, doi nepa 50, 43 cfr 46.210 50, blm nepa handbook 50, 516 dm 10 |
| `/for/fhwa-nepa` | **R3** | 23 cfr 771.117 170 | fhwa nepa 40, fhwa categorical exclusion 30, fta categorical exclusion 20 (cite the Sep 1, 2026 FHWA/FRA/FTA final rule) |
| `/for/doe-nepa` | **R3** | doe nepa 70 | 10 cfr 1021 50, doe categorical exclusions 20, doe nepa procedures 20 |
| `/for/faa-nepa` | **R3** | faa order 1050.1f 70 | faa nepa 50 |
| `/for/fema-ehp` | **R3** | fema ehp 70 | — |

New ad group, R3: **"Agency NEPA procedures"**. It holds these citation keywords, moved
out of the CE group, at $4 max CPC, and lands each keyword on its own agency page. These
are the most professional searches in the set.

### State environmental review acts

| URL | Status | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|
| `/for/state-environmental-review` (hub) | **R4** | state environmental review acts (the "little NEPAs") — no single head term ("little nepa" cs ~0) | links each state page | — |
| `/for/new-york-seqr` | **R4** | seqra 1,000 (cs 763) | seqr 720 (cs 661), seqra process 110, nys seqr 90, seqr type ii actions 30 | NY SEQR (paused until live + product) |
| `/for/washington-sepa` | **R4** | washington sepa 320 | sepa checklist 140, sepa environmental checklist 30, sepa dns 20 | WA SEPA (paused until live + product) |
| `/for/massachusetts-mepa` | **R4** | mepa massachusetts 110 | mepa (2,400, shared with MT/MD; Transect ranks #10), mepa enf 20, mepa review 20 | — |
| `/for/hawaii-hepa` | **R4** | hepa hawaii 70 | hawaii environmental policy act 20, hrs chapter 343 20 | — |
| *not built:* Montana MEPA · Minnesota EAW | **R4** | mepa montana 30 · eaw minnesota 20 | environmental assessment worksheet 20 | — |

Transect's library (`transect.com/regulations/state/<state>/<act>`) is #1 for "seqra" and #21–28 for
"ceqa" and "washington sepa". These pages beat it by being document-first: what you
must file, its outline, and a draft prompt.

### Tools and precedent (practitioner research)

| URL | Status | Primary keyword | Notes |
|---|---|---|---|
| `/for/ipac` | **R5, after an intent check** | usfws ipac 1,600 | "ipac" 12,100 may be mixed intent; check its SERP first. How to pull the official species list for a BA or Section 7 consultation. |
| `/for/ceqanet` | **R5** | ceqanet 1,600 + ceqa net 480 | How to find precedent CEQA documents. The navigational #1 stays the state's; the guide competes for #2–5. |
| `/for/nepassist` | **R5** | nepassist 880 | EPA's screening tool, used for an EA's affected environment. |
| `/for/eis-database` | **R5** | eis database 90 + epa eis database 70 | Finding precedent EISs; links `/for/nepa-examples`. |

### Product and comparison

| URL | Status | Keywords (corrected) | Ad group |
|---|---|---|---|
| `/for/nepa-software` | #35 | (The AI ad group lands here because the H1 matches the ad. The homepage stays the brand page.) nepa ai 10 (new in 2026, YoY +∞), nepa software / environmental review software / ai environmental review 0–10. A positioning page: the headline names live here. **Remove #35's "eis software 70" and "ai permitting 40" targets.** "eis software" means executive-information software, and the "ai permitting" SERP is building permits. | NEPA AI & software |
| `/for/nepa-ai-tools` | #35 | permitai 90 (PNNL, rising), nepa ai | — |
| Catalog project/template detail pages | #35 (indexable) | Each project's own name (10–20/mo each, long tail); link from `/for/nepa-examples` | — |

**Total built:** 32 guide pages on one template, plus the `/for` index:
- 7 NEPA;
- 5 CEQA;
- 4 federal reviews (with FEMA EHP);
- 5 agencies;
- 4 states + 1 hub;
- 4 tools;
- 2 product.

The legal pages (`/privacy`, `/terms`) ship in #37.

## 4. Campaigns (ash `references/launch/eplan.json` v1.1, ash #232)

- Exact + phrase match, manual CPC, Search only, US presence, English.
- 137 negatives: NE Pennsylvania, Phase I ESA, EIA, Hublot, SEPA payments, jobs,
  students, building permits, project management, EPLAN Electric.
- **Every final URL is that group's `/for` page**, and each group has its own display path
  (`eplan.ai/nepa/categorical`, `/ceqa/initial-study`, `/section-106/review`, …). The
  product-wide `nepa-ceqa/documents` is the fallback.
- Copy rules are enforced in ash code (`banned_copy`):
  - nothing "compliant", approved or legally sufficient;
  - nothing that pairs "free" with an EA, EIS or memo (the free plan covers scoping
    letters only);
  - no "cites the regulation" and no "correct locations";
  - no agency named as a customer.
- Five campaigns have been live since 2026-10-02 16:13 PT (ash #229, another session), at
  $29/day, on #35's URLs. Those URLs 308 to `/for` once this PR ships. v1.1 keeps their
  names, so `bootstrap` adds only CEQA and Federal & state.

| Campaign ($/day) | Ad group · max CPC | Lands on (`eplan.ai/for/…`) | Searches/mo |
|---|---|---|---|
| Categorical exclusions ($7) | Categorical exclusions · $6 | `nepa-categorical-exclusion` | ~1,100 |
| NEPA documents ($8) | EA & FONSI · $6 | `nepa-environmental-assessment` | ~510 |
| | EIS · $4, **paused** (no plan drafts an EIS) | `environmental-impact-statement` | ~490 |
| | Scoping letters · $10 | `nepa-scoping-letter` | ~60 |
| CEQA ($6) | Initial Study & MND · $5 | `ceqa-initial-study` | ~660 |
| | CEQA documents · $4 | `ceqa` | ~800 |
| | CEQA and NEPA · $4 | `ceqa-and-nepa` | ~320 |
| | CEQA exemptions · $4 | `ceqa-exemptions` | ~930 |
| | EIR and notices · $4 | `ceqa-environmental-impact-report` | ~700 |
| NEPA process ($4) | NEPA process & compliance · $3 | `nepa` | ~1,510 |
| | NEPA regulations 2025 · $3 | `nepa-regulations` | ~370 |
| NEPA software & AI ($3) | NEPA AI & software · $12 | `nepa-software` | ~150 |
| Federal & state reviews ($3) | Section 106, HUD Part 58, ESA §7, NY SEQR, WA SEPA, MA MEPA, Forest Service, BLM/Interior, FHWA, DOE, FAA, FEMA EHP · $4 each | each one's own page | ~7,500 together |
| Brand ($2) | Brand · $2 | `/` | ~10 |

**$33/day in total** (October allows $34.15). The pages with no ad group are SEO-only:
HEPA, the state hub, NEPA examples, the EIS database, NEPAssist, IPaC, CEQAnet and AI
tools compared.

**Spend:** with every group but EIS enabled, the account reaches the $1,000/month budget.
Actual CPCs run under max, because nobody else bids. Spend grows with pages, never with
bids.

**Headline bank** (≤ 30 characters; every claim is true of the product today):
- AI NEPA Software
- Accelerate NEPA Reviews
- Faster Environmental Planning
- AI for NEPA and CEQA
- NEPA Docs in Minutes
- Built From Your Project Files
- Minutes, Not Weeks
- Scoping Letters in Seconds
- Free Plan: Scoping Letters
- Max: All Env Docs, $199/mo

Each group also pins its keyword headline, for example "NEPA Categorical Exclusions".
"Accelerate Environmental Planning" (the H1) is 33 characters and cannot be a headline.

## 5. Rounds: what shipped

| Round | Built | State |
|---|---|---|
| **R0** | `/privacy` + `/terms` (eplan-89, #37). The citation/location claim taken off the home FAQ, features and showcase (this PR). ash v1.1: `/for` final URLs, per-group display paths (ash #232). | Owed: the `www.eplan.ai` redirect (DNS, operator), Search Console + Bing (operator), `app.eplan.ai` noindex. |
| **R1–R5** | All 32 pages, the registry, the shared template, the keyword-contract test, the 308s, the `/for` index, the sitemap | One PR: `feat/eplan-page-system` → develop → release → eplan.ai |

Every page is checked the way #35 checked itself:
- typecheck, lint, Jest (registry, citations, keyword contract, prices, overclaims);
- Playwright at 1440 px and 390 px (`e2e/tests/apps/landing-nepa-pages.spec.ts`):
  - one H1;
  - a unique title and canonical;
  - JSON-LD that parses;
  - citation links that resolve;
  - five hero examples and the showcase's draft tab;
  - the comparison and the home sections;
  - no horizontal scroll at phone width;
  - the pill → signup handoff;
  - the 308s;
- then a live check on eplan.ai after the release PR.

## 6. Measuring it

- **Search Console, from 2–4 weeks after each round:** impressions, average position and
  clicks per page for its primary and secondary keywords. A page that ranks for none of its
  keywords after 6 weeks gets its title and H1 rewritten. The keyword contract stays the
  same.
- **ash `ads-daily`, every day:** spend, CTR and CPC per ad group, search terms (new
  negatives), and signups by gclid.
- **Product (PostHog, from #34):**
  - `hero_prompt_submitted` and the example-pill events, with `{surface: "guide_page",
    guide: <path>}` (built);
  - `signup_started`;
  - `user_signed_up`;
  - the first uploaded document.
- **Rule watch:** `/for/nepa-regulations` and the agency pages are re-read when the Federal
  Register publishes an agency NEPA rule. The "last reviewed" date moves only when someone
  re-reads the source.

## 7. Owner decisions

1. ~~One page system on #35's URLs~~ **Decided, 2026-10-02: `/for/<slug>`** for every
   page, on the shared home-component template.
2. ~~Who writes `/privacy` and `/terms`?~~ eplan-89, #37.
3. **The order in which the product learns new documents.** v1.1 enables the
   federal/state/agency groups on their guide pages. Their ads sell the guide plus "Draft a
   <document> letter", and never a finished SEQR EAF or HUD ERR. Pause any of them if
   that is too far ahead of the product. By search volume: SEQR (~1,950) ≈ Section 106 (~1,890) > ESA §7 (~900) > HUD Part
   58 (~700) > agency procedures (~700) > WA SEPA (~490). A CEQA Notice of Exemption
   unlocks the ~930 exemptions group. EIS chapters unlock the ~490 EIS group (the page
   ranks either way).
4. ~~The "cites the regulation and location" claim~~ Taken off eplan.ai in this PR
   ("follows your reference document and marks every detail to confirm"). The guide test
   and ash `banned_copy` both go red if it comes back. Making the product enforce it would
   let the line return.
