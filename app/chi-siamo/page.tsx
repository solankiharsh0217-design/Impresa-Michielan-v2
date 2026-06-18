'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function ChiSiamoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    { icon: Award, title: 'Qualità', description: 'Materiali certificati e lavorazioni di alta qualità per risultati duraturi' },
    { icon: Users, title: 'Professionalità', description: 'Team esperto e qualificato con oltre 30 anni di esperienza nel settore' },
    { icon: Target, title: 'Precisione', description: 'Attenzione ai dettagli e rispetto dei tempi concordati' },
    { icon: Heart, title: 'Passione', description: 'Dedizione e cura in ogni progetto, grande o piccolo che sia' }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/hero/hero-about.jpg"
          alt="Impresa Michielan - Chi Siamo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center mt-48 lg:mt-56">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Una storia di famiglia, passione e dedizione al lavoro ben fatto</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <span className="text-cta font-bold uppercase tracking-[0.2em] text-sm mb-4 block">La Nostra Storia</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Oltre 30 Anni di Eccellenza</h2>
                <p className="text-xl text-text/80 mb-6 leading-relaxed">
                  Impresa Michielan è un&apos;azienda edile a conduzione familiare con oltre 30 anni di esperienza nel settore delle costruzioni e ristrutturazioni. Fondata da Donato Michielan, l&apos;impresa si è affermata nel territorio di Scorzè e provincia di Venezia come punto di riferimento per restauri, isolamenti termici e rifacimento tetti.
                </p>
                <p className="text-xl text-text/80 leading-relaxed">
                  La nostra filosofia si basa su tre pilastri fondamentali: qualità dei materiali, professionalità nell&apos;esecuzione e presenza costante in cantiere. Ogni progetto è seguito personalmente dal titolare per garantire risultati eccellenti e la massima soddisfazione del cliente.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-background h-[500px]">
                  <Image
                    src="/images/gallery/restauri/restauri-03.jpg"
                    alt="Impresa Michielan - Operatività e Storia"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-cta text-white p-8 rounded-3xl shadow-xl hidden md:block">
                  <p className="text-4xl font-black mb-1">30+</p>
                  <p className="text-sm font-bold uppercase tracking-wider">Anni di Attività</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-16">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cta/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-cta" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">La Nostra Leadership</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Guidati dal fondatore Donato Michielan, il nostro team è composto da professionisti esperti e qualificati. Donato è sempre presente in cantiere per supervisionare personalmente ogni fase dei lavori, garantendo la massima qualità e il rispetto degli standard più elevati.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-black mb-3 text-white">Donato Michielan</h3>
              <p className="text-xl text-white/70 mb-4 font-bold uppercase tracking-widest text-sm">Fondatore e Titolare</p>
              <p className="text-white/80 leading-relaxed text-lg">
                Con oltre 30 anni di esperienza nel settore edile, Donato ha costruito la reputazione di Impresa Michielan sulla base di professionalità, onestà e dedizione al lavoro. La sua presenza costante in cantiere è garanzia di qualità per ogni cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Overhaul */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-background to-white p-12 lg:p-20 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="w-full aspect-square bg-white rounded-[2rem] shadow-inner flex items-center justify-center p-8 border border-gray-50">
                   <Award className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <span className="text-cta font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Massima Qualità Certificata</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Certificazione SOA23</h2>
                <p className="text-2xl font-bold text-primary/80 mb-6">Categoria OG1 - Edifici Civili e Industriali</p>
                <p className="text-xl text-text/70 leading-relaxed mb-8">
                  La certificazione SOA attesta la nostra capacità tecnica, organizzativa ed economico-finanziaria per l'esecuzione di lavori di qualità, sia nel settore pubblico che privato. È il sigillo della nostra affidabilità.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-primary/5 px-6 py-3 rounded-xl border border-primary/10 font-bold text-primary">✓ Qualità Garantita</div>
                  <div className="bg-primary/5 px-6 py-3 rounded-xl border border-primary/10 font-bold text-primary">✓ Affidabilità Tecnica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
