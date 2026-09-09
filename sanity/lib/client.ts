import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env";

// NOTE: not yet wired into any page — the site currently reads content
// from lib/content/*. Once the client's Sanity project exists and
// NEXT_PUBLIC_SANITY_PROJECT_ID is set, pages can switch from the
// lib/content getters to GROQ queries via this client. See README.md.
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
