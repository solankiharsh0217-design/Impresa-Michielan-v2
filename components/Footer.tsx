import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-48 h-24 mb-4">
              <Image
                src="https://www.impresamichielan.com/wp-content/uploads/2025/11/logo-trasp.png"
                alt="Impresa Michielan"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Oltre 30 anni di esperienza specialistica in restauri, isolamenti termici e ristrutturazioni complete.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/servizi" className="text-white/80 hover:text-white transition-colors">Servizi</Link></li>
              <li><Link href="/chi-siamo" className="text-white/80 hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link href="/opere" className="text-white/80 hover:text-white transition-colors">Opere</Link></li>
              <li><Link href="/contatti" className="text-white/80 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">Via Onaro 2/4<br />Scorzè (Ve), Italia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+393463482617" className="text-sm text-white/80 hover:text-white transition-colors">+39 346 348 2617</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:impresa.michielan@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">impresa.michielan@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social & Certification */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Seguici</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.facebook.com/profile.php?id=100054213112306" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/impresamichielan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-white p-3 rounded-full shadow-2xl border-4 border-white/20 w-32 h-32 flex items-center justify-center overflow-hidden">
                <Image 
                  src="https://www.impresamichielan.com/wp-content/uploads/2025/12/Logo_Soa23.jpg"
                  alt="Certificazione SOA23"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-white font-bold mt-4 text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">SOA23 Certificata</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Impresa Michielan srl - P.IVA IT04687550279 - Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  )
}
