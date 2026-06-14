import type { Metadata } from 'next'
import BlogPage from './BlogPage'
import { getPosts } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'Blog | Dr. Khushboo\'s Dent House — Dental Health & Wellness',
  description: 'Read the latest articles on dental health, treatments, oral hygiene tips, and patient stories from Dr. Khushboo\'s Dent House in Matunga, Mumbai.',
}

export const dynamic = 'force-dynamic'

export default async function Blog() {
  let posts: any[] = []
  try {
    posts = await getPosts()
  } catch (e) {
    console.error('Failed to fetch posts', e)
  }
  return <BlogPage posts={posts} />
}
