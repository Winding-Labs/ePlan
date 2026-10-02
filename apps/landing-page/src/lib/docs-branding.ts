// The product docs under content/docs are shared with the upstream TurboPlan
// template and name the product "TurboPlan". Rather than fork the MDX (and
// conflict on every upstream docs change), the name is swapped for the app
// name: prose at MDX compile time (remark plugin, source.config.ts), titles and
// descriptions when the docs source loads (src/lib/source.ts). Code, URLs and
// slugs are left alone — e.g. /docs/getting-started/what-is-turboplan and
// `turboplan-catalog`.
//
// No static imports: source.config.ts imports this file, and the
// `fumadocs-mdx` postinstall evaluates that config before workspace packages
// are built — a top-level import of @wildfires-org/* (even via ./brand) fails
// `pnpm install` on a clean checkout. Relative imports only, too: fumadocs-mdx
// bundles the config outside the Next.js alias setup.

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

export const rebrandDocsText = (text: string, productName: string) =>
  text.replaceAll(UPSTREAM_PRODUCT_NAME, productName);

const rebrandNode = (node: MdastNode, productName: string) => {
  if (node.type === "text" && typeof node.value === "string") {
    node.value = rebrandDocsText(node.value, productName);
  }

  for (const attribute of node.attributes ?? []) {
    if (
      attribute.type === "mdxJsxAttribute" &&
      attribute.name &&
      COPY_ATTRIBUTES.has(attribute.name) &&
      typeof attribute.value === "string"
    ) {
      attribute.value = rebrandDocsText(attribute.value, productName);
    }
  }

  for (const child of node.children ?? []) {
    rebrandNode(child, productName);
  }
};

/**
 * Remark plugin: rebrands prose text nodes and copy-bearing JSX props. The
 * app name is read when an MDX file compiles (packages are built by then);
 * it is the same value `brand.name` uses.
 */
export const remarkRebrandDocs = () => async (tree: MdastNode) => {
  const { getAppName } = await import("@wildfires-org/turboplan-env");
  rebrandNode(tree, getAppName());
};
