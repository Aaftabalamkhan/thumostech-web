"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    icon: "shield_person",
    title: "Professional Security Services",
    description:
      "Security programs designed with the right architecture, controls, and rollout sequencing for enterprise environments under real operational pressure.",
    features: ["Security Architecture Advisory", "Implementation and Integration"],
  },
  {
    icon: "school",
    title: "Training Delivery",
    description:
      "Practical enablement that helps internal teams, administrators, and security stakeholders operate modern tooling with confidence.",
    features: ["Vendor Certification Programs", "Hands-On Security Workshops"],
  },
  {
    icon: "fact_check",
    title: "Security Audits",
    description:
      "Structured assessments to evaluate posture, identify control gaps, and prepare teams for remediation, compliance, and executive review.",
    features: ["Vulnerability & Gap Assessment", "Compliance Readiness Reviews"],
  },
  {
    icon: "support_agent",
    title: "24x7 AMC",
    description:
      "Always-on maintenance and operational support to keep critical security platforms healthy, tuned, and available around the clock.",
    features: ["Preventive Health Checks", "Issue Resolution & Support"],
  },
  {
    icon: "code_blocks",
    title: "Secure App and Web Development",
    description:
      "Application delivery with secure engineering practices built in from day one, reducing risk across the full development lifecycle.",
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

const LOOP_CLONE_COUNT = 3;

export default function ServicesCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const loopedServices = useMemo(
    () => [...services, ...services.slice(0, LOOP_CLONE_COUNT)],
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

    const resizeObserver = new ResizeObserver(updateCardStep);

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
    if (isPaused || cardStep === 0) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [isPaused, cardStep]);

  useEffect(() => {
    if (currentIndex !== services.length) return;

    const timeoutId = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
    }, 640);

    return () => window.clearTimeout(timeoutId);
  }, [currentIndex]);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const frameId = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isTransitionEnabled]);

  const goToSlide = (index: number) => {
    setIsTransitionEnabled(true);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-on-surface-variant">
          Auto-rotating service highlights. Hover or touch the carousel to pause and explore a card.
        </p>
      </div>

      <div
        className="overflow-hidden pb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className={`flex gap-6 will-change-transform ${isTransitionEnabled ? "transition-transform duration-700 ease-out" : ""}`}
          style={{
            transform: `translateX(-${currentIndex * cardStep}px)`,
          }}
        >
          {loopedServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              data-carousel-card
              className="group relative shrink-0 w-[84vw] sm:w-[30rem] lg:w-[25rem] bg-surface-container-low p-8 rounded border border-white/10 overflow-hidden transition-all hover:border-primary/40"
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

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {services.map((service, index) => {
          const isActive = currentIndex % services.length === index;

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${isActive ? "w-10 bg-primary" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to ${service.title}`}
            />
          );
        })}
      </div>
    </div>
  );
}
