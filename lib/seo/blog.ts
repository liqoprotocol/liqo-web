import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { siteConfig } from "./config";

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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
