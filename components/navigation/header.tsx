import Link from "next/link"
import { Button } from "../ui/button"
import { NavLogo } from "./logo"
import { Navbar, Other, MobileNav } from "./navbar"
import { Calendar } from "lucide-react"

export const Header = () => {
    return (
        <header className="sticky top-0 w-full h-20 bg-white shadow-md border-b border-gray-200 z-1000" role="banner">
            <div className="container mx-auto h-full px-4 flex items-center justify-between">
                <NavLogo />
                <div className="hidden lg:flex gap-2 items-center">
                    <Navbar />
                    <Button asChild className="font-bold hover:scale-105 transition-all">
                        <Link href={`/#hero-section`}>
                            <Calendar className="h-5 w-5" aria-hidden="true" />
                            Prendre RDV
                        </Link>
                    </Button>
                    <Other />
                </div>
                <MobileNav />
            </div>
        </header>
    )
}