'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react'

export default function RestauriPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    'Restauro facciate esterne con materiali innovativi',
    'Pitture interne ed esterne di alta qualità',
    'Trattamenti anti-umidità e anti-muffa',
    'Protezione dagli agenti atmosferici',
    'Miglioramento estetico ed efficienza energetica',
    'Materiali certificati e duraturi',
    'Preservazione del valore immobiliare',
    'Consulenza personalizzata'
  ]

  const process = [
    { step: '01', title: 'Sopralluogo', description: 'Analisi dettagliata dello stato attuale e delle esigenze' },
    { step: '02', title: 'Preventivo', description: 'Proposta trasparente con tempi e costi definiti' },
    { step: '03', title: 'Preparazione', description: 'Preparazione delle superfici e protezione aree' },
    { step: '04', title: 'Esecuzione', description: 'Lavori eseguiti con materiali certificati' },
    { step: '05', title: 'Controllo', description: 'Verifica qualità e soddisfazione cliente' },
    { step: '06', title: 'Consegna', description: 'Pulizia finale e assistenza post-lavoro' }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden mt-28">
        <Image
          src="https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg"
          alt="Restauri e Pitture Edili"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Restauri e Pitture Edili</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Oltre 30 anni di esperienza in restauri e pitture edili di alta qualità</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-text/80 leading-relaxed mb-12">
              Con oltre 30 anni di esperienza nel settore, Impresa Michielan è specializzata in restauri e pitture edili di alta qualità. Ci occupiamo di rinnovare facciate per migliorare l&apos;estetica, l&apos;isolamento termico, l&apos;efficienza energetica e la protezione dagli agenti atmosferici. Utilizziamo materiali innovativi per preservare il valore del tuo immobile nel tempo, garantendo risultati duraturi e di qualità superiore.
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Il Nostro Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-cta/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Progetti Realizzati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg"
                alt="Progetto Restauro 1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/11/SFONDO-HOME-IMPRESA-MICHIELAN.jpg"
                alt="Progetto Restauro 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
