import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Success Stories | School of Home Service",
  description: "Read how home service business owners transformed their businesses with School of Home Service.",
};

const testimonials = [
  {
    name: "Jake M.",
    business: "Elite Lawn Care",
    location: "Texas",
    quote: "Before working with School of Home Service, I was stuck at $15K months. Within 90 days we hit $40K and haven't looked back. The systems they teach actually work.",
    accent: "red" as const,
  },
  {
    name: "Marcus T.",
    business: "Premier Plumbing Co",
    location: "Ohio",
    quote: "I was tired of chasing bad leads. They showed me how to position my business so the right clients come to me. My close rate went from 30% to 70%.",
    accent: "blue" as const,
  },
  {
    name: "Sarah K.",
    business: "Bright Home Cleaning",
    location: "Florida",
    quote: "The GBP optimization alone doubled my inbound calls. I finally feel like I have a real business instead of just a job.",
    accent: "red" as const,
  },
  {
    name: "Chris D.",
    business: "Apex Roofing",
    location: "Georgia",
    quote: "Went from doing everything myself to having a team of 8 and taking weekends off. The business systems module changed everything for me.",
    accent: "blue" as const,
  },
  {
    name: "Ryan B.",
    business: "Greenscape Outdoors",
    location: "Minnesota",
    quote: "I was skeptical at first but the ROI spoke for itself. Added $200K in revenue in my first year with the program. Best investment I've made.",
    accent: "red" as const,
  },
  {
    name: "David L.",
    business: "Precision Electric",
    location: "California",
    quote: "They don't just teach theory — they've actually built and sold a service business. That real-world experience makes all the difference.",
    accent: "blue" as const,
  },
  {
    name: "Tyler R.",
    business: "Summit HVAC",
    location: "Colorado",
    quote: "My Google Business Profile was a mess. After their optimization strategy, I went from 12 reviews to 85 in four months. Calls are through the roof.",
    accent: "red" as const,
  },
  {
    name: "Amanda P.",
    business: "Sparkle Maid Service",
    location: "North Carolina",
    quote: "The sales training alone was worth it. I stopped undercharging and started attracting clients who actually value quality work. Revenue jumped 40%.",
    accent: "blue" as const,
  },
  {
    name: "Kevin W.",
    business: "K&W Landscaping",
    location: "Indiana",
    quote: "Having a real mentor who's been in the trenches is priceless. They didn't just give me advice — they helped me build the actual systems to grow.",
    accent: "red" as const,
  },
  {
    name: "Mike H.",
    business: "Horizon Painting",
    location: "Arizona",
    quote: "Went from $250K to $600K in revenue in just 18 months. The coaching and accountability kept me on track even when things got tough.",
    accent: "blue" as const,
  },
  {
    name: "Jason C.",
    business: "ClearView Windows",
    location: "Washington",
    quote: "The community alone is worth joining. Being around other driven business owners who understand your struggles keeps you motivated and moving forward.",
    accent: "red" as const,
  },
  {
    name: "Brandon S.",
    business: "ProCut Tree Service",
    location: "Michigan",
    quote: "I finally took a two-week vacation without my phone blowing up. The operations systems they helped me build actually let me step away.",
    accent: "blue" as const,
  },
];

const reviews = [
  {
    name: "Daniel F.",
    rating: 5,
    text: "School of Home Service has been a game changer for my business. The team is incredibly knowledgeable and genuinely cares about helping you succeed. Highly recommended!",
  },
  {
    name: "Ashley M.",
    rating: 5,
    text: "Finally found a program that actually delivers. No fluff, no bs — just real strategies that work. My business has never been stronger.",
  },
  {
    name: "Cody R.",
    rating: 5,
    text: "The coaching is next level. They helped me see blind spots I didn't even know I had. Worth every penny.",
  },
  {
    name: "Jennifer T.",
    rating: 5,
    text: "As a woman in the trades, I wasn't sure this would be right for me. Turns out it was exactly what I needed. The strategies are universal and the support is incredible.",
  },
  {
    name: "Steve P.",
    rating: 5,
    text: "I've tried other coaching programs before and they were all fluff. This one is different. Real results, real support, real people who've actually done it.",
  },
  {
    name: "Matt L.",
    rating: 5,
    text: "Joined 6 months ago and already doubled my revenue. The systems approach makes everything predictable and scalable. Can't imagine running my business without it.",
  },
];

export default function SuccessStories() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-heading)]">
            Client Success Stories
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Real results from real home service business owners. No actors. No scripts. Just hardworking contractors who decided to invest in themselves.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Reviews</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              What Our Clients Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 pt-3 border-t border-gray-50">
                  <span className="text-sm font-semibold text-brand-charcoal">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Join Them"
        subheadline="Hundreds of home service business owners have transformed their businesses. You could be next."
        ctaText="Get Started Today"
        ctaHref="/contact"
      />
    </>
  );
}
