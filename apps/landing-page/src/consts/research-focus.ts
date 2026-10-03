import type { GuideFamily } from "@/consts/guides/types";

/**
 * What the research feature promises to find. "Categorical exclusion" is
 * NEPA's word, so NEPA pages keep it; the home page and every other review
 * (CEQA, state acts, Section 106, tools) say "legal pathway" (owner,
 * 2026-10-02).
 */
export type ResearchFocus = "categorical-exclusion" | "legal-pathway";

export const RESEARCH_COPY: Record<
  ResearchFocus,
  { heading: string; feature: string; tab: string }
> = {
  "categorical-exclusion": {
    heading: "Find the right Categorical Exclusion",
    feature:
      "Automatically surface relevant project context. Our AI instantly finds the right Categorical Exclusions and references past online documents.",
    tab: "Automatically surface relevant project context. Our AI reads your uploads, finds the right Categorical Exclusions, and references past online documents.",
  },
  "legal-pathway": {
    heading: "Find the right legal pathway",
    feature:
      "Automatically surface relevant project context. Our AI instantly finds the right legal pathway and references past online documents.",
    tab: "Automatically surface relevant project context. Our AI reads your uploads, finds the right legal pathway, and references past online documents.",
  },
};

const NEPA_FAMILIES: GuideFamily[] = ["nepa", "agency", "product"];

/** The research wording for a guide page's family. */
export const researchFocus = (family: GuideFamily): ResearchFocus =>
  NEPA_FAMILIES.includes(family) ? "categorical-exclusion" : "legal-pathway";
