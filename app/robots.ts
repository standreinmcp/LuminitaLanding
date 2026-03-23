import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://lumi.design";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/booking/success"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
