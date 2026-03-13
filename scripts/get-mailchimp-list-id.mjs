/**
 * One-time script to get your Mailchimp Audience (List) ID.
 * Run from project root: node scripts/get-mailchimp-list-id.mjs
 *
 * Requires .env.local with:
 *   MAILCHIMP_API_KEY=your_api_key
 *   MAILCHIMP_SERVER_PREFIX=us20
 */

import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually if dotenv didn't (Next.js uses .env.local)
const envPath = join(__dirname, "..", ".env.local");
if (existsSync(envPath)) {
  const env = readFileSync(envPath, "utf8");
  env.split("\n").forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  });
}

const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX || "us20";

if (!API_KEY) {
  console.error("Missing MAILCHIMP_API_KEY. Add it to .env.local and run again.");
  process.exit(1);
}

const url = `https://${SERVER}.api.mailchimp.com/3.0/lists?count=10`;
const res = await fetch(url, {
  headers: { Authorization: `apikey ${API_KEY}` },
});

if (!res.ok) {
  const err = await res.text();
  console.error("Mailchimp API error:", res.status, err);
  process.exit(1);
}

const data = await res.json();
const lists = data.lists || [];

if (lists.length === 0) {
  console.log("No audiences found in this account.");
  process.exit(0);
}

console.log("\nYour Mailchimp Audience (List) ID(s):\n");
lists.forEach((list) => {
  console.log(`  Name: ${list.name}`);
  console.log(`  ID:   ${list.id}`);
  console.log("");
});
console.log("Use the ID above as MAILCHIMP_LIST_ID in Vercel and .env.local.\n");
