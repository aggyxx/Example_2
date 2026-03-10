interface TestimonialCardProps {
  name: string;
  business: string;
  location: string;
  quote: string;
  accent?: "red" | "blue";
}

export default function TestimonialCard({
  name,
  business,
  location,
  quote,
  accent = "red",
}: TestimonialCardProps) {
  const borderColor = accent === "red" ? "border-t-brand-red" : "border-t-brand-blue-accent";
  const glowColor = accent === "red" ? "hover:shadow-[0_0_20px_rgba(185,28,28,0.3)]" : "hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]";

  return (
    <div
      className={`bg-gray-900 border border-gray-800 border-t-4 ${borderColor} rounded-xl p-6 hover:scale-[1.02] ${glowColor} transition-all duration-300`}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="pt-4 border-t border-gray-800">
        <div className="font-semibold text-white text-sm">{name}</div>
        <div className="text-xs text-gray-500 mt-0.5">
          {business} &middot; {location}
        </div>
      </div>
    </div>
  );
}
