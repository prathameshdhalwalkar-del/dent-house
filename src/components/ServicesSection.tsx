'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'

const services = [
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    desc: 'Save your natural teeth with our painless and precise root canal procedures. Advanced techniques ensure minimal discomfort and long-lasting results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16M4 12c0 4.418 3.582 8 8 8M4 12c0-4.418 3.582-8 8-8" />
        <path d="M12 4v16" />
        <path d="M8 8l8 8M16 8l-8 8" />
      </svg>
    ),
    color: 'from-accent-500 to-yellow-400',
  },
  {
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    desc: 'A customized combination of cosmetic dental treatments designed to enhance the overall appearance of your smile.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 3 4 3 4-3 4-3" />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    color: 'from-accent-500 to-primary-500',
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    desc: 'Brighten your teeth with safe, professional whitening treatments that remove stains and restore your natural sparkle in just one session.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m15.66 7.66l-.71-.71M4.05 4.05l-.71-.71" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
    color: 'from-blue-400 to-cyan-300',
  },
  {
    slug: 'dental-crowns-bridges',
    title: 'Dental Crowns & Bridges',
    desc: 'Restore strength and beauty to damaged or missing teeth with custom-made crowns and bridges designed for a perfect fit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: 'from-primary-600 to-primary-400',
  },
  {
    slug: 'dental-veneers',
    title: 'Dental Veneers',
    desc: 'Cover imperfections like chips, gaps, and discoloration with thin, durable veneers that create a flawless smile.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
    color: 'from-primary-500 to-secondary-500',
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    desc: 'Permanent solutions for missing teeth using strong, natural-looking implants that restore function and aesthetics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17h8v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
        <path d="M9 21h6" strokeWidth="2" />
        <path d="M12 17v4" strokeWidth="2" />
      </svg>
    ),
    color: 'from-primary-500 to-secondary-500',
  },
  {
    slug: 'braces-aligners',
    title: 'Braces & Aligners',
    desc: 'A confident smile begins with perfectly aligned teeth. We specialize in advanced orthodontic treatments — from traditional braces to aesthetic options — for children, teens, and adults.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6c0 1.5.5 3 2 4s3 2 6 2 4.5-.5 6-2 2-2.5 2-4" />
        <path d="M4 18c0-1.5.5-3 2-4s3-2 6-2 4.5.5 6 2 2 2.5 2 4" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
  },
  {
    slug: 'childrens-dentistry',
    title: "Children's Dentistry",
    desc: 'Gentle, friendly dental care for kids to make dental visits positive and stress-free while protecting their growing smiles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
      </svg>
    ),
    color: 'from-pink-500 to-rose-400',
  },
  {
    slug: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    desc: 'Protect your oral health with routine checkups, cleanings, and preventive care to stop dental problems before they start.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: 'from-green-400 to-emerald-400',
  },
  {
    slug: 'dental-fillings',
    title: 'Dental Fillings',
    desc: 'Repair cavities and restore tooth structure with durable, tooth-colored fillings that blend seamlessly with your smile.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    ),
    color: 'from-teal-400 to-emerald-400',
  },
  {
    slug: 'dental-tourism',
    title: 'Dental Tourism',
    desc: 'World-class dental care for international patients at affordable costs, with assistance in travel, stay, and local sightseeing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
  },
  {
    slug: 'tooth-extraction',
    title: 'Tooth Extraction',
    desc: 'Safe and smooth removal of decayed, damaged, or impacted teeth using gentle techniques to ensure faster healing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 4l-2 2m0 0l-2 2m2-2l2-2m-2 2L9 12m6-6l-6 6" />
        <path d="M5 20l11-11" />
      </svg>
    ),
    color: 'from-red-400 to-orange-400',
  },
  {
    slug: 'dentures',
    title: 'Dentures',
    desc: 'A reliable and affordable way to replace missing teeth. Custom-made to fit comfortably, they improve chewing, speaking, and facial appearance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17h8v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
        <path d="M9 15h6" />
      </svg>
    ),
    color: 'from-purple-400 to-indigo-400',
  },
  {
    slug: 'gum-treatment',
    title: 'Gum Treatment',
    desc: 'Specialized care for gum infections and periodontal disease to maintain healthy gums and prevent tooth loss.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 3 4 3 4-3 4-3" />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    color: 'from-teal-400 to-cyan-400',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwRDk0ODgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title mt-3 mb-4">
            Comprehensive <span className="text-gradient-primary">Dental</span> Care
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            From routine check-ups to advanced cosmetic dentistry, we offer complete dental solutions under one roof.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.slug === 'dental-tourism' ? '/dental-tourism' : `/services/${service.slug}`}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group premium-card p-6 cursor-pointer relative overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-500 font-alt text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary-500 font-alt font-semibold text-sm group/btn">
                    <span>Learn More</span>
                    <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
