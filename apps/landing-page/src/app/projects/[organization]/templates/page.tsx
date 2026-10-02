import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { CatalogOrganizationHero } from "@/components/catalog/catalog-organization-hero";
import { ProjectTemplatesSection } from "@/components/catalog/project-templates-section";
import { getOrganization } from "@/handlers/organizations";
import { buildOrganizationMetadata } from "@/lib/catalog-metadata";

interface OrganizationTemplatesPageProps {
  params: Promise<{ organization: string }>;
}

export const generateMetadata = async ({
  params,
}: OrganizationTemplatesPageProps): Promise<Metadata> => {
  const { organization } = await params;
  return buildOrganizationMetadata(organization, "templates");
};

export default async function OrganizationTemplatesPage({
  params,
}: OrganizationTemplatesPageProps) {
  const { organization: organizationSlug } = await params;

  const organization = await getOrganization(organizationSlug);

  if (!organization) {
    notFound();
  }

  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogOrganizationHero
        organization={organization}
        extraBreadcrumbs={[{ name: "Templates" }]}
      />

      <ProjectTemplatesSection
        organizationSlug={organizationSlug}
        showMoreLink={false}
      />
    </div>
  );
}
