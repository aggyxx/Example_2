import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "dark" | "red" | "blue";
}

export default function CTASection({
  headline = "Ready to Transform Your Business?",
  subheadline = "Take the first step toward building a home service business that generates consistent revenue and runs without you.",
  ctaText = "Get Started Today",
  ctaHref = "/contact",
  variant = "dark",
}: CTASectionProps) {
  const bgClass =
    variant === "red"
      ? "bg-brand-red"
      : variant === "blue"
      ? "bg-gradient-to-br from-brand-blue to-brand-navy"
      : "bg-brand-dark";

  return (
    <section className={`${bgClass} py-20 md:py-28 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white,transparent_70%)]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-heading)]">
          {headline}
        </h2>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">{subheadline}</p>
        <Link
          href={ctaHref}
          className="mt-10 inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/30 text-sm md:text-base"
        >
          {ctaText}
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
