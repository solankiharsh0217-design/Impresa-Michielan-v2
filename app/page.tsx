'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Building2, Award, TrendingUp, Phone, Mail, Star, Shield, Clock, ThumbsUp, Zap, Home as HomeIcon } from 'lucide-react'
import ContactModal from '@/components/ContactModal'

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Building2, value: '30+', label: 'Anni di Esperienza', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '500+', label: 'Clienti Soddisfatti', color: 'from-green-500 to-green-600' },
    { icon: Award, value: '1000+', label: 'Progetti Completati', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: '100%', label: 'Qualità Garantita', color: 'from-orange-500 to-orange-600' },
  ]

  const services = [
    {
      title: 'Restauri e Pitture Edili',
      description: 'Rinnovamento facciate con materiali innovativi per estetica, isolamento ed efficienza energetica',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/12/impresa-michielan.jpeg',
      link: '/servizi/restauri',
      features: ['Facciate esterne', 'Pitture interne', 'Materiali certificati'],
      icon: HomeIcon
    },
    {
      title: 'Isolamenti e Cappotti',
      description: 'Soluzioni a basso spessore per isolamento termico, risparmio energetico e comfort abitativo',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-casetta.png',
      link: '/servizi/isolamenti',
      features: ['Cappotti termici', 'Anti-umidità', 'Risparmio energetico'],
      icon: Shield
    },
    {
      title: 'Rifacimento Tetti',
      description: 'Ristrutturazione completa con tegole, coppi o lamiera coibentata e impermeabilizzazioni',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg',
      link: '/servizi/tetti',
      features: ['Tetti tradizionali', 'Impermeabilizzazioni', 'Lattoneria'],
      icon: HomeIcon
    },
    {
      title: 'Cartongessi',
      description: 'Pareti divisorie, controsoffitti e soluzioni acustiche per spazi moderni e funzionali',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti.jpg',
      link: '/servizi/cartongessi',
      features: ['Pareti divisorie', 'Controsoffitti', 'Isolamento acustico'],
      icon: HomeIcon
    },
    {
      title: 'Materiali Innovativi',
      description: 'IZONIL e pannelli in fibra di basalto per un ambiente salubre e sostenibile',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif',
      link: '/servizi/materiali',
      features: ['IZONIL impermeabile', 'Fibra di basalto', 'Certificati'],
      icon: Award
    },
    {
      title: 'Ristrutturazioni Complete',
      description: 'Progetti chiavi in mano con supervisione totale dalla progettazione alla consegna',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/SFONDO-HOME-IMPRESA-MICHIELAN.jpg',
      link: '/servizi/ristrutturazioni',
      features: ['Chiavi in mano', 'Supervisione totale', 'Materiali certificati'],
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

  const urgencyReasons = [
    'Sopralluogo gratuito disponibile questa settimana',
    'Preventivo dettagliato entro 24 ore',
    'Materiali certificati con garanzia',
    'Pagamento flessibile e trasparente'
  ]

  return (
    <>
      {/* Hero Section - Conversion Focused */}
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
        
        <div className="relative z-10 container mx-auto px-4 py-8 mt-20 max-h-screen overflow-y-auto">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-block bg-cta/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-cta/30">
              <span className="text-xs md:text-sm font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Oltre 30 anni di eccellenza • 500+ clienti soddisfatti
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Trasformiamo<br />la Tua Casa
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-3 text-white/90 font-light">
              in un ambiente salubre e sostenibile
            </p>
            <p className="text-base md:text-lg mb-6 text-white/80 max-w-2xl leading-relaxed">
              Impresa edile certificata SOA23 specializzata in restauri, isolamenti e ristrutturazioni complete.
            </p>
            
            {/* Urgency Elements */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/20">
              <p className="text-base font-semibold mb-3">🎯 Offerta Limitata:</p>
              <ul className="space-y-1.5">
                {urgencyReasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setContactModalOpen(true)}
                className="group bg-cta hover:bg-cta/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 animate-pulse"
              >
                <Phone className="w-5 h-5" />
                Sopralluogo GRATUITO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+393463482617"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Chiama Ora
              </a>
            </div>
            
            <p className="text-xs md:text-sm text-white/60 mt-4">✓ Nessun impegno • ✓ Preventivo gratuito • ✓ Risposta entro 24h</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
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
              <span className="font-semibold">500+ Recensioni 5 Stelle</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-cta" />
              <span className="font-semibold">Risposta in 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-background">
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

      {/* Services Grid */}
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
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cta/30 hover:-translate-y-2 animate-fade-in-up"
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
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-text/70 mb-6 leading-relaxed">{service.description}</p>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Perché Scegliere Impresa Michielan</h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              La nostra esperienza e dedizione al servizio dei nostri clienti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-background to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Cosa Dicono i Nostri Clienti</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
              <div className="flex gap-2 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-2xl text-white mb-8 italic leading-relaxed">&ldquo;{testimonials[currentTestimonial].text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-xl">{testimonials[currentTestimonial].name}</p>
                  <p className="text-white/70">{testimonials[currentTestimonial].location}</p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-white w-8' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Conversion Focused */}
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
    </>
  )
}
