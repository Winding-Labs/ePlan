import { existsSync } from "node:fs";
import { join } from "node:path";

import { PLANS } from "@wildfires-org/turboplan-billing/types";

import { guideLinks, orderCitations, stripCitations } from "@/lib/citations";
import { DESCRIPTION_MAX_LENGTH, TITLE_MAX_LENGTH } from "@/lib/seo";
import { GUIDE_LINKS } from "../guide-links";
import { GUIDE_PATHS, GUIDES, guideSlug, SOURCES } from "./index";
import {
  comparisonRows,
  MANUAL_COMPARISON_BASE,
  PRICING_SUMMARY,
} from "./shared";
import type { GuideEntry } from "./types";

// Every string a visitor can read on a guide page.
const pageCopy = (page: GuideEntry): string[] => [
  page.title,
  page.description,
  page.h1,
  page.answer,
  ...page.glance.flatMap((row) => [row.label, row.value]),
  ...page.hero.examples.flatMap((example) => [
    example.label,
    example.heading,
    example.prompt,
  ]),
  page.draft.description,
  ...page.draft.mock.paragraphs,
  ...(page.comparison ?? []).flatMap((row) => Object.values(row)),
  ...(page.tools ?? []).flatMap((row) => Object.values(row)),
  ...page.sections.flatMap((section) => [
    section.heading,
    ...section.paragraphs,
    ...(section.bullets ?? []),
  ]),
  page.outline.heading,
  page.outline.intro,
  ...page.outline.items.flatMap((item) => [item.title, item.detail]),
  ...page.faq.flatMap((item) => [item.question, item.answer]),
];

const ALL_COPY = [
  ...GUIDES.flatMap(pageCopy),
  ...MANUAL_COMPARISON_BASE.flatMap((row) => Object.values(row)),
];
const MARKER = /\[\[([A-Za-z0-9]+)\]\]/g;
const lower = (text: string) => stripCitations(text).toLowerCase();

// Where a secondary keyword counts as answered: the short answer, an H2, the
// outline heading, an FAQ question, or the at-a-glance box.
const keywordHaystack = (page: GuideEntry): string =>
  [
    page.title,
    page.h1,
    page.answer,
    ...page.sections.map((section) => section.heading),
    page.outline.heading,
    ...page.faq.map((item) => item.question),
    ...page.glance.flatMap((row) => [row.label, row.value]),
  ]
    .map(lower)
    .join("\n");

const words = (text: string) =>
  stripCitations(text).split(/\s+/).filter(Boolean).length;

/**
 * An ad lands here, so a page reads in about three minutes: a two-sentence
 * answer, a glance box, a few short sections, the document's outline and a
 * short FAQ. In words, after citation markers are stripped. Before these
 * budgets (2026-10-02) the agent-written pages ran 1,500-2,000 words with
 * seven sections each, much of it rule history.
 */
export const PAGE_BUDGET = {
  answer: 60,
  glanceRows: 5,
  glanceValue: 16,
  sections: 4,
  paragraphsPerSection: 2,
  paragraph: 70,
  bullets: 6,
  bullet: 18,
  outlineItems: 9,
  outlineDetail: 25,
  faq: 4,
  faqAnswer: 50,
  total: 900,
} as const;

/** Every way a page breaks PAGE_BUDGET, as readable lines. */
export const budgetViolations = (page: GuideEntry): string[] => {
  const b = PAGE_BUDGET;
  const out: string[] = [];
  const over = (what: string, n: number, max: number) => {
    if (n > max) out.push(`${page.path} ${what}: ${n} > ${max}`);
  };
  over("answer words", words(page.answer), b.answer);
  over("glance rows", page.glance.length, b.glanceRows);
  page.glance.forEach((row) =>
    over(`glance "${row.label}" words`, words(row.value), b.glanceValue),
  );
  over("sections", page.sections.length, b.sections);
  page.sections.forEach((section) => {
    over(
      `"${section.heading}" paragraphs`,
      section.paragraphs.length,
      b.paragraphsPerSection,
    );
    section.paragraphs.forEach((text, i) =>
      over(
        `"${section.heading}" paragraph ${i + 1} words`,
        words(text),
        b.paragraph,
      ),
    );
    over(
      `"${section.heading}" bullets`,
      section.bullets?.length ?? 0,
      b.bullets,
    );
    (section.bullets ?? []).forEach((text, i) =>
      over(`"${section.heading}" bullet ${i + 1} words`, words(text), b.bullet),
    );
  });
  over("outline items", page.outline.items.length, b.outlineItems);
  page.outline.items.forEach((item) =>
    over(`outline "${item.title}" words`, words(item.detail), b.outlineDetail),
  );
  over("FAQ items", page.faq.length, b.faq);
  page.faq.forEach((item) =>
    over(`FAQ "${item.question}" words`, words(item.answer), b.faqAnswer),
  );
  const total =
    words(page.answer) +
    page.glance.reduce((n, row) => n + words(row.value), 0) +
    page.sections.reduce(
      (n, section) =>
        n +
        [...section.paragraphs, ...(section.bullets ?? [])].reduce(
          (m, text) => m + words(text),
          0,
        ),
      0,
    ) +
    words(page.outline.intro) +
    page.outline.items.reduce((n, item) => n + words(item.detail), 0) +
    page.faq.reduce((n, item) => n + words(item.answer), 0);
  over("total words", total, b.total);
  return out;
};

describe("guide pages", () => {
  it("has content for every registered path, each a /for/<slug> served by one route", () => {
    expect(GUIDES.map((page) => page.path)).toEqual([...GUIDE_PATHS]);
    GUIDE_PATHS.forEach((path) => {
      expect(path).toMatch(/^\/for\/[a-z0-9-]+$/);
    });
    expect(new Set(GUIDE_PATHS.map(guideSlug)).size).toBe(GUIDE_PATHS.length);
    expect(existsSync(join(__dirname, "../../app/for/[slug]/page.tsx"))).toBe(
      true,
    );
  });

  it("gives every page a parent that is a registered hub", () => {
    GUIDES.forEach((page) => {
      if (page.parent) {
        expect(GUIDE_PATHS as readonly string[]).toContain(page.parent);
      }
    });
  });

  it("links only real guide pages (or the /for index) from the footer", () => {
    GUIDE_LINKS.forEach((link) => {
      expect(["/for", ...GUIDE_PATHS]).toContain(link.href);
    });
  });

  it("gives every page a unique title, description and H1 of search-friendly length", () => {
    for (const field of ["title", "description", "h1"] as const) {
      const values = GUIDES.map((page) => page[field]);
      expect(new Set(values).size).toBe(values.length);
    }
    GUIDES.forEach((page) => {
      // The root layout's title template appends " | ePlan.ai" in production.
      expect(page.title.length).toBeLessThanOrEqual(
        TITLE_MAX_LENGTH - " | ePlan.ai".length,
      );
      expect(page.description.length).toBeLessThanOrEqual(
        DESCRIPTION_MAX_LENGTH,
      );
    });
  });

  it("gives each page its own primary keyword, in its title and H1", () => {
    const primaries = GUIDES.map((page) => page.primaryKeyword.toLowerCase());
    expect(new Set(primaries).size).toBe(primaries.length);
    GUIDES.forEach((page) => {
      expect(page.title.toLowerCase()).toContain(
        page.primaryKeyword.toLowerCase(),
      );
      expect(page.h1.toLowerCase()).toContain(
        page.primaryKeyword.toLowerCase(),
      );
    });
  });

  it("answers every secondary keyword in the answer, an H2, the outline, an FAQ question or the glance box", () => {
    GUIDES.forEach((page) => {
      const haystack = keywordHaystack(page);
      page.secondaryKeywords.forEach((keyword) => {
        expect({
          page: page.path,
          keyword,
          found: haystack.includes(keyword.toLowerCase()),
        }).toEqual({
          page: page.path,
          keyword,
          found: true,
        });
      });
    });
  });

  it("keeps every page within its reading budget", () => {
    expect(GUIDES.flatMap(budgetViolations)).toEqual([]);
  });

  it("gives every page five hero examples whose pills and headings are distinct", () => {
    GUIDES.forEach((page) => {
      const { examples } = page.hero;
      expect(examples.length).toBe(5);
      expect(new Set(examples.map((e) => e.label)).size).toBe(5);
      expect(new Set(examples.map((e) => e.heading)).size).toBe(5);
      examples.forEach((example) => {
        expect(example.prompt.length).toBeGreaterThan(40);
        expect(example.heading.length).toBeLessThanOrEqual(42);
      });
    });
  });

  it("cites only sources that exist, and lists no source it never cites", () => {
    const cited = new Set(orderCitations(ALL_COPY));
    cited.forEach((key) => expect(Object.keys(SOURCES)).toContain(key));
    Object.keys(SOURCES).forEach((key) => expect(cited).toContain(key));
  });

  it("links only to registered guide pages from its copy", () => {
    guideLinks(ALL_COPY).forEach((href) => {
      expect(["/for", ...GUIDE_PATHS]).toContain(href);
    });
  });

  it("lists each source URL once (pages share a source by its key)", () => {
    const keysByUrl = new Map<string, string[]>();
    for (const [key, source] of Object.entries(SOURCES)) {
      keysByUrl.set(source.url, [...(keysByUrl.get(source.url) ?? []), key]);
    }
    const repeated = [...keysByUrl.values()].filter((keys) => keys.length > 1);
    expect(repeated).toEqual([]);
  });

  it("dates every source and links it over https", () => {
    Object.values(SOURCES).forEach((source) => {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.read).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (source.published) {
        expect(source.published).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
      }
    });
  });

  it("keeps FAQ answers free of citation markers and links (they feed JSON-LD)", () => {
    GUIDES.flatMap((page) => page.faq).forEach((item) => {
      expect(item.answer).not.toMatch(MARKER);
      expect(guideLinks([item.answer])).toEqual([]);
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

  it("never says a draft cites its regulation and location (it marks what it can't confirm)", () => {
    ALL_COPY.forEach((text) => {
      expect(text).not.toMatch(/cit(es?|ing) the regulation/i);
      expect(text).not.toMatch(/correct locations/i);
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

  it("gives each comparison topic one row (a page row on a shared topic takes the shared label)", () => {
    const shared = new Set(MANUAL_COMPARISON_BASE.map((row) => row.label));
    GUIDES.forEach((page) => {
      const labels = comparisonRows(page.comparison).map((row) => row.label);
      expect(new Set(labels).size).toBe(labels.length);
      (page.comparison ?? [])
        .filter((row) => !shared.has(row.label))
        .forEach((row) => {
          expect(row.label).not.toMatch(
            /\b(start\w*|precedent|research|missing|unconfirmed|gaps?|tasks?|timeline|hand-?off|download|cost|price)\b/i,
          );
        });
    });
  });

  it("gives every page a draft mock with placeholders, comparison rows and an FAQ", () => {
    GUIDES.forEach((page) => {
      const mockText = [
        ...page.draft.mock.paragraphs,
        ...page.draft.mock.letterhead.right,
        ...page.draft.mock.meta,
      ].join(" ");
      expect(mockText).toMatch(/\[INSERT:/);
      expect(page.draft.mock.missing.length).toBeGreaterThan(0);
      expect(page.glance.length).toBeGreaterThanOrEqual(3);
      expect(page.faq.length).toBeGreaterThanOrEqual(4);
    });
  });
});
