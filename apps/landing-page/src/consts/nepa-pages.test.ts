import { PLANS } from "@wildfires-org/turboplan-billing/types";

import { orderCitations } from "@/lib/nepa-citations";
import { DESCRIPTION_MAX_LENGTH, TITLE_MAX_LENGTH } from "@/lib/site-url";
import { NEPA_GUIDE_LINKS } from "./nepa-guide-links";
import {
  NEPA_PAGES,
  type NepaPageEntry,
  PRICING_SUMMARY,
  SOURCES,
} from "./nepa-pages";

// Every string a visitor can read on a NEPA guide page.
const pageCopy = (page: NepaPageEntry): string[] => [
  page.title,
  page.description,
  page.h1,
  page.answer,
  ...page.sections.flatMap((section) => [
    section.heading,
    ...section.paragraphs,
    ...(section.bullets ?? []),
  ]),
  ...(page.comparison ?? []).flatMap((row) => Object.values(row)),
  page.outline.heading,
  page.outline.intro,
  ...page.outline.items.flatMap((item) => [item.title, item.detail]),
  page.draft.heading,
  page.draft.lead,
  ...page.faq.flatMap((item) => [item.question, item.answer]),
];

const ALL_COPY = NEPA_PAGES.flatMap(pageCopy);
const MARKER = /\[\[([A-Za-z0-9]+)\]\]/g;

describe("NEPA guide pages", () => {
  it("has one page per footer link, and no others", () => {
    expect(NEPA_PAGES.map((page) => page.path).sort()).toEqual(
      NEPA_GUIDE_LINKS.map((link) => link.path).sort(),
    );
  });

  it("gives every page a unique title, description and H1 of search-friendly length", () => {
    for (const field of ["title", "description", "h1"] as const) {
      const values = NEPA_PAGES.map((page) => page[field]);
      expect(new Set(values).size).toBe(values.length);
    }
    NEPA_PAGES.forEach((page) => {
      // The rendered <title> carries the brand suffix.
      expect(`${page.title} | ePlan.ai`.length).toBeLessThanOrEqual(
        TITLE_MAX_LENGTH,
      );
      expect(page.description.length).toBeLessThanOrEqual(
        DESCRIPTION_MAX_LENGTH,
      );
    });
  });

  it("cites only sources that exist, and lists no source it never cites", () => {
    const cited = new Set(orderCitations(ALL_COPY));
    cited.forEach((key) => expect(Object.keys(SOURCES)).toContain(key));
    Object.keys(SOURCES).forEach((key) => expect(cited).toContain(key));
  });

  it("dates every source and links it over https", () => {
    Object.values(SOURCES).forEach((source) => {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.read).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if ("published" in source) {
        expect(source.published).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
      }
    });
  });

  it("keeps FAQ answers free of citation markers (they feed JSON-LD)", () => {
    NEPA_PAGES.flatMap((page) => page.faq).forEach((item) => {
      expect(item.answer).not.toMatch(MARKER);
    });
  });

  it("never claims agency approval, legal sufficiency or compliance for ePlan output", () => {
    ALL_COPY.forEach((text) => {
      expect(text).not.toMatch(/\bcompliant\b/i);
      expect(text).not.toMatch(/legally sufficient/i);
      expect(text).not.toMatch(/\b(approved|accepted|certified) by\b/i);
      expect(text).not.toMatch(/guarantee/i);
    });
  });

  it("only mentions CEQ's 40 CFR 1500-1508 rules as removed", () => {
    ALL_COPY.forEach((text) => {
      text
        .split(/(?<=\.)\s+/)
        .filter((sentence) => /40 CFR/.test(sentence))
        .forEach((sentence) => {
          expect(sentence).toMatch(/removed|rescinded/i);
        });
    });
  });

  it("quotes only prices from the billing catalog", () => {
    const catalogPrices = new Set(
      Object.values(PLANS).flatMap((plan) => [
        plan.price_usd,
        plan.additional_seat_price_usd,
      ]),
    );
    ALL_COPY.forEach((text) => {
      for (const match of text.matchAll(/\$(\d+)/g)) {
        expect(catalogPrices).toContain(Number(match[1]));
      }
    });
    expect(PRICING_SUMMARY).toContain(`$${PLANS.pro.price_usd} a month`);
    expect(PRICING_SUMMARY).toContain(`$${PLANS.max.price_usd} a month`);
  });

  it("gives every page a prompt, quick starts, showcase slides and FAQ", () => {
    NEPA_PAGES.forEach((page) => {
      expect(page.draft.defaultPrompt.length).toBeGreaterThan(40);
      expect(Object.keys(page.draft.quickStart).length).toBeGreaterThan(0);
      expect(page.showcase.length).toBeGreaterThan(0);
      expect(page.faq.length).toBeGreaterThanOrEqual(4);
    });
  });
});
