import type { Metadata } from "next";

import { CatalogHero } from "@/components/catalog/catalog-hero";
import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { ProjectsSection } from "@/components/catalog/projects-section";
import { brand } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";
import { routing } from "@/utils/routing";

export const metadata: Metadata = buildPageMetadata({
  title: "All public projects",
  description: `Every public environmental planning project in the ${brand.name} catalog, with its documents, tasks and timeline.`,
  path: routing.catalogProjects(),
});

export const dynamic = "force-dynamic";

export default function AllProjectsPage() {
  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogHero extraBreadcrumbs={[{ name: "All Projects" }]} />

      <ProjectsSection showMoreLink={false} />
    </div>
  );
}
