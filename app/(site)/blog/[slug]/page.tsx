import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { PortableTextRenderer, extractHeadings } from "@/components/blog/PortableTextRenderer";
import { sanityFetch, resolveImage } from "@/sanity/lib/fetch";
import { sanityClient } from "@/sanity/lib/client";
import { articleBySlugQuery, articleListQuery, articleSlugsQuery } from "@/sanity/lib/queries";
import type { ArticleFull, ArticleSummary } from "@/sanity/lib/types";
import { getPracticeAreaBySlug } from "@/lib/content/practiceAreas";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { ShareLinks } from "@/components/blog/ShareLinks";

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<{ slug: string }[]>(articleSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await sanityFetch<ArticleFull | null>(articleBySlugQuery, { slug });
  if (!article) return {};
  const image = resolveImage(article.coverImage, article.title);
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    image: image?.src,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await sanityFetch<ArticleFull | null>(articleBySlugQuery, { slug });
  if (!article) notFound();

  const practiceArea = article.practiceAreaSlug
    ? getPracticeAreaBySlug(article.practiceAreaSlug)
    : undefined;
  const coverImage = resolveImage(article.coverImage, article.title);
  const headings = extractHeadings(article.content);

  const allArticles = await sanityFetch<ArticleSummary[]>(articleListQuery);
  const latest: ArticleCardData[] = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      publishedAt: a.publishedAt,
      practiceAreaSlug: a.practiceAreaSlug,
      coverImage: resolveImage(a.coverImage, a.title),
    }));
  const hasSidebar = headings.length > 1 || latest.length > 0;

  return (
    <>
      <ArticleJsonLd
        article={{
          title: article.title,
          metaDescription: article.metaDescription,
          slug: article.slug,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          author: article.author,
          coverImageSrc: coverImage?.src ?? null,
        }}
      />

      <div className="bg-ivory-dim">
        <div className="mx-auto max-w-5xl px-6 pb-5 pt-24 sm:pt-28 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog & Insights", href: "/blog" },
              { label: article.title, href: `/blog/${article.slug}` },
            ]}
          />
        </div>
      </div>

      <div className="relative overflow-hidden bg-charcoal">
        {coverImage && (
          <>
            <Image
              src={coverImage.src}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/40"
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative mx-auto max-w-5xl px-6 py-10 lg:px-10 [text-shadow:0_1px_14px_rgba(0,0,0,0.65)] sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            {practiceArea && (
              <Link
                href={`/practice-areas#${practiceArea.slug}`}
                className="focus-ring text-xs font-medium uppercase tracking-[0.15em] text-gold-400 hover:underline"
              >
                {practiceArea.shortTitle}
              </Link>
            )}
          </div>
          <h1 className="mt-3 font-display text-2xl leading-tight text-balance text-ivory sm:text-3xl md:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ivory/80">
            <span>
              By{" "}
              <span className="font-medium text-ivory">
                {article.author || "Mwango Gichana & Co. Advocates"}
              </span>
            </span>
            <span aria-hidden="true">|</span>
            <span>Published {formatDate(article.publishedAt)}</span>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <>
                <span aria-hidden="true">|</span>
                <span>Updated {formatDate(article.updatedAt)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-14 lg:gap-20 lg:px-10 lg:py-20 ${hasSidebar ? "lg:grid-cols-[minmax(0,40rem)_15rem] lg:justify-between" : ""}`}
      >

        <article
          className="order-1 mx-auto w-full max-w-[40rem] lg:mx-0"
        >
          <div className="prose-article space-y-6 text-charcoal">
            <PortableTextRenderer value={article.content} />
          </div>

          <div className="mt-14 border-t border-border-hairline pt-8">
            <p className="text-xs font-medium uppercase tracking-wide text-charcoal">
              Legal Disclaimer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">
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
                href={`/practice-areas#${practiceArea.slug}`}
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
        {hasSidebar && (
          <aside className="order-2 xl:translate-x-12">
            <div className="lg:sticky lg:top-32">
              {headings.length > 1 && (
                <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal">
                  In This Article
                </p>
                <ul className="mt-4 space-y-2.5 border-l border-border-hairline">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="focus-ring block border-l-2 border-transparent pl-4 -ml-px text-sm text-charcoal transition-colors hover:border-gold-500 hover:text-navy-950"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
                </>
              )}
              {latest.length > 0 && (
                <div className={headings.length > 1 ? "mt-12 border-t border-border-hairline pt-8" : ""}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal">
                    Latest Insights
                  </p>
                  <ul className="mt-5 space-y-6">
                    {latest.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="focus-ring group block">
                          <p className="text-xs uppercase tracking-[0.15em] text-charcoal">
                            {formatDate(post.publishedAt)}
                          </p>
                          <p className="mt-1.5 font-display text-lg leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
                            {post.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={headings.length > 1 || latest.length > 0 ? "mt-12 border-t border-border-hairline pt-8" : ""}>
                <ShareLinks url={`${SITE_URL}/blog/${article.slug}`} title={article.title} />
              </div>
            </div>
          </aside>
        )}
      </div>

      {article.relatedArticles?.length > 0 && (
        <section className="border-t border-border-hairline bg-ivory-dim py-20">
          <div className="mx-auto max-w-8xl px-6 lg:px-10">
            <h2 className="font-display text-xl text-navy-950">Related Posts</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {article.relatedArticles.map((related) => (
                <ArticleCard
                  key={related.slug}
                  article={{
                    slug: related.slug,
                    title: related.title,
                    excerpt: related.excerpt,
                    publishedAt: related.publishedAt,
                    practiceAreaSlug: related.practiceAreaSlug,
                    coverImage: resolveImage(related.coverImage, related.title),
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
