import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Thumos Tech`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(232,84,42,0.18),transparent_40%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-12 space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="space-y-4">
            <p className="font-label uppercase tracking-[0.3rem] text-sm font-bold text-primary">{service.title}</p>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-white">{service.title}</h1>
            <p className="text-on-surface-variant text-lg leading-7 max-w-3xl">{service.description}</p>
          </div>
        </div>

        <div className="space-y-8">
          <section className="rounded-[2rem] border border-white/10 bg-surface-container-low p-8 shadow-[0_24px_90px_rgba(0,0,0,0.2)]">
            <h2 className="font-headline text-2xl font-bold text-white mb-6">Key Focus Areas</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{feature}</p>
                      <p className="text-on-surface-variant text-sm mt-1">
                        Comprehensive {feature.toLowerCase()} services tailored to your organization's specific security requirements and operational context.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-surface-container-low p-8 shadow-[0_24px_90px_rgba(0,0,0,0.2)]">
            <h2 className="font-headline text-2xl font-bold text-white mb-6">Why Choose Thumos Tech?</h2>
            <div className="space-y-4 text-on-surface-variant leading-7">
              <p>
                With years of experience in enterprise security, Thumos Tech delivers {service.title.toLowerCase()} that are not just compliant but operationally effective.
                Our approach combines deep technical expertise with practical implementation strategies that work in real-world environments.
              </p>
              <p>
                We understand that security is not a checkbox exercise—it's about enabling your business to operate confidently in an increasingly complex threat landscape.
                Our {service.title.toLowerCase()} are designed to provide immediate value while building long-term security resilience.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="font-headline text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-on-surface-variant mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how our {service.title.toLowerCase()} can strengthen your security posture and support your business objectives.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-secondary"
            >
              Book a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
