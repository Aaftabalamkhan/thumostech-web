import Image from "next/image";
import ServicesCarousel from "@/components/ServicesCarousel";
import CustomersCarousel from "@/components/CustomersCarousel";
import BookDemoForm from "@/components/BookDemoForm";
import AlliancesSection from "@/components/AlliancesSection";

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
        <div className="absolute inset-x-[10%] top-[16%] h-40 bg-gradient-to-r from-transparent via-primary/38 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-x-[8%] top-[56%] h-48 bg-gradient-to-r from-transparent via-secondary/28 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full opacity-85" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path d="M-100 600 C 200 500 400 700 800 550 S 1200 400 1600 500" stroke="url(#pageGradient1)" strokeWidth="2.5" fill="none" className="animate-ribbon" />
            <path d="M-100 400 C 300 300 600 500 900 350 S 1300 200 1700 300" stroke="url(#pageGradient2)" strokeWidth="1.5" fill="none" className="animate-ribbon" style={{ animationDelay: "-15s" }} />
            <path d="M-100 800 C 400 700 800 900 1200 750 S 1600 600 2000 700" stroke="url(#pageGradient1)" strokeWidth="1.5" fill="none" className="animate-ribbon" style={{ animationDelay: "-25s" }} />
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
            </defs>
          </svg>
        </div>
        <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/4 to-black/34"></div>
      </div>
      <div className="relative z-10">
      {/* ─── Hero Section ─── */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent"></div>
          <div className="absolute inset-x-[14%] top-[18%] h-48 bg-gradient-to-r from-transparent via-white/4 to-transparent blur-3xl"></div>

          {/* Floating Tech Tags */}
          <div className="absolute top-1/4 left-[8%] animate-float opacity-100 pointer-events-none hidden sm:block">
            <div className="px-4 py-2 rounded-full border border-primary/55 bg-primary/18 text-[10px] font-bold text-primary tracking-widest uppercase shadow-[0_0_36px_rgba(232,84,42,0.28)] backdrop-blur-sm">Protection at Every Layer</div>
          </div>
          <div className="absolute bottom-1/3 right-[8%] animate-float-delayed opacity-100 pointer-events-none hidden sm:block">
            <div className="px-4 py-2 rounded-full border border-secondary/55 bg-secondary/18 text-[10px] font-bold text-secondary tracking-widest uppercase shadow-[0_0_36px_rgba(242,122,80,0.28)] backdrop-blur-sm">Security That Scales</div>
          </div>
          <div className="absolute right-[18%] top-[22%] animate-float opacity-100 pointer-events-none hidden lg:block">
            <div className="px-4 py-2 rounded-full border border-primary/45 bg-black/30 text-[10px] font-bold text-primary tracking-widest uppercase shadow-[0_0_30px_rgba(232,84,42,0.24)] backdrop-blur-sm">Next-Gen Security Stack</div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-surface-container-low border border-primary/20 hero-reveal">
              <span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
              <span className="font-label uppercase tracking-[0.15rem] text-[10px] font-bold text-primary">
                Best in Class Security Services Activated
              </span>
            </div>
            <div className="hero-logo-frame hero-reveal hero-reveal-delay-1 px-6 py-4 md:px-10 md:py-6">
              <Image
                src="/logo.png"
                alt="Thumos Tech"
                width={640}
                height={180}
                className="hero-logo-image w-full max-w-lg md:max-w-2xl mx-auto h-auto"
                priority
              />
            </div>
            <p className="text-white text-[1.15rem] md:text-[1.4rem] max-w-xl leading-relaxed hero-reveal hero-reveal-delay-2">
              From Exposed to Unbreakable
              <br />
              Cybersecurity Services for Modern Enterprises.
            </p>
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
      <section id="services" className="relative py-32">
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
      </section>

      {/* ─── Book Demo ─── */}
      <AlliancesSection />

      <section id="book-demo" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <BookDemoForm className="bg-zinc-900/90" />
        </div>
      </section>

      {/* ─── Thumos Edge ─── */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-5xl space-y-12">
            <div className="space-y-4">
              <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
                The Thumos Edge
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">
                Elite Protection for Modern Enterprises
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                Security is not a product; it&apos;s a constant state of vigilance. Thumos Tech brings a
                military-grade mindset to corporate digital assets.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                <h4 className="font-headline font-bold text-lg">Verified Protocols</h4>
                <p className="text-sm text-on-surface-variant">
                  Every system is audited against global ISO and SOC2 standards.
                </p>
              </div>
              <div className="space-y-3 p-4 border-l border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                <h4 className="font-headline font-bold text-lg">Rapid Response</h4>
                <p className="text-sm text-on-surface-variant">
                  Incident mitigation within seconds, not minutes or hours.
                </p>
              </div>
              <div className="space-y-3 p-4 border-l border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                <h4 className="font-headline font-bold text-lg">Deep Visibility</h4>
                <p className="text-sm text-on-surface-variant">
                  Real-time mapping of every packet and connection in your network.
                </p>
              </div>
              <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
                <h4 className="font-headline font-bold text-lg">Future Proof</h4>
                <p className="text-sm text-on-surface-variant">
                  Quantum-resistant encryption layers for long-term data safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
