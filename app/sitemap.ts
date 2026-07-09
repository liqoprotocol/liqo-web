import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";
import { getBlogSitemapEntries } from "@/lib/seo/blog";

/**
 * Only real, live routes belong here. Add a new entry the same day a route
 * ships (e.g. /pricing, /docs) rather than pre-listing pages that 404 —
 * that trades one crawl error for another.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/waitlist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...getBlogSitemapEntries()];
}
