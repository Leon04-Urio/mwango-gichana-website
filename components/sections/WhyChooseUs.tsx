// Why clients instruct the firm. Wording stays within advocate advertising rules:
// no outcome promises, no fee claims, no comparisons with other firms.
export function WhyChooseUs() {
  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 px-6 sm:gap-10 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <h2 className="font-display display-light text-2xl leading-[1.12] text-navy-950 sm:text-4xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="space-y-4 lg:col-span-8">
          <p className="max-w-3xl text-base leading-relaxed text-charcoal sm:text-lg">
            Clients instruct Mwango Gichana &amp; Co. Advocates for clear communication, practical
            advice and careful attention to detail. Each matter is handled by an advocate who takes
            the time to understand your circumstances and explains your options in plain language.
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-charcoal sm:text-lg">
            We give honest assessments of your position, plan the steps ahead and keep you informed
            at every stage, so that you always know where your matter stands and what happens next.
            Your instructions are treated with discretion and in confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
