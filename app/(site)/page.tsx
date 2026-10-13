import type { ArticleCardData } from "@/components/cards/ArticleCard";
import SealHome from "@/components/home/seal/SealHome";
import { sanityFetch, resolveImage } from "@/sanity/lib/fetch";
import {
  articleListQuery,
  approvedClientsQuery,
  approvedTestimonialsQuery,
} from "@/sanity/lib/queries";
import type { ArticleSummary, ClientLogo, Testimonial } from "@/sanity/lib/types";
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

export default async function HomePage() {
  const [articles, clients, testimonials] = await Promise.all([
    sanityFetch<ArticleSummary[]>(articleListQuery),
    sanityFetch<ClientLogo[]>(approvedClientsQuery),
    sanityFetch<Testimonial[]>(approvedTestimonialsQuery),
  ]);

  const recentPosts: ArticleCardData[] = articles.slice(0, 3).map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    publishedAt: article.publishedAt,
    practiceAreaSlug: article.practiceAreaSlug,
    coverImage: resolveImage(article.coverImage, article.title),
  }));

  return <SealHome articles={recentPosts} clients={clients} testimonials={testimonials} />;
}
