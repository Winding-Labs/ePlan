interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Structured data for search engines. `<` is escaped so copy can never close
 * the script tag early (the pattern Next.js documents for JSON-LD).
 */
export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};
