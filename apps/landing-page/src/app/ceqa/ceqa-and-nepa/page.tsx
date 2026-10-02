import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/ceqa/ceqa-and-nepa";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
