-- Store GBP analysis results so the results page works on serverless (Vercel).
-- Run this in Supabase: SQL Editor → New query → paste → Run.

create table if not exists public.gbp_analyses (
  id text primary key,
  analysis jsonb not null,
  created_at timestamptz default now()
);

alter table public.gbp_analyses enable row level security;

-- Allow anonymous insert (API writes after form submit) and select by id (results page).
create policy "Allow anon insert"
  on public.gbp_analyses for insert
  to anon with check (true);

create policy "Allow anon select"
  on public.gbp_analyses for select
  to anon using (true);
