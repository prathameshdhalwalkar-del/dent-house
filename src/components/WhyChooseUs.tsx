'use client'

import { motion } from 'framer-motion'
import { HiShieldCheck, HiChip, HiEmojiHappy, HiSparkles, HiHeart, HiBadgeCheck } from 'react-icons/hi'

const features = [
  { icon: HiShieldCheck, title: 'Experienced Dentists', desc: 'Team of highly skilled specialists with years of expertise in modern dentistry.' },
  { icon: HiChip, title: 'Latest Technology', desc: 'Cutting-edge dental equipment and advanced treatment techniques for precision care.' },
  { icon: HiEmojiHappy, title: 'Pain-Free Treatments', desc: 'Gentle, minimally invasive procedures ensuring maximum comfort during treatment.' },
  { icon: HiSparkles, title: 'Hygienic Environment', desc: 'Strict sterilization protocols and immaculate clinic environment for your safety.' },
  { icon: HiHeart, title: 'Personalized Care', desc: 'Tailored treatment plans designed specifically for your unique dental needs.' },
  { icon: HiBadgeCheck, title: 'Affordable Excellence', desc: 'Premium dental care at transparent, competitive prices without compromising quality.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mt-3 mb-4">
            Why Patients Trust{' '}
            <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-dark-200 font-alt text-lg max-w-2xl mx-auto">
            We combine expertise with compassion to deliver exceptional dental experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-dark-300 font-alt leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
