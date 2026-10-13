import { SectionHeader } from "@/components/ui/SectionHeader";
import { firm } from "@/lib/content/firm";

function Dashed({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-charcoal">
          <span className="h-px w-6 shrink-0 bg-gold-500" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Where the firm appears and who it serves. Same content as the About page.
export function ReachAndClients() {
  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Geographic Reach" title="Where We Practice" />
            <p className="mt-4 text-[0.95rem] leading-relaxed sm:mt-6 sm:text-base text-charcoal">
              Based in {firm.location.town}, {firm.location.subCounty}, we serve clients throughout{" "}
              {firm.location.county} and the wider Amboseli ecosystem, appearing before:
            </p>
            <Dashed items={firm.courts} />
          </div>
          <div>
            <SectionHeader eyebrow="Who We Serve" title="Our Clients" />
            <div className="mt-6">
              <Dashed items={firm.clientTypes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
