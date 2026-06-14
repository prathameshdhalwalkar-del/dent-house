'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPlay } from 'react-icons/hi'

interface VideoCardProps {
  videoId: string
  title: string
  index: number
}

function VideoCard({ videoId, title, index }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-card bg-dark-900 cursor-pointer"
    >
      {playing && videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative w-full h-full" onClick={() => videoId && setPlaying(true)}>
          {videoId ? (
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <div className="text-center">
                <HiPlay className="w-12 h-12 text-primary-300 mx-auto mb-2" />
                <p className="text-primary-400 font-alt text-sm">{title || 'Video Coming Soon'}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl">
              <HiPlay className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 ml-0.5" />
            </div>
          </div>

        </div>
      )}
    </motion.div>
  )
}

export default function VideoShowcase() {
  return (
    <section className="section-padding relative bg-gradient-to-b from-primary-50/20 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Video Gallery</span>
          <h2 className="section-title mt-3 mb-4">
            See Our <span className="text-gradient-primary">Work</span> in Action
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            Watch real patient transformations and take a tour of our clinic.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" id="video-slots">
          <VideoCard videoId="KppcdcWiEHw" title="Our Clinic Tour" index={0} />
          <VideoCard videoId="ESkcGtrgwyc" title="Patient Testimonial" index={1} />
          <VideoCard videoId="AMwC-x6w_T0" title="Dental Procedure" index={2} />
          <VideoCard videoId="J_nyINA67_4" title="Smile Transformations" index={3} />
        </div>
      </div>
    </section>
  )
}
