import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star, BadgeCheck } from 'lucide-react'
import { Avis } from '@/lib/avis-data'
import { cn } from '@/lib/utils'

interface AvisCardProps {
  avis: Avis
}

export const AvisCard = ({ avis }: AvisCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">{avis.name}</h3>
              {avis.verified && (
                <div title="Avis vérifié">
                  <BadgeCheck className="h-5 w-5 text-blue-500" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < avis.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{avis.date}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-gray-700 leading-relaxed italic line-clamp-4">
          "{avis.comment}"
        </p>
      </CardContent>

      {/* Decorative element */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
    </Card>
  )
}
