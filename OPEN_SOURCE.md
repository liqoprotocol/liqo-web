# Open Source at Liqo

Liqo believes payments infrastructure earns trust by being **transparent at the edges** — the surfaces developers actually integrate with — while keeping the sensitive core proprietary. This document explains what is open, what is not, and how to contribute.

## What "Open Source" Means Here

We publish and welcome contributions to the parts of Liqo that developers read, learn from, and build against:

- **This website** (`liqo-landing`) and all public documentation
- **The `@liqo/sdk`** TypeScript/JavaScript client
- **Public API documentation** and integration examples

These are MIT-licensed and open to community contribution.

## What Is Open

| Component | Repository | License | Status |
|---|---|---|---|
| Marketing website + docs | `liqo-landing` *(this repo)* | MIT | ✅ Open |
| SDK (`@liqo/sdk`) | `liqo-sdk` | See repo | ✅ Public |
| Public API reference | published docs | — | ✅ Public |

## What Remains Proprietary

The **core payments platform** is proprietary and closed-source. This is a deliberate security and trust decision, not an accident of tooling. It includes:

- The API gateway, routing engine, execution engine, wallet service, ledger, price oracle, and vendor connectors
- Settlement and key-management logic
- Provider integrations and credentials
- Fraud, compliance, and risk logic
- Infrastructure, deployment, and secrets configuration

**Why keep the core closed?** Liqo moves real money. Publishing settlement internals, routing heuristics, wallet/key handling, and provider integration details would materially increase risk to users' funds and to the integrity of the network. Keeping the core proprietary is how we protect the people who rely on Liqo.

## Contribution Philosophy

- **Open where it helps developers, closed where it protects users.**
- **Docs are a first-class product.** Improvements to clarity, accuracy, and examples are among the most valuable contributions.
- **Small, focused changes** are easier to review and ship.
- **Security before features.** Never include secrets, credentials, or private infrastructure detail in a public contribution — see [SECURITY.md](./SECURITY.md).

## How to Contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, standards, and the pull-request process, and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for community expectations.

## Licensing

- This repository: [MIT License](./LICENSE).
- Other public repositories carry their own license files — check each repository.
- The proprietary platform is **not** licensed for redistribution.

## A Note on Documentation of Proprietary Systems

The documentation in this repository describes how the Liqo platform works at an **architectural and conceptual level** so developers can integrate confidently. It intentionally does **not** include the platform's private implementation details, credentials, internal endpoints, or deployment secrets. If you find anything in these docs that leaks sensitive internal detail, please report it via [SECURITY.md](./SECURITY.md).
