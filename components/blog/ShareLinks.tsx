import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons/LinkedInIcon";
import { XIcon } from "@/components/ui/icons/XIcon";

const btn =
  "focus-ring flex size-9 items-center justify-center bg-navy-950 text-ivory transition-colors duration-300 hover:bg-gold-500 hover:text-navy-950";

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal">Share</p>
      <div className="flex gap-2">
        <a href={`mailto:?subject=${t}&body=${u}`} className={btn} aria-label="Share by email">
          <Mail className="size-4" aria-hidden="true" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${t}&url=${u}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on X"
        >
          <XIcon className="size-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}
