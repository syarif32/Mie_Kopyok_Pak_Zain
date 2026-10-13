import type { MetadataRoute } from "next";
import { absoluteUrl, seoPages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return Object.keys(seoPages).map((path) => ({ url: absoluteUrl(path)! }));
}
