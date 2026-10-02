"use client";

import type { ReactNode } from "react";

import { posthog } from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

import { analytics } from "@wildfires-org/turboplan-analytics/client";

// Module-level init (not useEffect): child effects run before parent effects,
// so an effect-based init would race identify/group calls in nested providers
// on a hard page load. Import time is before any effect. No
// NEXT_PUBLIC_POSTHOG_KEY → PostHog stays uninitialized and every capture
// no-ops.
analytics.init(posthog, { service: "web" });

interface PostHogProviderProps {
  children: ReactNode;
}

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
  if (!analytics.isPostHogEnabled()) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
};
