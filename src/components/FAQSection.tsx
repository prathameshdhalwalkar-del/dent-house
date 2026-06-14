'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: 'What services do you offer at your dental clinic in Matunga?',
    a: 'We provide a full range of dental services including cosmetic dentistry, teeth whitening, root canal treatments, dental implants, crowns & bridges, veneers, orthodontics, smile makeovers, children\'s dentistry, and gum care.',
  },
  {
    q: 'Why choose you as the best dentist in Matunga?',
    a: 'We combine advanced dental technology, years of expertise, and personalized care to deliver pain-free, high-quality treatments. Our focus is on comfort, precision, and long-lasting results.',
  },
  {
    q: 'Do you offer cosmetic dentistry in Matunga East?',
    a: 'Yes. Our cosmetic dentistry services include teeth whitening, veneers, smile makeovers, and other treatments to enhance your smile and boost your confidence.',
  },
  {
    q: 'How long does a professional teeth whitening session take?',
    a: 'A single professional teeth whitening session at our dental clinic in Matunga East usually takes about 45–60 minutes and can brighten your teeth by several shades.',
  },
  {
    q: 'Is a root canal treatment painful?',
    a: 'With modern anesthesia and advanced techniques, root canal treatments are virtually painless. Our root canal specialists near Matunga ensure you remain comfortable throughout the procedure.',
  },
  {
    q: 'How long do dental crowns and bridges last?',
    a: 'With proper care and regular dental check-ups, crowns and bridges can last 10–15 years or more. We provide custom-made, durable restorations that look and feel natural.',
  },
  {
    q: 'Do you offer dental care for children?',
    a: 'Yes. As a family-friendly dental clinic in Matunga East, we provide gentle, stress-free dental care for kids to protect their developing teeth and encourage good oral habits.',
  },
  {
    q: 'What are dental implants, and are they right for me?',
    a: 'Dental implants are permanent replacements for missing teeth. They look and function like natural teeth, and our dental specialists in Matunga can help determine if they\'re suitable for you.',
  },
  {
    q: 'How can I book an appointment with a dentist near me in Matunga?',
    a: 'You can easily book by calling our clinic, filling out our online form, or visiting us directly. We offer flexible scheduling to suit your convenience.',
  },
  {
    q: 'How often should I visit a dental clinic in Matunga East?',
    a: 'For optimal oral health, we recommend visiting the dentist at least twice a year for check-ups and cleanings, even if you don\'t have dental issues.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative bg-gradient-to-b from-white to-primary-50/20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title mt-3 mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden border border-dark-50/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-dark-900 text-lg pr-4">{faq.q}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-dark-500 font-alt leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
