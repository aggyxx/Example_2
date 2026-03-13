import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client for API routes (no cookies). Use for server-only reads/writes.
 */
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key);
}
