"use client";

import { useCallback } from "react";

import { signOut } from "next-auth/react";

import { resetAnalytics } from "@wildfires-org/turboplan-analytics/client";
import { ApiClient } from "@wildfires-org/turboplan-api-client";

const apiClient = new ApiClient();

export const useLogout = () => {
  const logout = useCallback(async (options?: { redirectTo?: string }) => {
    const redirectUrl = options?.redirectTo ?? "/login";

    // Unlink the analytics identity so the next user on this browser
    // doesn't inherit it. No-ops for any provider that is not configured.
    resetAnalytics();

    try {
      // Clear JWT token first
      apiClient.clearToken();
      // Then sign out of NextAuth session
      await signOut({ redirectTo: redirectUrl });
    } catch (error) {
      console.error("Logout error:", error);
      // Still attempt to sign out even if token clearing fails
      await signOut({ redirectTo: redirectUrl });
    }
  }, []);

  return { logout };
};
