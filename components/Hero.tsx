import Link from "next/link";

const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=School+of+Home+Service";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src="https://assets.mixkit.co/videos/24834/24834-720.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Light gradient for text readability only */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full flex justify-start">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-[family-name:var(--font-heading)] drop-shadow-lg">
            Build Your American Dream, One Job at a Time
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg drop-shadow-md">
            Battle-tested growth strategies for contractors who refuse to stay small. From the job site to the corner office.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-[0_0_25px_rgba(185,28,28,0.5)] text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Google badge - right side, vertically centered */}
      <a
        href={GOOGLE_SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 bg-white rounded-xl px-5 py-4 shadow-2xl flex flex-col items-center gap-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 z-10 hidden sm:flex"
        aria-label="Find School of Home Service on Google"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-xs font-semibold text-gray-800">5 stars on Google</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </a>
    </section>
  );
}
