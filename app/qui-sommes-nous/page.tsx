import { PageLayout } from "@/components/layout/page-layout"
import { Users, Shield, Clock, Car, Zap, Award, CheckCircle2, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { lbmInfo, ivryInfo } from "@/lib/tarifs-data"

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | CTAM - Contrôle Technique",
  description: "Découvrez CTAM, votre centre de contrôle technique automobile et moto au Blanc-Mesnil et Ivry-sur-Seine depuis plus de 30 ans.",
}

const values = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "Votre sécurité est notre priorité absolue. Nous effectuons des contrôles rigoureux selon les normes en vigueur."
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Une équipe à votre écoute, disponible pour vous conseiller et répondre à toutes vos questions."
  },
  {
    icon: Clock,
    title: "Rapidité",
    description: "Un contrôle technique réalisé en moins de 45 minutes, sans compromis sur la qualité."
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Plus de 30 ans d'expérience et des contrôleurs certifiés pour un service de qualité."
  }
]

const services = [
  "Contrôle technique périodique",
  "Contre-visite",
  "Contrôle complémentaire pollution",
  "Véhicules 4x4 et grands utilitaires",
  "Véhicules électriques et hybrides",
  "Véhicules GPL/GNV",
  "Camping-cars et véhicules hors gabarit",
  "Véhicules de collection",
  "Contrôle technique moto (depuis avril 2024)"
]

const centers = [
  {
    name: "CTAM AUTOSUR Le Blanc-Mesnil",
    info: lbmInfo,
    agrements: { auto: "S093S290", moto: "L093S330" }
  },
  {
    name: "CTAM AUTOSUR Ivry-sur-Seine",
    info: ivryInfo,
    agrements: { auto: "S094S248", moto: "L094S218" }
  }
]

export default function QuiSommesNous() {
  return (
    <PageLayout
      title="Qui Sommes-Nous ?"
      subtitle="Notre préoccupation, votre sécurité. Depuis plus de 30 ans, nous vous accompagnons pour la sécurité de votre véhicule."
      badge="Notre Histoire"
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bienvenue chez CTAM
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'équipe du centre <strong>AUTOSUR CTAM</strong> est disponible depuis plus de 30 ans
                pour vous offrir des conseils en sécurité et effectuer un contrôle technique automobile
                et moto de qualité, tout en respectant l'environnement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Avec deux centres de contrôle technique en Île-de-France <span className="font-bold">(AUTOSUR CTAM Le Blanc-Mesnil et AUTOSUR CTAM Ivry-sur-Seine)</span>, nous sommes
                à votre service pour tous vos besoins en contrôle technique pour les véhicules particuliers jusqu'au
                contrôle technique pour les camping-car, sans oublier le contrôle technqiue pour les deux-roues évidemment.
              </p>
            </div>
            <div className="shrink-0">
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600 font-medium">années d'expérience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Nos Prestations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centers */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Nos Centres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {centers.map((center, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {center.name}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-gray-600">{center.info.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a
                      href={`tel:${center.info.phone.replace(/\s/g, '')}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {center.info.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-gray-600">
                      {center.info.schedule.days} : {center.info.schedule.hours}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Agréments :</p>
                  <div className="flex gap-4">
                    <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded-lg">
                      Auto: {center.agrements.auto}
                    </span>
                    <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded-lg">
                      Moto: {center.agrements.moto}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipments */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl shrink-0">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Équipements modernes
              </h2>
              <p className="text-blue-800">
                Nos centres sont équipés des dernières technologies pour assurer un contrôle
                technique précis et fiable. Deux parkings privés sont mis à votre disposition
                pour récupérer votre véhicule à tout moment de la journée.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à nous faire confiance ?
          </h2>
          <p className="text-white/90 mb-6">
            Prenez rendez-vous en ligne et bénéficiez de nos tarifs préférentiels.
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
              Nous Trouver
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
