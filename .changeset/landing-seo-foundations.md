---
"turboplan-landing-page": minor
"turboplan": patch
---

Make the marketing site indexable and add document landing pages.

- `robots.txt` and `sitemap.xml` on the landing page (static pages, docs and
  document templates). Staging and PR previews disallow all crawlers. Every
  web-app page is now `noindex`, so `/login` and the dashboard drop out of
  search results.
- Every landing route has its own title, description, canonical URL and social
  card; the site title and description now lead with NEPA and CEQA.
- Five document pages under `/templates`: categorical exclusion decision memo,
  NEPA scoping letter, NEPA environmental assessment and FONSI, CEQA initial
  study and MND, and environmental impact statement. Each has FAQ structured
  data and the project prompt on the page, which opens signup directly.
- `/docs` shows the configured app name instead of "TurboPlan", and unknown
  docs URLs return a real 404.
- `/pricing` redirects to the pricing section and `/login` to the app's sign-in.
- `/checkout` is no longer indexable.
- The landing deploy now sets `NEXT_PUBLIC_LANDING_URL`. Without it, social
  images pointed at `http://localhost:3000`.
