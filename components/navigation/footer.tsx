import { Button } from "../ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

export const FooterMobile = () => {
    const phoneNumber = "0148672001"

    return (
        <footer
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg lg:hidden"
            role="contentinfo"
            aria-label="Actions rapides"
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex gap-3">
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="flex-1 font-semibold border-2"
                    >
                        <Link
                            href={`tel:${phoneNumber}`}
                            aria-label="Appeler le centre CCTAM"
                        >
                            <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                            Appeler
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        className="flex-1 font-semibold shadow-md"
                    >
                        <Link
                            href="/rendez-vous"
                            aria-label="Prendre rendez-vous en ligne pour un contrôle technique"
                        >
                            <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                            Prendre RDV
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}
