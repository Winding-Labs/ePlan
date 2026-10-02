import {
  ArrowUp,
  ChevronDown,
  Download,
  Keyboard,
  MoreVertical,
  Paperclip,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { Fragment } from "react";

import { HOME_DRAFT_MOCK } from "@/consts/draft-mocks";
import type { DraftMock } from "@/consts/guides/types";
import { type AppPath, AppWindow } from "./app-window";
import { DocAction, Insert, Reveal } from "./showcase-ui";

// ---------------------------------------------------------------------------
// Slide 2 — Draft NEPA documents (TipTap / MUI document editor)
// ---------------------------------------------------------------------------

const DEFAULT_ACTIONS = [
  "📍 Add location details",
  "👤 Add the signer's name",
  "✏️ Make other edits first",
];

const INSERT_PATTERN = /(\[INSERT:[^\]]*\])/;

// Renders `[INSERT: …]` spans as the highlighted placeholders ePlan leaves for
// every fact it could not confirm.
function WithInserts({ text }: { text: string }) {
  return (
    <>
      {text.split(INSERT_PATTERN).map((part, index) =>
        INSERT_PATTERN.test(part) ? (
          <Insert key={`${index}-${part}`}>{part}</Insert>
        ) : (
          <Fragment key={`${index}-${part}`}>{part}</Fragment>
        ),
      )}
    </>
  );
}

// Breadcrumb org / office from the mock's letterhead: the agency's own line
// (the second, after a department) and the office after the last dash.
const appPathOf = (mock: DraftMock): AppPath => {
  const [first, second, third] = mock.letterhead.left;
  return {
    org: second ?? first,
    office: (third ?? first).split(" — ").pop() ?? first,
    project: mock.project,
  };
};

// The agent's message, with the document title in bold where it appears.
function Summary({ mock }: { mock: DraftMock }) {
  const [before, ...rest] = mock.summary.split(mock.documentTitle);
  if (rest.length === 0) {
    return <>{mock.summary}</>;
  }
  return (
    <>
      {before}
      <span className="font-semibold">{mock.documentTitle}</span>
      {rest.join(mock.documentTitle)}
    </>
  );
}

export function DraftSlide({
  reduce,
  mock = HOME_DRAFT_MOCK,
}: {
  reduce: boolean;
  mock?: DraftMock;
}) {
  const actions = mock.actions ?? DEFAULT_ACTIONS;
  return (
    <AppWindow
      crumb="Chat"
      path={mock === HOME_DRAFT_MOCK ? undefined : appPathOf(mock)}
      active="chat"
      contentClassName="bg-white"
    >
      <div className="flex h-full">
        {/* Chat rail */}
        <div className="hidden w-[38%] max-w-[340px] shrink-0 flex-col border-r border-egray-100 bg-white md:flex">
          <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-egray-100 px-4">
            <span className="truncate font-heading text-[14px] font-bold text-neutral-black">
              {mock.project}
            </span>
            <span className="flex shrink-0 items-center gap-1 rounded-md border border-egray-200 px-2 py-1 font-heading text-[10px] font-medium text-egray-600">
              <Sparkles className="size-3 text-brand-800" />
              Research
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden px-4 py-3">
            <div className="flex gap-2.5">
              <Reveal index={0} reduce={reduce}>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-egray-100">
                  <Sparkles className="size-3.5 text-brand-800" />
                </span>
              </Reveal>
              <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                <Reveal index={0} reduce={reduce}>
                  <p className="font-inter text-[12.5px] leading-[19px] text-neutral-black">
                    <Summary mock={mock} />
                  </p>
                </Reveal>
                <Reveal index={1} reduce={reduce}>
                  <ul className="flex flex-col gap-0.5">
                    {mock.missing.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-1.5 font-inter text-[12px] leading-[18px] text-egray-700"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-egray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal index={2} reduce={reduce}>
                  <p className="font-inter text-[12.5px] leading-[19px] text-egray-700">
                    Would you like to fill in any of these now, or should I
                    proceed with the suggested values?
                  </p>
                </Reveal>
                <Reveal
                  index={3}
                  reduce={reduce}
                  className="flex flex-wrap gap-1.5"
                >
                  {actions.map((action) => (
                    <span
                      key={action}
                      className="rounded-md border border-egray-200 bg-white px-2 py-1 font-inter text-[11px] font-medium text-neutral-black"
                    >
                      {action}
                    </span>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-egray-100 px-4 py-3">
            <div className="relative flex items-center rounded-xl border border-egray-200 bg-white py-2.5 pl-3.5 pr-16">
              <span className="font-inter text-[12.5px] text-egray-400">
                Send a message…
              </span>
              <span className="absolute bottom-1.5 right-9 flex size-7 items-center justify-center rounded-md text-egray-500">
                <Paperclip className="size-3.5" />
              </span>
              <span className="absolute bottom-1.5 right-2 flex size-7 items-center justify-center rounded-md bg-neutral-black">
                <ArrowUp className="size-4 text-white" strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </div>

        {/* Document artifact preview */}
        <div className="flex min-w-0 flex-1 flex-col bg-white">
          {/* Preview header */}
          <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-egray-100 px-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md text-egray-500 hover:bg-egray-75">
                <X className="size-4" />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-heading text-[14px] font-medium text-neutral-black">
                  {mock.documentTitle}
                </span>
                <span className="font-inter text-[11px] text-egray-500">
                  Updated less than a minute ago
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <DocAction
                className="hidden lg:flex"
                icon={<Keyboard className="size-3.5 text-egray-500" />}
                label="Prompt"
              />
              <DocAction
                className="hidden sm:flex"
                icon={<MoreVertical className="size-3.5 text-egray-500" />}
              />
              <DocAction
                icon={<Download className="size-3.5 text-egray-500" />}
                label="Download"
                trailing={<ChevronDown className="size-3 text-egray-400" />}
              />
              <DocAction
                className="hidden sm:flex"
                icon={<Users className="size-3.5 text-egray-500" />}
                label="Request signatures"
              />
            </div>
          </div>

          {/* Letter body — on phones the letter runs past the window, so it
              fades out at the bottom edge like a page continuing below. */}
          <div className="min-h-0 flex-1 overflow-hidden px-6 py-6 max-sm:[mask-image:linear-gradient(to_bottom,black_75%,transparent)] sm:px-10">
            <div className="mx-auto flex max-w-[520px] flex-col gap-3.5">
              {/* Agency letterhead */}
              <Reveal index={0} reduce={reduce}>
                <div className="flex overflow-hidden rounded-sm border border-egray-300 font-inter text-[9.5px] leading-[14px] text-egray-700">
                  <div className="flex-1 border-r border-egray-300 p-2.5">
                    {mock.letterhead.left.map((line, index) => (
                      <p
                        key={line}
                        className={
                          index === 1 ? "font-semibold text-neutral-black" : ""
                        }
                      >
                        <WithInserts text={line} />
                      </p>
                    ))}
                  </div>
                  <div className="w-[42%] p-2.5">
                    {mock.letterhead.right.map((line, index) => (
                      <p key={line} className={index > 0 ? "mt-0.5" : ""}>
                        <WithInserts text={line} />
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal index={1} reduce={reduce}>
                <div className="flex flex-col items-end gap-0.5 font-inter text-[10.5px] text-egray-700">
                  {mock.meta.map((line) => (
                    <p key={line}>
                      <WithInserts text={line} />
                    </p>
                  ))}
                </div>
              </Reveal>

              {mock.salutation && (
                <Reveal index={2} reduce={reduce}>
                  <p className="font-inter text-[11.5px] font-medium text-neutral-black">
                    {mock.salutation}
                  </p>
                </Reveal>
              )}

              {mock.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} index={3 + index} reduce={reduce}>
                  <p className="font-inter text-[11.5px] leading-[19px] text-egray-700">
                    <WithInserts text={paragraph} />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
