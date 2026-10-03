import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";
import {
  GUIDE_PATHS,
  GUIDES,
  type GuidePath,
  guideSlug,
} from "@/consts/guides";

interface GuideRouteProps {
  params: Promise<{ slug: string }>;
}

// Every guide page is known at build time; any other /for/<slug> is a 404.
export const dynamicParams = false;

export const generateStaticParams = () =>
  GUIDES.map((guide) => ({ slug: guideSlug(guide.path) }));

const pathOf = (slug: string): GuidePath | undefined =>
  GUIDE_PATHS.find((path) => path === `/for/${slug}`);

export async function generateMetadata({
  params,
}: GuideRouteProps): Promise<Metadata> {
  const path = pathOf((await params).slug);
  if (!path) {
    notFound();
  }
  return guideMetadata(path);
}

export default async function GuideRoute({ params }: GuideRouteProps) {
  const path = pathOf((await params).slug);
  if (!path) {
    notFound();
  }
  return <GuidePage path={path} />;
}
