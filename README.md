# I-Tales — Company Website

Marketing website for I-Tales, an IT consulting studio based in Belgium specialized in Java, DevOps, CI/CD and OpenShift.

Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS v4](https://tailwindcss.com), deployed as a static export on [GitHub Pages](https://gdubois-itales.github.io/i-tales-website/).

## Tech stack

- **Next.js** (App Router, static export — `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **GitHub Actions** for CI/build/deploy
- **Google Forms** (behind the scenes) for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Pages auto-update as you edit files.

Before pushing, always check:
```bash
npm run lint
npm run build
```

## Project structure

app/
layout.tsx → shared shell: fonts, <Navbar />, <Footer />, global metadata
page.tsx → Home route ("/")
team/page.tsx → "/team"
services/page.tsx → "/services"
contact/page.tsx → "/contact"
not-found.tsx → custom 404 page
globals.css → Tailwind import, @theme (colors/fonts), shared component classes (.eyebrow, .thread-top, .micro-dot)

components/
layout/ → Navbar, Footer (shared across all pages)
sections/ → full-page content, one file per route (HeroSection is split into Hero + ExpertiseSection + AboutSection for Home)
forms/ → interactive form logic (client components)
ui/ → small reusable pieces (Filament decorative SVG, TeamCard, etc.)

Each page's own content lives in `components/sections/`; anything shared across every page (nav, footer) lives in `app/layout.tsx` instead.

## Deployment — GitHub Pages

The site is a **static export** (no Next.js server in production). On every push to `dev`, `.github/workflows/nextjs.yml` builds the site and publishes it automatically.

### `basePath` — why it exists and how it works

GitHub Pages serves this project at a **subpath** (`/i-tales-website/`), not at the domain root. `next.config.ts` computes `basePath`/`assetPrefix` automatically from GitHub's own environment variables during CI — no manual step needed for `next/link`, routes, or JS/CSS assets.

**Known limitation**: `next/image` does **not** reliably apply `basePath` when combined with `images.unoptimized: true` (required for static export). Because of this, any local image referenced through `next/image` must be manually prefixed:

```tsx
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

<Image src={`${basePath}/images/logo.png`} ... />
```

This works both locally (`basePath` is `""`) and in production (`basePath` is `/i-tales-website`), without ever hardcoding a relative path.

## Contact form — Google Forms integration

The contact form (`components/forms/ContactForm.tsx`) submits directly to a Google Form's response endpoint, no backend of our own involved. Config lives at the top of that file:

```tsx
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/FORM_ID/formResponse";
const FORM_FIELDS = {
  name: "entry.XXXXXXX",
  email: "entry.YYYYYYY",
  message: "entry.ZZZZZZZ",
};
```

### How to find these values for a (new) Google Form

Google Forms no longer exposes `entry.XXX` directly in the page's HTML. To find them:

1. Open the form's public `/viewform` URL.
2. View page source (`Ctrl+U`), search for `FB_PUBLIC_LOAD_DATA_`.
3. Each question appears as `[question_id, "Label", ..., [[entry_id, ...]], ...]` — the number to use is the one **nested inside the small array**, not the first number on the line.
4. Take the same URL and replace `/viewform` with `/formResponse` — that's `GOOGLE_FORM_ACTION_URL`.

Because the request uses `mode: "no-cors"`, the browser can never confirm success or failure — the UI optimistically shows a success message once the request completes without throwing. Verify actual delivery via the Google Form's "Responses" tab.

## Git workflow

- Branches are created from Jira tickets, always **from `dev`**, never `main`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:` for new content/features, `fix:` for corrections.
- Pull Requests target `dev`. `main` is not actively used for deployment.
- Before merging: `npm run lint`, `npm run build`, and a manual responsive check (mobile viewport) are expected to pass.

## Design source

Visual design is based on a mockup delivered as a single static HTML file, which uses a JS-based single-page toggle between sections. This project reimplements it as real routed Next.js pages instead, following the structure above.