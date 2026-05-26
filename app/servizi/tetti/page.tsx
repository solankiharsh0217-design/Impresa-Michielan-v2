'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react'

export default function TettiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    'Rifacimento tetti con tegole tradizionali',
    'Coperture in lamiera coibentata',
    'Impermeabilizzazioni complete',
    'Terrazze e balconi',
    'Lattoneria e grondaie',
    'Pluviali e scossaline',
    'Materiali certificati',
    'Garanzia sui lavori'
  ]

  const gallery = [
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg',
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze-scaled.jpg',
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-rio-san-martino-scaled.jpg',
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/sistemazione-tetti-3.jpg',
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze3-scaled.jpg',
    'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze5-scaled.jpg'
  ]

  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden mt-28">
        <Image
          src="https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg"
          alt="Rifacimento Tetti"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link href="/servizi" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Torna ai Servizi
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Rifacimento Tetti e Terrazzi</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Ristrutturazione completa con materiali di qualità</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-text/80 leading-relaxed mb-12">
              Eseguiamo rifacimenti completi di tetti con tegole o coppi tradizionali, nuove coperture in lamiera coibentata, impermeabilizzazioni di tetti, balconi e terrazze. Realizziamo anche opere di lattoneria per grondaie e pluviali.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  <span className="text-text/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Progetti Realizzati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div key={index} className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={image}
                  alt={`Progetto Tetto ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cta to-cta/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Richiedi un Preventivo Gratuito</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Contattaci per un sopralluogo gratuito e senza impegno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+393463482617" className="bg-white text-cta px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              +39 346 348 2617
            </a>
            <Link href="/contatti" className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
