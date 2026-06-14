import type { Metadata } from 'next'
import './globals.css'
import HashScroll from '@/components/HashScroll'

export const metadata: Metadata = {
  title: 'Dr. Khushboo\'s Dent House | Premium Dental Clinic in Matunga, Mumbai',
  description: 'Best dentist in Matunga, Mumbai. Advanced dental care including implants, root canal, teeth whitening, braces, and cosmetic dentistry. Pain-free treatments in a modern, hygienic environment.',
  keywords: 'dentist matunga, dental clinic matunga, dental implants, root canal, teeth whitening, braces, cosmetic dentistry, dentist mumbai, painless dentist',
  openGraph: {
    title: 'Dr. Khushboo\'s Dent House | Premium Dental Care',
    description: 'Creating beautiful & healthy smiles with advanced dental care, precision, comfort, and trust.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dr. Khushboo\'s Dent House',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Khushboo\'s Dent House',
    description: 'Premium dental care in Matunga, Mumbai.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.drkhushboosdenthouse.com'),
  alternates: { canonical: 'https://www.drkhushboosdenthouse.com' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: "Dr. Khushboo's Dent House",
              description: 'Premium dental clinic offering advanced dental care in Matunga, Mumbai.',
              url: 'https://www.drkhushboosdenthouse.com',
              telephone: '+919876543210',
              email: 'info@drkhushboosdenthouse.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Shop 3, Vasant Breezy Chambers, Dr. Baba Saheb Ambedkar Road, Kings Cir',
                addressLocality: 'Matunga East',
                addressRegion: 'Mumbai',
                postalCode: '400019',
                addressCountry: 'IN',
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '20:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
              ],
              medicalSpecialty: 'Dentistry',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <HashScroll />
        {children}
      </body>
    </html>
  )
}
