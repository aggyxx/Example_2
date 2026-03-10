const stories = [
  { name: "Travis W.", business: "Ironside Exteriors", location: "Texas", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop" },
  { name: "Derek M.", business: "Patriot Pressure Washing", location: "Georgia", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" },
  { name: "Kyle & Matt", business: "Freedom Fence Co.", location: "Tennessee", img: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=300&fit=crop" },
  { name: "Brandon S.", business: "Summit Roofing", location: "Colorado", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" },
  { name: "Tyler R.", business: "Liberty Lawn Care", location: "Virginia", img: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=400&h=300&fit=crop" },
  { name: "Cody J.", business: "Heartland Hauling", location: "Kansas", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" },
  { name: "Mason D.", business: "All-Star Plumbing", location: "North Carolina", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop" },
  { name: "Zach P.", business: "Eagle Eye Electric", location: "Arizona", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop" },
  { name: "Caleb T.", business: "Ironclad Painting", location: "Michigan", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { name: "Hunter B.", business: "Grit Landscaping", location: "Alabama", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" },
  { name: "Brett & Josh", business: "Steadfast Builders", location: "Oklahoma", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" },
  { name: "Wyatt K.", business: "Frontier HVAC", location: "Montana", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop" },
  { name: "Dustin H.", business: "Shield Roofing", location: "South Carolina", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop" },
  { name: "Blake F.", business: "Trailhead Tree Service", location: "Oregon", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
  { name: "Shane C.", business: "Bedrock Concrete", location: "Pennsylvania", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" },
];

const borderColors = [
  "border-t-brand-red shadow-[0_0_15px_rgba(185,28,28,0.3)]",
  "border-t-brand-blue-accent shadow-[0_0_15px_rgba(37,99,235,0.3)]",
  "border-t-brand-red shadow-[0_0_15px_rgba(185,28,28,0.3)]",
  "border-t-brand-blue-accent shadow-[0_0_15px_rgba(37,99,235,0.3)]",
  "border-t-brand-red shadow-[0_0_15px_rgba(185,28,28,0.3)]",
];

const hoverGlows = [
  "hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]",
  "hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
  "hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]",
  "hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
  "hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]",
];

export default function ClientStories() {
  return (
    <section className="relative bg-black py-20 md:py-28 overflow-visible">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide font-[family-name:var(--font-heading)]">
            AMERICAN CONTRACTOR SPOTLIGHT
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-brand-red rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {stories.map((story, i) => (
            <div
              key={`${story.name}-${i}`}
              className={`group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 border-t-4 ${borderColors[i % 5]} transition-all duration-300 hover:scale-[1.04] ${hoverGlows[i % 5]} cursor-pointer`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-white">{story.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                  {story.business} &middot; {story.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
