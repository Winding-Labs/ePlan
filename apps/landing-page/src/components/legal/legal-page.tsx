import type { ReactNode } from "react";

import {
  CATALOG_H1_CLASS,
  CATALOG_PAGE_CLASS,
  CATALOG_TOP_CLASS,
} from "@/components/catalog/catalog-layout";
import { SECTION_LEAD_CLASS } from "@/components/home-v2/ui/section-header";
import { cn } from "@/lib/utils";

interface LegalPageProps {
  title: string;
  /** Human-readable date, e.g. "October 2, 2026". */
  updated: string;
  children: ReactNode;
}

// Prose styles for the body: the pages write plain <h2>/<p>/<ul>/<a>.
const LEGAL_BODY_CLASS = cn(
  "flex flex-col gap-4 font-inter text-body-md text-egray-800",
  "[&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-[24px] [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.02em] [&_h2]:text-egray-900",
  "[&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6",
  "[&_a]:text-brand-800 [&_a]:underline [&_a]:underline-offset-2",
  "[&_strong]:font-semibold [&_strong]:text-egray-900",
);

export const LegalPage = ({ title, updated, children }: LegalPageProps) => {
  return (
    <div className={cn(CATALOG_PAGE_CLASS, CATALOG_TOP_CLASS)}>
      <article className="glass-card mx-auto flex w-full max-w-[820px] flex-col gap-6 rounded-[28px] p-5 sm:p-8 lg:p-12">
        <header className="flex flex-col gap-3">
          <h1 className={cn(CATALOG_H1_CLASS, "md:text-[48px] lg:text-[48px]")}>
            {title}
          </h1>
          <p className={SECTION_LEAD_CLASS}>Last updated: {updated}</p>
        </header>
        <div className={LEGAL_BODY_CLASS}>{children}</div>
      </article>
    </div>
  );
};
