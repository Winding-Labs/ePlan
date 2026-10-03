import Image from "next/image";
import Link from "next/link";

import type { AnalyticsEvent } from "@wildfires-org/turboplan-analytics";

import { PAGE_CONTAINER, PAGE_GUTTER } from "@/components/home-v2/ui/layout";
import { AnalyticsLink } from "@/components/shared/analytics-link";
import { NEPA_GUIDE_LINKS } from "@/consts/nepa-guide-links";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { events } from "@/types/analytics";
import { routing } from "@/utils/routing";

type FooterLink = {
  label: string;
  href: string;
  /** Tracked click; links without a tracking-plan event render untracked. */
  eventName?: AnalyticsEvent;
};

const LINK_CLASS =
  "py-1 font-inter text-[13px] font-normal leading-[20px] text-[#161616] transition-colors duration-200 hover:text-egray-900 sm:text-[14px]";

const FOOTER_LINKS: FooterLink[] = [
  {
    label: "Projects",
    href: routing.catalog(),
    eventName: events.PROJECTS_CLICKED,
  },
  {
    label: "Templates",
    href: routing.documentTemplates(),
    eventName: events.TEMPLATES_CLICKED,
  },
  {
    label: "Docs",
    href: routing.docs(),
    eventName: events.DOCS_CLICKED,
  },
  {
    label: "Contact",
    href: routing.contact(),
    eventName: events.CONTACT_CLICKED,
  },
  {
    label: "Sign In",
    href: routing.signIn(),
    eventName: events.SIGN_IN_CLICKED,
  },
];

export function Footer() {
  return (
    <footer
      id="footer-bar"
      className={cn(PAGE_GUTTER, "pb-[max(1rem,env(safe-area-inset-bottom))]")}
    >
      <div
        className={cn(
          PAGE_CONTAINER,
          "glass rounded-2xl px-6 py-6 sm:py-4 lg:px-8",
        )}
      >
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:gap-0">
          {/* Copyright — last on mobile, left on desktop */}
          <p className="order-3 font-inter text-[13px] font-normal leading-[20px] text-egray-700 sm:order-none sm:w-[296px] sm:text-left lg:w-[380px]">
            &copy; {new Date().getFullYear()} {brand.name}
          </p>

          {/* Logo — first on mobile, center on desktop */}
          <div className="order-1 flex w-full items-center justify-center sm:order-none sm:w-auto sm:flex-1">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={275}
              height={45}
              className="h-9 w-auto sm:h-8 lg:h-10"
            />
          </div>

          {/* Nav links — middle on mobile, right on desktop */}
          <nav
            className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:order-none sm:w-[296px] sm:justify-end sm:gap-x-[24px] lg:w-[380px]"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((link) =>
              link.eventName ? (
                <AnalyticsLink
                  key={link.label}
                  href={link.href}
                  eventName={link.eventName}
                  className={LINK_CLASS}
                >
                  {link.label}
                </AnalyticsLink>
              ) : (
                <Link key={link.label} href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Every route renders this footer, so this one list links the NEPA
            guide pages from the whole site. */}
        <nav
          className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-egray-200/60 pt-4 sm:mt-4"
          aria-label="NEPA guides"
        >
          {NEPA_GUIDE_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="py-1 font-inter text-[13px] font-normal leading-[20px] text-egray-700 transition-colors duration-200 hover:text-egray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
