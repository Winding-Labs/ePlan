import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { CatalogOrganizationHero } from "@/components/catalog/catalog-organization-hero";
import { OfficesSection } from "@/components/catalog/organization-page/offices-section";
import { ProjectTemplatesSection } from "@/components/catalog/project-templates-section";
import { ProjectsSection } from "@/components/catalog/projects-section";
import { getOrganization } from "@/handlers/organizations";
import { buildOrganizationMetadata } from "@/lib/catalog-metadata";

interface OrganizationPageProps {
  params: Promise<{ organization: string }>;
}

export const generateMetadata = async ({
  params,
}: OrganizationPageProps): Promise<Metadata> => {
  const { organization } = await params;
  return buildOrganizationMetadata(organization);
};

export default async function OrganizationPage({
  params,
}: OrganizationPageProps) {
  const { organization: organizationSlug } = await params;

  const organization = await getOrganization(organizationSlug);

  if (!organization) {
    notFound();
  }

  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogOrganizationHero organization={organization} />

      <OfficesSection
        organizationId={organization.id}
        organizationSlug={organizationSlug}
      />

      <ProjectTemplatesSection
        organizationId={organization.id}
        organizationSlug={organizationSlug}
      />

      <ProjectsSection organizationSlug={organizationSlug} limit={3} />
    </div>
  );
}
