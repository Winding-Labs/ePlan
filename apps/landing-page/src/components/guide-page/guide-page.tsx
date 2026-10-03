import { Suspense } from "react";

import { BookOpen, Columns3, Library, ListChecks } from "lucide-react";
import type { Metadata } from "next";

import { ContactSection } from "@/components/home-v2/contact-section";
import { CtaBottom } from "@/components/home-v2/cta-bottom";
import { Faq } from "@/components/home-v2/faq";
import { Features } from "@/components/home-v2/features";
import { Hero, type HeroContent } from "@/components/home-v2/hero";
import { Pricing } from "@/components/home-v2/pricing";
import {
  PAGE_CONTAINER,
  PAGE_GUTTER,
  SECTION_Y,
} from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  SECTION_LEAD_CLASS,
  SectionHeader,
} from "@/components/home-v2/ui/section-header";
import { JsonLd } from "@/components/shared/json-ld";
import {
  GUIDE_SOURCES_READ_ON,
  GUIDES,
  type GuidePath,
  getGuide,
  SOURCES,
} from "@/consts/guides";
import { guideBenefits, MANUAL_COMPARISON_BASE } from "@/consts/guides/shared";
import type { GuideEntry, ToolComparisonRow } from "@/consts/guides/types";
import { HOME_TABS } from "@/consts/showcase-tabs";
import { orderCitations, stripCitations } from "@/lib/citations";
import { buildPageMetadata, toAbsoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { CitedText } from "./cited-text";
import { ComparisonTable } from "./comparison-table";
import { GuideCards } from "./guide-cards";
import { type Crumb, GuideHeader } from "./guide-header";

const H2_CLASS =
  "font-heading text-[24px] font-normal leading-[1.25] tracking-[-0.03em] text-egray-900 md:text-[28px]";

const BODY_CLASS =
  "font-inter text-body-md text-egray-800 md:text-[17px] md:leading-[28px]";

// Reading column for the article parts of the page.
const READING_CLASS = "mx-auto w-full max-w-[760px]";

const formatDate = (value: string): string => {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day ?? 1));
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    ...(day ? { day: "numeric" } : {}),
  });
};

const pageCrumbs = (page: GuideEntry<GuidePath>): Crumb[] => {
  const parent = page.parent ? getGuide(page.parent) : null;
  return [
    { name: "Home", href: "/" },
    ...(parent ? [{ name: parent.name, href: parent.path }] : []),
    { name: page.name, href: page.path },
  ];
};

// Every text that may carry citations, in render order, so sources are
// numbered by first appearance on the page.
const citedTexts = (page: GuideEntry): string[] => [
  page.answer,
  ...page.glance.map((row) => row.value),
  ...(page.tools ?? []).flatMap((row) => [
    row.audience,
    row.does,
    row.nepaDocuments,
    row.availability,
  ]),
  ...page.sections.flatMap((section) => [
    ...section.paragraphs,
    ...(section.bullets ?? []),
  ]),
  page.outline.intro,
  ...page.outline.items.map((item) => item.detail),
];

/**
 * The shared home hero, filled with this page's examples: the typed heading
 * and the pills come from the same list, and the showcase opens on a draft
 * of the page's own document.
 */
export const guideHeroContent = (page: GuideEntry): HeroContent => ({
  prefix: page.hero.prefix,
  label: `${page.hero.prefix} ${page.hero.examples[0]?.heading ?? page.document}`,
  headingLevel: "h2",
  slides: page.hero.examples.map((example) => ({
    eyebrow: example.eyebrow,
    heading: example.heading,
    icon: "file",
  })),
  placeholder: page.hero.placeholder,
  examples: page.hero.examples.map(({ emoji, label, prompt }) => ({
    emoji,
    label,
    prompt,
  })),
  tabs: [
    {
      type: "draft",
      label: `Create AI draft of ${page.document}`,
      description: page.draft.description,
      mock: page.draft.mock,
    },
    ...HOME_TABS.filter((tab) => tab.type !== "draft"),
  ],
  analytics: { surface: "guide_page", guide: page.path },
});

export const guideMetadata = (path: GuidePath): Metadata => {
  const page = getGuide(path);
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    type: "article",
  });
};

interface GuidePageProps {
  path: GuidePath;
}

/**
 * One template for every guide page, built from the home page's own
 * components: a text header, the hero prompt with its feature showcase, the
 * ePlan-vs-manual comparison and the home feature sections, then the sourced
 * explainer, the document outline, pricing and FAQ. Content lives in
 * `consts/guides`.
 */
export function GuidePage({ path }: GuidePageProps) {
  const page = getGuide(path);
  const crumbs = pageCrumbs(page);
  const sourceKeys = orderCitations(citedTexts(page));
  const numberOf = (key: string) => sourceKeys.indexOf(key) + 1;

  return (
    <div className="w-full overflow-x-clip bg-brandAlt-100">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: toAbsoluteUrl(crumb.href),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: stripCitations(item.answer),
            },
          })),
        }}
      />

      <GuideHeader
        page={page}
        crumbs={crumbs}
        benefits={guideBenefits(page.document)}
        sourceCount={sourceKeys.length}
        sourcesReadOn={formatDate(GUIDE_SOURCES_READ_ON)}
        numberOf={numberOf}
      />

      <div id="draft" className="scroll-mt-24">
        <Suspense fallback={null}>
          <Hero content={guideHeroContent(page)} />
        </Suspense>
      </div>

      <ComparisonTable
        document={page.document}
        rows={[...(page.comparison ?? []), ...MANUAL_COMPARISON_BASE]}
      />

      {page.tools && <ToolCards rows={page.tools} numberOf={numberOf} />}

      <Features />

      <article className={cn(PAGE_GUTTER, SECTION_Y)}>
        <div className={cn(READING_CLASS, "flex flex-col gap-12")}>
          {page.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-4">
              <h2 className={H2_CLASS}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className={BODY_CLASS}>
                  <CitedText text={paragraph} numberOf={numberOf} />
                </p>
              ))}
              {section.bullets && (
                <ul className="flex flex-col gap-2.5 pl-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className={cn(BODY_CLASS, "flex gap-3")}>
                      <span
                        aria-hidden="true"
                        className="mt-[11px] size-1.5 shrink-0 rounded-full bg-brand-700"
                      />
                      <span>
                        <CitedText text={bullet} numberOf={numberOf} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <OutlineSection page={page} numberOf={numberOf} />

      <SourcesSection sourceKeys={sourceKeys} />

      <Pricing />

      <Faq items={page.faq} />

      <RelatedGuides current={page} />

      <ContactSection />

      <CtaBottom showFooter={false} />
    </div>
  );
}

const TOOL_FIELDS = [
  { key: "audience", label: "Who it's for" },
  { key: "does", label: "What it does" },
  { key: "nepaDocuments", label: "NEPA documents" },
  { key: "availability", label: "Availability and price" },
] as const;

function ToolCards({
  rows,
  numberOf,
}: {
  rows: ToolComparisonRow[];
  numberOf: (key: string) => number;
}) {
  return (
    <section
      className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-10 sm:gap-12")}
    >
      <SectionHeader
        icon={Columns3}
        eyebrow="At a glance"
        title="The tools side by side"
      />
      <ul
        className={cn(
          PAGE_CONTAINER,
          "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6",
        )}
      >
        {rows.map((row) => (
          <li
            key={row.name}
            className="glass-card flex flex-col gap-4 rounded-[24px] p-6"
          >
            <div>
              <h3 className="font-heading text-[22px] font-normal tracking-[-0.02em] text-egray-900">
                {row.name}
              </h3>
              <p className="font-inter text-[14px] text-egray-600">
                {row.maker}
              </p>
            </div>
            <dl className="flex flex-col gap-3">
              {TOOL_FIELDS.map((field) => (
                <div key={field.key}>
                  <dt className="font-heading text-[12px] font-medium uppercase tracking-[0.08em] text-brand-800">
                    {field.label}
                  </dt>
                  <dd className="font-inter text-[15px] leading-[23px] text-egray-800">
                    <CitedText text={row[field.key]} numberOf={numberOf} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}

function OutlineSection({
  page,
  numberOf,
}: {
  page: GuideEntry;
  numberOf: (key: string) => number;
}) {
  return (
    <section
      className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-10 sm:gap-12")}
    >
      <SectionHeader
        icon={ListChecks}
        eyebrow="Outline"
        title={page.outline.heading}
        lead={<CitedText text={page.outline.intro} numberOf={numberOf} />}
      />
      <ol
        className={cn(
          READING_CLASS,
          "glass-card flex flex-col divide-y divide-egray-200/60 rounded-[28px] px-6 sm:px-8",
        )}
      >
        {page.outline.items.map((item, index) => (
          <li key={item.title} className="flex gap-4 py-5">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 font-inter text-[14px] font-medium text-brand-800"
            >
              {index + 1}
            </span>
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="font-inter text-[16px] font-medium leading-[24px] text-egray-900">
                {item.title}
              </h3>
              <p className="font-inter text-[15px] leading-[24px] text-egray-700">
                <CitedText text={item.detail} numberOf={numberOf} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SourcesSection({ sourceKeys }: { sourceKeys: string[] }) {
  return (
    <section
      id="sources"
      className={cn(PAGE_GUTTER, SECTION_Y, "scroll-mt-24")}
    >
      <div className={cn(READING_CLASS, "flex flex-col gap-6")}>
        <div className="flex flex-col items-start gap-3">
          <Eyebrow icon={Library} label="Sources" />
          <h2 className={H2_CLASS}>Where each statement comes from</h2>
          <p className={cn(SECTION_LEAD_CLASS, "font-normal")}>
            Legal statements cite the statute, the Federal Register, agency
            procedures, state codes or court opinions; product statements cite
            the maker's own pages. Each source was read on{" "}
            {formatDate(GUIDE_SOURCES_READ_ON)}.
          </p>
        </div>
        <ol className="flex flex-col gap-3">
          {sourceKeys.map((key, index) => {
            const source = SOURCES[key];
            return (
              <li
                key={key}
                id={`source-${index + 1}`}
                className="flex scroll-mt-24 gap-3 font-inter text-[14px] leading-[22px] text-egray-700"
              >
                <span className="w-7 shrink-0 font-medium text-brand-800">
                  [{index + 1}]
                </span>
                <span className="min-w-0">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words font-medium text-egray-900 underline decoration-egray-300 underline-offset-2 hover:decoration-egray-900"
                  >
                    {source.title}
                  </a>
                  . {source.publisher}
                  {source.published ? `, ${formatDate(source.published)}` : ""}.
                  Read {formatDate(source.read)}.
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

// Same-family pages first, then the rest, so a CEQA reader sees CEQA guides.
function RelatedGuides({ current }: { current: GuideEntry<GuidePath> }) {
  const others = GUIDES.filter((page) => page.path !== current.path);
  const related = [
    ...others.filter((page) => page.family === current.family),
    ...others.filter((page) => page.family !== current.family),
  ].slice(0, 6);

  return (
    <section
      className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-10 sm:gap-12")}
    >
      <SectionHeader icon={BookOpen} eyebrow="Guides" title="Keep reading" />
      <GuideCards guides={related} />
    </section>
  );
}
