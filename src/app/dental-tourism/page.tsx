import type { Metadata } from 'next'
import DentalTourismPage from './DentalTourismPage'

export const metadata: Metadata = {
  title: 'Dental Tourism in Mumbai | Affordable Dental Treatments India | Dr. Khushboo\'s Dent House',
  description: 'World-class dental care at affordable costs in Mumbai. Dental tourism packages including smile makeovers, implants & full mouth rehabilitation with travel assistance.',
  keywords: 'dental tourism in Mumbai, affordable dental implants India, best dental clinic for tourists, dental tourism packages, dental vacation India',
  openGraph: {
    title: 'Dental Tourism Mumbai — Affordable World-Class Dental Care | Dr. Khushboo\'s Dent House',
    description: 'Combine your dental treatment with a memorable trip to Mumbai. Expert care, travel assistance & sightseeing — all in one package.',
  },
}

export default function DentalTourism() {
  return <DentalTourismPage />
}
