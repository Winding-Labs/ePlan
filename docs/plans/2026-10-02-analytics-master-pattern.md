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

| master-pattern rule (dash) | how ePlan gets it |
|---|---|
| ONE layer, no provider SDK called outside it | `packages/core/turboplan-analytics` (new). No app code calls `posthog.*` or `gtag` directly; the only exceptions are the per-process sinks. |
| Segment-shaped browser API | `analytics.init / setContext / set / event / eventBeforeNavigate / page / reset` (`/client`), the same shape as dash `lib/analytics/client.ts` |
| ONE server pathway | `trackAnalyticsEvent(event, context, extra)` (`/server`). Packages call it, and each process (API worker, Next web server, MCP worker) registers ONE sink with `configureServerAnalytics`. This replaces the per-package `configureWorkspaceAnalytics` / `configureBillingAnalytics` / `configureRecorderAnalytics` hooks. |
| ONE canonical projection | `projectAnalyticsEvent(name, context, extra)` stamps `user_id`, `organization_id`, `office_id`, `project_id`, `chat_id` and `source` plus PostHog groups (organization / office / project) on every event, on both transports. A machine `distinctId` (an org id, or `system`) gets `$process_person_profile: false`, so it never mints a fake person. |
| ONE declaration point for destinations | per-environment **GitHub variables**, resolved by `resolveAnalyticsDestinations()` (see §3 for why not code) |
| ONE declarative tracking plan | `ANALYTICS_EVENTS` + `TRACKING_PLAN` in `src/events.ts`. `Record<AnalyticsEvent, …>` makes a missing entry a compile error, and a test pins it. |
| GA4 recommended-event map on BOTH transports | `toGa4EventName`: `user_signed_up`→`sign_up`, `user_logged_in`→`login`, `member_invited`→`share`, `checkout_started`→`begin_checkout`, `checkout_completed`→`purchase` |
| PII never reaches Google | `toGa4Params` drops `$…`, email/name/phone keys and email-shaped values. Page URLs are redacted (`?email=`, `?token=`, `?code=`) before gtag config, including for the Ads conversion linker. |
| Campaign attribution survives the marketing → app hop | first-touch `dash_utm` + last-touch Moab `dash_link` cookies on `.eplan.ai`, read by the browser (every event) and by the signup seam (§4a) |
| Server conversions join the browser session | `_ga` / `_ga_<id>` cookies → MP `client_id` + `session_id` |
| Local runs never write to real projects | each provider is off unless its variable is set, and none are set locally |

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

The plan as code is `ANALYTICS_EVENTS` + `TRACKING_PLAN` in
`packages/core/turboplan-analytics/src/events.ts`; this table is its readable
form. Canonical names are `noun_verb`, past tense, snake_case. The GA4 column is
what GA4 **receives**. ★ marks a GA4 key event (Ads can import it).

Every event also carries the projection's standard dimensions where the emit
site holds them: `user_id`, `organization_id`, `office_id`, `project_id`,
`chat_id` and `source` (`web` / `landing` / `mcp` / `system`), plus PostHog
groups. Browser events also carry the `utm_*` and `link_*` campaign bag.

### Acquisition (landing, browser)

| event | emitted at |
|---|---|
| `$pageview` / GA4 `page_view` | `analytics.page()` on every route change, both apps, URL redacted |
| `try_it_clicked`, `hero_prompt_submitted`, `hero_document_attached`, `quick_start_selected`, `pricing_plan_clicked`, `pricing_nav_clicked`, `enterprise_contact_clicked`, `startup_discount_clicked`, `catalog_request_clicked`, `projects_clicked`, `contact_clicked`, `contact_support_clicked`, `docs_clicked`, `templates_clicked`, `sign_in_clicked` | landing CTAs (`useAnalytics().captureEvent`). Template SEO pages use `surface: "template_page"`. |
| `signup_started` | signup modal, `analytics.eventBeforeNavigate` (beacon, survives the cross-origin redirect) |

### Activation

| event | GA4 | emitted at |
|---|---|---|
| `magic_link_requested` | same | API mail route (`email:<hmac>` identity) |
| **`user_signed_up`** | ★ `sign_up` | web server: `/register`, login auto-register, `/self-service`; workspace invitations service (invite auto-signup, `signup_flow: "invite"`). Carries the Moab/UTM cookie bag (§4a). |
| `email_verified` | same | web server, first magic-link verification |
| `user_logged_in` | `login` | web server (`auth.ts`) |
| `onboarding_completed` | same | web server (`setup/actions.ts`) |

### Workspace + collaboration

| event | GA4 | emitted at |
|---|---|---|
| `organization_created` | same | admin cataloger. Personal orgs at signup are deliberately not counted; `user_signed_up` covers them. |
| `organization_updated` | same | API org PATCH / email domains (`changed_fields`) |
| `office_created` / `office_updated` / `office_deleted` | same | API offices routes |
| **`member_invited`** | ★ `share` | API: org / office / project invite of a non-user (`entity_type`, `role`) |
| `member_joined` | same | API: add-existing-user (org / office / project via timeline) and invite accept (`via: "added" \| "invite"`) |
| `member_role_changed` / `member_removed` | same | API: org / office routes, project via the timeline |

### Projects

| event | GA4 | emitted at |
|---|---|---|
| **`project_created`** | ★ same | API create + create-from-template (`from_template`, `template_id`); web self-service (×2 paths); MCP `create_project`. **Not** from timeline items: research and cataloger timeline entries used to inflate it. |
| `project_status_changed` / `project_visibility_changed` | same | timeline `project/updated` with `status` / `isPublic` changes |
| `project_submitted_for_review` / `project_reviewed` (`decision`) | same | API submissions |
| `research_phase_completed` | same | API |
| `project_deleted` (`hard`) | same | API soft and hard delete |

### Chat / AI

| event | GA4 | emitted at |
|---|---|---|
| **`chat_started`** | ★ same | web `/api/chat`: the chat's first user message, including pre-created initial chats |
| `chat_message_sent` | same | web `/api/chat`, after the message is saved (`message_index`, `has_attachments`, `is_first_message`). No longer counts 409 duplicates or rejected requests. |
| `ai_response_received` | same | web `/api/chat` (`status: success \| error`, `model`, `latency_ms`, `total_tokens`) |
| `ai_artifact_created` | same | web AI `createDocument` tool |
| `chat_deleted` | same | web `/api/chat` DELETE |
| `research_requested` / `research_results_saved` (`kind`, `count`) | same | API research bootstrapper |

### Documents, signing, project data

| event | emitted at |
|---|---|
| `document_uploaded` / `document_deleted` | timeline `document` records, in any process (API, web, MCP); signing records excluded |
| `document_exported` | API export |
| `signature_requested` / `signature_completed` / `signature_declined` (`reason`) | timeline records from the signing router / Documenso webhook (these were previously mislabeled as document upload/delete) |
| `task_created` / `task_assigned` / `task_completed` / `task_moved` / `task_deleted` | timeline (restores excluded) |
| `milestone_created` / `milestone_completed` / `milestone_deleted` | timeline |
| `comment_created` / `field_created` / `map_layer_added` | timeline |
| `project_context_added` | API context router |

### Billing

| event | GA4 | emitted at |
|---|---|---|
| `plan_limit_reached` (`limit: credits \| projects`, `surface`) | same | API project-create wall, web self-service wall, chat 402 |
| `plan_selected` (`plan: starter`) | same | API select-starter |
| **`checkout_started`** | ★ `begin_checkout` | API checkout |
| **`checkout_completed`** | ★ `purchase` (`transaction_id`, `value`, `currency`) | Stripe webhook, paid sessions only (§5) |
| `plan_changed` / `subscription_cancel_requested` / `subscription_resumed` | same | API billing routes |
| `subscription_activated` / `subscription_canceled` / `payment_failed` | same | Stripe webhook. Org-keyed, so they never create a person. |

### Platform

| event | emitted at |
|---|---|
| `access_token_created` | API PAT create (MCP adoption funnel) |
| `mcp_tool_called` (`outcome`) | MCP worker, after the tool runs |
| `research_run_started` / `research_run_completed` | research agent (Fly, its own client) |

Rules:

- A new event goes into `ANALYTICS_EVENTS` + `TRACKING_PLAN` first. A GA4
  rename goes in `GA4_EVENT_NAME_MAP` and nowhere else.
- Server code emits with `trackAnalyticsEvent`; browser code with
  `analytics.event`. Pass org/office/project ids only when the code already
  holds them. Never add a DB read to enrich an event (a dash rule).
- dash's `notify` (Slack) fan-out is **not** ported. YAGNI until someone wants
  `#eplan-notify-users`.
- Email stays out of PostHog **and** GA4. ePlan's existing PII decision (identify
  by user id only) is kept. Moab joins on `link_code` / `link_outbox_id`
  instead of email (§4a).

## 4a. Moab campaign attribution (the `dash_link` / `dash_utm` cookies)

Moab's outbound links for ePlan go through the dash links worker on
**`links.eplan.ai`**, attached in dash PR #1956 and live: an unknown code
302-redirects to `https://eplan.ai/`. On every click, before the 302, the
worker sets two cookies on `.eplan.ai`:

| cookie | touch | contents |
|---|---|---|
| `dash_utm` | first touch, never overwritten | `utm_source=moab`, `utm_medium=<channel>`, `utm_campaign=<agent>`, `utm_content=<link code>` |
| `dash_link` | last touch (a newer click re-attributes) | `code`, `agent_id`, `campaign_id`, `channel`, `subject`, `program`, `code_style`, `outbox_id` |

Until this PR, ePlan read neither. The redirect itself only appends `?code=`
(and Moab bakes `?email=`), never `utm_*`, so every Moab visit landed as
*direct* traffic in GA4 and as an unattributed `$pageview`. Now:

- **Browser.** `src/attribution.ts` parses both cookies with dash's exact
  allow-list, bounds and encoding. The cookies are attacker-controllable, so
  only allow-listed string keys survive. Every event and pageview carries
  `utm_*` + `link_*`. The bag is also `register_for_session`ed, so autocaptured
  events carry it too. `analytics.set` writes it as first-touch person
  properties (`initial_link_code`, …). Non-Moab campaign landings write
  `dash_utm` themselves (first touch, `.eplan.ai`), so the app host inherits the
  bag.
- **Signup.** The web server sink adds `signupAttributionProperties(cookie)` to
  `user_signed_up`: the bag as event properties, plus `$set_once` `initial_*`.
  A Moab-sourced account therefore names its link, campaign and outbox row, and
  every later event of that person, purchase included, can be broken down by
  it.
- **Join key.** `link_code` equals Moab's `campaign_link_clicked`
  `utm_content`, which joins Moab's click (Moab PostHog project) to ePlan's
  signup (ePlan project). `link_outbox_id` names the exact send, and so the
  recipient, without any email in analytics.

**Contract:** the cookie names and keys must match dash
`apps/web/lib/analytics/{utm,link-attribution}.ts` and the links worker.
`tests/attribution-context.test.ts` pins the exact byte format the worker
writes.

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
| `packages/core/turboplan-analytics` (new) | Tracking plan (`ANALYTICS_EVENTS` + `TRACKING_PLAN`) and the canonical projection (`projectAnalyticsEvent`: dimensions + PostHog groups + non-person machine ids). Also: the one server pathway (`trackAnalyticsEvent` / `configureServerAnalytics` / `trackServerEvent`, state on `globalThis` so every Next bundle layer shares it), the browser `analytics` object + `<AnalyticsPageView>` (gtag GA4 + Ads, redacted pageviews), Moab/UTM cookie attribution (`attribution.ts`), GA4 sanitizer, `_ga` parsers, MP sender, destination resolver, URL redaction. 35 tests. |
| `apps/server` (API worker) | Registers the API sink (request `_ga` identity + authenticated user via Hono `contextStorage`). Flush middleware awaits PostHog + GA4. Old `captureEvent`, the timeline mapping and the per-package injection wiring are removed. Emits `document_exported`, `access_token_created`, `magic_link_requested`. |
| `apps/turboplan` (web server) | Registers the web sink (`cookies()` → `_ga` identity, Moab/UTM signup attribution, `after()` delivery). Emits signup, `email_verified`, login, onboarding, self-service `project_created`, chat (`chat_started`, `chat_message_sent` after save, `ai_response_received` with `status`, `chat_deleted`, `ai_artifact_created`) and `plan_limit_reached`. |
| `apps/turboplan` + `apps/landing-page` (browser) | All tracking goes through `analytics.*`. `setContext` stamps org/office/project/chat on every event (replacing the direct `posthog.group` calls). Pageviews are manual and context-stamped. `signup_started` survives the redirect (`eventBeforeNavigate`). |
| `apps/mcp-server` | Per-isolate sink (`waitUntil` via AsyncLocalStorage). MCP timeline writes now emit domain events. `create_project` → `project_created`. `mcp_tool_called` is captured after the tool runs, with `outcome`. `GA_MEASUREMENT_ID` / `GA_API_SECRET` are bridged. |
| `turboplan-timeline-records` | The recorder emits timeline-derived events itself (mapping moved here, 49 tests). `project/created` no longer counts as `project_created`. Signing records map to `signature_*`. Restores are excluded. |
| `turboplan-workspace` | Org, office, member, invite, project lifecycle, submission/review, template and wall events (§4). Invite auto-signup emits `user_signed_up`. |
| `turboplan-billing` | `checkout_completed` → `purchase` (paid only), `plan_selected`, `plan_changed`, cancel/resume, credit/seat walls. Org-keyed webhook events no longer create persons. |
| research / project-context / tasks | `research_requested`, `research_results_saved`, `project_context_added`; task/milestone restores are marked so they are not counted as creates |
| env, deploy scripts, workflow, `worker.ts` | `getAnalyticsEnv()`. `GA_MEASUREMENT_ID` / `GOOGLE_ADS_TAG_ID` go to the builds, the api Worker and the mcp Worker; `GA_API_SECRET` is a Worker secret (api, web, mcp). |
| SEO (`apps/landing-page`, `apps/turboplan/app/robots.ts`) | robots + sitemap, unique titles / canonicals / NEPA-CEQA root metadata, docs branding, five `/templates/<slug>` document pages. See `docs/plans/2026-10-02-seo-ads-analytics-audit.md`. |

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
3a. ✅ **GA4 key events, done on 2026-10-02.** Both properties now mark every
   name in `GA4_KEY_EVENTS`: `sign_up`, `project_created`, `chat_started` (new,
   added via the Admin API as the reader service account, which holds Editor),
   `share`, `begin_checkout`, `purchase`.
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

- **`apps/research-agent`** (Fly, outside this workflow) keeps its own
  PostHog client and keys `research_run_*` by `"system"`. Set `POSTHOG_API_KEY`
  there with `fly secrets set`. Moving it onto the layer (user + project
  context) is optional.
- **Manual timeline entries are unguarded.** `POST /:id/timeline` accepts any
  entity type and action, so a hand-authored "task created" entry counts as
  `task_created`. The UI only writes "project created", which now maps to
  nothing.
- **Slack notify fan-out** (dash `notify`), if the team wants an
  `#eplan-notify-users` feed.
- **PostHog replay / heatmaps / web vitals** (dash turned these on by owner
  decision, 2026-08-25). ePlan keeps posthog-js defaults until someone decides.
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
