import type { Metadata } from "next";

/**
 * Search engine verification is read from env vars so no placeholder/fake
 * codes ever ship in source. Set these in Vercel/`.env.local` once each
 * property is registered:
 *   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION  (Google Search Console)
 *   NEXT_PUBLIC_BING_SITE_VERIFICATION    (Bing Webmaster Tools)
 *   NEXT_PUBLIC_YANDEX_SITE_VERIFICATION  (Yandex Webmaster)
 */
export function getVerification(): Metadata["verification"] | undefined {
  const verification: NonNullable<Metadata["verification"]> = {};

  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION) {
    verification.yandex = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;
  }
  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
    verification.other = {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    };
  }

  return Object.keys(verification).length > 0 ? verification : undefined;
}
