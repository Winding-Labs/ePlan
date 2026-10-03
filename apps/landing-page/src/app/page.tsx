import type { Metadata } from "next";

import { HomePage } from "@/components/home-v2/home-page";
import { JsonLd } from "@/components/shared/json-ld";
import { brand } from "@/lib/brand";
import {
  buildPageMetadata,
  organizationJsonLd,
  SITE_DESCRIPTION,
  SITE_TITLE,
  toAbsoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...organizationJsonLd(),
          description: SITE_DESCRIPTION,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": toAbsoluteUrl("/#website"),
          name: brand.name,
          url: toAbsoluteUrl("/"),
          publisher: { "@id": organizationJsonLd()["@id"] },
        }}
      />
      <HomePage />
    </>
  );
}
