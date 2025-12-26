import { Clock, Phone, MapPin, LucideIcon } from 'lucide-react'
import React from 'react'
import { schedules, lbmInfo, ivryInfo } from '@/lib/tarifs-data'

interface HeroCardProps {
    icon: LucideIcon
    icon2: LucideIcon
    title: string
    subtitle?: string
    hour: string
    subhour?: string
    color: 'blue'
}

const colorVariants = {
    blue: {
        bg: "bg-blue-100",
        text: "text-blue-600"
    }
}

const HeroCard = ({ icon: Icon, icon2:Icon2, hour, subhour,title, subtitle, color }: HeroCardProps) => {
    const colors = colorVariants[color]

    return (
        <div className="w-full bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group z-100 flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <div className={`p-2.5 ${colors.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900">{hour}</h3>
                    {subtitle && <p className="text-[10px] text-gray-600">{subhour}</p>}
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className={`p-2.5 ${colors.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon2 className={`h-5 w-5 ${colors.text}`} aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                    {subtitle && <p className="text-[10px] text-gray-600">{subtitle}</p>}
                </div>
            </div>
        </div>
    )
}

export const HeroCards = () => {
    return (
        <>
            <HeroCard
                icon={Clock}
                icon2={MapPin}
                hour={schedules[0].days}
                subhour={schedules[0].hours}
                title="Le Blanc-Mesnil"
                subtitle={lbmInfo.address}
                color="blue"
            />
            <HeroCard
                icon={Clock}
                icon2={MapPin}
                hour={schedules[1].days}
                subhour={schedules[1].hours}
                title="Ivry-Sur-Seine"
                subtitle={ivryInfo.address}
                color="blue"
            />
        </>
    )
}

export default HeroCard