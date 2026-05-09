"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-10 w-10 rounded border border-outline-variant/70 bg-surface-container/70"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="material-symbols-outlined flex h-10 w-10 items-center justify-center rounded border border-outline-variant/70 bg-surface-container/70 text-primary transition-colors hover:bg-surface-container-high"
    >
      {theme === "dark" ? "light_mode" : "dark_mode"}
    </button>
  );
}
