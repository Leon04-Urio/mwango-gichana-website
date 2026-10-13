import Image from "next/image";
import Link from "next/link";
import type { ArticleCardData } from "@/components/cards/ArticleCard";
import { getPracticeAreaBySlug } from "@/lib/content/practiceAreas";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// A compact grid: wide thumbnail, title, short excerpt. Four across on large screens.
export function BlogIndex({ articles }: { articles: ArticleCardData[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {articles.map((article) => {
        const area = article.practiceAreaSlug
          ? getPracticeAreaBySlug(article.practiceAreaSlug)
          : undefined;
        return (
          <li key={article.slug}>
            <Link
              href={`/blog/${article.slug}`}
              className="focus-ring group flex flex-col gap-2 transition-opacity duration-300 hover:opacity-75"
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden bg-navy-900">
                {article.coverImage && (
                  <Image
                    src={article.coverImage.src}
                    alt={article.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              {area && (
                <p className="text-xs uppercase tracking-[0.18em] text-gold-600">{area.shortTitle}</p>
              )}
              <p className="text-xs uppercase tracking-[0.18em] text-charcoal">
                {formatDate(article.publishedAt)}
              </p>
              <h3 className="font-display text-xl leading-snug text-navy-950">{article.title}</h3>
              <p className="line-clamp-3 text-base leading-relaxed text-charcoal">{article.excerpt}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
