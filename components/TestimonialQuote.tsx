export default function TestimonialQuote() {
  return (
    <section className="bg-gray-900 py-20 md:py-28 relative overflow-hidden">
      {/* Large decorative quotation marks */}
      <div className="absolute top-8 right-8 text-gray-700 hidden md:block">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light italic">
          &ldquo;Before I found School of Home Service, I was grinding 80-hour weeks and
          barely breaking even. Their team showed me how to actually run a business,
          not just work a job. In six months I doubled my revenue and finally took my first
          real vacation. If you&apos;re a contractor who&apos;s tired of spinning your wheels, these
          are your people.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-white">Kevin R., Shield Roofing, South Carolina</span>
        </div>
      </div>
    </section>
  );
}
