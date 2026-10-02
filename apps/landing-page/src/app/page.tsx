import type { Metadata } from "next";

import { HomePage } from "@/components/home-v2/home-page";
import { buildPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
