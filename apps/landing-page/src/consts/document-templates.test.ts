import { DOCUMENT_TEMPLATES, getDocumentTemplate } from "./document-templates";

// The ads plan and launch spec link to these exact slugs.
const EXPECTED_SLUGS = [
  "categorical-exclusion-decision-memo",
  "nepa-scoping-letter",
  "nepa-environmental-assessment",
  "ceqa-initial-study",
  "environmental-impact-statement",
];

// Search engines cut descriptions off around this length.
const MAX_META_DESCRIPTION_LENGTH = 170;

describe("DOCUMENT_TEMPLATES", () => {
  it("keeps the slugs the ads plan links to", () => {
    expect(DOCUMENT_TEMPLATES.map((template) => template.slug)).toEqual(
      EXPECTED_SLUGS,
    );
  });

  it("gives every page a unique title, heading and description", () => {
    for (const key of ["metaTitle", "heading", "metaDescription"] as const) {
      const values = DOCUMENT_TEMPLATES.map((template) => template[key]);
      expect(new Set(values).size).toBe(values.length);
    }
  });

  it.each(DOCUMENT_TEMPLATES)(
    "$slug has a search-length description and complete content",
    (template) => {
      expect(template.metaDescription.length).toBeLessThanOrEqual(
        MAX_META_DESCRIPTION_LENGTH,
      );
      expect(template.overview.length).toBeGreaterThan(0);
      expect(template.sections.length).toBeGreaterThan(0);
      expect(template.faqs.length).toBeGreaterThanOrEqual(4);
      for (const faq of template.faqs) {
        expect(faq.answer.trim()).not.toBe("");
      }
    },
  );

  it("links topics only to template pages and anchors that exist", () => {
    const topicLinks = DOCUMENT_TEMPLATES.flatMap((template) =>
      template.topics.flatMap((topic) => (topic.link ? [topic.link.href] : [])),
    ).filter((href) => href.startsWith("/templates/"));

    expect(topicLinks.length).toBeGreaterThan(0);

    for (const href of topicLinks) {
      const [path, anchor] = href.split("#");
      const target = getDocumentTemplate(path.replace("/templates/", ""));

      expect(target).toBeDefined();
      if (anchor) {
        expect(target?.topics.map((topic) => topic.id)).toContain(anchor);
      }
    }
  });
});
