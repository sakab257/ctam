import { PageLayout } from "@/components/layout/page-layout"
import { Briefcase, GraduationCap, Users, Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { lbmInfo } from "@/lib/tarifs-data"

export const metadata: Metadata = {
  title: "Recrutement | CTAM - Contrôle Technique",
  description: "Rejoignez l'équipe CTAM ! Nous recrutons des contrôleurs techniques automobile et moto. Postulez dès maintenant.",
}

const profiles = [
  {
    title: "Contrôleurs techniques expérimentés",
    description: "Vous êtes déjà agréé et cherchez un nouveau challenge"
  },
  {
    title: "Contrôleurs débutants",
    description: "Vous êtes fraîchement diplômé et souhaitez débuter votre carrière"
  },
  {
    title: "Candidats en reconversion",
    description: "Vous souhaitez devenir contrôleur technique"
  },
  {
    title: "Titulaires d'un Bac Pro Maintenance Automobile",
    description: "Formation possible pour devenir contrôleur agréé"
  }
]

const benefits = [
  "Équipe dynamique et bienveillante",
  "Formation continue assurée",
  "Équipements modernes",
  "Évolution de carrière possible",
  "Horaires réguliers",
  "Ambiance de travail agréable"
]

export default function Recrutement() {
  return (
    <PageLayout
      title="Recrutement"
      subtitle="Rejoignez une équipe passionnée et participez à la sécurité routière au quotidien."
      badge="Carrières"
    >
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl shrink-0">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Nous recrutons !
              </h2>
              <p className="text-gray-600 leading-relaxed">
                CTAM est en constante recherche de nouveaux talents pour renforcer ses équipes.
                Que vous soyez expérimenté ou débutant, nous avons peut-être une place pour vous.
              </p>
            </div>
          </div>
        </div>

        {/* Profils recherchés */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Profils recherchés</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{profile.title}</h3>
                <p className="text-sm text-gray-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl shrink-0">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                Formation possible
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Vous êtes titulaire d'un <strong>Bac Pro Maintenance Automobile</strong> ou équivalent ?
                Nous proposons une formation pour devenir contrôleur technique agréé.
                Contactez-nous pour en savoir plus sur les conditions d'accès.
              </p>
            </div>
          </div>
        </div>

        {/* Avantages */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Pourquoi nous rejoindre ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / Postuler */}
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 text-white">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-white/20 rounded-xl mb-4">
              <Send className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Postulez maintenant
            </h2>
            <p className="text-white/90">
              Envoyez-nous votre CV et nous vous recontacterons rapidement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <a
              href="mailto:autosurlbm@gmail.com?subject=Candidature%20-%20Contrôleur%20Technique"
              className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
            >
              <div className="p-3 bg-white/20 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold mb-1">Par email</p>
                <p className="text-sm text-white/80">autosurlbm@gmail.com</p>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href={`tel:${lbmInfo.phone.replace(/\s/g, '')}`}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
            >
              <div className="p-3 bg-white/20 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold mb-1">Par téléphone</p>
                <p className="text-sm text-white/80">{lbmInfo.phone}</p>
              </div>
            </a>

            {/* Sur place */}
            <div className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl text-center backdrop-blur-sm">
              <div className="p-3 bg-white/20 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold mb-1">Sur place</p>
                <p className="text-sm text-white/80">{lbmInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:autosurlbm@gmail.com?subject=Candidature%20-%20Contrôleur%20Technique"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Envoyer ma candidature
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
