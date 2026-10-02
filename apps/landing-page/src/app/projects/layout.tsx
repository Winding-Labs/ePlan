import type { Metadata } from "next";

// The catalog listings (agencies, offices, project and template lists) fetch
// their items in the browser and share the homepage title, so a crawler sees
// a thin, duplicate page. Keep them out of the index but let crawlers follow
// their links: project and template detail pages render real server content
// and opt back in with their own `robots` metadata.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
