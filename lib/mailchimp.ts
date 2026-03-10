const API_KEY = process.env.MAILCHIMP_API_KEY || "";
const LIST_ID = process.env.MAILCHIMP_LIST_ID || "";
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX || "";

export async function addSubscriber(
  email: string,
  name: string,
  tags: string[] = [],
  mergeFields: Record<string, string> = {}
) {
  if (!API_KEY || !LIST_ID || !SERVER) {
    console.warn("Mailchimp not configured; skipping subscriber add");
    return null;
  }

  const nameParts = name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const response = await fetch(
    `https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          ...mergeFields,
        },
        tags,
      }),
    }
  );

  if (!response.ok) {
    const data = await response.json();
    if (data.title === "Member Exists") {
      return { alreadyExists: true };
    }
    console.error("Mailchimp error:", data);
  }

  return response;
}
