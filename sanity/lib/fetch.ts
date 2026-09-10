import { sanityClient, urlForImage } from "./client";
import type { SanityImageRef } from "./types";

// Default revalidation window for content fetched from Sanity. Kept short
// so a publish in Studio shows up quickly even without the on-demand
// webhook (see app/api/revalidate/route.ts) configured.
const REVALIDATE_SECONDS = 60;

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
}

export function resolveImage(image: SanityImageRef | undefined, fallbackAlt: string) {
  if (!image?.asset) {
    return null;
  }
  return {
    src: urlForImage(image).width(1600).auto("format").url(),
    alt: image.alt || fallbackAlt,
  };
}
