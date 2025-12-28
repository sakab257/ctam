import { PageLayout } from "@/components/layout/page-layout"
import { Lightbulb, AlertTriangle, CheckCircle2, Car, Eye, Disc, CreditCard, Users, Wrench, Volume2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Éviter la Contre-Visite | CTAM - Contrôle Technique",
  description: "Conseils et astuces pour préparer votre véhicule et éviter la contre-visite lors de votre contrôle technique.",
}

const checkPoints = [
  {
    icon: Lightbulb,
    title: "L'éclairage et la signalisation",
    description: "Vérifiez tous vos feux : croisement, route, position, clignotants, détresse, stop et plaque arrière. Changez les ampoules grillées et réparez les phares cassés. N'oubliez pas de tester votre klaxon.",
    tips: [
      "Testez tous vos feux avant le contrôle",
      "Vérifiez que les clignotants fonctionnent des deux côtés",
      "Assurez-vous que le klaxon est audible"
    ]
  },
  {
    icon: Disc,
    title: "Le freinage",
    description: "Remplacez les plaquettes et disques usés avant le contrôle. Testez votre freinage pour détecter tout déportement. Vérifiez le niveau du liquide de frein.",
    tips: [
      "Faites vérifier l'usure des plaquettes",
      "Contrôlez le niveau du liquide de frein",
      "Testez le frein à main"
    ]
  },
  {
    icon: CreditCard,
    title: "L'immatriculation",
    description: "Les plaques avant et arrière doivent être bien fixées et en bon état. Seules les plaques réglementaires sont acceptées (format SIV ou FNI).",
    tips: [
      "Vérifiez la lisibilité des plaques",
      "Assurez-vous qu'elles sont bien fixées",
      "Remplacez les plaques endommagées"
    ]
  },
  {
    icon: Eye,
    title: "La visibilité",
    description: "Vérifiez votre pare-brise : aucune fissure dans le champ de vision du conducteur. Rétroviseurs intérieur et extérieurs en bon état. Essuie-glaces fonctionnels. Les vitres teintées doivent laisser passer au moins 70% de la lumière visible.",
    tips: [
      "Réparez les impacts sur le pare-brise",
      "Remplacez les balais d'essuie-glaces usés",
      "Vérifiez les rétroviseurs"
    ]
  },
  {
    icon: Car,
    title: "Les pneumatiques",
    description: "Vérifiez l'absence de déformations et une bande de roulement d'au moins 1,6mm. Les pneus d'un même essieu doivent avoir la même structure. Contrôlez régulièrement la pression.",
    tips: [
      "Vérifiez l'usure de la bande de roulement",
      "Contrôlez la pression des pneus",
      "Pas de pneus de structures différentes sur un même essieu"
    ]
  },
  {
    icon: Users,
    title: "L'habitacle",
    description: "Toutes les ceintures de sécurité doivent être fonctionnelles. Les sièges doivent être bien fixés. Pensez à enlever le siège bébé avant le contrôle.",
    tips: [
      "Testez toutes les ceintures",
      "Vérifiez la fixation des sièges",
      "Retirez les sièges enfants"
    ]
  },
  {
    icon: Wrench,
    title: "Structure et carrosserie",
    description: "Portes, capot et coffre doivent être fonctionnels. Le capot moteur doit pouvoir s'ouvrir. Aucune partie saillante dangereuse.",
    tips: [
      "Vérifiez l'ouverture de toutes les portes",
      "Assurez-vous que le capot s'ouvre correctement",
      "Pas de parties pointues ou saillantes"
    ]
  },
  {
    icon: Volume2,
    title: "Moteur et échappement",
    description: "Le pot d'échappement doit être étanche et bien fixé. Vérifiez régulièrement le niveau d'huile. La batterie doit être bien fixée.",
    tips: [
      "Vérifiez l'étanchéité de l'échappement",
      "Contrôlez le niveau d'huile",
      "Assurez-vous que la batterie est bien fixée"
    ]
  }
]

export default function EviterContreVisite() {
  return (
    <PageLayout
      title="Éviter la Contre-Visite"
      subtitle="Conformément au code de la route, le propriétaire d'un véhicule a l'obligation de maintenir son véhicule en bon état de marche et en état satisfaisant d'entretien."
      badge="Conseils Pratiques"
    >
      {/* Introduction */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl shrink-0">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Pourquoi préparer son véhicule ?
              </h2>
              <p className="text-blue-800">
                Une bonne préparation vous permet d'éviter une contre-visite coûteuse en temps et en argent.
                Voici les points essentiels à vérifier avant de vous présenter au contrôle technique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Check Points Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {checkPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {point.description}
              </p>
              <div className="space-y-2">
                {point.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Prêt pour votre contrôle technique ?
          </h2>
          <p className="text-white/90 mb-6">
            Prenez rendez-vous en ligne et bénéficiez de nos tarifs préférentiels.
          </p>
          <a
            href="/#hero-section"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Prendre Rendez-Vous
          </a>
        </div>
      </div>
    </PageLayout>
  )
}
