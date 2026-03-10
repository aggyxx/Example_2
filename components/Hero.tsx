import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

export default function Hero({
  headline,
  subheadline,
  ctaText = "Learn More",
  ctaHref = "/contact",
  dark = true,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark
          ? "bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy text-white"
          : "bg-brand-gray text-brand-charcoal"
      }`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(185,28,28,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.2),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-[family-name:var(--font-heading)]">
            {headline}
          </h1>
          <p
            className={`mt-6 text-lg md:text-xl leading-relaxed ${
              dark ? "text-gray-300" : "text-gray-600"
            } max-w-2xl`}
          >
            {subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg shadow-red-900/20 text-sm md:text-base"
            >
              {ctaText}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {dark && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      )}
    </section>
  );
}
