import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
    apple: '../../public/apple-icon.png'
  },
  title: 'Rudy Musiani Coaching - Réservation de Séances de Coaching Personnalisées',
  description: "Réservez vos séances d'entraînement avec Rudy Musiani Coaching, votre partenaire pour des séances de coaching sportif de qualité. Maximisez vos performances physiques, atteignez vos objectifs de fitness et transformez votre condition physique. Réservez dès maintenant pour profiter d'une expérience de coaching sportif exceptionnelle avec Rudy Musiani.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
