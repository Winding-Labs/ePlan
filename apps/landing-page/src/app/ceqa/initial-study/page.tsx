import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/ceqa/initial-study";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
