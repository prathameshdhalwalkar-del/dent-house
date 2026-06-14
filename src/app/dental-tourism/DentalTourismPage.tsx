'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiArrowLeft, HiPhone, HiMail, HiLocationMarker, HiClock, HiPaperAirplane, HiCheck } from 'react-icons/hi'
import Link from 'next/link'
import BookAppointmentBtn from '@/components/BookAppointmentBtn'

const howItWorks = [
  { step: '01', title: 'Send Your Query', desc: 'Share your dental needs and X-rays online for a preliminary assessment.' },
  { step: '02', title: 'Get Your Plan', desc: 'Receive a personalized treatment and travel plan with cost estimates.' },
  { step: '03', title: 'Book Your Trip', desc: 'We guide you through travel arrangements and accommodation booking.' },
  { step: '04', title: 'Receive Care', desc: 'Get high-quality dental treatment at our state-of-the-art clinic.' },
  { step: '05', title: 'Explore & Return', desc: 'Enjoy Mumbai sightseeing and return home with a confident smile.' },
]

const whyChoose = [
  { title: 'World-Class Care', desc: 'Advanced equipment and internationally trained dentists following global sterilization protocols.' },
  { title: 'Affordable Pricing', desc: 'Save 60–80% compared to dental costs in the US, UK, Canada, Australia, and Europe.' },
  { title: 'No Waiting Period', desc: 'Get appointments within 24 hours of your arrival. No long waiting lists.' },
  { title: 'Personalized Assistance', desc: 'Dedicated coordinator for airport pickup, hotel booking, and local guidance.' },
  { title: 'Hygiene & Safety', desc: 'Strict sterilization standards, autoclave sterilization, and single-use disposable materials.' },
  { title: 'Sightseeing Included', desc: 'Visit Gateway of India, Marine Drive, Elephanta Caves, and more during your stay.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', alt: 'Modern Treatment Room' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', alt: 'Advanced Dental Chair' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Doctor Performing Treatment' },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', alt: 'Dental Procedure in Progress' },
  { src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80', alt: 'Comfortable Waiting Area' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: 'Clinic Reception' },
]

const contactInfo = [
  { icon: HiLocationMarker, label: 'Address', value: 'Shop No 3, Vasant Breezy Chambers, Dr. Baba Saheb Ambedkar Road, Kings Cir, Matunga East, Mumbai - 400019' },
  { icon: HiPhone, label: 'Phone / WhatsApp', value: '+91 99200 66083' },
  { icon: HiMail, label: 'Email', value: 'tourism@drkhushboosdenthouse.com' },
  { icon: HiClock, label: 'Working Hours', value: 'Mon - Sat: 10:00 AM - 8:00 PM' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export default function DentalTourismPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <Link href="/#services" className="inline-flex items-center gap-2 text-dark-300 hover:text-white font-alt font-medium transition-colors mb-8 group">
            <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-alt text-sm font-semibold">Accepting International Patients</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Affordable, World-Class
                <span className="block text-gradient-gold mt-2">Dental Treatments</span>
                <span className="block text-white/80 mt-2">in Mumbai</span>
              </h1>
              <p className="text-dark-300 font-alt text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
                Discover world-class dental care while experiencing the charm of Mumbai. Expert treatments, 
                travel assistance, and personalized hospitality — all in one seamless package.
              </p>
              <div className="flex flex-wrap gap-4">
                <BookAppointmentBtn className="btn-primary text-base px-8 py-4">
                  Get Free Consultation
                </BookAppointmentBtn>

              </div>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                {['USA', 'UK', 'Canada', 'Australia', 'Europe'].map(country => (
                  <span key={country} className="text-dark-400 font-alt text-sm tracking-wider uppercase">{country}</span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                  alt="Modern Dental Clinic"
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                  <p className="text-white font-heading font-bold text-2xl">500+</p>
                  <p className="text-dark-300 font-alt text-sm">International Patients</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title mt-3 mb-4">
                Why India & Why <span className="text-gradient-primary">Our Clinic</span>
              </h2>
              <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
                World-class dental care at a fraction of the cost — combined with the warmth of Indian hospitality.
              </p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div className="premium-card p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    <HiCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-dark-500 font-alt text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding relative bg-dark-900 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">How It Works</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mt-3 mb-4">
                Your Dental Journey <span className="text-gradient-gold">in 5 Steps</span>
              </h2>
              <p className="text-dark-400 font-alt text-lg max-w-2xl mx-auto">
                From your first inquiry to returning home with a perfect smile — we handle everything.
              </p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/25">
                    <span className="text-white font-heading font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-dark-400 font-alt text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
              <span className="text-dark-300 font-alt">Travel → Consultation → Treatment → Recovery → Sightseeing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">Gallery</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mt-3 mb-4">
                Tour Our <span className="text-gradient-gold">Clinic</span>
              </h2>
              <p className="text-dark-400 font-alt text-lg max-w-2xl mx-auto">
                See the world-class facility where you will receive your care.
              </p>
            </div>
          </FadeUp>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-card"
                onClick={() => setSelectedImage(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-alt font-semibold">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <HiChevronLeft className="w-6 h-6 rotate-45" />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding relative bg-gradient-to-b from-primary-50/30 to-white">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="section-subtitle">Get In Touch</span>
              <h2 className="section-title mt-3 mb-4">
                Plan Your Dental <span className="text-gradient-primary">Trip Today</span>
              </h2>
              <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
                Send us your dental query and X-rays. We&apos;ll get back to you within 24 hours with a personalized plan.
              </p>
            </div>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeUp>
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-dark-50/50">
                <h3 className="font-heading font-bold text-2xl text-dark-900 mb-6">Overseas Patient Enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                    <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="tel" placeholder="Phone / WhatsApp" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                    <input type="text" placeholder="Your Country" required value={formData.country} onChange={e => setFormData(p => ({ ...p, country: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                  </div>
                  <textarea placeholder="Describe your dental needs / attach X-rays or reports" rows={4} required value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt resize-none" />
                  <button type="submit" className="w-full btn-primary text-base group">
                    {submitted ? 'Plan Sent! ✓' : <><HiPaperAirplane className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" /> Send Your Enquiry</>}
                  </button>
                </form>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white rounded-2xl shadow-card p-6 border border-dark-50/50 flex items-start gap-4 group hover:shadow-premium transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-dark-900 mb-1">{label}</h4>
                      <p className="text-dark-500 font-alt whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl overflow-hidden shadow-card h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.492!2d72.8510!3d19.0510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f0!2sMatunga%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Clinic Location"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
