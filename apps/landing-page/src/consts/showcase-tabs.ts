import type { Tab } from "@/components/home-v2/feature-showcase/types";
import { RESEARCH_COPY } from "@/consts/research-focus";

/** The home page's showcase. Guide pages start from it (see `guideTabs`). */
export const HOME_TABS: Tab[] = [
  {
    label: "Research projects with AI",
    description: RESEARCH_COPY["legal-pathway"].tab,
    type: "research",
  },
  {
    label: "Draft NEPA documents",
    description:
      "Turn a blank page into a structured NEPA document in seconds. We draft scoping letters and decision memos that follow your reference document and mark every detail they can't confirm.",
    type: "draft",
  },
  {
    label: "Plan projects with AI",
    description:
      "Track every detail — from botany surveys to GIS boundaries — on an interactive Gantt of milestones and tasks.",
    type: "plan",
  },
  {
    label: "Collaborate with partners",
    description:
      "A secure workspace for members, comments, and a full activity timeline. External partners submit and review work directly with your agency.",
    type: "collab",
  },
];
