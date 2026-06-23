'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, Phone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfter {
  id: string
  title: string
  category: string
  location: string
  description: string
  before: string
  after: string
}

interface MultiStage {
  id: string
  title: string
  category: string
  location: string
  description: string
  stages: string[]
  stageLabels: string[]
}

export default function OperePage() {
  const [filter, setFilter] = useState('All')
  const [activeStages, setActiveStages] = useState<Record<string, number>>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['All', 'Trasformazioni', 'Prima e Dopo', 'Tetti', 'Restauri', 'Interni']

  const multiStages: MultiStage[] = [
    {
      id: 'ms1',
      title: 'Ristrutturazione Bagno Integrale',
      category: 'Interni',
      location: 'Ponzano (TV)',
      description: 'Evoluzione completa di un bagno: dalla demolizione iniziale, alla posa dell\'impermeabilizzazione verde, alla piastrellatura di precisione, fino al risultato finale moderno.',
      stages: [
        '/images/transformations/bagno-ponzano/1-rovinato.jpg',
        '/images/transformations/bagno-ponzano/2-verde.jpg',
        '/images/transformations/bagno-ponzano/3-piastrelle.jpg',
        '/images/transformations/bagno-ponzano/4-finito.jpg'
      ],
      stageLabels: ['1. Demolizione', '2. Impermeabilizzazione', '3. Posa Piastrelle', '4. Risultato Finale']
    },
    {
      id: 'ms2',
      title: 'Isolamento e Finiture Interne',
      category: 'Interni',
      location: 'Martellago (VE)',
      description: 'Processo di riqualificazione interna: installazione pannelli Basaltek, preparazione superfici e tinteggiatura finale di pregio.',
      stages: [
        '/images/transformations/interni-martellago/1-basaltek.jpg',
        '/images/transformations/interni-martellago/2-preparazione.jpg',
        '/images/transformations/interni-martellago/3-finito.jpg'
      ],
      stageLabels: ['1. Basaltek', '2. Preparazione', '3. Finitura']
    }
  ]

  const beforeAfters: BeforeAfter[] = [
    {
      id: 'ba1',
      title: 'Idropulizia Facciate',
      category: 'Restauri',
      location: 'Spinea (VE)',
      description: 'Risanamento estetico profondo tramite idropulizia professionale.',
      before: '/images/before-after/idropulizia-before.jpg',
      after: '/images/before-after/idropulizia-after.jpg'
    },
    {
      id: 'ba2',
      title: 'Rifacimento Tetto in Tegole',
      category: 'Tetti',
      location: 'Spinea (VE)',
      description: 'Sostituzione e rifacimento del manto di copertura con nuove tegole e colmi.',
      before: '/images/before-after/idrolavaggio-before.jpg',
      after: '/images/before-after/idrolavaggio-after.jpg'
    },
    {
      id: 'ba3',
      title: 'Pavimentazione Esterna',
      category: 'Restauri',
      location: 'Treviso',
      description: 'Posa di pavimentazione in pietra su sottofondo grezzo.',
      before: '/images/before-after/pavimento-before.jpg',
      after: '/images/before-after/pavimento-after.jpg'
    },
    {
      id: 'ba4',
      title: 'Posa Pavimenti Interni',
      category: 'Interni',
      location: 'Maerne (VE)',
      description: 'Lavorazione di precisione con livellatori e risultato lucido finale.',
      before: '/images/before-after/maerne-pav-before.jpg',
      after: '/images/before-after/maerne-pav-after.jpg'
    },
    {
      id: 'ba5',
      title: 'Ristrutturazione Bagno Moderno',
      category: 'Interni',
      location: 'Maerne (VE)',
      description: 'Trasformazione radicale di un vecchio bagno in uno spazio di design con marmi scuri.',
      before: '/images/before-after/maerne-bath-before.jpg',
      after: '/images/before-after/maerne-bath-after.jpg'
    },
    {
      id: 'ba6',
      title: 'Isolamento Seminterrato',
      category: 'Interni',
      location: 'Ponzano (TV)',
      description: 'Risanamento pareti umide e finitura isolante.',
      before: '/images/before-after/ponzano-iso-before.jpg',
      after: '/images/before-after/ponzano-iso-after.jpg'
    },
    {
      id: 'ba7',
      title: 'Restauro Facciata e Tinteggiatura',
      category: 'Restauri',
      location: 'Scorzè (VE)',
      description: 'Ripristino intonaco e tinteggiatura finale protettiva di una facciata.',
      before: '/images/before-after/idropulizia-facciate-before.jpg',
      after: '/images/before-after/idropulizia-facciate-after.jpg'
    },
    {
      id: 'ba8',
      title: 'Tetto in Lamiera Grecata',
      category: 'Tetti',
      location: 'Treviso',
      description: 'Sostituzione tetto in lamiera grecata con isolamento termico.',
      before: '/images/before-after/lamiera-before.jpg',
      after: '/images/before-after/lamiera-after.jpg'
    },
    {
      id: 'ba9',
      title: 'Applicazione Cappotto Esterno',
      category: 'Restauri',
      location: 'Scorzè (VE)',
      description: 'Applicazione cappotto termico esterno con finitura a regola d\'arte.',
      before: '/images/before-after/cappotto-before.jpg',
      after: '/images/before-after/cappotto-after.jpg'
    }
  ]

  const handleStageChange = (id: string, index: number) => {
    setActiveStages(prev => ({ ...prev, [id]: index }))
  }

  const displayedMultiStages = multiStages.filter(ms => 
    filter === 'All' || 
    filter === 'Trasformazioni' || 
    ms.category === filter
  )

  const displayedBeforeAfters = beforeAfters.filter(ba => 
    filter === 'All' || 
    filter === 'Prima e Dopo' || 
    ba.category === filter
  )

  return (
    <>
      <section className="pt-48 lg:pt-56 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Le Nostre Opere</h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">Evoluzioni concrete del nostro impegno quotidiano.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                  filter === cat ? 'bg-cta text-white shadow-xl scale-105' : 'bg-white text-primary hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Multi-Stage Transformations */}
          {displayedMultiStages.length > 0 && (
            <div className="mb-32">
              <h2 className="text-4xl font-black text-primary mb-12 flex items-center gap-4">
                Trasformazioni in Fasi
                <span className="h-1 flex-grow bg-primary/10 rounded-full" />
              </h2>
              <div className="grid grid-cols-1 gap-20">
                {displayedMultiStages.map((ms) => {
                  const currentIndex = activeStages[ms.id] || 0
                  return (
                    <div key={ms.id} className="bg-white p-8 lg:p-12 rounded-[4rem] shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <span className="text-cta font-bold uppercase tracking-widest text-xs mb-3 block">{ms.location}</span>
                          <h3 className="text-4xl font-black text-primary mb-6">{ms.title}</h3>
                          <p className="text-xl text-text/70 leading-relaxed">{ms.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {ms.stageLabels.map((label, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleStageChange(ms.id, idx)}
                              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                                currentIndex === idx ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-background text-primary/40 hover:bg-primary/5'
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                        <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
                           <div className="w-12 h-12 bg-cta/10 rounded-full flex items-center justify-center">
                              <Phone className="w-6 h-6 text-cta" />
                           </div>
                           <div>
                              <p className="text-sm font-bold text-text/40 uppercase tracking-widest">Informazioni Tecniche</p>
                              <p className="text-lg font-black text-primary">+39 346 348 2617</p>
                           </div>
                        </div>
                      </div>
                      <div className="relative h-[500px] lg:h-auto rounded-[3rem] overflow-hidden group shadow-inner bg-gray-50">
                        <Image
                          src={ms.stages[currentIndex]}
                          alt={ms.stageLabels[currentIndex]}
                          fill
                          className="object-cover animate-fade-in"
                          key={currentIndex}
                        />
                        <div className="absolute top-6 left-6 bg-primary/80 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">
                          {ms.stageLabels[currentIndex]}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Before & After Pairs */}
          {displayedBeforeAfters.length > 0 && (
            <div>
              <h2 className="text-4xl font-black text-primary mb-12 flex items-center gap-4">
                Prima e Dopo
                <span className="h-1 flex-grow bg-primary/10 rounded-full" />
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {displayedBeforeAfters.map((ba) => (
                  <div key={ba.id} className="bg-white p-6 rounded-[3rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                       <div className="relative h-64 sm:w-1/2 rounded-2xl overflow-hidden shadow-inner bg-gray-50">
                          <Image src={ba.before} alt="Prima" fill className="object-cover" />
                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Prima</div>
                       </div>
                       <div className="relative h-64 sm:w-1/2 rounded-2xl overflow-hidden shadow-inner bg-gray-50">
                          <Image src={ba.after} alt="Dopo" fill className="object-cover" />
                          <div className="absolute top-4 right-4 bg-cta text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Dopo</div>
                       </div>
                    </div>
                    <div className="px-4">
                      <span className="text-cta font-bold uppercase tracking-widest text-[10px] mb-2 block">{ba.location}</span>
                      <h3 className="text-2xl font-black text-primary mb-3">{ba.title}</h3>
                      <p className="text-text/70 text-sm leading-relaxed">{ba.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
