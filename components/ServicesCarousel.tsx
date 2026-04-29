"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { services } from "@/lib/content";

const LOOP_CLONE_COUNT = 3;
const AUTO_SCROLL_INTERVAL = 3800;
const RESET_DELAY = 720;

export default function ServicesCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const resetTimerRef = useRef<number | null>(null);

  const loopedServices = useMemo(
    () => [...services, ...services.slice(0, LOOP_CLONE_COUNT)],
    []
  );

  useEffect(() => {
    const updateCardStep = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const firstCard = track?.querySelector<HTMLElement>("[data-carousel-card]");

      if (!viewport || !track || !firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const nextCardStep = firstCard.getBoundingClientRect().width + gap;

      setCardStep(nextCardStep);
      viewport.scrollTo({ left: currentIndex * nextCardStep });
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
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused || cardStep === 0) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, AUTO_SCROLL_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [cardStep, isPaused]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || cardStep === 0) return;

    viewport.scrollTo({
      left: currentIndex * cardStep,
      behavior: "smooth",
    });

    if (currentIndex < services.length) return;

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      viewport.scrollTo({ left: 0, behavior: "auto" });
      setCurrentIndex(0);
      resetTimerRef.current = null;
    }, RESET_DELAY);
  }, [cardStep, currentIndex]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport || cardStep === 0) return;

    const index = Math.round(viewport.scrollLeft / cardStep);
    setCurrentIndex(index);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">

      <div
        ref={viewportRef}
        className="overflow-x-auto pb-4 scrollbar-hidden snap-x snap-mandatory"
        style={{ touchAction: "pan-x" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onScroll={handleScroll}
      >
        <div ref={trackRef} className="flex gap-6">
          {loopedServices.map((service, index) => (
            <Link
            key={`${service.title}-${index}`}
            href={`/services/${service.slug}`}
            className="group relative shrink-0 snap-start w-[84vw] sm:w-[30rem] lg:w-[25rem] bg-surface-container-low p-8 rounded border border-white/10 overflow-hidden transition-all hover:border-primary/40"
            aria-label={`View details for ${service.title}`}
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
            </Link>
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
