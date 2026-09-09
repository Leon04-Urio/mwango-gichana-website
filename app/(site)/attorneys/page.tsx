import { PageHeader } from "@/components/sections/PageHeader";
import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { CTABand } from "@/components/sections/CTABand";
import { attorneys } from "@/lib/content/attorneys";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Our Team",
  description: `Meet the advocates of ${firm.name}, based in Kajiado South, Kenya.`,
  path: "/attorneys",
  keywords: ["advocates Kajiado", "lawyers Kajiado South", "attorneys Kimana"],
});

export default function AttorneysPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our People"
        title="Our Team"
        description="Advocates of the High Court of Kenya, based in Kajiado South and dedicated to the Amboseli ecosystem."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/attorneys" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
          <p className="mt-14 border-t border-border-hairline pt-8 text-sm text-charcoal-soft">
            Profiles above are placeholders pending verified names,
            credentials, and photographs from the firm.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
