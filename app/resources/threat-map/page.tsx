import Link from "next/link";

export default function ThreatMapPage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <p className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Resources</p>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Threat Map</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Our threat map provides a practical view of current attack paths and control priorities for
          enterprise environments. It helps security leaders align response, monitoring, and prevention.
        </p>
        <div className="rounded-2xl border border-outline-variant/70 bg-surface p-6">
          <p className="text-on-surface font-semibold mb-2">Want a domain-specific view?</p>
          <p className="text-on-surface-variant">
            We can map threats for your vertical, architecture, and compliance obligations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/book-demo"
            className="bg-primary text-black px-6 py-3 rounded font-headline font-bold uppercase tracking-widest"
          >
            Discuss Your Threat Map
          </Link>
          <Link
            href="/services"
            className="border border-outline-variant px-6 py-3 rounded font-headline font-bold uppercase tracking-widest text-primary hover:bg-primary/5"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
}
