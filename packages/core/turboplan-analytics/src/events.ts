/**
 * The tracking plan — the ONE list of canonical event names, shared by the
 * browser (landing + web) and the server (API + web server actions).
 * Naming: noun_verb, past tense, snake_case. PostHog receives these names
 * verbatim; GA4 receives them through `toGa4EventName`.
 *
 * Add a new event here first. See docs/plans/2026-10-02-analytics-master-pattern.md.
 */
export const ANALYTICS_EVENTS = {
  // Marketing site (apps/landing-page) — anonymous visitors
  TRY_IT_CLICKED: "try_it_clicked",
  HERO_PROMPT_SUBMITTED: "hero_prompt_submitted",
  HERO_DOCUMENT_ATTACHED: "hero_document_attached",
  CATALOG_REQUEST_CLICKED: "catalog_request_clicked",
  PRICING_PLAN_CLICKED: "pricing_plan_clicked",
  ENTERPRISE_CONTACT_CLICKED: "enterprise_contact_clicked",
  STARTUP_DISCOUNT_CLICKED: "startup_discount_clicked",
  PRICING_NAV_CLICKED: "pricing_nav_clicked",
  PROJECTS_CLICKED: "projects_clicked",
  CONTACT_CLICKED: "contact_clicked",
  CONTACT_SUPPORT_CLICKED: "contact_support_clicked",
  QUICK_START_SELECTED: "quick_start_selected",
  SIGN_IN_CLICKED: "sign_in_clicked",
  DOCS_CLICKED: "docs_clicked",
  SIGNUP_STARTED: "signup_started",
  // Auth / onboarding
  USER_SIGNED_UP: "user_signed_up",
  USER_LOGGED_IN: "user_logged_in",
  MAGIC_LINK_REQUESTED: "magic_link_requested",
  ONBOARDING_COMPLETED: "onboarding_completed",
  // Workspace
  ORGANIZATION_CREATED: "organization_created",
  PROJECT_CREATED: "project_created",
  MEMBER_JOINED: "member_joined",
  MEMBER_ROLE_CHANGED: "member_role_changed",
  // Chat / AI
  CHAT_MESSAGE_SENT: "chat_message_sent",
  AI_RESPONSE_RECEIVED: "ai_response_received",
  // Documents
  DOCUMENT_UPLOADED: "document_uploaded",
  DOCUMENT_DELETED: "document_deleted",
  // Tasks
  TASK_CREATED: "task_created",
  TASK_COMPLETED: "task_completed",
  TASK_MOVED: "task_moved",
  MILESTONE_CREATED: "milestone_created",
  MILESTONE_COMPLETED: "milestone_completed",
  // Billing
  CHECKOUT_STARTED: "checkout_started",
  CHECKOUT_COMPLETED: "checkout_completed",
  SUBSCRIPTION_ACTIVATED: "subscription_activated",
  SUBSCRIPTION_CANCELED: "subscription_canceled",
  PAYMENT_FAILED: "payment_failed",
  // Emitted by sibling apps (apps/mcp-server, apps/research-agent) with their
  // own PostHog clients and literal event names. Listed here so the plan
  // stays the complete picture of what the product sends.
  MCP_TOOL_CALLED: "mcp_tool_called",
  RESEARCH_RUN_STARTED: "research_run_started",
  RESEARCH_RUN_COMPLETED: "research_run_completed",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

/**
 * Canonical name → GA4 recommended-event name. Only events with a GA4
 * recommended equivalent are renamed; everything else passes through (it is
 * already snake_case). Applied on BOTH transports so one event can never
 * arrive in GA4 under two names.
 */
export const GA4_EVENT_NAME_MAP: Partial<Record<AnalyticsEvent, string>> = {
  [ANALYTICS_EVENTS.USER_SIGNED_UP]: "sign_up",
  [ANALYTICS_EVENTS.USER_LOGGED_IN]: "login",
  [ANALYTICS_EVENTS.CHECKOUT_STARTED]: "begin_checkout",
  [ANALYTICS_EVENTS.CHECKOUT_COMPLETED]: "purchase",
};

export const toGa4EventName = (event: string): string => {
  return GA4_EVENT_NAME_MAP[event as AnalyticsEvent] ?? event;
};

/**
 * Names that must be marked as key events on the GA4 property for Google Ads
 * to import them — the names GA4 RECEIVES, post-map. Marking is a GA4 Admin
 * action, not something the repo does; this list is what an operator checks.
 */
export const GA4_KEY_EVENTS: readonly string[] = [
  ANALYTICS_EVENTS.USER_SIGNED_UP,
  ANALYTICS_EVENTS.CHECKOUT_STARTED,
  ANALYTICS_EVENTS.CHECKOUT_COMPLETED,
  ANALYTICS_EVENTS.PROJECT_CREATED,
].map(toGa4EventName);
