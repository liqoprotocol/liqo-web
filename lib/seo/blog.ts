import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { siteConfig, ogImageUrl } from "./config";

/**
 * Blog readiness scaffolding (see AGENTS sprint task 25). No blog exists
 * yet — this list stays empty until posts are added — but the shape is
 * wired into sitemap.ts and ready for a future `app/blog/[slug]/page.tsx`
 * to import `getBlogPostMetadata` for consistent title/OG/Twitter/canonical
 * output per post.
 */
export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
};

export const blogPosts: BlogPostMeta[] = [];

export function getBlogPostMetadata(post: BlogPostMeta): Metadata {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      // Falls back to the site-wide social image. Swap in a per-post image
      // (e.g. a generated opengraph-image.tsx keyed on post title) once
      // that's worth the build complexity — a route that defines its own
      // `openGraph` must always include `images` itself or it loses the
      // one inherited from the root layout.
      images: [
        {
          url: ogImageUrl,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}

export function getBlogSitemapEntries(): MetadataRoute.Sitemap {
  return blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
}
