import Image from "next/image";
import Link from "next/link";

import type { AnalyticsEvent } from "@wildfires-org/turboplan-analytics";

import { PAGE_CONTAINER, PAGE_GUTTER } from "@/components/home-v2/ui/layout";
import { AnalyticsLink } from "@/components/shared/analytics-link";
// The nav module, not the guides index: this renders inside client components,
// and the index would bundle every page's content.
import { GUIDE_FAMILIES, GUIDE_NAV } from "@/consts/guides/nav";
import { GUIDE_PATHS } from "@/consts/guides/paths";
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

const SITE_LINKS: FooterLink[] = [
  {
    label: "Projects",
    href: routing.catalog(),
    eventName: events.PROJECTS_CLICKED,
  },
  { label: "Docs", href: routing.docs(), eventName: events.DOCS_CLICKED },
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

export const LEGAL_LINKS: FooterLink[] = [
  { label: "All guides", href: "/for" },
  { label: "Privacy", href: routing.privacy() },
  { label: "Terms", href: routing.terms() },
];

// Every guide, grouped by family. The "ePlan" family (the product pages)
// shares its column with the site links.
const GUIDE_GROUPS = GUIDE_FAMILIES.map(({ family, title }) => ({
  family,
  title,
  links: GUIDE_PATHS.filter((path) => GUIDE_NAV[path].family === family).map(
    (path): FooterLink => ({ label: GUIDE_NAV[path].name, href: path }),
  ),
}));

const COLUMN_TITLE_CLASS =
  "font-heading text-[12px] font-medium uppercase tracking-[0.08em] text-egray-900";

const LINK_CLASS =
  "inline-block py-1 font-inter text-[14px] leading-[20px] text-egray-700 transition-colors duration-200 hover:text-egray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700";

function FooterAnchor({ link }: { link: FooterLink }) {
  return link.eventName ? (
    <AnalyticsLink
      href={link.href}
      eventName={link.eventName}
      className={LINK_CLASS}
    >
      {link.label}
    </AnalyticsLink>
  ) : (
    <Link href={link.href} className={LINK_CLASS}>
      {link.label}
    </Link>
  );
}

/**
 * The site footer: every guide page by family, the site links and the legal
 * pages, on every route, so each page is one click from every other.
 */
export function Footer() {
  return (
    <footer
      id="footer-bar"
      className={cn(PAGE_GUTTER, "pb-[max(1rem,env(safe-area-inset-bottom))]")}
    >
      <div
        className={cn(
          PAGE_CONTAINER,
          "glass flex flex-col gap-8 rounded-2xl px-6 py-8 lg:px-10 lg:py-10",
        )}
      >
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} home`}
              width={275}
              height={45}
              className="h-9 w-auto lg:h-10"
            />
          </Link>
          <p className="font-inter text-[14px] leading-[20px] text-egray-700">
            AI for NEPA and CEQA documents
          </p>
        </div>

        <nav
          aria-label="Guides and site"
          className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-egray-200/70 pt-8 sm:grid-cols-3 lg:grid-cols-4"
        >
          {GUIDE_GROUPS.map((group) => {
            const links =
              group.family === "product"
                ? [...group.links, ...SITE_LINKS]
                : group.links;
            const titleId = `footer-${group.family}`;
            return (
              <div key={group.family} className="flex min-w-0 flex-col gap-2">
                <p id={titleId} className={COLUMN_TITLE_CLASS}>
                  {group.title}
                </p>
                <ul aria-labelledby={titleId} className="flex flex-col">
                  {links.map((link) => (
                    <li key={link.href}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>

        <div className="flex flex-col-reverse gap-3 border-t border-egray-200/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter text-[13px] leading-[20px] text-egray-700">
            &copy; {new Date().getFullYear()} {brand.name}
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5">
            {LEGAL_LINKS.map((link) => (
              <FooterAnchor key={link.href} link={link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
