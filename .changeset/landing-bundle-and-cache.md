---
"@wildfires-org/turboplan-api-client": minor
"turboplan-landing-page": minor
"turboplan": patch
---

Smaller, better-cached marketing pages:

- `@wildfires-org/turboplan-api-client` no longer exports the JWT and PAT
  utilities from its root entry. Import them from
  `@wildfires-org/turboplan-api-client/server`. Re-exporting them from the root
  shipped a 100 KB (gzipped) crypto polyfill to every landing page that used a
  fetcher.
- The landing page's Sentry bundle drops tracing and replay code. Tracing is
  sampled at 0 and replay is never started. Shared first-load JS goes from
  190 kB to 138 kB.
- Content-hashed `/_next/static/*` assets are now served with
  `Cache-Control: public, max-age=31536000, immutable` on the landing page and
  the web app, through `public/_headers`. They were `max-age=0`.
- The social card image is 1200×630 and 201 KB, down from 2400×1260 and
  814 KB, and page metadata declares its size.

Marketing pages are now prerendered and served from the build:

- The root layout no longer reads the session or the UI-scale cookie. Either
  read made every page dynamic and uncacheable. The navbar gets the session
  from a new `/api/session` route after hydration and keeps "Sign In" hidden
  until it knows. The app's UI-scale cookie still applies after hydration.
- OpenNext serves prerendered pages from Workers static assets (a read-only
  incremental cache). Before, the default no-op cache rendered every page on
  every request.
- The home and guide heroes are part of the static HTML. Only a tiny
  null-rendering component reads `?projectDescription` and `?tryIt`. Before,
  a page-level Suspense around the whole hero kept it out of what crawlers
  get.
- The hero's entrance animation is CSS instead of framer-motion's
  `whileInView`, so the headline paints without waiting for JavaScript.

Under DevTools mobile throttling the home page measures:

| Metric | Before | After |
| --- | --- | --- |
| Performance score | 51 | 59 |
| LCP | 23.1 s | 17.0 s |
| FCP | 6.3 s | 4.1 s |
| TBT | 270 ms | 130 ms |
