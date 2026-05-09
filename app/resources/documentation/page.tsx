import Link from "next/link";

export default function DocumentationPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <p className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Resources</p>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Documentation</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Access implementation notes, operating guidance, and onboarding documentation for services and
          solutions delivered by Thumos Tech.
        </p>
        <div className="rounded-2xl border border-outline-variant/70 bg-surface p-6">
          <p className="text-on-surface font-semibold mb-2">Need integration support?</p>
          <p className="text-on-surface-variant">
            Our team can guide you through onboarding, architecture validation, and rollout planning.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/book-demo"
            className="bg-primary text-black px-6 py-3 rounded font-headline font-bold uppercase tracking-widest"
          >
            Contact Engineering Team
          </Link>
          <Link
            href="/resources/security-audit"
            className="border border-outline-variant px-6 py-3 rounded font-headline font-bold uppercase tracking-widest text-primary hover:bg-primary/5"
          >
            Security Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
