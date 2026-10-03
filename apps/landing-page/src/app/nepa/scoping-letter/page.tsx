import { NepaPage, nepaPageMetadata } from "@/components/nepa-page/nepa-page";

const PATH = "/nepa/scoping-letter";

export const metadata = nepaPageMetadata(PATH);

export default function Page() {
  return <NepaPage path={PATH} />;
}
