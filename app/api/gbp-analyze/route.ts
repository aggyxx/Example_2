import { NextRequest, NextResponse } from "next/server";
import { analyzeGBP, type GBPData, type GBPAnalysis } from "@/lib/gbp-analyzer";
import { addSubscriber } from "@/lib/mailchimp";
import { sendResultsEmail } from "@/lib/email";

const analysisCache = new Map<string, GBPAnalysis>();

function extractPlaceId(url: string): string | null {
  const patterns = [
    /place_id[=:]([A-Za-z0-9_-]+)/,
    /!1s(0x[0-9a-f]+:[0-9a-fx]+)/,
    /data=.*!1s([^!]+)/,
    /ChIJ[A-Za-z0-9_-]+/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1] || match[0];
  }

  return null;
}

function extractSearchQuery(url: string): string | null {
  const patterns = [
    /place\/([^/]+)/,
    /search\/([^/]+)/,
    /q=([^&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  return null;
}

async function fetchGBPData(gbpUrl: string): Promise<GBPData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return generateDemoData(gbpUrl);
  }

  try {
    let placeId = extractPlaceId(gbpUrl);

    if (!placeId) {
      const query = extractSearchQuery(gbpUrl) || gbpUrl;
      const searchRes = await fetch(
        `https://places.googleapis.com/v1/places:searchText`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "places.id,places.displayName",
          },
          body: JSON.stringify({ textQuery: query }),
        }
      );

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        if (searchData.places?.length > 0) {
          placeId = searchData.places[0].id;
        }
      }
    }

    if (!placeId) {
      return generateDemoData(gbpUrl);
    }

    const detailsRes = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,photos,regularOpeningHours,websiteUri,primaryType,editorialSummary,nationalPhoneNumber",
        },
      }
    );

    if (!detailsRes.ok) {
      return generateDemoData(gbpUrl);
    }

    const place = await detailsRes.json();

    return {
      displayName: place.displayName?.text || "Your Business",
      rating: place.rating || 0,
      userRatingCount: place.userRatingCount || 0,
      photoCount: place.photos?.length || 0,
      hasDescription: !!place.editorialSummary?.text,
      hasHours: !!place.regularOpeningHours,
      hasWebsite: !!place.websiteUri,
      hasCategories: !!place.primaryType,
      hasPhone: !!place.nationalPhoneNumber,
    };
  } catch (error) {
    console.error("Google Places API error:", error);
    return generateDemoData(gbpUrl);
  }
}

function generateDemoData(gbpUrl: string): GBPData {
  const seed = gbpUrl.length;
  const rand = (min: number, max: number) => min + (seed % (max - min + 1));

  return {
    displayName: extractSearchQuery(gbpUrl) || "Your Business",
    rating: [3.2, 3.8, 4.1, 4.5, 4.7, 4.9][seed % 6],
    userRatingCount: rand(2, 85),
    photoCount: rand(0, 25),
    hasDescription: seed % 3 !== 0,
    hasHours: seed % 4 !== 0,
    hasWebsite: seed % 5 !== 0,
    hasCategories: seed % 2 === 0,
    hasPhone: seed % 3 !== 0,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, gbpUrl } = await req.json();

    if (!name || !email || !gbpUrl) {
      return NextResponse.json({ error: "Name, email, and GBP URL are required" }, { status: 400 });
    }

    if (!gbpUrl.includes("google") && !gbpUrl.includes("maps") && !gbpUrl.includes("goo.gl")) {
      return NextResponse.json(
        { error: "Please provide a valid Google Maps or Google Business Profile URL" },
        { status: 400 }
      );
    }

    const [gbpData] = await Promise.all([
      fetchGBPData(gbpUrl),
      addSubscriber(email, name, ["gbp-analyzer"], { GBP_URL: gbpUrl }),
    ]);

    const analysis = analyzeGBP(gbpData);
    analysisCache.set(analysis.id, analysis);

    sendResultsEmail(email, name.split(" ")[0], analysis).catch((err) =>
      console.error("Email send error:", err)
    );

    return NextResponse.json({
      id: analysis.id,
      score: analysis.totalScore,
      grade: analysis.grade,
    });
  } catch (error) {
    console.error("GBP analyze error:", error);
    return NextResponse.json({ error: "Analysis failed. Please try again." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing analysis ID" }, { status: 400 });
  }

  const analysis = analysisCache.get(id);

  if (!analysis) {
    return NextResponse.json({ error: "Analysis not found or expired" }, { status: 404 });
  }

  return NextResponse.json(analysis);
}
