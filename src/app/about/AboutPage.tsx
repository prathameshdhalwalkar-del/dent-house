'use client'

import { motion } from 'framer-motion'
import { HiShieldCheck, HiStar, HiHeart, HiChip, HiAcademicCap, HiBadgeCheck, HiClock, HiLocationMarker, HiCheck, HiUsers, HiLightBulb, HiEye } from 'react-icons/hi'
import Link from 'next/link'
import BookAppointmentBtn from '@/components/BookAppointmentBtn'

const whyChoose = [
  { icon: HiStar, title: '10+ Years Expertise', desc: 'A decade of delivering confident smiles.' },
  { icon: HiHeart, title: 'Painless Dentistry', desc: 'Gentle, stress-free treatments for every patient.' },
  { icon: HiChip, title: 'Advanced Technology', desc: 'Modern tools for accurate diagnosis and treatment.' },
  { icon: HiShieldCheck, title: 'Hygienic Practices', desc: 'Strict sterilization protocols for your safety.' },
  { icon: HiUsers, title: 'Patient-Focused Care', desc: 'Personalized attention from consultation to recovery.' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <FadeUp>
            <Link href="/" className="inline-flex items-center gap-2 text-dark-300 hover:text-white font-alt font-medium transition-colors mb-8 group">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back to Home
            </Link>
          </FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <FadeUp>
              <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mt-4 mb-6">
                Welcome to Our <span className="text-gradient-gold">Hospital</span>
              </h1>
              <p className="text-dark-300 font-alt text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Our dental clinic in Matunga East is designed to provide high-quality, comfortable, 
                and stress-free treatments for patients of all ages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <BookAppointmentBtn className="btn-primary text-base px-8 py-4">Book an Appointment</BookAppointmentBtn>
                <a href="tel:+919920066083" className="btn-outline text-base px-8 py-4 border-white/30 text-white hover:bg-white/10">Call Us</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeUp>
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Our Clinic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-5 border border-dark-50/50 hidden md:block">
                  <p className="text-3xl font-heading font-bold text-dark-900">10+ 
Years</p>
                  <p className="text-sm text-dark-500 font-alt">Of Excellence in Dental Care</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <span className="section-subtitle">Overview</span>
              <h2 className="section-title mt-3 mb-6">
                Overview of the <span className="text-gradient-primary">Hospital</span>
              </h2>
              <p className="text-dark-500 font-alt text-lg leading-relaxed">
                Our dental clinic in Matunga East is designed to provide high-quality, comfortable, 
                and stress-free treatments for patients of all ages. We combine modern dental technology 
                with a personalized approach, offering a wide range of services including root canal therapy, 
                teeth whitening, dental veneers, smile makeovers, crowns and bridges, fillings, and preventive 
                care. As a leading cosmetic dentist in Matunga, we focus on both function and aesthetics, 
                ensuring your smile looks as good as it feels.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="section-subtitle">Leadership Member</span>
              <h2 className="section-title mt-3 mb-4">
                About Dr. Khushboo{' '}
                <span className="text-gradient-primary">Doshi Gandhi</span>
              </h2>
            </div>
          </FadeUp>
          <div className="max-w-4xl mx-auto space-y-6 text-dark-500 font-alt text-lg leading-relaxed">
            <FadeUp>
              <p>At Khushboo Dent House Clinic, we pride ourselves on being the best dentist in Matunga, delivering exceptional care for every smile. Conveniently located in Matunga East, we specialize in painless root canal treatments, cosmetic dentistry, and comprehensive oral health services. Whether you&apos;re searching for a &quot;dentist near me in Matunga&quot; or a trusted dental specialist in Matunga, we are here to meet your needs with expertise and compassion.</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-3xl shadow-card p-8 border border-dark-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-dark-900">Dr. Khushboo Doshi Gandhi</h3>
                    <p className="text-primary-500 font-alt font-medium text-base">BDS, MCP</p>
                  </div>
                </div>
                <p>Dr. Khushboo Doshi Gandhi is a respected root canal specialist near me Matunga and cosmetic dentistry expert in Matunga East with over 10 years of experience. She holds B.D.S &amp; M.C.P degrees, is licensed under A-30242, and is known for her gentle, precise, and painless treatment methods. Patients trust her not just for her skill but for her ability to make dental visits comfortable and reassuring. She is available Monday to Saturday, with Sunday appointments on request.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Team */}
      <section className="section-padding relative bg-gradient-to-b from-primary-50/30 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeUp>
              <div className="group bg-white rounded-3xl shadow-card p-8 border border-dark-50/50 h-full hover:-translate-y-2 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <HiLightBulb className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-500">Our Mission</h3>
                <p className="text-dark-500 font-alt text-lg leading-relaxed">
                  To combine advanced dental techniques with personalized attention, making sure every patient 
                  enjoys a healthy, functional, and beautiful smile in a relaxed environment.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="group bg-white rounded-3xl shadow-card p-8 border border-dark-50/50 h-full hover:-translate-y-2 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-dark-900 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <HiEye className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-500">Our Vision</h3>
                <p className="text-dark-500 font-alt text-lg leading-relaxed">
                  To set the benchmark for dental excellence in Matunga by offering world-class care, 
                  innovative treatments, and creating confident smiles that last a lifetime.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="group bg-white rounded-3xl shadow-card p-8 border border-dark-50/50 h-full hover:-translate-y-2 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <HiUsers className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-500">Meet Our Team</h3>
                <p className="text-dark-500 font-alt text-lg leading-relaxed">
                  Our dedicated team of dental professionals works hand-in-hand with Dr. Gandhi to ensure 
                  smooth treatments and exceptional patient experiences. From your first consultation to your 
                  post-treatment care, our team&apos;s friendly and attentive service ensures you always feel at ease.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <FadeUp>
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Clinic Infrastructure" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <span className="section-subtitle">Infrastructure</span>
              <h2 className="section-title mt-3 mb-6">
                Our <span className="text-gradient-primary">Infrastructure</span>
              </h2>
              <p className="text-dark-500 font-alt text-lg leading-relaxed mb-6">
                Our clinic features modern dental chairs, advanced imaging and diagnostic tools, and the 
                latest treatment technology. Located at Shop No. 3, Vasant Breezy Chambers, Dr. Baba Saheb 
                Ambedkar Road, King Circle, Matunga East, Mumbai &ndash; 400019, we maintain strict hygiene 
                and sterilization protocols, ensuring safety and comfort at every visit.
              </p>
              <div className="flex items-start gap-3 text-dark-500 font-alt">
                <HiLocationMarker className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span>Shop No. 3, Vasant Breezy Chambers, Dr. Baba Saheb Ambedkar Road, King Circle, Matunga East, Mumbai &ndash; 400019</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-950">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mt-3 mb-4">
                Why People <span className="text-gradient-gold">Choose Us</span>
              </h2>
            </div>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="w-[180px] h-[240px] bg-white/5 backdrop-blur-xl rounded-2xl px-4 border border-white/10 group hover:bg-white/15 hover:-translate-y-1 hover:shadow-premium-lg hover:border-primary-500/30 transition-all duration-500 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-accent-400 transition-colors duration-500">{item.title}</h3>
                  <p className="text-dark-400 font-alt text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-900 leading-tight mb-6">
              Ready to Experience{' '}
              <span className="text-gradient-primary">Premium Dental Care</span>?
            </h2>
            <p className="text-dark-500 font-alt text-lg max-w-xl mx-auto mb-10">
              Book your consultation today and discover why patients trust Dr. Khushboo&apos;s Dent House.
            </p>
            <BookAppointmentBtn className="btn-primary text-base px-10 py-4">Book an Appointment</BookAppointmentBtn>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
