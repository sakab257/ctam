import { PageLayout } from "@/components/layout/page-layout"
import { Shield, Database, Lock, UserCheck, Mail, Clock, FileText } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | CTAM - Contrôle Technique",
  description: "Politique de confidentialité et protection des données personnelles du site CTAM.",
}

export default function PolitiqueConfidentialite() {
  return (
    <PageLayout
      title="Politique de Confidentialité"
      subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles."
      badge="RGPD"
    >
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl shrink-0">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Notre engagement
              </h2>
              <p className="text-blue-800">
                SAS BSKN GROUP s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données
                personnelles en conformité avec le Règlement Général sur la Protection des Données (RGPD)
                et la loi Informatique et Libertés.
              </p>
            </div>
          </div>
        </div>

        {/* Responsable du traitement */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Responsable du traitement</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Le responsable du traitement des données personnelles est :<br />
              <strong>SAS BSKN GROUP</strong><br />
              152 Avenue Jean Jaures, 93700 Drancy<br />
              Email : autosurlbm@gmail.com<br />
              Téléphone : 01 48 67 66 66
            </p>
          </div>
        </div>

        {/* Données collectées */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Données collectées</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Données transmises directement</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lors de la prise de rendez-vous ou de l'utilisation de nos services, nous collectons :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Plaque d'immatriculation du véhicule</li>
              <li>Type de véhicule</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Données collectées automatiquement</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lors de votre navigation sur notre site :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Système d'exploitation</li>
              <li>Pages visitées et temps de visite</li>
              <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
            </ul>
          </div>
        </div>

        {/* Finalités du traitement */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Finalités du traitement</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Gestion des rendez-vous</strong> : prise de rendez-vous en ligne, confirmation, modification et annulation</li>
              <li><strong>Rappels et relances</strong> : envoi de SMS, emails ou courriers pour vous rappeler votre rendez-vous ou l'échéance de votre contrôle technique</li>
              <li><strong>Service client</strong> : répondre à vos questions et demandes</li>
              <li><strong>Avis clients</strong> : collecte et affichage des avis pour améliorer nos services</li>
              <li><strong>Statistiques</strong> : analyse de l'utilisation du site pour l'améliorer</li>
              <li><strong>Obligations légales</strong> : conservation des données requises par la réglementation</li>
            </ul>
          </div>
        </div>

        {/* Base légale */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Base légale du traitement</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Exécution du contrat</strong> : traitement nécessaire à la prise de rendez-vous et à la réalisation du contrôle technique</li>
              <li><strong>Consentement</strong> : pour l'envoi de communications marketing et l'utilisation de cookies non essentiels</li>
              <li><strong>Intérêt légitime</strong> : pour l'amélioration de nos services et la prévention de la fraude</li>
              <li><strong>Obligation légale</strong> : conservation des données imposée par la réglementation</li>
            </ul>
          </div>
        </div>

        {/* Durée de conservation */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Durée de conservation</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Vos données sont conservées pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Données clients</strong> : 3 ans après le dernier contact</li>
              <li><strong>Données de rendez-vous</strong> : 5 ans (obligation légale)</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
              <li><strong>Cookies</strong> : 13 mois maximum</li>
            </ul>
          </div>
        </div>

        {/* Vos droits */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Vos droits</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Pour exercer ces droits, contactez-nous par email à <strong>autosurlbm@gmail.com</strong> ou par courrier à notre adresse.
            </p>
          </div>
        </div>

        {/* Contact DPO */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul className="list-none text-gray-600 space-y-2 mb-6">
              <li><strong>Email</strong> : autosurlbm@gmail.com</li>
              <li><strong>Courrier</strong> : SAS BSKN GROUP, 152 Avenue Jean Jaures, 93700 Drancy</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">www.cnil.fr</a>
            </p>
          </div>
        </div>

        {/* Cookies link */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-gray-600 mb-4">
            Pour en savoir plus sur notre utilisation des cookies :
          </p>
          <Link
            href="/cookies"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Gérer mes préférences cookies
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
