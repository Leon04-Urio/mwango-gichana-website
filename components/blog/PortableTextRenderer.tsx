import Image from "next/image";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/client";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function headingText(block: PortableTextBlock) {
  return (block.children as { text?: string }[])
    ?.map((child) => child.text || "")
    .join("");
}

const components: PortableTextComponents = {
  block: {
    h2: ({ value, children }) => (
      <h2
        id={slugify(headingText(value))}
        className="scroll-mt-32 pt-4 font-display text-2xl text-navy-950"
      >
        {children}
      </h2>
    ),
    h3: ({ value, children }) => (
      <h3
        id={slugify(headingText(value))}
        className="scroll-mt-32 pt-2 font-display text-xl text-navy-950"
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => <p className="text-base sm:text-lg">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gold-500 pl-5 italic text-charcoal-soft">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 pl-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 pl-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base sm:text-lg">{children}</li>,
    number: ({ children }) => <li className="text-base sm:text-lg">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="underline hover:text-navy-900"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <span className="relative my-6 block aspect-[16/9] w-full overflow-hidden">
        <Image
          src={urlForImage(value).width(1400).auto("format").url()}
          alt={value?.alt || ""}
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover"
        />
      </span>
    ),
  },
};

export function extractHeadings(blocks: PortableTextBlock[]) {
  return blocks
    .filter((b) => b._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => ({ text: headingText(b), id: slugify(headingText(b)) }));
}

export function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
