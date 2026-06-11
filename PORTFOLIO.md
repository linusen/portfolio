# Portfolio reference

A personal note to self for keeping this site consistent. Covers the voice, the data model, and how to add work. For anything structural, paste the real `src/lib/projects.ts` rather than trusting this file. This file drifts; the source does not.

## What it is

A UX portfolio. Next.js (App Router), TypeScript, Tailwind v4, React 19. Projects live as typed data in `src/lib/projects.ts` and render through the `ProjectDetail` component. Hosted on Vercel, auto-rebuilds on push.

## Voice

Conversational but considered. Short sentences, no jargon, no corporate filler. Write like you're explaining the project to a smart colleague over coffee, not presenting to a board. Snippets stay brief, 2 to 4 lines max. No em dashes, no bullet points unless the format genuinely calls for it. Numbers and specifics over vague claims. Honest about what's in progress. Whimsical enough to have personality, professional enough to be taken seriously.

Student work gets labelled as student work. No fabricated metrics.

## Look

Restrained and minimal. Lots of whitespace, one muted accent color (teal). DM Sans (via next/font) for everything. Mobile-first.

## Project type

```ts
export type ProjectStatus = "shipped" | "in progress" | "parked";

export interface Project {
  slug: string;
  title: string;
  year: string;
  status: ProjectStatus;
  role?: string;
  oneLiner: string;
  context?: string;
  work?: string;
  media?: { src: string; alt: string; caption?: string }[];
  metrics?: { value: string; label: string }[];
  reflection?: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  featured?: boolean;
}
```

Required: `slug`, `title`, `year`, `status`, `oneLiner`. Everything else is optional and only renders when filled. `featured: true` surfaces a project on the home page.

## Section order on the project page

Fixed top to bottom, even when sections are skipped:

1. Header (title, year, status tag, role)
2. One-liner
3. Context
4. What I did (`work`, rendered as markdown)
5. Visual (`media`)
6. Metrics (stat callouts)
7. Reflection
8. Links

## Images

Go in `public/images/`. The `media` src must match the path exactly: `/images/filename.jpg` maps to `public/images/filename.jpg`. Two things break it every time: the folder doesn't exist yet, or the extension is wrong (`.jpg` vs `.jpeg`). Check both before assuming the code is broken.

## Adding a project

Edit `src/lib/projects.ts` only. Add an object matching the `Project` type. Set `featured: true` to put it on the home page. Don't touch the components.

## Deploy

```bash
git add . && git commit -m "..." && git push
```

Vercel rebuilds on every push. Avoid `npm audit fix --force`; it has downgraded Next.js to an ancient version before and needed a manual `npm install next@latest` to recover.

## Local dev

```bash
npm install
npm run dev
```

If you hit `ERR_CONNECTION_REFUSED` on localhost:3000, the dev server isn't running. Start it, check `lsof -i :3000`, and confirm `node_modules` exists.