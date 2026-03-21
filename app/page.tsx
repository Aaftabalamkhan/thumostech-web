export default function Home() {
  return (
    <>
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-surface-container-low border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
                <span className="font-label uppercase tracking-[0.15rem] text-[10px] font-bold text-primary">Live System Protection Active</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
                Next-Gen Security for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Kinetic</span> World.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
                Thumos Tech deploys advanced sentinel overlays to protect your digital infrastructure. We turn vulnerability into an unbreakable proactive defense strategy.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-primary text-black px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all active:scale-95">
                  Book a Consultation
                </button>
                <button className="border border-outline-variant text-primary px-8 py-4 rounded font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/5 transition-all group">
                  Explore Services
                  <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="flex-1 relative hidden lg:block">
              <div className="relative w-full aspect-square rounded overflow-hidden border border-outline-variant glass-card">
                <img alt="Cybersecurity HUD interface" className="w-full h-full object-cover opacity-60 mix-blend-screen" data-alt="Futuristic cybersecurity dashboard with neon data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeql7Vwz5eG0GhwONVHXgH-lx19xxK-WUJhktknymMtcG3C6mE4VEyAh8EPxPjQMAGCZcOKO5J8zFUKLOFyMMGbZvcSZfInDmGYdC5XJAy5GxEPBDkuaIjLrBVbPMNKIskfqVsnJeCCgNb2MOumnUCM8gnodytgQkuACQMIrPvAFhVmad-j9VsJ7MNvgura4-N5pnN-3EF0OFLGFKx54LFvJ7GvCw31A8qeABOLn2-IQ97Um9bWKmt8-NvF_NEfB9B2sgbfYqaTmQ" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded border border-primary/30 shadow-2xl max-w-xs">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-primary" data-weight="fill">shield_with_heart</span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Scan</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4"></div>
                  </div>
                  <p className="text-xs text-on-surface/80">99.9% Threat Neutralization Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section className="py-12 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center font-label uppercase tracking-[0.2rem] text-[10px] text-zinc-500 mb-8">Trusted by Global Infrastructure Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
            <span className="font-headline font-bold text-xl tracking-tighter text-on-surface">QUANTUM_SEC</span>
            <span className="font-headline font-bold text-xl tracking-tighter text-on-surface">NEURAL_CORE</span>
            <span className="font-headline font-bold text-xl tracking-tighter text-on-surface">VORTEX_DATA</span>
            <span className="font-headline font-bold text-xl tracking-tighter text-on-surface">TITAN_SYSTEMS</span>
            <span className="font-headline font-bold text-xl tracking-tighter text-on-surface">APEX_CLOUD</span>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 space-y-4">
            <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Operational Capabilities</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">Core Security Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 group relative bg-surface-container-low p-10 rounded border border-zinc-900 overflow-hidden transition-all hover:border-primary/40">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">security</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold">Cyber Security</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Advanced penetration testing and real-time threat detection powered by the Sentinel engine. We don&apos;t just react; we predict.
                  </p>
                </div>
                <ul className="mt-12 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Zero-Trust Architecture
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Managed Endpoint Protection
                  </li>
                </ul>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-8">
              <div className="group bg-surface-container-low p-8 rounded border border-zinc-900 transition-all hover:border-primary/40 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">AI Defense</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Self-learning algorithms that evolve alongside emerging cyber threats.
                  </p>
                </div>
                <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">memory</span>
                </div>
              </div>
              <div className="group bg-surface-container-low p-8 rounded border border-zinc-900 transition-all hover:border-primary/40 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">cloud_done</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">Cloud Infrastructure</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Hardened cloud environments designed for extreme scalability and uptime.
                  </p>
                </div>
                <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">The Thumos Edge</span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">Elite Protection for Modern Enterprises</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Security is not a product; it&apos;s a constant state of vigilance. Thumos Tech brings a military-grade mindset to corporate digital assets.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  <h4 className="font-headline font-bold text-lg">Verified Protocols</h4>
                  <p className="text-sm text-on-surface-variant">Every system is audited against global ISO and SOC2 standards.</p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                  <h4 className="font-headline font-bold text-lg">Rapid Response</h4>
                  <p className="text-sm text-on-surface-variant">Incident mitigation within seconds, not minutes or hours.</p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                  <h4 className="font-headline font-bold text-lg">Deep Visibility</h4>
                  <p className="text-sm text-on-surface-variant">Real-time mapping of every packet and connection in your network.</p>
                </div>
                <div className="space-y-3 p-4 border-l border-primary/30 bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
                  <h4 className="font-headline font-bold text-lg">Future Proof</h4>
                  <p className="text-sm text-on-surface-variant">Quantum-resistant encryption layers for long-term data safety.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img alt="Server room hardware" className="rounded w-full h-64 object-cover border border-zinc-800" data-alt="Close up of glowing blue server rack hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD7zUT5kPd7094bZGyG5liCqzT2PI3iv8imZ_5i4U9uXwhNsRuIxpCBSIt-ylnEcLK_U79oDtstxHfYCBgOdxWUu3Ck8pHI2wzKoTvGBfyTQrSkMTcdAJavSNoU1kbkH7JUbYxaA6zUpcUweIZJFbkDpkps_Vt2LXXpQjSZoLH8SNF4wnzcBFkbo3ilq16eYPpRqZlzzP1c8-vi_rgrCuox1wJUJIqYADJGgdO2Fpf9LtlAe7T-IJDH3GGQKGLLqo0Wyh41Z4TRvs" />
                  <img alt="Cybersecurity analyst" className="rounded w-full h-48 object-cover border border-zinc-800" data-alt="Abstract view of a tech specialist working on a transparent screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxlfilyt252GA15kKmEoaU7HUjJiYnwlIvKGUvotfde_L1nLaNhe0lHYeNsumicB8min8HcPVFsnXTYlswkeNhaNGbYFdTEkxtr5abn5lWFeLdg7e8vDhEcORJIJtLWiKA92inTSiVBO7rY6xD7xwRSFvOqKuzn04PhxyevvaMGRoQuAD6C28JvoGfxfRxRpMBzcpDV3AHmHVMlh1Kco_IhxdxfcXuwyhLWywKR2MOEqQ4eK9wYIzpLbIu3UFDVDLy9W3Ak1LjLxQ" />
                </div>
                <div className="space-y-4">
                  <img alt="Global network" className="rounded w-full h-48 object-cover border border-zinc-800" data-alt="Orbital view of global data network connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHUembMy6Eg6dTqoxiEfqwypr6gjmdq7Q6wT-0CT7qoRokSTQvg___u6WFj12OcIR9lSo19l-0AkVAQ0D1OY4nOhyRwjQY_TrqkLJR4fCbR31X300Mi_MJroQ7YUOaht8eGZoUwPGz6pRITdb_Cji331NnWc4s3onO2I0-638Hxi1toCojT98PFJPrf64YdiieL226iZY6zN8CDgVAxX3ZuEn8SLZOPfEYocKoH5KBJ4Mawp0VDLhwAsW6y0qk7VfV7jlkyumYgx8" />
                  <img alt="Computer circuit board" className="rounded w-full h-64 object-cover border border-zinc-800" data-alt="Detailed macro of a high-tech processor and circuitry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2RKZEoHjjDnSTNCVXHHf55GxmsqwCY5cegYQqK8v7tuwIF_GmWu98yCHW-Bz9KgHL0q4JiZpuKnnPZHnS-uvubzof_IQuA4E1lap8evWTtMo_gPeWsWgLIMoBIOt6MKp1FyTdr3XRG1ZeW1c97dzym40pgb14aYpHX5A9OVAbIK2BF22v4p539jbrF1f83J84yrzWfmguaU2ICm-IwtVobNW5coPfASJYsNLYY-uHy0PjPox8NRzwj2v1KeH-eIe1wRaLPEpm7U" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Intelligence Hub</span>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface">The Sentinel Report</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-widest uppercase hover:text-orange-400 transition-colors">
              View All News
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" data-alt="Abstract digital lock icon with neon glowing lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT91ugK6npkuItx8gWONpKDSfQ6ubl3VI8LDyQKKOGvgLuLnOV0eyt91D_AYrV601t_zCuMnBZI5jtVUCIgV39arSsPGojvlCXWjsS_35VZ4lmGtPoGHNV1PohWPgQumhKotHlvamGNMQGpBwwmgQdynNFVoSwR_2djEuzW-DRJcKY1SN9RiDfdBpnmH5Mi5PHbCSVu9HsB7jDVmPivvNqe3bSdbcdkXl_JYxZbFgwc05tcg811-745hdk21T4YJ8qDI8bQzWZYcw" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Threat Alert</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">MARCH 14, 2024</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">Navigating the Rise of AI-Driven Ransomware</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">How automated attackers are evolving and what your IT team needs to do now to prepare for the next wave.</p>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" data-alt="Complex data chart and analysis on a dark screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV9S2a0aeVnK70Ysh4MvJ5biSiClaWxgMltPLuhtcGtqkPPcZWVQz6pNf_cGp4xsQ3O5SivQt61digoh9Z7CKKNOQh21Q3DdtZowTSS-J4O2Z3M-LZbv9863YU6Vh813dpD8uXyAdGvhEaykiAouMY2VVkX-J36fbCZbzN0orH8rOU6Ftx7bHTJCrVDEWCBcu37FUCKpKUGTvgDReEB9kKO7oy5ipi7oCGwuKqdXkMo5mvOjeGO0i2JWj6LFM-SArrV502MIabmlk" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Case Study</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">MARCH 08, 2024</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">Securing the Global Supply Chain Hub</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">A deep dive into how Thumos Tech hardened the infrastructure of a Fortune 500 logistics firm.</p>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" data-alt="Futuristic dark architecture with blue glowing accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF2wBofMHFg9D-JnJIahsHvhed0RzHp0H_YaA1KowBl6MYr4oDbRCnY2oEGnVxa-1WbC6gTwZj5ay2elxp6S6C0i_KUp7OMBmGHIBatsz6gKJ-uzMXuCN4hEmoq0y0NQNGnbOnCxA-NgvhMgqluY2YcMm_lgc6JJ3r1w4pDS7TISnBPao268v1iZlGJ-SDLLYuJkV0nYO7e19FtJqIs1GsU9PTohwQcRFTmMIPa5ucZbnmmQp_w7aiUHKpu6hctQhZXQkfQi-p-Zw" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Engineering</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">FEBRUARY 29, 2024</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">The Future of Post-Quantum Cryptography</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">Why wait for the quantum leap? Learn about the encryption standards we&apos;re implementing today.</p>
            </article>
          </div>
         </div>
      </section>
    </>
  );
}
