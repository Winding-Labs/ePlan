---
"@wildfires-org/turboplan-analytics": minor
"@wildfires-org/turboplan-env": minor
"@wildfires-org/turboplan-billing": minor
---

Analytics now goes through one layer, `@wildfires-org/turboplan-analytics`. Each
tracking-plan event fans out to PostHog and GA4: posthog-js and gtag in the
browser, PostHog and the GA4 Measurement Protocol on the server.

- The web app now loads gtag (GA4, plus the optional Google Ads tag).
- Landing-page events now also reach GA4.
- Sign-up reaches GA4 as `sign_up`.
- A completed Stripe Checkout reaches GA4 as the new `checkout_completed` →
  `purchase`, with value, currency and transaction id.
- Server-side hits join the visitor's GA session through the `_ga` cookies, so
  Google Ads can attribute them.

New optional configuration:

- `GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID`
- `GA_API_SECRET`, a server-only secret on the api and web Workers

Any provider left unset stays off, as before. There are no required changes.
