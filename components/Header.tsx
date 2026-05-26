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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image 
                src="https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-trasp.png"
                alt="Impresa Michielan"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-cta">Impresa Michielan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-cta transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full">Home</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-text hover:text-cta transition-colors duration-300 font-medium">
                Servizi <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-72 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                <Link href="/servizi/restauri" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 border-b border-gray-50 hover:pl-6">Restauri e Pitture Edili</Link>
                <Link href="/servizi/isolamenti" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 border-b border-gray-50 hover:pl-6">Isolamenti e Cappotti</Link>
                <Link href="/servizi/tetti" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 border-b border-gray-50 hover:pl-6">Rifacimento Tetti e Terrazzi</Link>
                <Link href="/servizi/cartongessi" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 border-b border-gray-50 hover:pl-6">Cartongessi e Contropareti</Link>
                <Link href="/servizi/materiali" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 border-b border-gray-50 hover:pl-6">Materiali Innovativi</Link>
                <Link href="/servizi/ristrutturazioni" className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-cta/5 hover:to-transparent transition-all duration-200 hover:pl-6">Ristrutturazioni Complete</Link>
              </div>
            </div>

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
              
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-text hover:text-primary transition-colors w-full"
                >
                  Servizi <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/servizi/restauri" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Restauri e Pitture</Link>
                    <Link href="/servizi/isolamenti" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Isolamenti e Cappotti</Link>
                    <Link href="/servizi/tetti" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Rifacimento Tetti</Link>
                    <Link href="/servizi/cartongessi" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Cartongessi</Link>
                    <Link href="/servizi/materiali" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Materiali Innovativi</Link>
                    <Link href="/servizi/ristrutturazioni" onClick={() => setMobileMenuOpen(false)} className="text-sm text-text hover:text-primary">Ristrutturazioni Complete</Link>
                  </div>
                )}
              </div>

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
