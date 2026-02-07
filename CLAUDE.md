# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

otm-landing is a landing/marketing page for the One True Mint platform. It dynamically displays project cards fetched from Supabase, with pinned projects featured at the top.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build (also uses Turbopack)
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Architecture

- **Next.js 15 App Router** with all server components — no `"use client"` anywhere
- **Single Supabase query** in `src/app/page.tsx` fetches all projects, then splits into `pinned[]` and `regular[]` in JS
- **ISR** with `revalidate = 60` — statically generated, revalidated every 60 seconds
- **Supabase client** (`src/lib/supabase.ts`) exports `null` when env vars are missing/invalid, so the build succeeds without credentials (returns empty project list)
- **Dark theme only** — `bg-gray-950` base, mint accent (`#3DFFA2`) defined via Tailwind v4 `@theme` block in `globals.css`
- **Tailwind v4** — custom colors are defined in `globals.css` `@theme inline` block, not in a tailwind config file. Use `text-mint`, `border-mint`, etc.
- **Image handling**: `next.config.ts` allows all HTTPS remote hosts via wildcard `remotePatterns`

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous/public key
