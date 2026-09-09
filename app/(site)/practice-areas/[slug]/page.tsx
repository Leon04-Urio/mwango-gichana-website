import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { CTABand } from "@/components/sections/CTABand";
import {
  practiceAreas,
  getPracticeAreaBySlug,
} from "@/lib/content/practiceAreas";
import { attorneys } from "@/lib/content/attorneys";
import { articles } from "@/lib/content/articles";
import { buildMetadata } from "@/lib/seo";
import { Check, CircleAlert } from "lucide-react";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.title,
    description: area.metaDescription,
    path: `/practice-areas/${area.slug}`,
    keywords: area.seoKeywords,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const responsibleAttorneys = attorneys.filter((a) =>
    area.attorneySlugs.includes(a.slug)
  );
  const relatedArticles = articles.filter((a) =>
    area.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <>
      <PageHeader
        eyebrow="Practice Area"
        title={area.title}
        description={area.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.shortTitle, href: `/practice-areas/${area.slug}` },
        ]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
          <div className="lg:col-span-8">
            <div className="space-y-5 text-charcoal-soft leading-relaxed">
              {area.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="font-display text-2xl text-navy-950">
                Our Services
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {area.services.map((service) => (
                  <div
                    key={service.title}
                    className="border border-border-hairline p-6"
                  >
                    <h3 className="font-display text-base text-navy-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <h2 className="flex items-center gap-2.5 font-display text-xl text-navy-950">
                  <CircleAlert
                    className="size-5 text-gold-600"
                    aria-hidden="true"
                  />
                  Common Client Problems
                </h2>
                <ul className="mt-5 space-y-3">
                  {area.commonProblems.map((problem) => (
                    <li
                      key={problem}
                      className="border-l-2 border-border-hairline pl-4 text-sm leading-relaxed text-charcoal-soft"
                    >
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="flex items-center gap-2.5 font-display text-xl text-navy-950">
                  <Check className="size-5 text-gold-600" aria-hidden="true" />
                  How We Assist
                </h2>
                <ul className="mt-5 space-y-3">
                  {area.howWeAssist.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-gold-500/60 pl-4 text-sm leading-relaxed text-charcoal-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {area.kenyanContext && (
              <div className="mt-14 border-l-2 border-gold-500 bg-ivory-dim p-8">
                <h2 className="font-display text-xl text-navy-950">
                  Kenyan Legal Context
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {area.kenyanContext}
                </p>
              </div>
            )}

            <div className="mt-14">
              <h2 className="font-display text-2xl text-navy-950">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-charcoal-soft">
                General information only — see our{" "}
                <a href="/legal-disclaimer" className="underline hover:text-navy-900">
                  legal disclaimer
                </a>
                .
              </p>
              <div className="mt-6">
                <FAQAccordion faqs={area.faqs} />
              </div>
            </div>
          </div>

          <aside className="space-y-10 lg:col-span-4">
            <div className="border border-border-hairline p-7">
              <h3 className="font-display text-lg text-navy-950">
                Discuss Your Matter
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                Every matter starts with a conversation. Request a
                consultation and we&apos;ll direct you to the right advocate.
              </p>
              <a
                href="/contact"
                className="focus-ring mt-5 inline-flex w-full items-center justify-center border border-navy-900 bg-navy-900 px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-navy-800"
              >
                Request a Consultation
              </a>
            </div>

            {responsibleAttorneys.length > 0 ? (
              <div>
                <h3 className="font-display text-lg text-navy-950">
                  Attorney Responsible
                </h3>
                <div className="mt-5 space-y-8">
                  {responsibleAttorneys.map((attorney) => (
                    <AttorneyCard key={attorney.slug} attorney={attorney} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-dashed border-border-hairline p-6 text-sm text-charcoal-soft">
                Attorney assignment for this practice area is pending
                confirmation by the firm.
              </div>
            )}
          </aside>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="border-t border-border-hairline bg-ivory-dim py-20 sm:py-24">
          <div className="mx-auto max-w-8xl px-6 lg:px-10">
            <SectionHeader eyebrow="Related Reading" title="Related Insights" />
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
