# Contributing to Liqo

First off — thank you for taking the time to contribute. Liqo is building open **global payments infrastructure**, and we welcome contributions to this website and its documentation.

> **Scope of this repository:** `liqo-landing` is the public marketing site and documentation for Liqo. Contributions here relate to the website, its content, and the public docs. The core payments platform is developed separately — see [OPEN_SOURCE.md](./OPEN_SOURCE.md) for what is open vs. proprietary.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Commit Conventions](#commit-conventions)
- [Pull Requests](#pull-requests)
- [Style & Quality](#style--quality)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Security Issues](#security-issues)

## Code of Conduct

This project is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold it.

## Ways to Contribute

- 📝 Improve documentation (fix typos, clarify explanations, add examples)
- 🎨 Improve website UI, accessibility, or performance
- 🐛 Report bugs
- 💡 Suggest features or content
- 🌍 Help with SEO, i18n, or copywriting

## Development Setup

**Requirements:** Node.js ≥ 20, pnpm ≥ 9.

```bash
git clone https://github.com/liqoprotocol/liqo-landing.git
cd liqo-landing
pnpm install
pnpm dev            # http://localhost:3000
```

Before opening a PR:

```bash
pnpm lint           # ESLint
pnpm build          # ensure a clean production build
```

## Project Structure

```
app/          Next.js App Router (pages, waitlist API, SEO routes)
components/   UI, sections, waitlist components
hooks/        React hooks
lib/          seo/, data/, waitlist/, api/, utils
public/       brand assets, images
docs/         public documentation
```

## Making Changes

1. **Fork** the repository and create a branch from `main`:
   ```bash
   git checkout -b feat/short-description
   ```
2. Make your changes in small, focused commits.
3. Keep documentation and code in sync — if you change behavior, update the relevant doc.
4. Run `pnpm lint` and `pnpm build` locally.

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add pricing section to landing page
fix: correct broken link in ARCHITECTURE.md
docs: clarify Stellar settlement flow
chore: bump dependencies
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

## Pull Requests

- Fill out the [pull request template](./.github/PULL_REQUEST_TEMPLATE.md).
- Link the issue your PR addresses (e.g. `Closes #123`).
- Keep PRs focused; smaller PRs are reviewed faster.
- Ensure CI (lint/build) passes.
- Be responsive to review feedback.

By submitting a contribution, you agree that it will be licensed under the repository's [MIT License](./LICENSE).

## Style & Quality

- **Language:** TypeScript, React 19, Next.js App Router.
- **Styling:** Tailwind CSS v4, following the tokens in [BRAND.md](./BRAND.md).
- **Formatting/Linting:** ESLint (`pnpm lint`). Match the existing code style.
- **Accessibility:** aim for WCAG 2.1 AA — semantic HTML, alt text, focus states, sufficient contrast.
- **Docs:** Markdown with descriptive headings, working relative links, and code blocks with language hints.

## Reporting Bugs

Open a [Bug Report](./.github/ISSUE_TEMPLATE/bug_report.yml) with reproduction steps, expected vs. actual behavior, and environment details.

## Requesting Features

Open a [Feature Request](./.github/ISSUE_TEMPLATE/feature_request.yml) describing the problem, your proposed solution, and alternatives considered.

## Security Issues

**Never** report security vulnerabilities via public issues. Follow the process in [SECURITY.md](./SECURITY.md).

---

Thank you for helping make Liqo better. 💚
