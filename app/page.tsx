import Link from "next/link";
import ServicesCarousel from "@/components/ServicesCarousel";
import CustomersCarousel from "@/components/CustomersCarousel";
import BookDemoForm from "@/components/BookDemoForm";
import AlliancesSection from "@/components/AlliancesSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-100"></div>
        <div className="absolute top-[-6%] right-[-4%] w-[760px] h-[760px] bg-primary/38 rounded-full blur-[120px] animate-float opacity-100 mix-blend-screen"></div>
        <div className="absolute top-[24%] left-[-6%] w-[600px] h-[600px] bg-secondary/34 rounded-full blur-[110px] animate-float-delayed opacity-100 mix-blend-screen"></div>
        <div className="absolute top-[48%] left-[10%] w-[460px] h-[460px] bg-primary/28 rounded-full blur-[95px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute top-[58%] right-[8%] w-[400px] h-[400px] bg-secondary/24 rounded-full blur-[100px] animate-float-delayed opacity-90 mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[18%] w-[560px] h-[560px] bg-primary/24 rounded-full blur-[120px] animate-float opacity-95 mix-blend-screen"></div>
        <div className="absolute top-[14%] left-[42%] w-[320px] h-[320px] bg-primary/18 rounded-full blur-[80px] animate-float opacity-80 mix-blend-screen md:w-[440px] md:h-[440px]"></div>
        <div className="absolute bottom-[18%] right-[-8%] w-[320px] h-[320px] bg-secondary/22 rounded-full blur-[90px] animate-pulse-slow opacity-85 mix-blend-screen md:w-[520px] md:h-[520px]"></div>
        <div className="absolute inset-x-[10%] top-[16%] h-40 bg-gradient-to-r from-transparent via-primary/38 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-x-[8%] top-[56%] h-48 bg-gradient-to-r from-transparent via-secondary/28 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-x-[4%] top-[34%] h-32 bg-gradient-to-r from-transparent via-primary/24 to-transparent blur-2xl animate-pulse-slow"></div>
        <div className="absolute inset-x-[18%] bottom-[12%] h-36 bg-gradient-to-r from-transparent via-secondary/24 to-transparent blur-2xl animate-pulse-slow"></div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full opacity-85" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path d="M-100 600 C 200 500 400 700 800 550 S 1200 400 1600 500" stroke="url(#pageGradient1)" strokeWidth="2.5" fill="none" className="animate-ribbon" />
            <path d="M-100 400 C 300 300 600 500 900 350 S 1300 200 1700 300" stroke="url(#pageGradient2)" strokeWidth="1.5" fill="none" className="animate-ribbon" style={{ animationDelay: "-15s" }} />
            <path d="M-100 800 C 400 700 800 900 1200 750 S 1600 600 2000 700" stroke="url(#pageGradient1)" strokeWidth="1.5" fill="none" className="animate-ribbon" style={{ animationDelay: "-25s" }} />
            <path d="M-180 240 C 180 170 420 320 780 250 S 1250 130 1700 210" stroke="url(#pageGradient2)" strokeWidth="2" fill="none" className="animate-ribbon" style={{ animationDelay: "-8s" }} />
            <path d="M-120 520 C 120 420 360 560 680 500 S 1100 390 1520 450" stroke="url(#pageGradient3)" strokeWidth="1.25" fill="none" className="animate-ribbon" style={{ animationDelay: "-19s" }} />
            <path d="M-180 720 C 180 610 460 770 860 680 S 1340 560 1760 610" stroke="url(#pageGradient2)" strokeWidth="1.75" fill="none" className="animate-ribbon" style={{ animationDelay: "-31s" }} />
            <path d="M-120 110 C 240 70 560 170 920 120 S 1380 50 1750 100" stroke="url(#pageGradient3)" strokeWidth="1.1" fill="none" className="animate-ribbon" style={{ animationDelay: "-4s" }} />
            <defs>
              <linearGradient id="pageGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#E8542A" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="pageGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#F27A50" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="pageGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="35%" stopColor="#F59B72" />
                <stop offset="65%" stopColor="#E8542A" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/4 to-black/34"></div>
      </div>
      <div className="relative z-10">
      {/* ─── Hero Section ─── */}
      <header className="relative min-h-screen flex items-center pt-12 md:pt-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent"></div>
          <div className="absolute inset-x-[14%] top-[18%] h-48 bg-gradient-to-r from-transparent via-white/4 to-transparent blur-3xl"></div>

          {/* Floating Tech Tags */}
          <div className="absolute top-[18%] left-[4%] animate-float opacity-100 pointer-events-none">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/55 bg-primary/18 text-[9px] md:text-[10px] font-bold text-primary tracking-[0.22em] uppercase shadow-[0_0_36px_rgba(232,84,42,0.28)] backdrop-blur-sm">Protection at Every Layer</div>
          </div>
          <div className="absolute bottom-[26%] right-[3%] animate-float-delayed opacity-100 pointer-events-none">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-secondary/55 bg-secondary/18 text-[9px] md:text-[10px] font-bold text-secondary tracking-[0.22em] uppercase shadow-[0_0_36px_rgba(242,122,80,0.28)] backdrop-blur-sm">Security That Scales</div>
          </div>
          <div className="absolute left-[5%] top-[47%] animate-float opacity-100 pointer-events-none md:left-[7%] md:top-[46%]">
            <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/45 bg-black/35 text-[9px] md:text-[10px] font-bold text-primary tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(232,84,42,0.24)] backdrop-blur-sm">24/7 Threat Readiness</div>
          </div>
          <div className="absolute right-[18%] top-[22%] animate-float opacity-100 pointer-events-none hidden lg:block">
            <div className="px-4 py-2 rounded-full border border-primary/45 bg-black/30 text-[10px] font-bold text-primary tracking-widest uppercase shadow-[0_0_30px_rgba(232,84,42,0.24)] backdrop-blur-sm">Next-Gen Security Stack</div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/8"></div>
          <div className="absolute inset-x-[-8%] bottom-[-10rem] h-72 bg-[radial-gradient(ellipse_at_center,rgba(232,84,42,0.12),rgba(0,0,0,0.04)_42%,transparent_76%)] blur-3xl"></div>
          <div className="absolute inset-x-0 bottom-[-7rem] h-64 bg-gradient-to-b from-transparent via-black/10 to-black/20 blur-[90px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="mt-8 md:mt-16 inline-flex items-center gap-3 px-6 py-4 rounded bg-surface-container-low border border-primary/20 hero-reveal">
              <span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
              <span className="font-label uppercase tracking-[0.15rem] text-[10px] font-bold text-primary">
                Best in Class Security Services Activated
              </span>
            </div>
            <div className="hero-punchline-wrap hero-reveal hero-reveal-delay-1 px-2 mb-4 md:mb-6">
              <h1 className="hero-punchline text-[2.85rem] leading-[0.9] sm:text-[4.25rem] md:text-[5.75rem] lg:text-[6.6rem] font-black uppercase tracking-[-0.06em]">
                #1 cybersecurity partner
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4 hero-reveal hero-reveal-delay-3">
              <a
                href="#services"
                className="bg-primary text-black px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all active:scale-95"
              >
                Explore Services
              </a>
              <a
                href="#alliances"
                className="border border-outline-variant text-primary px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/5 transition-all group"
              >
                View Alliances
                <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Services Carousel ─── */}
      <section id="services" className="scroll-mt-20 relative mt-16 pt-8 pb-32 md:mt-24 md:pt-12 md:scroll-mt-24">
        <div className="pointer-events-none absolute inset-x-[-10%] top-[-7rem] h-72 bg-[radial-gradient(ellipse_at_center,rgba(232,84,42,0.1),rgba(0,0,0,0.06)_46%,transparent_78%)] blur-3xl"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/10 via-black/6 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-20 space-y-4">
            <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
              Operational Capabilities
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
              Core Security Services
            </h2>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* ─── Trusted Customers ─── */}
      <section className="relative py-16">
        {/* Visual divider */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <div className="relative flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/35 to-transparent"></div>
            <div className="absolute h-2 w-24 rounded-full bg-primary/30 blur-md"></div>
            <div className="absolute h-1 w-10 rounded-full bg-primary/70"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center font-label uppercase tracking-[0.25rem] text-sm md:text-base font-extrabold text-primary mb-10">
            Secured Global Enterprises, Our Valued Customers
          </p>
        </div>
        <CustomersCarousel />
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
          <div className="relative flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/35 to-transparent"></div>
            <div className="absolute h-2 w-24 rounded-full bg-primary/30 blur-md"></div>
            <div className="absolute h-1 w-10 rounded-full bg-primary/70"></div>
          </div>
        </div>
      </section>

      {/* ─── Book Demo ─── */}
      <AlliancesSection />

      <section id="book-demo" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BookDemoForm className="bg-zinc-900/90" />
        </div>
      </section>

      {/* ─── FAQ Preview ─── */}
      <section id="faq" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-5xl space-y-12">
            <div className="space-y-4">
              <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
                Frequently Asked Questions
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">
                Answers that help you move faster with confidence.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                Explore our most common customer questions and jump to the exact answer on the dedicated FAQ page.
              </p>
            </div>
            <FAQAccordion />
            <div className="pt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-3 text-primary font-semibold uppercase tracking-[0.18rem] hover:text-secondary"
              >
                Read all FAQs
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
