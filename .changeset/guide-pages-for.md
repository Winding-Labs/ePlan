---
"turboplan-landing-page": minor
---

Every NEPA and CEQA guide page now lives at `/for/<slug>`: 32 pages on one
shared template, plus a `/for` index.

- The pages cover NEPA documents (categorical exclusions, EA, EIS, scoping
  letters, regulations), CEQA (initial study, exemptions, EIR, CEQA and NEPA),
  Section 106, ESA section 7, HUD Part 58, FEMA EHP, five agencies' NEPA
  procedures, four state acts plus a state hub, the precedent and screening
  tools (NEPA examples, the EIS database, NEPAssist, IPaC, CEQAnet) and two
  product pages. Every claim is cited to a dated primary source.
- Each page is the home page's own components fed that page's data: a page
  header with a cited short answer and an at-a-glance box, the home hero with
  five examples for that document, the feature showcase opening on "Create AI
  draft of <document>" with that document's draft, an ePlan-vs-by-hand
  comparison, then the home feature sections. `Hero`, `FeatureShowcase`, the
  draft slide and the app window take props; the home page renders as before.
- `/templates/*` and every earlier guide URL (`/nepa`, `/nepa/*`, `/ceqa/*`,
  `/categorical-exclusions`, `/nepa-software`, `/compare/nepa-ai-tools`)
  redirect permanently (308) to their `/for` page. The `/templates` pages are
  removed.
- One dynamic route serves every guide, and an unknown slug is a 404. The
  sitemap lists `/for` and every guide.
- Guide copy can link another guide as `[label](/for/slug)`.
- A test fails on a duplicate or misplaced keyword, a citation without a
  source, a source defined twice, a price that disagrees with the billing
  catalog, or copy claiming approval, compliance or citations the product
  doesn't enforce.
- Home copy no longer says drafts cite the regulation and location; it says
  they follow your reference document and mark every detail to confirm.
- The showcase's mock app screens no longer add headings to the page outline.
