import { getLandingPageEnv } from "@wildfires-org/turboplan-env";

import { GUIDE_PATHS } from "@/consts/guides/paths";

/**
 * Get the current landing page URL for redirect callbacks.
 * In browser, uses window.location.origin. On server, returns empty string.
 */
const getLandingPageUrl = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
};

/** Home and every guide render the hero prompt and the pricing section. */
const hasPromptHero = (pathname: string) =>
  pathname === "/" || (GUIDE_PATHS as readonly string[]).includes(pathname);

export const routing = {
  home(params?: Record<string, string>) {
    return `/${params ? "?" + new URLSearchParams(params).toString() : ""}`;
  },
  /**
   * Every "Create Project" / "Start free" button: this page's own prompt when
   * it has one, else home's. A visitor who landed on a guide (most ad clicks)
   * stays on that guide's document-specific prompt instead of being sent home.
   */
  tryIt(pathname: string) {
    return `${hasPromptHero(pathname) ? pathname : "/"}?tryIt=true`;
  },
  /** This page's pricing section when it has one, else home's. */
  pricingOn(pathname: string) {
    return `${hasPromptHero(pathname) ? pathname : "/"}#pricing`;
  },
  contact() {
    return "/#contact";
  },
  checkout(params?: { plan?: string }) {
    return `/checkout${params?.plan ? `?plan=${encodeURIComponent(params.plan)}` : ""}`;
  },
  pricing() {
    return "/#pricing";
  },
  docs() {
    return "/docs";
  },
  privacy() {
    return "/privacy";
  },
  terms() {
    return "/terms";
  },
  catalog() {
    return "/projects";
  },
  catalogOrganization({ organizationSlug }: { organizationSlug: string }) {
    return `/projects/${organizationSlug}`;
  },
  catalogOffice({
    organizationSlug,
    officeSlug,
  }: {
    organizationSlug: string;
    officeSlug: string;
  }) {
    return `/projects/${organizationSlug}/${officeSlug}`;
  },
  catalogOffices({ organizationSlug }: { organizationSlug: string }) {
    return `/projects/${organizationSlug}/offices`;
  },
  catalogProjects() {
    return "/projects/projects";
  },
  catalogOrganizationProjects({
    organizationSlug,
  }: {
    organizationSlug: string;
  }) {
    return `/projects/${organizationSlug}/projects`;
  },
  catalogOfficeProjects({
    organizationSlug,
    officeSlug,
  }: {
    organizationSlug: string;
    officeSlug: string;
  }) {
    return `/projects/${organizationSlug}/${officeSlug}/projects`;
  },
  catalogProject({
    organizationSlug,
    officeSlug,
    projectSlug,
  }: {
    organizationSlug: string;
    officeSlug: string;
    projectSlug: string;
  }) {
    return `/projects/${organizationSlug}/${officeSlug}/${projectSlug}`;
  },
  catalogTemplate({
    organizationSlug,
    officeSlug,
    templateSlug,
  }: {
    organizationSlug: string;
    officeSlug: string;
    templateSlug: string;
  }) {
    return `/projects/${organizationSlug}/${officeSlug}/templates/${templateSlug}`;
  },
  catalogTemplates() {
    return "/projects/templates";
  },
  catalogOrganizationTemplates({
    organizationSlug,
  }: {
    organizationSlug: string;
  }) {
    return `/projects/${organizationSlug}/templates`;
  },
  catalogOfficeTemplates({
    organizationSlug,
    officeSlug,
  }: {
    organizationSlug: string;
    officeSlug: string;
  }) {
    return `/projects/${organizationSlug}/${officeSlug}/templates`;
  },
  signIn() {
    return `${getLandingPageEnv().TURBOPLAN_URL}/login`;
  },
  /**
   * Dashboard URL - redirects to turboplan app
   */
  dashboard() {
    return getLandingPageEnv().TURBOPLAN_URL;
  },
  /**
   * Profile URL - redirects to turboplan app profile page
   */
  profile() {
    return `${getLandingPageEnv().TURBOPLAN_URL}/profile`;
  },
  /**
   * Settings URL - redirects to turboplan app settings page
   */
  settings() {
    return `${getLandingPageEnv().TURBOPLAN_URL}/settings`;
  },
  /**
   * Sign out URL - turboplan's /logout page clears the session (no confirmation
   * screen) and redirects back to the landing page.
   */
  signOut() {
    const callbackUrl = encodeURIComponent(getLandingPageUrl());
    return `${getLandingPageEnv().TURBOPLAN_URL}/logout?callbackUrl=${callbackUrl}`;
  },
};
