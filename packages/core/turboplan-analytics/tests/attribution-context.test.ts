import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  buildUtmCookie,
  cookieDomain,
  LINK_COOKIE_NAME,
  parseLinkCookie,
  parseUtmCookie,
  projectAnalyticsEvent,
  readCookieAttribution,
  signupAttributionProperties,
  toAnalyticsContext,
  UTM_COOKIE_NAME,
} from "../src/index";

// Exactly what the Moab links worker writes on a `links.<domain>/c/<code>`
// click: encodeURIComponent(JSON.stringify(bag)), scoped to the registrable
// domain (dash `workers/links/logic.ts` attributionCookies).
const moabUtm = encodeURIComponent(
  JSON.stringify({
    utm_source: "moab",
    utm_medium: "email",
    utm_campaign: "eplan-outbound",
    utm_content: "k7x2q",
  }),
);
const moabLink = encodeURIComponent(
  JSON.stringify({
    code: "k7x2q",
    agent_id: "eplan-outbound",
    campaign_id: "cmp_1",
    channel: "email",
    subject: "Permits in half the time",
    outbox_id: "obx_9",
    injected: "<script>",
  }),
);
const cookieHeader = `theme=dark; ${UTM_COOKIE_NAME}=${moabUtm}; ${LINK_COOKIE_NAME}=${moabLink}`;

describe("Moab cookie attribution (dash_utm + dash_link)", () => {
  it("reads the worker's cookies into utm_* and link_* properties", () => {
    assert.deepEqual(readCookieAttribution(cookieHeader), {
      utm_source: "moab",
      utm_medium: "email",
      utm_campaign: "eplan-outbound",
      utm_content: "k7x2q",
      link_code: "k7x2q",
      link_agent_id: "eplan-outbound",
      link_campaign_id: "cmp_1",
      link_channel: "email",
      link_subject: "Permits in half the time",
      link_outbox_id: "obx_9",
    });
  });

  it("keeps only allow-listed string keys, bounded — the cookie is attacker-controlled", () => {
    const hostile = encodeURIComponent(
      JSON.stringify({
        code: "x".repeat(400),
        subject: "s".repeat(400),
        injected: "nope",
        agent_id: 42,
      }),
    );
    const bag = parseLinkCookie(hostile);
    assert.deepEqual(Object.keys(bag).sort(), ["code", "subject"]);
    assert.equal(bag.code?.length, 256);
    assert.equal(bag.subject?.length, 120);
  });

  it("a garbage cookie is an empty bag, never a throw", () => {
    assert.deepEqual(parseUtmCookie("%E0%A4%A"), {});
    assert.deepEqual(parseUtmCookie("not-json"), {});
    assert.deepEqual(readCookieAttribution(undefined), {});
  });
});

describe("signupAttributionProperties", () => {
  it("puts the Moab bag on the signup event and first-touch on the person", () => {
    const props = signupAttributionProperties(cookieHeader);
    assert.equal(props.link_code, "k7x2q");
    assert.equal(props.utm_source, "moab");
    assert.deepEqual(
      (props.$set_once as Record<string, string>).initial_link_outbox_id,
      "obx_9",
    );
  });

  it("is empty without attribution cookies", () => {
    assert.deepEqual(signupAttributionProperties("theme=dark"), {});
  });
});

describe("first-touch dash_utm capture", () => {
  it("writes the landing URL's campaign params on the registrable domain", () => {
    const cookie = buildUtmCookie({
      search: "?utm_source=google&utm_medium=cpc&gclid=abc&email=a@b.co",
      hostname: "app.eplan.ai",
      isHttps: true,
      existingCookieHeader: "",
    });
    assert.ok(cookie);
    assert.match(cookie, /domain=\.eplan\.ai/);
    assert.match(cookie, /secure/);
    const value = cookie.split(";")[0]?.split("=").slice(1).join("=");
    assert.deepEqual(parseUtmCookie(value), {
      utm_source: "google",
      utm_medium: "cpc",
      gclid: "abc",
    });
  });

  it("never overwrites an existing bag — a Moab click stays the first touch", () => {
    assert.equal(
      buildUtmCookie({
        search: "?utm_source=google",
        hostname: "eplan.ai",
        isHttps: true,
        existingCookieHeader: cookieHeader,
      }),
      null,
    );
  });

  it("writes nothing for a direct visit, and no Domain on localhost", () => {
    assert.equal(
      buildUtmCookie({
        search: "",
        hostname: "eplan.ai",
        isHttps: true,
        existingCookieHeader: "",
      }),
      null,
    );
    assert.equal(cookieDomain("localhost"), "");
    assert.equal(cookieDomain("127.0.0.1"), "");
    assert.equal(cookieDomain("staging.eplan.ai"), "eplan.ai");
  });
});

describe("projectAnalyticsEvent (the one canonical projection)", () => {
  it("stamps the scope dimensions and PostHog groups on every event", () => {
    const projected = projectAnalyticsEvent(
      "chat_message_sent",
      {
        distinctId: "user_1",
        userId: "user_1",
        organizationId: "org_1",
        officeId: "office_1",
        projectId: "project_1",
        chatId: "chat_1",
        source: "web",
      },
      { message_length: 42 },
    );
    assert.deepEqual(projected.properties, {
      user_id: "user_1",
      organization_id: "org_1",
      office_id: "office_1",
      project_id: "project_1",
      chat_id: "chat_1",
      source: "web",
      message_length: 42,
    });
    assert.deepEqual(projected.groups, {
      organization: "org_1",
      office: "office_1",
      project: "project_1",
    });
  });

  it("a machine distinct id never mints a PostHog person", () => {
    const orgKeyed = projectAnalyticsEvent("subscription_canceled", {
      distinctId: "org_1",
      organizationId: "org_1",
    });
    assert.equal(orgKeyed.properties.$process_person_profile, false);
    const system = projectAnalyticsEvent("payment_failed", {
      distinctId: "system",
    });
    assert.equal(system.properties.$process_person_profile, false);
  });

  it("a caller cannot suppress a real person's profile", () => {
    const projected = projectAnalyticsEvent(
      "user_signed_up",
      { distinctId: "user_1", userId: "user_1" },
      { $process_person_profile: false },
    );
    assert.equal("$process_person_profile" in projected.properties, false);
  });

  it("toAnalyticsContext lifts the standard snake_case keys out of a flat bag", () => {
    const { context, extra } = toAnalyticsContext("user_1", {
      organization_id: "org_1",
      project_id: "project_1",
      user_id: "user_1",
      plan: "pro",
    });
    assert.deepEqual(context, {
      distinctId: "user_1",
      organizationId: "org_1",
      projectId: "project_1",
      userId: "user_1",
    });
    assert.deepEqual(extra, { plan: "pro" });
  });
});
