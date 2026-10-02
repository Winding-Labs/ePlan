import {
  GA4_CLIENT_ID_PROPERTY,
  GA4_SESSION_ID_PROPERTY,
} from "@wildfires-org/turboplan-analytics";

/**
 * Injection point for product analytics — mirrors the timeline-records
 * recorder pattern so this package stays free of PostHog dependencies.
 * The host app wires a handler at bootstrap; unset handler → no-op.
 */

export type BillingAnalyticsEvent = {
  distinctId: string;
  event:
    | "checkout_started"
    | "checkout_completed"
    | "subscription_activated"
    | "subscription_canceled"
    | "payment_failed";
  properties?: Record<string, unknown>;
};

let handler: ((event: BillingAnalyticsEvent) => void) | undefined;

export const configureBillingAnalytics = (
  onEvent: (event: BillingAnalyticsEvent) => void,
) => {
  handler = onEvent;
};

/** Fire-and-forget — analytics can never break a billing operation. */
export const emitBillingAnalytics = (event: BillingAnalyticsEvent) => {
  try {
    handler?.(event);
  } catch (error) {
    console.error("[billing-analytics] handler failed:", error);
  }
};

/**
 * Billing funnel identity contract.
 *
 * checkout_started is keyed by the USER who started it — that is a real
 * PostHog person, so it joins the signup/onboarding funnel that precedes it.
 * checkout_completed is keyed by the same user, read back from the Checkout
 * Session metadata written at checkout (see buildCheckoutSessionMetadata).
 * The webhook-side subscription events have no user context (Stripe only tells
 * us the subscription), so they stay keyed by the organization. `organization_id`
 * is carried in the PROPERTIES of every side, which is what the billing funnel
 * joins on. Build checkout events through these helpers (and subscription
 * events through createSubscriptionAnalyticsEmitter in webhook.ts) — the
 * contract test in tests/analytics-contract.test.ts pins the shared join key.
 */
export const buildCheckoutStartedEvent = (
  organizationId: string,
  userId: string,
  plan: string,
): BillingAnalyticsEvent => {
  return {
    distinctId: userId,
    event: "checkout_started",
    properties: {
      organization_id: organizationId,
      user_id: userId,
      plan,
    },
  };
};

/**
 * Who started a checkout, captured from the checkout request: the user, and
 * the browser's GA4 client + session ids (from the `_ga` cookies). Carried
 * through Stripe so the webhook can attribute the purchase to that session —
 * which is what lets Google Ads count it.
 */
export type CheckoutAttribution = {
  userId: string;
  gaClientId?: string | null;
  gaSessionId?: string | null;
};

/**
 * The Checkout Session `metadata` — the write side of the contract that
 * buildCheckoutCompletedEvent reads back. Stripe metadata values must be
 * strings, so unknown ids are omitted rather than sent as null.
 */
export const buildCheckoutSessionMetadata = (
  organizationId: string,
  plan: string,
  attribution?: CheckoutAttribution,
): Record<string, string> => {
  return {
    organizationId,
    plan,
    ...(attribution?.userId ? { userId: attribution.userId } : {}),
    ...(attribution?.gaClientId
      ? { [GA4_CLIENT_ID_PROPERTY]: attribution.gaClientId }
      : {}),
    ...(attribution?.gaSessionId
      ? { [GA4_SESSION_ID_PROPERTY]: attribution.gaSessionId }
      : {}),
  };
};

/** The fields of a Stripe Checkout Session that checkout_completed reads. */
export type CheckoutCompletedSession = {
  id: string;
  amount_total: number | null;
  currency: string | null;
  client_reference_id: string | null;
  metadata: Record<string, string> | null;
  subscription: string | { id: string } | null;
};

/**
 * checkout_completed — the purchase conversion (GA4 `purchase`). Keyed by
 * the user from the session metadata, so it joins checkout_started and the
 * person funnel; falls back to the organization (flagged `unattributed`) for
 * a session without one. The `_ga` ids ride along as properties and become
 * the GA4 Measurement Protocol client/session (they never reach PostHog).
 */
export const buildCheckoutCompletedEvent = (
  session: CheckoutCompletedSession,
): BillingAnalyticsEvent => {
  const metadata = session.metadata ?? {};
  const organizationId =
    metadata.organizationId || session.client_reference_id || undefined;
  const userId = metadata.userId || undefined;
  const subscriptionId =
    typeof session.subscription === "string"
      ? session.subscription
      : session.subscription?.id;
  const gaClientId = metadata[GA4_CLIENT_ID_PROPERTY];
  const gaSessionId = metadata[GA4_SESSION_ID_PROPERTY];

  return {
    distinctId: userId ?? organizationId ?? "system",
    event: "checkout_completed",
    properties: {
      organization_id: organizationId,
      user_id: userId,
      plan: metadata.plan,
      subscription_id: subscriptionId,
      transaction_id: session.id,
      // Stripe amounts are in the currency's minor unit; the catalog is USD.
      value: (session.amount_total ?? 0) / 100,
      currency: session.currency?.toUpperCase(),
      ...(gaClientId ? { [GA4_CLIENT_ID_PROPERTY]: gaClientId } : {}),
      ...(gaSessionId ? { [GA4_SESSION_ID_PROPERTY]: gaSessionId } : {}),
      ...(userId ? {} : { unattributed: true }),
    },
  };
};
