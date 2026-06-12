'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Building2, Award, TrendingUp, Phone, Star, Shield, Clock, ThumbsUp, Zap, Home as HomeIcon, Flame, Leaf, Droplets, Layers } from 'lucide-react'
import ContactModal from '@/components/ContactModal'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ServiceModal from '@/components/ServiceModal'

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stats = [
    { icon: Building2, value: '30+', label: 'Anni di Esperienza', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: 'Numerose', label: 'Recensioni a 5 stelle', color: 'from-green-500 to-green-600' },
    { icon: Award, value: '1000+', label: 'Progetti Completati', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: '100%', label: 'Qualità Garantita', color: 'from-orange-500 to-orange-600' },
  ]

  const services = [
    {
      id: 'restauri',
      title: 'Restauri e Pitture Edili',
      description: 'Offriamo soluzioni complete per il restauro e la pittura di edifici storici e moderni. Utilizziamo tecniche all\'avanguardia e materiali di altissima qualità per garantire risultati duraturi ed esteticamente impeccabili.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.10 PM (1).jpeg',
      features: ['Facciate esterne', 'Pitture interne', 'Materiali certificati'],
      details: [
        'Ripristino intonaci degradati',
        'Trattamenti anti-muffa e anti-umidità',
        'Pitture decorative e protettive',
        'Consulenza cromatica personalizzata'
      ],
      icon: HomeIcon
    },
    {
      id: 'isolamenti',
      title: 'Isolamenti e Cappotti',
      description: 'L\'isolamento termico è fondamentale per il comfort abitativo e il risparmio energetico. Realizziamo sistemi a cappotto e isolamenti a basso spessore utilizzando materiali innovativi.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.24 PM (1).jpeg',
      features: ['Cappotti termici', 'Anti-umidità', 'Risparmio energetico'],
      details: [
        'Isolamento pareti esterne ed interne',
        'Sistemi a basso spessore per interni',
        'Certificazione energetica post-intervento',
        'Utilizzo di pannelli in fibra di basalto'
      ],
      icon: Shield
    },
    {
      id: 'tetti',
      title: 'Rifacimento Tetti',
      description: 'Proteggiamo la tua casa dalle intemperie con interventi specializzati su tetti e terrazzi. Dalla riparazione localizzata al rifacimento completo, garantiamo impermeabilizzazione totale.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.16 PM (2).jpeg',
      features: ['Tetti tradizionali', 'Impermeabilizzazioni', 'Lattoneria'],
      details: [
        'Posa tegole e coppi',
        'Impermeabilizzazione terrazzi con resine',
        'Sostituzione grondaie e pluviali',
        'Isolamento ventilato per sottotetti'
      ],
      icon: HomeIcon
    },
    {
      id: 'cartongessi',
      title: 'Cartongessi',
      description: 'Il cartongesso permette di ridisegnare gli spazi in modo rapido e pulito. Realizziamo contropareti isolanti, controsoffitti moderni e soluzioni acustiche per ogni ambiente.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.26 PM (2).jpeg',
      features: ['Pareti divisorie', 'Controsoffitti', 'Isolamento acustico'],
      details: [
        'Pareti curve e design personalizzato',
        'Integrazione illuminazione LED',
        'Controsoffitti radianti e acustici',
        'Lavorazioni ignifughe e idrorepellenti'
      ],
      icon: HomeIcon
    },
    {
      id: 'materiali',
      title: 'Materiali Innovativi',
      description: 'Pannelli in fibra di basalto BASALTEK e intonaci IZONIL per un ambiente salubre e sostenibile.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.25 PM.jpeg',
      features: ['Fibra di basalto', 'IZONIL impermeabile', 'Certificati'],
      details: [
        'Sistemi in fibra di basalto BASALTEK',
        'Applicazione intonaci deumidificanti IZONIL',
        'Pannelli isolanti incombustibili',
        'Materiali a km zero ed eco-compatibili'
      ],
      icon: Award
    },
    {
      id: 'ristrutturazioni',
      title: 'Ristrutturazioni Complete',
      description: 'Ci occupiamo di tutto noi. Dalla progettazione alla scelta dei materiali, fino alla consegna chiavi in mano. Un unico referente per una ristrutturazione senza stress.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.10 PM.jpeg',
      features: ['Chiavi in mano', 'Supervisione totale', 'Materiali certificati'],
      details: [
        'Coordinamento maestranze',
        'Gestione pratiche edilizie e bonus',
        'Rifacimento impianti e finiture',
        'Rispetto rigoroso dei tempi e budget'
      ],
      icon: Award
    },
  ]

  const testimonials = [
    {
      name: 'Miatto Massimiliano',
      location: 'Gardigiano',
      text: 'Il titolare Sig. Donato si è dimostrato molto attento e disponibile alle nostre necessità, utilizzando personale competente e mezzi idonei per portare a termine i lavori nei tempi richiesti.',
      rating: 5
    },
    {
      name: 'Rizzato Michele',
      location: 'Olmo di Martellago',
      text: 'Siamo stati seguiti da persone competenti e preparate. È stato rispettato il preventivo che ci è stato fatto, sia come costi che come tempi di inizio e fine lavori.',
      rating: 5
    },
    {
      name: 'Crivellari Avellino',
      location: 'Calcroci di Camponogara',
      text: 'Il titolare Donato è molto disponibile e competente. Ho particolarmente apprezzato la sua presenza quasi costante in cantiere per dirigere e controllare i lavori.',
      rating: 5
    },
    {
      name: 'Zottarel Lina e Barzan Danilo',
      location: 'Treviso',
      text: 'I risultati sono evidenti: il confort è molto migliorato sia per la temperatura sia per l\'aria più salubre. SI RESPIRA UNA ATMOSFERA DI BENESSERE OVUNQUE.',
      rating: 5
    },
  ]

  const whyChooseUs = [
    { icon: Clock, title: 'Puntualità Garantita', description: 'Rispetto dei tempi concordati in ogni progetto' },
    { icon: Shield, title: 'Materiali Certificati', description: 'Solo prodotti di qualità con certificazioni' },
    { icon: Users, title: 'Team Esperto', description: 'Professionisti con oltre 30 anni di esperienza' },
    { icon: ThumbsUp, title: 'Assistenza Post-Lavoro', description: 'Supporto continuo anche dopo la consegna' },
    { icon: Award, title: 'Certificazione SOA23', description: 'Garanzia di qualità e professionalità' },
    { icon: Zap, title: 'Soluzioni Innovative', description: 'Tecnologie e materiali all\'avanguardia' },
  ]

  const basaltekFeatures = [
    { icon: Droplets, title: 'Impermeabilità Totale', description: 'Protezione definitiva dall\'umidità e dalle infiltrazioni d\'acqua' },
    { icon: Shield, title: 'Isolamento Termico', description: 'Riduce i consumi energetici fino al 40% grazie all\'isolamento superiore' },
    { icon: Flame, title: 'Resistenza al Fuoco', description: 'Classificazione A1: materiale incombustibile per la massima sicurezza' },
    { icon: Leaf, title: 'Eco-Sostenibile', description: 'Origine vulcanica naturale, 100% riciclabile e a bassa impronta carbonica' },
    { icon: Zap, title: 'Durata Eccezionale', description: 'Resiste da -200°C a +700°C senza deteriorarsi nel tempo' },
    { icon: Layers, title: 'Ultra Leggero', description: 'Quattro volte più leggero dell\'acciaio, ideale per qualsiasi struttura' },
  ]

  const AUTHENTIC_PROJECTS = [
    {
      title: 'Restauro Facciate',
      description: 'Risanamento completo delle pareti esterne e nuova tinteggiatura protettiva.',
      imageBefore: '/images/WhatsApp Image 2026-06-11 at 10.50.14 PM (2).jpeg',
      imageAfter: '/images/WhatsApp Image 2026-06-11 at 10.50.14 PM.jpeg',
      tag: 'Restauro'
    },
    {
      title: 'Rifacimento Tetto',
      description: 'Sostituzione integrale della copertura con isolamento e nuove tegole.',
      imageBefore: '/images/WhatsApp Image 2026-06-11 at 10.50.18 PM (2).jpeg',
      imageAfter: '/images/WhatsApp Image 2026-06-11 at 10.50.16 PM (2).jpeg',
      tag: 'Tetto'
    },
    {
      title: 'Impermeabilizzazione',
      description: 'Rifacimento superfici esterne con sistemi impermeabili e nuova pavimentazione.',
      imageBefore: '/images/WhatsApp Image 2026-06-11 at 10.50.20 PM (2).jpeg',
      imageAfter: '/images/WhatsApp Image 2026-06-11 at 10.50.20 PM.jpeg',
      tag: 'Terrazza'
    },
  ]

  const openServiceModal = (service: any) => {
    setSelectedService(service)
    setServiceModalOpen(true)
  }

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.impresamichielan.com/wp-content/uploads/2025/11/SFONDO-HOME-IMPRESA-MICHIELAN.jpg"
            alt="Impresa Michielan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 mt-48 lg:mt-56 max-h-screen overflow-y-auto">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Headline — made larger per client request */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight">
              Trasformiamo<br />la Tua Casa
            </h1>
            {/* Subtitle — also enlarged */}
            <p className="text-3xl md:text-4xl mb-8 text-white/90 font-light">
              in un ambiente salubre e sostenibile
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl leading-relaxed">
              Oltre <strong className="font-bold text-white">30 anni di esperienza</strong> in restauri, isolamenti e ristrutturazioni complete con materiali certificati.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => setContactModalOpen(true)}
                className="group bg-cta hover:bg-cta/90 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Sopralluogo Gratuito
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+393463482617"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 border-2 border-white/30 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                +39 346 348 2617
              </a>
            </div>

            <p className="text-sm text-white/70">✓ Preventivo gratuito • ✓ Risposta in 24h • ✓ Certificazione SOA23</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-cta" />
              <span className="font-semibold">Certificazione SOA23</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-cta" />
              <span className="font-semibold">Materiali Certificati</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">Numerose Recensioni 5 Stelle</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-cta" />
              <span className="font-semibold">Risposta in 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Grid (moved before Stats) ───────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">I Nostri Servizi</h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza edile con materiali certificati e tecnologie innovative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => openServiceModal(service)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cta/30 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-text/70 mb-6 leading-relaxed text-lg">{service.description.substring(0, 100)}...</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text/60">
                        <CheckCircle className="w-4 h-4 text-cta flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-cta font-semibold group-hover:gap-3 transition-all">
                    Scopri di più
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials (moved immediately after Services) ──────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">Cosa Dicono i Nostri Clienti</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 flex flex-col h-full hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl text-white mb-8 italic leading-relaxed flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="font-bold text-white text-xl">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Prima e Dopo ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-cta font-semibold text-lg uppercase tracking-widest mb-3 block">Risultati Reali</span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Prima e Dopo</h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Ogni progetto è una storia di trasformazione. Scopri come rinnoviamo facciate, tetti e strutture con risultati visibili e duraturi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {AUTHENTIC_PROJECTS.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <BeforeAfterSlider
                  beforeImage={item.imageBefore}
                  afterImage={item.imageAfter}
                  title={item.title}
                />
                <div className="mt-4 text-center">
                  <p className="text-text/70 text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
                  <div className="mt-3 inline-block bg-cta/10 text-cta text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/opere"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Vedi tutte le opere
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Perché Scegliere Impresa Michielan</h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              La nostra esperienza e dedizione al servizio dei nostri clienti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cta/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-cta" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats (moved after Why Choose Us) ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">I Numeri Parlano Chiaro</h2>
            <p className="text-xl text-text/70">La fiducia dei nostri clienti è il nostro successo</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-text/70 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BASALTEK Section ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-black relative overflow-hidden">

        {/* Subtle decorative emerald/blue blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-600/40 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left — headline + description + CTAs */}
              <div className="text-white">
                <span className="inline-block text-emerald-500 font-semibold text-sm uppercase tracking-[0.2em] mb-5 border border-emerald-500/50 px-4 py-1.5 rounded-full">
                  Materiale Esclusivo
                </span>
                <h2 className="text-7xl md:text-8xl font-black mb-4 leading-none tracking-tight text-white">
                  BASALTEK
                </h2>
                <p className="text-2xl text-white/85 mb-6 font-light">
                  La fibra di basalto per l&apos;edilizia del futuro
                </p>
                <p className="text-lg text-white/75 mb-10 leading-relaxed">
                  BASALTEK è un sistema costruttivo rivoluzionario in fibra di basalto vulcanico. Superiore all&apos;acciaio in resistenza, quattro volte più leggero, incombustibile e completamente eco-sostenibile. Impresa Michielan è uno dei pochi applicatori certificati nella provincia di Venezia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/basaltek"
                    className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-500 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/40"
                  >
                    Scopri BASALTEK
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/70 hover:scale-105 transition-all duration-300"
                  >
                    Richiedi Informazioni
                  </button>
                </div>
              </div>

              {/* Right — feature grid */}
              <div className="grid grid-cols-2 gap-4">
                {basaltekFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/8 p-6 rounded-2xl border border-white/15 hover:bg-white/12 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-emerald-500/25 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/40 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2 text-sm">{feature.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-r from-cta to-cta/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Inizia il Tuo Progetto Oggi</h2>
          <p className="text-2xl mb-4 max-w-2xl mx-auto text-white/90">
            Richiedi un sopralluogo gratuito e senza impegno
          </p>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
            I nostri esperti valuteranno le tue esigenze e ti proporranno la soluzione migliore. Preventivo dettagliato entro 24 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <button
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-cta px-12 py-6 rounded-xl text-xl font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Sopralluogo Gratuito
            </button>
            <a
              href="tel:+393463482617"
              className="bg-primary text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              +39 346 348 2617
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sopralluogo gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Preventivo in 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Nessun impegno</span>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <ServiceModal 
        isOpen={serviceModalOpen} 
        onClose={() => setServiceModalOpen(false)} 
        service={selectedService} 
      />
    </>
  )
}
