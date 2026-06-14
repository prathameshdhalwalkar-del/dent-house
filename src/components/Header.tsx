'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone, HiCalendar } from 'react-icons/hi'
import BookAppointmentBtn from './BookAppointmentBtn'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
            <span className="text-white font-heading font-bold text-lg">K</span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-dark-900 leading-tight text-sm sm:text-lg">
              Dr. Khushboo's
            </h3>
            <p className="text-[10px] sm:text-xs text-dark-500 font-alt -mt-1">Dent House</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark-700 hover:text-primary-500 font-alt font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919920066083"
            className="flex items-center gap-2 px-4 py-2.5 border-2 border-primary-500/30 text-primary-600 rounded-full hover:bg-primary-50 transition-all font-alt font-medium text-sm"
          >
            <HiPhone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <BookAppointmentBtn className="flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-white rounded-full shadow-premium hover:shadow-premium-lg transition-all font-alt font-medium text-sm">
            <HiCalendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </BookAppointmentBtn>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-card text-dark-900"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-dark-100 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-dark-700 hover:text-primary-500 font-alt font-medium text-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+919920066083"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-primary-500/30 text-primary-600 rounded-full hover:bg-primary-50 transition-all font-alt font-medium"
                >
                  <HiPhone className="w-5 h-5" /> Call Now
                </a>
                <BookAppointmentBtn className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-primary text-white rounded-full shadow-premium transition-all font-alt font-medium">
                  <HiCalendar className="w-5 h-5" /> Book Appointment
                </BookAppointmentBtn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
