import type { Metadata } from "next";
import { siteConfig, ogImageUrl } from "@/lib/seo/config";
import WaitlistSection from "@/components/waitlist/WaitlistSection";

const title = "Join the Waitlist";
const description =
  "Be among the first developers and businesses to experience the future of global liquidity infrastructure. Join the Liqo waitlist for early access.";

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
        alt: `${siteConfig.name} — Global Liquidity & Payments Infrastructure`,
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
