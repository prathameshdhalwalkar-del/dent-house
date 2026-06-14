import type { Metadata } from 'next'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: 'About Us | Dr. Khushboo\'s Dent House — Premium Dental Clinic Matunga Mumbai',
  description: 'Learn about Dr. Khushboo Doshi Gandhi and our team. We combine advanced dental technology with compassionate care at our Matunga East clinic.',
}

export default function About() {
  return <AboutPage />
}
