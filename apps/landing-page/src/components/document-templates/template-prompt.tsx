"use client";

import { type ReactNode, useEffect } from "react";

import { SearchInput } from "@/components/home-v2/ui/search-input";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTemplatePromptStore } from "@/stores/template-prompt-store";
import { events } from "@/types/analytics";

interface TemplatePromptProps {
  placeholder: string;
  className?: string;
}

interface TemplatePromptButtonProps {
  /** Document template slug, sent with the event. */
  template: string;
  className?: string;
  children: ReactNode;
}

interface TemplateCtaButtonProps extends TemplatePromptButtonProps {
  /** Where the CTA sits on the page, to compare placements. */
  placement: "hero" | "footer";
}

interface TemplateExampleButtonProps extends TemplatePromptButtonProps {
  prompt: string;
}

// SearchInput renders its composer under this id (the home hero focuses it
// the same way).
const PROMPT_CONTAINER_ID = "project-prompt-input";

const focusPrompt = () => {
  const container = document.getElementById(PROMPT_CONTAINER_ID);
  const textarea = container?.querySelector("textarea");
  if (!container || !textarea) {
    return;
  }

  container.scrollIntoView({ behavior: "smooth", block: "center" });
  textarea.focus({ preventScroll: true });
  // Caret at the end, after React has flushed a value set this tick.
  requestAnimationFrame(() => {
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  });
};

/**
 * The home page's project prompt, on the template page itself: submitting
 * opens the same signup modal (signup_started) without a detour through home.
 */
export const TemplatePrompt = ({
  placeholder,
  className,
}: TemplatePromptProps) => {
  const prompt = useTemplatePromptStore((state) => state.prompt);
  const setPrompt = useTemplatePromptStore((state) => state.setPrompt);

  // Don't carry a half-typed prompt over to the next template page.
  useEffect(() => {
    return () => setPrompt("");
  }, [setPrompt]);

  return (
    <SearchInput
      value={prompt}
      onValueChange={setPrompt}
      placeholder={placeholder}
      className={className}
    />
  );
};

/** Primary CTA away from the prompt: tracks the click, then focuses it. */
export const TemplateCtaButton = ({
  template,
  placement,
  className,
  children,
}: TemplateCtaButtonProps) => {
  const { captureEvent } = useAnalytics();

  const handleClick = () => {
    captureEvent(events.TRY_IT_CLICKED, {
      surface: "template_page",
      template,
      placement,
    });
    focusPrompt();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

/** Loads the page's example description into the prompt, like a hero pill. */
export const TemplateExampleButton = ({
  template,
  prompt,
  className,
  children,
}: TemplateExampleButtonProps) => {
  const { captureEvent } = useAnalytics();
  const setPrompt = useTemplatePromptStore((state) => state.setPrompt);

  const handleClick = () => {
    captureEvent(events.QUICK_START_SELECTED, {
      surface: "template_page",
      template,
    });
    setPrompt(prompt);
    focusPrompt();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
