/**
 * The ONE canonical projection of an analytics event, shared by the browser
 * layer (`client.tsx`) and every server transport (API worker, Next server
 * actions). Define a standard dimension HERE once and it appears on every
 * event in PostHog and GA4 — never re-derived per call site or per sink.
 */

export type AnalyticsSource = "web" | "landing" | "mcp" | "system";

/**
 * The identity + scope an event carries. `distinctId` is the person identity
 * (PostHog distinct id). The scope ids become flat properties AND PostHog
 * groups, so every event — browser or server — is sliceable per
 * organization / office / project without a join.
 */
export type AnalyticsContext = {
  distinctId: string;
  userId?: string | null;
  organizationId?: string | null;
  officeId?: string | null;
  projectId?: string | null;
  chatId?: string | null;
  source?: AnalyticsSource | null;
};

export type ProjectedAnalyticsEvent = {
  event: string;
  distinctId: string;
  properties: Record<string, unknown>;
  /** PostHog group analytics — same group types the browser registers. */
  groups?: Record<string, string>;
};

/** Context keys and the property names they project to. */
const CONTEXT_PROPERTIES = {
  userId: "user_id",
  organizationId: "organization_id",
  officeId: "office_id",
  projectId: "project_id",
  chatId: "chat_id",
  source: "source",
} as const;

type ContextKey = keyof typeof CONTEXT_PROPERTIES;

/**
 * Strip `undefined` / `null` / `""` so a destination payload never carries
 * empty keys. Booleans, `0` and `false` are kept.
 */
export const compactProps = (
  props: Record<string, unknown>,
): Record<string, unknown> => {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }
    out[key] = value;
  }
  return out;
};

/**
 * Whether `distinctId` names a person. PostHog creates a person profile per
 * distinct id, so an event keyed on a MACHINE id (an organization for
 * Stripe-webhook events, "system" for background work) must say so, or the
 * person population fills with ids that are not people.
 *
 * Fail-safe direction: only a POSITIVE match against a scope id suppresses
 * the profile — an id we cannot classify stays a person.
 */
export const distinctIdIsPerson = (context: AnalyticsContext): boolean => {
  const id = context.distinctId;
  if (!id) {
    return true;
  }
  if (id === "system") {
    return false;
  }
  return ![
    context.organizationId,
    context.officeId,
    context.projectId,
    context.chatId,
  ].some((scope) => scope && id === scope);
};

/**
 * Lifts the standard snake_case dimensions out of a flat property bag into a
 * context — for emitters that predate the context shape (the package
 * injection handlers send `{ distinctId, event, properties }` with
 * `organization_id` / `project_id` / `user_id` already in the bag).
 */
export const toAnalyticsContext = (
  distinctId: string,
  properties: Record<string, unknown> = {},
): { context: AnalyticsContext; extra: Record<string, unknown> } => {
  const context: AnalyticsContext = { distinctId };
  const extra: Record<string, unknown> = {};
  const byProperty = new Map<string, ContextKey>(
    Object.entries(CONTEXT_PROPERTIES).map(([key, property]) => [
      property,
      key as ContextKey,
    ]),
  );
  for (const [property, value] of Object.entries(properties)) {
    const key = byProperty.get(property);
    if (key && typeof value === "string" && value) {
      (context as Record<string, unknown>)[key] = value;
      continue;
    }
    extra[property] = value;
  }
  return { context, extra };
};

/**
 * Build the canonical event from a context + event-specific `extra` props.
 * The standard dimensions live here once; destinations consume the result
 * verbatim.
 */
export const projectAnalyticsEvent = (
  event: string,
  context: AnalyticsContext,
  extra: Record<string, unknown> = {},
): ProjectedAnalyticsEvent => {
  const dimensions: Record<string, unknown> = {};
  for (const [key, property] of Object.entries(CONTEXT_PROPERTIES)) {
    dimensions[property] = context[key as ContextKey] ?? undefined;
  }
  const properties = compactProps({
    ...dimensions,
    ...extra,
    // RESERVED — decided here, never by a call site: assigned after `extra`
    // so a caller cannot force-suppress a real person's profile. `undefined`
    // for a person → dropped → PostHog's default (create the profile).
    $process_person_profile: distinctIdIsPerson(context) ? undefined : false,
  });
  const groups = compactProps({
    organization: context.organizationId ?? undefined,
    office: context.officeId ?? undefined,
    project: context.projectId ?? undefined,
  }) as Record<string, string>;
  return {
    event,
    distinctId: context.distinctId,
    properties,
    ...(Object.keys(groups).length > 0 ? { groups } : {}),
  };
};
