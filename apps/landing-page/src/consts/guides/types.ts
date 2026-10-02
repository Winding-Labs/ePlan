import type { FaqItem } from "@/components/home-v2/faq";

/**
 * Types for the guide pages (/nepa/*, /ceqa/*, /nepa-software, /compare/*).
 * One entry per page, rendered by `components/guide-page/guide-page.tsx` from
 * the same shared components as the home page: the text header, the hero
 * prompt with its feature showcase, the ePlan-vs-manual comparison and the
 * home feature sections.
 *
 * Accuracy rules (enforced in part by `guides.test.ts`):
 * - Every legal or factual claim cites a source with `[[sourceKey]]`, and every
 *   source is a page someone actually read, with the date read.
 * - CEQ's NEPA regulations (40 CFR parts 1500-1508) were removed effective
 *   April 11, 2025. Never cite them as current law.
 * - Never say ePlan output is approved, accepted, legally sufficient or
 *   compliant. ePlan drafts; agency officials decide.
 * - Prices come from the billing catalog, never typed by hand.
 */

export type Source = {
  title: string;
  publisher: string;
  url: string;
  /** Publication or effective date: YYYY-MM-DD or YYYY-MM. */
  published?: string;
  /** When the page was read for this content: YYYY-MM-DD. */
  read: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideOutlineItem = {
  title: string;
  detail: string;
};

/**
 * One example project. The hero types out `heading` after the page's prefix
 * ("Draft a" + "Scoping Letter for Guardrail Repair"), shows `eyebrow` above
 * it, and renders a quick-start pill (`emoji` + `label`) that puts `prompt`
 * in the prompt box, where submitting it starts the project in ePlan.
 */
export type GuideExample = {
  emoji: string;
  label: string;
  heading: string;
  eyebrow: string;
  /** First-person project description. Representative, not a real project. */
  prompt: string;
};

/**
 * The document in the showcase's first tab ("Create AI draft of …"). Text may
 * carry `[INSERT: …]` spans, rendered as highlighted placeholders: ePlan marks
 * every fact it could not confirm that way.
 */
export type DraftMock = {
  project: string;
  documentTitle: string;
  /** The agent's chat message above the list of missing details. Where it
   * names `documentTitle`, the title renders bold. */
  summary: string;
  /** Details the draft still needs from the planner. */
  missing: string[];
  /** Reply chips under the message; defaults to generic edits. */
  actions?: string[];
  letterhead: { left: string[]; right: string[] };
  /** Right-aligned lines under the letterhead (file code, date). */
  meta: string[];
  salutation?: string;
  paragraphs: string[];
};

/** One row of "How ePlan compares to drafting by hand". */
export type ManualComparisonRow = {
  label: string;
  eplan: string;
  manual: string;
};

/** One tool card on /compare/nepa-ai-tools. */
export type ToolComparisonRow = {
  name: string;
  maker: string;
  audience: string;
  does: string;
  nepaDocuments: string;
  availability: string;
};

export type GuideFamily = "nepa" | "ceqa" | "product";

export type GuideEntry<Path extends string = string> = {
  path: Path;
  /** Hub page this page sits under, for breadcrumbs. */
  parent?: Path;
  family: GuideFamily;
  /** Short name for breadcrumbs, related cards and the footer. */
  name: string;
  /** <title>, before the " | ePlan.ai" suffix. */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  /** The one search term this page owns; no two pages share it. */
  primaryKeyword: string;
  /** Terms the page must also answer (in an H2, FAQ question or the answer). */
  secondaryKeywords: string[];
  /** The document the page is about, e.g. "Scoping Letter". */
  document: string;
  /** The short answer under the H1, with citations. */
  answer: string;
  /** "At a glance" facts beside the header; values may cite. */
  glance: { label: string; value: string }[];
  hero: {
    /** Words before the typed example, e.g. "Draft a". */
    prefix: string;
    placeholder: string;
    examples: GuideExample[];
  };
  /** The showcase's first tab: "Create AI draft of <document>". */
  draft: { description: string; mock: DraftMock };
  /** Page-specific comparison rows, shown before the shared ones. */
  comparison?: ManualComparisonRow[];
  /** Tool cards (the AI-tools comparison page only). */
  tools?: ToolComparisonRow[];
  sections: GuideSection[];
  outline: { heading: string; intro: string; items: GuideOutlineItem[] };
  faq: FaqItem[];
};
