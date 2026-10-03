// The NEPA guide pages, in footer order. Kept apart from the page content
// (`nepa-pages.ts`) because the footer renders inside client components and
// must not pull the full page bodies into the client bundle.
export const NEPA_GUIDE_LINKS = [
  { path: "/nepa", label: "NEPA process" },
  { path: "/categorical-exclusions", label: "Categorical exclusions" },
  {
    path: "/nepa/environmental-assessment",
    label: "Environmental assessments",
  },
  { path: "/nepa/scoping-letter", label: "Scoping letters" },
  { path: "/nepa-software", label: "NEPA software" },
  { path: "/compare/nepa-ai-tools", label: "AI tools compared" },
] as const;

export type NepaGuidePath = (typeof NEPA_GUIDE_LINKS)[number]["path"];
