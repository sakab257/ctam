import { articles, type Article } from "@/lib/articles-data"

export type { Article }

/** "Contrôle technique : c'est parti !" -> "controle-technique-c-est-parti" */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function articleSlug(article: Article): string {
  return article.slug ?? slugify(article.title)
}

export function articlePath(article: Article): string {
  return `/actualites/${articleSlug(article)}`
}

const MONTHS: Record<string, number> = {
  janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7,
  aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12,
}

/** "10 avril 2026" / "1er mai 2026" / "Décembre 2025" -> "2026-04-10" (ou undefined) */
export function articleIsoDate(article: Article): string | undefined {
  const normalized = article.date
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace("1er", "1")
    .trim()
  const match = normalized.match(/^(?:(\d{1,2})\s+)?([a-z]+)\s+(\d{4})$/)
  if (!match) return undefined
  const [, day = "1", monthName, year] = match
  const month = MONTHS[monthName]
  if (!month) return undefined
  return `${year}-${String(month).padStart(2, "0")}-${day.padStart(2, "0")}`
}

/**
 * Un article est indexé par Google seulement s'il a un vrai contenu
 * (`sections` ou bloc `content`). Sinon : page noindex, hors sitemap.
 */
export function isArticleIndexable(article: Article): boolean {
  return Boolean(article.sections?.length || article.content)
}

export function getAllArticles(): Article[] {
  return articles
}

export function getIndexableArticles(): Article[] {
  return articles.filter(isArticleIndexable)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => articleSlug(article) === slug)
}

/** Temps de lecture estimé (minutes) */
export function readingTime(article: Article): number {
  const text = [
    article.excerpt,
    ...(article.sections ?? []).flatMap((s) => [
      s.heading,
      ...(s.paragraphs ?? []),
      ...(s.list ?? []),
      ...(s.after ?? []),
    ]),
    ...(article.faq ?? []).flatMap((f) => [f.question, f.answer]),
  ].join(" ")
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}

/** Articles à suggérer en fin d'article : même catégorie d'abord, puis les plus récents. */
export function getRelatedArticles(current: Article, count = 3): Article[] {
  const candidates = getIndexableArticles()
    .filter((article) => article.id !== current.id)
    .reverse() // les plus récents d'abord
  const sameCategory = candidates.filter((a) => a.category === current.category)
  const others = candidates.filter((a) => a.category !== current.category)
  return [...sameCategory, ...others].slice(0, count)
}

/** Vérifie que deux articles n'ont pas la même adresse (appelé au build). */
export function assertUniqueSlugs(): void {
  const seen = new Map<string, number>()
  for (const article of articles) {
    const slug = articleSlug(article)
    const other = seen.get(slug)
    if (other !== undefined) {
      throw new Error(
        `Articles ${other} et ${article.id} : même adresse "/actualites/${slug}". Ajoutez un champ "slug" différent.`
      )
    }
    seen.set(slug, article.id)
  }
}
