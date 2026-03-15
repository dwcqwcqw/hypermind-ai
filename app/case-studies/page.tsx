import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Case Studies — GEO Results & Client Success Stories | HyperMind',
  description:
    'See real GEO results from HyperMind clients. Case studies showcasing AI mention growth, AI visibility improvements, citation increases, and AI search traffic gains across industries.',
  openGraph: {
    title: 'Case Studies — GEO Results & Client Success Stories | HyperMind',
    description:
      'Real results from brands that invested in Generative Engine Optimization with HyperMind.',
    url: 'https://www.hypermindai.tech/case-studies',
    siteName: 'HyperMind',
  },
}

interface CaseStudy {
  slug: string
  title: string
  industry: string
  description: string
  metrics: {
    label: string
    before: string
    after: string
  }[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'saas-ai-mention-growth',
    title: 'How a B2B SaaS Company 8x\'d AI Mentions in 90 Days',
    industry: 'B2B SaaS',
    description:
      'A mid-market project management SaaS was invisible in AI search. After 90 days of GEO optimization, they became a top-3 recommendation in their category across ChatGPT and Gemini.',
    metrics: [
      { label: 'AI Mentions / Month', before: '5', after: '42' },
      { label: 'AI Referral Traffic', before: 'Baseline', after: '+280%' },
      { label: 'AI Visibility Score', before: '8', after: '61' },
    ],
  },
  {
    slug: 'fintech-ai-visibility',
    title: 'Fintech Startup Goes from Zero to 24 AI Citations',
    industry: 'Fintech',
    description:
      'A fintech startup had zero presence in AI answers. Through targeted citation strategy and authority building, they became a consistently cited source across financial planning prompts.',
    metrics: [
      { label: 'AI Visibility Score', before: '12', after: '67' },
      { label: 'AI Citations / Month', before: '0', after: '24' },
      { label: 'AI Sentiment Score', before: '0.3', after: '0.82' },
    ],
  },
  {
    slug: 'enterprise-share-of-voice',
    title: 'Enterprise Brand Captures 31% AI Share of Voice',
    industry: 'Enterprise',
    description:
      'A Fortune 500 brand was losing ground to smaller competitors in AI recommendations. Our GEO strategy reclaimed their authority and built dominant share of voice in AI search.',
    metrics: [
      { label: 'AI Share of Voice', before: '3%', after: '31%' },
      { label: 'AI Referral Traffic', before: 'Baseline', after: '+450%' },
      { label: 'Competitor Gap', before: '-22pts', after: '+14pts' },
    ],
  },
  {
    slug: 'ecommerce-product-recommendations',
    title: 'Ecommerce Brand Appears in 3x More AI Product Picks',
    industry: 'Ecommerce',
    description:
      'An ecommerce brand was missing from AI shopping recommendations. After optimizing product content and review signals, they tripled their appearance rate in AI product comparison prompts.',
    metrics: [
      { label: 'AI Product Mentions', before: '11', after: '38' },
      { label: 'AI Recommendation Rate', before: '7%', after: '29%' },
      { label: 'AI-Driven Revenue', before: '$0', after: '$47K/mo' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Real results from real brands. These case studies demonstrate measurable improvements in AI visibility, AI mentions, citation rates, and AI-driven traffic — achieved through HyperMind&apos;s Generative Engine Optimization methodology.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:underline">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                      {study.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 md:gap-6 shrink-0">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                        <div className="flex items-center justify-center gap-1.5">
                          <span className="text-sm text-gray-400 line-through">{metric.before}</span>
                          <span className="text-xs text-gray-400">→</span>
                          <span className="text-lg font-bold text-black">{metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want Results Like These?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free AI visibility audit and see exactly where your brand stands in AI search — then let us show you what&apos;s possible.
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
              href="/pricing"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
