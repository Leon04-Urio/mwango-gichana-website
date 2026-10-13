import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import type { ArticleCardData } from "@/components/cards/ArticleCard";
import { BlogIndex } from "@/components/sections/BlogIndex";
import { sanityFetch, resolveImage } from "@/sanity/lib/fetch";
import { articleListQuery } from "@/sanity/lib/queries";
import type { ArticleSummary } from "@/sanity/lib/types";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Blog & Insights",
  description: `Legal insights and updates from ${firm.name}, covering land, family, corporate and litigation matters relevant to Kajiado South, Kenya.`,
  path: "/blog",
  keywords: ["legal insights Kenya", "law blog Kenya", "advocate articles Kajiado"],
});

export default async function BlogPage() {
  const articles = await sanityFetch<ArticleSummary[]>(articleListQuery);

  const cards: ArticleCardData[] = articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    publishedAt: article.publishedAt,
    practiceAreaSlug: article.practiceAreaSlug,
    coverImage: resolveImage(article.coverImage, article.title),
  }));

  return (
    <>
      <PageHeader
        eyebrow="Our Blog"
        title="Blog &amp; Legal Updates"
        description="Practical guidance on Kenyan law, written and reviewed by our advocates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog & Insights", href: "/blog" }]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          {cards.length > 0 ? (
            <BlogIndex articles={cards} />
          ) : (
            <div className="border border-dashed border-border-hairline p-10 text-center text-charcoal">
              No blog posts published yet. New posts created and published in
              the{" "}
              <Link href="/studio" className="underline hover:text-navy-900">
                Studio
              </Link>{" "}
              will appear here.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
