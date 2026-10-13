import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
        404 Error
      </p>
      <h1 className="mt-5 font-display text-2xl text-navy-950 sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-5 max-w-md text-charcoal">
        The page you are looking for may have been moved or no longer
        exists. Let us help you find your way.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/" variant="primary" showArrow>
          Return Home
        </Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
      <p className="mt-10 text-sm text-charcoal">
        Or explore our{" "}
        <Link href="/practice-areas" className="underline hover:text-navy-900">
          practice areas
        </Link>
        .
      </p>
    </section>
  );
}
