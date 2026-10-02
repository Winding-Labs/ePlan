// Footer links, kept apart from the guide content (`consts/guides`) because
// the footer renders inside client components and must not pull the page
// bodies into the client bundle. `guides.test.ts` checks these against the
// registry.
export const GUIDE_LINKS = [
  { href: "/nepa", label: "NEPA guide" },
  { href: "/nepa/categorical-exclusion", label: "Categorical exclusions" },
  { href: "/nepa/environmental-assessment", label: "Environmental assessments" },
  { href: "/nepa/scoping-letter", label: "Scoping letters" },
  { href: "/ceqa", label: "CEQA guide" },
  { href: "/nepa-software", label: "NEPA software" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
