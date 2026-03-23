"use client";

import { useRef } from "react";

const services = [
  {
    icon: "security",
    title: "Cyber Security",
    description:
      "Advanced penetration testing and real-time threat detection powered by the Sentinel engine. We don't just react; we predict.",
    features: ["Zero-Trust Architecture", "Managed Endpoint Protection"],
  },
  {
    icon: "psychology",
    title: "AI Defense",
    description:
      "Self-learning algorithms that evolve alongside emerging cyber threats for autonomous, predictive defense.",
    features: ["Behavioral Analysis", "Anomaly Detection"],
  },
  {
    icon: "cloud_done",
    title: "Cloud Infrastructure",
    description:
      "Hardened cloud environments designed for extreme scalability, uptime, and airtight security compliance.",
    features: ["Multi-Cloud Strategy", "Zero-Downtime Deployments"],
  },
  {
    icon: "bug_report",
    title: "Red Team Pentesting",
    description:
      "Simulated cyberattacks by our elite offensive specialists to discover gaps before real adversaries do.",
    features: ["Network Penetration", "Social Engineering Tests"],
  },
  {
    icon: "policy",
    title: "Compliance & Governance",
    description:
      "Ensure adherence to ISO 27001, SOC2, GDPR, and HIPAA frameworks through structured oversight.",
    features: ["Audit Preparation", "Policy Development"],
  },
  {
    icon: "crisis_alert",
    title: "Incident Response",
    description:
      "Rapid mobilization teams available 24/7 to contain, mitigate, and recover from breaches with minimal disruption.",
    features: ["24/7 SOC Monitoring", "Forensic Analysis"],
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex gap-3 absolute -top-16 right-0 z-10">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 border border-zinc-700 rounded flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-colors"
          aria-label="Scroll left"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 border border-zinc-700 rounded flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-colors"
          aria-label="Scroll right"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-4"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[340px] md:w-[400px] group relative bg-surface-container-low p-8 rounded border border-zinc-900 overflow-hidden transition-all hover:border-primary/40"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
