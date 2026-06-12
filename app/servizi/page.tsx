'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Home, Shield, Hammer, Layers, Award, Key, ArrowRight } from 'lucide-react'
import ServiceModal from '@/components/ServiceModal'

export default function ServiziPage() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      id: 'restauri',
      icon: Home,
      title: 'Restauri e Pitture Edili',
      description: 'Offriamo soluzioni complete per il restauro e la pittura di edifici storici e moderni. Utilizziamo tecniche all\'avanguardia e materiali di altissima qualità per garantire risultati duraturi ed esteticamente impeccabili.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.10 PM (1).jpeg',
      features: ['Facciate esterne', 'Pitture interne', 'Materiali certificati'],
      details: [
        'Ripristino intonaci degradati',
        'Trattamenti anti-muffa e anti-umidità',
        'Pitture decorative e protettive',
        'Consulenza cromatica personalizzata'
      ]
    },
    {
      id: 'isolamenti',
      icon: Shield,
      title: 'Isolamenti e Cappotti',
      description: 'L\'isolamento termico è fondamentale per il comfort abitativo e il risparmio energetico. Realizziamo sistemi a cappotto e isolamenti a basso spessore utilizzando materiali innovativi.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.24 PM (1).jpeg',
      features: ['Cappotti termici', 'Anti-umidità', 'Risparmio energetico'],
      details: [
        'Isolamento pareti esterne ed interne',
        'Sistemi a basso spessore per interni',
        'Certificazione energetica post-intervento',
        'Utilizzo di pannelli in fibra di basalto'
      ]
    },
    {
      id: 'tetti',
      icon: Hammer,
      title: 'Rifacimento Tetti e Terrazzi',
      description: 'Proteggiamo la tua casa dalle intemperie con interventi specializzati su tetti e terrazzi. Dalla riparazione localizzata al rifacimento completo, garantiamo impermeabilizzazione totale.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.16 PM (2).jpeg',
      features: ['Tetti tradizionali', 'Impermeabilizzazioni', 'Lattoneria'],
      details: [
        'Posa tegole e coppi',
        'Impermeabilizzazione terrazzi con resine',
        'Sostituzione grondaie e pluviali',
        'Isolamento ventilato per sottotetti'
      ]
    },
    {
      id: 'cartongessi',
      icon: Layers,
      title: 'Cartongessi e Contropareti',
      description: 'Il cartongesso permette di ridisegnare gli spazi in modo rapido e pulito. Realizziamo contropareti isolanti, controsoffitti moderni e soluzioni acustiche per ogni ambiente.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.26 PM (2).jpeg',
      features: ['Pareti divisorie', 'Controsoffitti', 'Isolamento acustico'],
      details: [
        'Pareti curve e design personalizzato',
        'Integrazione illuminazione LED',
        'Controsoffitti radianti e acustici',
        'Lavorazioni ignifughe e idrorepellenti'
      ]
    },
    {
      id: 'materiali',
      icon: Award,
      title: 'Materiali Innovativi in Esclusiva',
      description: 'Siamo partner ufficiali per la posa di materiali rivoluzionari come BASALTEK e IZONIL. Soluzioni vulcaniche naturali per un\'edilizia sana, sicura e sostenibile.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif',
      features: ['IZONIL impermeabile', 'Fibra di basalto', 'Certificati'],
      details: [
        'Applicazione intonaci deumidificanti IZONIL',
        'Rinforzi strutturali in fibra di basalto',
        'Pannelli isolanti incombustibili',
        'Materiali a km zero ed eco-compatibili'
      ]
    },
    {
      id: 'ristrutturazioni',
      icon: Key,
      title: 'Ristrutturazioni Complete Chiavi in Mano',
      description: 'Ci occupiamo di tutto noi. Dalla progettazione alla scelta dei materiali, fino alla consegna chiavi in mano. Un unico referente per una ristrutturazione senza stress.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.10 PM.jpeg',
      features: ['Chiavi in mano', 'Supervisione totale', 'Materiali certificati'],
      details: [
        'Coordinamento maestranze',
        'Gestione pratiche edilizie e bonus',
        'Rifacimento impianti e finiture',
        'Rispetto rigoroso dei tempi e budget'
      ]
    },
  ]

  const openServiceModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="pt-48 lg:pt-56 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">I Nostri Servizi</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Soluzioni complete per restauri, isolamenti, rifacimenti e ristrutturazioni. Oltre 30 anni di esperienza al tuo servizio.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => openServiceModal(service)}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cta/30 hover:-translate-y-2 cursor-pointer"
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
                  <p className="text-text/70 mb-5 leading-relaxed">{service.description.substring(0, 100)}...</p>
                  <div className="flex items-center gap-2 text-cta font-semibold group-hover:gap-3 transition-all duration-300">
                    Scopri di più
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService} 
      />
    </>
  )
}
