'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', alt: 'Modern Treatment Room', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', alt: 'Dental Chair', category: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', alt: 'Dental Tools', category: 'Equipment' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Doctor at Work', category: 'Team' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', alt: 'Clinic Reception', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', alt: 'Dental Treatment', category: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80', alt: 'Clinic Waiting Area', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', alt: 'Sterilization Room', category: 'Clinic' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80', alt: 'Team Photo', category: 'Team' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-padding relative bg-gradient-to-b from-primary-50/20 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Gallery</span>
          <h2 className="section-title mt-3 mb-4">
            Tour Our <span className="text-gradient-primary">Clinic</span>
          </h2>
          <p className="text-dark-500 font-alt text-lg max-w-2xl mx-auto">
            Experience our state-of-the-art facility designed for your comfort.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-card"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-alt font-semibold">{img.alt}</p>
                  <span className="text-white/70 text-sm font-alt">{img.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <HiX className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
