"use client";

const customers = [
  "HDFC Bank",
  "ICICI Bank",
  "Finvu",
  "IBM",
  "NSDL",
  "BSE",
  "INFLOW",
];

export default function CustomersCarousel() {
  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee track */}
      <div className="flex marquee-track marquee-track-fast md:marquee-track">
        {[...customers, ...customers].map((name, i) => (
          <div
            key={i}
            className="shrink-0 px-10 md:px-16 flex items-center"
          >
            <span className="font-headline font-bold text-xl md:text-2xl tracking-tighter text-white whitespace-nowrap opacity-40 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-default">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
