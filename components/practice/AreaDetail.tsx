"use client";

import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import type { PracticeArea } from "@/lib/content/types";

export interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage: { src: string; alt: string } | null;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// The full content of one practice area. Shared by every layout.
export function AreaDetail({
  area,
  posts = [],
  dark = false,
  className,
}: {
  area: PracticeArea;
  posts?: RelatedPost[];
  dark?: boolean;
  className?: string;
}) {
  const body = dark ? "text-ivory/75" : "text-charcoal";
  const head = dark ? "text-ivory" : "text-navy-950";
  const rule = dark ? "border-border-hairline-dark" : "border-border-hairline";
  const label = cn(
    "text-xs font-medium uppercase tracking-[0.2em]",
    dark ? "text-gold-400" : "text-navy-950",
  );

  const dashed = (items: string[]) => (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className={cn("flex gap-4 text-sm leading-relaxed", body)}>
          <span
            className={cn("mt-3 h-px w-5 shrink-0", dark ? "bg-gold-400" : "bg-gold-500")}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-4">
        {area.intro.map((p) => (
          <p key={p.slice(0, 24)} className={cn("text-base leading-relaxed", body)}>
            {p}
          </p>
        ))}
      </div>

      <div>
        <h3 className={label}>Services</h3>
        <dl className={cn("mt-4 grid grid-cols-1 gap-x-8 border-t sm:grid-cols-2 lg:grid-cols-3", rule)}>
          {area.services.map((service) => (
            <div key={service.title} className={cn("border-b py-4", rule)}>
              <dt className={cn("font-display display-regular text-lg", head)}>{service.title}</dt>
              <dd className={cn("mt-1.5 text-sm leading-relaxed", body)}>
                {service.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h3 className={label}>Common client problems</h3>
          {dashed(area.commonProblems)}
        </div>
        <div>
          <h3 className={label}>How we assist</h3>
          {dashed(area.howWeAssist)}
        </div>
      </div>

      {area.kenyanContext && (
        <div className={cn("border-t pt-6", rule)}>
          <h3 className={label}>Kenyan legal context</h3>
          <p className={cn("mt-4 max-w-3xl text-sm leading-relaxed", body)}>
            {area.kenyanContext}
          </p>
        </div>
      )}

      <div>
        <h3 className={label}>Frequently asked questions</h3>
        <p className={cn("mt-2 text-sm", body)}>
          General information only, see our{" "}
          <Link href="/legal-disclaimer" className="underline hover:text-gold-500">
            legal disclaimer
          </Link>
          .
        </p>
        <div className={cn("mt-5", dark && "bg-ivory px-6")}>
          <FAQAccordion faqs={area.faqs} />
        </div>
      </div>

      {posts.length > 0 && (
        <div className={cn("border-t pt-6", rule)}>
          <h3 className={label}>Related reading</h3>
          <ul className={cn("mt-4 border-t", rule)}>
            {posts.map((post) => (
              <li key={post.slug} className={cn("border-b", rule)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-ring group flex items-start gap-5 py-5"
                >
                  <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden bg-navy-900 sm:h-[6.5rem] sm:w-[6.5rem]">
                    {post.coverImage && (
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        sizes="112px"
                        className="object-cover transition-opacity duration-300 group-hover:opacity-85"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className={cn("text-xs uppercase tracking-[0.15em]", body)}>
                      {formatDate(post.publishedAt)}
                    </p>
                    <h4
                      className={cn(
                        "mt-1.5 font-display display-regular text-lg leading-snug transition-colors group-hover:text-gold-600",
                        head,
                      )}
                    >
                      {post.title}
                    </h4>
                    <p className={cn("mt-1.5 line-clamp-2 text-sm leading-relaxed", body)}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href="/contact"
        className={cn(
          "focus-ring inline-flex items-center justify-center border px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300",
          dark
            ? "border-gold-400 bg-gold-400 text-navy-950 hover:bg-transparent hover:text-gold-400"
            : "border-navy-900 bg-navy-900 text-ivory hover:bg-transparent hover:text-navy-900",
        )}
      >
        Request a consultation
      </Link>
    </div>
  );
}
