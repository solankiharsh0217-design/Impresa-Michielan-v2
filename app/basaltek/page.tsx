'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Shield, Flame, Leaf, Zap, Droplets, Layers, ArrowRight, CheckCircle, Phone } from 'lucide-react'

export default function BasaltekPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    { 
      icon: Droplets, 
      title: 'Impermeabilità Totale', 
      description: 'Protezione definitiva dall\'umidità e dalle infiltrazioni d\'acqua grazie alla natura idrofoba della fibra di basalto.' 
    },
    { 
      icon: Shield, 
      title: 'Isolamento Termico', 
      description: 'Riduce i consumi energetici fino al 40% grazie a un coefficiente di isolamento superiore ai materiali tradizionali.' 
    },
    { 
      icon: Flame, 
      title: 'Resistenza al Fuoco', 
      description: 'Classificazione A1: materiale incombustibile che garantisce la massima sicurezza in caso di incendio.' 
    },
    { 
      icon: Leaf, 
      title: 'Eco-Sostenibile', 
      description: 'Origine vulcanica naturale, 100% riciclabile e a bassissima impronta carbonica durante la produzione.' 
    },
    { 
      icon: Zap, 
      title: 'Durata Eccezionale', 
      description: 'Resiste a sbalzi termici estremi (da -200°C a +700°C) senza deteriorarsi o perdere proprietà meccaniche.' 
    },
    { 
      icon: Layers, 
      title: 'Ultra Leggero', 
      description: 'Quattro volte più leggero dell\'acciaio ma con una resistenza alla trazione superiore, ideale per rinforzi strutturali.' 
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-48 lg:pt-56 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/WhatsApp Image 2026-06-11 at 10.50.25 PM.jpeg"
            alt="Basaltek Material"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest mb-6 animate-fade-in">
            Il Futuro dell'Edilizia
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">BASALTEK</h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
            Sistemi costruttivi in fibra di basalto vulcanico: la rivoluzione sostenibile per la tua casa.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif"
                alt="Basaltek Technology"
                fill
                className="object-contain p-12 bg-gray-50"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Cos'è Basaltek?</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                BASALTEK è un materiale innovativo ottenuto dalla fusione della roccia vulcanica. Il risultato è una fibra ad altissime prestazioni, utilizzata per creare pannelli isolanti, reti di rinforzo e tessuti strutturali.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A differenza della lana di vetro o della lana di roccia tradizionale, la fibra di basalto non è irritante, è completamente naturale e offre una resistenza meccanica paragonabile al carbonio ma a un costo molto più accessibile.
              </p>
              <div className="space-y-4">
                {[
                  'Incombustibile e resistente al fuoco',
                  'Certificato per la bio-edilizia',
                  'Inerte agli agenti chimici e alla corrosione',
                  'Eccellente isolamento acustico'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Card: BASALTEK */}
            <div className="bg-black p-10 rounded-[3rem] shadow-xl border-2 border-emerald-500/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-wider">
                Flagship Product
              </div>
              <div className="relative w-32 h-32 mb-8 mx-auto">
                <Image 
                  src="https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif" 
                  alt="Basaltek" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 text-center">BASALTEK</h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed text-center">
                Soluzione innovativa per l&apos;isolamento termico e acustico degli edifici. Interamente in fibra di basalto naturale, è un materiale incombustibile e completamente riciclabile.
              </p>
              <ul className="space-y-4">
                {[
                  'Isolamento termico superiore',
                  'Assorbimento acustico',
                  'Inertità chimica e biologica',
                  'Resistenza al fuoco'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-semibold">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card: IZONIL */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-sky-500/20 relative overflow-hidden group hover:border-sky-500/40 transition-all duration-300">
              <div className="relative w-32 h-32 mb-8 mx-auto">
                <Image 
                  src="https://www.impresamichielan.com/wp-content/uploads/2025/11/izonilogo.avif" 
                  alt="Izonil" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-6 text-center">IZONIL</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
                Intonaco secco idrofobo ed impermeabile, ideale per l&apos;eliminazione definitiva dei problemi di umidità di risalita nelle pareti, garantendo traspirabilità totale.
              </p>
              <ul className="space-y-4">
                {[
                  'Impermeabilità totale',
                  'Elimina umidità di risalita',
                  'Traspirabilità elevata',
                  'Facilità di applicazione'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                    <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Scegli la Sicurezza del Basalto</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Siamo tra i pochi applicatori autorizzati BASALTEK in Italia. Contattaci per scoprire come integrare questo materiale nel tuo prossimo progetto.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+393463482617"
              className="bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-emerald-500 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20"
            >
              <Phone className="w-6 h-6" />
              Chiamaci Ora
            </a>
            <button
              className="bg-white text-emerald-950 px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/90 hover:scale-105 transition-all shadow-2xl shadow-white/10"
            >
              Richiedi Preventivo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
