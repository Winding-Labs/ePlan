"use client";

import { useEffect } from "react";

import { watchUiScaleCookie } from "@wildfires-org/turboplan-utils";

/**
 * Keeps the marketing site in step with the interface scale chosen in the web
 * app. There is no control here — the slider lives in the app's Profile →
 * Appearance — but the value is shared through the `turboplan-ui-scale` cookie,
 * and the root layout only renders it once, per request. This
 * re-reads it while the tab is open so an already-open page picks up a change
 * made in the app without a reload.
 */
export const UiScaleSync = () => {
  useEffect(() => watchUiScaleCookie(), []);

  return null;
};
