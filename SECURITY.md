# Security Policy

Liqo is global payments infrastructure. We take the security of our software, our website, and — above all — the funds and data that flow through the Liqo platform extremely seriously.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, report them privately via **GitHub Security Advisories** — use the **"Report a vulnerability"** button under the repository's **Security** tab. This is the preferred and supported channel.

> A dedicated security contact email will be published here once it is available.

When reporting, please include as much of the following as you can:

- A description of the vulnerability and its potential impact
- Steps to reproduce (proof-of-concept, affected URL/endpoint, or code path)
- Affected component or repository (website, SDK, API, checkout, dashboard)
- Any suggested remediation

## What to Expect

| Stage | Target |
|---|---|
| Acknowledgement of your report | Within **3 business days** |
| Initial assessment & severity triage | Within **7 business days** |
| Status updates | At least every **10 business days** until resolved |
| Coordinated disclosure | After a fix is released, by mutual agreement |

We support **coordinated disclosure**. We will credit reporters who wish to be acknowledged once a fix has shipped.

## Scope

This policy covers all Liqo-owned repositories and services, including:

- The Liqo website (`liqo.network`) and this repository
- The Liqo API and platform
- `@liqo/sdk`
- Liqo Checkout and the Merchant Dashboard

**Out of scope:** third-party services Liqo integrates with (report those to the respective vendor), volumetric denial-of-service, and social-engineering attacks.

## Safe Harbor

We consider security research conducted in good faith and in accordance with this policy to be authorized. We will not pursue or support legal action against researchers who:

- Make a good-faith effort to avoid privacy violations, data destruction, and service disruption
- Only interact with accounts they own or have explicit permission to access
- Give us reasonable time to remediate before any public disclosure

## Supported Versions

See [SUPPORTED_VERSIONS.md](./SUPPORTED_VERSIONS.md).

Thank you for helping keep Liqo and its users safe.
