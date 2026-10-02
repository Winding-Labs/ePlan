/**
 * The tracking plan lives in `@wildfires-org/turboplan-analytics` (one list
 * for the browser and every server). Re-exported here so server modules keep
 * importing event names from one local path.
 */
export {
  ANALYTICS_EVENTS,
  type AnalyticsEvent,
} from "@wildfires-org/turboplan-analytics";

/** Standard properties attached to every server-side event. */
export type AnalyticsEventProperties = {
  organization_id?: string;
  office_id?: string;
  project_id?: string;
  actor_role?: string;
  source?: "web" | "mcp" | "system";
} & Record<string, unknown>;
