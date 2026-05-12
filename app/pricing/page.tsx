import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Pricing & AI Visibility Plans',
  description:
    'HyperMind pricing starts at $79/month for AI visibility monitoring, with GEO execution and enterprise managed traffic operations for social, content, and growth teams.',
  openGraph: {
    title: 'Pricing — High-Value GEO Agency & Platform Plans | HyperMind',
    description:
      'Explore HyperMind\'s GEO and managed growth plans — from AI visibility monitoring to full-service AI search optimization and enterprise traffic operations.',
    url: 'https://hypermindgeo.com/pricing',
    siteName: 'HyperMind',
  },
  alternates: {
    canonical: '/pricing/',
  },
}

interface PricingTier {
  name: string
  tagline: string
  price: string
  unit: string
  priceNote: string
  features: string[]
  highlighted?: boolean
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Monitor',
    tagline: 'Affordable AI visibility tracking for focused teams',
    price: '$79',
    unit: '/mo',
    priceNote: 'Start here before paying enterprise-tool prices.',
    features: [
      'Track 100 priority prompts',
      'AI mention monitoring across 5 platforms',
      'Weekly AI visibility report',
      'Sentiment and answer framing review',
      'Competitor tracking for 3 competitors',
      'Citation source gap analysis',
    ],
  },
  {
    name: 'Optimize',
    tagline: 'Strategy, prompt testing, and page recommendations',
    price: '$249',
    unit: '/mo',
    priceNote: 'Built to beat bundled content tools on GEO value.',
    features: [
      'Everything in Monitoring, plus:',
      'Track 500 priority prompts',
      'Full 9+ platform AI monitoring',
      'Monthly GEO action roadmap',
      'Prompt cluster and buyer journey mapping',
      'Competitor tracking for 8 competitors',
      'Citation source prioritization',
      'Monthly strategy call',
    ],
  },
  {
    name: 'Growth Agency',
    tagline: 'Done-for-you GEO execution without enterprise lock-in',
    price: '$799',
    unit: '/mo',
    priceNote: 'Execution included, not just another dashboard.',
    highlighted: true,
    features: [
      'Everything in GEO Strategy, plus:',
      'Dedicated GEO strategist',
      '4 answer-ready content briefs or updates per month',
      'Citation outreach and source development',
      'Technical crawl and schema recommendations',
      'Knowledge graph optimization',
      'Biweekly model answer testing',
      'Competitor tracking for 15 competitors',
      'AI narrative improvement backlog',
    ],
  },
  {
    name: 'Scale',
    tagline: 'Custom GEO + managed traffic operations',
    price: 'Custom',
    unit: '',
    priceNote: 'For teams that need AI visibility, social operations, content production, and growth execution.',
    features: [
      'Everything in Growth Agency, plus:',
      'Multi-brand / multi-product GEO support',
      'Dedicated traffic operations experts',
      'Copywriting, publishing, and social account management',
      'Text, image, short-form video, and campaign asset production',
      'TikTok, YouTube, Instagram, and cross-channel operations',
      'Organic content calendar and growth experiments',
      'Unlimited competitor tracking',
      'Weekly strategy syncs',
      'Custom reporting across AI visibility, traffic, new users, and orders',
      'Global / multi-language governance',
    ],
  },
]

const FEATURE_COMPARISON = [
  { feature: 'AI Visibility Score', tiers: [true, true, true, true] },
  { feature: 'Tracked Prompts', tiers: ['100', '500', '1,500', 'Custom'] },
  { feature: 'AI Mention Tracking', tiers: ['5 platforms', '9+ platforms', '9+ platforms', '9+ platforms'] },
  { feature: 'Competitor Tracking', tiers: ['3', '8', '15', 'Unlimited'] },
  { feature: 'Sentiment Analysis', tiers: [true, 'Advanced', 'Advanced', 'Advanced'] },
  { feature: 'Prompt Intelligence', tiers: ['Core', true, true, true] },
  { feature: 'Citation Source Analysis', tiers: [false, true, true, true] },
  { feature: 'GEO Action Roadmap', tiers: [false, true, true, true] },
  { feature: 'Content Optimization', tiers: [false, false, true, true] },
  { feature: 'Citation Building', tiers: [false, false, true, true] },
  { feature: 'Dedicated Strategist', tiers: [false, false, true, true] },
  { feature: 'Knowledge Graph Optimization', tiers: [false, false, true, true] },
  { feature: 'Managed Social Operations', tiers: [false, false, false, true] },
  { feature: 'Multi-Format Content Production', tiers: [false, false, false, true] },
  { feature: 'TikTok / YouTube / Instagram Operations', tiers: [false, false, false, true] },
  { feature: 'Traffic, User, and Order Growth Reporting', tiers: [false, false, false, true] },
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hypermindgeo.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://hypermindgeo.com/pricing/' },
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
            GEO Pricing Built for Better ROI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HyperMind gives teams a lower-cost way to monitor, test, and improve AI visibility without buying an enterprise-only dashboard or a bundled writing suite. Start with focused monitoring, then add strategy, done-for-you GEO execution, and enterprise traffic operations as the opportunity proves itself.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Public competitor pricing often starts around $199-$499/month for serious GEO features, with enterprise plans commonly much higher. HyperMind keeps the entry plan lean and puts budget into actions that can improve mentions, citations, and recommendations.
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
                <div className={`mb-3 ${tier.highlighted ? 'text-white' : 'text-black'}`}>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.unit && <span className="text-base font-medium opacity-70">{tier.unit}</span>}
                </div>
                <div className={`text-xs leading-relaxed mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {tier.priceNote}
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
                  {tier.price === 'Custom' ? 'Talk to Sales' : 'Start with Audit'}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ['Lower entry price', 'Monitor starts below the common GEO-feature price floor, so teams can validate demand before scaling spend.'],
              ['Execution over dashboards', 'Growth Agency includes briefs, citation work, technical recommendations, and repeated model testing.'],
              ['Enterprise growth operations', 'Scale adds expert-led social operations, content production, and cross-channel publishing for teams that need traffic, users, and order growth support.'],
            ].map(([title, body]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-black mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
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
                q: 'Why is HyperMind priced lower than many AI visibility platforms?',
                a: 'HyperMind is designed for teams that want the work done, not just another expensive analytics dashboard. We keep monitoring plans focused, then add strategy and execution only when the prompt opportunity justifies it.',
              },
              {
                q: 'How does this compare with Profound, Peec, or Writesonic?',
                a: 'Many competitors are strongest as enterprise analytics suites, self-serve monitoring tools, or content platforms with GEO added on top. HyperMind is positioned as a high-value GEO operating system: prompt testing, citation analysis, content recommendations, and done-for-you optimization in one plan.',
              },
              {
                q: 'What is included in the enterprise managed traffic service?',
                a: 'The custom Scale plan can combine GEO with managed traffic operations: expert copywriting, account posting, social media management, multi-format content production, and TikTok, YouTube, Instagram, and cross-channel publishing support. The goal is to connect AI visibility work with practical growth execution across traffic, new users, and orders.',
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
            Start with a free AI visibility audit. We&apos;ll show you where your brand stands and recommend the right GEO, content, and traffic operations plan.
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
