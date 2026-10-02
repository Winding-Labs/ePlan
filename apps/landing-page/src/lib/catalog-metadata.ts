import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getOffice } from "@/handlers/offices";
import { getOrganization } from "@/handlers/organizations";
import { buildPageMetadata } from "@/lib/seo";
import { routing } from "@/utils/routing";

type OrganizationView = "overview" | "offices" | "projects" | "templates";
type OfficeView = "overview" | "projects" | "templates";

// Metadata for the API-backed catalog pages. The handlers' fetches are
// memoized per request, so the page reuses this lookup. A missing entity is
// notFound() here too, like the page itself. (The status still streams as 200
// because the root layout wraps every page in Suspense — see the 2026-10-02
// SEO audit — but the not-found page carries noindex.)

export const buildOrganizationMetadata = async (
  organizationSlug: string,
  view: OrganizationView = "overview",
): Promise<Metadata> => {
  const organization = await getOrganization(organizationSlug);

  if (!organization) {
    notFound();
  }

  const { name } = organization;
  const pages: Record<
    OrganizationView,
    { title: string; description: string; path: string }
  > = {
    overview: {
      title: name,
      description:
        organization.description ||
        `Public environmental planning projects, offices and project templates from ${name}.`,
      path: routing.catalogOrganization({ organizationSlug }),
    },
    offices: {
      title: `${name} offices`,
      description: `Offices of ${name} with public environmental planning projects and templates.`,
      path: routing.catalogOffices({ organizationSlug }),
    },
    projects: {
      title: `${name} projects`,
      description: `Public environmental planning projects from ${name}.`,
      path: routing.catalogOrganizationProjects({ organizationSlug }),
    },
    templates: {
      title: `${name} project templates`,
      description: `Project templates from ${name} for starting a new environmental review.`,
      path: routing.catalogOrganizationTemplates({ organizationSlug }),
    },
  };

  return buildPageMetadata({
    ...pages[view],
    image: organization.coverImageUrl ?? undefined,
  });
};

export const buildOfficeMetadata = async (
  organizationSlug: string,
  officeSlug: string,
  view: OfficeView = "overview",
): Promise<Metadata> => {
  const office = await getOffice(organizationSlug, officeSlug);

  if (!office) {
    notFound();
  }

  const name = `${office.name} – ${office.organizationName}`;
  const slugs = { organizationSlug, officeSlug };
  const pages: Record<
    OfficeView,
    { title: string; description: string; path: string }
  > = {
    overview: {
      title: name,
      description:
        office.description ||
        `Public environmental planning projects and project templates from ${office.name}, ${office.organizationName}.`,
      path: routing.catalogOffice(slugs),
    },
    projects: {
      title: `${office.name} projects – ${office.organizationName}`,
      description: `Public environmental planning projects from ${office.name}, ${office.organizationName}.`,
      path: routing.catalogOfficeProjects(slugs),
    },
    templates: {
      title: `${office.name} project templates – ${office.organizationName}`,
      description: `Project templates from ${office.name}, ${office.organizationName}, for starting a new environmental review.`,
      path: routing.catalogOfficeTemplates(slugs),
    },
  };

  return buildPageMetadata({
    ...pages[view],
    image: office.coverImageUrl ?? undefined,
  });
};
