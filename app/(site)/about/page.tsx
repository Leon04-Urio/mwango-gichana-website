import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";
import { isPlaceholder } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${firm.name}, a boutique law firm serving Kajiado South and the Amboseli ecosystem.`,
  path: "/about",
  keywords: ["about Mwango Gichana Advocates", "law firm Kajiado South"],
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="A Boutique Practice, Rooted in Kajiado South"
        description="Founded to bring Nairobi-calibre legal counsel to the Amboseli ecosystem, delivered by advocates who understand the land, the communities, and the issues unique to this part of Kenya."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      />

      <section className="bg-ivory py-24 sm:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Who We Are" title="Our Story" />
            <div className="mt-7 space-y-5 text-charcoal leading-relaxed">
              {firm.aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            {/* Photo container. Add the firm's photo here when it is ready. */}
            <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-border-hairline bg-ivory-dim">
              <span className="text-sm uppercase tracking-[0.2em] text-charcoal">Img place holder</span>
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-gold-500/60 sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {(!isPlaceholder(firm.vision) || !isPlaceholder(firm.mission)) && (
        <section className="border-y border-border-hairline bg-ivory-dim py-24 sm:py-28">
          <div className="mx-auto max-w-8xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
              {!isPlaceholder(firm.vision) && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-600">
                    Our Vision
                  </p>
                  <p className="mt-4 font-display text-2xl leading-snug text-navy-950">
                    {firm.vision}
                  </p>
                </div>
              )}
              {!isPlaceholder(firm.mission) && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-600">
                    Our Mission
                  </p>
                  <p className="mt-4 font-display text-2xl leading-snug text-navy-950">
                    {firm.mission}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory py-24 sm:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Our Approach"
            title="What Sets Us Apart"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {firm.values.map((value, i) => (
              <div key={value.title} className="border-t-2 border-gold-500 pt-5">
                <span className="font-display text-sm text-charcoal/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-hairline bg-ivory-dim py-24 sm:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Geographic Reach" title="Where We Practice" />
              <p className="mt-6 text-charcoal leading-relaxed">
                Based in {firm.location.town}, {firm.location.subCounty}, we
                serve clients throughout {firm.location.county} and the wider
                Amboseli ecosystem, appearing before:
              </p>
              <ul className="mt-5 space-y-2.5">
                {firm.courts.map((court) => (
                  <li key={court} className="flex items-center gap-3 text-charcoal">
                    <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                    {court}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader eyebrow="Who We Serve" title="Our Clients" />
              <ul className="mt-6 space-y-2.5">
                {firm.clientTypes.map((client) => (
                  <li key={client} className="flex items-center gap-3 text-charcoal">
                    <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
