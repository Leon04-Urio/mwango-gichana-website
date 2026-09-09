import type { Attorney } from "@/lib/content/types";
import { absoluteUrl } from "@/lib/seo";
import { firm } from "@/lib/content/firm";

export function PersonJsonLd({ attorney }: { attorney: Attorney }) {
  if (attorney.isPlaceholder) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: attorney.name,
    jobTitle: attorney.title,
    url: absoluteUrl(`/attorneys/${attorney.slug}`),
    worksFor: {
      "@type": "LegalService",
      name: firm.name,
    },
    alumniOf: attorney.education,
    memberOf: attorney.memberships,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
