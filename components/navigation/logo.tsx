import Image from "next/image"
import Link from "next/link"

export const NavLogo = () => {
  return (
    <Link
      className="flex gap-2 px-2"
      href={"/"}
      aria-label="Retour à la page d'accueil CCTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
      title="CCTAM - Contrôle Technique Auto Moto Le Blanc-Mesnil / Ivry-Sur-Seine"
    >
        <Image
          src={'/logo.webp'}
          alt="Logo du centre CCTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
          width={70}
          height={70}
          priority
          title="CCTAM Le Blanc-Mesnil / Ivry-Sur-Seine"
        />
        <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl md:text-3xl" aria-label="CCTAM">CCTAM</p>
            <span className="text-[10px] md:text-sm" aria-label="Le Blanc-Mesnil / Ivry-Sur-Seine"></span>
        </div>
    </Link>
  )
}