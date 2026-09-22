"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  applyUiScaleToDocument,
  clampUiScale,
  DEFAULT_UI_SCALE,
  readUiScaleCookie,
  watchUiScaleCookie,
  writeUiScaleCookie,
} from "@wildfires-org/turboplan-utils";

/**
 * The preference lives in a cookie so the landing page (a different origin)
 * can honour it too. `@wildfires-org/turboplan-utils` owns the contract —
 * cookie name, bounds and helpers — and is re-exported here so existing
 * consumers keep importing from one place.
 */
export {
  clampUiScale,
  DEFAULT_UI_SCALE,
  MAX_UI_SCALE,
  MIN_UI_SCALE,
  UI_SCALE_COOKIE_NAME,
  UI_SCALE_STEP,
} from "@wildfires-org/turboplan-utils";

type UiScaleContextValue = {
  scale: number;
  setScale: (scale: number) => void;
  resetScale: () => void;
};

const UiScaleContext = createContext<UiScaleContextValue | undefined>(
  undefined,
);

interface UiScaleProviderProps {
  children: ReactNode;
  /**
   * Parent domain the cookie is scoped to, from `AUTH_COOKIE_DOMAIN`. The
   * root layout is a server component and reads it there — the variable is
   * server-only, so it cannot be read from the browser.
   */
  cookieDomain?: string;
}

export const UiScaleProvider = ({
  children,
  cookieDomain,
}: UiScaleProviderProps) => {
  // Starts at the default so the first render matches the server output; the
  // root layout has already rendered the stored value onto <html>, so there is
  // no visible jump before the effect below syncs state with the cookie.
  const [scale, setScaleState] = useState(DEFAULT_UI_SCALE);

  useEffect(() => {
    const stored = readUiScaleCookie();
    if (stored !== null) {
      setScaleState(clampUiScale(stored));
    }
    // The cookie is shared with the landing page and with this app's other
    // tabs, so re-read it while the page is open rather than only at mount —
    // and mirror any outside change into state so the slider readout follows.
    return watchUiScaleCookie((next) => {
      setScaleState(next === null ? DEFAULT_UI_SCALE : clampUiScale(next));
    });
  }, []);

  const setScale = useCallback(
    (next: number) => {
      const clamped = clampUiScale(next);
      setScaleState(clamped);
      applyUiScaleToDocument(clamped);
      writeUiScaleCookie(clamped, cookieDomain);
    },
    [cookieDomain],
  );

  const resetScale = useCallback(() => {
    setScaleState(DEFAULT_UI_SCALE);
    applyUiScaleToDocument(DEFAULT_UI_SCALE);
    writeUiScaleCookie(DEFAULT_UI_SCALE, cookieDomain);
  }, [cookieDomain]);

  const value = useMemo<UiScaleContextValue>(
    () => ({ scale, setScale, resetScale }),
    [scale, setScale, resetScale],
  );

  return (
    <UiScaleContext.Provider value={value}>{children}</UiScaleContext.Provider>
  );
};

export const useUiScale = () => {
  const context = useContext(UiScaleContext);
  if (context === undefined) {
    throw new Error("useUiScale must be used within a UiScaleProvider");
  }
  return context;
};
