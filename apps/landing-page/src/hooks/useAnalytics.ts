import type { AnalyticsEvent } from "@wildfires-org/turboplan-analytics";
import { analytics } from "@wildfires-org/turboplan-analytics/client";

import { useAnalyticsContext } from "@/context/analytics";

export const useAnalytics = () => {
  const { user } = useAnalyticsContext();

  /**
   * Capture only for a known campaign user (identified from the utm_uid param).
   * Silently drops for organic visitors, so it is only appropriate where
   * identified-user semantics genuinely matter — never for plain CTA/nav
   * clicks, which should use `captureEvent`.
   */
  const captureCurrentUserEvent = (
    eventName: AnalyticsEvent,
    properties?: Record<string, string>,
  ) => {
    if (!user) {
      return;
    }
    analytics.event(eventName, properties);
  };

  /**
   * Capture regardless of identification — PostHog and GA4 both track
   * anonymous visitors natively. Use for marketing-funnel events (pricing,
   * signup CTAs) where visitors are overwhelmingly anonymous. Fans out to
   * every configured destination and no-ops for the rest.
   */
  const captureEvent = (
    eventName: AnalyticsEvent,
    properties?: Record<string, string>,
  ) => {
    analytics.event(eventName, properties);
  };

  return {
    captureCurrentUserEvent,
    captureEvent,
  };
};
