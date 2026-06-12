'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, Phone, MessageSquare } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  location: string
  description: string
  image: string
}

export default function OperePage() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['All', 'Tetti', 'Terrazze', 'Cartongessi', 'Capannoni', 'Pavimentazioni']

  const projects: Project[] = [
    {
      id: '1',
      title: 'Rifacimento Tetto Tradizionale',
      category: 'Tetti',
      location: 'Scorzè (VE)',
      description: 'Rimozione vecchia copertura e posa di nuove tegole portoghesi con isolamento termico ventilato.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.29 PM (1).jpeg'
    },
    {
      id: '2',
      title: 'Impermeabilizzazione Terrazza',
      category: 'Terrazze',
      location: 'Mestre (VE)',
      description: 'Trattamento con resine poliuretaniche e rifacimento pavimentazione esterna.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.20 PM (2).jpeg'
    },
    {
      id: '3',
      title: 'Controsoffitto Moderno LED',
      category: 'Cartongessi',
      location: 'Treviso',
      description: 'Realizzazione di ribassamenti estetici con integrazione di gole luminose e faretti.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.26 PM (2).jpeg'
    },
    {
      id: '4',
      title: 'Copertura Capannone Industriale',
      category: 'Capannoni',
      location: 'Noale (VE)',
      description: 'Installazione di pannelli sandwich coibentati per grandi superfici industriali.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.18 PM (2).jpeg'
    },
    {
      id: '5',
      title: 'Pavimentazione Esterna in Pietra',
      category: 'Pavimentazioni',
      location: 'Martellago (VE)',
      description: 'Posa di porfido e cordolature per vialetti d\'accesso e giardini privati.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.10 PM (1).jpeg'
    },
    {
      id: '6',
      title: 'Isolamento Sottotetto Basaltek',
      category: 'Tetti',
      location: 'Venezia',
      description: 'Applicazione di pannelli in fibra di basalto per massimo efficientamento energetico.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.25 PM.jpeg'
    },
    {
      id: '7',
      title: 'Restauro Facciata Storica',
      category: 'All',
      location: 'Mirano (VE)',
      description: 'Pulizia manuale, ripristino intonaci e tinteggiatura ai silicati.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.14 PM (1).jpeg'
    },
    {
      id: '8',
      title: 'Pareti Divisorie Acustiche',
      category: 'Cartongessi',
      location: 'Spinea (VE)',
      description: 'Creazione di nuovi spazi ufficio con isolamento acustico certificato.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.26 PM.jpeg'
    },
    {
      id: '9',
      title: 'Manutenzione Tetto Condominiale',
      category: 'Tetti',
      location: 'Padova',
      description: 'Revisione completa della lattoneria e sostituzione coppi ammalorati.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.29 PM (3).jpeg'
    },
    {
      id: '10',
      title: 'Bonifica Amianto Capannone',
      category: 'Capannoni',
      location: 'Salzano (VE)',
      description: 'Rimozione sicura eternit e posa nuova copertura metallica grecata.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.19 PM (1).jpeg'
    },
    {
      id: '11',
      title: 'Ristrutturazione Bagno',
      category: 'Pavimentazioni',
      location: 'Trebaseleghe (PD)',
      description: 'Posa di piastrelle di grande formato e piatti doccia a filo pavimento.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.21 PM (1).jpeg'
    },
    {
      id: '12',
      title: 'Tetto con Lucernari',
      category: 'Tetti',
      location: 'Zero Branco (TV)',
      description: 'Integrazione di finestre per tetti Velux su nuova copertura ventilata.',
      image: '/images/WhatsApp Image 2026-06-11 at 10.50.17 PM (1).jpeg'
    },
  ]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <>
      <section className="pt-48 lg:pt-56 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6">Le Nostre Opere</h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Una selezione dei nostri migliori lavori realizzati con passione e competenza.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-cta text-white shadow-xl scale-105' 
                    : 'bg-white text-primary hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block bg-cta px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/95 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[3rem] shadow-2xl flex flex-col lg:flex-row animate-scale-in">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-[110] p-4 bg-primary text-white hover:bg-cta rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 stroke-[3]" />
            </button>

            <div className="relative h-72 lg:h-auto lg:w-1/2 flex-shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-cta font-bold uppercase tracking-widest text-sm mb-4">{selectedProject.category}</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6">{selectedProject.title}</h2>
              <p className="text-xl text-text/70 mb-10 leading-relaxed">{selectedProject.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+393463482617"
                  className="bg-cta text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-cta/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-cta/20"
                >
                  <Phone className="w-6 h-6" />
                  Chiamaci
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-primary/10 text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-primary/5 transition-all"
                >
                  Indietro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
