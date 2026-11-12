import type { MetadataRoute } from "next"
import { absoluteUrl, centers } from "@/lib/site"
import { articleIsoDate, articlePath, getIndexableArticles } from "@/lib/articles"
import { vehiclePages } from "@/lib/vehicules-data"

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"]

interface SitemapEntry {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

// Pages fixes. /cookies est exclu (noindex). Ajouter ici toute nouvelle page indexable.
// Les pages véhicules et les articles (avec contenu) sont ajoutés automatiquement.
const entries: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: centers.lbm.path, changeFrequency: "weekly", priority: 0.9 },
  { path: centers.ivry.path, changeFrequency: "weekly", priority: 0.9 },
  { path: "/tarifs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contre-visite", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
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
  const now = new Date()

  const pages = entries.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const vehicles = vehiclePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const articles = getIndexableArticles().map((article) => {
    const iso = articleIsoDate(article)
    return {
      url: absoluteUrl(articlePath(article)),
      lastModified: iso ? new Date(iso) : now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }
  })

  return [...pages, ...vehicles, ...articles]
}
