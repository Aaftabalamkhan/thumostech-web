import Link from "next/link";

export default function SecurityAuditPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <p className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Resources</p>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
          Security Audit
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Our security audit service reviews your architecture, controls, and operating posture across
          people, process, and technology. We identify high-impact risks and provide an actionable
          remediation roadmap.
        </p>
        <div className="rounded-2xl border border-outline-variant/70 bg-surface p-6">
          <p className="text-on-surface font-semibold mb-2">Need a tailored audit scope?</p>
          <p className="text-on-surface-variant">
            Share your current environment and timelines, and our team will propose an assessment plan.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/book-demo"
            className="bg-primary text-black px-6 py-3 rounded font-headline font-bold uppercase tracking-widest"
          >
            Request Audit
          </Link>
          <Link
            href="/resources/documentation"
            className="border border-outline-variant px-6 py-3 rounded font-headline font-bold uppercase tracking-widest text-primary hover:bg-primary/5"
          >
            View Documentation
          </Link>
        </div>
      </section>
    </div>
  );
}
