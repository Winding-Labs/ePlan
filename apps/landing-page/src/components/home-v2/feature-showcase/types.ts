import type { DraftMock } from "@/consts/guides/types";

export type SlideType = "research" | "draft" | "plan" | "collab";

export type ModuleKey =
  | "overview"
  | "chat"
  | "map"
  | "tasks"
  | "timeline"
  | "comments"
  | "documents"
  | "members";

export type Tab = {
  label: string;
  description: string;
  type: SlideType;
  /** The document the draft slide shows; defaults to the home scoping letter. */
  mock?: DraftMock;
};
