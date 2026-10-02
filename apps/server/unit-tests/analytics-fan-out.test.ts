import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it, mock } from "node:test";
import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";

import { flushGa4Events } from "@wildfires-org/turboplan-analytics/server";

import { captureEvent, posthogMiddleware } from "../src/middleware/posthog.js";

// PostHog stays unset so nothing leaves the process except the (mocked) GA4
// Measurement Protocol fetch.
delete process.env.POSTHOG_API_KEY;
delete process.env.NEXT_PUBLIC_POSTHOG_KEY;

type MpPayload = {
  client_id: string;
  user_id?: string;
  events: Array<{ name: string; params: Record<string, unknown> }>;
};

const GA_COOKIES =
  "_ga=GA1.1.1234567890.1727862000; _ga_TEST123=GS2.1.s1727862111$o1$g1$t1727862222";

/**
 * The API's captureEvent fans out to GA4 with the browser identity read from
 * the current request (Hono context storage) — the wiring that lets a
 * server-side sign_up/purchase join the visitor's GA session.
 */
describe("captureEvent → GA4 Measurement Protocol", () => {
  let fetchMock: ReturnType<typeof mock.method>;

  const sentPayloads = (): MpPayload[] =>
    fetchMock.mock.calls.map((call) =>
      JSON.parse(String((call.arguments[1] as RequestInit).body)),
    );

  beforeEach(() => {
    process.env.GA_MEASUREMENT_ID = "G-TEST123";
    process.env.GA_API_SECRET = "mp-secret";
    fetchMock = mock.method(
      globalThis,
      "fetch",
      async () => new Response(null, { status: 204 }),
    );
  });

  afterEach(() => {
    mock.restoreAll();
  });

  it("joins the request's _ga session and the authenticated user", async () => {
    const app = new Hono<{ Variables: { user: { userId: string } } }>();
    app.use("/*", contextStorage());
    app.use("/*", posthogMiddleware);
    app.use("/*", async (c, next) => {
      c.set("user", { userId: "user_1" });
      await next();
    });
    app.post("/checkout", (c) => {
      captureEvent("user_1", "checkout_started", { plan: "pro" });
      return c.json({ ok: true });
    });

    const response = await app.request("/checkout", {
      method: "POST",
      headers: { cookie: GA_COOKIES },
    });

    assert.equal(response.status, 200);
    // The flush middleware awaited the hit before the response resolved.
    assert.equal(fetchMock.mock.callCount(), 1);
    const [url] = fetchMock.mock.calls[0].arguments as [string];
    assert.match(url, /measurement_id=G-TEST123/);
    const [payload] = sentPayloads();
    assert.equal(payload.client_id, "1234567890.1727862000");
    assert.equal(payload.user_id, "user_1");
    assert.equal(payload.events[0].name, "begin_checkout");
    assert.equal(payload.events[0].params.session_id, "1727862111");
    assert.equal(payload.events[0].params.plan, "pro");
  });

  it("outside a request, uses the identity carried in the properties", async () => {
    captureEvent("user_1", "checkout_completed", {
      user_id: "user_1",
      value: 49,
      currency: "USD",
      ga_client_id: "555.666",
      ga_session_id: "777",
    });
    await flushGa4Events();

    const [payload] = sentPayloads();
    assert.equal(payload.client_id, "555.666");
    assert.equal(payload.user_id, "user_1");
    assert.equal(payload.events[0].name, "purchase");
    assert.equal(payload.events[0].params.session_id, "777");
    assert.equal(payload.events[0].params.value, 49);
    assert.equal("ga_client_id" in payload.events[0].params, false);
  });

  it("is a no-op when GA4 is not configured", () => {
    delete process.env.GA_MEASUREMENT_ID;
    delete process.env.GA_API_SECRET;

    assert.doesNotThrow(() => {
      captureEvent("user_1", "user_signed_up", { method: "register" });
    });
    assert.equal(fetchMock.mock.callCount(), 0);
  });
});
