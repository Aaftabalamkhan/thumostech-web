"use client";

import { useState } from "react";

type BookDemoFormProps = {
  className?: string;
};

export default function BookDemoForm({ className = "bg-surface-container-low" }: BookDemoFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      className={`${className} relative overflow-hidden rounded-[2rem] border border-white/8 p-10 shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:p-14`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(232,84,42,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(242,122,80,0.08),transparent_36%)]"></div>
      <div className="pointer-events-none absolute inset-px rounded-[calc(2rem-1px)] bg-gradient-to-b from-white/4 via-transparent to-black/10"></div>
      <div className="pointer-events-none absolute inset-x-10 top-0 h-20 bg-gradient-to-b from-white/6 to-transparent blur-2xl"></div>
      <div className="pointer-events-none absolute inset-x-12 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent blur-2xl"></div>
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/6 blur-[100px]"></div>

      <div className="relative z-10 flex flex-col gap-16 lg:flex-row">
        {/* Left: Info */}
        <div className="lg:w-2/5 space-y-6">
          <span className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">
            Get Started
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface">
            Book a Demo
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            See how Thumos Tech can transform your security posture. Our team will walk you through a
            personalized demo tailored to your infrastructure.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-sm text-on-surface/80">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              Personalized sessions
            </div>
            <div className="flex items-center gap-3 text-sm text-on-surface/80">
              <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
              No commitment required
            </div>
            <div className="flex items-center gap-3 text-sm text-on-surface/80">
              <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
              Expert-led walkthrough
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-3/5">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-16">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
              </div>
              <h3 className="font-headline text-2xl font-bold">Request Received!</h3>
              <p className="text-on-surface-variant max-w-sm">
                Our team will reach out within 24 hours to schedule your demo session.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/30 text-on-surface p-4 rounded transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/30 text-on-surface p-4 rounded transition-all outline-none"
                    placeholder="john@company.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
                    Company
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/30 text-on-surface p-4 rounded transition-all outline-none"
                    placeholder="Acme Corp"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
                    Phone
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/30 text-on-surface p-4 rounded transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary/80 ml-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary/30 text-on-surface p-4 rounded transition-all resize-none outline-none"
                  placeholder="Tell us about your security needs..."
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,140,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group"
                type="submit"
              >
                Request Demo
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
