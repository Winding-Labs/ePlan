import type { Context } from "hono";

import { ANALYTICS_EVENTS } from "@wildfires-org/turboplan-analytics";
import { trackAnalyticsEvent } from "@wildfires-org/turboplan-analytics/server";
import type { SeatAvailabilityDecision } from "@wildfires-org/turboplan-billing/server";
import type { RBACContext } from "@wildfires-org/turboplan-rbac/hono";

import { actorContext } from "../analytics-helpers";

/**
 * Single wire contract for seat-cap rejections — every membership route
 * returns exactly this 403 so client handling cannot drift per route. Being
 * the one exit, it is also where the seat wall is counted.
 */
export const seatLimitResponse = (
  c: Context<RBACContext>,
  decision: SeatAvailabilityDecision,
  organizationId: string,
) => {
  trackAnalyticsEvent(
    ANALYTICS_EVENTS.PLAN_LIMIT_REACHED,
    actorContext(c.get("user").userId, { organizationId }),
    { limit: "seats", surface: "members", plan: decision.plan },
  );
  return c.json(
    {
      error: "Seat limit reached",
      code: "SEAT_LIMIT_REACHED",
      plan: decision.plan,
      includedSeats: decision.includedSeats,
    },
    403,
  );
};
