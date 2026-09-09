import { PageHeader } from "@/components/sections/PageHeader";
import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { CTABand } from "@/components/sections/CTABand";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Practice Areas",
  description: `Legal services offered by ${firm.name} across land & environment, family & succession, corporate & commercial law, litigation, and legal research — Kajiado South, Kenya.`,
  path: "/practice-areas",
  keywords: [
    "law firm practice areas Kajiado",
    "advocate services Kenya",
    "land lawyer Kajiado",
    "family lawyer Kenya",
    "corporate lawyer Kenya",
  ],
});

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Practice Areas"
        description="A general practice firm with particular depth across five core areas, built around the legal needs of Kajiado South and the Amboseli ecosystem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
        ]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px bg-border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard key={area.slug} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
