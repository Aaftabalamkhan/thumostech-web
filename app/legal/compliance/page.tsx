import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <p className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Legal</p>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Compliance</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Thumos Tech supports compliance-aligned security operations across audit readiness, governance,
          and control implementation programs.
        </p>
        <div className="rounded-2xl border border-outline-variant/70 bg-surface p-6 text-on-surface-variant">
          Typical engagement areas include risk assessment, access governance, log and monitoring
          controls, and policy-to-implementation alignment.
        </div>
        <Link
          href="/book-demo"
          className="inline-flex bg-primary text-black px-6 py-3 rounded font-headline font-bold uppercase tracking-widest"
        >
          Talk to Compliance Team
        </Link>
      </section>
    </div>
  );
}
