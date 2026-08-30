# FitBeats

Marketing site for FitBeats, a women's fitness studio. Single-page site presenting the studio's programmes and collecting class enquiries through a validated contact form.

## What's here

A one-page React front end (hero, about, services, gallery, testimonials, contact) served by a small Express API that accepts enquiries.

The eight programmes listed on the site: Step/Floor Aerobics, Weight Training, Resistance Training, Tabata Training, Mat Pilates, Yoga, BollyFit X, and Diet Consultation.

## Stack

- **Frontend**: React 18 + TypeScript, built with Vite
- **UI**: shadcn/ui on Radix primitives, Tailwind CSS, Framer Motion
- **Routing**: Wouter
- **Data fetching**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Backend**: Express 4 (TypeScript, ES modules)
- **Validation**: Zod schemas in `shared/schema.ts`, shared by client and server
- **Deployment**: Vercel (`vercel.json`)

## Running it

```bash
npm install
npm run dev
```

Serves the API and the Vite-powered client together on http://localhost:5000 (override with `PORT`).

```bash
npm run build   # bundles client (vite) and server (esbuild) into dist/
npm start       # runs the production build
npm run check   # typecheck
```

## API

| Method | Route             | Purpose                                      |
| ------ | ----------------- | -------------------------------------------- |
| `POST` | `/api/inquiries`  | Submit an enquiry; body validated with Zod    |
| `GET`  | `/api/inquiries`  | List submitted enquiries (admin)              |

## Storage

Enquiries currently go to an in-memory store (`MemStorage` in `server/storage.ts`), so they do **not** survive a restart.

A Drizzle schema targeting Neon serverless Postgres is defined in `shared/schema.ts` (`users`, `inquiries`) and `npm run db:push` is wired up, but the server is not yet pointed at it. Swapping `MemStorage` for a Drizzle-backed implementation of the same `IStorage` interface is what's needed to persist.
