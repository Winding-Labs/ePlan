import type { Metadata } from "next";

import { CatalogHero } from "@/components/catalog/catalog-hero";
import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { ProjectsSection } from "@/components/catalog/projects-section";
import { brand } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";
import { routing } from "@/utils/routing";

export const metadata: Metadata = buildPageMetadata({
  title: "Public environmental planning projects",
  description: `Browse public NEPA and environmental planning projects, offices and project templates from agencies and organizations using ${brand.name}.`,
  path: routing.catalog(),
});

export const dynamic = "force-dynamic";

export default function CatalogPage() {
  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogHero />
      <ProjectsSection limit={3} />
    </div>
  );
}
