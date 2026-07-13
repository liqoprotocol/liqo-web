import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { siteConfig, ogImageUrl } from "@/lib/seo/config";
import { getVerification } from "@/lib/seo/verification";
import {
  getOrganizationJsonLd,
  getSoftwareApplicationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/seo/json-ld";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Global Payments Infrastructure for Modern Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Global Payments Infrastructure for Modern Businesses`,
    description: siteConfig.description,
    locale: siteConfig.locale,
    // Absolute URL by hand (not a relative path resolved via metadataBase) —
    // social crawlers vary in how reliably they resolve relative og:image
    // URLs, so this removes that variable entirely.
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
    card: "summary_large_image",
    title: `${siteConfig.name} — Global Payments Infrastructure for Modern Businesses`,
    description: siteConfig.description,
    images: [ogImageUrl],
    ...(siteConfig.social.twitter ? { site: siteConfig.social.twitter, creator: siteConfig.social.twitter } : {}),
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  icons: {
    // Declared explicitly: setting `icons` at all here stops Next from
    // auto-merging the icon.svg / apple-icon.png file-convention output,
    // so those routes are referenced by hand alongside the mask icon.
    // Static image-based icon files are served at their literal filename
    // in this Next version (verified: /icon.svg, /apple-icon.png), not a
    // bare "/icon" path — that only applied to the old code-generated routes.
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: siteConfig.brandColor,
      },
    ],
  },
  verification: getVerification(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    getOrganizationJsonLd(),
    getWebsiteJsonLd(),
    getSoftwareApplicationJsonLd(),
  ];

  return (
    <html
      lang="en"
      className={`h-full antialiased ${outfit.variable} font-sans`}
    >
      <body className="min-h-screen flex flex-col ">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}