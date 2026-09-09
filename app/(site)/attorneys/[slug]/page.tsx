import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { attorneys, getAttorneyBySlug } from "@/lib/content/attorneys";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) return {};
  return buildMetadata({
    title: attorney.name,
    description: attorney.metaDescription,
    path: `/attorneys/${attorney.slug}`,
    noIndex: attorney.isPlaceholder,
  });
}

export default async function AttorneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) notFound();

  const areas = practiceAreas.filter((area) =>
    attorney.practiceAreaSlugs.includes(area.slug)
  );

  return (
    <>
      <PersonJsonLd attorney={attorney} />

      <div className="border-b border-border-hairline bg-ivory-dim">
        <div className="mx-auto max-w-8xl px-6 pb-16 pt-32 sm:pt-36 lg:px-10 lg:pt-40">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Team", href: "/attorneys" },
              { label: attorney.name, href: `/attorneys/${attorney.slug}` },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-[280px_1fr] lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden bg-navy-900">
                <Image
                  src={attorney.photo.src}
                  alt={attorney.photo.alt}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              {attorney.isPlaceholder && (
                <span className="mt-3 inline-block border border-gold-500/50 bg-gold-500/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-gold-600">
                  Placeholder Profile
                </span>
              )}
            </div>

            <div>
              <h1 className="font-display text-4xl text-navy-950 sm:text-5xl">
                {attorney.name}
              </h1>
              <p className="mt-2 text-base font-medium uppercase tracking-wide text-gold-600">
                {attorney.title}
              </p>

              {areas.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="focus-ring border border-navy-900/20 px-3 py-1.5 text-xs font-medium text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900/5"
                    >
                      {area.shortTitle}
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                      Admitted to the Bar
                    </p>
                    <p className="mt-1 text-sm text-navy-950">
                      {attorney.admittedYear}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                      Education
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-navy-950">
                      {attorney.education.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
                      Memberships
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-navy-950">
                      {attorney.memberships.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-navy-950">Biography</h2>
          <div className="mt-6 space-y-5 text-charcoal-soft leading-relaxed">
            {attorney.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary" showArrow>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
