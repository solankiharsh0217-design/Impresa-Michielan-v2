'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  location: string
  description: string
  image: string
}

export default function OperePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects: Project[] = [
    {
      id: '1',
      title: 'Rifacimento Tetto Scorzè',
      category: 'tetti',
      location: 'Scorzè, Venezia',
      description: 'Rifacimento completo del tetto con nuove tegole, isolamento termico e impermeabilizzazione. Progetto realizzato con materiali di alta qualità e rispetto dei tempi concordati.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze-scaled.jpg',
    },
    {
      id: '2',
      title: 'Rifacimento Tetto Rio San Martino',
      category: 'tetti',
      location: 'Rio San Martino, Venezia',
      description: 'Ristrutturazione completa della copertura con installazione di nuove tegole e sistema di grondaie. Lavoro eseguito con precisione e attenzione ai dettagli.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-rio-san-martino-scaled.jpg',
    },
    {
      id: '3',
      title: 'Sistemazione Tetti',
      category: 'tetti',
      location: 'Provincia di Venezia',
      description: 'Intervento di manutenzione e sistemazione tetti con sostituzione tegole danneggiate e verifica della struttura portante.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/sistemazione-tetti-3.jpg',
    },
    {
      id: '4',
      title: 'Rifacimento Tetto con Coppi',
      category: 'tetti',
      location: 'Scorzè, Venezia',
      description: 'Rifacimento tetto tradizionale con coppi, isolamento termico e impermeabilizzazione completa. Rispetto dello stile architettonico originale.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze3-scaled.jpg',
    },
    {
      id: '5',
      title: 'Ristrutturazione Tetto Completa',
      category: 'tetti',
      location: 'Scorzè, Venezia',
      description: 'Progetto completo di ristrutturazione tetto con nuova struttura, isolamento e copertura. Lavoro eseguito in tempi rapidi con risultati eccellenti.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze5-scaled.jpg',
    },
    {
      id: '6',
      title: 'Rifacimento Tetto Moderno',
      category: 'tetti',
      location: 'Provincia di Venezia',
      description: 'Installazione di nuova copertura con tegole moderne, sistema di ventilazione e isolamento termico ad alte prestazioni.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-scorze6.jpg',
    },
    {
      id: '7',
      title: 'Impermeabilizzazione Terrazza',
      category: 'terrazze',
      location: 'Provincia di Venezia',
      description: 'Impermeabilizzazione completa di terrazza con materiali innovativi. Risoluzione definitiva dei problemi di infiltrazioni d\'acqua.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/Terrazze-riparate.jpg',
    },
    {
      id: '8',
      title: 'Ristrutturazione Terrazze',
      category: 'terrazze',
      location: 'Provincia di Venezia',
      description: 'Rifacimento completo di terrazze con nuova pavimentazione, impermeabilizzazione e sistema di drenaggio.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/terrazze.jpg',
    },
    {
      id: '9',
      title: 'Risanamento Terrazza',
      category: 'terrazze',
      location: 'Provincia di Venezia',
      description: 'Intervento di risanamento terrazza con rimozione della vecchia pavimentazione, impermeabilizzazione e nuova posa.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/risanamento-terrazza-scaled.jpg',
    },
    {
      id: '10',
      title: 'Terrazze Rio San Martino',
      category: 'terrazze',
      location: 'Rio San Martino, Venezia',
      description: 'Ristrutturazione completa di terrazze con impermeabilizzazione, isolamento termico e nuova pavimentazione.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/terrazze-rio-san-martino.jpg',
    },
    {
      id: '11',
      title: 'Controsoffitti in Cartongesso',
      category: 'cartongessi',
      location: 'Provincia di Venezia',
      description: 'Realizzazione di controsoffitti in cartongesso con illuminazione integrata. Design moderno e funzionale.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti.jpg',
    },
    {
      id: '12',
      title: 'Controsoffitti Design',
      category: 'cartongessi',
      location: 'Provincia di Venezia',
      description: 'Controsoffitti in cartongesso con forme geometriche e illuminazione LED. Soluzione elegante per ambienti moderni.',
      image: 'https://www.impresamichielan.com/wp-content/uploads/2025/11/controsoffitti2.jpg',
    },
  ]

  const categories = [
    { id: 'all', label: 'Tutti i Progetti' },
    { id: 'tetti', label: 'Tetti' },
    { id: 'terrazze', label: 'Terrazze' },
    { id: 'cartongessi', label: 'Cartongessi' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://www.impresamichielan.com/wp-content/uploads/2025/11/rifacimento-tetti-1-scaled.jpg"
          alt="Le Nostre Opere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center mt-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Le Nostre Opere</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Scopri i nostri progetti realizzati con passione e professionalità</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white sticky top-28 z-40 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cta to-cta/90 text-white shadow-lg scale-105'
                    : 'bg-background text-text hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-cta transition-colors">{project.title}</h3>
                  <p className="text-sm text-text/60 mb-4">{project.location}</p>
                  <span className="text-cta font-semibold inline-flex items-center gap-2">Vedi dettagli →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="p-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">{selectedProject.title}</h2>
              <p className="text-xl text-text/60 mb-8">{selectedProject.location}</p>
              <p className="text-xl text-text/80 leading-relaxed mb-10">{selectedProject.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+393463482617"
                  className="bg-gradient-to-r from-cta to-cta/90 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  Chiamaci: +39 346 348 2617
                </a>
                <a
                  href="/contatti"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  Richiedi Preventivo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
