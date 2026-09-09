import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { attorneys } from "@/lib/content/attorneys";
import { articles } from "@/lib/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/practice-areas`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE_URL}/attorneys`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.7 },
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

  const attorneyRoutes: MetadataRoute.Sitemap = attorneys.map((a) => ({
    url: `${SITE_URL}/attorneys/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...practiceAreaRoutes,
    ...attorneyRoutes,
    ...articleRoutes,
  ];
}
