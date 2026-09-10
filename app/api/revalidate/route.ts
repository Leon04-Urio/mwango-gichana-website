import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Sanity webhook target: configure a webhook (Studio -> API -> Webhooks, or
// `sanity hooks create`) on document create/update/delete for article,
// client, and testimonial types, pointing at
// https://<your-domain>/api/revalidate?secret=<REVALIDATE_SECRET>.
// See README.md "Connecting Sanity" for the exact setup command.
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  let body: { _type?: string; slug?: { current?: string } } = {};
  try {
    body = await request.json();
  } catch {
    // Some webhook configurations send no body — still revalidate broadly.
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/practice-areas/[slug]", "page");

  if (body._type === "article" && body.slug?.current) {
    revalidatePath(`/blog/${body.slug.current}`);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
