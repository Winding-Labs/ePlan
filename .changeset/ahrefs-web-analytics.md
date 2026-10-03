---
"@wildfires-org/turboplan-analytics": minor
"@wildfires-org/turboplan-env": minor
"turboplan-landing-page": minor
---

The landing site can load Ahrefs Web Analytics and prove site ownership to
Ahrefs. Both are off until a deployment sets them.

- `AHREFS_ANALYTICS_KEY` (GitHub variable, reaches the landing build as
  `NEXT_PUBLIC_AHREFS_ANALYTICS_KEY`): the script is a plain async tag in the
  server HTML. Its own pageviews are off. `analytics.page()` sends each
  pageview with the same redacted URL GA4 gets, so `?token=` and `?utm_email=`
  never reach Ahrefs.
- `AHREFS_SITE_VERIFICATION` (`NEXT_PUBLIC_AHREFS_SITE_VERIFICATION`): renders
  `<meta name="ahrefs-site-verification">`.
- The report-only CSP allows `analytics.ahrefs.com`.

Set both in the production environment only.
