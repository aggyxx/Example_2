import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import StarsBackground from "@/components/StarsBackground";

export const metadata: Metadata = {
  title: "Who We Are | School of Home Service",
  description: "Learn how School of Home Service empowers American contractors with real-world growth strategies.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-heading)]">
            Built by Contractors. For Contractors.
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Real strategies from people who&apos;ve actually swung hammers, run crews, and built companies from scratch.
          </p>
          <Link
            href="/program"
            className="mt-8 inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-brand-red-dark transition-all hover:shadow-[0_0_25px_rgba(185,28,28,0.5)] text-sm uppercase tracking-wider"
          >
            See The Program
          </Link>
        </div>
      </section>

      {/* Photo strip */}
      <div className="grid grid-cols-5 h-32 md:h-48">
        {[
          "photo-1504307651254-35680f356dfd",
          "photo-1581094794329-c8112a89af12",
          "photo-1529156069898-49953e39b3ac",
          "photo-1541888946425-d81bb19240f5",
          "photo-1560250097-0b93528c311a",
        ].map((id) => (
          <div key={id} className="bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/${id}?w=400&h=200&fit=crop')` }} />
        ))}
      </div>

      {/* Our Story + Mission */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Our Story</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
                Where This All Started
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  School of Home Service was born from years of blood, sweat, and calluses. Our team
                  has built, scaled, and sold real home service companies across America, from landscaping
                  and roofing to plumbing and HVAC.
                </p>
                <p>
                  We know the feast-or-famine cycle. We know what it feels like to dump money into
                  marketing that goes nowhere, hire the wrong guy, and wonder if you&apos;re building
                  a career or just buying yourself a job.
                </p>
                <p>
                  That firsthand experience is the backbone of everything we teach. No recycled
                  business-school theory. Just proven playbooks from people who&apos;ve actually
                  managed crews, chased invoices, and survived slow seasons.
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue-accent">Our Mission</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
                What Keeps Us Going
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Every hardworking contractor in this country deserves a business that creates real
                  freedom: financial stability, time with family, and pride in something they built.
                  Too many talented tradespeople are grinding 70-hour weeks with nothing to show for it.
                </p>
                <p>
                  We&apos;re here to change that. We&apos;ve helped hundreds of home service
                  professionals across the U.S. install systems for consistent demand, stronger
                  positioning, and sustainable growth that actually lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              Is This Right For You?
            </h2>
            <p className="mt-4 text-gray-400">We&apos;re straight shooters. Here&apos;s who we work with, and who we don&apos;t.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 border-t-4 border-t-green-600 hover:shadow-[0_0_25px_rgba(22,163,74,0.3)] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-900/30 text-green-400 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">This IS For You If...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You do solid work and take pride in your reputation",
                  "You're tired of bottom-dollar leads and tire-kickers",
                  "You're done handing money to agencies that ghost you",
                  "You want a system you understand and own",
                  "You're ready to put in the work to build a real legacy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 border-t-4 border-t-brand-red hover:shadow-[0_0_25px_rgba(185,28,28,0.3)] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-900/30 text-red-400 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">This is NOT For You If...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You're hunting for a magic pill or overnight fix",
                  "You want someone else to run your operation",
                  "You just need someone to manage your ad spend",
                  "You're not willing to change how you do things",
                  "You don't take your business seriously",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              Why We&apos;re Not Like the Rest
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "We've Walked the Walk",
                description: "We didn't learn this from a textbook. Our team has built, scaled, and sold real service companies. Every strategy comes from the trenches.",
              },
              {
                title: "No Cookie-Cutter Plans",
                description: "Your business is one of a kind and your roadmap should be too. We build custom systems around your goals, your market, and where you are right now.",
              },
              {
                title: "Zero Dependency on Paid Ads",
                description: "Most agencies want to run your ads and collect a fee. We teach you to build organic demand and local authority so you control your own pipeline.",
              },
              {
                title: "We're With You the Whole Way",
                description: "This isn't a course you buy and figure out alone. You get real coaching, real accountability, and a team that stays involved because that's what drives results.",
              },
            ].map((d) => (
              <div key={d.title} className="flex gap-5 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="w-3 rounded-full bg-brand-red shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help You Build */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              What We Help You Build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Lead Generation", desc: "Attract higher-quality prospects who want to hire you, not haggle you." },
              { title: "Sales & Closing", desc: "Turn conversations into booked jobs without sounding desperate or underselling yourself." },
              { title: "Business Systems", desc: "Build the foundation to scale past six figures without burning out or losing your weekends." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 border-t-4 border-t-brand-red rounded-xl p-8 text-center hover:shadow-[0_0_25px_rgba(185,28,28,0.3)] transition-all">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
              If you&apos;re tired of guessing, done with inconsistent months, and ready for a business that feels
              solid, predictable, and built to last... we exist to help you get there.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
