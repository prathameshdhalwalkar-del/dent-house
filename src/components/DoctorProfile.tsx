'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiBadgeCheck, HiStar, HiHeart, HiShieldCheck } from 'react-icons/hi'

export default function DoctorProfile() {
  return (
    <section className="section-padding relative bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Meet Your Dentist</span>
            <h2 className="section-title mt-3 mb-6">
              Expert Care by{' '}
              <span className="text-gradient-primary">Dr. Khushboo</span>
            </h2>
            <p className="text-dark-500 font-alt text-lg leading-relaxed mb-8">
              Leading root canal specialist and cosmetic dentist in Matunga, Dr. Khushboo Doshi Gandhi 
              combines precision with compassion. With 10+ years of experience, she specializes in 
              painless root canal therapy and complete smile makeovers — helping every patient 
              smile with confidence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: HiAcademicCap, label: 'B.D.S, M.C.P (Reg No: A-30242)' },
                { icon: HiBadgeCheck, label: '10+ Years Clinical Experience' },
                { icon: HiStar, label: 'Root Canal & Cosmetic Dentistry Specialist' },
                { icon: HiHeart, label: '1000s of Transformed Smiles' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="text-dark-700 font-alt font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Dr. Khushboo - Dentist"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 border border-dark-50/50 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <HiStar className="w-7 h-7 text-dark-900" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark-900">Dental Excellence</p>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className="text-accent-500 text-sm">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
