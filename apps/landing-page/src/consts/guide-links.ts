// Footer links, kept apart from the guide content (`consts/guides`) because
// the footer renders inside client components and must not pull the page
// bodies into the client bundle. `guides.test.ts` checks these against the
// registry.
export const GUIDE_LINKS = [
  { href: "/for", label: "All guides" },
  { href: "/for/nepa", label: "NEPA guide" },
  { href: "/for/nepa-categorical-exclusion", label: "Categorical exclusions" },
  {
    href: "/for/nepa-environmental-assessment",
    label: "Environmental assessments",
  },
  { href: "/for/nepa-scoping-letter", label: "Scoping letters" },
  { href: "/for/ceqa", label: "CEQA guide" },
  { href: "/for/nepa-software", label: "NEPA software" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
