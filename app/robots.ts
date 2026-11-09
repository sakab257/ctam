import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Ne pas bloquer /_next/ : Google en a besoin pour charger CSS, JS et images (next/image)
      disallow: ["/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
