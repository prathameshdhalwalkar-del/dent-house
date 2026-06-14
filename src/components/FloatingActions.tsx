'use client'

import { motion } from 'framer-motion'
import { HiPhone, HiChat, HiCalendar } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const buttons = [
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/919876543210',
    label: 'WhatsApp',
    color: 'bg-[#25D366] hover:bg-[#20BD5A]',
    delay: 0,
  },
  {
    icon: HiPhone,
    href: 'tel:+919876543210',
    label: 'Call',
    color: 'bg-primary-500 hover:bg-primary-600',
    delay: 0.15,
  },
  {
    icon: HiCalendar,
    href: '#contact',
    label: 'Appointment',
    color: 'bg-accent-500 hover:bg-accent-600',
    delay: 0.3,
  },
]

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {buttons.map(({ icon: Icon, href, label, color, delay }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, scale: 0, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay, duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          <div className={`w-14 h-14 ${color} rounded-full shadow-lg flex items-center justify-center text-white transition-all`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-900 text-white text-xs font-alt font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </motion.a>
      ))}
    </div>
  )
}
