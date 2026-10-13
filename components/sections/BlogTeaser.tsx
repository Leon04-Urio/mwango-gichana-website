"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ArticleCardData } from "@/components/cards/ArticleCard";
import { fadeUp, staggerChildren } from "@/lib/motion";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Image, date, title. Nothing else.
export function BlogTeaser({
  articles,
  title = "Insights",
}: {
  articles: ArticleCardData[];
  title?: string;
}) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="block h-px w-14 bg-gold-500" aria-hidden="true" />
            <h2 className="font-display display-light mt-6 text-2xl leading-[1.12] text-navy-950 sm:mt-8 sm:text-4xl">
              {title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="focus-ring group inline-flex items-center gap-2 self-start border-b border-gold-500 pb-1 text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-gold-600 sm:self-auto"
          >
            All articles
            <ArrowUpRight className="size-4 text-gold-600" aria-hidden="true" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren(0.1)}
          className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:mt-12 sm:gap-y-12 md:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <Link href={`/blog/${article.slug}`} className="focus-ring group flex items-start gap-4 sm:block">
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-navy-900 sm:aspect-video sm:w-full">
                  {article.coverImage && (
                    <Image
                      src={article.coverImage.src}
                      alt={article.coverImage.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 90vw, 96px"
                      className="object-cover transition-opacity duration-500 group-hover:opacity-85"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-charcoal sm:mt-5 sm:text-xs">
                  {formatDate(article.publishedAt)}
                </p>
                <h3 className="font-display display-light mt-1.5 text-base leading-snug text-navy-950 transition-colors group-hover:text-gold-600 sm:mt-2 sm:text-xl">
                  {article.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-charcoal sm:mt-2 sm:text-base sm:leading-relaxed">
                  {article.excerpt}
                </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
