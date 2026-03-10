import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Lead Generation",
    description:
      "Stop chasing leads and start attracting high-quality clients who value your work. We build systems that bring consistent demand without paid ads.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Sales & Conversion",
    description:
      "Turn conversations into booked work. Learn proven sales processes that close higher-ticket jobs and eliminate price shoppers.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Business Systems",
    description:
      "Build the foundation to scale to seven figures. From operations to hiring, we help you create a business that runs without you.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Jake M.",
    business: "Elite Lawn Care",
    location: "Texas",
    quote:
      "Before working with School of Home Service, I was stuck at $15K months. Within 90 days we hit $40K and haven't looked back. The systems they teach actually work.",
    accent: "red" as const,
  },
  {
    name: "Marcus T.",
    business: "Premier Plumbing Co",
    location: "Ohio",
    quote:
      "I was tired of chasing bad leads. They showed me how to position my business so the right clients come to me. My close rate went from 30% to 70%.",
    accent: "blue" as const,
  },
  {
    name: "Sarah K.",
    business: "Bright Home Cleaning",
    location: "Florida",
    quote:
      "The GBP optimization alone doubled my inbound calls. I finally feel like I have a real business instead of just a job.",
    accent: "red" as const,
  },
  {
    name: "Chris D.",
    business: "Apex Roofing",
    location: "Georgia",
    quote:
      "Went from doing everything myself to having a team of 8 and taking weekends off. The business systems module changed everything for me.",
    accent: "blue" as const,
  },
  {
    name: "Ryan B.",
    business: "Greenscape Outdoors",
    location: "Minnesota",
    quote:
      "I was skeptical at first but the ROI spoke for itself. Added $200K in revenue in my first year with the program. Best investment I've made.",
    accent: "red" as const,
  },
  {
    name: "David L.",
    business: "Precision Electric",
    location: "California",
    quote:
      "They don't just teach theory — they've actually built and sold a service business. That real-world experience makes all the difference.",
    accent: "blue" as const,
  },
];

export default function Home() {
  return (
    <>
      <Hero
        headline="Build a Home Service Business That Runs Without You"
        subheadline="Proven systems for lead generation, sales, and operations that help contractors stop trading time for money and start building real wealth."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <StatsBar />

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">What We Do</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              Everything You Need to Scale
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We give home service business owners the strategies, systems, and support to grow predictably — without relying on luck or paid ads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-brand-gray rounded-xl p-8 hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-brand-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GBP Analyzer CTA */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-navy py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.4),transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Free Tool</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
                Get Your Free Google Business Profile Score
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Your Google Business Profile is the #1 way local customers find you. Find out how yours stacks up — and get actionable tips to improve it today.
              </p>
              <Link
                href="/gbpanalyzer"
                className="mt-8 inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/30"
              >
                Analyze My Profile
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-brand-red/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-brand-red/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-white">87</div>
                      <div className="text-sm text-gray-300 mt-1">/ 100</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Good
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Success Stories
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              What Our Clients Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors"
            >
              View All Success Stories
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
