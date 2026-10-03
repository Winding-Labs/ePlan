import { GUIDE_FAMILIES, GUIDES } from "@/consts/guides";
import { brand } from "@/lib/brand";
import { SITE_DESCRIPTION, toAbsoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * llms.txt (llmstxt.org): a plain index of the guides for AI assistants,
 * generated from the same registry as the sitemap and the footer.
 */
export function GET(): Response {
  const sections = GUIDE_FAMILIES.flatMap(({ family, title }) => {
    const guides = GUIDES.filter((guide) => guide.family === family);
    return guides.length === 0
      ? []
      : [
          `## ${title}`,
          "",
          ...guides.map(
            (guide) =>
              `- [${guide.name}](${toAbsoluteUrl(guide.path)}): ${guide.description}`,
          ),
          "",
        ];
  });
  const body = [
    `# ${brand.name}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Every guide is indexed at ${toAbsoluteUrl("/for")}.`,
    "",
    ...sections,
  ].join("\n");
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
