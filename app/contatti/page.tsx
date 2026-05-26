'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:impresa.michielan@gmail.com?subject=Richiesta Contatto&body=Nome: ${formData.name}%0D%0ACittà: ${formData.city}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.phone}%0D%0A%0D%0AMessaggio:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center mt-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contattaci</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">Siamo a tua disposizione per qualsiasi informazione o per richiedere un sopralluogo gratuito</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-8">Richiedi Informazioni</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text">Nome e Cognome *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold mb-2 text-text">Città *</label>
                  <input
                    type="text"
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-text">Telefono *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text">Messaggio *</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    className="mt-1 w-5 h-5 text-cta"
                  />
                  <label htmlFor="privacy" className="text-sm text-text/80">
                    Acconsento al trattamento dei miei dati personali secondo la normativa sulla privacy *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cta to-cta/90 text-white py-5 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Invia Richiesta
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-10 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-primary mb-8">Informazioni di Contatto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta/10 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">Indirizzo</h3>
                      <p className="text-text/70">Via Onaro 2/4<br />30037 Scorzè (Ve)<br />Italia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta/10 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">Telefono</h3>
                      <a href="tel:+393463482617" className="text-text/70 hover:text-cta transition-colors text-lg">+39 346 348 2617</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta/10 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">Email</h3>
                      <a href="mailto:impresa.michielan@gmail.com" className="text-text/70 hover:text-cta transition-colors">impresa.michielan@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta/10 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">Orari</h3>
                      <p className="text-text/70">Lun - Ven: 8:00 - 18:00<br />Sab: Su appuntamento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Seguici sui Social</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100054213112306" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 text-white shadow-lg"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://www.instagram.com/impresamichielan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 text-white shadow-lg"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background to-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-6">Dati Aziendali</h3>
                <p className="text-text/70 leading-relaxed">
                  <strong className="text-primary">Ragione Sociale:</strong> Impresa Michielan srl<br />
                  <strong className="text-primary">P.IVA:</strong> IT04687550279<br />
                  <strong className="text-primary">Certificazione:</strong> SOA23 - OG1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">Dove Siamo</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-3xl shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8!2d12.1!3d45.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM2JzAwLjAiTiAxMsKwMDYnMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Onaro+2%2F4+Scorzè+Ve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cta to-cta/90 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Apri in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
