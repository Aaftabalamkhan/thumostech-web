import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 py-16 max-w-7xl mx-auto w-full">
        <div className="space-y-6">
          <div className="text-lg font-bold text-primary font-headline uppercase tracking-widest">
            Thumos Tech
          </div>
          <p className="font-body text-sm leading-relaxed text-zinc-400">
            Defending the digital frontier with unyielding precision. Our mission is to ensure your data remains
            your most secure asset.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">
              public
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">
              terminal
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">
              shield
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Security Audit
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Threat Map
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="font-manrope text-sm tracking-widest uppercase text-zinc-500 hover:text-primary hover:underline underline-offset-4 transition-opacity opacity-80"
                href="#"
              >
                Compliance
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
            Join the Network
          </h4>
          <p className="font-body text-sm text-zinc-400">
            Subscribe to our vulnerability intelligence updates.
          </p>
          <div className="flex">
            <input
              className="bg-zinc-950 border border-zinc-800 text-xs px-4 py-2 w-full focus:ring-1 focus:ring-primary outline-none rounded-l text-on-surface"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 text-center md:text-left">
        <p className="font-manrope text-sm tracking-widest uppercase text-zinc-500">
          © 2026 Thumos Tech.
        </p>
        <div className="flex gap-8">
          <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary">
            System Status: All Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
