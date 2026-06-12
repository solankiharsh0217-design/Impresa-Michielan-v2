'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react'

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
          src="https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg"
          alt="Chi Siamo"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Oltre 30 Anni di Esperienza</h2>
                <p className="text-xl text-text/80 mb-6 leading-relaxed">
                  Impresa Michielan è un&apos;azienda edile a conduzione familiare con oltre 30 anni di esperienza nel settore delle costruzioni e ristrutturazioni. Fondata da Donato Michielan, l&apos;impresa si è affermata nel territorio di Scorzè e provincia di Venezia come punto di riferimento per restauri, isolamenti termici, rifacimento tetti e ristrutturazioni complete.
                </p>
                <p className="text-xl text-text/80 leading-relaxed">
                  La nostra filosofia si basa su tre pilastri fondamentali: qualità dei materiali, professionalità nell&apos;esecuzione e presenza costante in cantiere. Ogni progetto è seguito personalmente dal titolare per garantire risultati eccellenti e la massima soddisfazione del cliente.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg"
                    alt="Impresa Michielan Team"
                    width={600}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
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
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Il Nostro Team</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Guidati dal fondatore Donato Michielan, il nostro team è composto da professionisti esperti e qualificati. Donato è sempre presente in cantiere per supervisionare personalmente ogni fase dei lavori, garantendo la massima qualità e il rispetto degli standard più elevati.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-3">Donato Michielan</h3>
              <p className="text-xl text-white/80 mb-4">Fondatore e Titolare</p>
              <p className="text-white/90 leading-relaxed">
                Con oltre 30 anni di esperienza nel settore edile, Donato ha costruito la reputazione di Impresa Michielan sulla base di professionalità, onestà e dedizione al lavoro. La sua presenza costante in cantiere è garanzia di qualità per ogni cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Certificazioni</h2>
            <div className="bg-gradient-to-br from-background to-white p-12 rounded-3xl shadow-xl inline-block">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/12/Logo_Soa23.jpg"
                alt="Certificazione SOA23"
                width={250}
                height={120}
                className="mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold text-primary mb-3">Certificazione SOA23</h3>
              <p className="text-xl text-text/80 mb-6">Categoria OG1 - Costruzione e manutenzione di edifici civili e industriali</p>
              <p className="text-text/70 max-w-2xl mx-auto leading-relaxed">
                La certificazione SOA attesta la nostra capacità tecnica, organizzativa ed economico-finanziaria per l'esecuzione di lavori pubblici e privati di qualità.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
