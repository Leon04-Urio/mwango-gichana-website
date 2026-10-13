import Image from "next/image";
import type { ClientLogo } from "@/sanity/lib/types";
import { resolveImage } from "@/sanity/lib/fetch";

function Item({ client }: { client: ClientLogo }) {
  const logo = client.demoLogo // TEMP PREVIEW
    ? { src: client.demoLogo, alt: client.name }
    : resolveImage(client.logo, client.name);
  const content = logo ? (
    <div className="relative h-12 w-44 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:w-52">
      <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="180px" unoptimized={logo.src.endsWith(".svg")} />
    </div>
  ) : (
    <p className="whitespace-nowrap px-6 font-display text-xl text-charcoal">{client.name}</p>
  );

  return client.website ? (
    <a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring flex shrink-0 items-center"
      aria-label={client.name}
    >
      {content}
    </a>
  ) : (
    <div className="flex shrink-0 items-center">{content}</div>
  );
}

// Logos drift right to left in a continuous loop. Hidden until a client is approved.
export function ClientLogos({ clients }: { clients: ClientLogo[] }) {
  if (clients.length === 0) return null;

  // Repeat the set so one half of the track always fills the screen.
  const reps = Math.max(2, Math.ceil(8 / clients.length));
  const half = Array.from({ length: reps }, () => clients).flat();

  return (
    <section className="bg-white py-12 sm:py-20" aria-label="Clients we have worked with">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl pb-14 text-center sm:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal">Trusted by</p>
          <h2 className="font-display display-light mt-6 text-2xl leading-snug text-balance text-navy-950 sm:text-4xl">
            Clients we have worked with
          </h2>
        </div>
      </div>

      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-4 sm:gap-6">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-4 sm:gap-6" aria-hidden={copy === 1}>
              {half.map((c, i) => (
                <Item key={`${copy}-${c._id}-${i}`} client={c} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
