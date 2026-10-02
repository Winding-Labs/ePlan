import type { Tab } from "@/components/home-v2/feature-showcase/types";

/** The home page's showcase. Guide pages start from it (see `guideTabs`). */
export const HOME_TABS: Tab[] = [
  {
    label: "Research projects with AI",
    description:
      "Automatically surface relevant project context. Our AI reads your uploads, finds the right Categorical Exclusions, and references past online documents.",
    type: "research",
  },
  {
    label: "Draft NEPA documents",
    description:
      "Turn a blank page into a structured NEPA document in seconds. We draft scoping letters and decision memos that follow your reference document and mark every detail to confirm.",
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
