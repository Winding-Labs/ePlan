import { GuidePage, guideMetadata } from "@/components/guide-page/guide-page";

const PATH = "/compare/nepa-ai-tools";

export const metadata = guideMetadata(PATH);

export default function Page() {
  return <GuidePage path={PATH} />;
}
