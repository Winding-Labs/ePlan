---
"turboplan-landing-page": minor
---

Below-the-hero sections no longer wait for JavaScript, and the catalog is in
the sitemap:

- `ScrollReveal` is now a CSS scroll-driven animation (`animation-timeline:
  view()`). Sections are visible in the server HTML, and browsers that support
  view timelines fade them in as they enter the viewport. Before, framer-motion's
  `whileInView` held every section at opacity 0 until hydration. It also no
  longer needs framer-motion or a client component.
- The hero's first eyebrow label renders visible. Later labels still animate.
- The sitemap is built per request and adds every public organization, office,
  project and project template from the public API, about 250 pages crawlers
  could not find before. If the API fails, only the catalog entries are left
  out.
- The 404 page has its own title, "Page not found", instead of the home
  page's.
