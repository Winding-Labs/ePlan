import { NepaPage, nepaPageMetadata } from "@/components/nepa-page/nepa-page";

const PATH = "/compare/nepa-ai-tools";

export const metadata = nepaPageMetadata(PATH);

export default function Page() {
  return <NepaPage path={PATH} />;
}
