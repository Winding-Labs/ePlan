import { Fragment } from "react";

import Link from "next/link";

import { splitCitations } from "@/lib/citations";

interface CitedTextProps {
  text: string;
  /** 1-based number of a source on this page. */
  numberOf: (key: string) => number;
}

// Renders copy with `[[sourceKey]]` markers as numbered superscript links to
// the page's source list, and `[label](/for/slug)` as a link to that guide.
// Whitespace before a marker is dropped so the number sits against the word
// it supports.
export function CitedText({ text, numberOf }: CitedTextProps) {
  const segments = splitCitations(text);

  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "cite") {
          const number = numberOf(segment.key);
          return (
            <sup key={`${segment.key}-${index}`} className="ml-px">
              <a
                href={`#source-${number}`}
                aria-label={`Source ${number}`}
                className="font-inter text-[0.75em] font-medium text-brand-800 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                [{number}]
              </a>
            </sup>
          );
        }

        if (segment.type === "link") {
          return (
            <Link
              key={`link-${index}`}
              href={segment.href}
              className="font-medium text-brand-800 underline underline-offset-2 hover:text-brand-900"
            >
              {segment.label}
            </Link>
          );
        }

        const next = segments[index + 1];
        const value =
          next?.type === "cite" ? segment.value.trimEnd() : segment.value;
        return <Fragment key={`text-${index}`}>{value}</Fragment>;
      })}
    </>
  );
}
