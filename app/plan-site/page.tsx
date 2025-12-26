import { PageLayout } from "@/components/layout/page-layout"
import { Home, Car, CreditCard, Star, MapPin, FileText, Shield, Cookie, ScrollText, ChevronRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plan du Site | CTAM - Contrôle Technique",
  description: "Plan du site CTAM - Retrouvez facilement toutes les pages de notre site.",
}

const siteStructure = [
  {
    title: "Pages principales",
    icon: Home,
    color: "blue",
    links: [
      { name: "Accueil", href: "/", description: "Page d'accueil et prise de rendez-vous" },
      { name: "Le Blanc-Mesnil", href: "/le-blanc-mesnil", description: "Centre CTAM Le Blanc-Mesnil" },
      { name: "Ivry-sur-Seine", href: "/ivry-sur-seine", description: "Centre TUV DCTA Ivry-sur-Seine" },
    ]
  },
  {
    title: "Nos services",
    icon: Car,
    color: "green",
    links: [
      { name: "Contrôle technique auto", href: "/#services", description: "Véhicules particuliers et utilitaires" },
      { name: "Contrôle technique moto", href: "/#services", description: "Deux-roues motorisés" },
      { name: "Véhicules hybrides/électriques", href: "/#services", description: "Véhicules à énergie alternative" },
      { name: "Camping-cars", href: "/#services", description: "Véhicules de loisirs" },
    ]
  },
  {
    title: "Informations pratiques",
    icon: CreditCard,
    color: "purple",
    links: [
      { name: "Tarifs & Horaires", href: "/#tarifs", description: "Nos prix et horaires d'ouverture" },
      { name: "Quand passer votre contrôle", href: "/quand-passer-controle", description: "Délais et échéances" },
      { name: "Éviter la contre-visite", href: "/eviter-contre-visite", description: "Conseils et astuces" },
      { name: "Accès & Plan", href: "/acces-plan", description: "Comment nous trouver" },
    ]
  },
  {
    title: "Avis clients",
    icon: Star,
    color: "amber",
    links: [
      { name: "Avis Le Blanc-Mesnil", href: "/#avis", description: "Témoignages de nos clients" },
      { name: "Avis Ivry-sur-Seine", href: "/#avis", description: "Témoignages de nos clients" },
    ]
  },
  {
    title: "Nos centres",
    icon: MapPin,
    color: "red",
    links: [
      { name: "CTAM Le Blanc-Mesnil", href: "/acces-plan", description: "17 rue Corneille, 93150" },
      { name: "TUV DCTA Ivry-sur-Seine", href: "/acces-plan", description: "3-5 bd Hippolyte Marquès, 94200" },
    ]
  },
  {
    title: "Informations légales",
    icon: FileText,
    color: "gray",
    links: [
      { name: "Mentions légales", href: "/mentions-legales", description: "Informations sur l'éditeur" },
      { name: "Politique de confidentialité", href: "/politique-confidentialite", description: "Protection des données" },
      { name: "Conditions générales", href: "/conditions-generales", description: "CGU et CGV" },
      { name: "Gestion des cookies", href: "/cookies", description: "Préférences de cookies" },
    ]
  },
]

export default function PlanDuSite() {
  return (
    <PageLayout
      title="Plan du Site"
      subtitle="Retrouvez facilement toutes les pages de notre site."
      badge="Navigation"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteStructure.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  section.color === "blue" ? "bg-blue-100" :
                  section.color === "green" ? "bg-green-100" :
                  section.color === "purple" ? "bg-purple-100" :
                  section.color === "amber" ? "bg-amber-100" :
                  section.color === "red" ? "bg-red-100" :
                  "bg-gray-100"
                }`}>
                  <section.icon className={`h-6 w-6 ${
                    section.color === "blue" ? "text-blue-600" :
                    section.color === "green" ? "text-green-600" :
                    section.color === "purple" ? "text-purple-600" :
                    section.color === "amber" ? "text-amber-600" :
                    section.color === "red" ? "text-red-600" :
                    "text-gray-600"
                  }`} />
                </div>
                <h2 className="text-lg font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Vous cherchez quelque chose ?
          </h2>
          <p className="text-white/90 mb-6">
            N'hésitez pas à nous contacter si vous ne trouvez pas ce que vous cherchez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#hero-section"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Prendre Rendez-Vous
            </Link>
            <Link
              href="/acces-plan"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
