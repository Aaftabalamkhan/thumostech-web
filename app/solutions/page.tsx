export default function Solutions() {
  return (
    <div className="pt-32">
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-3/5">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-primary animate-pulse"></span>
                        <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary font-bold">The Sentinel Protocol</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter uppercase">
                        Architecting <br /><span className="text-primary">Impenetrable</span> Futures.
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 font-light">
                        Empower your security posture with best in class solutions and services.
                    </p>
                    <div className="flex gap-6">
                        <button className="bg-primary text-black px-8 py-4 font-headline font-bold flex items-center gap-2 hover:bg-secondary transition-all active:scale-95">
                            Explore Services
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                        <button className="border border-zinc-800 text-primary px-8 py-4 font-headline font-bold hover:bg-primary/5 transition-all active:scale-95">
                            Security Audit
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                    <div className="aspect-square border border-primary/20 absolute -inset-10 animate-[spin_20s_linear_infinite]"></div>
                    <div className="aspect-square border border-zinc-800 absolute -inset-20 animate-[spin_30s_linear_infinite_reverse]"></div>
                    <div className="relative z-10 aspect-square overflow-hidden bg-zinc-900 border border-zinc-800">
                        <img alt="Cybersecurity command center" className="w-full h-full object-cover grayscale brightness-75 mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8fgbsFkcbH3wJAO2WxsTJBC1i_7WayE-N3xae4o4S9NGMfwG-UST2O6YfAtYJyAupLuVmKcuUPulhdFj5bn5TWz4P4NCoQUatp6iYyo2F4kFdckDmE-Daxr1iqxZzSNSguPsXRy0Az8hbw2lXb3EpS8-AxCMTAmYcl5rUZ3Y8XYcstjszuLkyrFpcjNlyvAG1vn6noNQRqJYnllH8wNk75FjNVqjQRJZoOD2iiRqyTix4FL8Tuw9TmfKfRwfTF58RIwJ3_uLNSLc" />
                    </div>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 group">
                    <div className="kinetic-card p-10 h-full flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32"></div>
                        <div>
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
                                </div>
                                <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1">Foundation</span>
                            </div>
                            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">Cybersecurity Services</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
                                Comprehensive perimeter defense and internal hardening. We don't just find vulnerabilities; we eliminate them through rigorous risk assessment and offensive pentesting.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span> Holistic Risk Assessment
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span> Offensive Pentesting
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span> 24/7 SOC Monitoring
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span> Incident Response
                                </li>
                            </ul>
                        </div>
                        <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                            Learn More <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </div>
                </div>

                <div className="md:col-span-4 group h-full">
                    <div className="bg-zinc-900 border border-zinc-800 p-10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                        <img alt="AI Neural Network" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-700 pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5M6qDoSezFqK7fPkqN3MWzbTGJRUwCY7DDDNejFJ185IKI6iQCaNZR9uWgCp2GZCSUcz4cWYGne8SBHX_Yf_QWg8ISrDt8xC5RiCzSbE7KGMur7-nfb_-PlTffwwz0Zh2mfrGah5zs_flj2w9pkHmA5FNse9g6EcFuCbQNxwEnYaf-7KwvDsqvv8nRCaGO_p1EDDeUySPvEO5A-0S4jxZyabllEO5hj5i63w26PIp5TN9D00jfD7RMM0FAUQgTFyZs-SkyW-xKTU" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-10">
                                    <span className="material-symbols-outlined text-3xl text-primary">psychiatry</span>
                                </div>
                                <h3 className="font-headline text-3xl font-bold mb-4 text-white leading-tight uppercase tracking-tight">AI &amp; Modern Solutions</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Harnessing machine learning for predictive threat intelligence. Move from reactive to autonomous defense.
                                </p>
                            </div>
                            <div>
                                <div className="bg-black/50 p-4 border border-zinc-800 mb-8 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary text-sm">insights</span>
                                        <span className="text-[10px] font-bold uppercase text-primary tracking-widest">Active Pulse</span>
                                    </div>
                                    <div className="h-1 w-full bg-zinc-800 overflow-hidden">
                                        <div className="h-full bg-primary w-2/3"></div>
                                    </div>
                                </div>
                                <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                                    Learn More <span className="material-symbols-outlined">chevron_right</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-12 group">
                    <div className="kinetic-card p-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-3xl text-primary">support_agent</span>
                            </div>
                            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">Professional &amp; Managed</h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                Expert-led security governance and outsourced excellence for teams that demand enterprise-grade focus without the overhead.
                            </p>
                            <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                                Learn More <span className="material-symbols-outlined">chevron_right</span>
                            </a>
                        </div>
                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-zinc-900 p-6 border border-zinc-800 hover:border-primary/30 transition-colors">
                                <h4 className="font-headline font-bold text-white mb-2 uppercase text-sm tracking-widest">CISO as a Service</h4>
                                <p className="text-sm text-zinc-500 font-light">Strategic leadership and compliance oversight provided by seasoned security veterans.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 border border-zinc-800 hover:border-primary/30 transition-colors">
                                <h4 className="font-headline font-bold text-white mb-2 uppercase text-sm tracking-widest">IT Outsourcing</h4>
                                <p className="text-sm text-zinc-500 font-light">Full-spectrum management of your technical infrastructure with a security-first mindset.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 border border-zinc-800 hover:border-primary/30 transition-colors">
                                <h4 className="font-headline font-bold text-white mb-2 uppercase text-sm tracking-widest">Security Audits</h4>
                                <p className="text-sm text-zinc-500 font-light">Deep-dive structural analysis to ensure your organization meets global compliance standards.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 border border-zinc-800 hover:border-primary/30 transition-colors">
                                <h4 className="font-headline font-bold text-white mb-2 uppercase text-sm tracking-widest">Cloud Strategy</h4>
                                <p className="text-sm text-zinc-500 font-light">Secure migration and management of hybrid-cloud environments for modern scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
            <div className="bg-primary p-[1px]">
                <div className="bg-black py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h2 className="font-headline text-3xl font-bold text-white mb-2 tracking-tight uppercase">Ready to fortify your network?</h2>
                        <p className="text-zinc-400">Request a comprehensive security blueprint for your organization today.</p>
                    </div>
                    <button className="bg-primary text-black font-headline font-bold px-10 py-4 hover:bg-secondary transition-all active:scale-95 whitespace-nowrap">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
}
