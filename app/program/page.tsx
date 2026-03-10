import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Program | School of Home Service",
  description: "Discover our accelerator program built for home service business owners ready to scale with proven systems.",
};

const features = [
  {
    title: "1-on-1 Coaching",
    description: "Personal coaching calls with someone who's actually built and sold a service business. Real advice for your specific situation.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Growth Systems",
    description: "Plug-and-play systems for lead generation, Google Business Profile optimization, follow-up sequences, and referral programs.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Sales Training",
    description: "Learn how to close higher-ticket jobs with confidence. Scripts, objection handling, and pricing strategies that work.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Operations & Hiring",
    description: "Build the team and processes that let you step out of the field. SOPs, hiring frameworks, and management systems.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Community Access",
    description: "Join a private community of driven home service business owners who share wins, strategies, and hold each other accountable.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Resource Library",
    description: "Templates, checklists, scripts, and guides you can implement immediately. No fluff — just tools that drive results.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

const steps = [
  { step: "01", title: "Apply", description: "Fill out a quick application so we can learn about your business and goals." },
  { step: "02", title: "Strategy Call", description: "Hop on a free call with our team to see if the program is the right fit." },
  { step: "03", title: "Onboarding", description: "Get your custom growth roadmap and access to all systems, training, and community." },
  { step: "04", title: "Growth", description: "Execute with ongoing coaching, accountability, and support every step of the way." },
];

export default function Program() {
  return (
    <>
      <Hero
        headline="The Accelerator Program"
        subheadline="A hands-on coaching program built for home service business owners who are ready to stop guessing and start growing with real systems."
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">What&apos;s Included</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              Everything You Need to Scale
            </h2>
            <p className="mt-4 text-gray-500">
              Not a course. Not a template library. A complete growth system with the coaching to make sure you actually implement it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-brand-gray rounded-xl p-8 hover:shadow-md transition-shadow border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-charcoal">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">The Process</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-extrabold">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gray-300" />
                )}
                <h3 className="mt-6 text-lg font-bold text-brand-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Results</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              What Our Clients Achieve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "2-3x", label: "Average revenue growth within 12 months" },
              { metric: "70%+", label: "Average close rate after sales training" },
              { metric: "15+ hrs", label: "Hours saved per week through systems" },
            ].map((r) => (
              <div key={r.label} className="text-center p-8 rounded-xl bg-brand-gray">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-blue font-[family-name:var(--font-heading)]">
                  {r.metric}
                </div>
                <p className="mt-3 text-sm text-gray-500">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/20"
            >
              Apply to the Program
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Stop Guessing. Start Growing."
        subheadline="Apply today and find out how we can build a custom growth plan for your home service business."
        ctaText="Apply Now"
        ctaHref="/contact"
      />
    </>
  );
}
