"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ArticleCardData } from "@/components/cards/ArticleCard";
import { getPracticeAreaBySlug } from "@/lib/content/practiceAreas";
import { cn } from "@/lib/utils";

const PER_PAGE = 6;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// A list of articles. On larger screens the photo alternates left and right;
// on phones each article is a compact row. Pages appear once there are more
// than PER_PAGE articles.
export function BlogIndex({ articles }: { articles: ArticleCardData[] }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  const shown = articles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (n: number) => {
    setPage(n);
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="blog-list" className="scroll-mt-28">
      <ul className="divide-y divide-border-hairline">
        {shown.map((article, i) => {
          const area = article.practiceAreaSlug
            ? getPracticeAreaBySlug(article.practiceAreaSlug)
            : undefined;
          return (
            <li key={article.slug} className="py-6 sm:py-12">
              <Link
                href={`/blog/${article.slug}`}
                className="focus-ring group flex items-start gap-4 sm:grid sm:grid-cols-12 sm:items-center sm:gap-12"
              >
                <div
                  className={cn(
                    "relative aspect-square w-24 shrink-0 overflow-hidden bg-navy-900 sm:col-span-6 sm:aspect-[16/10] sm:w-full",
                    i % 2 === 1 && "sm:order-2",
                  )}
                >
                  {article.coverImage && (
                    <Image
                      src={article.coverImage.src}
                      alt={article.coverImage.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 96px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className={cn("min-w-0 flex-1 sm:col-span-6", i % 2 === 1 && "sm:order-1")}>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-charcoal sm:text-xs">
                    {area && <span className="text-gold-600">{area.shortTitle}</span>}
                    {area && <span aria-hidden="true"> | </span>}
                    {formatDate(article.publishedAt)}
                  </p>
                  <h2 className="font-display display-regular mt-2 text-base leading-snug text-navy-950 transition-colors group-hover:text-gold-600 sm:mt-3 sm:text-3xl">
                    {article.title}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-charcoal sm:mt-4 sm:line-clamp-3 sm:text-base sm:leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 hidden items-center gap-2 border-b border-gold-500 pb-1 text-sm uppercase tracking-[0.2em] text-navy-900 sm:inline-flex">
                    Read more
                    <ArrowUpRight className="size-4 text-gold-600" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {pages > 1 && (
        <nav aria-label="Pages" className="mt-10 flex items-center justify-center gap-3 border-t border-border-hairline pt-8">
          {Array.from({ length: pages }, (_, n) => n + 1).map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "focus-ring size-10 text-base transition-colors",
                n === page ? "bg-navy-950 text-ivory" : "text-navy-900 hover:text-gold-600",
              )}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
