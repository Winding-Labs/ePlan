import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PAGE_CONTAINER } from "@/components/home-v2/ui/layout";
import type { GuideEntry } from "@/consts/guides/types";
import { cn } from "@/lib/utils";

/** A grid of guide cards: the related guides on each page and the /for index. */
export function GuideCards({ guides }: { guides: GuideEntry[] }) {
  return (
    <ul
      className={cn(
        PAGE_CONTAINER,
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
      )}
    >
      {guides.map((page) => (
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
  );
}
