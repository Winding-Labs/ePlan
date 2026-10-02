import type { Metadata } from "next";

import { CatalogHero } from "@/components/catalog/catalog-hero";
import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { ProjectTemplatesSection } from "@/components/catalog/project-templates-section";
import { buildPageMetadata } from "@/lib/seo";
import { routing } from "@/utils/routing";

export const metadata: Metadata = buildPageMetadata({
  title: "Project templates",
  description:
    "Public project templates that set up milestones, fields and documents for common environmental reviews, such as NEPA categorical exclusions.",
  path: routing.catalogTemplates(),
});

export const dynamic = "force-dynamic";

export default function AllTemplatesPage() {
  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogHero extraBreadcrumbs={[{ name: "All Templates" }]} />

      <ProjectTemplatesSection showMoreLink={false} />
    </div>
  );
}
