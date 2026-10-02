"use client";

import type { ReactNode } from "react";

import Link from "next/link";

import { PROJECT_DESCRIPTION_PARAM } from "@/consts/urlParams";
import { useAnalytics } from "@/hooks/useAnalytics";
import { events } from "@/types/analytics";
import { routing } from "@/utils/routing";

interface TemplateCtaLinkProps {
  /** Document template slug, or "index" on the /templates listing. */
  template: string;
  /** Where the CTA sits on the page, to compare placements. */
  placement: "hero" | "example" | "footer";
  /** Prefills the home page prompt (the hero reads it on mount). */
  prompt?: string;
  className?: string;
  children: ReactNode;
}

// Sends the visitor into the existing create-project flow: the home hero
// focuses its prompt on ?tryIt=true, and the signup modal takes over on submit.
export const TemplateCtaLink = ({
  template,
  placement,
  prompt,
  className,
  children,
}: TemplateCtaLinkProps) => {
  const { captureEvent } = useAnalytics();

  const href = routing.home({
    tryIt: "true",
    ...(prompt ? { [PROJECT_DESCRIPTION_PARAM]: prompt } : {}),
  });

  const handleClick = () => {
    captureEvent(events.TRY_IT_CLICKED, {
      surface: "template_page",
      template,
      placement,
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};
