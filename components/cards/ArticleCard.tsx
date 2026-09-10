import Image from "next/image";
import Link from "next/link";
import { getPracticeAreaBySlug } from "@/lib/content/practiceAreas";

export interface ArticleCardData {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  practiceAreaSlug: string | null;
  coverImage: { src: string; alt: string } | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({ article }: { article: ArticleCardData }) {
  const practiceArea = article.practiceAreaSlug
    ? getPracticeAreaBySlug(article.practiceAreaSlug)
    : undefined;

  return (
    <Link href={`/blog/${article.slug}`} className="focus-ring group block">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
        {article.coverImage && (
          <Image
            src={article.coverImage.src}
            alt={article.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="mt-5">
        {practiceArea && (
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
            {practiceArea.shortTitle}
          </p>
        )}
        <h3 className="mt-2 font-display text-xl leading-snug text-navy-950 transition-colors group-hover:text-navy-800">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-soft line-clamp-2">
          {article.excerpt}
        </p>
        <p className="mt-3 text-xs text-charcoal-soft/70">
          {formatDate(article.publishedAt)}
        </p>
      </div>
    </Link>
  );
}
