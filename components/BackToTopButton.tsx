"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/80 bg-surface-container/90 text-primary shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-surface-container-high"
    >
      <span className="material-symbols-outlined text-[1.35rem]">keyboard_arrow_up</span>
    </button>
  );
}
