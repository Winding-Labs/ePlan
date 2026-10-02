import { Suspense } from "react";

import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Columns3,
  Library,
  ListChecks,
  MonitorPlay,
  Scale,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CtaBottom } from "@/components/home-v2/cta-bottom";
import { Faq } from "@/components/home-v2/faq";
import { FeatureShowcase } from "@/components/home-v2/feature-showcase";
import { Pricing } from "@/components/home-v2/pricing";
import {
  PAGE_CONTAINER,
  PAGE_GUTTER,
  SECTION_Y,
} from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  HEADER_STACK_CLASS,
  SECTION_LEAD_CLASS,
  SectionHeader,
} from "@/components/home-v2/ui/section-header";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import type { NepaGuidePath } from "@/consts/nepa-guide-links";
import {
  getNepaPage,
  NEPA_PAGES,
  NEPA_SOURCES_READ_ON,
  type NepaPageEntry,
  SOURCES,
  type Source,
  type SourceKey,
} from "@/consts/nepa-pages";
import { brand } from "@/lib/brand";
import { orderCitations, stripCitations } from "@/lib/nepa-citations";
import { absoluteUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import { CitedText } from "./cited-text";
import { DraftYoursPrompt } from "./draft-yours-prompt";
import { JsonLd } from "./json-ld";

type Crumb = { name: string; href: string };

const H1_CLASS =
  "font-heading text-[34px] font-normal leading-[1.15] tracking-[-0.04em] text-balance text-egray-900 md:text-[44px] lg:text-[52px]";

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

const pageCrumbs = (page: NepaPageEntry): Crumb[] => {
  const parent = page.parent ? getNepaPage(page.parent) : null;
  return [
    { name: "Home", href: "/" },
    ...(parent ? [{ name: parent.name, href: parent.path }] : []),
    { name: page.name, href: page.path },
  ];
};

// Every text that may carry citations, in render order, so sources are
// numbered by first appearance on the page.
const citedTexts = (page: NepaPageEntry): string[] => [
  page.answer,
  ...(page.comparison ?? []).flatMap((row) => [
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

export const nepaPageMetadata = (path: NepaGuidePath): Metadata => {
  const page = getNepaPage(path);
  const title = `${page.title} | ${brand.name}`;

  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title,
      description: page.description,
      url: page.path,
      siteName: brand.name,
      type: "article",
      images: [{ url: brand.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [brand.ogImage],
    },
  };
};

interface NepaPageProps {
  path: NepaGuidePath;
}

/**
 * One template for every NEPA guide page: keyword H1 and short answer, a
 * sourced explainer, a document outline, the "Draft yours" prompt, the
 * product showcase, pricing, FAQ and related guides. Content lives in
 * `consts/nepa-pages.ts`.
 */
export function NepaPage({ path }: NepaPageProps) {
  const page = getNepaPage(path);
  const crumbs = pageCrumbs(page);
  const sourceKeys = orderCitations(citedTexts(page)) as SourceKey[];
  const numberOf = (key: string) => sourceKeys.indexOf(key as SourceKey) + 1;

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
            item: absoluteUrl(crumb.href),
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

      <NepaHero
        page={page}
        crumbs={crumbs}
        sourceCount={sourceKeys.length}
        numberOf={numberOf}
      />

      {page.comparison && (
        <ComparisonSection rows={page.comparison} numberOf={numberOf} />
      )}

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

      <section
        id="draft"
        className={cn(PAGE_GUTTER, SECTION_Y, "scroll-mt-24 font-inter")}
      >
        <div
          className={cn(
            PAGE_CONTAINER,
            "glass-card flex flex-col items-center gap-8 rounded-[28px] p-6 sm:p-10 lg:p-12",
          )}
        >
          <SectionHeader
            icon={Sparkles}
            eyebrow="Draft yours with ePlan"
            title={page.draft.heading}
            lead={page.draft.lead}
          />
          <div className="w-full max-w-[686px] text-left">
            <Suspense fallback={null}>
              <DraftYoursPrompt
                defaultPrompt={page.draft.defaultPrompt}
                quickStart={page.draft.quickStart}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section
        className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-10 sm:gap-12")}
      >
        <SectionHeader
          icon={MonitorPlay}
          eyebrow="See it work"
          title="One workspace from research to signature"
        />
        <FeatureShowcase slides={page.showcase} />
      </section>

      <Pricing />

      <Faq items={page.faq} />

      <RelatedGuides current={page.path} />

      <CtaBottom showFooter={false} />
    </div>
  );
}

interface NepaHeroProps {
  page: NepaPageEntry;
  crumbs: Crumb[];
  sourceCount: number;
  numberOf: (key: string) => number;
}

function NepaHero({ page, crumbs, sourceCount, numberOf }: NepaHeroProps) {
  return (
    <section className={cn(PAGE_GUTTER, "pt-6 sm:pt-8 lg:pt-10")}>
      <div className={cn(PAGE_CONTAINER, "flex flex-col items-center")}>
        <div className="glass max-w-full rounded-full px-4 py-2">
          <Breadcrumbs
            breadcrumbs={crumbs.map((crumb, index) =>
              index === crumbs.length - 1
                ? { name: crumb.name }
                : { name: crumb.name, href: crumb.href },
            )}
            className="font-inter text-[13px] leading-[18px] text-egray-700 hover:text-egray-900 aria-[current=page]:font-medium aria-[current=page]:text-egray-900 sm:text-[14px]"
          />
        </div>

        <div
          className={cn(
            HEADER_STACK_CLASS,
            "mt-10 max-w-[860px] items-center text-center sm:mt-14",
          )}
        >
          <Eyebrow icon={Scale} label={page.eyebrow} />
          <h1 className={H1_CLASS}>{page.h1}</h1>
        </div>

        <div className="glass-card mt-10 w-full max-w-[860px] rounded-[28px] p-6 text-left sm:p-8">
          <p className="mb-3 flex items-center gap-2 font-heading text-[12px] font-medium uppercase tracking-[0.08em] text-brand-800">
            <BookOpen className="size-3.5" aria-hidden="true" />
            Short answer
          </p>
          <p className={cn(BODY_CLASS, "text-egray-900")}>
            <CitedText text={page.answer} numberOf={numberOf} />
          </p>
          <p className="mt-4 font-inter text-[13px] leading-[20px] text-egray-600">
            {sourceCount} sources, each read on{" "}
            {formatDate(NEPA_SOURCES_READ_ON)}. This page explains the law; it
            is not legal advice.
          </p>
        </div>

        <div className="mt-8 flex w-full max-w-[420px] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#draft"
            className="btn-primary press inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-inter text-body-md font-medium"
          >
            Draft yours with ePlan
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#sources"
            className="glass press inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-inter text-body-md font-medium text-brand-800 hover:bg-white/80"
          >
            See the sources
          </a>
        </div>
      </div>
    </section>
  );
}

interface ComparisonSectionProps {
  rows: NonNullable<NepaPageEntry["comparison"]>;
  numberOf: (key: string) => number;
}

const COMPARISON_FIELDS = [
  { key: "audience", label: "Who it's for" },
  { key: "does", label: "What it does" },
  { key: "nepaDocuments", label: "NEPA documents" },
  { key: "availability", label: "Availability and price" },
] as const;

function ComparisonSection({ rows, numberOf }: ComparisonSectionProps) {
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
              {COMPARISON_FIELDS.map((field) => (
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

interface OutlineSectionProps {
  page: NepaPageEntry;
  numberOf: (key: string) => number;
}

function OutlineSection({ page, numberOf }: OutlineSectionProps) {
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
            <div className="flex flex-col gap-1">
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

function SourcesSection({ sourceKeys }: { sourceKeys: SourceKey[] }) {
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
            procedures or court opinions; product statements cite the maker’s
            own pages. Each source was read on{" "}
            {formatDate(NEPA_SOURCES_READ_ON)}.
          </p>
        </div>
        <ol className="flex flex-col gap-3">
          {sourceKeys.map((key, index) => {
            const source: Source = SOURCES[key];
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

function RelatedGuides({ current }: { current: NepaGuidePath }) {
  const related = NEPA_PAGES.filter((page) => page.path !== current);

  return (
    <section
      className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-10 sm:gap-12")}
    >
      <SectionHeader
        icon={BookOpen}
        eyebrow="NEPA guides"
        title="Keep reading"
      />
      <ul
        className={cn(
          PAGE_CONTAINER,
          "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
        )}
      >
        {related.map((page) => (
          <li key={page.path} className="flex">
            <Link
              href={page.path}
              className="glass-card press group flex w-full flex-col gap-2 rounded-[24px] p-6 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            >
              <span className="flex items-center justify-between gap-3 font-heading text-[20px] font-normal tracking-[-0.02em] text-egray-900">
                {page.name}
                <ArrowRight
                  className="size-4 shrink-0 text-brand-800 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </span>
              <span className="font-inter text-[14px] leading-[22px] text-egray-700">
                {page.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
