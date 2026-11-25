import type { MetadataRoute } from "next";
import { site } from "@/site.config";
import { posts } from "@/content/posts";

// 검색 로봇에게 알려줄 페이지 목록 → /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...posts.map((p) => ({
      url: `${site.url}/posts/${p.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
