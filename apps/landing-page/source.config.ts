import { defineConfig, defineDocs } from "fumadocs-mdx/config";

import { remarkRebrandDocs } from "./src/lib/docs-branding";

export const docs = defineDocs({
  dir: "content/docs",
});

// Prose rebranding happens at compile time. Frontmatter (titles,
// descriptions) is rebranded in src/lib/source.ts instead: under webpack,
// fumadocs-mdx 11.10 never applies a collection `schema` (its loader reads the
// query as "?collection"), so a schema transform would silently do nothing.
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkRebrandDocs],
  },
});
