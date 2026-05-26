'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone, Shield, Home, Droplet } from 'lucide-react'

export default function IsolamentiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    'Cappotti termici a basso spessore',
    'Soluzioni innovative ed esclusive',
    'Ottimizzazione costi energetici',
    'Riduzione rumori esterni',
    'Risoluzione umidità di risalita',
    'Materiali certificati e traspiranti',
    'Miglioramento comfort abitativo',
    'Risparmio in bolletta'
  ]

  const benefits = [
    { icon: Shield, title: 'Isolamento Termico', description: 'Riduzione dispersioni di calore fino al 40%' },
    { icon: Home, title: 'Comfort Abitativo', description: 'Temperatura costante tutto l\'anno' },
    { icon: Droplet, title: 'Anti-Umidità', description: 'Eliminazione muffa e condensa' }
  ]

  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden mt-28">
        <Image
          src="https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-casetta.png"
          alt="Isolamenti e Cappotti"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Isolamenti e Cappotti</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Soluzioni innovative per efficienza energetica e comfort</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-text/80 leading-relaxed mb-12">
              Realizziamo cappotti termici a basso spessore con soluzioni innovative ed esclusive. Ottimizziamo i costi energetici della tua abitazione, riduciamo i rumori esterni e risolviamo definitivamente i problemi di umidità di risalita nelle pareti.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-background rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-cta/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cta" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-text/70">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
