import type { Metadata } from "next";
import { firm } from "./content/firm";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mwangogichanalegal.com";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: firm.name,
      // Falls back to the file-convention opengraph-image.tsx when omitted.
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
