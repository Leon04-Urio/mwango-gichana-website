import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
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
      <div className="bg-ivory-dim">
        <div className="mx-auto max-w-8xl px-6 pb-5 pt-24 sm:pt-28 lg:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog & Insights", href: "/blog" }]} />
        </div>
      </div>

      <div className="relative overflow-hidden bg-charcoal">
        <Image src="/hero-nairobi.jpg" alt="" fill sizes="100vw" priority className="object-cover object-[50%_30%]" />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative px-6 py-14 text-center [text-shadow:0_1px_14px_rgba(0,0,0,0.6)] sm:py-20">
          <h1 className="font-display display-regular text-4xl text-ivory sm:text-5xl">Blog</h1>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-24">
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
