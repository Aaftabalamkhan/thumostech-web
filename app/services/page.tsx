export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-3/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-primary animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary font-bold">Operational Capabilities</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter uppercase">
              Elite <br /><span className="text-primary">Services</span> &amp; Deployment.
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 font-light">
              From offensive pentesting to continuous monitoring, our services are designed to uncover and neutralize vulnerabilities before they can be exploited.
            </p>
          </div>
          <div className="w-full md:w-2/5 relative">
            <div className="aspect-square rounded.border border-primary/20 absolute -inset-10 animate-[spin_40s_linear_infinite]"></div>
            <div className="relative z-10 aspect-square overflow-hidden bg-zinc-900 border border-zinc-800 rounded">
              <img alt="Services Security Overview" className="w-full h-full object-cover grayscale brightness-75 mix-blend-screen opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF2wBofMHFg9D-JnJIahsHvhed0RzHp0H_YaA1KowBl6MYr4oDbRCnY2oEGnVxa-1WbC6gTwZj5ay2elxp6S6C0i_KUp7OMBmGHIBatsz6gKJ-uzMXuCN4hEmoq0y0NQNGnbOnCxA-NgvhMgqluY2YcMm_lgc6JJ3r1w4pDS7TISnBPao268v1iZlGJ-SDLLYuJkV0nYO7e19FtJqIs1GsU9PTohwQcRFTmMIPa5ucZbnmmQp_w7aiUHKpu6hctQhZXQkfQi-p-Zw" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="kinetic-card p-10 h-full flex flex-col relative overflow-hidden">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bug_report</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">Red Team Pentesting</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1">
              Simulated cyberattacks by our elite offensive specialists to discover gaps in your infrastructure. We test your defenses the way real adversaries do.
            </p>
          </div>
          <div className="kinetic-card p-10 h-full flex flex-col relative overflow-hidden">
             <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>policy</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">Compliance &amp; Governance</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1">
              Ensure your organization adheres strictly to ISO 27001, SOC2, GDPR, and HIPAA frameworks. We simplify compliance through structured oversight.
            </p>
          </div>
          <div className="kinetic-card p-10 h-full flex flex-col relative overflow-hidden">
             <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>crisis_alert</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">Incident Response</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1">
              Rapid mobilization teams available 24/7 to contain, mitigate, and recover from breaches with minimal operational disruption.
            </p>
          </div>
          <div className="kinetic-card p-10 h-full flex flex-col relative overflow-hidden">
             <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>memory</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-4 text-white uppercase tracking-tight">AI Anomaly Analysis</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1">
              Integrating machine learning into your SOC to predict and neutralize zero-day threats through behavioral pattern recognition.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
