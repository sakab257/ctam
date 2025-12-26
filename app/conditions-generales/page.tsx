import { PageLayout } from "@/components/layout/page-layout"
import { FileText, Calendar, CreditCard, AlertTriangle, CheckCircle2, XCircle, Scale } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Générales | CTAM - Contrôle Technique",
  description: "Conditions générales d'utilisation et de vente du site CTAM - Centre de Contrôle Technique Automobile.",
}

export default function ConditionsGenerales() {
  return (
    <PageLayout
      title="Conditions Générales"
      subtitle="Conditions générales d'utilisation et de vente applicables aux services CTAM."
      badge="CGU/CGV"
    >
      <div className="max-w-4xl mx-auto">
        {/* Préambule */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 1 - Préambule</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Les présentes conditions générales régissent l'utilisation du site internet www.cctam.fr
              et les prestations de contrôle technique proposées par la société SAS CT LBM.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En utilisant ce site ou en réservant un rendez-vous, vous acceptez sans réserve les présentes
              conditions générales. SAS CT LBM se réserve le droit de modifier ces conditions à tout moment.
            </p>
          </div>
        </div>

        {/* Services proposés */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 2 - Services proposés</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              CTAM propose les services de contrôle technique suivants dans ses centres agréés :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Contrôle technique périodique pour véhicules particuliers</li>
              <li>Contrôle technique pour véhicules utilitaires légers</li>
              <li>Contrôle technique pour véhicules hybrides et électriques</li>
              <li>Contrôle technique pour véhicules GPL/GNV</li>
              <li>Contrôle technique pour camping-cars et véhicules hors gabarit</li>
              <li>Contre-visite suite à un contrôle défavorable</li>
              <li>Contrôle complémentaire pollution</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Les contrôles sont effectués conformément à la réglementation en vigueur par des contrôleurs
              techniques agréés par l'État.
            </p>
          </div>
        </div>

        {/* Prise de rendez-vous */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 3 - Prise de rendez-vous</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">3.1 Réservation en ligne</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              La réservation en ligne est disponible 24h/24 sur notre site. Vous recevrez une confirmation
              par email et/ou SMS. Les créneaux sont attribués par ordre d'arrivée.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3.2 Modification et annulation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Toute modification ou annulation doit être effectuée au moins 2 heures avant l'heure du
              rendez-vous. Vous pouvez modifier votre rendez-vous en ligne ou par téléphone.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3.3 Retard ou absence</h3>
            <p className="text-gray-600 leading-relaxed">
              En cas de retard supérieur à 15 minutes, nous ne pourrons garantir la réalisation du contrôle.
              En cas d'absence non signalée, le créneau sera considéré comme perdu.
            </p>
          </div>
        </div>

        {/* Tarifs et paiement */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 4 - Tarifs et paiement</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">4.1 Tarifs</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les tarifs sont affichés TTC sur notre site et dans nos centres. Ils peuvent varier selon
              le type de véhicule et le centre choisi. Les promotions web sont valables uniquement pour
              les réservations effectuées en ligne sur les créneaux éligibles.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4.2 Moyens de paiement</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le paiement s'effectue sur place, après réalisation du contrôle. Nous acceptons :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Carte bancaire (Visa, Mastercard)</li>
              <li>Espèces</li>
              <li>Chèque (sous réserve d'acceptation)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4.3 Facturation</h3>
            <p className="text-gray-600 leading-relaxed">
              Une facture vous sera remise après le paiement. Elle comprend le détail de la prestation
              réalisée et les informations légales obligatoires.
            </p>
          </div>
        </div>

        {/* Déroulement du contrôle */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 5 - Déroulement du contrôle</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">5.1 Documents requis</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour effectuer le contrôle, vous devez présenter :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>La carte grise du véhicule (original)</li>
              <li>Le précédent procès-verbal de contrôle technique (si applicable)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5.2 État du véhicule</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le véhicule doit être présenté dans un état permettant la réalisation du contrôle :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Véhicule propre (particulièrement les plaques et les optiques)</li>
              <li>Coffre accessible et vidé des objets encombrants</li>
              <li>Siège enfant retiré</li>
              <li>Niveau de carburant suffisant pour les tests</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5.3 Résultat du contrôle</h3>
            <p className="text-gray-600 leading-relaxed">
              À l'issue du contrôle, un procès-verbal vous est remis. Le résultat peut être favorable (A),
              défavorable avec contre-visite obligatoire (S) ou critique avec interdiction de circuler (R).
            </p>
          </div>
        </div>

        {/* Contre-visite */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-100 rounded-xl">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 6 - Contre-visite</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              En cas de résultat défavorable nécessitant une contre-visite :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Vous disposez d'un délai de 2 mois moins 1 jour pour effectuer les réparations et vous présenter à la contre-visite</li>
              <li>La contre-visite doit être effectuée dans le même centre ou un centre du même réseau</li>
              <li>La contre-visite porte uniquement sur les points signalés comme défectueux</li>
              <li>Passé le délai, un nouveau contrôle complet sera nécessaire</li>
            </ul>
          </div>
        </div>

        {/* Responsabilité */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 7 - Responsabilité</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">7.1 Responsabilité de CTAM</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              CTAM s'engage à réaliser les contrôles techniques conformément à la réglementation en vigueur
              et avec le plus grand professionnalisme. Notre responsabilité est limitée aux prestations
              effectuées dans nos centres.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7.2 Responsabilité du client</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le client est responsable de l'exactitude des informations fournies et de l'état général
              de son véhicule. Le contrôle technique ne constitue pas une garantie de l'état mécanique
              du véhicule.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7.3 Réclamations</h3>
            <p className="text-gray-600 leading-relaxed">
              Toute réclamation doit être adressée par écrit dans un délai de 8 jours suivant la
              réalisation du contrôle à l'adresse du centre concerné ou par email à autosurlbm@gmail.com.
            </p>
          </div>
        </div>

        {/* Litiges */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <XCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Article 8 - Litiges</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
              Conformément aux dispositions du Code de la consommation, vous pouvez recourir gratuitement
              au service de médiation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              À défaut de résolution amiable, les tribunaux français seront seuls compétents pour
              connaître du litige. Les présentes conditions sont soumises au droit français.
            </p>
          </div>
        </div>

        {/* Date de mise à jour */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
