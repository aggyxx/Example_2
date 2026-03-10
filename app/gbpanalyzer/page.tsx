"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const checkCategories = [
  {
    title: "Review Count & Rating",
    description: "How many reviews you have and your average star rating",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "Photo Quality & Count",
    description: "Number and quality of photos on your profile",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Business Description",
    description: "Whether your profile has a complete, optimized description",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Hours & Contact Info",
    description: "Whether business hours, phone, and address are listed",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Categories",
    description: "Primary and secondary business categories on your profile",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Posts & Updates",
    description: "Recent activity and Google Posts on your profile",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

export default function GBPAnalyzer() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", gbpUrl: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/gbp-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      router.push(`/gbpanalyzer/results?id=${data.id}`);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {/* Hero + Form */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(185,28,28,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.3),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-red/20 text-red-300 text-xs font-semibold uppercase tracking-wider rounded-full">
                Free Tool
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-heading)]">
                Google Business Profile Analyzer
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Your Google Business Profile is the #1 way local customers find and choose your business. Get a free, instant analysis with a score out of 100 and actionable tips to improve your visibility.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                {["Free analysis", "Results in your inbox", "No spam, ever"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-brand-charcoal font-[family-name:var(--font-heading)]">
                Analyze Your Profile
              </h2>
              <p className="mt-1 text-sm text-gray-500">Enter your details below to get your free score.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="gbpUrl" className="block text-sm font-medium text-brand-charcoal mb-1.5">
                    Google Business Profile URL *
                  </label>
                  <input
                    type="url"
                    id="gbpUrl"
                    required
                    value={formData.gbpUrl}
                    onChange={(e) => setFormData({ ...formData, gbpUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                    placeholder="https://maps.google.com/..."
                  />
                  <p className="mt-1.5 text-xs text-gray-400">
                    Search your business on Google Maps, click your listing, and copy the URL from your browser.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing...
                    </span>
                  ) : (
                    "Analyze My Profile"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">{errorMsg}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Simple Process</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enter Your Info", desc: "Provide your name, email, and a link to your Google Business Profile." },
              { step: "2", title: "We Analyze", desc: "Our system checks your profile across multiple ranking factors and generates a score." },
              { step: "3", title: "Get Your Score", desc: "Receive your detailed score and actionable improvement tips via email." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-extrabold">
                  {s.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Comprehensive</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)]">
              What We Analyze
            </h2>
            <p className="mt-4 text-gray-500">
              We evaluate your Google Business Profile across six critical factors that impact your local search visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checkCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-bold text-brand-charcoal">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
