import { PageHeader } from "@/components/sections/PageHeader";
import { PracticeTabs } from "@/components/practice/PracticeTabs";
import type { RelatedPost } from "@/components/practice/AreaDetail";
import { sanityFetch, resolveImage } from "@/sanity/lib/fetch";
import { articleListQuery } from "@/sanity/lib/queries";
import type { ArticleSummary } from "@/sanity/lib/types";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { buildMetadata } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export const metadata = buildMetadata({
  title: "Practice Areas",
  description: `Legal services offered by ${firm.name} across land & environment, family & succession, corporate & commercial law, litigation, and legal research, Kajiado South, Kenya.`,
  path: "/practice-areas",
  keywords: [
    "law firm practice areas Kajiado",
    "advocate services Kenya",
    "land lawyer Kajiado",
    "family lawyer Kenya",
    "corporate lawyer Kenya",
  ],
});

export default async function PracticeAreasPage() {
  const articles = await sanityFetch<ArticleSummary[]>(articleListQuery);
  const related: Record<string, RelatedPost[]> = {};
  for (const a of articles) {
    if (!a.practiceAreaSlug) continue;
    (related[a.practiceAreaSlug] ??= []).push({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      publishedAt: a.publishedAt,
      coverImage: resolveImage(a.coverImage, a.title),
    });
  }

  return (
    <>
      <PageHeader
        regular
        eyebrow="What We Do"
        title="Practice Areas"
        description="A general practice firm with particular depth across five core areas, built around the legal needs of Kajiado South and the Amboseli ecosystem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
        ]}
      />

      <PracticeTabs areas={practiceAreas} related={related} />
    </>
  );
}
