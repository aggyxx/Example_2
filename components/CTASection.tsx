import Link from "next/link";
import StarsBackground from "@/components/StarsBackground";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <StarsBackground />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-heading)] italic">
          The American Dream Isn&apos;t Dead. You Just Need the Right Blueprint.
        </h2>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Join hundreds of contractors across the nation who stopped guessing and started growing. Your next chapter starts now.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center px-10 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-brand-red-dark transition-all text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(185,28,28,0.5)]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
