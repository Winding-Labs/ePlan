import type { DraftMock } from "@/consts/guides/types";

/** The home page's draft: a USFS scoping letter. Guide pages pass their own. */
export const HOME_DRAFT_MOCK: DraftMock = {
  project: "Canyon Three Fuels Reduction",
  documentTitle: "Canyon Three — Scoping Letter",
  summary:
    "The Canyon Three — Scoping Letter is ready. It follows the same structure and formal USFS tone as the reference letter. A few details still need your input:",
  missing: [
    "District Ranger name",
    "Project location description",
    "Exact treatment acreage",
    "Comment deadline",
    "Project contact",
  ],
  actions: [
    "📍 Add location details",
    "👤 Add District Ranger name",
    "✏️ Make other edits first",
  ],
  letterhead: {
    left: [
      "United States Department of Agriculture",
      "Forest Service",
      "Tahoe National Forest — Nevada City Ranger District",
    ],
    right: [
      "[INSERT: office street address — 631 Coyote St.]",
      "Nevada City, CA 95959",
      "530-265-4531",
      "Fax: [INSERT: office fax number]",
    ],
  },
  meta: ["File Code: [INSERT: file code]", "Date: August 12, 2026"],
  salutation: "Dear Interested Party:",
  paragraphs: [
    "The Tahoe National Forest, [INSERT: Nevada City Ranger District — suggested: Yuba River Ranger District], is proposing the Canyon Three Fuels Reduction project to reduce hazardous fuels across [INSERT: treatment acreage — within the 50–100 acre range] near [INSERT: project location description — e.g., watershed or road corridor].",
    "We invite your comments during the scoping period. Please submit written comments by [INSERT: comment deadline] to the address above or through the project web page at [INSERT: project web page URL].",
  ],
};
