import {
  type AnalyticsEnvType,
  getAnalyticsEnv,
} from "@wildfires-org/turboplan-env";

/**
 * Where analytics goes, resolved per provider from the deployment's own
 * configuration. Nothing is declared in code on purpose: this repo is a
 * public template, so a hardcoded id would make every fork's production
 * write into someone else's PostHog / GA4 / Google Ads. The values for a
 * given deployment live in its GitHub environment variables (see
 * CONFIGURATION.md); an unset provider resolves to null and every call to it
 * no-ops — which is also what keeps local runs out of the real projects.
 */
export type AnalyticsDestinations = {
  posthog: { token: string; host: string } | null;
  ga4: { measurementId: string; apiSecret: string | null } | null;
  googleAds: { tagId: string } | null;
  ahrefs: { key: string } | null;
};

export const resolveAnalyticsDestinations = (
  env: AnalyticsEnvType = getAnalyticsEnv(),
): AnalyticsDestinations => {
  return {
    posthog: env.POSTHOG_KEY
      ? { token: env.POSTHOG_KEY, host: env.POSTHOG_HOST }
      : null,
    ga4: env.GA_MEASUREMENT_ID
      ? {
          measurementId: env.GA_MEASUREMENT_ID,
          apiSecret: env.GA_API_SECRET ?? null,
        }
      : null,
    googleAds: env.GOOGLE_ADS_TAG_ID ? { tagId: env.GOOGLE_ADS_TAG_ID } : null,
    ahrefs: env.AHREFS_ANALYTICS_KEY ? { key: env.AHREFS_ANALYTICS_KEY } : null,
  };
};
