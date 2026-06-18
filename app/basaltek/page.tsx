'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Shield, Flame, Leaf, Zap, Droplets, Layers, CheckCircle, Phone } from 'lucide-react'

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
      <section className="relative pt-48 lg:pt-56 pb-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/basaltek-main.jpg"
            alt="Basaltek Technology"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white text-emerald-900 px-6 py-2 rounded-full font-bold uppercase tracking-widest mb-6 animate-fade-in">
            Il Futuro dell'Edilizia
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">BASALTEK</h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
            Sistemi costruttivi in fibra di basalto vulcanico: la rivoluzione sostenibile per la tua casa.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-24 bg-emerald-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-emerald-800">
               <Image
                src="/images/hero/basaltek-application.jpg"
                alt="Basaltek Application"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                 <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2">Concretezza</p>
                 <p className="text-2xl font-black">Applicazione Reale</p>
              </div>
            </div>
            <div>
              <span className="text-emerald-300 font-bold uppercase tracking-widest text-sm mb-4 block">Tecnologia Vulcanica</span>
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">Che Cos'è BASALTEK?</h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                BASALTEK è un materiale innovativo ottenuto dalla fusione della roccia vulcanica. Il risultato è una fibra ad altissime prestazioni, utilizzata per creare pannelli isolanti, reti di rinforzo e tessuti strutturali.
              </p>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A differenza della lana di vetro o della lana di roccia tradizionale, la fibra di basalto non è irritante, è completamente naturale e offre una resistenza meccanica paragonabile al carbonio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Incombustibile Classe A1',
                  'Bio-Edilizia Certificata',
                  'Inerte alla Corrosione',
                  'Isolamento Acustico 10/10'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">Proprietà Uniche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-left group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-emerald-900 mb-4">{feature.title}</h3>
                <p className="text-text/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materiali Innovativi */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">La Nostra gamma</span>
          <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-16">Materiali Innovativi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-emerald-50 p-10 rounded-[2.5rem] border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-emerald-100">
                <Image src="/images/logos/basaltek-material.jpg" alt="Basaltek Material" fill className="object-contain p-4" />
              </div>
              <h3 className="text-3xl font-black text-emerald-900 mb-4">BASALTEK</h3>
              <p className="text-text/70 leading-relaxed mb-6">Fibra di basalto vulcanico per isolamento termico, acustico e impermeabilizzazione. Materiale incombustibile, naturale e completamente riciclabile.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Incombustibile', 'Bio-Edilizia', 'Isolamento Termico', 'Impermeabile'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-8 bg-white">
                <Image src="/images/logos/izonil.png" alt="IZONIL" fill className="object-contain p-4" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">IZONIL</h3>
              <p className="text-text/70 leading-relaxed mb-6">Materiale innovativo a base di fibra di basalto per il ripristino strutturale e la protezione dall'umidità. Resistenza meccanica paragonabile al carbonio.</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Antiumidità', 'Ripristino Strutturale', 'Resistente', 'Naturale'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-700 text-white text-xs font-bold rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Scegli la Forza del Vulcano</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Siamo tra i pochi applicatori autorizzati BASALTEK® certificati. Contattaci per una consulenza tecnica gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+393463482617"
              className="bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-emerald-500 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20"
            >
              <Phone className="w-6 h-6" />
              Chiama Ora
            </a>
            <button
              className="bg-white text-emerald-950 px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/90 hover:scale-105 transition-all shadow-2xl shadow-white/10"
            >
              Sopralluogo Gratuito
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
