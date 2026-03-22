import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Pricing — GEO Agency & Platform Plans | HyperMind',
  description:
    'HyperMind GEO pricing plans: AI Visibility Monitoring, GEO Strategy, Full GEO Agency, and Enterprise GEO. Contact us for custom pricing tailored to your AI search goals.',
  openGraph: {
    title: 'Pricing — GEO Agency & Platform Plans | HyperMind',
    description:
      'Explore HyperMind\'s GEO plans — from AI visibility monitoring to full-service enterprise optimization.',
    url: 'https://www.hypermindai.tech/pricing',
    siteName: 'HyperMind',
  },
  alternates: {
    canonical: '/pricing/',
  },
}

interface PricingTier {
  name: string
  tagline: string
  features: string[]
  highlighted?: boolean
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'AI Visibility Monitoring',
    tagline: 'Track your AI presence across every platform',
    features: [
      'AI visibility score tracking',
      'AI mention monitoring (3 platforms)',
      'Monthly AI visibility report',
      'Basic sentiment analysis',
      'Competitor tracking (2 competitors)',
      'Email alerts for new mentions',
    ],
  },
  {
    name: 'GEO Strategy',
    tagline: 'Monitoring + strategic roadmap for AI optimization',
    features: [
      'Everything in Monitoring, plus:',
      'Full 9-platform AI monitoring',
      'Custom GEO strategy document',
      'Quarterly strategy sessions',
      'Prompt intelligence reports',
      'Competitor tracking (5 competitors)',
      'AI citation source analysis',
      'Priority support',
    ],
  },
  {
    name: 'Full GEO Agency',
    tagline: 'Done-for-you AI search optimization',
    highlighted: true,
    features: [
      'Everything in GEO Strategy, plus:',
      'Dedicated GEO strategist',
      'Content optimization & creation',
      'AI citation building',
      'Authority & link engineering',
      'Knowledge graph optimization',
      'Monthly performance reporting',
      'Competitor tracking (10 competitors)',
      'AI narrative management',
    ],
  },
  {
    name: 'Enterprise GEO',
    tagline: 'Custom GEO program for large organizations',
    features: [
      'Everything in Full Agency, plus:',
      'Multi-brand / multi-product support',
      'Unlimited competitor tracking',
      'Custom AI platform integrations',
      'Dedicated account team',
      'Weekly strategy syncs',
      'Custom reporting & dashboards',
      'SLA-backed response times',
      'Global / multi-language GEO',
    ],
  },
]

const FEATURE_COMPARISON = [
  { feature: 'AI Visibility Score', tiers: [true, true, true, true] },
  { feature: 'AI Mention Tracking', tiers: ['3 platforms', '9+ platforms', '9+ platforms', '9+ platforms'] },
  { feature: 'Competitor Tracking', tiers: ['2', '5', '10', 'Unlimited'] },
  { feature: 'Sentiment Analysis', tiers: ['Basic', 'Advanced', 'Advanced', 'Advanced'] },
  { feature: 'Prompt Intelligence', tiers: [false, true, true, true] },
  { feature: 'Citation Source Analysis', tiers: [false, true, true, true] },
  { feature: 'GEO Strategy Document', tiers: [false, true, true, true] },
  { feature: 'Content Optimization', tiers: [false, false, true, true] },
  { feature: 'Citation Building', tiers: [false, false, true, true] },
  { feature: 'Dedicated Strategist', tiers: [false, false, true, true] },
  { feature: 'Knowledge Graph Optimization', tiers: [false, false, true, true] },
  { feature: 'Multi-Brand Support', tiers: [false, false, false, true] },
  { feature: 'Custom Integrations', tiers: [false, false, false, true] },
]

function renderTierValue(value: boolean | string) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-black mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (value === false) {
    return <span className="text-gray-300">—</span>
  }
  return <span className="text-sm text-gray-700">{value}</span>
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hypermindai.tech/' },
                  { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.hypermindai.tech/pricing/' },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO Plans &amp; Pricing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the right level of GEO support for your brand. From AI visibility monitoring to full-service agency execution, every plan is designed to improve your presence in AI search. All pricing is custom — contact us for a tailored quote.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? 'bg-black text-white border-2 border-black'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-black'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tier.tagline}
                </p>
                <div className={`text-2xl font-bold mb-6 ${tier.highlighted ? 'text-white' : 'text-black'}`}>
                  Contact Us
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-white' : 'text-black'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${tier.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-6 py-3 rounded-lg text-sm font-medium transition ${
                    tier.highlighted
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-gray-600">
              See exactly what&apos;s included in each plan.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-1/3">Feature</th>
                  {PRICING_TIERS.map((tier) => (
                    <th key={tier.name} className="py-4 px-4 text-sm font-bold text-black text-center">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-sm text-gray-700">{row.feature}</td>
                    {row.tiers.map((value, i) => (
                      <td key={i} className="py-4 px-4 text-center">
                        {renderTierValue(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: 'Why is pricing "Contact Us" instead of fixed?',
                a: 'GEO strategy varies significantly by industry, brand size, competitive landscape, and goals. Custom pricing ensures you only pay for what you need and get a strategy tailored to your situation.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most clients see measurable improvements in AI visibility within 60-90 days. Significant mention growth and traffic impact typically emerge within 3-6 months.',
              },
              {
                q: 'Do you require long-term contracts?',
                a: 'We offer flexible engagement terms. Most clients start with a 3-month pilot to prove ROI before committing to longer engagements.',
              },
              {
                q: 'What AI platforms do you cover?',
                a: 'We monitor and optimize across ChatGPT, Google Gemini, Perplexity, Claude, Microsoft Copilot, Meta AI, Grok, SearchGPT, DeepSeek, and more as new platforms emerge.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-lg font-bold text-black mb-3">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Invest in AI Visibility?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with a free AI visibility audit. We&apos;ll show you where your brand stands and recommend the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Get a Free GEO Audit
            </a>
            <Link
              href="/case-studies"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
