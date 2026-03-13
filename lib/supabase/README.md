# Supabase

- **Client (browser):** `import { createClient } from '@/lib/supabase/client'` — use in Client Components.
- **Server:** `import { createClient } from '@/lib/supabase/server'` — use in Server Components, Server Actions, and Route Handlers (await it: `const supabase = await createClient()`).
- **API routes:** `import { getSupabase } from '@/lib/supabase/api'` — use in Route Handlers for server-only DB access.

## Env vars

In `.env.local` and Vercel:

- `NEXT_PUBLIC_SUPABASE_URL` — Project URL (Supabase dashboard → Project Settings → API).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — anon/publishable key from the same page.

## GBP Analyzer table

The GBP analyzer stores results in Supabase so the results page works on Vercel. One-time setup: in the Supabase dashboard open **SQL Editor**, run the migration in `supabase/migrations/20250310000000_gbp_analyses.sql`.
