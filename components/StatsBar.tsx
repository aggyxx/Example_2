const stats = [
  { value: "500+", label: "Business Owners Coached", border: "border-t-brand-red" },
  { value: "$12M+", label: "Client Revenue Generated", border: "border-t-brand-blue-accent" },
  { value: "200+", label: "5-Star Reviews", border: "border-t-brand-red" },
  { value: "98%", label: "Client Satisfaction", border: "border-t-brand-blue-accent" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-12">
          School of Home Service Results
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-brand-charcoal/60 border-t-4 ${stat.border} rounded-lg p-6 md:p-8 text-center`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
