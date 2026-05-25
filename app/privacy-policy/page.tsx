import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Privacy Policy | HyperMind',
  description:
    'Read the HyperMind privacy policy for details about the information we collect, how we use it, and how to contact us about privacy requests.',
  alternates: { canonical: '/privacy-policy/' },
  openGraph: {
    title: 'Privacy Policy | HyperMind',
    description:
      'How HyperMind handles website, contact, analytics, and service-related information.',
    url: 'https://hypermindgeo.com/privacy-policy/',
    siteName: 'HyperMind',
  },
}

const POLICY_SECTIONS = [
  {
    title: 'Information we collect',
    body: [
      'We collect information you choose to provide, such as your name, business email, company, role, message content, demo requests, and other details submitted through forms or direct communications.',
      'We may also collect technical information when you visit our website, including device type, browser type, IP address, referring pages, pages viewed, approximate location, and interaction data. This helps us understand site performance, security, and content relevance.',
      'If you become a customer, we may process business data needed to provide GEO strategy, AI visibility monitoring, reporting, support, billing, and account administration.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use information to respond to inquiries, provide requested services, operate and improve HyperMind, personalize website and product experiences, measure marketing performance, maintain security, and comply with legal obligations.',
      'We may use aggregated or de-identified information to understand AI search visibility trends, improve our methodology, and develop benchmarks. Aggregated information does not identify a specific person or customer.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'Our website may use cookies, analytics tools, pixels, or similar technologies to remember preferences, understand traffic sources, measure campaign performance, and improve page quality.',
      'You can control cookies through your browser settings. Blocking some cookies may affect how certain website features work.',
    ],
  },
  {
    title: 'How we share information',
    body: [
      'We do not sell personal information. We may share information with service providers that help us operate our website, host infrastructure, manage customer communications, analyze usage, process payments, or deliver support.',
      'We may disclose information if required by law, to protect rights and safety, to prevent abuse, or in connection with a business transaction such as a merger, acquisition, financing, or sale of assets.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'We retain information for as long as needed to provide services, maintain business records, resolve disputes, enforce agreements, and comply with legal obligations.',
      'Retention periods may vary based on the type of information, customer relationship, legal requirements, and operational needs.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration.',
      'No internet or storage system is completely secure, so we cannot guarantee absolute security. We work to keep our safeguards proportionate to the sensitivity of the information we process.',
    ],
  },
  {
    title: 'International processing',
    body: [
      'HyperMind may process information in countries where we, our team members, or our service providers operate. These countries may have privacy laws that differ from those in your location.',
      'Where required, we use appropriate safeguards for international transfers of personal information.',
    ],
  },
  {
    title: 'Your choices and rights',
    body: [
      'Depending on your location, you may have rights to access, correct, delete, restrict, object to, or receive a copy of personal information we hold about you.',
      'You may opt out of marketing emails by using the unsubscribe link in those messages or by contacting us. We may still send service-related messages when necessary.',
    ],
  },
  {
    title: 'Children',
    body: [
      'HyperMind is designed for business users and is not intended for children under 13. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date and may provide additional notice where appropriate.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PrivacyPolicy',
            name: 'Privacy Policy',
            url: 'https://hypermindgeo.com/privacy-policy/',
            dateModified: '2026-05-25',
            publisher: {
              '@type': 'Organization',
              name: 'HyperMind',
              url: 'https://hypermindgeo.com/',
            },
          }),
        }}
      />

      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            This Privacy Policy explains how HyperMind collects, uses, shares, and protects information when you visit hypermindgeo.com, contact us, or use our services.
          </p>
          <p className="text-sm text-gray-500">Effective date: May 25, 2026</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {POLICY_SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Contact us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or want to make a privacy request, contact us at{' '}
              <a href="mailto:privacy@hypermindgeo.com" className="text-black underline underline-offset-4">
                privacy@hypermindgeo.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
