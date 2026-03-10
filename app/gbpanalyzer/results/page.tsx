"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ScoreGauge from "@/components/ScoreGauge";
import type { GBPAnalysis } from "@/lib/gbp-analyzer";

function ResultsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [analysis, setAnalysis] = useState<GBPAnalysis | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setError("No analysis ID provided");
      setLoading(false);
      return;
    }

    fetch(`/api/gbp-analyze?id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Analysis not found");
        return res.json();
      })
      .then((data) => {
        setAnalysis(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Analysis not found or has expired. Please run a new analysis.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin w-8 h-8 text-brand-blue mx-auto" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="mt-4 text-gray-500">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-bold text-brand-charcoal">{error || "Something went wrong"}</h2>
          <Link
            href="/gbpanalyzer"
            className="mt-6 inline-flex items-center px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors text-sm"
          >
            Run New Analysis
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Score Header */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Your GBP Analysis
          </span>
          {analysis.businessName && (
            <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              {analysis.businessName}
            </h1>
          )}
          <div className="mt-10">
            <ScoreGauge
              score={analysis.totalScore}
              grade={analysis.grade}
              gradeColor={analysis.gradeColor}
            />
          </div>
          <p className="mt-8 text-gray-300 max-w-xl mx-auto">
            {analysis.totalScore >= 80
              ? "Your profile is performing well! There are still a few areas to optimize for maximum visibility."
              : analysis.totalScore >= 60
              ? "Your profile has a solid foundation but needs improvement in key areas to compete locally."
              : analysis.totalScore >= 40
              ? "Your profile needs significant work. Addressing these issues could dramatically increase your visibility."
              : "Your profile is severely underperforming. The good news? There's massive room for improvement."}
          </p>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)] mb-10">
            Score Breakdown
          </h2>
          <div className="space-y-4">
            {analysis.categories.map((cat) => {
              const pct = (cat.score / cat.maxScore) * 100;
              const barColor =
                pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500";

              return (
                <div key={cat.category} className="bg-brand-gray rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-brand-charcoal text-sm">{cat.category}</span>
                    <span className={`text-sm font-bold ${
                      pct >= 70 ? "text-green-600" : pct >= 40 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      {cat.score} / {cat.maxScore}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${barColor} transition-all duration-1000`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  {cat.suggestions.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {cat.suggestions.map((s, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Suggestions */}
      {analysis.topSuggestions.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal font-[family-name:var(--font-heading)] mb-8">
              Your Top Priorities
            </h2>
            <div className="space-y-4">
              {analysis.topSuggestions.map((suggestion, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Let Us Review */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.3),transparent_60%)]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-heading)]">
            Let Us Go Over Your Results With You
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Numbers only tell part of the story. Book a free call with our team and we&apos;ll walk through your score, explain exactly what to fix first, and build an action plan together.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/30"
            >
              Book Your Free Review Call
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/gbpanalyzer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Analyze Another Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function GBPResults() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <svg className="animate-spin w-8 h-8 text-brand-blue mx-auto" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="mt-4 text-gray-500">Loading...</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
