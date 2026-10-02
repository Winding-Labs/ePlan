export type DocumentTemplateFramework = "NEPA" | "CEQA";

export type DocumentTemplateSection = {
  title: string;
  description: string;
};

export type DocumentTemplateFaq = {
  question: string;
  answer: string;
};

export type DocumentTemplateLink = {
  label: string;
  href: string;
};

/** An in-depth block with its own anchor, e.g. "#purpose-and-need". */
export type DocumentTemplateTopic = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  link?: DocumentTemplateLink;
};

/**
 * One document-intent landing page under /templates/<slug>. Copy is plain
 * strings so the page, its metadata and its FAQPage JSON-LD all read the same
 * source.
 */
export type DocumentTemplate = {
  slug: string;
  /** Full document name: cards, breadcrumbs, CTA headline. */
  name: string;
  framework: DocumentTemplateFramework;
  /** The page's own <title> part; the layout template appends the brand. */
  metaTitle: string;
  metaDescription: string;
  /** H1. */
  heading: string;
  lead: string;
  /** Disambiguation shown under the hero, e.g. "not a Phase I ESA". */
  notice?: string;
  /** Placeholder for the on-page project prompt. */
  promptPlaceholder: string;
  /** "What it is" paragraphs. */
  overview: string[];
  /** "When it's used" bullets. */
  whenUsed: string[];
  /** Sections the document typically contains. */
  sections: DocumentTemplateSection[];
  /** In-depth blocks: related documents, agency lists, checklists. */
  topics: DocumentTemplateTopic[];
  /** Inputs that make the draft better, shown under "How it works". */
  helpfulInputs: string[];
  /** Illustrative project description the visitor can load into the prompt. */
  examplePrompt: string;
  faqs: DocumentTemplateFaq[];
  /** Product docs and catalog pages relevant to this document. */
  resources: DocumentTemplateLink[];
};
