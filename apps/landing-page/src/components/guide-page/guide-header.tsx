import { ArrowDown, ArrowRight, CheckCircle2, Scale } from "lucide-react";

import { PAGE_CONTAINER, PAGE_GUTTER } from "@/components/home-v2/ui/layout";
import {
  Eyebrow,
  HEADER_STACK_CLASS,
} from "@/components/home-v2/ui/section-header";
import { Breadcrumbs } from "@/components/ui/breadcrumb";
import type { GuideEntry } from "@/consts/guides/types";
import { cn } from "@/lib/utils";
import { CitedText } from "./cited-text";

export type Crumb = { name: string; href: string };

const H1_CLASS =
  "font-heading text-[34px] font-normal leading-[1.1] tracking-[-0.04em] text-balance text-egray-900 md:text-[44px] lg:text-[52px]";

const LEAD_CLASS =
  "font-inter text-body-md text-egray-800 md:text-[17px] md:leading-[28px]";

interface GuideHeaderProps {
  page: GuideEntry;
  crumbs: Crumb[];
  benefits: string[];
  sourceCount: number;
  sourcesReadOn: string;
  /** The same date as YYYY-MM-DD, for the <time> element. */
  sourcesReadOnIso: string;
  numberOf: (key: string) => number;
}

/**
 * The text header at the top of every guide page: breadcrumbs, the keyword
 * H1, the cited short answer, what ePlan gets you and two actions on the
 * left; the document's facts at a glance on the right.
 */
export function GuideHeader({
  page,
  crumbs,
  benefits,
  sourceCount,
  sourcesReadOn,
  sourcesReadOnIso,
  numberOf,
}: GuideHeaderProps) {
  return (
    <section className={cn(PAGE_GUTTER, "pt-6 sm:pt-8 lg:pt-12")}>
      <div
        className={cn(
          PAGE_CONTAINER,
          "grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14",
        )}
      >
        <div className="flex min-w-0 flex-col gap-7">
          <div className="glass max-w-full self-start rounded-full px-4 py-2">
            <Breadcrumbs
              breadcrumbs={crumbs.map((crumb, index) =>
                index === crumbs.length - 1
                  ? { name: crumb.name }
                  : { name: crumb.name, href: crumb.href },
              )}
              className="font-inter text-[13px] leading-[18px] text-egray-700 hover:text-egray-900 aria-[current=page]:font-medium aria-[current=page]:text-egray-900 sm:text-[14px]"
            />
          </div>

          <div className={cn(HEADER_STACK_CLASS, "items-start")}>
            <Eyebrow icon={Scale} label={page.eyebrow} />
            <h1 className={H1_CLASS}>{page.h1}</h1>
          </div>

          <div className="flex flex-col gap-3">
            <p className={LEAD_CLASS}>
              <CitedText text={page.answer} numberOf={numberOf} />
            </p>
            <p className="font-inter text-[13px] leading-[20px] text-egray-600">
              {sourceCount} sources, each read on{" "}
              <time dateTime={sourcesReadOnIso}>{sourcesReadOn}</time>. This
              page explains the law; it is not legal advice.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-inter text-[15px] font-semibold text-egray-900">
              ePlan gets you:
            </p>
            <ul className="flex flex-col gap-2.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 font-inter text-[15px] leading-[23px] text-egray-800"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-[3px] size-[17px] shrink-0 text-brand-700"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full max-w-[420px] flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <a
              href="#draft"
              className="btn-primary press inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-inter text-body-md font-medium"
            >
              Draft yours with ePlan
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#compare"
              className="glass press inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-inter text-body-md font-medium text-brand-800 hover:bg-white/80"
            >
              See how it compares
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside
          aria-labelledby="at-a-glance"
          className="glass-card flex min-w-0 flex-col gap-5 rounded-[28px] p-6 sm:p-7 lg:mt-14"
        >
          <p
            id="at-a-glance"
            className="font-heading text-[12px] font-medium uppercase tracking-[0.08em] text-brand-800"
          >
            {page.name} at a glance
          </p>
          <dl className="flex flex-col divide-y divide-egray-200/70">
            {page.glance.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0"
              >
                <dt className="font-inter text-[13px] font-medium text-egray-600">
                  {row.label}
                </dt>
                <dd className="font-inter text-[15px] leading-[23px] text-egray-900">
                  <CitedText text={row.value} numberOf={numberOf} />
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
