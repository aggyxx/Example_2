import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const mcApiKey = process.env.MAILCHIMP_API_KEY;
    const mcListId = process.env.MAILCHIMP_LIST_ID;
    const mcServer = process.env.MAILCHIMP_SERVER_PREFIX;

    if (mcApiKey && mcListId && mcServer) {
      await fetch(`https://${mcServer}.api.mailchimp.com/3.0/lists/${mcListId}/members`, {
        method: "POST",
        headers: {
          Authorization: `apikey ${mcApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: { FNAME: name.split(" ")[0], LNAME: name.split(" ").slice(1).join(" "), PHONE: phone || "" },
          tags: ["contact-form"],
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
