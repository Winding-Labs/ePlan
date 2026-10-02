---
"@wildfires-org/turboplan-analytics": minor
"@wildfires-org/turboplan-env": minor
"@wildfires-org/turboplan-billing": minor
---

Analytics now goes through one layer, `@wildfires-org/turboplan-analytics`,
shaped like dash's. Each tracking-plan event fans out to PostHog and GA4:
posthog-js and gtag in the browser, PostHog and the GA4 Measurement Protocol on
the server.

- The web app now loads gtag (GA4, plus the optional Google Ads tag).
- Landing-page events now also reach GA4.
- Sign-up reaches GA4 as `sign_up`.
- A completed Stripe Checkout reaches GA4 as the new `checkout_completed` →
  `purchase`, with value, currency and transaction id.
- Server-side hits join the visitor's GA session through the `_ga` cookies, so
  Google Ads can attribute them.

The full tracking plan is now emitted across the browser, the API, the web
server and the MCP worker. That includes organization, office and member
actions, project lifecycle and review, `chat_started`, documents, signing,
tasks and billing. Every event carries organization/office/project/chat scope
and PostHog groups. Moab campaign clicks (the `dash_link` / `dash_utm` cookies
set by `links.eplan.ai`) are attributed on every event and on sign-up.

New optional configuration:

- `GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID`
- `GA_API_SECRET`, a server-only secret on the api, web and mcp Workers

Any provider left unset stays off, as before. There are no required changes.
