import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-low border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-label text-xs font-bold uppercase tracking-[0.1rem] text-primary">Established Experts</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            The Sentinel <br />
            <span className="text-primary text-glow">Overlay Protection.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
            At Thumos Tech, we don&apos;t just secure data; we build the digital fortifications that allow innovation to flourish without fear.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square rounded-sm overflow-hidden glass-card p-4 border border-zinc-800 primary-glow-box">
            <Image alt="Server room with amber lighting" className="w-full h-full object-cover rounded-sm opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOn57PR3tE8H9JSYxDAKDpyJ6GoROFG948PiWurnGt42s_I4DXz7CMMu8nzfNkP9J_jr8ILtYg68vStvK2AuBXgCR-r2o4UGViO6HCLFou-BbseZ8ej00Hx9bF7R8m35XYF-__BStXHbd34b9CT-72DCfap5FUgrAAwynKePRfvA6igpU5E2ztK3dtlT2Ei_jjNarfrklRfGXypJgYiNk0SPGz7PB7JGynCmnkMBSbzSuncmivihy7aPQO6YPlnB3iSKZ4y77ND8" width={900} height={900} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-high p-8 rounded-sm shadow-2xl border border-primary/20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse primary-pulse"></div>
              <span className="font-headline font-bold text-2xl">99.9%</span>
            </div>
            <p className="text-xs font-label uppercase tracking-widest opacity-60">Threat Neutralization</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2rem] text-secondary">Our Mission</h2>
              <h3 className="font-headline text-4xl font-bold">Resilience through proactive intelligence.</h3>
              <p className="text-zinc-400 leading-loose">
                To provide an impenetrable layer of protection for global enterprises by integrating advanced AI monitoring with elite human strategic oversight. We aim to stay three steps ahead of the threat landscape.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2rem] text-secondary">Our Vision</h2>
              <h3 className="font-headline text-4xl font-bold">The global standard for digital trust.</h3>
              <p className="text-zinc-400 leading-loose">
                We envision a world where every digital interaction is verified, every network is resilient, and every business can scale securely without the overhead of technical vulnerability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2rem] text-primary mb-4">Leadership</h2>
          <h3 className="font-headline text-5xl font-bold">Engineered by Experts.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container-high relative border border-transparent group-hover:border-primary/30 transition-all duration-500">
              <Image alt="Executive male" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZE9Plphjtd89aIAZWbqQmTgeu7Xq4GmTILmGz1MHCL_VtQLW1mUih8-rjbV2OG3bZ16qfLTxGBAih9F5BsydJNwGKByX8mi1Bzdbz7ZHFUD555-Q66JSki8NqdyxGB_9genmJg44WlBtnhKWzD43dR2yUub8w5e2LZXSY0KxObzrTQBdSzllKMUXI3WZhKETbhkXkdeskawRbKFJ3uWo6CGhZmeE94kWi8aak_GMO_rcxxP9KOQAyK4NwipzIKpFKLQ2ESkexXxI" width={800} height={1000} sizes="(min-width: 768px) 28vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <h4 className="font-headline text-2xl font-bold">Marcus Vane</h4>
            <p className="text-secondary font-label text-xs uppercase tracking-widest font-bold mb-4">Chief Executive Officer</p>
            <p className="text-zinc-400 text-sm leading-relaxed">Former Director of Cybersecurity at Global Defense. 20+ years of experience in state-level infrastructure protection.</p>
          </div>
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container-high relative border border-transparent group-hover:border-primary/30 transition-all duration-500">
              <Image alt="Executive female" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp3u6qc_TMbRNzdqwa9hnNAHjKgItSle0XIiOdJ4p7IAkhjR8pkOxrugXvLoqE-HcyALehVp9m8PuspA-CS2pgsdw6uYEbM2p1SZZ98y2Encyjs5de7ZVQescmH2tc_bQM0JNBH4Yx6Zj6dkwAf-rrQRn6ZN3PN_Ab-7ZekO6ixS7Vu3VnxQCzkPhew6gLtw_9evxx_lP8UuIJVWOTb2OabI_pzbt7RqhDNVhCTmGrnh7_TJaUpYFNaX0GAb8KQKbN_AZ-7AsHUhc" width={800} height={1000} sizes="(min-width: 768px) 28vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <h4 className="font-headline text-2xl font-bold">Dr. Elena Thorne</h4>
            <p className="text-secondary font-label text-xs uppercase tracking-widest font-bold mb-4">Chief Technology Officer</p>
            <p className="text-zinc-400 text-sm leading-relaxed">Pioneer in Cryptography and AI-driven threat detection systems. Recipient of the Sentinel Security Excellence Award.</p>
          </div>
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-surface-container-high relative border border-transparent group-hover:border-primary/30 transition-all duration-500">
              <Image alt="Executive male" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFyJdKDRp6drvnPlBgg31FwK0VBDOVxEPz3tegE2iQgUP4lhdcGJcVMRdnzvs3eYDprNQlEIJZ_tUjWYPKHDOz1ZY_XHDR-TeFh2yEyAz5s1F_Or7-lVp12LAu60rX-9QhNd_hnJMpUtj2LzuKB_8SVDx6hVkcgiRpzNhEyALvjV095BFmOfChAvvlY9qNwvU-ppHVl1nFDt8aOiqu4he0Gr15A2mcoTuaycw3NjsEFpbB6UnpLOBuMWW57bXr-_lETJZ3t__-3Bo" width={800} height={1000} sizes="(min-width: 768px) 28vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <h4 className="font-headline text-2xl font-bold">Julian Cross</h4>
            <p className="text-secondary font-label text-xs uppercase tracking-widest font-bold mb-4">Head of Operations</p>
            <p className="text-zinc-400 text-sm leading-relaxed">Specializing in global compliance and rapid-response infrastructure for Fortune 500 partners.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="font-headline text-sm font-bold uppercase tracking-[0.2rem] text-primary mb-4">Our Journey</h2>
              <h3 className="font-headline text-5xl font-bold leading-tight">Decades of Vigilance.</h3>
            </div>
            <div className="w-full md:w-2/3 space-y-12">
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,140,0,0.8)]"></div>
                  <div className="w-px h-full bg-zinc-800 mt-4"></div>
                </div>
                <div className="pb-12">
                  <span className="font-headline text-3xl font-black text-primary/40 block mb-2">2024</span>
                  <h4 className="font-headline text-xl font-bold mb-3">AI-Sentinel Launch</h4>
                  <p className="text-zinc-400">Deployed the first fully autonomous threat prediction engine for financial sectors.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-700"></div>
                  <div className="w-px h-full bg-zinc-800 mt-4"></div>
                </div>
                <div className="pb-12">
                  <span className="font-headline text-3xl font-black text-zinc-700 block mb-2">2020</span>
                  <h4 className="font-headline text-xl font-bold mb-3">Global Expansion</h4>
                  <p className="text-zinc-400">Established strategic operations centers in London, Singapore, and Berlin.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-700"></div>
                  <div className="w-px h-full bg-zinc-800 mt-4"></div>
                </div>
                <div className="pb-4">
                  <span className="font-headline text-3xl font-black text-zinc-700 block mb-2">2015</span>
                  <h4 className="font-headline text-xl font-bold mb-3">Thumos Founded</h4>
                  <p className="text-zinc-400">Three security experts unite to redefine corporate digital defense protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass-card rounded-sm p-12 border border-zinc-800 overflow-hidden relative primary-glow-box">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div>
              <h2 className="font-headline text-4xl font-extrabold mb-6">Global Scale. <br /><span className="text-secondary">Local Precision.</span></h2>
              <p className="text-zinc-400 mb-10 max-w-sm">
                Operating across 40+ countries with localized security response units to ensure compliance with regional data laws and immediate physical intervention if necessary.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-headline font-bold text-primary">12+</p>
                  <p className="text-xs font-label uppercase tracking-widest opacity-60">Global Hubs</p>
                </div>
                <div>
                  <p className="text-3xl font-headline font-bold text-primary">500+</p>
                  <p className="text-xs font-label uppercase tracking-widest opacity-60">Certified Engineers</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full bg-zinc-900/50 rounded-sm border border-zinc-800 relative overflow-hidden">
              <Image alt="World map digital connection" className="w-full h-full object-cover opacity-30 grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0sMi4inUhA4ZLuYf5Bd3jPzVKOXoxx2ZAmcqmKCiWzxGadSaRUxaMoXSRXzfKiCHfyTrOhMgPbvk7aFWI8H15zim5CxQozqJYmj1iAtFwOeCmEEMiT3s7ewlNqlrx496fSoIncnyqSHu87-64U-MCpxtqBPcGO1u4WPDXpequCO4ouOHxSEsZceq27L78WN7MgeztB8TsIR7rxDEHQX_jTKLspQvfe5aV8TaJppRnJfWw_deyOg1ny4hwH9rRmMl0b6-ki11f5s" width={1200} height={800} sizes="(min-width: 768px) 40vw, 100vw" />
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse primary-pulse"></div>
              <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-primary rounded-full animate-pulse primary-pulse"></div>
              <div className="absolute top-1/3 left-3/4 w-3 h-3 bg-primary rounded-full animate-pulse primary-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="flex flex-col items-center gap-4 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">verified</span>
              <span className="font-headline text-xs font-bold uppercase tracking-widest">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">shield</span>
              <span className="font-headline text-xs font-bold uppercase tracking-widest">SOC2 Type II</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">gavel</span>
              <span className="font-headline text-xs font-bold uppercase tracking-widest">GDPR Compliant</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">lock</span>
              <span className="font-headline text-xs font-bold uppercase tracking-widest">HIPAA Certified</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl">security</span>
              <span className="font-headline text-xs font-bold uppercase tracking-widest">PCI DSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
