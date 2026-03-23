const allianceCategories = [
  {
    title: "Application Security Platforms",
    capabilities: [
      { name: "Checkmarx", mark: "CX", tone: "from-[#ff8b38]/25 to-transparent" },
      { name: "OpsMx", mark: "OM", tone: "from-[#4b8cff]/25 to-transparent" },
      { name: "Snyk", mark: "SY", tone: "from-[#7b61ff]/25 to-transparent" },
    ],
  },
  {
    title: "Encryption & Data Protection",
    capabilities: [
      { name: "QNu", mark: "QN", tone: "from-[#16c47f]/25 to-transparent" },
      { name: "Thales", mark: "TH", tone: "from-[#4f7cff]/25 to-transparent" },
      { name: "IBM", mark: "IB", tone: "from-[#1f6fff]/25 to-transparent" },
    ],
  },
  {
    title: "Identity Security & PAM",
    capabilities: [
      { name: "Delinea", mark: "DE", tone: "from-[#f59f00]/25 to-transparent" },
      { name: "BeyondTrust", mark: "BT", tone: "from-[#00b8d9]/25 to-transparent" },
      { name: "CyberArk", mark: "CA", tone: "from-[#ef4444]/25 to-transparent" },
    ],
  },
];

export default function AlliancesSection() {
  return (
    <section id="alliances" className="scroll-mt-28 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-12 items-center">
          <div className="space-y-6">
            <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
              Alliances
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
              The partner network behind our delivery model.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              We work alongside product and solution partners to deliver implementation, support,
              training, and long-term service continuity across the platforms our clients use every day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4">
              <div className="border border-primary/40 bg-primary/[0.07] p-5 rounded">
                <p className="font-headline text-3xl font-extrabold text-primary">15+</p>
                <p className="text-xs uppercase tracking-[0.18rem] text-on-surface/65 font-bold mt-2">
                  Alliance Pillars
                </p>
              </div>
              <div className="border border-zinc-800 bg-surface-container-low p-5 rounded">
                <p className="font-headline text-3xl font-extrabold text-on-surface">Active</p>
                <p className="text-xs uppercase tracking-[0.18rem] text-on-surface/65 font-bold mt-2">
                  Delivery Focus
                </p>
              </div>
              <div className="border border-zinc-800 bg-surface-container-low p-5 rounded">
                <p className="font-headline text-3xl font-extrabold text-on-surface">Ready</p>
                <p className="text-xs uppercase tracking-[0.18rem] text-on-surface/65 font-bold mt-2">
                  To Expand
                </p>
              </div>
            </div>
          </div>

          <div className="rounded border border-zinc-800 bg-surface-container-low overflow-hidden">
            <div className="border-b border-zinc-800 px-8 py-5 lg:px-12">
              <p className="text-xs uppercase tracking-[0.18rem] text-primary font-bold">
                The Leaders of their Domain
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
              {allianceCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`flex flex-col p-8 lg:p-12 ${index < allianceCategories.length - 1 ? "border-b md:border-b-0 md:border-r border-zinc-800" : ""}`}
                >
                  <div className="mb-8 flex min-h-28 items-start">
                    <h3 className="font-headline text-2xl font-bold leading-tight text-on-surface">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-6">
                    {category.capabilities.map((capability) => (
                      <li
                        key={capability.name}
                        className="flex min-h-16 w-full items-center gap-4 py-1"
                      >
                        <div
                          className={`flex h-9 w-10 shrink-0 items-center justify-center rounded border border-white/10 bg-gradient-to-br ${capability.tone} text-[11px] font-black uppercase tracking-[0.16rem] text-white`}
                        >
                          {capability.mark}
                        </div>
                        <span className="font-headline text-lg font-bold tracking-tight text-on-surface">
                          {capability.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
