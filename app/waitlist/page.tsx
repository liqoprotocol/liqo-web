import type { Metadata } from "next";
import { siteConfig, ogImageUrl } from "@/lib/seo/config";
import WaitlistSection from "@/components/waitlist/WaitlistSection";

const title = "Join the Waitlist";
const description =
  "Be among the first businesses to experience Global Payments Infrastructure for Modern Businesses. Join the Liqo waitlist for early access.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/waitlist" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/waitlist`,
    images: [
      {
        url: ogImageUrl,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: `${siteConfig.name} — Global Payments Infrastructure for Modern Businesses`,
      },
    ],
  },
  twitter: {
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [ogImageUrl],
  },
};

export default function WaitlistPage() {
  return <WaitlistSection />;
}
