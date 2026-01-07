"use client"

import { ReactNode, useState } from "react"
import { Button } from "../ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog"

interface FooterCentreProps {
    phone: string
    centerName: string
    children?: ReactNode // Le widget de réservation (optionnel, pour iFrame)
    useAutoplanning?: boolean // Si true, déclenche le bouton Autoplanning au lieu du dialog
}

export const FooterCentre = ({ phone, centerName, children, useAutoplanning = false }: FooterCentreProps) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleRdvClick = () => {
        if (useAutoplanning) {
            // Déclencher le bouton Autoplanning existant sur la page
            const autoplanningButton = document.querySelector('[data-apfr-params-trigger]') as HTMLButtonElement
            if (autoplanningButton) {
                autoplanningButton.click()
            }
        } else {
            // Ouvrir le dialog avec l'iFrame
            setDialogOpen(true)
        }
    }

    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg lg:hidden"
            role="contentinfo"
            aria-label="Actions rapides"
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex gap-3">
                    {/* Bouton Appeler - appel direct au centre */}
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 font-semibold border-2"
                    >
                        <Link
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            aria-label={`Appeler le centre ${centerName}`}
                        >
                            <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                            Appeler
                        </Link>
                    </Button>

                    {/* Bouton Prendre RDV */}
                    <Button
                        size="lg"
                        className="flex-1 font-semibold shadow-md"
                        aria-label={`Prendre rendez-vous au centre ${centerName}`}
                        onClick={handleRdvClick}
                    >
                        <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                        Prendre RDV
                    </Button>

                    {/* Dialog pour iFrame (Ivry) */}
                    {!useAutoplanning && children && (
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogContent className="max-w-md w-[calc(100%-2.5rem)] max-h-[70vh] top-[55%] overflow-hidden p-0 rounded-xl">
                                <DialogHeader className="px-4 pt-3 pb-2 border-b border-gray-100">
                                    <DialogTitle className="text-center text-base font-semibold">
                                        Réserver - {centerName}
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="overflow-y-auto flex-1">
                                    {children}
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
        </footer>
    )
}
