import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { HiCalendar, HiClock, HiArrowLeft } from 'react-icons/hi'
import { getPost } from '@/sanity/client'
import { notFound } from 'next/navigation'

const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <img
          src={value.asset?.url || value.asset?.url}
          alt={value.alt || ''}
          className="w-full rounded-2xl shadow-card"
        />
      </figure>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-900 mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark-900 mt-8 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg sm:text-xl font-heading font-bold text-dark-900 mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 bg-primary-50/50 pl-6 py-4 my-6 italic text-dark-600 font-alt text-lg rounded-r-2xl">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="text-dark-500 font-alt text-lg leading-relaxed mb-5">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-5 space-y-2 text-dark-500 font-alt text-lg">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-dark-500 font-alt text-lg">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-dark-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline hover:text-primary-700 transition-colors">
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug)
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <article className="pt-32 pb-20 bg-gradient-to-b from-white to-primary-50/30 min-h-screen">
        <div className="container-custom max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark-500 hover:text-primary-600 font-alt font-medium transition-colors mb-8 group"
          >
            <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block bg-primary-100 text-primary-600 font-alt font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-dark-400 font-alt text-sm mb-10 pb-8 border-b border-dark-100">
            <span className="flex items-center gap-2">
              <HiCalendar className="w-4 h-4" />
              {publishedDate}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-2">
                <HiClock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            )}
          </div>

          {post.imageUrl && (
            <div className="rounded-3xl overflow-hidden shadow-card mb-12">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          )}

          {post.excerpt && (
            <p className="text-xl text-dark-600 font-alt leading-relaxed mb-10 italic border-l-4 border-primary-500 pl-6">
              {post.excerpt}
            </p>
          )}

          <div className="prose-style">
            <PortableText value={post.content} components={ptComponents as any} />
          </div>

          <div className="mt-16 pt-8 border-t border-dark-100 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-alt font-medium transition-colors group"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
