export function LegalPageBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-10 border-l-2 border-gold-500 bg-ivory-dim p-6 text-sm text-charcoal">
          This page contains placeholder legal copy for structural and
          demonstration purposes. It must be reviewed and approved by the
          firm&apos;s legal team before publication.
        </div>
        <div className="prose-article space-y-6 text-charcoal leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-navy-950 [&_h2]:pt-4">
          {children}
        </div>
      </div>
    </section>
  );
}
