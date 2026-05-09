import Link from "next/link";
import { faqs } from "@/lib/content";

export default function FAQPage() {
  return (
    <div id="top" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(242,122,80,0.12),transparent_40%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 space-y-4 text-center">
          <p className="font-label uppercase tracking-[0.3rem] text-sm font-bold text-primary">FAQ</p>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Find answers to common questions fast.</h1>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-base leading-7">
            Each answer is organized by topic so you can quickly locate the information you need.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-outline-variant/70 bg-surface-container-low p-6">
            <p className="font-headline text-lg font-bold text-on-surface mb-4">Quick links</p>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <Link
                  key={faq.slug}
                  href={`#${faq.slug}`}
                  className="block rounded-2xl border border-outline-variant/70 bg-surface px-4 py-3 text-sm text-on-surface-variant transition hover:border-primary/40 hover:bg-surface-variant"
                >
                  {faq.question}
                </Link>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <section key={faq.slug} id={faq.slug} className="rounded-[2rem] border border-outline-variant/70 bg-surface-container-low p-8 shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
                <h2 className="font-headline text-2xl font-bold text-on-surface">{faq.question}</h2>
                <p className="mt-4 text-on-surface-variant text-base leading-7">{faq.answer}</p>
                <div className="mt-6">
                  <Link href="#top" className="text-primary font-semibold hover:text-secondary">
                    Back to top
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
