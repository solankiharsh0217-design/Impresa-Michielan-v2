import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Impresa Edile Michielan - Restauri e Pitture Edili | Scorzè, Venezia',
  description: 'Impresa edile con oltre 30 anni di esperienza in restauri, isolamenti, rifacimento tetti, cartongessi e ristrutturazioni complete. Trasformiamo la tua casa in un ambiente salubre.',
  keywords: 'impresa edile, restauri, pitture edili, isolamenti, cappotti, rifacimento tetti, cartongessi, ristrutturazioni, Scorzè, Venezia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={montserrat.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
