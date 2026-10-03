"use client";

import { Suspense, useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  FileText,
  Flame,
  Landmark,
  type LucideIcon,
  Route,
  Scale,
  Sparkles,
  TreePine,
  Waves,
  Zap,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { QuickStartExample } from "@/consts/quick-start-options";
import { PROJECT_DESCRIPTION_PARAM } from "@/consts/urlParams";
import { cn } from "@/lib/utils";
import { FeatureShowcase } from "./feature-showcase";
import type { Tab } from "./feature-showcase/types";
import { PAGE_CONTAINER, PAGE_GUTTER } from "./ui/layout";
import { EASE_OUT } from "./ui/motion";
import { QuickStartPills } from "./ui/quick-start-pills";
import { SearchInput } from "./ui/search-input";
import { EYEBROW_CLASS, EYEBROW_ICON_CLASS } from "./ui/section-header";
import { useTypewriterHeading } from "./ui/typewriter-heading";

// Icons are named, not passed as components, so a server page can hand the
// hero its content as plain data.
const HERO_ICONS = {
  sparkles: Sparkles,
  route: Route,
  tree: TreePine,
  flame: Flame,
  zap: Zap,
  file: FileText,
  scale: Scale,
  landmark: Landmark,
  waves: Waves,
  building: Building2,
} satisfies Record<string, LucideIcon>;

export type HeroIconName = keyof typeof HERO_ICONS;

export interface HeroSlide {
  eyebrow: string;
  /** Typed after the prefix in the brand accent. */
  heading: string;
  icon?: HeroIconName;
}

/** Event properties added to the hero's prompt and pill events. */
export type HeroAnalytics = Record<string, string>;

export interface HeroContent {
  /** Words before the typed heading, e.g. "Accelerate your" or "Draft a". */
  prefix: string;
  /** Stable accessible name for the heading (the typewriter mutates). */
  label: string;
  slides: HeroSlide[];
  /** Guide pages put their H1 in the text header and render this as an h2. */
  headingLevel?: "h1" | "h2";
  placeholder?: string;
  /** Quick-start pills; defaults to the home examples. */
  examples?: QuickStartExample[];
  /** Feature showcase tabs; defaults to the home tabs. */
  tabs?: Tab[];
  analytics?: HeroAnalytics;
}

export const HOME_HERO: HeroContent = {
  prefix: "Accelerate your",
  label: "Accelerate your environmental planning",
  headingLevel: "h1",
  slides: [
    {
      eyebrow: "THE AI-NATIVE NEPA WORKSPACE",
      heading: "environmental planning",
      icon: "sparkles",
    },
    {
      eyebrow: "PUBLIC LANDS INFRASTRUCTURE",
      heading: "road repairs",
      icon: "route",
    },
    { eyebrow: "MODERN FOREST MANAGEMENT", heading: "forestry", icon: "tree" },
    {
      eyebrow: "AI ENVIRONMENTAL PLANNING",
      heading: "environmental planning",
      icon: "flame",
    },
    {
      eyebrow: "CRITICAL ENERGY PROJECTS",
      heading: "nuclear power plants",
      icon: "zap",
    },
  ],
};

const CURSOR_BLINK_RATE = 530;

// Showcase enters just after the pills (0.25s) in the hero sequence.
const SHOWCASE_REVEAL_DELAY = 0.35;

const SPARKLE_TRANSITION = {
  type: "spring",
  duration: 0.5,
  bounce: 0.2,
} as const;

const getPromptTextarea = () =>
  document.getElementById("project-prompt-input")?.querySelector("textarea");

const HERO_HEADING_CLASS =
  "font-heading text-[36px] font-normal leading-[1.15] tracking-[-2px] text-[#1A1A1A] md:text-[48px] md:tracking-[-2.8px] lg:text-[60px] lg:tracking-[-3.6px]";

interface HeroProps {
  content?: HeroContent;
}

export function Hero({ content = HOME_HERO }: HeroProps) {
  const { slides } = content;
  const HeadingTag = content.headingLevel ?? "h1";

  const headingWords = slides.map((slide) => slide.heading);
  // Sizing copies only need each distinct word once (keys must be unique).
  const uniqueHeadingWords = [...new Set(headingWords)];
  const { displayText, currentIndex } = useTypewriterHeading(headingWords);
  const prefersReducedMotion = useReducedMotion();

  const [promptValue, setPromptValue] = useState("");

  // Blinking cursor — static (always visible) under reduced motion.
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowCursor(true);
      return;
    }
    const interval = setInterval(
      () => setShowCursor((p) => !p),
      CURSOR_BLINK_RATE,
    );
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Track index changes for sparkle animation
  const [sparkleKey, setSparkleKey] = useState(0);
  useEffect(() => {
    setSparkleKey((k) => k + 1);
  }, [currentIndex]);

  // Focus the prompt with the caret at the end so Enter submits right away.
  // Selection is set on the next frame, after React has flushed the new value.
  const handleQuickStart = (prompt: string) => {
    setPromptValue(prompt);

    const textarea = getPromptTextarea();
    if (!textarea) {
      return;
    }

    textarea.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      textarea.setSelectionRange(prompt.length, prompt.length);
    });
  };

  const slide = slides[currentIndex];
  const EyebrowIcon = HERO_ICONS[slide.icon ?? "sparkles"];

  return (
    <section className={PAGE_GUTTER}>
      <Suspense fallback={null}>
        <HeroUrlParams onProjectDescription={setPromptValue} />
      </Suspense>
      {/* Bottom padding is shorter than SECTION_Y: the logo marquee's own
          padding and hairline complete the gap. */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            PAGE_CONTAINER,
            "flex flex-col items-center pb-10 pt-12 text-center sm:pb-12 sm:pt-16 lg:pb-16 lg:pt-[88px]",
          )}
        >
          <div className="hero-in [--hero-in-distance:30px]">
            <div className="flex flex-col items-center gap-[18px]">
              {/* Eyebrow — synced with heading index */}
              <div className="flex h-[28px] items-center justify-center">
                {/* initial={false}: the first eyebrow renders visible (it is
                    in the static HTML); only later rotations animate. */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={slide.eyebrow}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, transform: "translateY(6px)" }
                    }
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, transform: "translateY(-6px)" }
                    }
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                    className={EYEBROW_CLASS}
                  >
                    <EyebrowIcon className={EYEBROW_ICON_CLASS} />
                    {slide.eyebrow}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* H1 — no fixed min-height: every heading word is laid out
                  invisibly in the same grid cell as the heading, so the block
                  always reserves the longest wrap at any width. The sizing
                  copies sit beside the heading, not in it: inside, crawlers
                  read every example run together as the page's heading. */}
              <div className="grid">
                <div
                  aria-hidden="true"
                  className={cn(
                    HERO_HEADING_CLASS,
                    "invisible col-start-1 row-start-1",
                  )}
                >
                  <span className="block">{content.prefix}</span>
                  <span className="grid">
                    {uniqueHeadingWords.map((word) => (
                      <span key={word} className="col-start-1 row-start-1">
                        <HeadingLine text={word} />
                      </span>
                    ))}
                  </span>
                </div>
                <HeadingTag
                  className={cn(HERO_HEADING_CLASS, "col-start-1 row-start-1")}
                >
                  {/* Stable accessible name — the typewriter below mutates
                      every few ms and would spam screen readers. */}
                  <span className="sr-only">{content.label}</span>
                  <span aria-hidden="true" className="block">
                    {content.prefix}
                  </span>
                  <span aria-hidden="true" className="block">
                    <HeadingLine
                      text={displayText}
                      sparkleKey={sparkleKey}
                      isCursorVisible={showCursor}
                      prefersReducedMotion={Boolean(prefersReducedMotion)}
                    />
                  </span>
                </HeadingTag>
              </div>
            </div>
          </div>

          {/* H1 → Input */}
          <div className="hero-in mt-[42px] w-full max-w-[686px] [--hero-in-distance:20px] [animation-delay:150ms]">
            <SearchInput
              value={promptValue}
              onValueChange={setPromptValue}
              placeholder={content.placeholder}
              eventProps={content.analytics}
            />
          </div>

          {/* Input → Pills — Embla carousel with ambient auto-scroll. Hover,
              focus, drag/swipe and the arrows all pause it, so a missed
              example is one gesture away instead of a full loop away. */}
          <div className="hero-in mt-[18px] w-full max-w-[686px] [--hero-in-distance:16px] [animation-delay:250ms]">
            <QuickStartPills
              onSelect={handleQuickStart}
              examples={content.examples}
              eventProps={content.analytics}
            />
          </div>

          {/* Pills → Product showcase. Joins the hero's entrance sequence
              right after the pills; `text-left` resets the hero's centered
              text for the app mockups inside. */}
          <div className="mt-10 w-full text-left sm:mt-12 lg:mt-16">
            <FeatureShowcase
              revealDelay={SHOWCASE_REVEAL_DELAY}
              tabs={content.tabs}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeadingLineProps {
  text: string;
  sparkleKey?: number;
  isCursorVisible?: boolean;
  prefersReducedMotion?: boolean;
}

interface HeroUrlParamsProps {
  onProjectDescription: (value: string) => void;
}

// Applies ?projectDescription (prefills the prompt) and ?tryIt (scrolls to and
// focuses it, then strips the param, staying on the current page). It renders
// nothing and sits in its own Suspense: useSearchParams on a prerendered page
// client-renders everything up to the nearest boundary, and a boundary around
// the whole hero kept the H1 and copy out of the HTML crawlers see.
const HeroUrlParams = ({ onProjectDescription }: HeroUrlParamsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    const projectDescription = params.get(PROJECT_DESCRIPTION_PARAM);
    if (projectDescription) {
      onProjectDescription(projectDescription);
    }
  }, [params, onProjectDescription]);

  useEffect(() => {
    if (!params.get("tryIt")) {
      return;
    }

    // The prompt, not the page top: on a guide the hero sits below the header.
    const prompt = getPromptTextarea();
    prompt?.scrollIntoView({ behavior: "smooth", block: "center" });
    prompt?.focus({ preventScroll: true });

    // Strip the param only after the smooth scroll has finished — an
    // immediate replace cancels the scroll animation.
    const timeout = setTimeout(() => {
      router.replace(pathname, { scroll: false });
    }, 600);
    return () => clearTimeout(timeout);
  }, [params, pathname, router]);

  return null;
};

// Sparkle + accent word + cursor. The invisible sizing copies render it
// static (no sparkleKey), so only the live line animates.
const HeadingLine = ({
  text,
  sparkleKey,
  isCursorVisible = true,
  prefersReducedMotion = false,
}: HeadingLineProps) => {
  const isLive = sparkleKey !== undefined;

  return (
    <>
      {/* Sparkle settles in on each word change — occasional marketing
          motion, so a gentle spring; off under reduced motion. */}
      <motion.span
        key={sparkleKey}
        initial={
          !isLive || prefersReducedMotion
            ? false
            : { transform: "scale(1.3) rotate(25deg)" }
        }
        animate={{ transform: "scale(1) rotate(0deg)" }}
        transition={SPARKLE_TRANSITION}
        className="mr-2 inline-flex align-middle text-brand-700 lg:mr-3"
      >
        <Sparkles className="size-[28px] md:size-[35px] lg:size-[42px]" />
      </motion.span>
      <span className="text-brand-700">
        {text}
        <span
          className={cn(
            "ml-[1px] inline-block h-[0.75em] w-[3px] bg-brand-700 transition-opacity duration-100",
            isCursorVisible ? "opacity-100" : "opacity-0",
          )}
        />
      </span>
    </>
  );
};
