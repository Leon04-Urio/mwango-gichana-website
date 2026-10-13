import { firm } from "@/lib/content/firm";
import { absoluteUrl } from "@/lib/seo";
import { isPlaceholder } from "@/lib/utils";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    description: firm.descriptionShort,
    url: absoluteUrl("/"),
    telephone: firm.contact.phoneHref.replace("tel:", ""),
    email: firm.contact.email,
    address: {
      "@type": "PostalAddress",
      ...(!isPlaceholder(firm.location.addressLine) && {
        streetAddress: firm.location.addressLine,
      }),
      addressLocality: firm.location.town,
      addressRegion: firm.location.county,
      addressCountry: "KE",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${firm.location.subCounty}, ${firm.location.county}, Kenya`,
    },
    sameAs: [firm.social.linkedin],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
