# Portfolio

A personal site built with Next.js, TypeScript, and Tailwind. Home, project list, and one page per project. Content lives in a single data file.

See also [PORTFOLIO.md](./PORTFOLIO.md) for voice, style, and conventions.

## Run locally

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build:

```
npm run build
npm start
```

## Add a project

Edit `src/lib/projects.ts`. Add an object to the `projects` array that matches `Project` in `src/lib/types.ts`. The `slug` becomes the URL: `/projects/your-slug`.

Set `featured: true` to show the project in **Selected work** on the home page. Leave it off or omit it for list-only projects.

After you add or change projects, restart the dev server if it is already running. New slugs are picked up on the next build.

### Required fields

| Field | Notes |
|-------|--------|
| `slug` | URL segment, lowercase, use hyphens |
| `title` | Project name |
| `year` | String, e.g. `"2025"` |
| `status` | `"shipped"`, `"in progress"`, or `"parked"` |
| `oneLiner` | Short summary for cards and the top of the project page |

### Optional fields

| Field | Shows on the project page as |
|-------|------------------------------|
| `role` | Header, next to year and status |
| `context` | Context |
| `work` | What I did (Markdown) |
| `media` | Visual (images with optional captions) |
| `metrics` | Stat callouts, before reflection |
| `reflection` | Reflection |
| `tags` | Projects list only; also used for tag filters |
| `links` | Links |
| `featured` | Home page selected work (not a page section) |

Sections on the project page always appear in the same order. If a field is empty or missing, that section is skipped.

### Images and GIFs

**Local files:** put them in `public/images/` or `public/projects/`, then reference them from `media` with a matching path, e.g. `"/images/studio-hero.jpg"`. The path must match the file exactly, including the extension.

**GIFs:** use a `.gif` path in `media` like any other visual. Animated GIFs render with a plain `img` tag so the animation is preserved. Static images (`.png`, `.jpg`, `.webp`) still use optimized `next/image`.

**Remote URLs:** allowed if the host is listed in `next.config.ts` under `images.remotePatterns`. Unsplash is configured already. For another host, add a pattern there and rebuild.

Each `media` item needs `src` and `alt`. `caption` is optional.

Example:

```ts
media: [
  {
    src: "/images/my-project.jpg",
    alt: "Screenshot of the settings screen",
    caption: "Optional line under the image.",
  },
  {
    src: "/images/prototype-flow.gif",
    alt: "Prototype walkthrough showing the full checkout flow",
    caption: "The prototype in motion.",
  },
],
```

## Deploy

```
git add .
git commit -m "describe what changed"
git push
```

This is a standard Next.js app. Easiest path: push to GitHub and import the repo on [Vercel](https://vercel.com). It will run `npm run build` and host the output. Avoid `npm audit fix --force`; it has downgraded Next.js before.

Other hosts work too as long as they support Next.js (Node server or static export if you configure that). On a VPS: clone the repo, `npm install`, `npm run build`, then run `npm start` behind a process manager and reverse proxy.

Set your site name, contact links, and about copy in the components under `src/components` and `src/app` before you go live.
