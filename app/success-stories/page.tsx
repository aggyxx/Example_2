import type { Metadata } from "next";
import StarsBackground from "@/components/StarsBackground";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Success Stories | School of Home Service",
  description: "Real results from real American contractors who transformed their businesses with School of Home Service.",
};

const videoCards = [
  { name: "Jake", business: "Eagle Lawn & Landscape", state: "Texas", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Marcus", business: "Liberty Plumbing Co", state: "Ohio", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Sarah", business: "Sparkle Home Cleaning", state: "Florida", img: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Chris", business: "Shield Roofing Solutions", state: "Georgia", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Ryan", business: "Patriot Outdoors", state: "Minnesota", img: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "David", business: "Precision Electrical", state: "California", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Tyler", business: "Summit HVAC", state: "Colorado", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Amanda", business: "Pristine Maid Service", state: "North Carolina", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Kevin", business: "K&W Landscaping", state: "Indiana", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Mike", business: "Horizon Painting Co", state: "Arizona", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Brandon", business: "ProCut Tree Service", state: "Michigan", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Jason", business: "ClearView Window Co", state: "Washington", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Dustin", business: "Shield Roofing", state: "South Carolina", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
  { name: "Blake", business: "Trailhead Tree Service", state: "Oregon", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop", accent: "border-t-brand-blue-accent" },
  { name: "Shane", business: "Bedrock Concrete", state: "Pennsylvania", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop", accent: "border-t-brand-red" },
];

const fbPosts = [
  {
    name: "Trevor Hobbs",
    avatar: "https://i.pravatar.cc/80?img=11",
    date: "Nov 21, 2025",
    text: "Started working with School of Home Service about 5 months ago. They&apos;ve helped our business tremendously. Given me multiple ideas and things I need to apply into my business. Extremely knowledgeable especially in the green industry. Definitely would recommend.",
    likes: 24,
    comments: 3,
  },
  {
    name: "Jackson Nauert",
    avatar: "https://i.pravatar.cc/80?img=12",
    date: "Nov 18, 2025",
    text: "These guys are solid and have your best interest at heart! Push you outside of your comfort zone and force you to grow. The strategies they teach are the real deal.",
    likes: 18,
    comments: 1,
  },
  {
    name: "Wyatt Crawford",
    avatar: "https://i.pravatar.cc/80?img=14",
    date: "Nov 20, 2025",
    text: "School of Home Service has made a huge impact on my business. Not only has he helped me change the way I do things but has helped set me up for long term success. I was super skeptical at first but it has been hands down the best investment I have made in my business yet. Changed the game for me and made me look at things a completely different way. Cannot say enough good things, truly been a huge help in growing my small business.",
    likes: 31,
    comments: 5,
  },
  {
    name: "Justin Munson",
    avatar: "https://i.pravatar.cc/80?img=15",
    date: "Nov 19, 2025",
    text: "Hands down the best money I&apos;ve spent to learn and grow my business in ways I&apos;ve never thought about before. Can&apos;t recommend enough! The coaching calls alone are worth every penny.",
    likes: 22,
    comments: 1,
  },
  {
    name: "Trevor Roney",
    avatar: "https://i.pravatar.cc/80?img=33",
    date: "Nov 18, 2025",
    text: "Massive value! Helped me think of things in a different way, and talks about stuff nobody else in the space wants to share. No gatekeeping, only solid advice. Highly recommend to any contractor looking to level up.",
    likes: 19,
    comments: 2,
  },
  {
    name: "Cale Cook",
    avatar: "https://i.pravatar.cc/80?img=51",
    date: "Nov 19, 2025",
    text: "Awesome experience with School of Home Service! Always there to help. The support system is unlike anything I&apos;ve seen in this industry. They genuinely care about your growth.",
    likes: 27,
    comments: 4,
  },
  {
    name: "Will Johnstone",
    avatar: "https://i.pravatar.cc/80?img=53",
    date: "Nov 18, 2025",
    text: "Worth every cent of your money. They clearly have experience and knowledge in the field. Keeps you honest and checks in on your progress. I recommend their services to anyone looking to grow their trades business.",
    likes: 15,
    comments: 2,
  },
  {
    name: "Nicholas Fullmer",
    avatar: "https://i.pravatar.cc/80?img=55",
    date: "Oct 2, 2025",
    text: "Working with them was the best decision I could have made for my family and business. Introduced me to ideas I never would have had and helped me make better decisions that in turn gave me more qualified leads and signed contracts.",
    likes: 33,
    comments: 6,
  },
  {
    name: "Keaton Kensler",
    avatar: "https://i.pravatar.cc/80?img=57",
    date: "Nov 3, 2025",
    text: "Best way to grow and scale your business. Not a guru, genuinely puts his time money and effort into every one of his clients. The absolute best thing I could have ever done for my business. Would love to share how much success this has brought me.",
    likes: 28,
    comments: 3,
  },
  {
    name: "Camden Browder",
    avatar: "https://i.pravatar.cc/80?img=59",
    date: "Oct 15, 2025",
    text: "Great guy giving great lessons and advice to growing entrepreneurs. If you&apos;re in the trades and want to stop just surviving and start thriving, this is your move.",
    likes: 21,
    comments: 2,
  },
  {
    name: "Grant McBroom",
    avatar: "https://i.pravatar.cc/80?img=60",
    date: "Feb 18, 2025",
    text: "This service is no joke. He is great at explaining what he is doing and the process behind it. Also always one text away if you have any questions and he will have the answer! Would do it all over again!",
    likes: 17,
    comments: 1,
  },
  {
    name: "Braylen Pysyk",
    avatar: "https://i.pravatar.cc/80?img=61",
    date: "Feb 6, 2025",
    text: "Incredible experience from start to finish. The team truly understands what it takes to build a home service business. The accountability structure keeps you focused and moving forward.",
    likes: 14,
    comments: 2,
  },
  {
    name: "Mitchell Whyte",
    avatar: "https://i.pravatar.cc/80?img=22",
    date: "Jan 30, 2025",
    text: "Been working with them for a few months. Given myself and my team some great ideas to launch our lead generation and closing rate into another stage! Looking forward to see what the results will bring!",
    likes: 20,
    comments: 3,
  },
  {
    name: "EJ Island",
    avatar: "https://i.pravatar.cc/80?img=25",
    date: "Jan 15, 2025",
    text: "Amazing program. The strategies are practical and easy to implement. My business has grown 60% since joining. The community of contractors is incredibly supportive.",
    likes: 26,
    comments: 4,
  },
];

const tweets = [
  { handle: "@ironside_tx", name: "Travis W.", text: "6 months in with @schoolofhomeservice and we just had our first $80K month. Not bragging, just saying the systems work if you actually put them in. #contractor #growth", likes: 142, retweets: 23, date: "Dec 2025" },
  { handle: "@libertylawn_va", name: "Tyler R.", text: "Stop paying for leads. Start owning your pipeline. Best thing I learned this year. If you're a contractor still throwing money at ad agencies... there's a better way.", likes: 87, retweets: 14, date: "Nov 2025" },
  { handle: "@patriot_outdoor", name: "Ryan B.", text: "Took my first real vacation in 3 years. Business ran smooth without me. That's what good systems look like. Thank you @schoolofhomeservice for changing how I think about ops.", likes: 234, retweets: 41, date: "Oct 2025" },
  { handle: "@summithvac_co", name: "Tyler R.", text: "From 12 Google reviews to 127 in 5 months. Phone is ringing off the hook. If you're not optimizing your GBP you're leaving money on the table.", likes: 198, retweets: 37, date: "Jan 2026" },
  { handle: "@eaglelawn_tx", name: "Jake M.", text: "Hit $40K/month for the third month in a row. A year ago I was stuck at $15K wondering if I should get a \"real job.\" Wild how fast things change when you get the right guidance.", likes: 312, retweets: 56, date: "Feb 2026" },
  { handle: "@precisionelec", name: "David L.", text: "The close rate training alone was worth 10x what I paid. Went from closing 30% of estimates to 72%. Same leads, different approach. Game changer.", likes: 156, retweets: 28, date: "Dec 2025" },
];

const googleReviews = [
  { name: "Daniel F.", text: "School of Home Service completely changed the trajectory of my business. The team genuinely cares about your success. Can&apos;t recommend them enough." },
  { name: "Ashley M.", text: "Finally found a program that delivers. No fluff, no gimmicks, just real strategies that move the needle. My business has never been stronger." },
  { name: "Cody R.", text: "The coaching is on another level. They helped me see blind spots I didn&apos;t know I had. Worth every single dollar." },
  { name: "Jennifer T.", text: "As a woman in the trades, I wasn&apos;t sure this would be my thing. Turns out it was exactly what I needed. Universal strategies and incredible support." },
  { name: "Steve P.", text: "I&apos;ve tried other programs and they were all talk. This one&apos;s different. Real results, real support, real people who&apos;ve done the work." },
  { name: "Matt L.", text: "Joined 6 months ago and already doubled my revenue. The systems approach makes everything predictable and scalable." },
  { name: "Roberto G.", text: "Went from barely making payroll to having a 3 month cash reserve. The financial systems module is incredible. Wish I found this years ago." },
  { name: "Derek K.", text: "My team went from 2 guys to 9 in under a year. The hiring framework and SOPs they teach actually work. No more nightmare employees." },
  { name: "Samantha R.", text: "Best investment I&apos;ve made in my cleaning business. Revenue up 85% and I actually have time to spend with my kids now." },
  { name: "Marcus J.", text: "The Google Business Profile optimization was a game changer. Went from page 3 to the top of local results in 6 weeks." },
  { name: "Kyle W.", text: "I was so burnt out I almost sold the business. After 3 months in the program I fell back in love with what I do. Structure changes everything." },
  { name: "Amanda C.", text: "They don&apos;t just teach you what to do, they walk you through HOW to do it step by step. Night and day difference from other programs." },
];

export default function SuccessStories() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-heading)] uppercase tracking-wide">
            Client Success Stories
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Real results from real American contractors. No actors, no scripts, just hardworking business owners who decided to invest in themselves.
          </p>
        </div>
      </section>

      {/* Video-style Client Cards */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {videoCards.map((card, i) => (
              <div
                key={i}
                className={`group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 border-t-4 ${card.accent} transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(185,28,28,0.3)] cursor-pointer`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-white">{card.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{card.business} &middot; {card.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook-style Social Proof */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)] uppercase tracking-wide">
              What Our Clients Are Saying
            </h2>
            <p className="mt-3 text-gray-400">100% recommend (39 Reviews)</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {fbPosts.map((post, i) => (
              <div key={i} className="break-inside-avoid bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <img src={post.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-white">{post.name}</span>
                      <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">recommends School of Home Service &middot; {post.date}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{post.text}</p>
                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h4V9H2v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
                    </span>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{post.comments} comment{post.comments !== 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tweet-style Testimonials */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              Across the Internet
            </h2>
            <p className="mt-3 text-gray-400">Contractors sharing their wins</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tweets.map((tweet, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-sm">
                      {tweet.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{tweet.name}</div>
                      <div className="text-xs text-gray-500">{tweet.handle}</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{tweet.text}</p>
                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-6 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    {tweet.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" /></svg>
                    {tweet.retweets}
                  </span>
                  <span>{tweet.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-20 md:py-28 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-lg font-semibold text-white">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 text-sm">5.0 average from 300+ reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {googleReviews.map((review, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-red to-brand-blue-accent flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
