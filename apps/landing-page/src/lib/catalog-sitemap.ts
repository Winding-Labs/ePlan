import { getLandingPageEnv } from "@wildfires-org/turboplan-env";

import { routing } from "@/utils/routing";

type Slugged = { slug: string };

type PublicOrganization = Slugged & { id: string };

type PublicCatalogEntry = Slugged & {
  office: Slugged;
  organization: Slugged;
  updatedAt?: string;
};

export type CatalogSitemapPath = {
  path: string;
  priority: number;
  lastModified?: string;
};

// Templates are paginated; the catalog holds a few dozen.
const TEMPLATE_PAGE_SIZE = 500;
const REQUEST_TIMEOUT_MS = 5000;

const getPublic = async <T>(path: string): Promise<T | null> => {
  const { SERVER_URL } = getLandingPageEnv();
  try {
    const response = await fetch(`${SERVER_URL}/api/public/${path}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    if (!response.ok) {
      console.error(`catalog sitemap: /api/public/${path} ${response.status}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`catalog sitemap: /api/public/${path} failed`, error);
    return null;
  }
};

/**
 * Every public organization, office, project and project template, for the
 * sitemap. Their lists render client-side, so without this crawlers had no
 * way to find them. A failed API call drops only its own part.
 */
export const getCatalogSitemapPaths = async (): Promise<
  CatalogSitemapPath[]
> => {
  const [organizations, projects, templates] = await Promise.all([
    getPublic<PublicOrganization[]>("organizations"),
    getPublic<PublicCatalogEntry[]>("projects"),
    getPublic<{ templates: PublicCatalogEntry[] }>(
      `templates?limit=${TEMPLATE_PAGE_SIZE}`,
    ),
  ]);

  const officesByOrganization = await Promise.all(
    (organizations ?? []).map(async (organization) => ({
      organization,
      offices:
        (
          await getPublic<{ items: Slugged[] }>(
            `offices?organizationId=${encodeURIComponent(organization.id)}`,
          )
        )?.items ?? [],
    })),
  );

  return [
    ...officesByOrganization.flatMap(({ organization, offices }) => [
      {
        path: routing.catalogOrganization({
          organizationSlug: organization.slug,
        }),
        priority: 0.6,
      },
      ...offices.map((office) => ({
        path: routing.catalogOffice({
          organizationSlug: organization.slug,
          officeSlug: office.slug,
        }),
        priority: 0.4,
      })),
    ]),
    ...(projects ?? []).map((project) => ({
      path: routing.catalogProject({
        organizationSlug: project.organization.slug,
        officeSlug: project.office.slug,
        projectSlug: project.slug,
      }),
      priority: 0.6,
      lastModified: project.updatedAt,
    })),
    ...(templates?.templates ?? []).map((template) => ({
      path: routing.catalogTemplate({
        organizationSlug: template.organization.slug,
        officeSlug: template.office.slug,
        templateSlug: template.slug,
      }),
      priority: 0.5,
      lastModified: template.updatedAt,
    })),
  ];
};
