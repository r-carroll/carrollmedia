# CarrollMedia

The studio site for carrollmedia.dev: Next.js App Router, statically rendered,
built on the CarrollMedia design system.

The original portfolio lives in [`legacy/`](legacy/README.md) and deploys on its
own to old.carrollmedia.dev.

## Layout

| Path | What |
| --- | --- |
| `app/` | Routes: `/`, `/services`, `/work`, `/work/tradely`, `/pricing`, `/about`, `/labs` |
| `components/` | Design-system components (`core`, `media`, `sales`) and site `chrome`. Import from `@/components`. |
| `styles/tokens/` | Token CSS, unchanged from the design project |
| `styles/components.css` | Component styles |
| `design-system/` | Adherence lint rules from the design project |
| `.claude/skills/carrollmedia-design/` | Brand and voice rules for Claude |
| `public/aerial/` | Plates pulled from the studio's drone footage |

## Development

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint       # design-system adherence
pnpm typecheck
pnpm build
```

## Before launch

- Shoot job-site plates and a founder portrait. Empty wells are labelled on the
  pages that need them.

## Deploying

The root project stays on carrollmedia.dev. Paths from the old portfolio
(`/decibel-meter`, `/omikuji`, `/react-native`, `/mission-0716` and the PDFs)
temporarily redirect to old.carrollmedia.dev; see `next.config.ts`.
