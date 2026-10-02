# @wildfires-org/turboplan-analytics

The one analytics pathway. One tracking plan, and one call per event that fans
out to PostHog and GA4. No app calls `posthog.capture` or `gtag` directly.

| export | use |
|---|---|
| `.` | `ANALYTICS_EVENTS` (the tracking plan), `toGa4EventName`, `toGa4Params`, `resolveAnalyticsDestinations`, `_ga` cookie parsers, URL redaction |
| `./client` | `initBrowserAnalytics(posthog, { service })`, `trackEvent`, `identifyUser`, `resetAnalytics`, `<GoogleTag />` (render inside `<Suspense>`) |
| `./server` | `getGa4ServerConfig`, `sendGa4Event`, `flushGa4Events`: the GA4 Measurement Protocol half. The host's PostHog capture calls these with the same event. |

Adding an event: add it to `ANALYTICS_EVENTS` in `src/events.ts`. Rename it for
GA4 only if GA4 has a recommended equivalent, and only in `GA4_EVENT_NAME_MAP`.

Configuration: every provider is optional, and an unset one no-ops. See
`CONFIGURATION.md` for the env vars and
`docs/plans/2026-10-02-analytics-master-pattern.md` for the design.
