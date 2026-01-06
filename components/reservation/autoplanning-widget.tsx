"use client"

import { useEffect, useState } from "react"
import { Calendar, Loader2 } from "lucide-react"

interface AutoPlanningWidgetProps {
    centerId: string
}

// Configuration Autoplanning
const setupAutoplanning = () => {
    // Stub pour Google Analytics (évite l'erreur gtag)
    if (typeof window.gtag === 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.gtag = function(...args: unknown[]) {
            window.dataLayer.push(args)
        }
    }

    // Configuration complète Autoplanning
    const AgendaSettings = {
        4523: {
            customerID: 4521,
            institutionID: 4523,
            institutionSlug: 'cctam-autosur-le-blanc-mesnil',
            login: '9315WEB',
            cvHandle: false,
            rdvTypesGroups: [
                {"name":"ct","types":["A"],"modalTypes":[],"allowTypes":["A"],"default":"A","translations":{"fr":"Contrôle Technique","en":"Technical Inspection"}},
                {"name":"cv","types":["D"],"modalTypes":[],"allowTypes":["D"],"default":"D","translations":{"fr":"Contre Visite","en":"Follow-up Inspection"}},
                {"name":"pol","types":["F"],"modalTypes":[],"allowTypes":["F"],"default":"F","translations":{"fr":"Visite Pollution","en":"Pollution visit"}}
            ],
            cvEventType: '',
            eventHash: '',
        }
    };

    (window as any).AgendaSettings = AgendaSettings;

    window.AgendaElement = window.AgendaElement || {};
    Object.assign(window.AgendaElement, {
        displayPreselection: true,
        appCMS: false,
        navigationPosition: 'top',
        promoEventStyle: 'slashed',
        translates: {},
        selectFirstCriterionOnScroll: false,
        scrollOffset: 64,
        offsetElementCanChangePosition: true,
        skipCookieConsent: true,
        freeTimeLimit: 6,
        customerID: 4521,
        institutionID: 4523,
        institutionSlug: 'cctam-autosur-le-blanc-mesnil',
        login: '9315WEB',
        cvHandle: false,
        rdvTypesGroups: AgendaSettings[4523].rdvTypesGroups,
        cvEventType: '',
        eventHash: '',
        uiConfig: {
            desktop: { waitForPreselection: false, modalMode: false },
            mobile: { waitForPreselection: true, modalMode: true }
        }
    });

    const bucketUrl = 'https://www.apfr.fr/uploads/customer/agenda-element';
    const version = 'v4';

    // Ajouter le CSS si pas déjà présent
    if (!document.querySelector('link[href*="default-style.css"]')) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = `${bucketUrl}/${version}/default-style.css`
        document.head.appendChild(link)
    }

    // Charger le script principal si pas déjà chargé
    const existingScript = document.querySelector('script[src*="agenda-element"][src*="main.js"]')
    if (!existingScript) {
        const script = document.createElement('script')
        script.type = 'module'
        script.src = `${bucketUrl}/${version}/main.js`
        document.head.appendChild(script)
        return false // Script en cours de chargement
    }
    return true // Script déjà chargé
}

export const AutoPlanningWidget = ({ centerId }: AutoPlanningWidgetProps) => {
    const [isReady, setIsReady] = useState(false)
    const [key, setKey] = useState(Date.now())

    // Initialiser Autoplanning
    useEffect(() => {
        const scriptAlreadyLoaded = setupAutoplanning()

        if (scriptAlreadyLoaded) {
            // Le script est déjà chargé, on peut rendre l'élément immédiatement
            // On utilise un petit délai pour s'assurer que la configuration est appliquée
            const timer = setTimeout(() => {
                setKey(Date.now()) // Force la recréation de l'élément
                setIsReady(true)
            }, 100)
            return () => clearTimeout(timer)
        } else {
            // Attendre que le script soit chargé
            const checkScript = setInterval(() => {
                if (customElements.get('apfr-agenda-root')) {
                    clearInterval(checkScript)
                    setIsReady(true)
                }
            }, 100)

            // Timeout après 10 secondes
            const timeout = setTimeout(() => {
                clearInterval(checkScript)
                setIsReady(true) // Essayer quand même
            }, 10000)

            return () => {
                clearInterval(checkScript)
                clearTimeout(timeout)
            }
        }
    }, [centerId])

    return (
        <div className="w-full md:min-h-150 bg-white rounded-xl overflow-hidden">
            {/* Section mobile - Design compact et élégant */}
            <div className="md:hidden">
                {/* Header avec dégradé subtil */}
                <div className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 px-5 py-6">
                    {/* Décoration de fond */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

                    {/* Contenu */}
                    <div className="relative">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                            Réservation en ligne
                        </h3>
                        <p className="text-sm text-gray-600">
                            Choisissez votre créneau en quelques clics
                        </p>
                    </div>
                </div>

                {/* Badges d'avantages */}
                <div className="px-5 py-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Disponible 24h/24
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Confirmation immédiate
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Paiement sur place
                    </span>
                </div>

                {/* Bouton CTA principal */}
                <div className="px-5 pb-6">
                    {isReady ? (
                        <button
                            type="button"
                            data-apfr-params-trigger=""
                            className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-linear-to-r from-primary to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all duration-200 overflow-hidden"
                        >
                            {/* Effet de brillance au hover */}
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                            {/* Icône avec animation */}
                            <span className="relative flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl">
                                <Calendar className="h-5 w-5" />
                            </span>

                            {/* Texte */}
                            <span className="relative flex flex-col items-start">
                                <span className="text-base">Réserver maintenant</span>
                                <span className="text-xs font-normal text-white/80">Gratuit et sans engagement</span>
                            </span>

                            {/* Flèche */}
                            <svg className="relative w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-500 font-semibold rounded-2xl">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Chargement...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Conteneur de l'agenda (visible sur desktop) */}
            <div className="hidden md:block min-h-150">
                {isReady ? (
                    // Utiliser dangerouslySetInnerHTML pour forcer la création du custom element
                    <div
                        key={key}
                        dangerouslySetInnerHTML={{ __html: '<apfr-agenda-root></apfr-agenda-root>' }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-150">
                        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                        <p className="text-gray-600 font-medium">Chargement du planning...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
