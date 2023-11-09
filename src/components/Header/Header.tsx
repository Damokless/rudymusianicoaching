import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute bg-transparant md:px-[75px] w-full">
      <div className="flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center w-full justify-center lg:justify-start lg:w-auto" href="/">
          <Image src='/assets/images/white_logo.png' width={48} height={48} alt="Rudy Musiani logo" className="w-12" />
          <p className="text-white">Rudy Musiani Coaching</p>
        </Link>
        <div className="hidden md:flex flex-1 items-center justify-end md:justify-center">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  href="/"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  href="/"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  href="/"
                >
                  Découvrez Rudy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden sm:flex">
        <Link
            className="inline-block rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            href="/reservation"
          >
            Prendre un coaching
          </Link>
          </div>
      </div>
    </header>
  );
}
