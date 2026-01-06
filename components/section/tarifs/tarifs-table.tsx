import { type Tarif } from '@/lib/tarifs-data'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface TarifsTableProps {
  tarifs: Tarif[]
}

export const TarifsTable = ({ tarifs }: TarifsTableProps) => {
  return (
    <div className="max-w-5xl mx-auto mb-12">
      {/* AJOUT DE LA CLASSE : min-h-[800px] 
          Cela force une hauteur minimale. Vous pouvez ajuster 800px selon la taille réelle de votre plus grand tableau.
      */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-linear-to-r from-primary to-blue-600 px-6 py-4">
          <h3 className="text-xl font-bold text-white">Grille Tarifaire Complète</h3>
          <p className="text-sm text-blue-100 mt-1">Tous nos tarifs TTC</p>
        </div>
        <Table className=''>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-900">Type de Contrôle</TableHead>
              <TableHead className="text-right font-semibold text-gray-900">Prix TTC</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tarifs.map((tarif) => {
              const Icon = tarif.icon
              return (
                <TableRow key={tarif.id} className="hover:bg-blue-50/50 transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg transition-transform hover:scale-110">
                        <Icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-900">{tarif.title}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <div className="flex items-baseline justify-end gap-2 ">
                        <span className="text-lg font-bold text-primary">{tarif.price}€</span>
                        {tarif.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">{tarif.originalPrice}€</span>
                        )}
                      </div>
                      {tarif.badge && (
                        <span className="text-[8px] md:text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                          {tarif.badge}
                        </span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}