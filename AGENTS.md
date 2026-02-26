# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 marketing website** (single service, no backend/database). See `README.md` for standard dev commands (`npm run dev`, `npm run build`).

### Gotchas

- **`npm run lint` is broken**: Next.js 16 removed the `next lint` CLI subcommand. The `package.json` script still references it, so `npm run lint` will fail. To lint, run ESLint directly: `npx eslint src/`. However, the `eslint.config.mjs` also has a pre-existing circular-reference bug with `FlatCompat` + `next/core-web-vitals` on ESLint 9. Lint currently cannot run without fixing the config.
- **Dev server uses Webpack** (not Turbopack): The `dev` script sets `NEXT_DISABLE_TURBOPACK=1`, so `npm run dev` uses the Webpack dev server.
- **No automated tests**: The project has no test framework or test scripts configured.
- **No environment variables required**: `NEXT_PUBLIC_SITE_URL` is optional and defaults to `https://www.hinnovcompany.com`.
