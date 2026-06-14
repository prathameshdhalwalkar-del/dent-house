'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Matunga, Mumbai',
    image: '',
    rating: 5,
    text: 'Dr. Khushboo is simply amazing! I was terrified of dental procedures, but her gentle approach and care made my root canal absolutely painless. The clinic is spotless and the staff is incredibly welcoming. Highly recommended!',
    treatment: 'Root Canal Treatment',
  },
  {
    name: 'Rahul Mehta',
    location: 'Dadar, Mumbai',
    image: '',
    rating: 5,
    text: 'I got my complete smile makeover done here and the results are beyond my expectations. The team took time to understand what I wanted and delivered perfection. My confidence has skyrocketed!',
    treatment: 'Smile Makeover',
  },
  {
    name: 'Anita Desai',
    location: 'King\'s Circle, Mumbai',
    image: '',
    rating: 5,
    text: 'The best dental clinic in Matunga! My children love visiting Dr. Khushboo. She has a wonderful way with kids and makes their dental visits fun. The clinic environment is so child-friendly.',
    treatment: 'Pediatric Dentistry',
  },
  {
    name: 'Vikram Patel',
    location: 'Sion, Mumbai',
    image: '',
    rating: 5,
    text: 'Had multiple dental implants done and the experience was seamless. The technology they use is world-class. From consultation to the final result, everything was explained clearly. Truly professional!',
    treatment: 'Dental Implants',
  },
  {
    name: 'Neha Gupta',
    location: 'Wadala, Mumbai',
    image: '',
    rating: 5,
    text: 'My teeth whitening results are incredible! I get compliments on my smile everywhere I go. The procedure was quick, comfortable, and the results were immediate. Thank you Dr. Khushboo!',
    treatment: 'Teeth Whitening',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    if (intervalRef.current) { clearInterval(intervalRef.current); startAutoPlay() }
  }

  const goNext = () => goTo((current + 1) % testimonials.length)
  const goPrev = () => goTo((current - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="section-padding relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mt-3 mb-4">
            What Our <span className="text-gradient-gold">Patients</span> Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px] flex items-center">
            <button onClick={goPrev} className="absolute -left-4 lg:-left-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <HiChevronLeft className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-heading font-bold text-xl flex-shrink-0">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg">{t.name}</h4>
                      <p className="text-dark-300 font-alt text-sm">{t.location}</p>
                      <p className="text-accent-400 font-alt text-xs mt-0.5">{t.treatment}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <HiStar key={i} className="w-5 h-5 text-accent-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-dark-200 font-alt text-lg leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={goNext} className="absolute -right-4 lg:-right-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-accent-500 w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
