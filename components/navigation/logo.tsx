import Image from "next/image"
import Link from "next/link"

export const NavLogo = () => {
  return (
    <Link
      className="flex items-center gap-3 px-2"
      href={"/"}
      aria-label="Retour à la page d'accueil CTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
      title="CTAM - Contrôle Technique Auto Moto Le Blanc-Mesnil / Ivry-Sur-Seine"
    >
        <Image
          src={'/autosur_logo.webp'}
          alt="Logo Autosur"
          width={100}
          height={100}
          priority
          title="Autosur"
        />
        <Image
          src={'/logo.webp'}
          alt="Logo du centre CTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
          width={60}
          height={60}
          priority
          title="CTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
        />
        <span className="font-bold text-xl md:text-3xl">CTAM</span>
    </Link>
  )
}