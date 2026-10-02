import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/nepa/categorical-exclusion";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
