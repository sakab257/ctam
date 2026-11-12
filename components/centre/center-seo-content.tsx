import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Car,
  ClipboardCheck,
  Clock,
  Fuel,
  Home,
  MapPin,
  Navigation,
  Phone,
  Star,
  Truck,
  Zap,
} from "lucide-react"
import { TarifsTable } from "@/components/section/tarifs/tarifs-table"
import { PromoAlert } from "@/components/section/tarifs/tarifs-header"
import { FaqSection } from "@/components/content/faq-section"
import { RichText } from "@/components/content/rich-text"
import { centerContent, getCenterFaq, getCenterTarifs } from "@/lib/centres-content"
import { centers, telHref, type CenterId } from "@/lib/site"
import { statsIvry, statsLBM } from "@/lib/avis-data"
import { vehiclePages } from "@/lib/vehicules-data"

const cardClass = "bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"

const vehicleIcons = {
  utilitaire: Truck,
  "electrique-hybride": Zap,
  gpl: Fuel,
  "camping-car": Home,
  moto: Bike,
  "voiture-sans-permis": Car,
} as const

/**
 * Contenu SEO affiché SOUS le module de réservation des pages centres.
 * Server Component : tout le texte est présent dans le HTML (indexable).
 */
export function CenterSeoContent({ centerId }: { centerId: CenterId }) {
  const center = centers[centerId]
  const content = centerContent[centerId]
  const otherCenter = centerId === "lbm" ? centers.ivry : centers.lbm
  const stats = centerId === "lbm" ? statsLBM : statsIvry

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
      {/* Introduction */}
      <section className={cardClass}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Votre contrôle technique {center.inCity}
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {content.intro.map((paragraph, index) => (
            <p key={index}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Tarifs du contrôle technique {center.inCity}
        </h2>
        <PromoAlert promoNote={center.promoNote} />
        <TarifsTable tarifs={getCenterTarifs(centerId)} />
        <p className="text-center -mt-6">
          <Link href="/tarifs" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
            Comparer les tarifs de nos deux centres
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </section>

      {/* Horaires, accès, parking */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Horaires, accès et parking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              Horaires d&apos;ouverture
            </h3>
            <p className="text-gray-600">{center.schedule.days}</p>
            <p className="text-2xl font-bold text-primary">{center.schedule.hours}</p>
            <p className="text-sm text-gray-500 mt-2">Avec ou sans rendez-vous</p>
          </div>
          <div className={cardClass}>
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              Adresse
            </h3>
            <address className="not-italic text-gray-600 mb-3">{center.addressLine}</address>
            <a
              href={center.maps.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Itinéraire Google Maps
            </a>
          </div>
          <div className={cardClass}>
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              Téléphone
            </h3>
            <a href={telHref(center.phone)} className="text-2xl font-bold text-primary hover:underline">
              {center.phone}
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Agréments : auto {center.agrements.auto} · moto {center.agrements.moto}
            </p>
          </div>
        </div>
        <div className={`${cardClass} mt-6`}>
          <h3 className="font-bold text-gray-900 mb-3">Venir au centre</h3>
          <ul className="space-y-2 text-gray-600">
            {content.access.map((item, index) => (
              <li key={index}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/acces-plan" className="text-primary font-semibold hover:underline">
              Voir le plan d&apos;accès détaillé
            </Link>
          </p>
        </div>
      </section>

      {/* Véhicules */}
      <section className={cardClass}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Tous les véhicules contrôlés {center.inCity}
        </h2>
        <p className="text-gray-600 mb-6">
          Voitures particulières essence et diesel, mais aussi :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehiclePages.map((vehicle) => {
            const Icon = vehicleIcons[vehicle.id]
            return (
              <Link
                key={vehicle.id}
                href={vehicle.path}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all"
              >
                <span className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="font-semibold text-gray-900">{vehicle.shortTitle}</span>
              </Link>
            )
          })}
          <Link
            href="/contre-visite"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 transition-all"
          >
            <span className="p-2 bg-blue-100 rounded-lg">
              <ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            <span className="font-semibold text-gray-900">Contre-visite</span>
          </Link>
        </div>
      </section>

      {/* Zone desservie */}
      <section className={cardClass}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Un centre de contrôle technique proche de chez vous
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">{content.areaIntro}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {center.areaServed.cities.map((city) => (
            <li key={city} className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {city}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">{content.areaOutro}</p>
      </section>

      {/* Avis */}
      <section className={`${cardClass} text-center`}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">L&apos;avis de nos clients</h2>
        <p className="flex items-center justify-center gap-2 text-gray-600 mb-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
          <span>
            <strong className="text-2xl text-gray-900">{stats.noteMoyenne.toLocaleString("fr-FR")}/5</strong>{" "}
            sur {stats.totalAvis} avis Google
          </span>
        </p>
        <p className="text-gray-600 mb-6">
          Merci à nos clients pour leur confiance. Vous êtes venu chez nous ? Partagez votre expérience.
        </p>
        <a
          href={stats.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          Laisser un avis Google
        </a>
      </section>

      {/* FAQ locale */}
      <FaqSection items={getCenterFaq(centerId)} title={`Questions fréquentes sur le centre ${center.ofCity}`} />

      {/* Autre centre */}
      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
        <BadgeCheck className="h-8 w-8 text-blue-600 shrink-0" aria-hidden="true" />
        <p className="text-blue-900 flex-1">
          {content.otherCenterText}{" "}
          <Link href={otherCenter.path} className="font-semibold underline hover:no-underline">
            contrôle technique {otherCenter.inCity}
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
