import assert from "node:assert/strict";
import { afterEach, before, beforeEach, describe, it, mock } from "node:test";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import { PostHog } from "posthog-node";

import {
  flushGa4Events,
  trackAnalyticsEvent,
} from "@wildfires-org/turboplan-analytics/server";

import {
  posthogMiddleware,
  registerApiAnalyticsSink,
} from "../src/middleware/posthog.js";

// A PostHog token so the sink builds a client; its capture/flush are mocked
// below, so nothing leaves the process except the (mocked) GA4 fetch.
process.env.POSTHOG_API_KEY = "phc_test";

type MpPayload = {
  client_id: string;
  user_id?: string;
  events: Array<{ name: string; params: Record<string, unknown> }>;
};

type PostHogMessage = {
  distinctId: string;
  event: string;
  properties?: Record<string, unknown>;
  groups?: Record<string, string>;
};

const GA_COOKIES =
  "_ga=GA1.1.1234567890.1727862000; _ga_TEST123=GS2.1.s1727862111$o1$g1$t1727862222";

/**
 * The API's one analytics pathway: a package calls `trackAnalyticsEvent`, the
 * sink registered at bootstrap reads the current request (Hono context
 * storage) and fans the projected event out to PostHog (with groups) and to
 * the GA4 Measurement Protocol (with the browser's `_ga` identity) — the
 * wiring that lets a server-side sign_up/purchase join the visitor's GA
 * session.
 */
describe("trackAnalyticsEvent → API sink → PostHog + GA4", () => {
  let fetchMock: ReturnType<typeof mock.method>;
  let captureMock: ReturnType<typeof mock.method>;

  const sentPayloads = (): MpPayload[] =>
    fetchMock.mock.calls.map((call) =>
      JSON.parse(String((call.arguments[1] as RequestInit).body)),
    );

  const capturedMessages = (): PostHogMessage[] =>
    captureMock.mock.calls.map((call) => call.arguments[0] as PostHogMessage);

  before(() => {
    registerApiAnalyticsSink({ environment: "test" });
  });

  beforeEach(() => {
    process.env.GA_MEASUREMENT_ID = "G-TEST123";
    process.env.GA_API_SECRET = "mp-secret";
    fetchMock = mock.method(
      globalThis,
      "fetch",
      async () => new Response(null, { status: 204 }),
    );
    captureMock = mock.method(PostHog.prototype, "capture", () => {});
    mock.method(PostHog.prototype, "flush", async () => {});
  });

  afterEach(() => {
    mock.restoreAll();
  });

  it("joins the request's _ga session and user, and sends PostHog groups", async () => {
    const app = new Hono<{ Variables: { user: { userId: string } } }>();
    app.use("/*", contextStorage());
    app.use("/*", posthogMiddleware);
    app.use("/*", async (c, next) => {
      c.set("user", { userId: "user_1" });
      await next();
    });
    app.post("/checkout", (c) => {
      // No userId in the context: the sink fills it from the request user.
      trackAnalyticsEvent(
        "checkout_started",
        { distinctId: "user_1", organizationId: "org_1", source: "web" },
        { plan: "pro" },
      );
      return c.json({ ok: true });
    });

    const response = await app.request("/checkout", {
      method: "POST",
      headers: { cookie: GA_COOKIES },
    });

    assert.equal(response.status, 200);

    const [message] = capturedMessages();
    assert.equal(message.distinctId, "user_1");
    assert.equal(message.event, "checkout_started");
    assert.deepEqual(message.groups, { organization: "org_1" });
    assert.equal(message.properties?.organization_id, "org_1");
    assert.equal(message.properties?.user_id, "user_1");
    assert.equal(message.properties?.source, "web");
    assert.equal(message.properties?.service, "api");
    assert.equal(message.properties?.environment, "test");
    assert.equal(message.properties?.plan, "pro");
    assert.equal(
      "$process_person_profile" in (message.properties ?? {}),
      false,
    );

    // The flush middleware awaited the GA4 hit before the response resolved.
    assert.equal(fetchMock.mock.callCount(), 1);
    const [url] = fetchMock.mock.calls[0].arguments as [string];
    assert.match(url, /measurement_id=G-TEST123/);
    const [payload] = sentPayloads();
    assert.equal(payload.client_id, "1234567890.1727862000");
    assert.equal(payload.user_id, "user_1");
    assert.equal(payload.events[0].name, "begin_checkout");
    assert.equal(payload.events[0].params.session_id, "1727862111");
    assert.equal(payload.events[0].params.plan, "pro");
    assert.equal(payload.events[0].params.organization_id, "org_1");
  });

  it("outside a request, uses the GA4 identity carried in the properties", async () => {
    trackAnalyticsEvent(
      "checkout_completed",
      {
        distinctId: "user_1",
        userId: "user_1",
        organizationId: "org_1",
        source: "system",
      },
      {
        value: 49,
        currency: "USD",
        ga_client_id: "555.666",
        ga_session_id: "777",
      },
    );
    await flushGa4Events();

    const [payload] = sentPayloads();
    assert.equal(payload.client_id, "555.666");
    assert.equal(payload.user_id, "user_1");
    assert.equal(payload.events[0].name, "purchase");
    assert.equal(payload.events[0].params.session_id, "777");
    assert.equal(payload.events[0].params.value, 49);
    assert.equal("ga_client_id" in payload.events[0].params, false);

    // The identity carriers never reach PostHog.
    const [message] = capturedMessages();
    assert.equal("ga_client_id" in (message.properties ?? {}), false);
    assert.equal("ga_session_id" in (message.properties ?? {}), false);
  });

  it("an organization-keyed event does not create a PostHog person", () => {
    trackAnalyticsEvent(
      "subscription_activated",
      { distinctId: "org_1", organizationId: "org_1", source: "system" },
      { subscription_id: "sub_1" },
    );

    const [message] = capturedMessages();
    assert.equal(message.distinctId, "org_1");
    assert.equal(message.properties?.$process_person_profile, false);
    assert.equal(message.properties?.subscription_id, "sub_1");
  });

  it("GA4 is a no-op when it is not configured; PostHog still receives", () => {
    delete process.env.GA_MEASUREMENT_ID;
    delete process.env.GA_API_SECRET;

    assert.doesNotThrow(() => {
      trackAnalyticsEvent("access_token_created", {
        distinctId: "user_1",
        userId: "user_1",
      });
    });
    assert.equal(fetchMock.mock.callCount(), 0);
    assert.equal(captureMock.mock.callCount(), 1);
  });

  it("a failing destination never escapes into the caller", () => {
    captureMock.mock.mockImplementation(() => {
      throw new Error("posthog down");
    });
    const consoleError = mock.method(console, "error", () => {});

    assert.doesNotThrow(() => {
      trackAnalyticsEvent("document_exported", { distinctId: "user_1" });
    });
    assert.ok(consoleError.mock.callCount() >= 1);
  });
});
