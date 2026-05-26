'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone, Award } from 'lucide-react'

export default function MaterialiPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden mt-28">
        <Image
          src="https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif"
          alt="Materiali Innovativi"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Materiali Innovativi</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Soluzioni esclusive per un ambiente salubre</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-background to-white p-10 rounded-3xl shadow-xl">
                <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-md">
                  <Image
                    src="https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif"
                    alt="Izonil"
                    width={200}
                    height={80}
                  />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-5">IZONIL</h3>
                <p className="text-lg text-text/80 leading-relaxed mb-6">
                  Miscela per intonaco che crea una membrana impermeabile dopo l&apos;applicazione. Ideale per proteggere le pareti dall&apos;umidità di risalita e dalle infiltrazioni d&apos;acqua.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Impermeabilizzazione totale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Anti-umidità di risalita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Durabilità garantita</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-background to-white p-10 rounded-3xl shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cta/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-cta" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-5">Pannelli in Fibra di Basalto</h3>
                <p className="text-lg text-text/80 leading-relaxed mb-6">
                  Soluzione innovativa per l&apos;isolamento termico e acustico degli edifici. Materiale naturale, resistente al fuoco e completamente riciclabile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Isolamento termico superiore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Assorbimento acustico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Materiale naturale e riciclabile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <span className="text-text/70">Resistente al fuoco</span>
                  </li>
                </ul>
              </div>
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
