import Image from "next/image";
import Link from "next/link";
import type { Attorney } from "@/lib/content/types";

export function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className="focus-ring group block"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
        <Image
          src={attorney.photo.src}
          alt={attorney.photo.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {attorney.isPlaceholder && (
          <span className="absolute left-3 top-3 border border-ivory/40 bg-navy-950/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ivory/85 backdrop-blur-sm">
            Placeholder Profile
          </span>
        )}
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl text-navy-950">{attorney.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">
          {attorney.title}
        </p>
      </div>
    </Link>
  );
}
