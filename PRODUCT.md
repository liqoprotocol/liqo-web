# Product

**Liqo is Global Payments Infrastructure for Modern Businesses.** This document explains what Liqo does, the products that make it up, and the journeys of the two people who use it: the **developer** who integrates Liqo and the **end user** who pays through it.

## What Liqo Does

Liqo lets a platform accept a payment in one currency (fiat or crypto) and deliver value in another asset to a destination wallet — through a single API — without the platform holding reserves, running a treasury, or integrating providers directly.

The canonical operation:

```ts
const quote = await liqo.quote({ from: "NGN", to: "XLM", amount: 50000 });

const tx = await liqo.convert({
  from: "NGN",
  to: "XLM",
  amount: 50000,
  recipient: "G...WALLET",
});
// → { transactionId, status: "processing", estimatedOutput, fee }
```

Behind that call, Liqo generates candidate routes, scores them, executes the best one through external liquidity and payment providers, and settles on Stellar — updating a canonical ledger and emitting webhooks along the way.

## Core Products

| Product | What it is | Who uses it |
|---|---|---|
| **Payments API** | Quote, convert, payout, and transaction status | Developers |
| **Liquidity Routing Engine** | Generates and scores routes by price, fees, slippage, latency, and provider reliability | Internal subsystem |
| **Settlement Engine** | Executes and settles transactions, including Stellar on-chain settlement | Internal subsystem |
| **`@liqo/sdk`** | Typed TypeScript/JavaScript client with webhook verification | Developers |
| **Hosted Checkout** | Drop-in payment pages for fiat on-ramp flows | End users |
| **Merchant Dashboard** | Organizations, projects, API keys, transactions, webhooks, settings | Developers / merchants |
| **Webhooks** | Signed, retried delivery of transaction lifecycle events | Developers |

Deep-dives: [API Overview](./docs/API_OVERVIEW.md) · [Payment Orchestration](./docs/PAYMENT_ORCHESTRATION.md) · [Settlement Engine](./docs/SETTLEMENT_ENGINE.md) · [SDK](./docs/SDK.md) · [Checkout](./docs/CHECKOUT.md) · [Dashboard](./docs/MERCHANT_DASHBOARD.md).

## The Developer Journey

1. **Sign up** and create an organization — a default project and API key are provisioned automatically.
2. **Grab the SDK:** `npm install @liqo/sdk`.
3. **Request a quote** to see estimated output, fees, and the routing path.
4. **Convert** — call `convert()` (or create a hosted checkout session for fiat pay-in).
5. **Receive webhooks** for transaction lifecycle events; verify signatures with the SDK.
6. **Observe** transactions, keys, and webhooks in the dashboard.

Designed so a first successful conversion is achievable in well under an hour.

## The End-User Journey (Fiat On-Ramp)

1. Choose how much to pay and which asset to receive.
2. Enter a destination wallet.
3. See a live quote (estimated output, fee, expiry).
4. Complete payment through a hosted checkout / provider flow.
5. Receive the asset in the destination wallet — with status updates throughout.

The experience feels simple, even though the underlying routing, execution, and settlement are not.

## The Merchant Journey

1. **Organizations & members** — invite teammates with role-based access (owner, admin, developer, viewer).
2. **Projects** — separate environments and keys per product or stage.
3. **API keys** — scoped, rotatable, shown once, stored as HMAC hashes.
4. **Transactions** — inspect status, routes, and settlement.
5. **Webhooks** — register endpoints, send test events, inspect deliveries.
6. **Settings & billing** — profile, preferences, and plan management.

## Supported Assets & Corridors

- **Fiat:** USD, NGN, GHS, GBP, EUR, ZAR *(expanding)*
- **Crypto / settlement:** XLM and USDC on Stellar today; SOL and ETH planned
- **Primary corridors:** African and cross-border flows (e.g. `NGN → USDC → XLM`)

## Future Roadmap

- Crypto-to-fiat off-ramp
- Additional fiat corridors and providers
- Additional settlement assets and chains (SOL, ETH)
- Route splitting across providers for large transactions
- Deeper analytics and treasury tooling
- Expanded Stellar footprint (see [SCF.md](./SCF.md))

Full roadmap and status: [docs/ROADMAP.md](./docs/ROADMAP.md).

---

*See also: [Vision](./VISION.md) · [Architecture](./docs/ARCHITECTURE.md)*
