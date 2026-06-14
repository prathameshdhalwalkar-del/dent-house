'use client'

import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import BookAppointmentBtn from '@/components/BookAppointmentBtn'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  readTime: number
  publishedAt: string
  imageUrl: string | null
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <>
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
              <span className="text-accent-400 font-heading font-semibold tracking-widest uppercase text-sm sm:text-base">Our Blog</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mt-4 mb-6">
                Dental Health & <span className="text-gradient-gold">Wellness</span>
              </h1>
              <p className="text-dark-300 font-alt text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Expert advice, treatment guides, and patient stories to help you achieve your healthiest smile.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="font-heading font-bold text-2xl text-dark-900 mb-4">No blog posts yet</h3>
              <p className="text-dark-500 font-alt text-lg max-w-md mx-auto">
                Check back soon for dental health tips, treatment guides, and more from Dr. Khushboo&apos;s team.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, i) => (
                <FadeUp key={post._id} delay={i * 0.05}>
                  <a href={`/blog/${encodeURIComponent(post.slug?.current || '')}`} className="block group bg-white rounded-3xl overflow-hidden shadow-card border border-dark-50/50 hover:shadow-premium hover:-translate-y-1 transition-all duration-500 flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={post.imageUrl || 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {post.category && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-primary-600 font-alt font-semibold text-xs px-3 py-1.5 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-dark-400 font-alt text-xs mb-3">
                        {post.publishedAt && (
                          <span className="flex items-center gap-1.5">
                            <HiCalendar className="w-3.5 h-3.5" />
                            {formatDate(post.publishedAt)}
                          </span>
                        )}
                        {post.readTime && (
                          <span className="flex items-center gap-1.5">
                            <HiClock className="w-3.5 h-3.5" />
                            {post.readTime} min read
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-dark-500 font-alt text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-2 text-primary-500 font-alt font-semibold text-sm mt-auto">
                        Read More
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </div>
          )}

          <FadeUp>
            <div className="text-center mt-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-900 leading-tight mb-6">
                Want Personalised{' '}
                <span className="text-gradient-primary">Dental Advice</span>?
              </h2>
              <p className="text-dark-500 font-alt text-lg max-w-xl mx-auto mb-8">
                Book a consultation with Dr. Khushboo and get expert guidance tailored to your dental needs.
              </p>
              <BookAppointmentBtn className="btn-primary text-base px-10 py-4">Book an Appointment</BookAppointmentBtn>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
