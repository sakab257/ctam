import { PageLayout } from "@/components/layout/page-layout"
import { Calendar, Clock, AlertCircle, Car, Truck, Ambulance, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quand Passer Votre Contrôle Technique | CTAM",
  description: "Découvrez quand passer votre contrôle technique : premier contrôle, validité, contre-visite et cas particuliers.",
}

const vehicleTypes = [
  {
    icon: Car,
    title: "Véhicules Particuliers & Utilitaires Légers",
    items: [
      {
        label: "Premier contrôle",
        value: "Dans les 6 mois avant le 4ème anniversaire du véhicule",
        highlight: true
      },
      {
        label: "Validité",
        value: "2 ans entre chaque contrôle",
        highlight: false
      },
      {
        label: "Contre-visite",
        value: "Délai de 2 mois moins 1 jour après la visite défavorable",
        highlight: false
      }
    ]
  },
  {
    icon: Truck,
    title: "Véhicules Utilitaires Légers (VUL)",
    items: [
      {
        label: "Visite complémentaire",
        value: "Entre 10 et 12 mois après chaque contrôle réglementaire",
        highlight: true
      },
      {
        label: "Validité",
        value: "2 ans pour le contrôle principal",
        highlight: false
      }
    ]
  },
  {
    icon: Ambulance,
    title: "Véhicules Spécifiques",
    items: [
      {
        label: "Ambulances, taxis, dépanneuses",
        value: "Contrôle annuel dès la première année",
        highlight: true
      },
      {
        label: "Véhicules de collection",
        value: "Contrôle tous les 5 ans",
        highlight: false
      }
    ]
  }
]

const timeline = [
  {
    period: "6 mois avant",
    action: "Vous pouvez passer votre contrôle sans perdre de validité",
    icon: CheckCircle2,
    color: "green"
  },
  {
    period: "Date d'échéance",
    action: "Dernier jour pour passer votre contrôle sans être en infraction",
    icon: AlertCircle,
    color: "amber"
  },
  {
    period: "Après l'échéance",
    action: "Vous êtes en infraction - Amende de 135€",
    icon: AlertCircle,
    color: "red"
  }
]

export default function QuandPasserControle() {
  return (
    <PageLayout
      title="Quand Passer Votre Contrôle Technique ?"
      subtitle="Tout savoir sur les délais et les échéances de votre contrôle technique automobile."
      badge="Réglementation"
    >
      {/* Alert Box */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl shrink-0">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Comment connaître ma date de contrôle ?
              </h2>
              <p className="text-blue-800">
                La date de votre prochain contrôle technique est indiquée sur le procès-verbal du dernier contrôle
                et sur la vignette collée sur votre pare-brise. Vous pouvez passer votre contrôle jusqu'à 6 mois avant
                la date d'échéance sans perdre de validité.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Types */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Selon votre type de véhicule
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicleTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {type.title}
                </h3>
              </div>
              <div className="space-y-4">
                {type.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`p-4 rounded-xl ${
                      item.highlight
                        ? "bg-primary/5 border border-primary/20"
                        : "bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {item.label}
                    </p>
                    <p className={`font-medium ${item.highlight ? "text-primary" : "text-gray-900"}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Les échéances importantes
        </h2>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  item.color === "green" ? "bg-green-50" :
                  item.color === "amber" ? "bg-amber-50" :
                  "bg-red-50"
                }`}
              >
                <div className={`p-2 rounded-lg shrink-0 ${
                  item.color === "green" ? "bg-green-100" :
                  item.color === "amber" ? "bg-amber-100" :
                  "bg-red-100"
                }`}>
                  <item.icon className={`h-5 w-5 ${
                    item.color === "green" ? "text-green-600" :
                    item.color === "amber" ? "text-amber-600" :
                    "text-red-600"
                  }`} />
                </div>
                <div>
                  <p className={`font-bold mb-1 ${
                    item.color === "green" ? "text-green-900" :
                    item.color === "amber" ? "text-amber-900" :
                    "text-red-900"
                  }`}>
                    {item.period}
                  </p>
                  <p className={`${
                    item.color === "green" ? "text-green-800" :
                    item.color === "amber" ? "text-amber-800" :
                    "text-red-800"
                  }`}>
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counter Visit Info */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                En cas de contre-visite
              </h2>
              <p className="text-gray-600 mb-4">
                Si votre véhicule nécessite une contre-visite, vous disposez d'un délai de
                <strong className="text-gray-900"> 2 mois moins 1 jour </strong>
                pour effectuer les réparations et vous présenter à nouveau.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-sm">
                  <strong>Important :</strong> La contre-visite doit être effectuée dans le même centre
                  ou dans un centre du même réseau. Passé ce délai, un nouveau contrôle complet sera nécessaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Votre contrôle approche ?
          </h2>
          <p className="text-white/90 mb-6">
            Prenez rendez-vous dès maintenant et bénéficiez de nos tarifs préférentiels en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#hero-section"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Prendre Rendez-Vous
            </Link>
            <Link
              href="/eviter-contre-visite"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Éviter la Contre-Visite
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
