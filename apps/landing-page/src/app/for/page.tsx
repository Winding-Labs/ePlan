import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

import { GuideCards } from "@/components/guide-page/guide-cards";
import { CtaBottom } from "@/components/home-v2/cta-bottom";
import { PAGE_GUTTER, SECTION_Y } from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  HEADER_STACK_CLASS,
  SECTION_LEAD_CLASS,
  SECTION_TITLE_CLASS,
} from "@/components/home-v2/ui/section-header";
import { JsonLd } from "@/components/shared/json-ld";
import { GUIDE_FAMILIES, GUIDES } from "@/consts/guides";
import { buildPageMetadata, toAbsoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "NEPA & CEQA Guides for Environmental Planners",
  description:
    "NEPA and CEQA guides: documents, federal and state reviews, agency procedures and research tools, each cited to current law.",
  path: "/for",
});

/** Every guide page, grouped by family: the hub that links them all. */
export default function GuidesIndex() {
  return (
    <div className="w-full overflow-x-clip bg-brandAlt-100">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "NEPA and CEQA guides",
          url: toAbsoluteUrl("/for"),
          hasPart: GUIDES.map((guide) => ({
            "@type": "Article",
            headline: guide.h1,
            url: toAbsoluteUrl(guide.path),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: toAbsoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: toAbsoluteUrl("/for"),
            },
          ],
        }}
      />
      <section
        className={cn(PAGE_GUTTER, "pt-10 sm:pt-14 lg:pt-16 flex flex-col")}
      >
        <div
          className={cn(
            HEADER_STACK_CLASS,
            "mx-auto max-w-[760px] items-center text-center",
          )}
        >
          <Eyebrow icon={BookOpen} label="Guides" />
          <h1 className={SECTION_TITLE_CLASS}>NEPA and CEQA guides</h1>
          <p className={SECTION_LEAD_CLASS}>
            What each document is, when it is required and what it contains,
            cited to current law, with an AI draft one click away.
          </p>
        </div>
      </section>
      {GUIDE_FAMILIES.map(({ family, title }) => {
        const guides = GUIDES.filter((guide) => guide.family === family);
        if (guides.length === 0) {
          return null;
        }
        return (
          <section
            key={family}
            aria-label={title}
            className={cn(PAGE_GUTTER, SECTION_Y, "flex flex-col gap-8")}
          >
            <h2 className="mx-auto w-full max-w-[1200px] font-heading text-[26px] font-normal tracking-[-0.03em] text-egray-900">
              {title}
            </h2>
            <GuideCards guides={guides} />
          </section>
        );
      })}
      <CtaBottom showFooter={false} />
    </div>
  );
}
