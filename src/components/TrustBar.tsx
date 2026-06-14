'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { HiOutlineStar, HiOutlineEmojiHappy, HiOutlineBadgeCheck, HiOutlineAnnotation } from 'react-icons/hi'

const stats = [
  { icon: HiOutlineStar, value: 10, suffix: '+', label: 'Years of Experience', color: 'from-primary-500 to-secondary-500' },
  { icon: HiOutlineEmojiHappy, value: 5000, suffix: '+', label: 'Happy Patients', color: 'from-accent-500 to-yellow-400' },
  { icon: HiOutlineBadgeCheck, value: 10000, suffix: '+', label: 'Successful Treatments', color: 'from-primary-600 to-primary-400' },
  { icon: HiOutlineAnnotation, value: 98, suffix: '%', label: 'Positive Reviews', color: 'from-secondary-500 to-primary-500' },
]

function Counter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayed(value)
        clearInterval(timer)
      } else {
        setDisplayed(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span className="text-4xl md:text-5xl font-heading font-bold text-dark-900 tabular-nums">
      {displayed}{suffix}
    </span>
  )
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative -mt-20 z-20 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-card border border-dark-50/50 p-8 md:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ icon: Icon, value, suffix, label, color }) => (
              <div key={label} className="text-center group">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className={`w-7 h-7 text-white bg-gradient-to-br ${color}`} />
                </motion.div>
                <Counter value={value} suffix={suffix} isVisible={isInView} />
                <p className="text-dark-500 font-alt font-medium mt-2">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
