# Roadmap

Liqo is building **Global Payments Infrastructure for Modern Businesses** in the open. This roadmap reflects current direction; priorities evolve with user and ecosystem feedback.

> Legend: ✅ Shipped · 🚧 In progress · 🔜 Planned · 🔭 Exploring

## Platform

| Item | Status |
|---|---|
| Core payments platform (quote → convert → settle) | ✅ |
| Asynchronous execution & transaction state machine | ✅ |
| Canonical ledger with single migration owner | ✅ |
| Liquidity routing engine (path generation + scoring) | ✅ |
| Contract-first API (schemas + OpenAPI) | ✅ |
| Observability (health, metrics, error tracking) | ✅ |
| Route splitting across providers for large transactions | 🔜 |
| Expanded analytics & treasury tooling | 🔜 |

## Settlement & Stellar

| Item | Status |
|---|---|
| Stellar Horizon settlement (XLM/USDC) | ✅ |
| New-account onboarding (`createAccount`) | ✅ |
| Stellar DEX routing adapter | ✅ |
| Mainnet hardening (key custody, multi-sig treasury) | 🔜 |
| Crypto-to-fiat off-ramp | 🔜 |
| Additional assets/chains (SOL, ETH) | 🔜 |
| Programmable payment workflows powered by Soroban (where they provide clear value) | 🔭 |

See [SCF.md](../SCF.md) and [Stellar Integration](./STELLAR_INTEGRATION.md).

## Providers & Corridors

| Item | Status |
|---|---|
| Paystack integration (African corridors) | ✅ |
| Flutterwave integration | ✅ |
| Additional fiat providers | 🚧 |
| More corridors (KES, INR, BRL, …) | 🔜 |

## Developer Experience

| Item | Status |
|---|---|
| `@liqo/sdk` with webhook verification | ✅ |
| Public API documentation (OpenAPI / Swagger) | ✅ |
| Quickstarts & examples | 🚧 |
| Interactive docs portal | 🔜 |

## Surfaces

| Item | Status |
|---|---|
| Marketing site + waitlist | ✅ |
| Waitlist persistence (DB/ESP) | 🔜 |
| Merchant dashboard — authenticated app | 🚧 |
| Hosted checkout — branding & polish | 🚧 |

## Company / Open Source

| Item | Status |
|---|---|
| Public docs & repository health | ✅ (this effort) |
| CI for lint/build on PRs | 🔜 |
| Public demo (onboarding → convert → settle) | 🔜 |

---

*Have a request? Open a [feature request](https://github.com/liqoprotocol/liqo-landing/issues/new/choose).*
