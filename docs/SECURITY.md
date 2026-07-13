# Security Model

Liqo moves real money, so security is foundational rather than an afterthought. This document describes the platform's security model at a conceptual level.

> To **report** a vulnerability, see the root [SECURITY.md](../SECURITY.md). This page explains how the platform is secured; it intentionally omits private implementation and configuration detail.

## Principles

- **Single public surface.** Only the API gateway is exposed; all other services are internal and mutually authenticated.
- **Least privilege.** API keys and roles are scoped; internal services authenticate one another.
- **Defense in depth.** Multiple layers — transport, authentication, authorization, validation, and monitoring.
- **Non-custodial posture.** Liqo is routing infrastructure, not a custodial bank.

## Authentication

- **API keys** are HMAC-hashed at rest; only a prefix and hash are stored, and the raw key is shown once. Keys are rotatable and revocable.
- **Dashboard sessions** use short-lived HttpOnly access tokens with longer-lived refresh tokens.
- **Passwords** are hashed with bcrypt.
- **Password-reset tokens** are hashed, single-use, and time-limited.

## Authorization

- **Role-based access control** (owner, admin, developer, viewer) governs workspace actions.
- **Scoped keys** limit what a given credential can do.

## Transport & Edge Hardening

- Security headers via Helmet.
- **CORS allow-list** for browser origins; credentialed requests only from approved origins.
- **Request size limits** to mitigate payload-based abuse.
- **Rate limiting** per plan, with stricter limits on sensitive auth endpoints.

## Input Validation

All requests are validated against a shared, contract-first schema layer before any handler logic runs, reducing injection and malformed-input risk.

## Webhooks

- **Outbound** webhooks are **signed**; consumers verify signatures with the SDK.
- **Inbound** provider callbacks are validated before being trusted.
- Delivery is retried; processed events are de-duplicated for idempotency.

## Data & Settlement

- PostgreSQL is the system of record with a single migration owner.
- Wallet keys are managed by an isolated wallet service; production hardening (multi-sig treasury, cold storage, hardware-backed keys) is on the roadmap.
- Slippage thresholds and sanctions/screening are part of the platform's execution controls.

## Monitoring & Auditability

- Health and metrics endpoints (Prometheus), dashboards (Grafana), and error tracking (Sentry).
- Actions are logged for audit.

## Honest Roadmap

We are transparent about what is not yet in place:

- **Email verification** and **multi-factor authentication** are planned, not yet shipped.
- **Automated security scanning in CI** is a recommended near-term addition.
- **Mainnet key custody hardening** is a funded milestone.

## Reporting

Found something? Please follow the responsible-disclosure process in the root [SECURITY.md](../SECURITY.md). Do not open public issues for security reports.
