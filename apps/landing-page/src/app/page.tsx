import { Suspense } from "react";

import type { Metadata } from "next";

import { ContactSection } from "@/components/home-v2/contact-section";
import { CtaBottom } from "@/components/home-v2/cta-bottom";
import { Faq } from "@/components/home-v2/faq";
import { Features } from "@/components/home-v2/features";
import { Hero } from "@/components/home-v2/hero";
import { LogoMarquee } from "@/components/home-v2/logo-marquee";
import { Pricing } from "@/components/home-v2/pricing";
import { Skeleton } from "@/components/ui/skeleton";
import { HOME_DESCRIPTION, HOME_TAGLINE } from "@/consts/home-metadata";
import { brand } from "@/lib/brand";

const HOME_TITLE = `${brand.name} | ${HOME_TAGLINE}`;

// A server component so it can export metadata; every section below is its
// own client component.
export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: brand.name,
    type: "website",
    images: [{ url: brand.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [brand.ogImage],
  },
};

export default function Home() {
  return (
    <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
      <div className="w-full overflow-x-clip bg-brandAlt-100">
        <Hero />
        <LogoMarquee />
        <Features />
        <Pricing />
        <Faq />
        <ContactSection />
        <CtaBottom />
      </div>
    </Suspense>
  );
}
