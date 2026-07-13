# Supported Versions

This document describes which versions of the Liqo website and its runtime dependencies are actively supported with updates and security fixes.

## Website (`liqo-landing`)

Only the latest release is actively maintained. Fixes are applied to `main` and released forward.

| Version | Supported |
|---|---|
| `0.1.x` (current) | ✅ |
| `< 0.1.0` | ❌ |

## Runtime Requirements

| Dependency | Supported | Notes |
|---|---|---|
| Node.js | ≥ 20 LTS | Older versions are unsupported |
| pnpm | ≥ 9 | Package manager for this repo |
| Next.js | 16.x | App Router |
| React | 19.x | — |

## Security Fixes

Security fixes are released as soon as practicable against the current supported version. See [SECURITY.md](./SECURITY.md) for how to report a vulnerability.

## Platform & SDK Versioning

The Liqo **platform API** and **`@liqo/sdk`** follow their own versioning and support policies in their respective repositories. The public API is versioned by path (e.g. `/v1`). Breaking changes are announced ahead of time and documented in each package's changelog.
