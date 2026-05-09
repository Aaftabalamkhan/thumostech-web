import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(232,84,42,0.18),transparent_40%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 space-y-4 text-center">
          <p className="font-label uppercase tracking-[0.3rem] text-sm font-bold text-primary">Services</p>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Complete security services for modern digital operations.</h1>
          <p className="max-w-3xl mx-auto text-on-surface-variant text-base leading-7">
            Explore each service area in depth and jump straight to the capability that matters most for your business.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-outline-variant/70 bg-surface-container-low p-6">
            <p className="font-headline text-lg font-bold text-on-surface mb-4">Jump to service</p>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block rounded-2xl border border-outline-variant/70 bg-surface px-4 py-3 text-sm text-on-surface-variant transition hover:border-primary/40 hover:bg-surface-variant"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </aside>

          <div className="space-y-10">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-[2rem] border border-outline-variant/70 bg-surface-container-low p-8 shadow-[0_24px_90px_rgba(0,0,0,0.12)] transition hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-headline text-2xl font-bold text-on-surface">{service.title}</p>
                    <p className="mt-2 text-on-surface-variant text-sm leading-6 max-w-2xl">{service.description}</p>
                  </div>
                  <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-semibold">
                    {service.features.length} focus areas
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-outline-variant/70 bg-surface p-4">
                      <p className="font-semibold text-on-surface">{feature}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
