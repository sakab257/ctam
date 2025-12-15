import { Button } from "../ui/button"
import { NavLogo } from "./logo"
import { Navbar, Other, MobileNav } from "./navbar"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full h-20 bg-white shadow-md border-b border-gray-200" role="banner">
            <div className="container mx-auto h-full px-4 flex items-center justify-between">
                <NavLogo />
                <div className="hidden lg:flex gap-2 items-center">
                    <Navbar />
                    <Button className="font-bold">Prendre Rendez-Vous</Button>
                    <Other />
                </div>
                <MobileNav />
            </div>
        </header>
    )
}