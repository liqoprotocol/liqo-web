# Liqo & Stellar — Stellar Community Fund Overview

> Prepared for Stellar Community Fund (SCF) reviewers, ecosystem partners, and anyone evaluating how Liqo uses and benefits Stellar.

**Liqo is Global Payments Infrastructure for Modern Businesses** that lets any business accept fiat, stablecoins, or crypto and settle in the asset they want — through one API — without holding reserves. **Stellar is Liqo's settlement network.**

## Why Liqo Is Built on Stellar

Stellar is purpose-built for exactly the problem Liqo solves: moving value across currencies, cheaply and quickly, with real-world assets.

- **Payments-native performance.** Transactions settle in ~3–5 seconds for a fraction of a cent. Liqo's target flows — tips, wallet top-ups, micro-remittances — are only viable on a rail with negligible fees and fast finality.
- **Stablecoins & the Stellar DEX.** Native USDC and the built-in decentralized exchange give Liqo on-chain liquidity and path payments without deploying custom infrastructure.
- **Anchors & real-world assets.** Stellar's anchor model maps directly onto Liqo's fiat on/off-ramp thesis, especially in emerging markets.
- **Financial inclusion mission.** Stellar's mission — equitable access to the global financial system — is Liqo's mission expressed as infrastructure. Our starting corridors (NGN, GHS, ZAR) target exactly the markets Stellar aims to serve.

## How Stellar Is Integrated Today

Liqo uses Stellar via the official `@stellar/stellar-sdk` across the platform. Concretely:

| Capability | Status | Detail |
|---|---|---|
| **Horizon integration** | ✅ Live | The wallet service connects to Stellar Horizon to submit and monitor transactions. |
| **Settlement of XLM / USDC** | ✅ Live | Converted value is delivered to destination Stellar wallets. |
| **New-account handling** | ✅ Live | Payments to unfunded accounts use a `createAccount` operation so first-time recipients are onboarded. |
| **Stellar DEX routing** | ✅ Live | A Stellar DEX adapter participates in the routing graph as an on-chain liquidity/settlement path. |
| **Key management & signing** | ✅ Live | The wallet service holds and signs with hot-wallet keys for settlement. |
| **Testnet + mainnet configurable** | ✅ | Network and Horizon URL are environment-driven; testnet is the default for development. |
| **Programmable workflows (Soroban)** | 🔜 Planned | Not yet integrated. Future roadmap item — see below. |

Liqo's flagship on-ramp path is: **`Local fiat → USDC → XLM`**, e.g. `NGN → USDC → XLM`. Fiat is collected via provider integrations (Paystack, Flutterwave for African corridors), converted to USDC, and settled on Stellar.

For the technical breakdown, see [docs/STELLAR_INTEGRATION.md](./docs/STELLAR_INTEGRATION.md) and [docs/SETTLEMENT_ENGINE.md](./docs/SETTLEMENT_ENGINE.md).

## Expected Ecosystem Impact

- **On-ramps for underserved corridors.** Liqo brings NGN/GHS/ZAR liquidity onto Stellar, turning local fiat into on-chain USDC/XLM for real users.
- **More developers building on Stellar.** By abstracting settlement behind a simple API and SDK, Liqo lowers the barrier for non-crypto-native teams (creator platforms, wallets, marketplaces) to settle on Stellar without learning the protocol first.
- **Real transaction volume.** Every top-up, tip, payout, and remittance routed through Liqo is Stellar settlement volume with genuine end-user demand behind it.
- **Anchor-friendly.** Liqo's architecture complements Stellar anchors rather than competing with them, orchestrating across providers to deliver value on Stellar.

## Why Liqo Matters for Stellar

Stellar's value grows with real-world payment usage in the markets it was built to serve. Liqo is a distribution channel for exactly that: it makes Stellar the effortless settlement layer for any product that needs to move money, and it concentrates on the hard, high-impact corridors where Stellar's cost and speed advantages matter most.

## What We're Building Next (Milestone-Ready)

We are transparent about where Liqo is today and what grant funding would accelerate:

1. **Mainnet hardening** — production key custody, multi-sig treasury, and operational runbooks for mainnet settlement.
2. **Crypto-to-fiat off-ramp** — closing the loop so value settled on Stellar can return to local fiat.
3. **Deeper Stellar liquidity** — richer path-payment routing and DEX utilization; route splitting for larger transactions.
4. **Programmable payment workflows (Soroban)** — future roadmap items include programmable payment workflows powered by Soroban where they provide clear value over Stellar's existing network capabilities.
5. **Corridor expansion** — additional African and cross-border fiat pairs.
6. **Public demo & dashboard** — an end-to-end, clickable onboarding → convert → settle experience for reviewers and developers.

## Honest Assessment for Reviewers

- **What's real today:** a working, service-oriented platform that settles real fiat conversions on Stellar, with a public SDK, documented APIs, fiat-provider integrations, and monitoring. This is beyond prototype stage.
- **What Stellar capabilities are used today:** Liqo currently leverages Stellar's existing network capabilities for settlement and payment infrastructure (Horizon, DEX, and classic payment operations). Soroban is **not yet integrated**; programmable payment workflows powered by Soroban are a future roadmap item where they provide clear value.
- **Where we are honest about gaps:** the merchant dashboard's authenticated UI and hosted-checkout polish are in progress; mainnet productionization is a funded milestone, not a claim of completion.

## Contact

- **Website:** [liqo.network](https://liqo.network)
- **Technical docs:** [`docs/`](./docs/README.md)
- **Partnerships / grants:** see [PRESS.md](./PRESS.md)

<!-- Founder to add: SCF submission link, demo video URL, and mainnet deployment addresses when available. -->
