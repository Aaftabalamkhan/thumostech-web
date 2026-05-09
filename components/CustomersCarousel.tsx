"use client";

import Image from "next/image";

type Customer = {
  name: string;
  domain: string;
  display: string;
  logoSrc?: string;
  accent: string;
};

const commonsLogo = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${fileName}`;

const customers: Customer[] = [
  // {
  //   name: "Serum Institute",
  //   domain: "seruminstitute.com",
  //   display: "Serum Institute",
  //   logoSrc: commonsLogo("Serum_Institute_of_India_logo.svg"),
  //   accent: "#0ea5e9",
  // },
  // {
  //   name: "Quick Heal",
  //   domain: "quickheal.co.in",
  //   display: "Quick Heal",
  //   logoSrc: commonsLogo("Quick_Heal.svg"),
  //   accent: "#f59e0b",
  // },
  // {
  //   name: "Cookiejar (Finvu)",
  //   domain: "finvu.in",
  //   display: "Finvu",
  //   logoSrc: "https://static.cdnlogo.com/logos/f/18/finvu.svg",
  //   accent: "#14b8a6",
  // },
  {
    name: "AppViewX",
    domain: "appviewx.com",
    display: "AppViewX",
    logoSrc: commonsLogo("AppViewX.png"),
    accent: "#22c55e",
  },
  {
    name: "Adani Wilmar",
    domain: "adaniwilmar.com",
    display: "Adani Wilmar",
    logoSrc: commonsLogo("Adani_Wilmar.svg"),
    accent: "#16a34a",
  },
  {
    name: "Adani Cement",
    domain: "ambujacement.com",
    display: "Ambuja Cement",
    logoSrc: "https://static.cdnlogo.com/logos/a/18/ambuja-cements.svg",
    accent: "#2563eb",
  },
  // {
  //   name: "Star India (Disney)",
  //   domain: "disney.in",
  //   display: "Disney Star",
  //   logoSrc: commonsLogo("Disney_Star_logo.svg"),
  //   accent: "#60a5fa",
  // },
  {
    name: "DP World",
    domain: "dpworld.com",
    display: "DP World",
    logoSrc: commonsLogo("DP_World_2021_logo.svg"),
    accent: "#ef4444",
  },
  // {
  //   name: "McFadyen Consulting Software",
  //   domain: "mcfadyen.com",
  //   display: "McFadyen",
  //   logoSrc: "https://static.cdnlogo.com/logos/m/18/mcfadyen.svg",
  //   accent: "#38bdf8",
  // },
  // {
  //   name: "I&M Bank (Kenya)",
  //   domain: "imbankgroup.com",
  //   display: "I&M Bank",
  //   logoSrc: commonsLogo("I&M_Bank_logo.svg"),
  //   accent: "#dc2626",
  // },
  // {
  //   name: "Clearwater Paper (USA)",
  //   domain: "clearwaterpaper.com",
  //   display: "Clearwater Paper",
  //   logoSrc: commonsLogo("Clearwater_Paper_logo.svg"),
  //   accent: "#16a34a",
  // },
  // {
  //   name: "Litmus7",
  //   domain: "litmus7.com",
  //   display: "Litmus7",
  //   logoSrc: commonsLogo("Litmus7_logo.svg"),
  //   accent: "#f97316",
  // },
  // {
  //   name: "63 Moons",
  //   domain: "63moons.com",
  //   display: "63 moons",
  //   logoSrc: commonsLogo("63_Moons_logo.svg"),
  //   accent: "#8b5cf6",
  // },
  // {
  //   name: "DNS Bank",
  //   domain: "dnsbank.in",
  //   display: "DNS Bank",
  //   logoSrc: commonsLogo("DNS_Bank_logo.svg"),
  //   accent: "#f59e0b",
  // },
  {
    name: "eClerx",
    domain: "eclerx.com",
    display: "eClerx",
    logoSrc: commonsLogo("EClerxFinal_1.png"),
    accent: "#2563eb",
  },
  // {
  //   name: "QuisLex",
  //   domain: "quislex.com",
  //   display: "QuisLex",
  //   logoSrc: commonsLogo("QuisLex_logo.svg"),
  //   accent: "#0f766e",
  // },
  // {
  //   name: "Sectrio",
  //   domain: "sectrio.com",
  //   display: "Sectrio",
  //   logoSrc: commonsLogo("Sectrio_logo.svg"),
  //   accent: "#dc2626",
  // },
  // {
  //   name: "Infinix Capital",
  //   domain: "infinixcapital.in",
  //   display: "Infinix Capital",
  //   logoSrc: commonsLogo("Infinix_Capital_logo.svg"),
  //   accent: "#06b6d4",
  // },
  {
    name: "NIIT",
    domain: "niit.com",
    display: "NIIT",
    logoSrc: commonsLogo("NIIT_logo.svg"),
    accent: "#1d4ed8",
  },
  // {
  //   name: "Tata Advanced Systems",
  //   domain: "tasl.aero",
  //   display: "Tata Advanced",
  //   logoSrc: commonsLogo("Tata_Advanced_Systems_logo.svg"),
  //   accent: "#2563eb",
  // },
  // {
  //   name: "Rysun IT Solutions Pvt. Ltd.",
  //   domain: "rysun.com",
  //   display: "Rysun",
  //   logoSrc: commonsLogo("Rysun_logo.svg"),
  //   accent: "#22c55e",
  // },
  // {
  //   name: "Globaltech & Infosec Private Limited",
  //   domain: "gtisec.com",
  //   display: "GTI Sec",
  //   logoSrc: commonsLogo("Globaltech_&_Infosec_logo.svg"),
  //   accent: "#f97316",
  // },
];

function CustomerMark({ customer }: { customer: Customer }) {
  if (customer.logoSrc) {
    return (
      <Image
        src={customer.logoSrc}
        alt={`${customer.name} logo`}
        width={220}
        height={90}
        className="max-h-14 max-w-[11.5rem] object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        unoptimized
      />
    );
  }

  return (
    <span
      className="max-w-[12rem] text-center font-headline text-xl font-black leading-tight tracking-tight text-white transition-transform duration-300 group-hover:scale-105 md:text-2xl"
      style={{ textShadow: `0 0 18px ${customer.accent}` }}
    >
      {customer.display}
    </span>
  );
}

export default function CustomersCarousel() {
  const marqueeCustomers = [...customers, ...customers];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track-customer marquee-track-customer-fast inline-flex">
        {marqueeCustomers.map((customer, i) => (
          <div key={`${customer.name}-${i}`} className="flex shrink-0 items-center px-3 md:px-5">
            <div
              className="group relative flex h-24 w-52 items-center justify-center overflow-hidden rounded px-5 transition-all duration-300 md:h-28 md:w-64"
              title={customer.name}
            >
              <div
                className="pointer-events-none absolute inset-x-8 bottom-0 h-px opacity-80"
                style={{
                  background: `linear-gradient(90deg, transparent, ${customer.accent}, transparent)`,
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center">
                <CustomerMark customer={customer} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
