import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  LayoutTemplate,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
import { TemplateCtaLink } from "@/components/document-templates/template-cta-link";
import { PAGE_CONTAINER } from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  HEADER_STACK_CLASS,
  SECTION_LEAD_CLASS,
} from "@/components/home-v2/ui/section-header";
import { DOCUMENT_TEMPLATES } from "@/consts/document-templates";
import { brand } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { routing } from "@/utils/routing";

export const metadata: Metadata = buildPageMetadata({
  title: "NEPA and CEQA Document Templates",
  description: `Guides to the NEPA and CEQA documents ${brand.name} drafts — CE decision memos, scoping letters, EAs and FONSIs, EISs, and CEQA initial studies and MNDs.`,
  path: routing.documentTemplates(),
});

const DocumentTemplatesPage = () => {
  return (
    <div className={CATALOG_PAGE_CLASS}>
      <section className={CATALOG_TOP_CLASS}>
        <div className={PAGE_CONTAINER}>
          <div
            className={cn(
              HEADER_STACK_CLASS,
              CATALOG_HEADER_GAP_CLASS,
              "mx-auto mt-6 max-w-[800px] items-center text-center sm:mt-10",
            )}
          >
            <Eyebrow icon={FileText} label="Document templates" />
            <h1 className={CATALOG_H1_CLASS}>
              Environmental planning{" "}
              <span className="text-brand-700">document templates</span>
            </h1>
            <p className={cn(SECTION_LEAD_CLASS, "max-w-[680px]")}>
              What each document contains, when it is needed, and how{" "}
              {brand.name} drafts it from your project description and files.
            </p>
          </div>

          <ul className={CATALOG_GRID_CLASS}>
            {DOCUMENT_TEMPLATES.map((template) => (
              <li key={template.slug}>
                <Link
                  href={routing.documentTemplate({ slug: template.slug })}
                  className={cn(
                    CATALOG_CARD_LINK_CLASS,
                    "flex h-full flex-col p-5 sm:p-6",
                  )}
                >
                  <span
                    className={cn(
                      CARD_CHIP_CLASS,
                      "mb-4 self-start text-brand-800",
                    )}
                  >
                    {template.framework}
                  </span>
                  <h2 className="mb-2 font-inter text-[18px] font-medium leading-[24px] text-egray-900">
                    {template.name}
                  </h2>
                  <p className="font-inter text-[14px] leading-[21px] text-egray-700">
                    {template.metaDescription}
                  </p>
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
        </div>
      </section>

      <section className={CATALOG_SECTION_CLASS}>
        <div
          className={cn(
            PAGE_CONTAINER,
            "glass-card flex flex-col gap-5 rounded-[28px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8",
          )}
        >
          <div className="flex max-w-[640px] flex-col gap-2">
            <h2 className="flex items-center gap-2 font-inter text-[18px] font-medium leading-[24px] text-egray-900">
              <LayoutTemplate aria-hidden className="size-5 text-brand-700" />
              Looking for a whole project setup?
            </h2>
            <p className="font-inter text-[14px] leading-[22px] text-egray-700 md:text-[15px] md:leading-[24px]">
              Project templates in the public catalog set up the milestones,
              fields and documents for a common review, such as a categorical
              exclusion for a fuel break.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={routing.catalogTemplates()}
              className={GLASS_BUTTON_CLASS}
            >
              Browse project templates
            </Link>
            <TemplateCtaLink
              template="index"
              placement="footer"
              className={PRIMARY_BUTTON_CLASS}
            >
              Start drafting
              <ArrowUpRight aria-hidden className="size-4" />
            </TemplateCtaLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentTemplatesPage;
