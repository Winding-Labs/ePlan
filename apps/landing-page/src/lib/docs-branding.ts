import { brand } from "./brand";

// The product docs under content/docs are shared with the upstream TurboPlan
// template and name the product "TurboPlan". Rather than fork the MDX (and
// conflict on every upstream docs change), the name is swapped for
// `brand.name`: prose at MDX compile time (remark plugin, source.config.ts),
// titles and descriptions when the docs source loads (src/lib/source.ts).
// Code, URLs and slugs are left alone — e.g.
// /docs/getting-started/what-is-turboplan and `turboplan-catalog`.
//
// Imported by source.config.ts, so relative imports only: fumadocs-mdx bundles
// that file outside the Next.js alias setup.

const UPSTREAM_PRODUCT_NAME = "TurboPlan";

// JSX props that hold reader-facing copy, e.g. <Card title="Open TurboPlan">.
const COPY_ATTRIBUTES = new Set(["title", "description"]);

type MdxAttribute = {
  type: string;
  name?: string;
  value?: unknown;
};

type MdastNode = {
  type: string;
  value?: unknown;
  attributes?: MdxAttribute[];
  children?: MdastNode[];
};

export const rebrandDocsText = (text: string) =>
  text.replaceAll(UPSTREAM_PRODUCT_NAME, brand.name);

const rebrandNode = (node: MdastNode) => {
  if (node.type === "text" && typeof node.value === "string") {
    node.value = rebrandDocsText(node.value);
  }

  for (const attribute of node.attributes ?? []) {
    if (
      attribute.type === "mdxJsxAttribute" &&
      attribute.name &&
      COPY_ATTRIBUTES.has(attribute.name) &&
      typeof attribute.value === "string"
    ) {
      attribute.value = rebrandDocsText(attribute.value);
    }
  }

  for (const child of node.children ?? []) {
    rebrandNode(child);
  }
};

/** Remark plugin: rebrands prose text nodes and copy-bearing JSX props. */
export const remarkRebrandDocs = () => (tree: MdastNode) => {
  rebrandNode(tree);
};
