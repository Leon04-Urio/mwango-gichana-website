import { PageHeader } from "@/components/sections/PageHeader";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTABand } from "@/components/sections/CTABand";
import { articles } from "@/lib/content/articles";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Insights",
  description: `Legal insights and updates from ${firm.name}, covering land, family, corporate and litigation matters relevant to Kajiado South, Kenya.`,
  path: "/insights",
  keywords: ["legal insights Kenya", "law blog Kenya", "advocate articles Kajiado"],
});

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Insights"
        title="Insights &amp; Legal Updates"
        description="Practical guidance on Kenyan law, written and reviewed by our advocates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="mb-10 border-l-2 border-gold-500 bg-ivory-dim p-6 text-sm text-charcoal-soft">
            Articles marked <strong>Demo Content</strong> illustrate this
            section&apos;s design and are pending review and approval by the
            firm&apos;s advocates before being treated as published legal
            guidance.
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
