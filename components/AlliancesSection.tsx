"use client";

import { WheelEvent as ReactWheelEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

type AllianceProduct = {
  name: string;
  domain: string;
  line: string;
  proof: string;
  tone: string;
  deck: string;
  accent: string;
  logoSrc?: string;
  logoText?: string;
};

type AlliancePillar = {
  title: string;
  summary: string;
  products: AllianceProduct[];
};

const alliancePillars: AlliancePillar[] = [
  {
    title: "Application Security",
    summary: "Code, build, release, and governance controls for enterprise software teams.",
    products: [
      {
        name: "Checkmarx",
        domain: "checkmarx.com",
        line: "Platform for enterprises securing every stage of software delivery.",
        proof: "SAST, SCA, IaC, API, and cloud-native application risk in one operating layer.",
        tone: "from-[#ff8b38]/30 via-[#e8542a]/10 to-transparent",
        deck: "#0b1f4d",
        accent: "#32a7ff",
      },
      {
        name: "Snyk",
        domain: "snyk.io",
        line: "Developer-first security that keeps velocity high without losing control.",
        proof: "Open source, container, cloud, and code risk made visible inside engineering workflows.",
        tone: "from-[#7b61ff]/30 via-[#4b37d8]/10 to-transparent",
        deck: "#2b195a",
        accent: "#8d78ff",
        logoSrc: "https://dl.svgcdn.com/svg/logos/snyk.svg",
      },
      {
        name: "OpsMx",
        domain: "opsmx.com",
        line: "Top-tier release risk management under practical delivery budgets.",
        proof: "Progressive delivery, deployment intelligence, and policy gates for safer change.",
        tone: "from-[#4b8cff]/30 via-[#1d4ed8]/10 to-transparent",
        deck: "#4d3705",
        accent: "#f6b51f",
        logoText: "OpsMx",
      },
      {
        name: "HCL AppScan",
        domain: "hcl-software.com",
        line: "Application testing depth for complex enterprise portfolios.",
        proof: "Static, dynamic, interactive, and open-source security testing for regulated teams.",
        tone: "from-[#00a3e0]/30 via-[#0369a1]/10 to-transparent",
        deck: "#062f4f",
        accent: "#00a3e0",
        logoSrc: "https://hclcr.io/files/sofy/catalog/appscan-per-scan/logo/appscan_logo.svg",
      },
      {
        name: "Fortify by OpenText",
        domain: "opentext.com",
        line: "Enterprise-grade AppSec governance for high-assurance environments.",
        proof: "Mature assessment, audit, and remediation workflows for large application estates.",
        tone: "from-[#00a5df]/30 via-[#164e63]/10 to-transparent",
        deck: "#083344",
        accent: "#25c8f6",
      },
      {
        name: "SonarQube",
        domain: "sonarsource.com",
        line: "Clean code quality and security signals built for continuous delivery.",
        proof: "Code smells, bugs, vulnerabilities, and quality gates before defects reach production.",
        tone: "from-[#4aa3ff]/30 via-[#2563eb]/10 to-transparent",
        deck: "#073763",
        accent: "#4aa3ff",
      },
    ],
  },
  {
    title: "Identity Security and PAM",
    summary: "Privilege, access, and session controls for identities that can move the business.",
    products: [
      {
        name: "BeyondTrust",
        domain: "beyondtrust.com",
        line: "Privilege protection across endpoints, credentials, and remote access.",
        proof: "Least privilege, password safety, and secure support paths for hybrid operations.",
        tone: "from-[#00b8d9]/30 via-[#0e7490]/10 to-transparent",
        deck: "#063946",
        accent: "#00d4ff",
      },
      {
        name: "CyberArk",
        domain: "cyberark.com",
        line: "Identity security built around the most sensitive enterprise access.",
        proof: "Vaulting, session control, secrets, and workforce identity risk reduction.",
        tone: "from-[#ef4444]/30 via-[#991b1b]/10 to-transparent",
        deck: "#4c1016",
        accent: "#ff4f64",
      },
      {
        name: "Delinea",
        domain: "delinea.com",
        line: "Modern PAM that simplifies privileged access at operational scale.",
        proof: "Cloud-ready controls for discovery, authorization, secrets, and audit trails.",
        tone: "from-[#f59f00]/30 via-[#b45309]/10 to-transparent",
        deck: "#4a2f03",
        accent: "#f59f00",
      },
      {
        name: "Zenxsys",
        domain: "zenxsys.com",
        line: "Focused identity and access delivery for security-led transformation.",
        proof: "Implementation depth for identity modernization, controls, and managed continuity.",
        tone: "from-[#22c55e]/30 via-[#166534]/10 to-transparent",
        deck: "#0d3a24",
        accent: "#35e077",
      },
    ],
  },
  {
    title: "Encryption, Network and Observability",
    summary: "Protection for data paths, cryptographic posture, network exposure, and runtime insight.",
    products: [
      {
        name: "QNu Labs",
        domain: "qnulabs.com",
        line: "Quantum-safe encryption for data that needs long-term protection.",
        proof: "Key management and cryptographic controls for future-ready security architectures.",
        tone: "from-[#16c47f]/30 via-[#047857]/10 to-transparent",
        deck: "#073b2a",
        accent: "#16c47f",
      },
      {
        name: "Magensec",
        domain: "magensec.com",
        line: "Network security delivery for lean teams that still need strong coverage.",
        proof: "Practical protection, implementation guidance, and operational continuity.",
        tone: "from-[#38bdf8]/30 via-[#075985]/10 to-transparent",
        deck: "#06324d",
        accent: "#38bdf8",
        logoSrc: "https://www.magensec.com/assets/img/magensec_D.png",
      },
      {
        name: "Dynatrace",
        domain: "dynatrace.com",
        line: "Data observability that turns production signals into confident action.",
        proof: "Application, infrastructure, and user-experience intelligence for resilient services.",
        tone: "from-[#86efac]/30 via-[#16a34a]/10 to-transparent",
        deck: "#16380f",
        accent: "#8bdc3f",
      },
    ],
  },
];

function logoUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
}

function ProductLogo({ product }: { product: AllianceProduct }) {
  if (product.logoText) {
    return (
      <span
        className="font-headline text-2xl font-black tracking-tight text-white lg:text-[1.7rem]"
        style={{ textShadow: `0 0 18px ${product.accent}` }}
      >
        {product.logoText}
      </span>
    );
  }

  return (
    <Image
      key={product.name}
      src={product.logoSrc ?? logoUrl(product.domain)}
      alt={`${product.name} logo`}
      width={160}
      height={96}
      className="max-h-16 max-w-[8rem] animate-[allianceLogoIn_420ms_ease-out] object-contain lg:max-h-[76px] lg:max-w-[9rem]"
      unoptimized
    />
  );
}

function AllianceRotator({ pillar, offset = 0 }: { pillar: AlliancePillar; offset?: number }) {
  const [activeIndex, setActiveIndex] = useState(offset % pillar.products.length);
  const [isPaused, setIsPaused] = useState(false);
  const lastWheelAt = useRef(0);
  const cardRef = useRef<HTMLElement | null>(null);
  const activeProduct = pillar.products[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pillar.products.length);
    }, 6200 + offset * 900);

    return () => window.clearInterval(interval);
  }, [isPaused, offset, pillar.products.length]);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
      return;
    }

    const wheelListener = (event: globalThis.WheelEvent) => {
      const travel = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(travel) < 18) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const now = Date.now();
      if (now - lastWheelAt.current < 520) {
        return;
      }

      lastWheelAt.current = now;
      setActiveIndex((current) => {
        const next = current + (travel > 0 ? 1 : -1);
        return (next + pillar.products.length) % pillar.products.length;
      });
    };

    node.addEventListener("wheel", wheelListener, { passive: false });
    return () => node.removeEventListener("wheel", wheelListener);
  }, [pillar.products.length]);

  function showProduct(direction: 1 | -1) {
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + pillar.products.length) % pillar.products.length;
    });
    setIsPaused(true);
  }

  function handleWheel(event: ReactWheelEvent<HTMLElement>) {
    const travel = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (Math.abs(travel) < 18) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const now = Date.now();
    if (now - lastWheelAt.current < 520) {
      return;
    }

    lastWheelAt.current = now;
    showProduct(travel > 0 ? 1 : -1);
  }

  return (
    <article
      ref={cardRef}
      className="group flex min-h-[360px] overflow-hidden rounded border border-outline-variant/70 bg-surface-container-low shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-primary/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_36px_rgba(232,84,42,0.12)] lg:min-h-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onWheelCapture={handleWheel}
      onWheel={handleWheel}
      tabIndex={0}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="border-b border-outline-variant/70 bg-surface px-6 py-5 lg:flex lg:w-[214px] lg:shrink-0 lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:p-5">
          <div>
            <h3 className="font-headline text-xl font-extrabold leading-tight text-on-surface lg:text-[1.15rem]">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant lg:text-[0.72rem] lg:leading-[1.15rem]">
              {pillar.summary}
            </p>
          </div>
          <div
            className="mt-5 hidden h-px w-16 lg:block"
            style={{
              background: `linear-gradient(90deg, ${activeProduct.accent}, transparent)`,
            }}
          />
        </div>

        <div
          className="relative flex flex-1 flex-col"
          style={{
            background: `linear-gradient(135deg, ${activeProduct.deck} 0%, ${activeProduct.deck} 58%, #070707 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.08),transparent_42%,rgba(0,0,0,0.28))]" />
          <div className="relative flex flex-1 flex-col gap-5 px-6 pb-6 pt-7 lg:grid lg:grid-cols-[118px_minmax(0,1fr)_58px] lg:items-center lg:gap-5 lg:p-5">
            <div className="flex items-center justify-start lg:justify-center">
              <div className="flex min-w-[8rem] flex-col items-center gap-3">
                <div className="flex h-16 items-center justify-center lg:h-[76px]">
                  <ProductLogo product={activeProduct} />
                </div>
                <p
                  className="max-w-[8.5rem] text-center font-label text-[10px] font-black uppercase leading-4 tracking-[0.16rem] text-white"
                  style={{ textShadow: `0 0 18px ${activeProduct.accent}` }}
                >
                  {activeProduct.name}
                </p>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-headline text-2xl font-extrabold leading-tight text-white lg:text-[1.28rem] lg:leading-[1.55rem]">
                {activeProduct.line}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/82 lg:mt-2 lg:max-w-[44rem] lg:text-[0.82rem] lg:leading-[1.25rem]">
                {activeProduct.proof}
              </p>
            </div>

            <div className="mt-auto pt-2 lg:ml-auto lg:flex lg:shrink-0 lg:flex-col lg:items-end lg:pt-0">
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                {pillar.products.map((product, index) => (
                  <button
                    key={product.name}
                    type="button"
                    className={`rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "h-2.5 w-9 lg:h-9 lg:w-2.5"
                        : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    style={index === activeIndex ? { backgroundColor: activeProduct.accent } : undefined}
                    aria-label={`Show ${product.name}`}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AlliancesSection() {
  return (
    <section id="alliances" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[330px_minmax(0,1fr)]">
          <div className="relative flex flex-col justify-between overflow-hidden rounded border border-primary/40 bg-primary/[0.07] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_26px_80px_rgba(0,0,0,0.18)] lg:h-[560px]">
            <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full border-[10px] border-primary/45 opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(232,84,42,0.12),transparent_38%,rgba(255,255,255,0.03))]" />
            <div className="space-y-6">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-primary">
                Alliances
              </span>
              <h2 className="relative font-headline text-4xl font-extrabold leading-tight text-on-surface md:text-5xl lg:text-[3rem]">
                The partner network behind our delivery model.
              </h2>
              <p className="relative text-base leading-7 text-on-surface-variant">
                We work alongside product and solution partners to deliver implementation, support,
                training, and long-term service continuity across the platforms our clients use every
                day.
              </p>
            </div>

            <div className="relative mt-10 grid grid-cols-3 gap-2 lg:grid-cols-1">
              <div className="border border-outline-variant/70 bg-surface p-4">
                <p className="font-headline text-2xl font-extrabold text-primary">14+</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16rem] text-on-surface/60">
                  Products
                </p>
              </div>
              <div className="border border-outline-variant/70 bg-surface p-4">
                <p className="font-headline text-2xl font-extrabold text-on-surface">3</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16rem] text-on-surface/60">
                  Pillars
                </p>
              </div>
              <div className="border border-outline-variant/70 bg-surface p-4">
                <p className="font-headline text-2xl font-extrabold text-on-surface">24/7</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16rem] text-on-surface/60">
                  Continuity
                </p>
              </div>
            </div>
          </div>

          <div
            className="overflow-x-auto scrollbar-hidden lg:overflow-visible"
            style={{ touchAction: "pan-x", overscrollBehavior: "contain" }}
          >
            <div className="grid min-w-[900px] grid-cols-1 gap-5 lg:h-[560px] lg:min-w-0 lg:grid-rows-3">
              {alliancePillars.map((pillar, index) => (
                <AllianceRotator key={pillar.title} pillar={pillar} offset={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
