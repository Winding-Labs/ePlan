import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/nepa/environmental-impact-statement";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
