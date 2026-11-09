import type { MetadataRoute } from "next"
import { absoluteUrl, centers } from "@/lib/site"

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"]

interface SitemapEntry {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

// /cookies est exclu (noindex). Ajouter ici toute nouvelle page indexable.
const entries: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: centers.lbm.path, changeFrequency: "weekly", priority: 0.9 },
  { path: centers.ivry.path, changeFrequency: "weekly", priority: 0.9 },
  { path: "/acces-plan", changeFrequency: "monthly", priority: 0.8 },
  { path: "/quand-passer-controle", changeFrequency: "monthly", priority: 0.8 },
  { path: "/eviter-contre-visite", changeFrequency: "monthly", priority: 0.8 },
  { path: "/actualites", changeFrequency: "weekly", priority: 0.7 },
  { path: "/qui-sommes-nous", changeFrequency: "monthly", priority: 0.6 },
  { path: "/recrutement", changeFrequency: "monthly", priority: 0.5 },
  { path: "/plan-site", changeFrequency: "monthly", priority: 0.4 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politique-confidentialite", changeFrequency: "yearly", priority: 0.2 },
  { path: "/conditions-generales", changeFrequency: "yearly", priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }))
}
