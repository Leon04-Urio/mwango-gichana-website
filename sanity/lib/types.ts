import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImageRef {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: unknown;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  author: string | null;
  publishedAt: string;
  updatedAt?: string;
  category: string | null;
  practiceAreaSlug: string | null;
  coverImage: SanityImageRef;
  metaDescription: string;
}

export interface ArticleFull extends ArticleSummary {
  content: PortableTextBlock[];
  relatedArticles: ArticleSummary[];
}

export interface ClientLogo {
  _id: string;
  name: string;
  logo?: SanityImageRef;
  website?: string;
  demoLogo?: string; // TEMP PREVIEW: local demo image
}

export interface Testimonial {
  _id: string;
  quote: string;
  clientName?: string;
  clientDescription?: string;
  practiceAreaSlug?: string;
}
