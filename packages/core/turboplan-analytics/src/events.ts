/**
 * The tracking plan — the ONE list of canonical event names, shared by the
 * browser (landing + web) and every server process (API, web server, MCP).
 * Naming: noun_verb, past tense, snake_case. PostHog receives these names
 * verbatim; GA4 receives them through `toGa4EventName`.
 *
 * Add a new event here AND in `TRACKING_PLAN` (the compiler enforces the
 * latter). See docs/plans/2026-10-02-analytics-master-pattern.md.
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
  TEMPLATES_CLICKED: "templates_clicked",
  SIGNUP_STARTED: "signup_started",
  // Auth / onboarding
  MAGIC_LINK_REQUESTED: "magic_link_requested",
  USER_SIGNED_UP: "user_signed_up",
  EMAIL_VERIFIED: "email_verified",
  USER_LOGGED_IN: "user_logged_in",
  ONBOARDING_COMPLETED: "onboarding_completed",
  // Workspace — organizations and offices
  ORGANIZATION_CREATED: "organization_created",
  ORGANIZATION_UPDATED: "organization_updated",
  OFFICE_CREATED: "office_created",
  OFFICE_UPDATED: "office_updated",
  OFFICE_DELETED: "office_deleted",
  // Collaboration — members of an organization, office or project
  MEMBER_INVITED: "member_invited",
  MEMBER_JOINED: "member_joined",
  MEMBER_ROLE_CHANGED: "member_role_changed",
  MEMBER_REMOVED: "member_removed",
  // Projects
  PROJECT_CREATED: "project_created",
  PROJECT_STATUS_CHANGED: "project_status_changed",
  PROJECT_VISIBILITY_CHANGED: "project_visibility_changed",
  PROJECT_SUBMITTED_FOR_REVIEW: "project_submitted_for_review",
  PROJECT_REVIEWED: "project_reviewed",
  RESEARCH_PHASE_COMPLETED: "research_phase_completed",
  PROJECT_DELETED: "project_deleted",
  // Chat / AI
  CHAT_STARTED: "chat_started",
  CHAT_MESSAGE_SENT: "chat_message_sent",
  AI_RESPONSE_RECEIVED: "ai_response_received",
  AI_ARTIFACT_CREATED: "ai_artifact_created",
  CHAT_DELETED: "chat_deleted",
  // Research agent
  RESEARCH_REQUESTED: "research_requested",
  RESEARCH_RESULTS_SAVED: "research_results_saved",
  // Documents and signing
  DOCUMENT_UPLOADED: "document_uploaded",
  DOCUMENT_DELETED: "document_deleted",
  DOCUMENT_EXPORTED: "document_exported",
  SIGNATURE_REQUESTED: "signature_requested",
  SIGNATURE_COMPLETED: "signature_completed",
  SIGNATURE_DECLINED: "signature_declined",
  // Project data — tasks, milestones, comments, fields, maps, context
  TASK_CREATED: "task_created",
  TASK_ASSIGNED: "task_assigned",
  TASK_COMPLETED: "task_completed",
  TASK_MOVED: "task_moved",
  TASK_DELETED: "task_deleted",
  MILESTONE_CREATED: "milestone_created",
  MILESTONE_COMPLETED: "milestone_completed",
  MILESTONE_DELETED: "milestone_deleted",
  COMMENT_CREATED: "comment_created",
  FIELD_CREATED: "field_created",
  MAP_LAYER_ADDED: "map_layer_added",
  PROJECT_CONTEXT_ADDED: "project_context_added",
  // Billing
  PLAN_LIMIT_REACHED: "plan_limit_reached",
  PLAN_SELECTED: "plan_selected",
  CHECKOUT_STARTED: "checkout_started",
  CHECKOUT_COMPLETED: "checkout_completed",
  SUBSCRIPTION_ACTIVATED: "subscription_activated",
  PLAN_CHANGED: "plan_changed",
  SUBSCRIPTION_CANCEL_REQUESTED: "subscription_cancel_requested",
  SUBSCRIPTION_RESUMED: "subscription_resumed",
  SUBSCRIPTION_CANCELED: "subscription_canceled",
  PAYMENT_FAILED: "payment_failed",
  // Platform / integrations
  ACCESS_TOKEN_CREATED: "access_token_created",
  // Emitted by sibling apps with their own PostHog clients
  // (apps/mcp-server, apps/research-agent) — listed so the plan stays the
  // complete picture of what the product sends.
  MCP_TOOL_CALLED: "mcp_tool_called",
  RESEARCH_RUN_STARTED: "research_run_started",
  RESEARCH_RUN_COMPLETED: "research_run_completed",
} as const;

export type AnalyticsEvent =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type TrackingPlanCategory =
  | "acquisition"
  | "activation"
  | "workspace"
  | "collaboration"
  | "project"
  | "ai"
  | "documents"
  | "project_data"
  | "billing"
  | "platform";

/**
 * One entry per canonical event: what it means and where it is emitted.
 * The declarative half of the plan (dash `TRACKING_PLAN`): the docs table and
 * any dashboard read it, never a hand-kept copy. `Record<AnalyticsEvent, …>`
 * makes a missing entry a compile error.
 */
export type TrackingPlanEntry = {
  title: string;
  category: TrackingPlanCategory;
  /** Where the ONE emit lives: browser, api, web-server, mcp, research-agent. */
  emittedBy: ReadonlyArray<
    "browser" | "api" | "web-server" | "mcp" | "research-agent"
  >;
};

const browser = ["browser"] as const;
const api = ["api", "mcp"] as const;
const webServer = ["web-server"] as const;

export const TRACKING_PLAN: Record<AnalyticsEvent, TrackingPlanEntry> = {
  try_it_clicked: {
    title: "Try It Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  hero_prompt_submitted: {
    title: "Hero Prompt Submitted",
    category: "acquisition",
    emittedBy: browser,
  },
  hero_document_attached: {
    title: "Hero Document Attached",
    category: "acquisition",
    emittedBy: browser,
  },
  catalog_request_clicked: {
    title: "Catalog Request Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  pricing_plan_clicked: {
    title: "Pricing Plan Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  enterprise_contact_clicked: {
    title: "Enterprise Contact Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  startup_discount_clicked: {
    title: "Startup Discount Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  pricing_nav_clicked: {
    title: "Pricing Nav Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  projects_clicked: {
    title: "Projects Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  contact_clicked: {
    title: "Contact Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  contact_support_clicked: {
    title: "Contact Support Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  quick_start_selected: {
    title: "Quick Start Selected",
    category: "acquisition",
    emittedBy: browser,
  },
  sign_in_clicked: {
    title: "Sign In Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  docs_clicked: {
    title: "Docs Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  templates_clicked: {
    title: "Templates Clicked",
    category: "acquisition",
    emittedBy: browser,
  },
  signup_started: {
    title: "Signup Started",
    category: "acquisition",
    emittedBy: browser,
  },
  magic_link_requested: {
    title: "Magic Link Requested",
    category: "activation",
    emittedBy: ["api"],
  },
  user_signed_up: {
    title: "User Signed Up",
    category: "activation",
    emittedBy: webServer,
  },
  email_verified: {
    title: "Email Verified",
    category: "activation",
    emittedBy: webServer,
  },
  user_logged_in: {
    title: "User Logged In",
    category: "activation",
    emittedBy: webServer,
  },
  onboarding_completed: {
    title: "Onboarding Completed",
    category: "activation",
    emittedBy: webServer,
  },
  organization_created: {
    title: "Organization Created",
    category: "workspace",
    emittedBy: ["api"],
  },
  organization_updated: {
    title: "Organization Updated",
    category: "workspace",
    emittedBy: api,
  },
  office_created: {
    title: "Office Created",
    category: "workspace",
    emittedBy: api,
  },
  office_updated: {
    title: "Office Updated",
    category: "workspace",
    emittedBy: api,
  },
  office_deleted: {
    title: "Office Deleted",
    category: "workspace",
    emittedBy: ["api"],
  },
  member_invited: {
    title: "Member Invited",
    category: "collaboration",
    emittedBy: api,
  },
  member_joined: {
    title: "Member Joined",
    category: "collaboration",
    emittedBy: ["api", "mcp", "web-server"],
  },
  member_role_changed: {
    title: "Member Role Changed",
    category: "collaboration",
    emittedBy: api,
  },
  member_removed: {
    title: "Member Removed",
    category: "collaboration",
    emittedBy: api,
  },
  project_created: {
    title: "Project Created",
    category: "project",
    emittedBy: ["api", "mcp", "web-server"],
  },
  project_status_changed: {
    title: "Project Status Changed",
    category: "project",
    emittedBy: api,
  },
  project_visibility_changed: {
    title: "Project Visibility Changed",
    category: "project",
    emittedBy: api,
  },
  project_submitted_for_review: {
    title: "Project Submitted For Review",
    category: "project",
    emittedBy: ["api"],
  },
  project_reviewed: {
    title: "Project Reviewed",
    category: "project",
    emittedBy: ["api"],
  },
  research_phase_completed: {
    title: "Research Phase Completed",
    category: "project",
    emittedBy: ["api"],
  },
  project_deleted: {
    title: "Project Deleted",
    category: "project",
    emittedBy: ["api"],
  },
  chat_started: { title: "Chat Started", category: "ai", emittedBy: webServer },
  chat_message_sent: {
    title: "Chat Message Sent",
    category: "ai",
    emittedBy: webServer,
  },
  ai_response_received: {
    title: "AI Response Received",
    category: "ai",
    emittedBy: webServer,
  },
  ai_artifact_created: {
    title: "AI Artifact Created",
    category: "ai",
    emittedBy: webServer,
  },
  chat_deleted: { title: "Chat Deleted", category: "ai", emittedBy: webServer },
  research_requested: {
    title: "Research Requested",
    category: "ai",
    emittedBy: ["api"],
  },
  research_results_saved: {
    title: "Research Results Saved",
    category: "ai",
    emittedBy: ["api"],
  },
  document_uploaded: {
    title: "Document Uploaded",
    category: "documents",
    emittedBy: ["api", "mcp", "web-server"],
  },
  document_deleted: {
    title: "Document Deleted",
    category: "documents",
    emittedBy: api,
  },
  document_exported: {
    title: "Document Exported",
    category: "documents",
    emittedBy: ["api"],
  },
  signature_requested: {
    title: "Signature Requested",
    category: "documents",
    emittedBy: ["api"],
  },
  signature_completed: {
    title: "Signature Completed",
    category: "documents",
    emittedBy: ["api"],
  },
  signature_declined: {
    title: "Signature Declined",
    category: "documents",
    emittedBy: ["api"],
  },
  task_created: {
    title: "Task Created",
    category: "project_data",
    emittedBy: api,
  },
  task_assigned: {
    title: "Task Assigned",
    category: "project_data",
    emittedBy: api,
  },
  task_completed: {
    title: "Task Completed",
    category: "project_data",
    emittedBy: api,
  },
  task_moved: { title: "Task Moved", category: "project_data", emittedBy: api },
  task_deleted: {
    title: "Task Deleted",
    category: "project_data",
    emittedBy: api,
  },
  milestone_created: {
    title: "Milestone Created",
    category: "project_data",
    emittedBy: api,
  },
  milestone_completed: {
    title: "Milestone Completed",
    category: "project_data",
    emittedBy: api,
  },
  milestone_deleted: {
    title: "Milestone Deleted",
    category: "project_data",
    emittedBy: api,
  },
  comment_created: {
    title: "Comment Created",
    category: "project_data",
    emittedBy: api,
  },
  field_created: {
    title: "Field Created",
    category: "project_data",
    emittedBy: api,
  },
  map_layer_added: {
    title: "Map Layer Added",
    category: "project_data",
    emittedBy: api,
  },
  project_context_added: {
    title: "Project Context Added",
    category: "project_data",
    emittedBy: ["api"],
  },
  plan_limit_reached: {
    title: "Plan Limit Reached",
    category: "billing",
    emittedBy: ["api", "web-server"],
  },
  plan_selected: {
    title: "Plan Selected",
    category: "billing",
    emittedBy: ["api"],
  },
  checkout_started: {
    title: "Checkout Started",
    category: "billing",
    emittedBy: ["api"],
  },
  checkout_completed: {
    title: "Checkout Completed",
    category: "billing",
    emittedBy: ["api"],
  },
  subscription_activated: {
    title: "Subscription Activated",
    category: "billing",
    emittedBy: ["api"],
  },
  plan_changed: {
    title: "Plan Changed",
    category: "billing",
    emittedBy: ["api"],
  },
  subscription_cancel_requested: {
    title: "Subscription Cancel Requested",
    category: "billing",
    emittedBy: ["api"],
  },
  subscription_resumed: {
    title: "Subscription Resumed",
    category: "billing",
    emittedBy: ["api"],
  },
  subscription_canceled: {
    title: "Subscription Canceled",
    category: "billing",
    emittedBy: ["api"],
  },
  payment_failed: {
    title: "Payment Failed",
    category: "billing",
    emittedBy: ["api"],
  },
  access_token_created: {
    title: "Access Token Created",
    category: "platform",
    emittedBy: ["api"],
  },
  mcp_tool_called: {
    title: "MCP Tool Called",
    category: "platform",
    emittedBy: ["mcp"],
  },
  research_run_started: {
    title: "Research Run Started",
    category: "ai",
    emittedBy: ["research-agent"],
  },
  research_run_completed: {
    title: "Research Run Completed",
    category: "ai",
    emittedBy: ["research-agent"],
  },
};

/**
 * Canonical name → GA4 recommended-event name. Only events with a GA4
 * recommended equivalent are renamed; everything else passes through (it is
 * already snake_case). Applied on BOTH transports so one event can never
 * arrive in GA4 under two names.
 */
export const GA4_EVENT_NAME_MAP: Partial<Record<AnalyticsEvent, string>> = {
  [ANALYTICS_EVENTS.USER_SIGNED_UP]: "sign_up",
  [ANALYTICS_EVENTS.USER_LOGGED_IN]: "login",
  [ANALYTICS_EVENTS.MEMBER_INVITED]: "share",
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
  ANALYTICS_EVENTS.PROJECT_CREATED,
  ANALYTICS_EVENTS.CHAT_STARTED,
  ANALYTICS_EVENTS.MEMBER_INVITED,
  ANALYTICS_EVENTS.CHECKOUT_STARTED,
  ANALYTICS_EVENTS.CHECKOUT_COMPLETED,
].map(toGa4EventName);
