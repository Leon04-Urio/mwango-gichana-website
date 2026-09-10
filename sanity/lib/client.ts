import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env";

// Server-only read token (never exposed to the browser). Required because
// the dataset is private. See README.md "Connecting Sanity".
const token = process.env.SANITY_API_READ_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  // Private datasets must bypass the CDN and hit the authenticated API.
  useCdn: !token,
  perspective: "published",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
