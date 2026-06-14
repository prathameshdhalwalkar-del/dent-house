'use client'

import { useEffect } from 'react'

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash
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
  }, [])

  return null
}
