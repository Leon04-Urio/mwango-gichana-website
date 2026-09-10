import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { sanityClient } from "@/sanity/lib/client";
import { articleListQuery } from "@/sanity/lib/queries";
import type { ArticleSummary } from "@/sanity/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/practice-areas`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/legal-disclaimer`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const practiceAreaRoutes: MetadataRoute.Sitemap = practiceAreas.map(
    (area) => ({
      url: `${SITE_URL}/practice-areas/${area.slug}`,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const articles = await sanityClient.fetch<ArticleSummary[]>(articleListQuery);
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...articleRoutes];
}
