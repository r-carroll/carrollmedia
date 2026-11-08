# CarrollMedia Portfolio (legacy)

The original portfolio site, built with React and Next.js. It is kept here so it
can still be deployed on its own at https://old.carrollmedia.dev. The new site
lives at the repository root.

## Deploying

This folder is a standalone Next.js app with its own `package.json` and lockfile.
On Vercel, create a separate project from this repository with:

- **Root Directory:** `legacy`
- **Framework preset:** Next.js
- **Domain:** `old.carrollmedia.dev`

## Local development

```sh
cd legacy
pnpm install
pnpm dev
```
