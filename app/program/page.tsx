import type { Metadata } from "next";
import Link from "next/link";
import StarsBackground from "@/components/StarsBackground";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "The Program | School of Home Service",
  description: "Discover the 3-phase growth program built for American home service business owners ready to scale.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Brand Refinement",
    description: "Before leads or revenue matter, you need to look the part and have the basics locked in tight.",
    items: [
      "Dial in your ideal customer profile",
      "Clean up your online presence: Google, Facebook, website, reviews",
      "Look professional and legit from every angle",
      "Tighten up lead handling from first call to booked job",
      "Fix your follow-up process so nothing falls through the cracks",
      "Leave the kind of impression that generates referrals",
    ],
    goal: "When someone Googles you or talks to you, it's obvious you're the right call.",
  },
  {
    phase: "Phase 2",
    title: "Lead Flow & Consistency",
    description: "Now we get you in front of the right people, consistently, without dumping money into ads.",
    items: [
      "Build reliable lead flow without paid advertising",
      "Create systems that attract buyers, not price shoppers",
      "Increase lead quality, not just volume",
      "Cut the wasted calls and dead-end inquiries",
    ],
    goal: "Steady demand and fewer \"slow months\" that keep you up at night.",
  },
  {
    phase: "Phase 3",
    title: "Systems & Scale",
    description: "Growth is great until it turns into chaos. This phase makes sure that doesn't happen.",
    items: [
      "Install systems that handle more volume without burnout",
      "Build structure around scheduling, follow-up, and daily operations",
      "Tighten what's already working and cut what's not",
      "Prepare the business to push past six figures and beyond",
    ],
    goal: "Your business starts to feel predictable instead of reactive.",
  },
];

const supports = [
  {
    title: "Video Trainings",
    desc: "Short, no-fluff video lessons you can watch on your schedule. Each one is designed to be understood and applied immediately.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Weekly Group Calls",
    desc: "Live coaching sessions, real-time problem solving, and the kind of answers you can't get from YouTube videos.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "1-on-1 Support",
    desc: "Direct access when you hit a wall. Guidance specific to your market, your services, and your goals. No ticket queues.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Community Access",
    desc: "You'll be surrounded by serious contractors who care about good work, want better clients, and are building real businesses.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const faqs = [
  { q: "How long does the program run?", a: "The core program is 3 months. After that, you can continue with ongoing support or take what you've learned and run with it." },
  { q: "Is this an ad agency?", a: "No. We don't run your ads. We teach you how to build organic demand, strong local authority, and a professional presence that generates consistent leads without paid campaigns." },
  { q: "I'm not in landscaping. Will this work for me?", a: "Absolutely. Our system has been proven across roofing, plumbing, HVAC, painting, cleaning, electrical, and just about every home service trade out there." },
  { q: "What if I'm brand new?", a: "We've worked with contractors from $0 to $8M+. Whether you're starting fresh or looking to break through a plateau, the system adapts to where you are." },
  { q: "How much time does it take per week?", a: "Plan on 1-2 hours per week minimum. The trainings are designed to be fast, focused, and immediately actionable." },
  { q: "I'm not great with tech. Is that a problem?", a: "Not at all. Everything is kept simple and straightforward. If you can use a smartphone, you can do this." },
  { q: "How quickly will I see results?", a: "It depends on how fast you implement. Some clients see traction in weeks, others in a couple months. The focus is building something that lasts, not a quick spike." },
  { q: "What does it cost?", a: "Programs start at $1,597. Final pricing depends on your business and what you need. Book a call and we'll walk through it." },
  { q: "Are there hidden fees?", a: "None. 95% of what we teach doesn't require spending extra money. We're building your skills and systems, not selling you add-ons." },
  { q: "What's the next step?", a: "Simple. Book a free strategy call. We'll learn about your business, talk about where you want to go, and figure out if the program is the right fit." },
];

export default function Program() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="https://assets.mixkit.co/videos/21021/21021-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-heading)]">
            The Contractor Growth Program
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            A hands-on growth system for American contractors who are ready to stop winging it and start scaling with real structure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-brand-red-dark transition-all hover:shadow-[0_0_25px_rgba(185,28,28,0.5)] text-sm uppercase tracking-wider"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* 3-Phase System */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">The System</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              The 3-Phase Growth Framework
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Each phase builds on the last. No skipping steps, no shortcuts. Just a proven path that works.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 timeline-line-flow" />

            <div className="space-y-12">
              {phases.map((p, i) => (
                <div key={i} className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-red text-white flex items-center justify-center font-extrabold text-xs md:text-sm z-10">
                    {p.phase}
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-gray-700 transition-colors">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{p.description}</p>
                    <ul className="mt-4 space-y-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-brand-red mt-1">&#8226;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 bg-brand-blue/10 border border-brand-blue-accent/20 rounded-lg p-3 text-sm text-brand-blue-accent">
                      <span className="font-semibold">Goal:</span> {p.goal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Support */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue-accent">How We Support You</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              Program Structure & Support
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              The program isn&apos;t just what we teach. It&apos;s how we support you while you implement it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supports.map((s) => (
              <div key={s.title} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 hover:shadow-[0_0_20px_rgba(185,28,28,0.2)] transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-400">
              Straight answers to the questions we hear most.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-brand-red font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-white font-semibold">{faq.q}</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(185,28,28,0.5)]"
            >
              Book Your Free Strategy Call
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
