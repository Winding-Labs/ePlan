import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it, mock } from "node:test";

import { projectAnalyticsEvent } from "@wildfires-org/turboplan-analytics";
import { configureServerAnalytics } from "@wildfires-org/turboplan-analytics/server";

import {
  type BillingAnalyticsEvent,
  buildCheckoutCompletedEvent,
  buildCheckoutSessionMetadata,
  buildCheckoutStartedEvent,
  type CheckoutCompletedSession,
} from "../src/server/analytics";
import { createSubscriptionAnalyticsEmitter } from "../src/server/webhook";

/** What PostHog receives for an event: the one canonical projection. */
const projected = (event: BillingAnalyticsEvent) => {
  return projectAnalyticsEvent(event.event, event.context, event.extra);
};

/**
 * Billing funnel identity contract: checkout_started (router side) is keyed by
 * the USER, so it joins the person funnel that precedes it; the subscription
 * events (webhook side) are keyed by the ORGANIZATION, because Stripe gives the
 * webhook no user context. Both sides carry the organization — the
 * `organization_id` property and the PostHog `organization` group — and that
 * is the join key; subscription events must also carry a joinable
 * subscription_id. These tests pin the two-sided contract, not either side's
 * internals.
 */
describe("billing funnel identity contract", () => {
  const ORG_ID = "org_123";
  const USER_ID = "user_1";
  const SUBSCRIPTION_ID = "sub_456";

  let captured: BillingAnalyticsEvent[] = [];

  beforeEach(() => {
    captured = [];
    configureServerAnalytics((event, context, extra) => {
      captured.push({ event, context, extra });
    });
  });

  afterEach(() => {
    // Unregister so other test files never see this capture sink.
    configureServerAnalytics(null);
    mock.restoreAll();
  });

  it("checkout_started is keyed by the user, not the organization", async () => {
    const checkout = buildCheckoutStartedEvent(ORG_ID, USER_ID, "pro");

    // A real PostHog person, so this event joins signup/onboarding.
    assert.equal(checkout.context.distinctId, USER_ID);
    assert.notEqual(checkout.context.distinctId, ORG_ID);
    // The org attribution stays available as a property and a group.
    const { properties, groups } = projected(checkout);
    assert.equal(properties.organization_id, ORG_ID);
    assert.equal(properties.user_id, USER_ID);
    assert.equal(properties.plan, "pro");
    assert.deepEqual(groups, { organization: ORG_ID });
    assert.equal("$process_person_profile" in properties, false);
  });

  it("checkout_started and subscription events share the organization_id join key", async () => {
    const emit = createSubscriptionAnalyticsEmitter(async () => ({
      organizationId: ORG_ID,
    }));

    const checkout = projected(
      buildCheckoutStartedEvent(ORG_ID, USER_ID, "pro"),
    );
    await emit("subscription_activated", SUBSCRIPTION_ID);
    await emit("subscription_canceled", SUBSCRIPTION_ID);
    // Dunning event — fired from invoice.payment_failed on the first attempt.
    await emit("payment_failed", SUBSCRIPTION_ID);

    assert.equal(captured.length, 3);
    assert.deepEqual(
      captured.map((event) => event.event),
      ["subscription_activated", "subscription_canceled", "payment_failed"],
    );
    for (const event of captured) {
      // Webhook side has no user context — org-keyed by design, and the org
      // key is not a person.
      assert.equal(event.context.distinctId, ORG_ID);
      const { properties, groups } = projected(event);
      assert.equal(properties.$process_person_profile, false);
      // Property-level and group-level join key shared with checkout_started.
      assert.equal(
        properties.organization_id,
        checkout.properties.organization_id,
      );
      assert.deepEqual(groups, checkout.groups);
      // Joinable subscription identity on the webhook side.
      assert.equal(properties.subscription_id, SUBSCRIPTION_ID);
      assert.equal(properties.source, "system");
    }
  });

  it("successful lookup emits no unattributed marker", async () => {
    const emit = createSubscriptionAnalyticsEmitter(async () => ({
      organizationId: ORG_ID,
    }));

    await emit("subscription_activated", SUBSCRIPTION_ID);

    assert.equal(captured.length, 1);
    assert.equal(captured[0].context.distinctId, ORG_ID);
    assert.equal("unattributed" in captured[0].extra, false);
  });

  it("null lookup emits system distinct id with unattributed: true", async () => {
    const emit = createSubscriptionAnalyticsEmitter(async () => null);

    await emit("subscription_canceled", SUBSCRIPTION_ID);

    assert.equal(captured.length, 1);
    assert.equal(captured[0].context.distinctId, "system");
    const { properties } = projected(captured[0]);
    assert.equal(properties.unattributed, true);
    assert.equal(properties.subscription_id, SUBSCRIPTION_ID);
    assert.equal(properties.organization_id, undefined);
    assert.equal(properties.$process_person_profile, false);
  });

  it("failed lookup logs the Stripe id and emits unattributed system event", async () => {
    const consoleError = mock.method(console, "error", () => {});
    const emit = createSubscriptionAnalyticsEmitter(async () => {
      throw new Error("db unavailable");
    });

    await emit("payment_failed", SUBSCRIPTION_ID);

    assert.equal(captured.length, 1);
    assert.equal(captured[0].context.distinctId, "system");
    assert.equal(captured[0].extra.unattributed, true);
    assert.equal(consoleError.mock.callCount(), 1);
    const [message] = consoleError.mock.calls[0].arguments;
    assert.match(String(message), new RegExp(SUBSCRIPTION_ID));
  });
});

/**
 * checkout_completed is the purchase conversion (GA4 `purchase`). The router
 * writes the buyer + GA4 ids into the Checkout Session metadata; the webhook
 * reads them back. These tests pin both sides of that metadata round trip.
 */
describe("checkout_completed (purchase) contract", () => {
  const ORG_ID = "org_123";
  const USER_ID = "user_1";
  const SESSION_ID = "cs_test_789";
  const SUBSCRIPTION_ID = "sub_456";

  const completedSession = (
    metadata: Record<string, string> | null,
    overrides: Partial<CheckoutCompletedSession> = {},
  ): CheckoutCompletedSession => ({
    id: SESSION_ID,
    amount_total: 4900,
    currency: "usd",
    client_reference_id: ORG_ID,
    metadata,
    subscription: SUBSCRIPTION_ID,
    ...overrides,
  });

  it("is keyed by the metadata user, so it joins checkout_started", () => {
    const metadata = buildCheckoutSessionMetadata(ORG_ID, "pro", {
      userId: USER_ID,
    });
    const completed = buildCheckoutCompletedEvent(completedSession(metadata));
    const started = buildCheckoutStartedEvent(ORG_ID, USER_ID, "pro");

    assert.equal(completed.event, "checkout_completed");
    assert.equal(completed.context.distinctId, USER_ID);
    assert.equal(completed.context.distinctId, started.context.distinctId);
    const completedProps = projected(completed).properties;
    const startedProps = projected(started).properties;
    assert.equal(completedProps.user_id, USER_ID);
    // Same property-level join key as every other billing event.
    assert.equal(completedProps.organization_id, startedProps.organization_id);
    assert.equal(completedProps.plan, "pro");
    assert.equal(completedProps.subscription_id, SUBSCRIPTION_ID);
    assert.equal("unattributed" in completedProps, false);
    assert.equal("$process_person_profile" in completedProps, false);
  });

  it("carries value, currency and transaction id for GA4 purchase", () => {
    const completed = buildCheckoutCompletedEvent(
      completedSession(
        buildCheckoutSessionMetadata(ORG_ID, "pro", { userId: USER_ID }),
      ),
    );

    assert.equal(completed.extra.value, 49);
    assert.equal(completed.extra.currency, "USD");
    assert.equal(completed.extra.transaction_id, SESSION_ID);
  });

  it("carries the GA4 client and session ids when checkout captured them", () => {
    const metadata = buildCheckoutSessionMetadata(ORG_ID, "pro", {
      userId: USER_ID,
      gaClientId: "1234567890.1727862000",
      gaSessionId: "1727862000",
    });
    const completed = buildCheckoutCompletedEvent(completedSession(metadata));

    assert.equal(completed.extra.ga_client_id, "1234567890.1727862000");
    assert.equal(completed.extra.ga_session_id, "1727862000");
  });

  it("omits unknown GA4 ids — Stripe metadata values must be strings", () => {
    const metadata = buildCheckoutSessionMetadata(ORG_ID, "pro", {
      userId: USER_ID,
      gaClientId: null,
      gaSessionId: null,
    });
    assert.deepEqual(metadata, {
      organizationId: ORG_ID,
      plan: "pro",
      userId: USER_ID,
    });

    const completed = buildCheckoutCompletedEvent(completedSession(metadata));
    assert.equal("ga_client_id" in completed.extra, false);
    assert.equal("ga_session_id" in completed.extra, false);
  });

  it("falls back to the organization, flagged unattributed, without a metadata user", () => {
    // A session created before session metadata existed: only
    // client_reference_id identifies the organization.
    const completed = buildCheckoutCompletedEvent(completedSession(null));

    assert.equal(completed.context.distinctId, ORG_ID);
    const { properties } = projected(completed);
    assert.equal(properties.organization_id, ORG_ID);
    assert.equal(properties.unattributed, true);
    assert.equal(properties.user_id, undefined);
    assert.equal(properties.transaction_id, SESSION_ID);
    // An organization key is not a person.
    assert.equal(properties.$process_person_profile, false);
  });
});
