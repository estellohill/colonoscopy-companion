import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://colonoscopycompanion.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/what-is-colonoscopy",
    "/colon-cancer-polyps",
    "/screening-guidelines",
    "/prep-instructions",
    "/what-to-expect",
    "/comfort-and-anxiety",
    "/risks-and-safety",
    "/faq",
  ];

  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2026-03-31"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/prep-instructions" ? 0.9 : 0.8,
  }));
}
