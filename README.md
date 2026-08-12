# Portfolio

A personal site built with Next.js, TypeScript, and Tailwind. Home, project list, and one page per project. Content lives in a single data file.

See also [PORTFOLIO.md](./PORTFOLIO.md) for voice, style, and conventions.

This README explains how to get the project running, building, testing, linting, and contributing.

Prerequisites

- Node.js >= 18 (recommend using Node 18 or 20)
- npm (bundled with Node)

Quick install

```bash
# install deterministic dependencies
npm ci
```

Run (development)

```bash
npm run dev
```

Open http://localhost:3000. The dev server uses Next.js' app router and will reload on file changes.

Build & start (production)

```bash
npm run build
npm start
```

These use the project's npm scripts: "build" runs `next build`, "start" runs `next start`.

Testing

There are no automated tests configured in this project yet. To add tests, a minimal path is:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
# add a test script to package.json: "test": "vitest"
```

Then write tests under a `test/` or `src/` __tests__ folder and run `npm run test`.

Type checking (TypeScript)

To run a TypeScript typecheck:

```bash
npx tsc --noEmit
```

Linting

Run ESLint across the repo with:

```bash
npm run lint
```

Formatting

This repository does not include a formatter script (Prettier) by default. If you want consistent formatting, install Prettier and add a "format" script, for example:

```bash
npm install --save-dev prettier
# package.json: "format": "prettier --write ."
```

Contributing

- Branching: create a short-lived topic branch from main (e.g., `improve-docs`).
- Commit messages: be descriptive. Squash or tidy commits before merging if appropriate.
- Pull requests: open a PR against the default branch and request a review.
- Code style: TypeScript + ESLint are configured; run `npm run lint` and `npx tsc --noEmit` before opening a PR.

Troubleshooting / Common issues

- Node version: Next.js v16 requires a modern Node.js. If builds fail, try Node 18 or 20.
- Images: remote images are allowed only for hosts listed in `next.config.ts` (Unsplash is configured). Add remotePatterns and rebuild if you use a different host.
- Dev server not starting: ensure `node_modules` exists (`npm ci`) and port 3000 is free.
- `npm audit fix --force` can downgrade Next.js; avoid it.

Add a project

Edit `src/lib/projects.ts`. Add an object to the `projects` array that matches `Project` in `src/lib/types.ts`. The `slug` becomes the URL: `/projects/your-slug`.

Set `featured: true` to show the project in Selected work on the home page. After you add or change projects, restart the dev server if it is already running; new slugs are picked up on the next build.

Images

Local files: put them in `public/projects/` and reference them from `media` with a matching path, e.g. `/projects/studio-hero.jpg`.

Remote URLs: allowed if the host is listed in `next.config.ts` under `images.remotePatterns` (Unsplash is configured).

Deploy

Push to your Git host and use Vercel for the easiest deployment. Vercel runs `npm run build` automatically. On a VPS: clone the repo, `npm ci`, `npm run build`, and run `npm start` behind a process manager.
