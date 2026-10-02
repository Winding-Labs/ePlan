// Inline citation markers for the NEPA guide pages. Copy cites a source as
// `[[sourceKey]]`; the page numbers sources in order of first appearance and
// renders each marker as a link to its entry in the source list.

const MARKER = /\[\[([A-Za-z0-9]+)\]\]/g;

export type TextSegment =
  | { type: "text"; value: string }
  | { type: "cite"; key: string };

export const splitCitations = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(MARKER)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, index) });
    }
    segments.push({ type: "cite", key: match[1] });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  return segments;
};

/** Source keys in order of first appearance across the given texts. */
export const orderCitations = (texts: string[]): string[] => {
  const keys = new Set<string>();
  texts.forEach((text) => {
    for (const match of text.matchAll(MARKER)) {
      keys.add(match[1]);
    }
  });
  return [...keys];
};

/** Plain text for places that cannot carry links (meta tags, JSON-LD). */
export const stripCitations = (text: string): string =>
  text
    .replace(MARKER, "")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
