// Inline markup for the guide pages. Copy cites a source as `[[sourceKey]]`;
// the page numbers sources in order of first appearance and renders each
// marker as a link to its entry in the source list. Copy links another guide
// page as `[label](/for/slug)`, and only guide pages: anything else stays text.

const MARKER = /\[\[([A-Za-z0-9]+)\]\]/g;
const GUIDE_LINK = /\[([^[\]]+)\]\((\/for(?:\/[a-z0-9-]+)?)\)/g;
const MARKUP = new RegExp(`${MARKER.source}|${GUIDE_LINK.source}`, "g");

export type TextSegment =
  | { type: "text"; value: string }
  | { type: "cite"; key: string }
  | { type: "link"; label: string; href: string };

export const splitCitations = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(MARKUP)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, index) });
    }
    segments.push(
      match[1]
        ? { type: "cite", key: match[1] }
        : { type: "link", label: match[2], href: match[3] },
    );
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

/** Guide paths linked across the given texts. */
export const guideLinks = (texts: string[]): string[] =>
  texts.flatMap((text) =>
    [...text.matchAll(GUIDE_LINK)].map((match) => match[2]),
  );

/** Plain text for places that cannot carry links (meta tags, JSON-LD). */
export const stripCitations = (text: string): string =>
  text
    .replace(MARKER, "")
    .replace(GUIDE_LINK, "$1")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
