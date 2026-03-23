"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    icon: "security",
    title: "Professional Services",
    description:
      "A professional service is an intangible product that a contractor or product vendor sells to help a customer manage a specific part of their business.",
    features: ["Security Architecture Advisory", "Implementation & Integration"],
  },
  {
    icon: "psychology",
    title: "Training Delivery",
    description:
      "Technical Training teaches the skills needed to design, develop, implement, maintain, support or operate a particular technology or related application.",
    features: ["Vendor Certification Programs", "Hands-On Security Workshops"],
  },
  {
    icon: "cloud_done",
    title: "Security Audits",
    description:
      "A security audit is the high-level description of the many ways organizations can test and assess their overall security posture, including cybersecurity.",
    features: ["Vulnerability & Gap Assessment", "Compliance Readiness Reviews"],
  },
  {
    icon: "bug_report",
    title: "24x7 AMC",
    description:
      "AMC stands for Annual Maintenance Contract. Most of the service based industries like Machnical/Electronic/Electrical/Software/Automobile etc.",
    features: ["Preventive Health Checks", "Issue Resolution & Support"],
  },
  {
    icon: "policy",
    title: "APP/WEB Development",
    description:
      "Web app development empowers web-based projects to perform and act similarly to a mobile app.",
    features: ["Secure SDLC Practices", "Application Hardening"],
  },
  {
    icon: "crisis_alert",
    title: "Incident Response",
    description:
      "Rapid mobilization teams available 24/7 to contain, mitigate, and recover from breaches with minimal disruption.",
    features: ["Containment & Recovery Support", "Root Cause Investigation"],
  },
];

const CLONE_COUNT = 3;

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardStep, setCardStep] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const loopedServices = useMemo(
    () => [
      ...services.slice(-CLONE_COUNT),
      ...services,
      ...services.slice(0, CLONE_COUNT),
    ],
    []
  );

  useEffect(() => {
    const updateCardStep = () => {
      const track = trackRef.current;
      const firstCard = track?.querySelector<HTMLElement>("[data-carousel-card]");

      if (!track || !firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      setCardStep(firstCard.getBoundingClientRect().width + gap);
    };

    updateCardStep();

    const resizeObserver = new ResizeObserver(() => {
      updateCardStep();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", updateCardStep);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCardStep);
    };
  }, []);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const frameId = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isTransitionEnabled]);

  const scroll = (direction: "left" | "right") => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex((prevIndex) => prevIndex + (direction === "right" ? 1 : -1));
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= services.length + CLONE_COUNT) {
      setIsTransitionEnabled(false);
      setCurrentIndex(CLONE_COUNT);
    } else if (currentIndex < CLONE_COUNT) {
      setIsTransitionEnabled(false);
      setCurrentIndex(services.length + currentIndex);
    }

    setIsAnimating(false);
  };

  return (
    <div className="relative">
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

      <div className="overflow-hidden pb-4">
        <div
          ref={trackRef}
          className={`flex gap-6 will-change-transform ${isTransitionEnabled ? "transition-transform duration-500 ease-out" : ""}`}
          style={{
            transform: `translateX(-${currentIndex * cardStep}px)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              data-carousel-card
              className="group relative shrink-0 basis-full md:basis-[calc((100%-1.5rem)/2)] xl:basis-[calc((100%-3rem)/3)] bg-surface-container-low p-8 rounded border border-zinc-900 overflow-hidden transition-all hover:border-primary/40"
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
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`${service.title}-${featureIndex}`}
                      className="flex items-center gap-2 text-sm text-on-surface/80"
                    >
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
    </div>
  );
}
