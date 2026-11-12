import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"
import { ContentSections } from "@/components/content/content-sections"
import { FaqSection } from "@/components/content/faq-section"
import { BookingCta } from "@/components/content/booking-cta"
import { JsonLd } from "@/components/seo/json-ld"
import type { ContentSection } from "@/lib/content-types"
import {
  articleIsoDate,
  articlePath,
  articleSlug,
  assertUniqueSlugs,
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
  isArticleIndexable,
  readingTime,
  type Article,
} from "@/lib/articles"
import { articleJsonLd, buildMetadata, faqJsonLd, jsonLdGraph } from "@/lib/seo"

// Une page est générée au build pour chaque article de lib/articles-data.ts.
// Toute autre adresse /actualites/... renvoie une 404.
export const dynamicParams = false

export function generateStaticParams() {
  assertUniqueSlugs()
  return getAllArticles().map((article) => ({ slug: articleSlug(article) }))
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

function truncate(text: string, max = 158): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return buildMetadata({
    title: article.title,
    description: truncate(article.excerpt),
    path: articlePath(article),
    noindex: !isArticleIndexable(article),
    article: { publishedTime: articleIsoDate(article) },
  })
}

/** Convertit les blocs spéciaux historiques (CT 2 roues, concours, promo) en sections. */
function legacySections(article: Article): ContentSection[] {
  const sections: ContentSection[] = []
  if (article.content) {
    sections.push(
      { heading: "La réglementation", paragraphs: [article.content.intro] },
      { heading: "Véhicules concernés", list: article.content.vehicules },
      {
        heading: "Calendrier de mise en place",
        list: article.content.calendrier.map((item) => `${item.periode} : **${item.echeance}**`),
      },
      {
        heading: "Fréquence des contrôles",
        paragraphs: [
          article.content.frequence,
          "Toutes les infos pratiques sont sur notre page [contrôle technique moto](/controle-technique-moto).",
        ],
      }
    )
  }
  if (article.concours) {
    sections.push({
      heading: "Le jeu concours",
      paragraphs: [
        article.concours.gain,
        `**Comment participer :** ${article.concours.participation}`,
        `Valeur du lot : ${article.concours.valeur} €. Fin du jeu : ${article.concours.finDate}.`,
      ],
    })
  }
  if (article.promo) {
    sections.push({
      heading: "L'offre",
      paragraphs: [
        `**${article.promo.prix} €** au lieu de ${article.promo.prixOriginal} €.`,
        article.promo.conditions,
        "Retrouvez tous nos prix à jour sur la page [tarifs](/tarifs).",
      ],
    })
  }
  return sections
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const path = articlePath(article)
  const sections = [...legacySections(article), ...(article.sections ?? [])]
  const related = getRelatedArticles(article)

  return (
    <PageLayout
      title={article.title}
      subtitle={article.excerpt}
      badge={article.category}
      backHref="/actualites"
      backLabel="Retour aux actualités"
      breadcrumb={[
        { name: "Actualités", path: "/actualites" },
        { name: article.title, path },
      ]}
    >
      <JsonLd
        data={jsonLdGraph(
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            path,
            datePublished: articleIsoDate(article),
            section: article.category,
          }),
          ...(article.faq?.length ? [faqJsonLd(article.faq)] : [])
        )}
      />

      <article className="max-w-4xl mx-auto space-y-10">
        {/* Méta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={articleIsoDate(article)}>{article.date}</time>
          </span>
          <span className="inline-flex items-center gap-2">
            <Tag className="h-4 w-4" aria-hidden="true" />
            {article.category}
          </span>
          {article.sections?.length ? (
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {readingTime(article)} min de lecture
            </span>
          ) : null}
        </div>

        {sections.length > 0 ? (
          <ContentSections sections={sections} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
          </div>
        )}

        {article.faq?.length ? <FaqSection items={article.faq} /> : null}

        <BookingCta />

        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={articlePath(item)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow flex flex-col"
                >
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium self-start mb-3">
                    {item.category}
                  </span>
                  <span className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Lire l&apos;article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </PageLayout>
  )
}
