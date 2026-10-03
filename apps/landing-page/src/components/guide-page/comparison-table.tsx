import { Check, Columns3, FileText, Minus } from "lucide-react";
import Image from "next/image";

import {
  PAGE_CONTAINER,
  PAGE_GUTTER,
  SECTION_Y,
} from "@/components/home-v2/ui/layout";
import { SectionHeader } from "@/components/home-v2/ui/section-header";
import type { ManualComparisonRow } from "@/consts/guides/types";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

// "a Scoping Letter", "an Environmental Assessment", "an EIS Outline",
// "NEPA Documents" (plural: no article).
const withArticle = (document: string): string => {
  if (/s$/.test(document)) {
    return document;
  }
  return `${/^[AEIO]/i.test(document) ? "an" : "a"} ${document}`;
};

interface ComparisonTableProps {
  document: string;
  rows: ManualComparisonRow[];
}

const CELL_CLASS =
  "font-inter text-[15px] leading-[23px] md:px-5 md:py-5 md:align-top";

// Column label shown inside each cell on phones, where the table stacks.
const MOBILE_LABEL_CLASS =
  "mb-1 block font-heading text-[11px] font-medium uppercase tracking-[0.08em] text-egray-600 md:hidden";

/**
 * "How ePlan compares to drafting by hand": one table on desktop, one card
 * per row on phones. The ePlan column states only what the product does today.
 */
export function ComparisonTable({ document, rows }: ComparisonTableProps) {
  return (
    <section
      id="compare"
      className={cn(
        PAGE_GUTTER,
        SECTION_Y,
        "flex scroll-mt-24 flex-col gap-10 sm:gap-12",
      )}
    >
      <SectionHeader
        icon={Columns3}
        eyebrow="ePlan vs. by hand"
        title={`How ePlan compares to drafting ${withArticle(document)} by hand`}
        lead="The same document, two ways to get to a first draft your team can review."
      />
      <div className={cn(PAGE_CONTAINER, "flex flex-col gap-4")}>
        <div className="glass-card overflow-hidden rounded-[28px] px-5 md:px-3">
          <table className="w-full border-collapse text-left max-md:block">
            <thead className="max-md:hidden">
              <tr>
                <th scope="col" className="w-[22%] px-5 py-5">
                  <span className="sr-only">Compared</span>
                </th>
                <th scope="col" className="px-5 py-5">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={20}
                    className="h-6 w-auto"
                  />
                </th>
                <th
                  scope="col"
                  className="px-5 py-5 font-heading text-[18px] font-normal text-egray-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <FileText
                      aria-hidden="true"
                      className="size-5 text-egray-500"
                    />
                    By hand
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="max-md:block">
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-egray-200/70 first:border-t-0 max-md:flex max-md:flex-col max-md:gap-3 max-md:py-5 md:first:border-t"
                >
                  <th
                    scope="row"
                    className={cn(
                      CELL_CLASS,
                      "font-medium text-egray-900 max-md:text-[16px]",
                    )}
                  >
                    {row.label}
                  </th>
                  <td className={cn(CELL_CLASS, "text-egray-800")}>
                    <span className={MOBILE_LABEL_CLASS}>{brand.name}</span>
                    <span className="flex items-start gap-2.5">
                      <Check
                        aria-hidden="true"
                        className="mt-[3px] size-[17px] shrink-0 rounded-full bg-brand-700 p-[3px] text-white"
                        strokeWidth={3}
                      />
                      {row.eplan}
                    </span>
                  </td>
                  <td className={cn(CELL_CLASS, "text-egray-700")}>
                    <span className={MOBILE_LABEL_CLASS}>By hand</span>
                    <span className="flex items-start gap-2.5">
                      <Minus
                        aria-hidden="true"
                        className="mt-[3px] size-[17px] shrink-0 rounded-full bg-egray-200 p-[3px] text-egray-600"
                        strokeWidth={3}
                      />
                      {row.manual}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-[760px] font-inter text-[13px] leading-[20px] text-egray-600">
          The {brand.name} column describes the product as of October 2026 and
          its plans as listed in Pricing below. &ldquo;By hand&rdquo; means a
          Word template, past documents and agency PDFs. Every draft is
          reviewed, edited and signed by your team.
        </p>
      </div>
    </section>
  );
}
