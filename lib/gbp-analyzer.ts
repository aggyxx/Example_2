export interface GBPData {
  displayName: string;
  rating: number;
  userRatingCount: number;
  photoCount: number;
  hasDescription: boolean;
  hasHours: boolean;
  hasWebsite: boolean;
  hasCategories: boolean;
  hasPhone: boolean;
}

export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  suggestions: string[];
}

export interface GBPAnalysis {
  id: string;
  businessName: string;
  totalScore: number;
  grade: string;
  gradeColor: string;
  categories: CategoryScore[];
  topSuggestions: string[];
}

function scoreReviews(count: number): CategoryScore {
  let score = 0;
  const suggestions: string[] = [];

  if (count === 0) {
    score = 0;
    suggestions.push("You have zero reviews. Start asking every happy customer to leave a Google review.");
    suggestions.push("Make it easy: send a direct review link via text or email after each completed job.");
  } else if (count < 10) {
    score = 8;
    suggestions.push("Aim for at least 25+ reviews to build strong local credibility.");
    suggestions.push("Set a goal to get 2-3 new reviews per week by asking customers right after service.");
  } else if (count < 25) {
    score = 12;
    suggestions.push("You're building momentum. Push toward 50+ reviews to dominate local search.");
  } else if (count < 50) {
    score = 15;
    suggestions.push("Great review count! Keep the momentum going; consistency matters for rankings.");
  } else if (count < 100) {
    score = 18;
    suggestions.push("Strong review count. Focus on maintaining quality responses to every review.");
  } else {
    score = 20;
  }

  return { category: "Review Count", score, maxScore: 20, suggestions };
}

function scoreRating(rating: number): CategoryScore {
  let score = 0;
  const suggestions: string[] = [];

  if (rating === 0) {
    score = 0;
    suggestions.push("No rating yet. Get your first reviews to establish your reputation.");
  } else if (rating < 3) {
    score = 4;
    suggestions.push("Your rating needs immediate attention. Address negative reviews professionally and improve service quality.");
  } else if (rating < 4) {
    score = 8;
    suggestions.push("Work on improving customer experience. Follow up with clients to address concerns before they review.");
  } else if (rating < 4.5) {
    score = 14;
    suggestions.push("Good rating! Focus on consistently exceeding expectations to push above 4.5 stars.");
  } else if (rating < 4.8) {
    score = 17;
    suggestions.push("Excellent rating. Respond to every review; Google rewards active engagement.");
  } else {
    score = 20;
  }

  return { category: "Average Rating", score, maxScore: 20, suggestions };
}

function scorePhotos(count: number): CategoryScore {
  let score = 0;
  const suggestions: string[] = [];

  if (count === 0) {
    score = 0;
    suggestions.push("No photos! Add at least 10 high-quality photos of your work, team, and equipment.");
    suggestions.push("Profiles with photos get 42% more requests for directions on Google Maps.");
  } else if (count < 5) {
    score = 5;
    suggestions.push("Add more photos. Aim for 15+ including before/after shots, team photos, and equipment.");
  } else if (count < 15) {
    score = 8;
    suggestions.push("Good start on photos. Add before/after project shots to showcase your quality of work.");
  } else if (count < 30) {
    score = 12;
    suggestions.push("Strong photo library! Add new photos monthly to signal an active, thriving business.");
  } else {
    score = 15;
  }

  return { category: "Photos", score, maxScore: 15, suggestions };
}

function scoreDescription(has: boolean): CategoryScore {
  if (has) {
    return { category: "Business Description", score: 10, maxScore: 10, suggestions: [] };
  }
  return {
    category: "Business Description",
    score: 0,
    maxScore: 10,
    suggestions: [
      "Add a compelling business description with your key services, service area, and what makes you different.",
      "Include relevant keywords naturally; think about what customers search for when looking for your services.",
    ],
  };
}

function scoreHours(has: boolean): CategoryScore {
  if (has) {
    return { category: "Business Hours", score: 10, maxScore: 10, suggestions: [] };
  }
  return {
    category: "Business Hours",
    score: 0,
    maxScore: 10,
    suggestions: [
      "Add your business hours. Customers skip profiles without hours listed; they assume you're not active.",
      "Include special hours for holidays to show Google your profile is well-maintained.",
    ],
  };
}

function scoreWebsite(has: boolean): CategoryScore {
  if (has) {
    return { category: "Website", score: 5, maxScore: 5, suggestions: [] };
  }
  return {
    category: "Website",
    score: 0,
    maxScore: 5,
    suggestions: ["Link your website to your GBP. This builds trust and gives customers another way to learn about your services."],
  };
}

function scoreCategories(has: boolean): CategoryScore {
  if (has) {
    return { category: "Categories", score: 10, maxScore: 10, suggestions: [] };
  }
  return {
    category: "Categories",
    score: 0,
    maxScore: 10,
    suggestions: [
      "Set your primary business category and add relevant secondary categories.",
      "Categories directly impact which searches your profile shows up in; choose wisely.",
    ],
  };
}

function scorePhone(has: boolean): CategoryScore {
  if (has) {
    return { category: "Phone Number", score: 10, maxScore: 10, suggestions: [] };
  }
  return {
    category: "Phone Number",
    score: 0,
    maxScore: 10,
    suggestions: ["Add a phone number to your profile. Many customers call directly from Google search results."],
  };
}

function getGrade(score: number): { grade: string; gradeColor: string } {
  if (score >= 90) return { grade: "A+", gradeColor: "green" };
  if (score >= 80) return { grade: "A", gradeColor: "green" };
  if (score >= 70) return { grade: "B", gradeColor: "blue" };
  if (score >= 60) return { grade: "C", gradeColor: "yellow" };
  if (score >= 40) return { grade: "D", gradeColor: "orange" };
  return { grade: "F", gradeColor: "red" };
}

export function analyzeGBP(data: GBPData): GBPAnalysis {
  const categories = [
    scoreReviews(data.userRatingCount),
    scoreRating(data.rating),
    scorePhotos(data.photoCount),
    scoreDescription(data.hasDescription),
    scoreHours(data.hasHours),
    scoreWebsite(data.hasWebsite),
    scoreCategories(data.hasCategories),
    scorePhone(data.hasPhone),
  ];

  const totalScore = categories.reduce((sum, c) => sum + c.score, 0);
  const { grade, gradeColor } = getGrade(totalScore);

  const topSuggestions = categories
    .flatMap((c) => c.suggestions)
    .slice(0, 5);

  const id = `gbp_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

  return {
    id,
    businessName: data.displayName,
    totalScore,
    grade,
    gradeColor,
    categories,
    topSuggestions,
  };
}
