'use client';
import { links, otherLinks } from "@/lib/links"
import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus, Menu, Calendar } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export const Navbar = () => {
    return (
        <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-2">
                {links.map((link) => (
                    <li key={link.title}>
                        <Link
                            href={link.href}
                            aria-label={link.description}
                            title={link.description}
                            className="relative capitalize text-gray-700 font-medium px-1 py-2 transition-colors duration-300 hover:text-primary group"
                        >
                            {link.title}
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"
                                aria-hidden="true"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export const Other = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size={'icon'}
                    className="hover:text-primary"
                    aria-label="Ouvrir le menu des liens supplémentaires"
                    title="Plus de liens"
                >
                    <Plus aria-hidden="true" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <nav aria-label="Liens secondaires">
                    <ul className="flex flex-col gap-y-4">
                        {otherLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    href={link.href}
                                    aria-label={link.description}
                                    title={link.description}
                                    className="relative capitalize text-gray-700 font-medium px-1 py-2 transition-colors duration-300 hover:text-primary group"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </PopoverContent>
        </Popover>
    )
}

export const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-lg"
                    className="lg:hidden"
                    aria-label="Ouvrir le menu de navigation mobile"
                    aria-expanded={open}
                >
                    <Menu className="h-8 w-8" aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
                <SheetHeader>
                    <SheetTitle className="text-xl">Menu de navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                    <nav aria-label="Navigation principale mobile">
                        <ul className="flex flex-col gap-2">
                            <Button className="font-bold mx-4 text-lg py-6">
                                <Calendar className="h-5 w-5" aria-hidden="true" />
                                Prendre RDV
                            </Button>
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        aria-label={link.description}
                                        title={link.description}
                                        className="block capitalize text-gray-700 font-medium px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:text-primary"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="border-t pt-6">
                        <h3 className="text-sm font-semibold text-gray-500 mb-4 px-4">Autres liens</h3>
                        <nav aria-label="Liens secondaires mobile">
                            <ul className="flex flex-col gap-2">
                                {otherLinks.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-label={link.description}
                                            title={link.description}
                                            className="block capitalize text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:text-primary"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
