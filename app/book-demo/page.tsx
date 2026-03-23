import type { Metadata } from "next";
import BookDemoForm from "@/components/BookDemoForm";

export const metadata: Metadata = {
  title: "Thumos Tech | Let's Connect",
};

export default function BookDemoPage() {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14 space-y-5">
            <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
              Let&apos;s Connect
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface">
              Schedule a focused conversation with the Thumos team.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Tell us what you&apos;re securing, where the pressure points are, and what kind of
              support you need. We&apos;ll come back with the right next step.
            </p>
          </div>
          <BookDemoForm />
        </div>
      </section>
    </div>
  );
}
