# eplan.ai page system: every page, the keywords it must win, and the ads that land on it (2026-10-02)

Owner, 2026-10-02: *"Give me what pages we need to build for the full eplan system … the
campaigns & the pages you want on eplan.ai and what keywords they need to hit and what
works in terms of keywords. You should build it on top of this PR"* (ePlan #35).

**Base: ePlan #35** (`feat/nepa-seo-pages`). It ships:
- the one page template (`components/nepa-page/nepa-page.tsx`), with page bodies in `consts/nepa-pages.ts`;
- dated, numbered citations, enforced by `nepa-pages.test.ts`;
- FAQPage and BreadcrumbList JSON-LD;
- a "Draft yours" prompt that hands off to signup;
- robots.ts, sitemap.ts, canonicals and the `NEXT_PUBLIC_LANDING_URL` fix;
- noindex on the client-rendered catalog listings;
- six pages: `/nepa`, `/categorical-exclusions`, `/nepa/environmental-assessment`,
  `/nepa/scoping-letter`, `/nepa-software`, `/compare/nepa-ai-tools`.

Every page in this plan is one more entry in that system.

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
   SERPs. Top-of-page bids are $1–8. An AI Overview appears on 32/34. Each page opens with
   a one-paragraph answer that an Overview can quote (#35's "Short answer" card), then a
   table, an FAQ built from People Also Ask, and primary-source links.
7. **Named projects are precedent, not traffic.** "Mountain Valley Pipeline" gets 90,500,
   but "<project> eis" gets 10–20. Examples pages and the catalog's project pages serve
   planners; news posts do not.
8. **Google currently files eplan.ai under project management.** `keywords_for_site`
   returned 53 of 53 project-planning ideas. Topical pages with document-first titles fix
   this. Until they do, ads stay exact/phrase only: no broad match, DSA, PMax or AI Max.

## 2. One page system, one URL per keyword

- **#35's template and URL scheme are the system.** ePlan #34 (analytics, open) also adds
  five `/templates/<slug>` pages for the same keywords. That would put two pages on each
  keyword.
  - **Resolution:** #34 drops its `/templates` route and data file before it merges, and
    keeps the analytics, root title and description.
  - The two documents #35 lacks (EIS, CEQA Initial Study) move into #35's data file at the
    URLs below. #34's outlines become their outline sections.
  - If #34 merges first, R1 deletes the route and 308s each `/templates/<slug>` to its
    guide URL.
- **One rename from #35: `/categorical-exclusions` → `/nepa/categorical-exclusion`.** It
  sits under the NEPA family and uses the singular the keyword uses ("nepa categorical
  exclusion" 390). The old path and `/templates/categorical-exclusion-decision-memo` 308 to
  it. eplan-89's SEO fix pack 1 already implements this map, including the 308s:
  - `/nepa`
  - `/nepa/categorical-exclusion`
  - `/nepa/environmental-assessment`
  - `/nepa/environmental-impact-statement`
  - `/nepa/scoping-letter`
  - `/ceqa`, `/ceqa/initial-study`, `/ceqa/exemptions`

  Nothing is live, and the Ads account has 0 campaigns, so moving now costs nothing.
- **Ads land on these URLs.** ash launch spec v1.1 swaps every final URL (table in §4).
- **The template needs four changes to scale past six pages** (R1):
  1. **A page registry.** Today `NepaGuidePath` is the footer's 6-entry list. Make it a
     registry of every page: path, kind, parent and hub. The footer lists hubs only.
  2. **Page kinds** on the same template: `guide` (a document), `hub` (a family landing
     page that lists its children), `agency` (procedures + CE list), `state-act`,
     `comparison` and `tool-guide`. A kind changes which sections render, never the
     look.
  3. **One data file per family** (`consts/pages/nepa.ts`, `ceqa.ts`, `federal.ts`,
     `agencies.ts`, `states.ts`, `tools.ts`). Today `nepa-pages.ts` is 1,228 lines for six
     pages; 35 pages in one file is unreviewable.
  4. **A keyword contract in the data, enforced by a test that goes red when it is
     broken.** Each entry carries `primaryKeyword` and `secondaryKeywords`. The test
     fails when:
     - the primary keyword is missing from the title, the H1 or the short answer;
     - two pages share a primary keyword (one URL per keyword);
     - a secondary keyword appears in no H2 or FAQ question;
     - a page is missing from the sitemap.
- **Every page has the same anatomy** (all of it already exists in #35):
  - a keyword H1;
  - a cited one-paragraph short answer;
  - an explainer with dated citations;
  - the document's outline;
  - "Draft yours with ePlan", prefilled;
  - an FAQ from People Also Ask, with FAQPage JSON-LD;
  - related pages;
  - a "last reviewed" date.

## 3. The pages

Status:
- **#35**: built in #35. The keywords listed here correct its targets where they differ.
- **R1–R5**: the build round.

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
| `/nepa` (hub) | #35 | "What Is NEPA? The NEPA Process, Documents & 2026 Rules" | what is nepa 1,600 (cs 661) | national environmental policy act / nepa (cs ~10,300), nepa process 390, nepa review 320, nepa documentation 170, nepa compliance 140, nepa permitting 110, nepa requirements 90, record of decision 90, nepa process flowchart 70 | NEPA process |
| `/nepa/categorical-exclusion` | #35 (renamed in R1) | "NEPA Categorical Exclusions (CE): Checklist, Examples & Decision Memo" | nepa categorical exclusion 390 | categorical exclusion 320, decision memo 170, ce explorer 20, categorical exclusion checklist/examples/form 10–30 | Categorical exclusions |
| `/nepa/environmental-assessment` | #35 | "NEPA Environmental Assessment (EA) & FONSI" | nepa environmental assessment 210 (cs 457) | fonsi nepa 170, what is an environmental assessment 110, finding of no significant impact 50, ea vs eis 50 + 50, environmental assessment examples 50, mitigated fonsi 20, EA template/outline/format 10 each | EA & FONSI |
| `/nepa/scoping-letter` | #35 | "NEPA Scoping Letter: Template, Example & What to Include" | scoping letter 40 ($4.60–16.86, the only real bid) | public scoping 10, nepa scoping 10, scoping letter template/example | Scoping letters |
| `/nepa/environmental-impact-statement` | **R1** (from #34's EIS page) | "Environmental Impact Statement (EIS): Outline, Examples & ROD" | environmental impact statement 1,300 (cs 457–1,160) | what is an environmental impact statement 480, EIS definition 210, nepa eis 170, eis examples 140 + example/sample variants, record of decision 90, programmatic EIS 40, supplemental EIS 30, notice of intent nepa 10; draft EIS 1,900 / final EIS 2,900 (unconfirmed by clickstream) | EIS (paused: no plan lists EIS drafting; Max lists EA/EIR/decision memos) |
| `/nepa/regulations` | **R2** | "NEPA Regulations in 2026: What Changed and Where the Rules Live Now" | nepa regulations 210 | speed act 2,400, permitting reform 1,000, fast-41 720, seven county infrastructure coalition v eagle county 260 + 210, permitting council 210, ceq nepa 170, nepa reform 110, federal permitting dashboard 90, 40 cfr 1500 70, fiscal responsibility act nepa 20 | NEPA regulations (paused until live) |
| `/nepa/examples` | **R5** | "NEPA Document Examples: EIS, EA and CE by Project Type" | eis examples 140 | environmental assessment examples 50, nepa examples 20, categorical exclusion examples 10; links to the catalog's server-rendered project pages (precedent) | — |

### CEQA

| URL | Status | Title / H1 must lead with | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|---|
| `/ceqa` (hub) | **R2** | "What Is CEQA? The CEQA Process, Guidelines & Documents" | ceqa 5,400 (cs 4,935) | ceqa california 1,300, california environmental quality act 880, ceqa guidelines 590, what is ceqa 480, ceqa meaning 260, ceqa reform 140, ceqa process 90, ceqa guidelines 2025/2026 90/70 | CEQA documents |
| `/ceqa/initial-study` | **R1** (from #34's CEQA page) | "CEQA Initial Study & Mitigated Negative Declaration (Appendix G Checklist)" | ceqa appendix g 170 | mitigated negative declaration ~150 (cs; Google says 14,800), ceqa checklist 70, negative declaration 70, ceqa initial study / initial study ceqa 50 + 50, ceqa mitigated negative declaration 40, mitigation monitoring and reporting program 30 | Initial Study & MND |
| `/ceqa/exemptions` | **R2** | "CEQA Exemptions: Categorical & Statutory Exemptions, Notice of Exemption, SB 131" | ceqa exemption 390 | ceqa categorical exemption 260, sb 131 480 (CEQA reform only), notice of exemption 140 + ceqa NOE 110, categorical exemption 70, ceqa statutory exemptions 70, ab 130 ceqa exemption 70, class 32 exemption 30–50, ceqa infill exemption 30 | CEQA exemptions (paused until live; the product must draft an NOE first) |
| `/ceqa/environmental-impact-report` | **R2** | "CEQA Environmental Impact Report (EIR), NOP & Notice of Determination" | notice of determination 390 | environmental impact report 210, ceqa notice of determination 90, ceqa eir 70, ab 52 tribal consultation 70, eir ceqa 40, draft eir 20, notice of preparation 10–20, final eir 10 | CEQA documents |
| `/ceqa/ceqa-and-nepa` | **R2** | "CEQA and NEPA: Joint Documents and How the Two Reviews Differ" | ceqa and nepa 320 (Google groups the nepa/ceqa word orders) | nepa vs ceqa 20, ceqa vs nepa 10 | CEQA documents |

### Federal reviews that run alongside NEPA

| URL | Status | Title / H1 must lead with | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|---|
| `/section-106` | **R3** | "Section 106 Review: NHPA Consultation Under 36 CFR Part 800" | section 106 1,900 (cs 1,679; +900% in 3 months) | nhpa section 106 720, national historic preservation act section 106 590, 36 cfr part 800 210, section 106 review 170, section 106 consultation 110, section 106 process 90, section 106 regulations 70, shpo review 30 | Section 106 (paused until live + product) |
| `/hud-environmental-review` | **R3** | "HUD Environmental Review (24 CFR Part 58): The Environmental Review Record" | 24 cfr part 58 260 (cs 407) | hud environmental review 210, 24 cfr 58 110, part 58 environmental review 50, 24 cfr 58.35 50, hud exchange environmental review 50, hud part 58 40, 24 cfr 58.5 40, environmental review record 20, part 50 environmental review 20 | HUD Part 58 (paused until live + product) |
| `/esa-section-7` | **R3** | "ESA Section 7 Consultation & Biological Assessments" | esa section 7 390 | endangered species act section 7 170, biological assessment 140, section 7 consultation 110, biological opinion 50, esa section 7 consultation 40, biological evaluation 40, usfws ipac 1,600 (a section, see `/tools/ipac`) | ESA Section 7 (new, paused) |

### Agency NEPA procedures + categorical exclusions (one `agency` page each)

The agencies replaced CEQ's regulations with their own procedures in 2025–2026 (cited in
#35). Each page covers: where the agency's procedures live now, its CE list in plain
English, extraordinary circumstances, how it documents a CE, and the decision document.

| URL | Status | Primary keyword | Secondary keywords |
|---|---|---|---|
| `/nepa/agencies/usda-forest-service` | **R3** | 7 cfr 1b 140 | 36 cfr 218 70, usda nepa regulations 50, forest service nepa / usfs nepa 40 + 40, 36 cfr 220 40, 36 cfr 220.6 20 (cite as superseded), forest service nepa handbook 10 |
| `/nepa/agencies/interior-blm` | **R3** | doi nepa handbook 140 | blm nepa 70, doi nepa 50, 43 cfr 46.210 50, blm nepa handbook 50, 516 dm 10 |
| `/nepa/agencies/fhwa-fta` | **R3** | 23 cfr 771.117 170 | fhwa nepa 40, fhwa categorical exclusion 30, fta categorical exclusion 20 (cite the Sep 1, 2026 FHWA/FRA/FTA final rule) |
| `/nepa/agencies/doe` | **R3** | doe nepa 70 | 10 cfr 1021 50, doe categorical exclusions 20, doe nepa procedures 20 |
| `/nepa/agencies/faa` | **R3** | faa order 1050.1f 70 | faa nepa 50 |
| `/nepa/agencies/fema` | **R3** | fema ehp 70 | — |

New ad group, R3: **"Agency NEPA procedures"**. It holds these citation keywords, moved
out of the CE group, at $4 max CPC, and lands each keyword on its own agency page. These
are the most professional searches in the set.

### State environmental review acts

| URL | Status | Primary keyword | Secondary keywords | Ad group |
|---|---|---|---|---|
| `/state-environmental-review` (hub) | **R4** | state environmental review acts (the "little NEPAs") — no single head term ("little nepa" cs ~0) | links each state page | — |
| `/state-environmental-review/new-york-seqr` | **R4** | seqra 1,000 (cs 763) | seqr 720 (cs 661), seqra process 110, nys seqr 90, seqr type ii actions 30 | NY SEQR (paused until live + product) |
| `/state-environmental-review/washington-sepa` | **R4** | washington sepa 320 | sepa checklist 140, sepa environmental checklist 30, sepa dns 20 | WA SEPA (paused until live + product) |
| `/state-environmental-review/massachusetts-mepa` | **R4** | mepa massachusetts 110 | mepa (2,400, shared with MT/MD; Transect ranks #10), mepa enf 20, mepa review 20 | — |
| `/state-environmental-review/hawaii-hepa` | **R4** | hepa hawaii 70 | hawaii environmental policy act 20, hrs chapter 343 20 | — |
| `/state-environmental-review/montana-mepa` · `/minnesota-eaw` | **R4** | mepa montana 30 · eaw minnesota 20 | environmental assessment worksheet 20 | — |

Transect's library (`/regulations/state/<state>/<act>`) is #1 for "seqra" and #21–28 for
"ceqa" and "washington sepa". These pages beat it by being document-first: what you
must file, its outline, and a draft prompt.

### Tools and precedent (practitioner research)

| URL | Status | Primary keyword | Notes |
|---|---|---|---|
| `/tools/ipac` | **R5, after an intent check** | usfws ipac 1,600 | "ipac" 12,100 may be mixed intent; check its SERP first. How to pull the official species list for a BA or Section 7 consultation. |
| `/tools/ceqanet` | **R5** | ceqanet 1,600 + ceqa net 480 | How to find precedent CEQA documents. The navigational #1 stays the state's; the guide competes for #2–5. |
| `/tools/nepassist` | **R5** | nepassist 880 | EPA's screening tool, used for an EA's affected environment. |
| `/tools/eis-database` | **R5** | eis database 90 + epa eis database 70 | Finding precedent EISs; links `/nepa/examples`. |

### Product and comparison

| URL | Status | Keywords (corrected) | Ad group |
|---|---|---|---|
| `/nepa-software` | #35 | (The AI ad group lands here because the H1 matches the ad. The homepage stays the brand page.) nepa ai 10 (new in 2026, YoY +∞), nepa software / environmental review software / ai environmental review 0–10. A positioning page: the headline names live here. **Remove #35's "eis software 70" and "ai permitting 40" targets.** "eis software" means executive-information software, and the "ai permitting" SERP is building permits. | NEPA AI & software |
| `/compare/nepa-ai-tools` | #35 | permitai 90 (PNNL, rising), nepa ai | — |
| Catalog project/template detail pages | #35 (indexable) | Each project's own name (10–20/mo each, long tail); link from `/nepa/examples` | — |

**Total:** 6 pages built in #35, plus 2 legal pages, 9 guide and hub pages, 3 federal-review
pages, 6 agency pages, 6 state pages + 1 hub, and 4 tool pages. That is 37 pages on one
template.

## 4. Campaigns (ash `references/launch/eplan.json`; v1.1 = these final URLs)

- Exact + phrase match, manual CPC, Search only, US presence, English.
- 116 negatives: NE Pennsylvania, Phase I ESA, EIA, Hublot, SEPA payments, jobs, students,
  building permits, project management, EPLAN Electric.
- An ad group is enabled only when its landing page answers 200 on eplan.ai.
- Copy rules are enforced in ash code: nothing "compliant", approved or legally sufficient,
  and nothing that pairs "free" with an EA, EIS or memo (the free plan covers scoping
  letters only).
- **Display path per ad group** (`eplan.ai/nepa/categorical`, `/nepa/assessment`,
  `/nepa/scoping-letter`, `/ceqa/initial-study`, `/nepa/process`, `/nepa/software`), not
  the product-wide `nepa-ceqa/documents`. This is a small ash change: `bootstrap` reads an
  optional group `path` (R0).
- **Copy states only what the product does today.** A draft does not always cite its
  regulation, and unknown locations come out as `[INSERT]` placeholders. So no ad says
  "Cites Regulation & Location" or "Correct Locations & Citations" until the product
  enforces both. The same claim is in the eplan.ai FAQ and feature copy: fix the copy in
  R0, or make the product enforce it.

| Campaign ($/day) | Ad group · max CPC | Lands on | Searches/mo | Enabled in |
|---|---|---|---|---|
| NEPA documents ($15) | Categorical exclusions · $6 | `/nepa/categorical-exclusion` | ~1,100 | R0 + #35 |
| | EA & FONSI · $6 | `/nepa/environmental-assessment` | ~510 | R0 + #35 |
| | EIS · $4 | `/nepa/environmental-impact-statement` | ~490 | When the product drafts EIS chapters (owner); copy until then = outline + precedent research only |
| | Scoping letters · $10 | `/nepa/scoping-letter` | ~60 | R0 + #35 |
| CEQA ($7) | Initial Study & MND · $5 | `/ceqa/initial-study` | ~660 | R1 |
| | CEQA documents · $4 (EIR, NOD and NOP searches move to their own group on `/ceqa/environmental-impact-report`) | `/ceqa` | ~800 | R2 (an IS/MND page does not answer EIR, NOD or consultant searches) |
| | CEQA exemptions · $4 | `/ceqa/exemptions` | ~930 | R2, once the product drafts an NOE |
| NEPA process ($4) | NEPA process & compliance · $3 | `/nepa` | ~1,510 | R0 + #35 |
| | NEPA regulations 2025 · $3 | `/nepa/regulations` | ~370 | R2 |
| NEPA AI & software ($3) | NEPA AI & software · $12 | `/nepa-software` | ~150 | R0 + #35 |
| Federal & state reviews ($3, raise as groups enable) | HUD Part 58 · Section 106 · ESA Section 7 · Agency NEPA procedures · NY SEQR · WA SEPA, $4 each | their R3/R4 pages | ~700 · ~1,890 · ~900 · ~700 · ~1,950 · ~490 | R3/R4, each once the product drafts that document |
| Brand ($1) | Brand · $2 | `/` | ~10 | R0 |

**Spend:**
- **At R0 + #35:** 4 enabled groups + Brand, about 3,300 searches. Roughly
  **$250–450/month**.
- **After R1** (+ Initial Study & MND): about 4,000 searches, 110–200 clicks,
  **$320–560/month**.
- **After R2** (+ CEQA documents, NEPA regulations, and exemptions once the product
  drafts an NOE): about 5,200–6,100 searches.
- **R3/R4 and EIS**, each once the product drafts that document: about 7,500 more,
  which reaches the $1,000/month budget.

Spend grows with pages, never with bids.

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

## 5. Rounds (one PR each, on top of #35)

| Round | Builds | Done when |
|---|---|---|
| **R0** | `/privacy`, `/terms`, the www redirect, app.eplan.ai noindex. The citation/location claim fixed in the eplan.ai copy. #35 and #34 merge with **one** page system (#34 drops `/templates`). ash spec v1.1: final URLs, a display path per group, the headline bank above. Search Console. | All four R0 URLs answer 200 or redirect. `/templates/*` is absent or 308s. Tag Assistant shows the #34 tags on eplan.ai. GA4 is linked to Ads. ash `bootstrap eplan` (PAUSED) → `conversions-setup` → **owner go** → enable 4 groups + Brand. |
| **R1** (eplan-89's SEO fix pack 1 covers the URL half) | Template registry, page kinds, per-family data files and the keyword-contract test. The `/nepa/categorical-exclusion` rename + 308s. `/nepa/environmental-impact-statement`. `/ceqa/initial-study`. Corrected keywords on #35's six pages (§3). | The keyword test goes red on an injected duplicate primary keyword (canary). Both new pages answer 200. Old paths 308. Enable Initial Study & MND. |
| **R2** | `/ceqa`, `/ceqa/exemptions`, `/ceqa/environmental-impact-report`, `/ceqa/ceqa-and-nepa`, `/nepa/regulations` | 200s plus GSC indexing requested. CEQA documents (→ `/ceqa`) and NEPA regulations are enabled. An EIR/NOD group is added on `/ceqa/environmental-impact-report`. The exemptions group waits for the product to draft an NOE. |
| **R3** | `/section-106`, `/hud-environmental-review`, `/esa-section-7`, six `/nepa/agencies/*` pages | 200s. Each probe group is enabled only once the product drafts that document (owner decides the order). |
| **R4** | `/state-environmental-review` hub + 6 state pages | Same as R3. |
| **R5** | `/nepa/examples`, `/tools/*` (IPaC after an intent check), catalog project pages linked as precedent | 200s, plus a sitemap that includes the catalog detail pages. |

Every round is checked the way #35 checked itself:
- typecheck, lint, Jest (page data, citations, keyword contract);
- Playwright at 1440 px and 390 px (200, one H1, no overflow, JSON-LD parses, unique
  title/description/canonical, citation links resolve, signup handoff);
- then a live check on eplan.ai after the release PR.

## 6. Measuring it

- **Search Console, from 2–4 weeks after each round:** impressions, average position and
  clicks per page for its primary and secondary keywords. A page that ranks for none of its
  keywords after 6 weeks gets its title and H1 rewritten. The keyword contract stays the
  same.
- **ash `ads-daily`, every day:** spend, CTR and CPC per ad group, search terms (new
  negatives), and signups by gclid.
- **Product (PostHog, from #34):**
  - `try_it_clicked {surface: "template_page", template}` (rename the surface to
    `guide_page` with the path);
  - `signup_started`;
  - `user_signed_up`;
  - the first uploaded document.
- **Rule watch:** `/nepa/regulations` and the agency pages are re-read when the Federal
  Register publishes an agency NEPA rule. The "last reviewed" date moves only when someone
  re-reads the source.

## 7. Owner decisions

1. **Approve one page system on #35's URLs.** #34 drops `/templates`, and the ads move to
   #35's URLs.
2. **Who writes `/privacy` and `/terms`?** This is a legal call: template or counsel.
   Nothing can spend until both exist.
3. **The order in which the product learns new documents.** The R3/R4 ad groups wait on
   it. By search volume: SEQR (~1,950) ≈ Section 106 (~1,890) > ESA §7 (~900) > HUD Part
   58 (~700) > agency procedures (~700) > WA SEPA (~490). A CEQA Notice of Exemption
   unlocks the ~930 exemptions group. EIS chapters unlock the ~490 EIS group (the page
   ranks either way).
4. **The "cites the regulation and location" claim.** Either make the product enforce
   it, with no `[INSERT]` left in a delivered draft, or take it off eplan.ai. It is the
   strongest proof line, but today it is not always true.
