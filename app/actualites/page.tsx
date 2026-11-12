import { PageLayout } from "@/components/layout/page-layout"
import { buildMetadata } from "@/lib/seo"
import { Newspaper, Calendar, Bike, Clock, CheckCircle2, ArrowRight, Gift } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { articles } from "@/lib/articles-data"
import { articlePath } from "@/lib/articles"

export const metadata: Metadata = buildMetadata({
  title: "Actualités et conseils sur le contrôle technique",
  description:
    "Réglementation, conseils d'entretien, promotions et infos pratiques de nos centres de contrôle technique AUTOSUR du Blanc-Mesnil et d'Ivry-sur-Seine.",
  path: "/actualites",
})

export default function Actualites() {
  return (
    <PageLayout
      path="/actualites"
      title="Actualités"
      subtitle="Restez informé des dernières nouveautés du contrôle technique et de nos centres."
      badge="News"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Article - CT 2 roues */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
          <div className="bg-linear-to-r from-primary to-blue-600 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Bike className="h-5 w-5" />
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                Nouvelle Réglementation
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <Link href={articlePath(articles[0])} className="hover:underline">
                Contrôle Technique 2 Roues
              </Link>
            </h2>
            <p className="text-white/90 mt-2">
              Mise en application : 15 avril 2024
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              {articles[0].content?.intro}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Véhicules concernés */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Bike className="h-5 w-5 text-primary" />
                  Véhicules concernés
                </h3>
                <ul className="space-y-2">
                  {articles[0].content?.vehicules.map((v, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fréquence */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Fréquence des contrôles
                </h3>
                <p className="text-blue-800">
                  {articles[0].content?.frequence}
                </p>
              </div>
            </div>

            {/* Calendrier */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Calendrier de mise en place
              </h3>
              <div className="space-y-3">
                {articles[0].content?.calendrier.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-blue-200 last:border-0 last:pb-0">
                    <span className="text-blue-800 font-medium flex-1">{item.periode}</span>
                    <span className="text-blue-900 font-bold bg-blue-100 px-3 py-1 rounded-lg text-sm">
                      {item.echeance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/#hero-section"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Prendre rendez-vous pour votre 2 roues
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Jeu Concours AUTOSUR */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="h-5 w-5" />
                <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                  Jeu Concours
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {articles[1].title}
              </h2>
              <p className="text-white/90 mb-4">
                {articles[1].concours?.gain}
              </p>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm font-medium">
                  <strong>Comment participer :</strong> {articles[1].concours?.participation}
                </p>
              </div>
            </div>
            <div className="text-center bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-sm font-medium mb-1">Valeur du lot</div>
              <div className="text-4xl font-bold">{articles[1].concours?.valeur}€</div>
              <div className="text-sm mt-2 text-white/80">Week-end pour 2</div>
              <div className="mt-3 pt-3 border-t border-white/20 text-xs">
                {`Jusqu'à fin décembre 2025`}
              </div>
            </div>
          </div>
        </div>

        {/* Promotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Promo Ivry */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              Offre en cours
            </span>
            <h3 className="text-xl font-bold mt-3 mb-2">
              {articles[2].title}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {articles[2].promo?.conditions}
            </p>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">{articles[2].promo?.prix}€</div>
              <div className="text-white/60 line-through">{articles[2].promo?.prixOriginal}€</div>
            </div>
          </div>

          {/* Promo Blanc-Mesnil */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              Offre en cours
            </span>
            <h3 className="text-xl font-bold mt-3 mb-2">
              {articles[3].title}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {articles[3].promo?.conditions}
            </p>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">{articles[3].promo?.prix}€</div>
              <div className="text-white/60 line-through">{articles[3].promo?.prixOriginal}€</div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Autres actualités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.slice(4).reverse().map((article) => (
            <div
              key={article.id}
              className="relative group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {/* Lien étiré : toute la carte est cliquable */}
                <Link href={articlePath(article)} className="after:absolute after:inset-0">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary">
                Lire l&apos;article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          ))}
        </div>

        {/* Newsletter / Contact CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
            <Newspaper className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Pour ne manquer aucune actualité importante concernant le contrôle technique,
            suivez-nous sur les réseaux sociaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/ctam.autosur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Suivez-nous sur Instagram
            </a>
            <a
              href="https://www.facebook.com/cctamleblancmesnil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
            >
              Suivez-nous sur Facebook
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
