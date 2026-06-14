'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const cases = [
  { id: 1, before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80', after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', title: 'Smile Makeover' },
  { id: 2, before: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80', after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', title: 'Dental Implants' },
  { id: 3, before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', after: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', title: 'Teeth Whitening' },
  { id: 4, before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', after: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80', title: 'Braces Treatment' },
]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50)

  const handleMove = (clientX: number) => {
    const rect = currentRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(100, Math.max(0, x)))
  }

  const currentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={currentRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize group shadow-card"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img src={after} alt={`${title} - After`} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="relative w-full h-full" style={{ width: `${100 / (sliderPos / 100)}%` }}>
          <img src={before} alt={`${title} - Before`} className="w-full h-full object-cover" />
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-dark-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-4 4m0 0l4 4m-4-4h16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-alt">Before</div>
      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full font-alt">After</div>
      <div className="absolute top-3 left-3 bg-white/90 text-dark-900 text-sm px-4 py-1.5 rounded-full font-alt font-semibold">{title}</div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Smile Transformations</span>
          <h2 className="section-title mt-3 mb-4">
            Before &amp; <span className="text-gradient-gold">After</span>
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            See the remarkable transformations our patients have achieved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterSlider before={c.before} after={c.after} title={c.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
