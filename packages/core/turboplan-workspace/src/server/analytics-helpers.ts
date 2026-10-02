import type { AnalyticsContext } from "@wildfires-org/turboplan-analytics";

type AnalyticsScope = Pick<
  AnalyticsContext,
  "organizationId" | "officeId" | "projectId"
>;

/**
 * Context for an event a user causes from a workspace route: keyed by that
 * user, scoped to whatever organization / office / project the caller
 * already holds (never fetched just to enrich an event).
 */
export const actorContext = (
  userId: string,
  scope: AnalyticsScope = {},
): AnalyticsContext => {
  return { distinctId: userId, userId, source: "web", ...scope };
};

const toSnakeCase = (field: string): string => {
  return field.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const isSameValue = (next: unknown, current: unknown): boolean => {
  return JSON.stringify(next ?? null) === JSON.stringify(current ?? null);
};

/**
 * The snake_case NAMES of the fields an update actually changes, sorted —
 * `*_updated` events say what changed, never what it changed to. An
 * `undefined` update value means the field was not sent.
 */
export const changedFieldNames = (
  current: Record<string, unknown>,
  updates: Record<string, unknown>,
): string[] => {
  return Object.entries(updates)
    .filter(
      ([field, value]) =>
        value !== undefined && !isSameValue(value, current[field]),
    )
    .map(([field]) => toSnakeCase(field))
    .sort();
};
