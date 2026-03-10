# School of Home Service

A Next.js website for schoolofhomeservice.com — empowering home service professionals with proven systems for growth.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root with:

```
GOOGLE_PLACES_API_KEY=         # Google Cloud Console — Places API (New)
MAILCHIMP_API_KEY=             # Mailchimp account settings → API keys
MAILCHIMP_LIST_ID=             # Mailchimp audience → Settings → Audience ID
MAILCHIMP_SERVER_PREFIX=       # e.g., us21 (from your API key suffix)
RESEND_API_KEY=                # resend.com — for sending GBP results emails
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, services, GBP CTA, testimonials |
| `/about` | About Us — story, values, differentiators |
| `/program` | The Program — features, process, results |
| `/success-stories` | Client testimonials and reviews |
| `/contact` | Contact form |
| `/gbpanalyzer` | Google Business Profile Analyzer (lead-gen tool) |
| `/gbpanalyzer/results` | GBP analysis results with score and suggestions |

## GBP Analyzer Flow

1. User submits name, email, and Google Business Profile URL
2. API adds email to Mailchimp list (tagged "gbp-analyzer")
3. Google Places API fetches profile data (falls back to demo data if no API key)
4. Scoring algorithm generates a 0-100 score across 8 categories
5. Results email sent via Resend with score breakdown and improvement tips
6. User redirected to results page with animated score gauge

## Tech Stack

- **Next.js 15** with App Router
- **Tailwind CSS v4**
- **Google Places API** (New) for GBP data
- **Mailchimp Marketing API** for subscriber management
- **Resend** for transactional email
