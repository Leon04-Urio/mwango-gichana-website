import { absoluteUrl } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

interface ArticleJsonLdInput {
  title: string;
  metaDescription: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string | null;
  coverImageSrc: string | null;
}

export function ArticleJsonLd({ article }: { article: ArticleJsonLdInput }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.coverImageSrc || undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author || firm.name,
    },
    publisher: {
      "@type": "Organization",
      name: firm.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
