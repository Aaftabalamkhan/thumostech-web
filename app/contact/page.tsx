export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="max-w-3xl">
          <p className="text-primary font-label font-bold tracking-[0.2rem] uppercase text-xs mb-4">
            Connect with the Sentinel
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-6 uppercase">
            Operational <span className="text-primary">Support</span> &amp; Strategic Inquiry
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Our technical monitoring is active 24/7. Whether you're seeking a security audit or need immediate mission-critical support, our team is standing by.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-surface-container-low p-10 md:p-14 rounded border-outline-variant/10 border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
          <h2 className="font-headline text-3xl font-bold mb-8 uppercase tracking-tighter">Secure Inquiry Form</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Full Name</label>
                <input
                  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 rounded transition-all"
                  placeholder="John Sentinel"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Company</label>
                <input
                  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 rounded transition-all"
                  placeholder="Cyberdyne Systems"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Service Type</label>
              <select className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 rounded appearance-none transition-all">
                <option>Sentinel Overlay Implementation</option>
                <option>Cloud Security Audit</option>
                <option>24/7 Threat Monitoring</option>
                <option>Enterprise Data Encryption</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">Transmission Message</label>
              <textarea
                className="w-full bg-surface-container-lowest border-none border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-on-surface p-4 rounded transition-all resize-none"
                placeholder="Describe your technical requirements..."
                rows={5}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary font-headline font-bold py-5 rounded uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,140,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group"
              type="submit"
            >
              Send Secure Transmission
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div className="bg-gradient-to-br from-surface-variant to-surface-container-high p-8 rounded border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>shield_person</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-tight">Existing Clients</h3>
                <p className="text-sm text-on-surface/60">Access your secure dashboard</p>
              </div>
            </div>
            <p className="text-on-surface/80 text-sm mb-6 leading-relaxed">
              For immediate technical assistance or to review active monitoring nodes, please log in to the Sentinel Support Portal.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all" href="#">
              Support Portal Access <span className="material-symbols-outlined text-lg">login</span>
            </a>
          </div>

          <div className="space-y-8 px-2">
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">alternate_email</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-outline mb-1">Direct Communication</h4>
                <p className="text-xl font-medium">ops@thumos.tech</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">call</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-outline mb-1">Secure Line</h4>
                <p className="text-xl font-medium">+1 (800) SENTINEL</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="material-symbols-outlined text-primary text-2xl mt-1">location_on</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2rem] text-outline mb-1">HQ Command Center</h4>
                <p className="text-xl font-medium leading-relaxed">
                  404 Cipher Street, Silicon Nexus,<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-surface-container-highest/50 py-3 px-4 rounded-full w-fit border border-primary/10">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,140,0,0.5)]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Live System Monitoring Active</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="relative h-[450px] w-full rounded overflow-hidden border border-outline-variant/10 group">
          <img className="w-full h-full object-cover grayscale brightness-50 contrast-150 opacity-30 group-hover:scale-105 transition-transform duration-[2000ms]" data-alt="Modern dark abstract map of San Francisco area" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa112T1-L7SHargkG9PPrvIOHNNiBUvLnNLZNy-f5C1rU9OjBlWG7Lcg2cLldKyEBwD0xPX21MW5Gqt2CkB6azX68axLFe8tp6t-NJV7vIBFMHmM62yt4khGISWH48qhoIv1SlVYhewkGQl3s7hKJLyWVyEpVuWhXBz2GrQ__PgeEpnxKaVDpvCPXOHc5TB5_6D3zTQ0qeFvhr54kpbqvb21DttBqxAnnLijWuoTwuG2x7j3q4Szmhlbp7PC-Sta6By_qbtJ466MI" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150"></div>
              <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-2xl">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>my_location</span>
              </div>
            </div>
            <div className="mt-4 bg-surface-container-high/90 backdrop-blur-md px-6 py-3 rounded inline-block border border-primary/20">
              <p className="font-headline font-bold text-sm tracking-widest uppercase">Thumos HQ Established</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
