import { Plus } from "lucide-react";

import type { DocumentTemplateFaq } from "@/types/document-templates";

interface TemplateFaqProps {
  faqs: DocumentTemplateFaq[];
}

// Native <details> accordion, styled like the home FAQ: every answer is in the
// server HTML (FAQPage structured data must match visible content) and it
// works without JavaScript.
export const TemplateFaq = ({ faqs }: TemplateFaqProps) => {
  return (
    <ul className="flex w-full flex-col gap-3">
      {faqs.map((faq, index) => (
        <li key={faq.question}>
          <details
            open={index === 0}
            className="glass-card group rounded-2xl px-5 transition-colors duration-200 ease-[ease] open:bg-white/70 hover:bg-white/70 sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-inter text-[15px] font-medium leading-[22px] text-egray-900 md:text-[16px] md:leading-[24px] [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <span className="flex size-[26px] shrink-0 items-center justify-center rounded-lg bg-white/80 text-brand-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(15,23,42,0.06)]">
                <Plus
                  aria-hidden
                  className="size-3.5 transition-[rotate] duration-200 ease-out-expo group-open:rotate-45 motion-reduce:transition-none"
                  strokeWidth={2.25}
                />
              </span>
            </summary>
            <p className="max-w-[62ch] pb-5 font-inter text-[14px] leading-[22px] text-egray-700 md:text-[15px] md:leading-[24px]">
              {faq.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
};
