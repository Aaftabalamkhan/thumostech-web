"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const getLinkClass = (path: string, accent = false) => {
    return pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-manrope font-semibold tracking-tight text-sm"
      : `${accent ? "text-primary" : "text-zinc-400"} hover:text-primary transition-colors duration-300 font-manrope font-semibold tracking-tight text-sm`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#181818]/57 backdrop-blur-xl">
      <div className="flex justify-between items-center pl-0 pr-2 md:px-10 py-0 max-w-7xl mx-auto w-full min-h-[2.05rem] md:min-h-[2.35rem] relative">
        <Link href="/" onClick={handleLogoClick} className="-ml-7 md:-ml-2 flex shrink-0 items-center overflow-visible">
          <Image
            src="/logo.png"
            alt="Thumos Tech"
            width={940}
            height={840}
            className="h-[9.1rem] md:h-[8.7rem] w-auto min-w-[11.6rem] md:min-w-[15.5rem] -my-6 md:-my-6"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-10 items-center">
            <Link className={`${getLinkClass("/solutions", true)} text-[1.05rem]`} href="/solutions">
              Solutions
            </Link>
            <Link className={`${getLinkClass("/about", true)} text-[1.05rem]`} href="/about">
              About
            </Link>
          </div>
          <Link
            href="/book-demo"
            className="mr-2 md:mr-3 bg-primary text-black px-6 py-[0.45rem] rounded font-headline font-bold text-sm tracking-[0.16rem] uppercase hover:bg-secondary transition-all active:scale-95"
          >
            Book Demo
          </Link>
        </div>
        <div className="md:hidden mr-1 flex items-center gap-1.5">
          <Link
            href="/book-demo"
            className="bg-primary text-black px-3.5 py-2.5 rounded font-headline font-bold text-[0.64rem] tracking-[0.14rem] uppercase hover:bg-secondary transition-all active:scale-95"
          >
            Book Demo
          </Link>
          <button
            className="material-symbols-outlined flex h-10 w-10 items-center justify-center text-primary hover:text-primary/80 focus:outline-none text-[2.3rem] leading-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
        <div className="bg-gradient-to-b from-primary/10 to-transparent h-[2px] w-full absolute bottom-0 left-0"></div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-3xl border-b border-primary/20 shadow-2xl z-40">
          <div className="flex flex-col px-4 py-8 space-y-6 items-center">
            <Link className={getLinkClass("/solutions")} href="/solutions" onClick={() => setIsMobileMenuOpen(false)}>
              Solutions
            </Link>
            <Link className={getLinkClass("/about")} href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
