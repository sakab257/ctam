import { Star, Users } from 'lucide-react'
import { type StatsAvis } from '@/lib/avis-data'

interface AvisHeaderProps {
  stats: StatsAvis
  showTitle?: boolean
}

export const AvisHeader = ({ stats, showTitle = true }: AvisHeaderProps) => {
  const percentage = (count: number) => Math.round((count / stats.totalAvis) * 100)

  return (
    <div className="text-center max-w-4xl mx-auto mb-12">
      {showTitle && (
        <>
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Témoignages Clients
            </span>
          </div>

          <h2
            id="avis-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Ce Que Nos <span className="text-primary">Clients Disent</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            La satisfaction de nos clients est notre priorité. Découvrez leurs expériences.
          </p>
        </>
      )}

      {/* Stats Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Note moyenne */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-primary">{stats.noteMoyenne}</span>
              <span className="text-2xl text-gray-400">/5</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.round(stats.noteMoyenne)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">{stats.totalAvis} avis clients</span>
            </div>
          </div>

          {/* Distribution des notes */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-1 w-16">
                  <span className="text-sm font-medium text-gray-700">{stars}</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-blue-600 rounded-full"
                    style={{ width: `${percentage(stats.repartition[stars as keyof typeof stats.repartition])}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
