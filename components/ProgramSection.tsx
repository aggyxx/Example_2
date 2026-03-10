import Link from "next/link";

export default function ProgramSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left panel - entire box clickable */}
        <Link
          href="/program"
          className="relative bg-brand-dark flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 hover:bg-gray-900/90 transition-colors cursor-pointer group block"
        >
          <span className="text-sm font-medium text-gray-400 italic group-hover:text-gray-300 transition-colors">
            Fuel Your Hustle. Scale Your Legacy.
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
            The Contractor Growth Program
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
            A step-by-step roadmap built by contractors, for contractors. Stop leaving money on the table and start running your business like the empire it&apos;s meant to be.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-red-accent transition-colors underline underline-offset-4 w-fit">
            See how it works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>

        {/* Right image */}
        <div
          className="bg-cover bg-center min-h-[300px] md:min-h-full"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=960&q=80')" }}
        />
      </div>

      {/* Floating tab */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold px-2 py-6 rounded-l-lg hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        OUR PROGRAM
      </div>
    </section>
  );
}
