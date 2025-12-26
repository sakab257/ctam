import { Clock, MapPin, Phone } from 'lucide-react'
import { Schedule } from '@/lib/tarifs-data'
import Link from 'next/link'

interface CenterInfo {
  address: string
  phone: string
  access: string
  promoNote: string
  schedule: Schedule
}

interface InfoCardsProps {
  centerInfo: CenterInfo
}

export const InfoCards = ({ centerInfo }: InfoCardsProps) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {/* Horaires */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">{centerInfo.schedule.days}</p>
          <p className="text-2xl font-bold text-primary">{centerInfo.schedule.hours}</p>
        </div>
      </div>

      {/* Adresse */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
        </div>
        <p className="text-sm text-gray-700 mb-2 leading-relaxed">{centerInfo.address}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 italic">
          <div className="h-1 w-1 rounded-full bg-blue-600" />
          <p>{centerInfo.access}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
        </div>
        <Link
          href={`tel:${centerInfo.phone.replace(/\s/g, '')}`}
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2"
        >
          {centerInfo.phone}
        </Link>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-blue-600" />
          Du lundi au samedi
        </div>
      </div>
    </div>
  )
}
