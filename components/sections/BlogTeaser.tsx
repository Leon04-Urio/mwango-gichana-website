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
            <h2 className="font-display display-light mt-8 text-3xl leading-[1.12] text-navy-950 sm:text-4xl">
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
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <Link href={`/blog/${article.slug}`} className="focus-ring group block">
                <div className="relative aspect-video w-full overflow-hidden bg-navy-900">
                  {article.coverImage && (
                    <Image
                      src={article.coverImage.src}
                      alt={article.coverImage.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 90vw"
                      className="object-cover transition-opacity duration-500 group-hover:opacity-85"
                    />
                  )}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-charcoal">
                  {formatDate(article.publishedAt)}
                </p>
                <h3 className="font-display display-light mt-2 text-xl leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-base leading-relaxed text-charcoal">
                  {article.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
