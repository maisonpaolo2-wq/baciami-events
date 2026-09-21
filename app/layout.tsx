import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { site } from '@/content/data'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | ${site.tagline}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.fullName,
    title: `${site.fullName} | ${site.tagline}`,
    description: site.description,
    images: [{ url: '/photos/couple-cypress.jpg', width: 1200, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} | ${site.tagline}`,
    description: site.description,
    images: ['/photos/couple-cypress.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.fullName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.structuredDataAddress.locality,
    addressRegion: site.structuredDataAddress.region,
    addressCountry: site.structuredDataAddress.country,
  },
  sameAs: [site.instagramUrl],
  priceRange: '€€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
