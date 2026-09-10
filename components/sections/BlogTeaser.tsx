"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function BlogTeaser({ articles }: { articles: ArticleCardData[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="From the Blog"
            title="Recent Posts"
            description="Practical guidance on Kenyan law, written and reviewed by our advocates."
          />
          <div className="shrink-0">
            <Button href="/blog" variant="secondary" showArrow>
              View All Posts
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren(0.1)}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={fadeUp}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
