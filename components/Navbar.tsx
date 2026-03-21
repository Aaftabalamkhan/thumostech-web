"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1 font-manrope font-semibold tracking-tight text-sm"
      : "text-zinc-400 hover:text-orange-400 transition-colors duration-300 font-manrope font-semibold tracking-tight text-sm";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full relative">
        <Link href="/" className="text-2xl font-black text-orange-500 tracking-tighter font-headline">
          Thumos Tech
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link className={getLinkClass("/solutions")} href="/solutions">
            Solutions
          </Link>
          <Link className={getLinkClass("/services")} href="/services">
            Services
          </Link>
          <Link className={getLinkClass("/about")} href="/about">
            About
          </Link>
          <Link className={getLinkClass("/resources")} href="/resources">
            Resources
          </Link>
          <Link
            href="/contact"
            className="bg-orange-500 text-black font-headline uppercase tracking-[0.1rem] text-xs font-bold px-6 py-3 rounded hover:bg-orange-400 active:scale-95 transition-transform"
          >
            Get a Quote
          </Link>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-orange-500">menu</span>
        </div>
        <div className="bg-gradient-to-b from-orange-500/10 to-transparent h-[2px] w-full absolute bottom-0 left-0"></div>
      </div>
    </nav>
  );
}
