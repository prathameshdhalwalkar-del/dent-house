'use client'

import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiHeart } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Dental Implants', href: '#services' },
  { label: 'Root Canal', href: '#services' },
  { label: 'Teeth Whitening', href: '#services' },
  { label: 'Braces & Aligners', href: '#services' },
  { label: 'Cosmetic Dentistry', href: '#services' },
]

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/drkhushboodenth0use?igsh=MWkxbGZhcnd0MGFjNg', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="border-b border-white/10">
          <div className="container-custom py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <a href="#home" className="flex items-center gap-2 group mb-5">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-premium">
                    <span className="text-white font-heading font-bold text-lg">K</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white leading-tight text-lg">Dr. Khushboo's</h3>
                    <p className="text-xs text-dark-400 font-alt -mt-1">Dent House</p>
                  </div>
                </a>
                <p className="text-dark-400 font-alt text-sm leading-relaxed mb-6">
                  Premium dental care in Matunga, Mumbai. Creating beautiful and healthy smiles with advanced technology and compassionate care.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-5">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="text-dark-400 font-alt hover:text-primary-400 transition-colors text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-5">Services</h4>
                <ul className="space-y-3">
                  {serviceLinks.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="text-dark-400 font-alt hover:text-primary-400 transition-colors text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-5">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-400 font-alt text-sm">Shop 3, Vasant Breezy Chambers, Kings Cir, Matunga East, Mumbai - 400019</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <a href="tel:+919876543210" className="text-dark-400 font-alt text-sm hover:text-primary-400 transition-colors">+91 98765 43210</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <HiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <a href="mailto:info@drkhushboosdenthouse.com" className="text-dark-400 font-alt text-sm hover:text-primary-400 transition-colors">info@drkhushboosdenthouse.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 font-alt text-sm">
              &copy; {new Date().getFullYear()} Dr. Khushboo's Dent House. All rights reserved.
            </p>
            <p className="text-dark-500 font-alt text-sm flex items-center gap-1">
              Made with <HiHeart className="w-4 h-4 text-red-400" /> for your smile
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
