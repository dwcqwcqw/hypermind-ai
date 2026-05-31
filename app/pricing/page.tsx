import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingPlans from './PricingPlans'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Membership & Credit Plans',
  description:
    'HyperMind membership and credit plans include Free trial credits, Pro AI visibility growth, Max high-frequency monitoring, and Enterprise managed GEO, SEO, and social operations.',
  openGraph: {
    title: 'Membership & Credit Plans | HyperMind',
    description:
      'Compare HyperMind Free, Pro, Max, and Enterprise plans with monthly and yearly pricing, credit allowances, prompt capacity, AI engines, and managed growth services.',
    url: 'https://hypermindgeo.com/pricing',
    siteName: 'HyperMind',
  },
  alternates: {
    canonical: '/pricing/',
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hypermindgeo.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://hypermindgeo.com/pricing/' },
                ],
              },
            ],
          }),
        }}
      />
      <PricingPlans />
      <Footer />
    </main>
  )
}
