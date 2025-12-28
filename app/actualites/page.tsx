import { PageLayout } from "@/components/layout/page-layout"
import { Newspaper, Calendar, Bike, Clock, CheckCircle2, ArrowRight, Gift } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Actualités | CTAM - Contrôle Technique",
  description: "Suivez les dernières actualités du contrôle technique : nouvelles réglementations, conseils et informations pratiques.",
}

const articles = [
  // Article featured (index 0) - CT 2 roues
  {
    id: 1,
    date: "15 avril 2024",
    category: "Réglementation",
    title: "Contrôle technique 2 roues : c'est parti !",
    excerpt: "Le contrôle technique pour motos et deux-roues motorisés est désormais obligatoire depuis le 15 avril 2024.",
    featured: true,
    content: {
      intro: "Le décret et l'arrêté sont parus au Journal Officiel le 23 Octobre 2023, avec une mise en application le 15 avril 2024.",
      vehicules: [
        "Motos et scooters (125 cm³ et plus)",
        "Trois-roues motorisés",
        "Quadricycles et quads",
        "Voitures sans permis"
      ],
      calendrier: [
        { periode: "Véhicules immatriculés avant le 01/01/2017", echeance: "Contrôle au plus tard le 31/12/2024" },
        { periode: "Véhicules immatriculés du 01/01/2017 au 31/12/2019", echeance: "Contrôle en 2025" },
        { periode: "Véhicules immatriculés du 01/01/2020 au 31/12/2021", echeance: "Contrôle en 2026" }
      ],
      frequence: "Premier contrôle à 5 ans après mise en circulation, puis tous les 3 ans."
    }
  },
  // Jeu concours (index 1)
  {
    id: 2,
    date: "1er décembre 2025",
    category: "Événement",
    title: "Jeu concours national AUTOSUR 2025",
    excerpt: "Gagnez un week-end de rêve pour 2 personnes d'une valeur de 249€ ! Chaque semaine, un client peut remporter ce lot jusqu'à fin décembre.",
    featured: false,
    concours: {
      gain: "Un week-end de rêve pour 2 personnes (hôtel 4 ou 5*, spa, petit-déjeuner, dîner gourmand) parmi 271 destinations en France et en Europe.",
      valeur: 249,
      participation: "Réservez un contrôle technique sur autosur.fr ou scannez le QR code sur les affiches en centre.",
      finDate: "Fin décembre 2025"
    }
  },
  // Promo Ivry (index 2)
  {
    id: 3,
    date: "Décembre 2025",
    category: "Promotion",
    title: "Offre spéciale web : -5€ sur votre contrôle technique à Ivry-Sur-Seine",
    excerpt: "Profitez de notre remise exclusive pour toute réservation en ligne sur les créneaux disponibles.",
    featured: false,
    promo: {
      prix: 80,
      prixOriginal: 85,
      conditions: "Valable pour véhicules particuliers hors 4x4 et GPL, sur créneaux spécifiques pris en ligne."
    }
  },
  // Promo Blanc-Mesnil (index 3)
  {
    id: 4,
    date: "Décembre 2025",
    category: "Promotion",
    title: "Offre spéciale web : -4€ sur votre contrôle technique au Blanc-Mesnil",
    excerpt: "Profitez de notre remise exclusive pour toute réservation en ligne sur les créneaux disponibles.",
    featured: false,
    promo: {
      prix: 75,
      prixOriginal: 79,
      conditions: "Valable pour véhicules particuliers hors 4x4 et GPL, sur créneaux spécifiques pris en ligne."
    }
  },
  // === Autres actualités (index 4+) - triées du plus récent au plus ancien ===
  {
    id: 5,
    date: "1er janvier 2026",
    category: "Fêtes",
    title: "Bonne année 2026 !",
    excerpt: "L'équipe CTAM AUTOSUR vous présente ses meilleurs voeux pour cette nouvelle année 2026 ! Que cette année vous apporte santé, bonheur et réussite. Nous restons à votre service pour tous vos contrôles techniques.",
    featured: false
  },
  {
    id: 6,
    date: "28 décembre 2025",
    category: "Conseil",
    title: "Nouvelle année, pensez à votre contrôle technique !",
    excerpt: "Commencez l'année du bon pied en vérifiant la date d'échéance de votre contrôle technique. Anticipez et réservez dès maintenant pour bénéficier des meilleurs créneaux et éviter les contre-visites.",
    featured: false
  },
  {
    id: 7,
    date: "25 décembre 2025",
    category: "Fêtes",
    title: "Joyeux Noël à tous !",
    excerpt: "Toute l'équipe CTAM AUTOSUR vous souhaite un très joyeux Noël ! Profitez de ces moments précieux en famille et entre amis. Nos centres seront fermés le 25 décembre et rouvriront dès le 26 décembre pour vous accueillir.",
    featured: false
  },
  {
    id: 8,
    date: "23 décembre 2025",
    category: "Information",
    title: "Très belles fêtes de fin d'année",
    excerpt: "Cher(e)s clients, toute l'équipe CTAM AUTOSUR vous souhaite de merveilleuses fêtes de fin d'année et vous adresse ses meilleurs voeux pour 2026, à vous et à vos proches. Que cette nouvelle année soit remplie de joie, de succès, et de précieux moments partagés avec ceux qui vous sont chers.",
    featured: false
  },
  {
    id: 9,
    date: "15 décembre 2025",
    category: "Information",
    title: "Nouveau centre à Ivry-sur-Seine",
    excerpt: "CTAM s'agrandit avec l'ouverture d'un second centre de contrôle technique sous l'enseigne AUTOSUR à Ivry-sur-Seine.",
    featured: false
  },
]

export default function Actualites() {
  return (
    <PageLayout
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
              Contrôle Technique 2 Roues
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
                Jusqu'à fin décembre 2025
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
          {articles.slice(4).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {article.excerpt}
              </p>
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
