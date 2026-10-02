# ePlan analytics — the master pattern (GA4 + PostHog + Google Ads)

Status: **Phase 1 is implemented in this PR.** Phase 2 and the operator steps
below are still open.
Owner decision needed: none for Phase 1. The operator steps (§7) need a human
with Google Ads admin access.

## 1. Goal

ePlan production should report the same funnel the Winding products report,
through the same analytics layer:

- **one tracking plan**: one canonical event name per moment, and
- **one call per event** that fans out to **PostHog** and **GA4**. The browser
  uses posthog-js and gtag. The server uses PostHog and the GA4 Measurement
  Protocol.

On top of that, **sign-up** and **purchase** must reach GA4 as key events that
Google Ads can bid on, with the new Ads account (`AW-18490467941`) installed.

The pattern is the one in dash `apps/web/lib/analytics/README.md`, which itself
follows the Zest `packages/analytics` reference:

| master-pattern rule | how ePlan gets it |
|---|---|
| ONE layer, no provider SDK called outside it | `packages/core/turboplan-analytics` (new) |
| ONE declaration point for destinations | per-environment **GitHub variables**, resolved by `resolveAnalyticsDestinations()` (see §3 for why not code) |
| ONE tracking plan, canonical snake_case names | `src/events.ts` (`ANALYTICS_EVENTS`) |
| GA4 recommended-event map applied on BOTH transports | `toGa4EventName`: `user_signed_up`→`sign_up`, `checkout_started`→`begin_checkout`, `checkout_completed`→`purchase`, `user_logged_in`→`login` |
| PII never reaches Google | `toGa4Params`: drops `$…`, email/name/phone keys and email-shaped values |
| server conversions join the browser session | `_ga` / `_ga_<id>` cookies → MP `client_id` + `session_id` |
| local runs never write to real projects | each provider is off unless its variable is set, and none are set locally |

## 2. What production looked like on 2026-10-02 (measured, not assumed)

| check | result |
|---|---|
| PostHog **ePlan Prod** `523155`: `GET /api/projects/523155` | `ingested_event: false`. **Zero events have ever been ingested.** Staging `523154` is also `false`. |
| GA4 **ePlan Prod** `546663526` (`G-6VRN75GR2X`): `runReport` over 90 days, as `dash-analytics-reader@` | `rowCount: 0`. Nothing has ever arrived. |
| GA4 key events on `546663526` | `sign_up`, `begin_checkout`, `purchase`, `project_created`, … are already marked, so only delivery is missing |
| GA4 ↔ Google Ads links on `546663526` | `{}`: none |
| `https://eplan.ai` HTML + every `/_next/static/chunks/*.js` | no `phc_` token, no `G-` id, no `AW-` id |
| `https://app.eplan.ai/login` + every chunk | same: nothing |
| GitHub `production` env vars + repo vars | `POSTHOG_API_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`: **none of them exist** |
| `/ingest` proxy on eplan.ai and app.eplan.ai, managed proxy `d.eplan.ai` | all reach PostHog (`401` for a bogus key), so transport is fine |

### Root causes

1. **Every destination came from a GitHub variable that was never created.**
   Every analytics code path no-ops when its key is empty, so prod has
   silently sent nothing since launch.
2. **GA4 was never wired.** Only the landing page had a gtag component, gated on
   `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and the deploy workflow never passed that
   variable to the build. The web app, where sign-up and purchase happen, had no
   gtag at all.
3. **No fan-out.** Every event went to PostHog only. GA4, and therefore Google
   Ads, could never see `sign_up` or `purchase`, even with keys present.
4. **No purchase event existed.** `subscription_activated` carries no value,
   currency or transaction id, and no browser identity. Nothing could become a
   GA4 `purchase`.
5. **The Google Ads tag was never installed** (`AW-18490467941`, created today).

## 3. Destination registry (read from the APIs on 2026-10-02, never retype)

| GitHub environment | PostHog project | PostHog token | GA4 property | measurement id | Google Ads tag |
|---|---|---|---|---|---|
| `production` | 523155 "ePlan Prod" | `phc_uCFx…ymip` | 546663526 | `G-6VRN75GR2X` (stream `15300726495`, `https://eplan.ai`) | `AW-18490467941` (customer 256-990-8425) |
| `develop`, `pr_preview` | 523154 "ePlan Staging" | `phc_uFo6…C4mw` | 546640901 | `G-2MPM5DE8BR` (stream `15300743924`, `https://staging.eplan.ai`) | none: staging traffic must not train Ads audiences |
| local / tests | none | none | none | none | none |

**Where they are declared: GitHub environment variables, not code.** dash keeps
its ids in `agent.yaml` because dash is a private product repo. This repo is a
**public fork of `Wildfires-org/Turboplan.ai`**, so an id in code would make
every other deployment of the template (upstream or any self-hoster) write its
traffic and conversions into ePlan's PostHog, GA4 and Google Ads. The
declaration point is therefore the deployment's own config. Each provider is
read by `resolveAnalyticsDestinations()`, and an unset one is off.

| GitHub variable / secret | where CI puts it | consumer |
|---|---|---|
| `POSTHOG_API_KEY` (var) | api, web, landing, mcp Workers (as today) | server PostHog |
| `NEXT_PUBLIC_POSTHOG_KEY` (var) | landing + web builds (as today) | posthog-js |
| `GA_MEASUREMENT_ID` (var) | `NEXT_PUBLIC_GA_MEASUREMENT_ID` in landing + web builds; `GA_MEASUREMENT_ID` on the api Worker | gtag + MP |
| `GOOGLE_ADS_TAG_ID` (var, **production only**) | `NEXT_PUBLIC_GOOGLE_ADS_TAG_ID` in landing + web builds | gtag |
| `GA_API_SECRET` (**secret**) | api + web Workers (encrypted secret) | MP only, never a browser bundle |

All the ids are public: they ship in every page's HTML. The one **secret** is
the GA4 Measurement Protocol `api_secret`. It is write-only and scoped to one
stream, but it must never reach a browser bundle.

## 4. Tracking plan

Canonical names are `noun_verb`, past tense, snake_case, and match what PostHog
already uses. The GA4 column is what GA4 **receives**. Key events are marked on
the GA4 property and are what Google Ads imports.

| canonical event | emitted at | GA4 name | GA4 key event | identity |
|---|---|---|---|---|
| `$pageview` (posthog) / `page_view` (gtag) | both Next apps, every route change, URL redacted | `page_view` | | anonymous → user |
| landing CTAs (`try_it_clicked`, `pricing_plan_clicked`, `signup_started`, …) | `apps/landing-page` `useAnalytics().captureEvent` | same name | | anonymous |
| `magic_link_requested` | API `magic-link-analytics.ts` | same | | `email:<hmac>` |
| **`user_signed_up`** | web server actions: `/register`, login auto-register, `/self-service` | **`sign_up`** (`method` = signup flow) | **yes** | user id; `_ga` client + session |
| `user_logged_in` | web `auth.ts` | `login` | | user id |
| `onboarding_completed` | web `setup/actions.ts` | same | | user id |
| `organization_created`, `project_created`, `member_joined`, … | API, workspace package + timeline mapping | same | `project_created` is already marked | user id; `_ga` from the request |
| **`checkout_started`** | API `POST /api/billing/checkout` | **`begin_checkout`** | **yes** | user id; `_ga` from the request |
| **`checkout_completed`** (new) | API Stripe webhook `checkout.session.completed` | **`purchase`** (`transaction_id`, `value`, `currency`) | **yes** | user id from session metadata; `_ga` ids stashed at checkout |
| `subscription_activated` / `_canceled`, `payment_failed` | API Stripe webhook | same | | organization id |
| chat / tasks / documents / MCP / research events | as today | same | | as today |

Rules:

- A new event is added to `ANALYTICS_EVENTS` first. A GA4 rename goes in
  `GA4_EVENT_NAME_MAP` and nowhere else.
- `notify`/Slack fan-out (dash) is **not** ported. YAGNI until someone wants
  `#eplan-notify-users`.
- Email stays out of PostHog **and** GA4. ePlan's existing PII decision (identify
  by user id only) is kept.

## 5. The two conversions, end to end

### Sign-up → `sign_up`

1. The visitor lands on `eplan.ai?gclid=…`. gtag sets `_ga`, `_ga_6VRN75GR2X`
   and `_gcl_aw` on `.eplan.ai`, and posthog-js sets its cookie on `.eplan.ai`.
2. The hand-off to `app.eplan.ai/self-service` (or `/login`, `/register`)
   carries `ph_did` + `utm_*` + `gclid`, as today.
3. The server action creates the user and calls `captureServerEvent(user_signed_up)`.
   That now goes to PostHog as before, **plus** GA4 MP `sign_up` with
   `client_id`/`session_id` read from the request's `_ga` cookies. GA4 therefore
   attributes it to the same session as the ad click, which is what makes the
   GA4→Ads import count it.

### Purchase → `purchase`

1. `POST /api/billing/checkout` (browser → `api.eplan.ai` with
   `credentials: include`, so the `.eplan.ai` cookies arrive). The router reads
   the `_ga` ids and the user id, emits `checkout_started` (→ `begin_checkout`),
   and stores `user_id`, `ga_client_id`, `ga_session_id` in the Checkout
   Session `metadata`.
2. Stripe fires `checkout.session.completed`. When the session is a
   subscription, `status=complete` and **`payment_status=paid`**, the webhook
   emits `checkout_completed` after the sync succeeds. It is keyed by that user,
   with `transaction_id` = session id, `value` = `amount_total / 100`,
   `currency` = session currency (upper-cased), and `plan`. This becomes GA4
   `purchase` on the stored client + session.
3. The webhook ledger already dedupes redelivered events, so one Checkout
   Session yields exactly one `purchase`.

Edges:

- `trial_days` is `0` in the catalog, so a paid checkout is real money. A $0
  trial session is `no_payment_required` and emits no `purchase`.
- A session completed with a delayed payment method (ACH) is `unpaid` at
  completion. It emits no `purchase`; see §9.
- A checkout session created before this ships has no `userId` or `_ga` ids in
  its metadata. Its purchase is keyed by the organization, flagged
  `unattributed`, and not tied to an ad click.
- `value` assumes a two-decimal currency. That holds for the USD catalog.

## 6. What this PR changes (Phase 1)

| area | change |
|---|---|
| `packages/core/turboplan-analytics` (new) | tracking plan, GA4 name map + param sanitizer, destination resolver, `_ga` cookie parsers, GA4 MP sender with a flushable queue (`/server`), browser fan-out + `<GoogleTag>` (`/client`), URL redaction (moved from both apps), unit tests |
| `apps/landing-page` | PostHog init through the layer; `<GoogleTag>` loads GA4 **and** the Ads tag; `captureEvent` fans out to GA4; CSP allows the Ads hosts |
| `apps/turboplan` (browser) | PostHog init through the layer; `<GoogleTag>` added (it had none); `identify`/`reset` fan out (`user_id`); CSP allows the Google hosts |
| `apps/turboplan` (server) | `captureServerEvent` fans out to GA4 MP with `_ga` client/session from `cookies()` |
| `apps/server` | `captureEvent` fans out to GA4 MP; `_ga` ids read from the request via Hono context storage; the flush middleware also awaits GA4 |
| `turboplan-billing` | checkout stores `user_id` + `_ga` ids in session metadata; webhook emits `checkout_completed` with value/currency/transaction id |
| `turboplan-env`, deploy scripts, workflow, `worker.ts` | `getAnalyticsEnv()`; `GA_MEASUREMENT_ID` / `GOOGLE_ADS_TAG_ID` passed to the builds and the api Worker; `GA_API_SECRET` threaded as a Worker secret (api + web) |

## 7. Operator steps

1. ✅ **GitHub environment variables, set on 2026-10-02.** PostHog tokens were
   read from the PostHog API and probed (`decide` → 200), and the GA/Ads ids come
   from §3:
   - `production`: `POSTHOG_API_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`,
     `GA_MEASUREMENT_ID`, `GOOGLE_ADS_TAG_ID`
   - `develop`, `pr_preview`: `POSTHOG_API_KEY`, `NEXT_PUBLIC_POSTHOG_KEY`,
     `GA_MEASUREMENT_ID` (no Ads)

   Side effect worth knowing: the PostHog variables are already read by the
   *current* code. The next deploy of `develop` or `main`, even without this PR,
   starts sending PostHog events. That is intended.
2. ✅ **GitHub environment secret `GA_API_SECRET`, set on 2026-10-02.** It was
   piped straight from the GA Admin API
   (`properties/*/dataStreams/*/measurementProtocolSecrets`, as the reader
   service account) and never retyped:
   - `production` → `eplan-prod-secret` of stream `15300726495`
   - `develop`, `pr_preview` → `eplan-staging-secret` of stream `15300743924`

   To re-set one: `gh secret set GA_API_SECRET --env <env>` and paste the value
   from GA Admin → Data streams → the stream → Measurement Protocol API secrets.
3. **Link GA4 → Google Ads.** GA4 Admin → property *ePlan Prod* → Product links
   → Google Ads links → Link → account **256-990-8425**. Enable personalized
   advertising and auto-tagging. The reader service account cannot do this
   because it needs Ads admin.
4. **Import the conversions.** Google Ads → Goals → Conversions → New → Import →
   Google Analytics 4 → Web → tick **`sign_up`** and **`purchase`**. Set
   `purchase` to *Use the value from GA4*. Make `purchase` **Primary**, and make
   `sign_up` Primary or Secondary depending on the bidding strategy.
5. **Test installation** in the Ads tag screen after the deploy that ships this
   PR. It should find `AW-18490467941` on `https://eplan.ai`.
6. *(optional)* **Consent mode** for EEA traffic. See §9.

## 8. Verification

### Done before opening the PR (2026-10-02)

- **Landing page run locally** against the **staging** destinations: PostHog
  key, `G-2MPM5DE8BR`, and a fake `AW-0000000000`. Headless Chromium, landing on
  `/?utm_email=probe%40example.test&gclid=TEST…`.
  - Network showed `gtag/js?id=G-2MPM5DE8BR`, a `google-analytics.com/g/collect`
    hit, the Ads `viewthroughconversion` / `rmkt` / `ccm` hits carrying the
    `gclid`, and PostHog `/ingest/e/`.
  - Cookies were `_ga=GA1.1.…` and `_ga_2MPM5DE8BR=GS2.1.s…`, which is the
    format the server-side parser reads.
- **PII canary.** On the first run, two Ads conversion-linker requests
  (`google.com/ccm/collect`, `googleadservices.com/pagead/set_partitioned_cookie`)
  carried the raw `utm_email`. They fire on `config` and read
  `document.location`. Fixed by setting the redacted location before `config`
  and passing it into each `config`. After the fix, **0 of 7** GA4/Ads request
  types contained the email.
- **Server-side Measurement Protocol, end to end.** `sendGa4Event`
  (`user_signed_up`, with the staging secret read from the Admin API) showed up
  in the staging property's GA4 **Realtime** report as `sign_up` within 20
  seconds.
- Unit tests:
  - `turboplan-analytics`: 18 tests (mapping, PII stripping, cookie parsing,
    MP payload)
  - billing: 172 tests (new `checkout_completed` contract)
  - server: 32 tests (new fan-out test through `contextStorage`)
  - `pnpm typecheck`: 59/59
  - `pnpm test`: 47/47 under `TZ=UTC`. One untouched pre-existing test,
    `apps/turboplan/unit-tests/transform-timeline.test.ts`, fails outside UTC.

### After merge (the only proof is data arriving in prod)

- [ ] `curl -s https://eplan.ai | grep -o 'G-6VRN75GR2X\|AW-18490467941'` returns both ids (and the same for `app.eplan.ai/login`).
- [ ] Browser on eplan.ai: the network tab shows `googletagmanager.com/gtag/js?id=G-6VRN75GR2X`, at least one `google-analytics.com/g/collect`, and a `/ingest/…/e` or `/i/v0/e` POST.
- [ ] PostHog project 523155 → Activity: `$pageview` with `service=landing` and `service=web`; `ingested_event` flips to `true`.
- [ ] GA4 546663526 → Realtime: `page_view`; after a test sign-up, `sign_up`; after a test checkout (Stripe test card on staging first), `begin_checkout` + `purchase` with value.
- [ ] Do **not** "verify" the MP secret with `/debug/mp/collect`. It returns 200 for a wrong secret (dash canary, 2026-07-22). Realtime is the proof.
- [ ] Google Ads → Tag "Test installation" passes; after step 7.4 the conversions show *Recording conversions* within ~24h.

## 9. Phase 2 / follow-ups (not in this PR)

- **`apps/mcp-server` and `apps/research-agent`** have their own raw PostHog
  clients (PostHog only, no GA4). mcp-server picks up the `POSTHOG_API_KEY`
  variable set in §7.1 on its next deploy. research-agent runs on Fly, outside
  this workflow, so `POSTHOG_API_KEY` must be set there with `fly secrets set`.
  Moving both onto the layer is optional; neither emits a conversion.
- **Delayed payment methods.** If ACH or other async methods are enabled, emit
  `checkout_completed` from `checkout.session.async_payment_succeeded` too.
- **Server event volume to GA4.** Every server event now also goes to GA4,
  including `chat_message_sent` and `ai_response_received`: one Measurement
  Protocol hit each. That is fine at today's volume. Revisit with an allow-list
  if GA4 quotas or Worker subrequest limits ever bite.
- **Plan upgrades** (`change-plan`, Pro→Max) are revenue but not a `purchase`
  today. Decide whether Ads should value them (GA4 `purchase` with the proration
  delta) or keep them PostHog-only.
- **Recurring revenue.** Map `invoice.paid` (`billing_reason=subscription_cycle`)
  to a non-key `renewal_paid` if LTV reporting in GA4 is wanted.
- **Consent mode v2** (`gtag('consent','default',…)`) before any EEA campaign
  runs. The Ads console flags it.
- **Enhanced conversions** (hashed email via `user_data`) would raise Ads match
  rates, but conflicts with the current "no email to Google" decision. That is
  an owner decision.
- **Managed proxy.** Browser PostHog goes through same-origin `/ingest` (a
  Worker request per event). `d.eplan.ai` is live and could replace it,
  matching ionwarp/moab.
- **Registry test** (dash `registry.test.ts`): pin the GA4 ids against
  `dataStreams` in CI with the reader service account.
