import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleHelp,
  FileText,
  Info,
  ListChecks,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CARD_ACTION_CLASS,
  CARD_ACTION_ICON_CLASS,
  CARD_CHIP_CLASS,
  CATALOG_CARD_LINK_CLASS,
  CATALOG_GRID_CLASS,
  CATALOG_H1_CLASS,
  CATALOG_HEADER_GAP_CLASS,
  CATALOG_PAGE_CLASS,
  CATALOG_SECTION_CLASS,
  CATALOG_TOP_CLASS,
  GLASS_BUTTON_CLASS,
  PRIMARY_BUTTON_CLASS,
} from "@/components/catalog/catalog-layout";
import { TemplateFaq } from "@/components/document-templates/template-faq";
import {
  TemplateCtaButton,
  TemplateExampleButton,
  TemplatePrompt,
} from "@/components/document-templates/template-prompt";
import { PAGE_CONTAINER } from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  HEADER_STACK_CLASS,
  SECTION_LEAD_CLASS,
  SECTION_TITLE_CLASS,
  SectionHeader,
} from "@/components/home-v2/ui/section-header";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import {
  DOCUMENT_TEMPLATES,
  getDocumentTemplate,
} from "@/consts/document-templates";
import { brand } from "@/lib/brand";
import { buildPageMetadata, getSiteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { DocumentTemplate } from "@/types/document-templates";
import { routing } from "@/utils/routing";

interface TemplatePageProps {
  params: Promise<{ slug: string }>;
}

// Only the slugs in the data file exist; anything else is a real 404.
export const dynamicParams = false;

const CARD_CLASS = "glass-card rounded-[28px] p-6 sm:p-8";

const CARD_TITLE_CLASS =
  "font-heading text-[24px] font-normal leading-[1.2] tracking-[-0.03em] text-egray-900 md:text-[28px]";

const BODY_CLASS =
  "font-inter text-[15px] leading-[24px] text-egray-700 md:text-[16px] md:leading-[26px]";

const BREADCRUMB_CLASS =
  "font-inter text-[13px] leading-[18px] text-egray-700 hover:text-egray-900 aria-[current=page]:font-medium aria-[current=page]:text-egray-900 sm:text-[14px]";

const TEXT_LINK_CLASS =
  "inline-flex items-center gap-1.5 font-inter text-[14px] font-medium text-brand-800 underline-offset-4 hover:underline";

const DISCLAIMER = `${brand.name} prepares drafts for review by qualified staff. It does not make regulatory determinations or give legal advice — follow your agency's current procedures.`;

const getDraftingSteps = (template: DocumentTemplate) => [
  {
    title: "Describe the project",
    description:
      "Write a sentence or two — agency, location, scale and what you plan to do — and attach files such as a scope of work, earlier documents or surveys.",
  },
  {
    title: "Let it set up the project",
    description: `${brand.name} turns the description into a project with key fields, milestones and tasks. The research agent can propose comparable projects and their published documents; you decide what to keep.`,
  },
  {
    title: "Ask for the draft",
    description: `Ask for the ${template.name} in the chat. It is drafted from your confirmed project facts and files; anything that can't be confirmed — names, acreage, dates, determinations — is left as a highlighted placeholder instead of a guess.`,
  },
  {
    title: "Review, export and sign",
    description:
      "Edit the draft with your team, then download it as Word or PDF — open placeholders become review comments in the Word file. Route the final version for signature from the project.",
  },
];

const toAbsoluteUrl = (path: string) => {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(path, siteUrl).href : path;
};

const buildStructuredData = (template: DocumentTemplate) => [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: routing.home() },
      { name: "Document templates", path: routing.documentTemplates() },
      {
        name: template.name,
        path: routing.documentTemplate({ slug: template.slug }),
      },
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  },
];

export const generateStaticParams = () =>
  DOCUMENT_TEMPLATES.map((template) => ({ slug: template.slug }));

export const generateMetadata = async ({
  params,
}: TemplatePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const template = getDocumentTemplate(slug);

  if (!template) {
    notFound();
  }

  return buildPageMetadata({
    title: template.metaTitle,
    description: template.metaDescription,
    path: routing.documentTemplate({ slug }),
    type: "article",
  });
};

const DocumentTemplatePage = async ({ params }: TemplatePageProps) => {
  const { slug } = await params;
  const template = getDocumentTemplate(slug);

  if (!template) {
    notFound();
  }

  const relatedTemplates = DOCUMENT_TEMPLATES.filter(
    (other) => other.slug !== template.slug,
  );

  return (
    <div className={CATALOG_PAGE_CLASS}>
      {buildStructuredData(template).map((data) => (
        <JsonLd key={String(data["@type"])} data={data} />
      ))}

      <section className={CATALOG_TOP_CLASS}>
        <div className={PAGE_CONTAINER}>
          <div className="flex justify-center">
            <div className="glass max-w-full rounded-full px-4 py-2">
              <Breadcrumbs
                breadcrumbs={[
                  { name: "Home", href: routing.home() },
                  {
                    name: "Document templates",
                    href: routing.documentTemplates(),
                  },
                  { name: template.name },
                ]}
                className={BREADCRUMB_CLASS}
              />
            </div>
          </div>

          <div
            className={cn(
              HEADER_STACK_CLASS,
              "mx-auto mt-12 max-w-[800px] items-center text-center sm:mt-16",
            )}
          >
            <Eyebrow icon={FileText} label={`${template.framework} document`} />
            <h1 className={CATALOG_H1_CLASS}>{template.heading}</h1>
            <p className={cn(SECTION_LEAD_CLASS, "max-w-[680px]")}>
              {template.lead}
            </p>
          </div>

          {/* The conversion point: the home hero's prompt, submitting into
              the signup modal right here. */}
          <div className="mx-auto mt-8 flex w-full max-w-[686px] flex-col items-center gap-4">
            <TemplatePrompt placeholder={template.promptPlaceholder} />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <TemplateExampleButton
                template={template.slug}
                prompt={template.examplePrompt}
                className={GLASS_BUTTON_CLASS}
              >
                <Wand2 aria-hidden className="size-4" />
                Try an example
              </TemplateExampleButton>
              <a href="#how-it-works" className={GLASS_BUTTON_CLASS}>
                See how it works
              </a>
            </div>
          </div>

          {template.notice ? (
            <p className="glass mx-auto mt-8 flex max-w-[760px] items-start gap-3 rounded-2xl px-5 py-4 text-left font-inter text-[14px] leading-[22px] text-egray-800">
              <Info
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-brand-700"
              />
              {template.notice}
            </p>
          ) : null}
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div
          className={cn(PAGE_CONTAINER, "grid gap-4 lg:grid-cols-2 lg:gap-6")}
        >
          <article className={cn(CARD_CLASS, "flex flex-col gap-4")}>
            <h2 className={CARD_TITLE_CLASS}>What it is</h2>
            {template.overview.map((paragraph) => (
              <p key={paragraph} className={BODY_CLASS}>
                {paragraph}
              </p>
            ))}
          </article>
          <article className={cn(CARD_CLASS, "flex flex-col gap-4")}>
            <h2 className={CARD_TITLE_CLASS}>When it&apos;s used</h2>
            <ul className="flex flex-col gap-3">
              {template.whenUsed.map((item) => (
                <li key={item} className={cn(BODY_CLASS, "flex gap-3")}>
                  <Check
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-brand-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div className={PAGE_CONTAINER}>
          <SectionHeader
            icon={ListChecks}
            eyebrow="Outline"
            title={
              <>
                Typical <span className="text-brand-700">sections</span>
              </>
            }
            lead="Names and order vary by agency and project; this is a common outline."
            className={CATALOG_HEADER_GAP_CLASS}
          />
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {template.sections.map((section, index) => (
              <li
                key={section.title}
                className="glass-card flex flex-col gap-2 rounded-2xl p-5"
              >
                <span
                  className={cn(CARD_CHIP_CLASS, "self-start text-brand-800")}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-inter text-[16px] font-medium leading-[22px] text-egray-900">
                  {section.title}
                </h3>
                <p className="font-inter text-[14px] leading-[21px] text-egray-700">
                  {section.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {template.topics.length > 0 ? (
        <section className={CATALOG_SECTION_CLASS}>
          <div className={cn(PAGE_CONTAINER, "flex flex-col gap-4 lg:gap-6")}>
            {template.topics.map((topic) => (
              <article
                key={topic.id}
                id={topic.id}
                className={cn(CARD_CLASS, "flex scroll-mt-24 flex-col gap-4")}
              >
                <h2 className={CARD_TITLE_CLASS}>{topic.title}</h2>
                {topic.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={cn(BODY_CLASS, "max-w-[80ch]")}>
                    {paragraph}
                  </p>
                ))}
                {topic.bullets ? (
                  <ul className="flex max-w-[80ch] flex-col gap-3">
                    {topic.bullets.map((bullet) => (
                      <li key={bullet} className={cn(BODY_CLASS, "flex gap-3")}>
                        <Check
                          aria-hidden
                          className="mt-1 size-4 shrink-0 text-brand-700"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {topic.link ? (
                  <Link href={topic.link.href} className={TEXT_LINK_CLASS}>
                    {topic.link.label}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section
        id="how-it-works"
        className={cn(CATALOG_SECTION_CLASS, "scroll-mt-24")}
      >
        <div className={PAGE_CONTAINER}>
          <SectionHeader
            icon={Sparkles}
            eyebrow="How it works"
            title={
              <>
                How {brand.name}{" "}
                <span className="text-brand-700">drafts it</span>
              </>
            }
            lead="From a project description to a reviewable draft, without retyping what you already know."
            className={CATALOG_HEADER_GAP_CLASS}
          />
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <ol className={cn(CARD_CLASS, "flex flex-col gap-6")}>
              {getDraftingSteps(template).map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-700 font-inter text-[14px] font-medium text-white">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-inter text-[16px] font-medium leading-[24px] text-egray-900">
                      {step.title}
                    </h3>
                    <p className="font-inter text-[14px] leading-[22px] text-egray-700 md:text-[15px] md:leading-[24px]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-4 lg:gap-6">
              <div className={cn(CARD_CLASS, "flex flex-col gap-4")}>
                <h3 className={CARD_TITLE_CLASS}>What helps the draft</h3>
                <ul className="flex flex-col gap-3">
                  {template.helpfulInputs.map((input) => (
                    <li key={input} className={cn(BODY_CLASS, "flex gap-3")}>
                      <Check
                        aria-hidden
                        className="mt-1 size-4 shrink-0 text-brand-700"
                      />
                      <span>{input}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(CARD_CLASS, "flex flex-col gap-4")}>
                <h3 className={CARD_TITLE_CLASS}>
                  Example project description
                </h3>
                <blockquote className="glass-inset rounded-xl p-4 font-inter text-[15px] leading-[24px] text-egray-900">
                  {template.examplePrompt}
                </blockquote>
                <p className="font-inter text-[13px] leading-[20px] text-egray-700">
                  An illustrative example — replace it with your own project.
                </p>
                <TemplateExampleButton
                  template={template.slug}
                  prompt={template.examplePrompt}
                  className={cn(GLASS_BUTTON_CLASS, "self-start")}
                >
                  Use this example
                  <ArrowRight aria-hidden className="size-4" />
                </TemplateExampleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div className={cn(PAGE_CONTAINER, "flex flex-col items-center")}>
          <SectionHeader
            icon={CircleHelp}
            eyebrow="FAQ"
            title={
              <>
                Common <span className="text-brand-700">questions</span>
              </>
            }
            className={CATALOG_HEADER_GAP_CLASS}
          />
          <div className="w-full max-w-[760px]">
            <TemplateFaq faqs={template.faqs} />
          </div>
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div className={PAGE_CONTAINER}>
          <h2 className={cn(CARD_TITLE_CLASS, CATALOG_HEADER_GAP_CLASS)}>
            Related documents
          </h2>
          <ul className={cn(CATALOG_GRID_CLASS, "lg:grid-cols-4")}>
            {relatedTemplates.map((related) => (
              <li key={related.slug}>
                <Link
                  href={routing.documentTemplate({ slug: related.slug })}
                  className={cn(
                    CATALOG_CARD_LINK_CLASS,
                    "flex h-full flex-col p-5",
                  )}
                >
                  <span
                    className={cn(
                      CARD_CHIP_CLASS,
                      "mb-4 self-start text-brand-800",
                    )}
                  >
                    {related.framework}
                  </span>
                  <h3 className="mb-5 font-inter text-[16px] font-medium leading-[22px] text-egray-900">
                    {related.name}
                  </h3>
                  <span className={cn(CARD_ACTION_CLASS, "mt-auto")}>
                    Read the guide
                    <ArrowRight
                      aria-hidden
                      className={CARD_ACTION_ICON_CLASS}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 font-inter text-[14px] font-medium text-egray-900">
              <BookOpen aria-hidden className="size-4 text-brand-700" />
              Learn more
            </span>
            {template.resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className={GLASS_BUTTON_CLASS}
              >
                {resource.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div
          className={cn(
            PAGE_CONTAINER,
            CARD_CLASS,
            "flex flex-col items-center gap-5 text-center sm:p-12",
          )}
        >
          <h2 className={cn(SECTION_TITLE_CLASS, "max-w-[760px]")}>
            Draft your {template.name} with {brand.name}
          </h2>
          <p className={cn(SECTION_LEAD_CLASS, "max-w-[640px]")}>
            Describe your project and get a first draft your team can review,
            edit and export.
          </p>
          <TemplateCtaButton
            template={template.slug}
            placement="footer"
            className={cn(PRIMARY_BUTTON_CLASS, "h-12 px-6 text-[15px]")}
          >
            Start drafting
            <ArrowUpRight aria-hidden className="size-4" />
          </TemplateCtaButton>
          <p className="max-w-[640px] font-inter text-[13px] leading-[20px] text-egray-700">
            {DISCLAIMER}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DocumentTemplatePage;
