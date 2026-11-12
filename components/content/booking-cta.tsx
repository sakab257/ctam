import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { centerList, telHref } from "@/lib/site"

interface BookingCtaProps {
  title?: string
  text?: string
}

/** Bloc d'appel à l'action : réserver ou appeler l'un des deux centres. */
export function BookingCta({
  title = "Prêt pour votre contrôle technique ?",
  text = "Réservez en ligne 24h/24 ou présentez-vous sans rendez-vous dans l'un de nos deux centres.",
}: BookingCtaProps) {
  return (
    <section className="bg-linear-to-r from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {centerList.map((center) => (
          <Link
            key={center.id}
            href={center.path}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            <Calendar className="h-5 w-5" aria-hidden="true" />
            RDV {center.inCity}
          </Link>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mt-6 text-sm text-white/90">
        {centerList.map((center) => (
          <a
            key={center.id}
            href={telHref(center.phone)}
            className="inline-flex items-center justify-center gap-2 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {center.name} : {center.phone}
          </a>
        ))}
      </div>
    </section>
  )
}
