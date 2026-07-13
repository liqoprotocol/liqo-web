# Deployment & Developer Experience

This guide covers everything needed to run, build, and deploy the Liqo website (`liqo-landing`), plus troubleshooting and best practices.

## Requirements

| Tool | Version | Notes |
|---|---|---|
| Node.js | ≥ 20 LTS | Runtime |
| pnpm | ≥ 9 | Package manager (this repo uses a pnpm workspace) |
| Git | any recent | Version control |

## Installation

```bash
git clone https://github.com/liqoprotocol/liqo-landing.git
cd liqo-landing
pnpm install
```

## Running Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server hot-reloads on save.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Environment Variables

Local development requires **no** environment variables. Optional variables:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL (defaults to `https://liqo.network`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Search Console verification |

> **Secrets policy:** `.env*` files are gitignored — never commit secrets. The waitlist API route uses an in-memory store for development; wire a persistence provider (database or ESP) before production.

## Docker (optional)

This site is a standard Next.js app and can be containerized with a standard Node build. A minimal production image:

```dockerfile
FROM node:20-alpine AS base
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Testing, Linting & Formatting

- **Linting:** `pnpm lint` (ESLint with `eslint-config-next`).
- **Type checking:** `pnpm build` runs the TypeScript compiler as part of the Next build.
- **Formatting:** follow the existing code style; keep imports ordered and components small.
- **Tests:** the marketing site has no unit test suite today; contributions adding meaningful tests (e.g. for the waitlist schema/logic) are welcome.

## Deployment

The site deploys to any Next.js-compatible host. **Vercel** is recommended:

1. Import the repository into Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `pnpm build`; output handled by Next.
4. Set any optional environment variables.
5. Deploy — Vercel provides preview deployments per pull request.

Self-hosting:

```bash
pnpm build
pnpm start   # serves on PORT (default 3000)
```

## Recommended: CI

Add a CI workflow (e.g. GitHub Actions) that runs `pnpm install`, `pnpm lint`, and `pnpm build` on every pull request to catch regressions before merge.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `pnpm: command not found` | Enable via `corepack enable` or install pnpm ≥ 9 |
| Build fails on Node version | Use Node ≥ 20 LTS |
| Fonts/3D hero not loading | Ensure network access on first build (fonts) and a WebGL-capable browser |
| Waitlist "duplicate" on every submit | Expected locally — the dev store is in-memory; configure real persistence |
| Stale types after dependency change | Delete `.next/` and `tsconfig.tsbuildinfo`, then rebuild |

## Best Practices

- Keep PRs small and focused; run `pnpm lint` and `pnpm build` before pushing.
- Maintain accessibility (WCAG 2.1 AA) and respect `prefers-reduced-motion`.
- Keep documentation in sync with changes.
- Never commit secrets, `.env` files, or private URLs.

## Related

- [Contributing](../CONTRIBUTING.md) · [Architecture](./ARCHITECTURE.md)
