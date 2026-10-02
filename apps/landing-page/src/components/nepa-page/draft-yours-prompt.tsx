"use client";

import { useSearchParams } from "next/navigation";

import { ProjectPromptInput } from "@/components/shared/project-prompt-input";
import { PROJECT_DESCRIPTION_PARAM } from "@/consts/urlParams";

interface DraftYoursPromptProps {
  defaultPrompt: string;
  quickStart: Record<string, string>;
}

// The existing prompt → title generation → SignupModal flow, prefilled with
// the page's example. A `projectDescription` URL param (the same one the home
// hero reads, e.g. from an ad) wins over the example.
export function DraftYoursPrompt({
  defaultPrompt,
  quickStart,
}: DraftYoursPromptProps) {
  const params = useSearchParams();
  const initialPrompt = params.get(PROJECT_DESCRIPTION_PARAM) || defaultPrompt;

  return (
    <ProjectPromptInput
      className="w-full"
      defaultValue={initialPrompt}
      quickStart={quickStart}
    />
  );
}
