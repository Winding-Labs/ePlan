"use client";

import { createContext, type ReactNode, useContext, useEffect } from "react";

import type { User } from "next-auth";

import { identifyUser } from "@wildfires-org/turboplan-analytics/client";
import type { Profile } from "@wildfires-org/turboplan-db/types";

interface UserContext {
  user: User | null;
  profile: Profile | null;
}

const UserContext = createContext<UserContext | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  user: User | null;
  profile: Profile | null;
}

export function UserProvider({ children, user, profile }: UserProviderProps) {
  useEffect(() => {
    // Identify with user id + role only — no email (PII decision in the
    // tracking plan). Fans out to PostHog and GA4 (user_id); no-ops for any
    // provider that is not configured.
    if (user?.id) {
      identifyUser(user.id, {
        role: profile?.userRole ?? undefined,
      });
    }
  }, [user?.id, profile?.userRole]);

  return (
    <UserContext.Provider value={{ user, profile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
