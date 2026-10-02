import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/ceqa/environmental-impact-report";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
