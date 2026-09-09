import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { AttorneysTeaser } from "@/components/sections/AttorneysTeaser";
import { InsightsTeaser } from "@/components/sections/InsightsTeaser";
import { CTABand } from "@/components/sections/CTABand";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: `${firm.name} | Advocates in Kajiado South, Kenya`,
  description: firm.descriptionShort,
  path: "/",
  keywords: [
    "law firm Kajiado",
    "advocate Kimana",
    "advocates Kajiado South",
    "land lawyer Kajiado",
    "family lawyer Kenya",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutTeaser />
      <PracticeAreasGrid />
      <AttorneysTeaser />
      <InsightsTeaser />
      <CTABand />
    </>
  );
}
