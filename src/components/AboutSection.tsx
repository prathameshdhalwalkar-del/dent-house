'use client'

import { motion } from 'framer-motion'
import { HiShieldCheck, HiStar, HiHeart, HiChip } from 'react-icons/hi'

const highlights = [
  { icon: HiShieldCheck, title: 'Patient-First Approach', desc: 'Your comfort and health are our top priorities in every treatment we provide.' },
  { icon: HiChip, title: 'Advanced Technology', desc: 'State-of-the-art equipment and modern techniques for precision dental care.' },
  { icon: HiStar, title: 'Expert Team', desc: 'Highly skilled dentists with years of specialized experience and continuous learning.' },
  { icon: HiHeart, title: 'Compassionate Care', desc: 'Gentle, pain-free procedures in a warm and welcoming environment.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                  alt="Modern Dental Clinic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-white rounded-2xl shadow-card p-5 border border-dark-50/50 hidden md:block">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                  <HiHeart className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-heading font-bold text-dark-900">10+ 
Years</p>
                <p className="text-sm text-dark-500 font-alt">Of Excellence in Dental Care</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">About Our Clinic</span>
            <h2 className="section-title mt-3 mb-6">
              Where Precision Meets
              <span className="text-gradient-primary"> Passion </span>
              for Dentistry
            </h2>
            <p className="text-dark-500 font-alt text-lg leading-relaxed mb-8">
              At Dr. Khushboo's Dent House, we believe every smile tells a story. Our clinic combines 
              cutting-edge dental technology with a warm, patient-centric approach to deliver 
              exceptional oral healthcare. From routine check-ups to complex smile makeovers, 
              we treat every patient with the utmost care and professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-dark-900 mb-1">{title}</h4>
                      <p className="text-sm text-dark-500 font-alt leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
