export default function Resources() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="max-w-3xl">
          <p className="text-primary font-label font-bold tracking-[0.2rem] uppercase text-xs mb-4">
            Intelligence Hub
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-6 uppercase">
            Sentinel <span className="text-primary">Resources</span> &amp; Reports
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Access whitepapers, security audits, and the latest intelligence reports from the Thumos Tech threat research division.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT91ugK6npkuItx8gWONpKDSfQ6ubl3VI8LDyQKKOGvgLuLnOV0eyt91D_AYrV601t_zCuMnBZI5jtVUCIgV39arSsPGojvlCXWjsS_35VZ4lmGtPoGHNV1PohWPgQumhKotHlvamGNMQGpBwwmgQdynNFVoSwR_2djEuzW-DRJcKY1SN9RiDfdBpnmH5Mi5PHbCSVu9HsB7jDVmPivvNqe3bSdbcdkXl_JYxZbFgwc05tcg811-745hdk21T4YJ8qDI8bQzWZYcw" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Whitepaper</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">Q2 2024</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">The Next Evolution of Threat Intelligence</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">An extensive overview of AI-driven threat prediction systems for multinational operations.</p>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mt-4 inline-block hover:underline">Download PDF</span>
            </article>

            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV9S2a0aeVnK70Ysh4MvJ5biSiClaWxgMltPLuhtcGtqkPPcZWVQz6pNf_cGp4xsQ3O5SivQt61digoh9Z7CKKNOQh21Q3DdtZowTSS-J4O2Z3M-LZbv9863YU6Vh813dpD8uXyAdGvhEaykiAouMY2VVkX-J36fbCZbzN0orH8rOU6Ftx7bHTJCrVDEWCBcu37FUCKpKUGTvgDReEB9kKO7oy5ipi7oCGwuKqdXkMo5mvOjeGO0i2JWj6LFM-SArrV502MIabmlk" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Case Study</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">Q1 2024</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">Securing the Global Supply Chain Hub</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">A deep dive into how Thumos Tech hardened the infrastructure of a Fortune 500 logistics firm.</p>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mt-4 inline-block hover:underline">Read Case Study</span>
            </article>

            <article className="group cursor-pointer">
              <div className="aspect-video rounded overflow-hidden mb-6 relative border border-zinc-900">
                <img alt="Blog post 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2RKZEoHjjDnSTNCVXHHf55GxmsqwCY5cegYQqK8v7tuwIF_GmWu98yCHW-Bz9KgHL0q4JiZpuKnnPZHnS-uvubzof_IQuA4E1lap8evWTtMo_gPeWsWgLIMoBIOt6MKp1FyTdr3XRG1ZeW1c97dzym40pgb14aYpHX5A9OVAbIK2BF22v4p539jbrF1f83J84yrzWfmguaU2ICm-IwtVobNW5coPfASJYsNLYY-uHy0PjPox8NRzwj2v1KeH-eIe1wRaLPEpm7U" />
                <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">API Docs</div>
              </div>
              <time className="font-label text-xs text-zinc-500 block mb-2">v4.2.1</time>
              <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">Sentinel Node Integration API</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">Technical documentation for implementing the Sentinel overlay on edge nodes and remote servers.</p>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mt-4 inline-block hover:underline">View Documentation</span>
            </article>
        </div>
      </section>
    </div>
  )
}
