'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import ContactModal from './ContactModal'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100">
        <nav className="container mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-48 h-28 flex-shrink-0">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-trasp.png"
                alt="Impresa Michielan"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Home</Link>
            <Link href="/servizi" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Servizi</Link>
            
            <Link href="/basaltek" className="text-cta border-2 border-cta px-5 py-2 rounded-full hover:bg-cta hover:text-white transition-all duration-300 font-bold uppercase text-[10px] tracking-[0.2em] shadow-md shadow-cta/5">
              Basaltek
            </Link>

            <Link href="/chi-siamo" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Chi Siamo</Link>
            <Link href="/opere" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Opere</Link>
            <Link href="/contatti" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Contatti</Link>
            
            <button 
              onClick={() => setContactModalOpen(true)}
              className="bg-gradient-to-r from-cta to-cta/90 text-white px-7 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Sopralluogo Gratuito
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-primary transition-colors">Home</Link>
              <Link href="/servizi" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-primary transition-colors">Servizi</Link>
              <Link href="/chi-siamo" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-primary transition-colors">Chi Siamo</Link>
              <Link href="/opere" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-primary transition-colors">Opere</Link>
              <Link href="/contatti" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-primary transition-colors">Contatti</Link>

              <button 
                onClick={() => {
                  setContactModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="bg-cta text-white px-6 py-2 rounded-lg hover:bg-cta/90 transition-all duration-200 font-semibold"
              >
                Sopralluogo Gratuito
              </button>
            </div>
          </div>
        )}

      </header>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}
