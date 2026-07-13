# Frequently Asked Questions

## General

**What is Liqo?**
Liqo is Global Payments Infrastructure for Modern Businesses. It lets any business accept payments in fiat, stablecoins, or crypto and settle in the asset they want — through a single API — without holding reserves or integrating providers directly. See [Introduction](./INTRODUCTION.md).

**How is Liqo different from a payment processor or an exchange?**
Liqo is an **orchestration layer**. It routes across external liquidity and payment providers and settles on-chain, rather than being a single processor or a custodial exchange. It's non-custodial routing infrastructure.

**Who is Liqo for?**
Developers and platforms: wallets, creator platforms, marketplaces, fintechs, and payroll/remittance tools.

## Product

**What currencies and assets are supported?**
Fiat: USD, NGN, GHS, GBP, EUR, ZAR (expanding). Settlement: XLM and USDC on Stellar today; SOL and ETH planned.

**Do I need to hold crypto reserves?**
No. Liqo is reserve-less by design — it routes through external liquidity and settles for you.

**How do I get started?**
Join the [waitlist](https://liqo.network/waitlist). When you have access: create an organization, get a project API key, install `@liqo/sdk`, and call `quote()` then `convert()`. See [API Overview](./API_OVERVIEW.md) and [SDK](./SDK.md).

**How long does a payment take?**
Stellar settlement is typically a few seconds. End-to-end time depends on the fiat provider's pay-in step. See [Payment Flow](./PAYMENT_FLOW.md).

## Technical

**Why Stellar?**
Fast, low-cost settlement, native USDC and DEX, and an anchor network aligned with real-world fiat on/off-ramps. See [Stellar Integration](./STELLAR_INTEGRATION.md) and [SCF.md](../SCF.md).

**Does Liqo use Soroban smart contracts?**
Not yet. Liqo currently leverages Stellar's existing network capabilities for settlement and payment infrastructure (Horizon, DEX, and classic payment operations). Future roadmap items include programmable payment workflows powered by Soroban where they provide clear value. We're transparent about this in [SCF.md](../SCF.md).

**How are webhooks secured?**
Outbound webhooks are signed; verify them with the SDK. Inbound provider callbacks are validated. See [SDK](./SDK.md#webhook-verification) and [Security](./SECURITY.md).

**How are API keys stored?**
As HMAC hashes plus a prefix — never in plaintext. Raw keys are shown once and can be rotated. See [Security](./SECURITY.md).

## Open Source

**Is Liqo open source?**
The website and SDK are public; the core payments platform is proprietary for security reasons. See [OPEN_SOURCE.md](../OPEN_SOURCE.md).

**Can I contribute?**
Yes — to this website and the public docs/SDK. See [CONTRIBUTING.md](../CONTRIBUTING.md).

## Support & Contact

**How do I report a bug or security issue?**
Bugs: open an [issue](https://github.com/liqoprotocol/liqo-landing/issues/new/choose). Security: follow [SECURITY.md](../SECURITY.md) — never a public issue.

**How do I reach the team?**
See [PRESS.md](../PRESS.md) for contact and partnership details.
