'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCalendar } from 'react-icons/hi'

const contactInfo = [
  { icon: HiLocationMarker, label: 'Address', value: 'Shop No 3, Vasant Breezy Chambers, Dr. Baba Saheb Ambedkar Road, Kings Cir, Matunga East, Mumbai - 400019' },
  { icon: HiPhone, label: 'Phone', value: '+91 99200 66083' },
  { icon: HiMail, label: 'Email', value: 'info@drkhushboosdenthouse.com' },
  { icon: HiClock, label: 'Working Hours', value: 'Mon - Sat: 10:00 AM - 8:00 PM\nSunday: Closed' },
]

const services = [
  'Root Canal Treatment', 'Smile Makeover', 'Teeth Whitening', 'Dental Crowns & Bridges',
  'Dental Veneers', 'Dental Implants', 'Braces & Aligners', "Children's Dentistry",
  'Preventive Dentistry', 'Dental Fillings', 'Tooth Extraction', 'Dentures', 'Gum Treatment',
  'General Checkup', 'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', time: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding relative bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title mt-3 mb-4">
            Ready for Your{' '}
            <span className="text-gradient-primary">New Smile</span>?
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, more beautiful smile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div id="book-appointment" className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-dark-50/50 min-h-[550px] scroll-mt-24">
              <h3 className="font-heading font-bold text-2xl text-dark-900 mb-6">Book an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                  <input type="tel" placeholder="Mobile Number" required value={formData.phone} onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                </div>
                <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-dark-500 font-alt text-sm mb-1.5">Preferred Date</label>
                    <input type="date" required value={formData.date} onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt" />
                  </div>
                  <div>
                    <label className="block text-dark-500 font-alt text-sm mb-1.5">Preferred Time</label>
                    <select required value={formData.time} onChange={e => setFormData(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt appearance-none">
                      <option value="" disabled>Select Time</option>
                      {Array.from({ length: 11 }, (_, i) => {
                        const h = i + 10;
                        const label = h >= 12 ? `${h === 12 ? 12 : h - 12} PM` : `${h} AM`;
                        const val = `${String(h).padStart(2, '0')}:00`;
                        return <option key={val} value={val}>{label}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <select required value={formData.service} onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-5 py-3.5 bg-dark-50/50 border border-dark-100 rounded-xl text-dark-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-alt appearance-none">
                  <option value="" disabled>Select Service Type</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <button type="submit" className="w-full btn-primary text-base group">
                  {submitted ? 'Appointment Booked! ✓' : <><HiCalendar className="w-5 h-5 mr-2" /> Book Appointment</>}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
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
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
