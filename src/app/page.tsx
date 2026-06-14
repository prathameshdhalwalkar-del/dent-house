'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import DoctorProfile from '@/components/DoctorProfile'
import BeforeAfter from '@/components/BeforeAfter'
import Testimonials from '@/components/Testimonials'
import TreatmentProcess from '@/components/TreatmentProcess'
import Gallery from '@/components/Gallery'
import VideoShowcase from '@/components/VideoShowcase'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import FloatingActions from '@/components/FloatingActions'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!target) return
      const href = (target as HTMLAnchorElement).getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorProfile />
      <BeforeAfter />
      <Testimonials />
      <TreatmentProcess />
      <Gallery />
      <VideoShowcase />
      <FAQSection />
      <ContactSection />
      <FloatingActions />
      <Footer />
    </>
  )
}
