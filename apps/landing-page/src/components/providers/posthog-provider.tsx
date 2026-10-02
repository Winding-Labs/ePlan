"use client";

import type { ReactNode } from "react";

import { posthog } from "posthog-js";

import { analytics } from "@wildfires-org/turboplan-analytics/client";

// Module-level init (not useEffect) so it runs at import time, before any
// effect that might identify or capture. Same pattern as the web app. No
// NEXT_PUBLIC_POSTHOG_KEY → PostHog stays uninitialized and every capture
// no-ops.
analytics.init(posthog, { service: "landing" });

interface PostHogProviderProps {
  children?: ReactNode;
}

export const PostHogProvider = ({ children }: PostHogProviderProps) => {
  return <>{children}</>;
};
