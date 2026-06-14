'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function HashScroll() {
  const [hash, setHash] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setHash(window.location.hash)
  }, [pathname])

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (hash) {
      const retry = setInterval(() => {
        const el = document.querySelector(hash)
        if (el) {
          clearInterval(retry)
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      setTimeout(() => clearInterval(retry), 5000)
    }
  }, [hash])

  return null
}
