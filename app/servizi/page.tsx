'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Shield, Hammer, Layers, Award, Key, ArrowRight } from 'lucide-react'

export default function ServiziPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      id: 'restauri',
      icon: Home,
      title: 'Restauri e Pitture Edili',
      shortDesc: 'Oltre 30 anni di esperienza in restauri e pitture edili per facciate e interni',
      image: 'https://images.unsplash.com/photo-1534161919789-69eb71e62291?auto=format&fit=crop&w=1200&q=80',
      link: '/servizi/restauri'
    },
    {
      id: 'isolamenti',
      icon: Shield,
      title: 'Isolamenti e Cappotti',
      shortDesc: 'Soluzioni innovative a basso spessore per isolamento termico ed efficienza energetica',
      image: 'https://images.unsplash.com/photo-1779031149884-bd80eed1e275?auto=format&fit=crop&w=1200&q=80',
      link: '/servizi/isolamenti'
    },
    {
      id: 'tetti',
      icon: Hammer,
      title: 'Rifacimento Tetti e Terrazzi',
      shortDesc: 'Ristrutturazione completa di tetti, terrazzi e impermeabilizzazioni',
      image: 'https://images.unsplash.com/photo-1605450099279-533bd3ce379a?auto=format&fit=crop&w=1200&q=80',
      link: '/servizi/tetti'
    },
    {
      id: 'cartongessi',
      icon: Layers,
      title: 'Cartongessi e Contropareti',
      shortDesc: 'Pareti divisorie, controsoffitti e soluzioni acustiche in cartongesso',
      image: 'https://images.unsplash.com/photo-1768321917661-d4f1a89d2185?auto=format&fit=crop&w=1200&q=80',
      link: '/servizi/cartongessi'
    },
    {
      id: 'materiali',
      icon: Award,
      title: 'Materiali Innovativi in Esclusiva',
      shortDesc: 'Materiali esclusivi certificati per un ambiente salubre e sostenibile',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif',
      link: '/servizi/materiali'
    },
    {
      id: 'ristrutturazioni',
      icon: Key,
      title: 'Ristrutturazioni Complete Chiavi in Mano',
      shortDesc: 'Progetti chiavi in mano con supervisione completa dall\'inizio alla fine',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
      link: '/servizi/ristrutturazioni'
    },
  ]

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">I Nostri Servizi</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Soluzioni complete per restauri, isolamenti, rifacimenti e ristrutturazioni. Oltre 30 anni di esperienza al tuo servizio.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cta/30 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cta/10 to-cta/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-cta" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-cta transition-colors duration-300">{service.title}</h3>
                  <p className="text-text/70 mb-5 leading-relaxed">{service.shortDesc}</p>
                  <div className="flex items-center gap-2 text-cta font-semibold group-hover:gap-3 transition-all duration-300">
                    Scopri di più
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
