'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type CenterType = 'lbm' | 'ivry'

interface CenterContextType {
    selectedCenter: CenterType
    setSelectedCenter: (center: CenterType) => void
}

const CenterContext = createContext<CenterContextType | undefined>(undefined)

export function CenterProvider({ children }: { children: ReactNode }) {
    const [selectedCenter, setSelectedCenter] = useState<CenterType>('lbm')

    return (
        <CenterContext.Provider value={{ selectedCenter, setSelectedCenter }}>
            {children}
        </CenterContext.Provider>
    )
}

export function useCenter() {
    const context = useContext(CenterContext)
    if (context === undefined) {
        throw new Error('useCenter must be used within a CenterProvider')
    }
    return context
}
