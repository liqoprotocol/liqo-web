# Vision

> **Liqo is Global Payments Infrastructure for Modern Businesses** — the orchestration and routing layer for moving money between fiat, stablecoins, and digital assets.

## Why Liqo Exists

Every product that touches money eventually hits the same wall. The moment a platform wants to let users pay in their local currency and receive value in another — a wallet top-up, a creator tip, a remittance, a marketplace payout, payroll — it discovers that "just move the money" is an enormous engineering and operational undertaking.

To do it themselves, teams must:

- Pre-fund crypto inventory and carry treasury risk
- Integrate and reconcile multiple exchanges and payment processors
- Build routing, execution, and settlement logic in-house
- Handle failures, retries, and compliance across fragmented corridors

None of this is their product. It is undifferentiated financial plumbing that delays launches by months and introduces risk most teams are not equipped to manage.

**Liqo exists to make moving money across currencies and assets as simple as a single API call** — so builders can focus on their product, not on becoming a payments company.

## The Core Promise

Liqo helps products offer cross-currency and cross-asset transactions through a single orchestration layer:

- **Accept** fiat or crypto
- **Route** intelligently through the best available liquidity
- **Settle** reliably on-chain or off-chain
- **Abstract** the complexity away from the platform

A platform integrates Liqo once. After that, users can pay in local fiat, Liqo finds the best route, converts through external liquidity and payment partners, and delivers the requested asset to the destination — without the platform holding reserves.

## The Starting Wedge

Liqo begins where the pain is sharpest and the corridors are hardest:

- **Fiat currencies:** USD, NGN, GHS, GBP, EUR, ZAR
- **First settlement rail:** XLM (Stellar)
- **Next assets:** SOL, ETH

This makes Liqo especially compelling for African and cross-border fintech products, creator platforms, gaming products, wallet apps, and payroll and remittance tools — markets where existing infrastructure is fragmented, expensive, or simply absent.

## What Liqo Becomes Over Time

Liqo does not stop at fiat-to-crypto conversion. The larger opportunity is to become **programmable money-movement infrastructure for platforms**, supporting:

- Fiat-to-crypto and crypto-to-fiat
- Creator payouts and marketplace settlement
- Remittances and payroll
- Treasury movement

The strongest version of Liqo is the system developers trust to move value across local fiat, stablecoins, digital assets, and difficult corridors.

## The Moat

The durable advantage is not merely a list of vendor integrations. It is:

- **Corridor depth** — coverage of fragmented, underserved routes
- **Routing intelligence** — consistently finding the best path
- **Operational trust** — reliable, observable settlement
- **Compliance-aware execution**
- **Developer experience** — infrastructure that is genuinely a pleasure to build on

## The Five-Year Aspiration

The best version of Liqo in five years is a trusted infrastructure company powering wallet top-ups, tips, payouts, remittances, payroll, and treasury movement for platforms across Africa and beyond.

In that future, Liqo is not merely a crypto tool. It is **the operating system for how products move money** between fiat, stablecoins, and digital assets.

## Product Philosophy & Design Principles

1. **Developer Simplicity.** Integration should be possible in minutes, not months. One API, one SDK, sensible defaults.
2. **Reliability First.** Money movement must be dependable. Always have a fallback route; make failure states explicit and recoverable.
3. **Reserve-less by Design.** Platforms should never have to pre-fund inventory or run trading operations to use Liqo.
4. **Liquidity Depth.** Routing must consistently find the best path across providers and corridors.
5. **Non-custodial Posture.** Liqo is routing infrastructure, not a custodial bank.
6. **Observability & Trust.** Every transaction is traceable; the system is monitored and auditable.
7. **Compliance-Aware.** Build for a regulated world from day one.
8. **Open at the Edges.** Public SDK, public docs, and an open developer surface — with a proprietary core. See [OPEN_SOURCE.md](./OPEN_SOURCE.md).

---

*See also: [Product](./PRODUCT.md) · [Stellar / SCF](./SCF.md) · [Roadmap](./docs/ROADMAP.md)*
