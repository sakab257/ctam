import { PageLayout } from "@/components/layout/page-layout"
import { Building2, User, Globe, Shield, Server } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | CTAM - Contrôle Technique",
  description: "Mentions légales du site CTAM - Centre de Contrôle Technique Automobile Le Blanc-Mesnil et Ivry-sur-Seine.",
}

const sections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    content: [
      { label: "Raison sociale", value: "SAS CT LBM" },
      { label: "Capital social", value: "1 000 euros" },
      { label: "RCS", value: "Bobigny B 909 370 223" },
      { label: "N° TVA intracommunautaire", value: "FR37 909 370 223" },
      { label: "Siège social", value: "17 rue Corneille, 93150 Le Blanc-Mesnil" },
      { label: "SIRET", value: "909 370 223 00028" },
    ]
  },
  {
    icon: User,
    title: "Direction de la publication",
    content: [
      { label: "Directeur de la publication", value: "M. Abdel-Hadi Bouskine" },
      { label: "Contact", value: "autosurlbm@gmail.com" },
    ]
  },
  {
    icon: Server,
    title: "Hébergement",
    content: [
      { label: "Hébergeur", value: "Vercel Inc." },
      { label: "Adresse", value: "340 S Lemon Ave #4133, Walnut, CA 91789, USA" },
      { label: "Site web", value: "https://vercel.com" },
    ]
  },
  {
    icon: Globe,
    title: "Conception et réalisation",
    content: [
      { label: "Conception", value: "SAS CT LBM" },
      { label: "Développement", value: "SAS CT LBM" },
    ]
  }
]

export default function MentionsLegales() {
  return (
    <PageLayout
      title="Mentions Légales"
      subtitle="Informations légales concernant le site CTAM et ses services."
      badge="Informations Légales"
    >
      <div className="max-w-4xl mx-auto">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Propriété intellectuelle */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Propriété intellectuelle</h2>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété
              exclusive de SAS CT LBM ou de ses partenaires. Toute reproduction, représentation, modification,
              publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque
              procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite
              préalable de SAS CT LBM.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Toute exploitation non autorisée du site ou de son contenu, des informations qui y sont divulguées,
              engagerait la responsabilité de l'utilisateur et constituerait une contrefaçon sanctionnée par les
              articles L 335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </div>
        </div>

        {/* Données personnelles */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Protection des données personnelles</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              L'éditeur s'engage à ce que le traitement des données personnelles soit conforme au Règlement Général
              sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les traitements de données sont déclarés à l'inventaire RGPD en conformité CNIL sous le numéro 2024/4523.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Données collectées</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Données transmises directement :</strong> nom, prénom, email, téléphone, plaque d'immatriculation</li>
              <li><strong>Données collectées automatiquement :</strong> données de navigation, adresse IP, navigateur utilisé</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Utilisation des données</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Gestion des rendez-vous de contrôle technique</li>
              <li>Relances par courrier, SMS ou email</li>
              <li>Gestion des avis clients</li>
              <li>Mesure d'audience et amélioration du site</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Vos droits</h3>
            <p className="text-gray-600 leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité
              de vos données. Pour exercer ces droits, contactez-nous à l'adresse : contact@cctam.fr
            </p>
          </div>
        </div>

        {/* Responsabilité */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Responsabilité</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
              mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              L'éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de
              l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant
              pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience.
              Pour en savoir plus sur notre utilisation des cookies et gérer vos préférences, consultez notre
              <a href="/cookies" className="text-primary hover:underline ml-1">page dédiée aux cookies</a>.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
