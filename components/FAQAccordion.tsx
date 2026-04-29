"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/content";

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (slug: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(slug)) {
      newOpenItems.delete(slug);
    } else {
      newOpenItems.add(slug);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {faqs.slice(0, 4).map((faq) => {
        const isOpen = openItems.has(faq.slug);
        return (
          <div
            key={faq.slug}
            className="rounded-3xl border border-white/10 bg-surface-container-low overflow-hidden transition-all hover:border-primary/40"
          >
            <button
              onClick={() => toggleItem(faq.slug)}
              className="w-full p-6 text-left flex items-center justify-between group hover:bg-white/5 transition-colors"
            >
              <p className="font-headline text-xl font-bold text-on-surface pr-4">
                {faq.question}
              </p>
              <div className="flex-shrink-0">
                <svg
                  className={`w-6 h-6 text-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-on-surface-variant text-base leading-7">
                  {faq.answer}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link
                    href={`/faq#${faq.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    Read full answer
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
