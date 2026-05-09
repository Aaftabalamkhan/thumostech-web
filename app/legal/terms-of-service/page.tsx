export default function TermsOfServicePage() {
  return (
    <div className="bg-background pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <p className="font-label uppercase tracking-[0.2rem] text-xs font-bold text-primary">Legal</p>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
          Terms of Service
        </h1>
        <div className="space-y-5 text-on-surface-variant leading-relaxed">
          <p>
            By using this website, you agree to use it only for lawful business communication and service
            inquiries.
          </p>
          <p>
            Content on this site is provided for informational purposes. Service scopes, timelines, and
            commitments are finalized through formal proposals and executed agreements.
          </p>
          <p>
            Thumos Tech may update these terms as offerings evolve. Continued use of the site indicates
            acceptance of the latest published version.
          </p>
        </div>
      </section>
    </div>
  );
}
