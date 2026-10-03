---
"turboplan-landing-page": patch
---

Every /for guide page is now short and says only what its ad sells.

- A two-sentence answer (≤60 words), a five-row glance box, at most four short
  sections, the document's outline and four FAQs. Rule history and repeated
  points are gone. Guide text fell from 51,018 to 24,195 words across the 32
  pages; the median page went from 1,739 to 815 words.
- `guides.test.ts` enforces the reading budget per page, so a page cannot
  grow back.
- Hero and draft fixes so each page's examples name its own document (IPaC,
  NEPAssist, NEPA examples), and the CEQA and NEPA draft says what it drafts.
- Product copy says ePlan marks every detail it can't confirm, not that drafts
  come with citations filled in.
