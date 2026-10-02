import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  ANALYTICS_EVENTS,
  buildPageViewParams,
  GA4_KEY_EVENTS,
  parseGa4ClientId,
  parseGa4SessionId,
  redactUrl,
  resolveAnalyticsDestinations,
  sanitizeProperties,
  TRACKING_PLAN,
  toGa4EventName,
  toGa4Params,
} from "../src/index";
import { buildGa4Payload } from "../src/server";

const env = (overrides: Record<string, string | undefined> = {}) => ({
  POSTHOG_HOST: "/ingest",
  ...overrides,
});

describe("tracking plan → GA4 names", () => {
  it("maps the conversion events to GA4 recommended names", () => {
    assert.equal(toGa4EventName(ANALYTICS_EVENTS.USER_SIGNED_UP), "sign_up");
    assert.equal(
      toGa4EventName(ANALYTICS_EVENTS.CHECKOUT_STARTED),
      "begin_checkout",
    );
    assert.equal(
      toGa4EventName(ANALYTICS_EVENTS.CHECKOUT_COMPLETED),
      "purchase",
    );
    assert.equal(toGa4EventName(ANALYTICS_EVENTS.USER_LOGGED_IN), "login");
  });

  it("passes every other event through unchanged", () => {
    assert.equal(
      toGa4EventName(ANALYTICS_EVENTS.PROJECT_CREATED),
      "project_created",
    );
    assert.equal(toGa4EventName("try_it_clicked"), "try_it_clicked");
  });

  it("lists key events by the name GA4 receives, never the canonical one", () => {
    assert.deepEqual([...GA4_KEY_EVENTS].sort(), [
      "begin_checkout",
      "chat_started",
      "project_created",
      "purchase",
      "share",
      "sign_up",
    ]);
    assert.ok(!GA4_KEY_EVENTS.includes(ANALYTICS_EVENTS.USER_SIGNED_UP));
  });

  it("every event in the plan has a TRACKING_PLAN entry, and nothing else does", () => {
    const names = Object.values(ANALYTICS_EVENTS).sort();
    assert.deepEqual(Object.keys(TRACKING_PLAN).sort(), names);
    assert.equal(new Set(names).size, names.length);
  });

  it("event names are snake_case and fit GA4's 40-char limit", () => {
    for (const name of Object.values(ANALYTICS_EVENTS)) {
      assert.match(toGa4EventName(name), /^[a-z][a-z0-9_]{0,39}$/);
    }
  });
});

describe("toGa4Params", () => {
  it("drops PII keys, email-shaped values and the PostHog $ namespace", () => {
    const params = toGa4Params({
      email: "a@b.co",
      Name: "Ada",
      contact: "ada@example.com",
      $set: { email: "a@b.co" },
      $initial_utm_source: "google",
      plan: "pro",
      value: 49,
      is_trial: false,
    });
    assert.deepEqual(params, { plan: "pro", value: 49, is_trial: false });
  });

  it("drops non-scalars, invalid names and the identity carriers", () => {
    const params = toGa4Params({
      nested: { a: 1 },
      list: [1],
      "bad-name": "x",
      ga_client_id: "1.2",
      ga_session_id: "3",
      nan: Number.NaN,
      ok: "y",
    });
    assert.deepEqual(params, { ok: "y" });
  });

  it("truncates long strings and caps the param count at 25", () => {
    const many = Object.fromEntries(
      Array.from({ length: 30 }, (_, i) => [`p${i}`, i]),
    );
    assert.equal(Object.keys(toGa4Params(many)).length, 25);
    assert.equal(
      (toGa4Params({ long: "x".repeat(150) }).long as string).length,
      100,
    );
  });
});

describe("_ga cookie parsing", () => {
  const cookie =
    "theme=dark; _ga=GA1.1.1234567890.1727862000; _ga_TESTSTREAM1=GS2.1.s1727863000$o3$g1$t1727863100$j60$l0$h0";

  it("extracts the client id from _ga", () => {
    assert.equal(parseGa4ClientId(cookie), "1234567890.1727862000");
    assert.equal(parseGa4ClientId("_ga=garbage"), null);
    assert.equal(parseGa4ClientId(undefined), null);
  });

  it("extracts the session id from the per-stream cookie (GS2 and GS1)", () => {
    assert.equal(parseGa4SessionId(cookie, "G-TESTSTREAM1"), "1727863000");
    assert.equal(
      parseGa4SessionId(
        "_ga_ABC123=GS1.1.1727864000.4.1.1727864100.0.0.0",
        "G-ABC123",
      ),
      "1727864000",
    );
    assert.equal(parseGa4SessionId(cookie, "G-OTHER"), null);
  });

  it("does not match a cookie whose name merely ends in _ga", () => {
    assert.equal(parseGa4ClientId("x_ga=GA1.1.1.2"), null);
  });
});

describe("resolveAnalyticsDestinations", () => {
  it("resolves every provider that is configured", () => {
    const d = resolveAnalyticsDestinations(
      env({
        POSTHOG_KEY: "phc_test",
        GA_MEASUREMENT_ID: "G-TEST",
        GA_API_SECRET: "secret",
        GOOGLE_ADS_TAG_ID: "AW-1",
      }),
    );
    assert.deepEqual(d, {
      posthog: { token: "phc_test", host: "/ingest" },
      ga4: { measurementId: "G-TEST", apiSecret: "secret" },
      googleAds: { tagId: "AW-1" },
    });
  });

  it("an unconfigured deployment resolves nothing, so nothing is sent", () => {
    assert.deepEqual(resolveAnalyticsDestinations(env()), {
      posthog: null,
      ga4: null,
      googleAds: null,
    });
  });

  it("each provider stands alone — GA4 without its secret stays browser-only", () => {
    const d = resolveAnalyticsDestinations(
      env({ GA_MEASUREMENT_ID: "G-TEST" }),
    );
    assert.deepEqual(d.ga4, { measurementId: "G-TEST", apiSecret: null });
    assert.equal(d.posthog, null);
    assert.equal(d.googleAds, null);
  });
});

describe("buildGa4Payload (Measurement Protocol)", () => {
  it("uses the browser identity carried in properties and maps the name", () => {
    const payload = buildGa4Payload({
      event: ANALYTICS_EVENTS.CHECKOUT_COMPLETED,
      distinctId: "user_1",
      userId: "user_1",
      properties: {
        ga_client_id: "111.222",
        ga_session_id: "333",
        transaction_id: "cs_1",
        value: 49,
        currency: "USD",
        email: "a@b.co",
      },
    });
    assert.equal(payload.client_id, "111.222");
    assert.equal(payload.user_id, "user_1");
    assert.deepEqual(payload.events, [
      {
        name: "purchase",
        params: {
          transaction_id: "cs_1",
          value: 49,
          currency: "USD",
          session_id: "333",
          engagement_time_msec: 100,
        },
      },
    ]);
  });

  it("falls back to a synthetic client id and omits user_id when unknown", () => {
    const payload = buildGa4Payload({
      event: ANALYTICS_EVENTS.SUBSCRIPTION_CANCELED,
      distinctId: "org_1",
    });
    assert.equal(payload.client_id, "server.org_1");
    assert.equal("user_id" in payload, false);
    assert.equal("session_id" in (payload.events[0]?.params ?? {}), false);
  });

  it("explicit identity beats the property carriers", () => {
    const payload = buildGa4Payload({
      event: ANALYTICS_EVENTS.USER_SIGNED_UP,
      distinctId: "user_1",
      clientId: "9.9",
      sessionId: "8",
      properties: { ga_client_id: "1.1", ga_session_id: "2" },
    });
    assert.equal(payload.client_id, "9.9");
    assert.equal(payload.events[0]?.params.session_id, "8");
  });
});

describe("URL redaction", () => {
  it("redacts sensitive params, keeps the rest", () => {
    assert.equal(
      redactUrl("/check-email?email=a%40b.c&type=login"),
      "/check-email?email=[redacted]&type=login",
    );
    assert.equal(
      redactUrl("/verify?token=abc&userId=u1"),
      "/verify?token=[redacted]&userId=u1",
    );
    assert.equal(redactUrl("/projects?page=2"), "/projects?page=2");
  });

  it("sanitizeProperties redacts URL-shaped props case-insensitively", () => {
    const out = sanitizeProperties({
      $current_url: "https://app/x?token=t",
      $initial_referrer: "https://ref/?email=a@b.c",
      redirectUrl: "https://y/?secret=s",
      $pathname: "/verify?code=c",
      plain: "email=untouched-not-url-prop",
      count: 3,
    });
    assert.equal(out.$current_url, "https://app/x?token=[redacted]");
    assert.equal(out.$initial_referrer, "https://ref/?email=[redacted]");
    assert.equal(out.redirectUrl, "https://y/?secret=[redacted]");
    assert.equal(out.$pathname, "/verify?code=[redacted]");
    assert.equal(out.plain, "email=untouched-not-url-prop");
    assert.equal(out.count, 3);
  });

  it("buildPageViewParams redacts campaign PII and omits an empty referrer", () => {
    assert.deepEqual(
      buildPageViewParams(
        "https://example.com/?utm_email=a%40b.c&utm_uid=123&utm_source=mail",
        "",
      ),
      {
        page_location:
          "https://example.com/?utm_email=[redacted]&utm_uid=123&utm_source=mail",
      },
    );
    assert.deepEqual(
      buildPageViewParams(
        "https://example.com/pricing",
        "https://example.com/?email=a@b.c",
      ),
      {
        page_location: "https://example.com/pricing",
        page_referrer: "https://example.com/?email=[redacted]",
      },
    );
  });
});
