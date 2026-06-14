'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiPhone, HiShieldCheck, HiChip, HiEmojiHappy, HiUserGroup } from 'react-icons/hi'
import BookAppointmentBtn from './BookAppointmentBtn'

const floatingIcons = [
  { Icon: HiShieldCheck, delay: 0, x: '10%', y: '20%', color: 'text-primary-500/30' },
  { Icon: HiChip, delay: 0.5, x: '85%', y: '30%', color: 'text-secondary-500/30' },
  { Icon: HiEmojiHappy, delay: 1, x: '15%', y: '70%', color: 'text-accent-500/30' },
  { Icon: HiUserGroup, delay: 1.5, x: '80%', y: '75%', color: 'text-primary-400/30' },
]

const trustItems = [
  { Icon: HiShieldCheck, label: 'Trusted Dental Care' },
  { Icon: HiChip, label: 'Modern Equipment' },
  { Icon: HiEmojiHappy, label: 'Painless Procedures' },
  { Icon: HiUserGroup, label: 'Expert Consultation' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      const bg = containerRef.current.querySelector('.hero-bg-shapes') as HTMLElement
      if (bg) {
        bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-primary-50/30">
      <div className="hero-bg-shapes absolute inset-0 transition-transform duration-500 ease-out pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-100/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {floatingIcons.map(({ Icon, delay, x, y, color }) => (
        <motion.div
          key={delay}
          className={`absolute ${color} pointer-events-none`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon className="w-16 h-16 md:w-20 md:h-20" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-accent-100/60 text-accent-600 rounded-full text-sm font-alt font-semibold mb-6"
            >
              Premium Dental Care in Matunga
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-dark-900 leading-[1.1] mb-6"
            >
              Creating{' '}
              <span className="text-gradient-primary">Beautiful</span>
              {' '}&amp;{' '}
              <span className="text-gradient-gold">Healthy</span>
              {' '}Smiles
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-dark-500 font-alt leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Advanced Dental Care with Precision, Comfort, and Trust. Your smile is our masterpiece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <BookAppointmentBtn className="btn-primary text-base group">
                <HiCalendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book Appointment
              </BookAppointmentBtn>
              <a href="tel:+919920066083" className="btn-secondary text-base group">
                <HiPhone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 mt-10 justify-center lg:justify-start"
            >
              {trustItems.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-dark-500 group">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-4 h-4 text-primary-500" />
                  </div>
                  <span className="text-sm font-alt font-medium whitespace-nowrap">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-100 via-white to-secondary-50 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                  alt="Premium Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white/80 backdrop-blur-xl rounded-2xl shadow-card p-5 border border-white/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <HiEmojiHappy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-dark-900">5000+</p>
                    <p className="text-xs text-dark-500 font-alt">Happy Smiles</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-accent-500 text-sm">&#9733;</span>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-100/80 backdrop-blur-xl rounded-2xl shadow-card p-4 border border-accent-200/50">
                <p className="text-lg font-heading font-bold text-accent-600">10+</p>
                <p className="text-xs text-dark-500 font-alt">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </section>
  )
}
