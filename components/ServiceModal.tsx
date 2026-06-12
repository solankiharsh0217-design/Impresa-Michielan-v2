'use client'

import { X, CheckCircle, Phone } from 'lucide-react'
import Image from 'next/image'

interface ServiceDetails {
  title: string
  description: string
  image: string
  features: string[]
  details: string[]
}

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceDetails | null
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-primary/95 backdrop-blur-md animate-fade-in" 
        onClick={onClose} 
      />
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-cta hover:text-white rounded-full transition-all duration-300 backdrop-blur-md text-primary"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-64 lg:h-full min-h-[400px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              <p className="text-white/80">Soluzioni professionali certificate</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Descrizione del Servizio</h3>
            <p className="text-text/70 mb-8 leading-relaxed text-lg">
              {service.description}
            </p>

            <div className="space-y-6 mb-10">
              <h4 className="font-bold text-primary uppercase tracking-wider text-sm">Caratteristiche Principali</h4>
              <ul className="grid grid-cols-1 gap-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text/80">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 mb-10">
              <h4 className="font-bold text-primary uppercase tracking-wider text-sm">Cosa Offriamo</h4>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text/70">
                    <div className="w-1.5 h-1.5 bg-cta rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+393463482617"
                className="bg-cta text-white px-8 py-4 rounded-xl font-bold hover:bg-cta/90 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Chiamaci Ora
              </a>
              <button
                onClick={onClose}
                className="border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
