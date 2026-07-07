/**
 * Central SEO/site configuration. All metadata (layout, pages, JSON-LD,
 * sitemap, manifest, OG images) should read from this file so brand facts
 * only need to change in one place.
 */

export const siteConfig = {
  name: "Liqo",
  legalName: "Liqo",
  shortName: "Liqo",
  url: "https://liqo.network",
  tagline: "Move money globally without the technical heavy lifting.",
  description:
    "Liqo is developer-first liquidity routing infrastructure for accepting payments in crypto or fiat from anywhere in the world and settling in your preferred currency through a single API.",
  keywords: [
    "liquidity routing infrastructure",
    "payment orchestration API",
    "crypto payments API",
    "fiat settlement infrastructure",
    "cross-border payments API",
    "global payment routing",
    "developer payments platform",
    "wallet payment infrastructure",
    "marketplace payout API",
    "fintech payment infrastructure",
  ],
  audience: [
    "Developers",
    "Startups",
    "Fintechs",
    "Crypto businesses",
    "Payment companies",
    "Wallet providers",
    "Marketplaces",
  ],
  locale: "en_US",
  themeColor: "#0A0A0A",
  brandColor: "#0FFD41",
  // Populate once real, owned profiles exist. Left empty rather than
  // guessed — a wrong sameAs/handle is worse for SEO than an absent one.
  social: {
    twitter: "",
    linkedin: "",
  },
  ogImage: {
    width: 1200,
    height: 630,
  },
} as const;

export type SiteConfig = typeof siteConfig;
