import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { articles, getArticleBySlug } from "@/lib/content/articles";
import { getPracticeAreaBySlug } from "@/lib/content/practiceAreas";
import { getAttorneyBySlug } from "@/lib/content/attorneys";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    image: article.coverImage.src,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const practiceArea = getPracticeAreaBySlug(article.practiceAreaSlug);
  const author = getAttorneyBySlug(article.author);
  const headings = article.content.filter((b) => b.type === "heading");
  const related = articles.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <>
      <ArticleJsonLd article={article} />

      <div className="border-b border-border-hairline bg-ivory-dim">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-32 sm:pt-36 lg:pt-40">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: article.title, href: `/insights/${article.slug}` },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {practiceArea && (
              <Link
                href={`/practice-areas/${practiceArea.slug}`}
                className="focus-ring text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 hover:underline"
              >
                {practiceArea.shortTitle}
              </Link>
            )}
            {article.isDemo && (
              <span className="border border-gold-500/50 bg-gold-500/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-gold-600">
                Demo Content
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-3xl leading-tight text-balance text-navy-950 sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal-soft">
            <span>
              By{" "}
              <span className="font-medium text-navy-950">
                {author ? author.name : article.author}
              </span>
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>Published {formatDate(article.publishedAt)}</span>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>Updated {formatDate(article.updatedAt)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden bg-navy-900">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-20">
        {headings.length > 1 && (
          <aside className="order-2 lg:order-1 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
                In This Article
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-border-hairline">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a
                      href={`#${slugify(h.text)}`}
                      className="focus-ring block border-l-2 border-transparent pl-4 -ml-px text-sm text-charcoal-soft transition-colors hover:border-gold-500 hover:text-navy-950"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}

        <article
          className={`order-1 max-w-3xl lg:order-2 ${headings.length > 1 ? "lg:col-span-9" : "lg:col-span-8 lg:col-start-3"}`}
        >
          <div className="prose-article space-y-5 text-charcoal leading-relaxed">
            {article.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-base sm:text-lg">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    id={slugify(block.text)}
                    className="pt-4 font-display text-2xl text-navy-950 scroll-mt-32"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <ul key={i} className="list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item} className="text-base sm:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>

          <div className="mt-14 border-t border-border-hairline pt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
              Legal Disclaimer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              This article provides general information and does not
              constitute legal advice. For advice regarding your specific
              circumstances, consult a qualified advocate. Read our full{" "}
              <Link href="/legal-disclaimer" className="underline hover:text-navy-900">
                legal disclaimer
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border-hairline pt-8">
            {practiceArea && (
              <Link
                href={`/practice-areas/${practiceArea.slug}`}
                className="focus-ring inline-flex items-center border border-navy-900 bg-navy-900 px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-navy-800"
              >
                Learn About {practiceArea.shortTitle}
              </Link>
            )}
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center border border-navy-900/30 px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
            >
              Request a Consultation
            </Link>
          </div>
        </article>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border-hairline bg-ivory-dim py-20">
          <div className="mx-auto max-w-8xl px-6 lg:px-10">
            <h2 className="font-display text-2xl text-navy-950">
              Related Insights
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
