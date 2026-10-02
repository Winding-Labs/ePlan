import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CATALOG_PAGE_CLASS } from "@/components/catalog/catalog-layout";
import { CatalogOfficeHero } from "@/components/catalog/catalog-office-hero";
import { ProjectTemplatesSection } from "@/components/catalog/project-templates-section";
import { getOffice } from "@/handlers/offices";
import { getOrganization } from "@/handlers/organizations";
import { buildOfficeMetadata } from "@/lib/catalog-metadata";

interface OfficeTemplatesPageProps {
  params: Promise<{ organization: string; office: string }>;
}

export const generateMetadata = async ({
  params,
}: OfficeTemplatesPageProps): Promise<Metadata> => {
  const { organization, office } = await params;
  return buildOfficeMetadata(organization, office, "templates");
};

export default async function OfficeTemplatesPage({
  params,
}: OfficeTemplatesPageProps) {
  const { organization: organizationSlug, office: officeSlug } = await params;

  const [organization, office] = await Promise.all([
    getOrganization(organizationSlug),
    getOffice(organizationSlug, officeSlug),
  ]);

  if (!organization || !office) {
    notFound();
  }

  return (
    <div className={CATALOG_PAGE_CLASS}>
      <CatalogOfficeHero
        organization={organization}
        office={office}
        extraBreadcrumbs={[{ name: "Templates" }]}
      />

      <ProjectTemplatesSection
        organizationSlug={organizationSlug}
        officeSlug={officeSlug}
        showMoreLink={false}
      />
    </div>
  );
}
