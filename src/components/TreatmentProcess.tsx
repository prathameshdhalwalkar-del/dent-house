'use client'

import { motion } from 'framer-motion'
import { HiClipboardList, HiSearch, HiDocumentText, HiBeaker, HiHeart } from 'react-icons/hi'

const steps = [
  { icon: HiClipboardList, title: '1. Consultation', desc: 'We begin with a thorough discussion of your dental concerns, medical history, and treatment goals.' },
  { icon: HiSearch, title: '2. Diagnosis', desc: 'Comprehensive examination using digital X-rays and advanced diagnostic tools for accurate assessment.' },
  { icon: HiDocumentText, title: '3. Treatment Planning', desc: 'Customized treatment plan designed specifically for your needs with clear cost and timeline estimates.' },
  { icon: HiBeaker, title: '4. Procedure', desc: 'Pain-free treatment performed with precision using state-of-the-art technology and techniques.' },
  { icon: HiHeart, title: '5. Follow-up Care', desc: 'Post-treatment care instructions and scheduled follow-ups to ensure optimal healing and results.' },
]

export default function TreatmentProcess() {
  return (
    <section className="section-padding relative bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Treatment Process</span>
          <h2 className="section-title mt-3 mb-4">
            Your Journey to a{' '}
            <span className="text-gradient-primary">Perfect Smile</span>
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            A seamless, comfortable experience from your first visit to your final result.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-300 hidden md:block" />

          <div className="space-y-12">
            {steps.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-6 md:gap-10 group"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-premium group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="font-heading font-bold text-xl text-dark-900 mb-2">{title}</h3>
                  <p className="text-dark-500 font-alt leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
