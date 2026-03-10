import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | School of Home Service",
  description: "Learn how School of Home Service empowers contractors and home service professionals with proven growth strategies.",
};

const differentiators = [
  {
    title: "We've Been in Your Boots",
    description:
      "We didn't learn this in a classroom. Our team has built, scaled, and sold real home service businesses. Every strategy we teach comes from the field, not from theory.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "No One-Size-Fits-All",
    description:
      "We don't hand you a template and wish you luck. Your business is unique, and your growth plan should be too. We build custom systems around your goals, market, and capacity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "No Paid Ads Dependency",
    description:
      "Most agencies want to run your ads and collect a fee. We teach you how to build organic demand, strong positioning, and local authority so you own your pipeline.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "We're in It With You",
    description:
      "This isn't a course you buy and figure out alone. We provide ongoing support, coaching, and accountability because we know that's what actually drives results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <Hero
        headline="Empowering Home Service Professionals"
        subheadline="We help contractors build businesses that don't rely on luck, paid ads, or chasing cheap jobs. The goal is simple: consistent work, better clients, and a business that actually feels under control."
        ctaText="See The Program"
        ctaHref="/program"
      />

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Our Story</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
                Where This Started
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  School of Home Service was born from firsthand experience in the trades. Our team has spent years building, running, and scaling real home service companies — from lawn care and landscaping to plumbing and electrical.
                </p>
                <p>
                  We know what it&apos;s like to be busy one month and dead the next. We know the frustration of wasting money on marketing that doesn&apos;t work, hiring the wrong people, and feeling like you&apos;re building a job instead of a business.
                </p>
                <p>
                  That experience became the foundation of everything we teach. Not theory. Not recycled advice from people who&apos;ve never run a crew or dealt with a no-show on a Monday morning. Real, proven strategies that work in the real world.
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Our Mission</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
                What Drives Us
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We believe every hardworking contractor deserves a business that provides financial freedom, time with family, and pride in what they&apos;ve built. Too many talented tradespeople are stuck working 60+ hour weeks with nothing to show for it.
                </p>
                <p>
                  Our mission is to change that — one business at a time. We&apos;ve helped hundreds of home service professionals across the U.S. and Canada build systems for consistent demand, strong positioning, and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              Is This Right For You?
            </h2>
            <p className="mt-4 text-gray-500">We&apos;re honest about who we work with — and who we don&apos;t.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal">This IS For You If...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You do solid work and care about your reputation",
                  "You're tired of junk leads and price shoppers",
                  "You're done paying agencies that promise the world and disappear",
                  "You want a system you actually understand and control",
                  "You're ready to put in the work to build something lasting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-brand-red flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal">This is NOT For You If...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You're looking for a 'quick fix' or get-rich-quick scheme",
                  "You want someone else to run your business for you",
                  "You're looking for a company to manage your paid ads",
                  "You're unwilling to change how you operate",
                  "You don't take your business seriously",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              Why School of Home Service Is Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-5 p-6 rounded-xl hover:bg-brand-gray transition-colors">
                <div className="w-14 h-14 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-charcoal">{d.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Build a Business You're Proud Of?"
        subheadline="Join hundreds of home service professionals who've transformed their businesses with our proven systems."
        ctaText="See The Program"
        ctaHref="/program"
        variant="blue"
      />
    </>
  );
}
