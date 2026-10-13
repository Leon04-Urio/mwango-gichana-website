import { notFound, permanentRedirect } from "next/navigation";
import { practiceAreas, getPracticeAreaBySlug } from "@/lib/content/practiceAreas";

// Practice areas now live on one page. Old links open the matching entry.
export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export default async function PracticeAreaRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();
  permanentRedirect(`/practice-areas#${area.slug}`);
}
