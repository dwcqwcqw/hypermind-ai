import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Services — AI Search Optimization Agency | HyperMind',
  description:
    'HyperMind offers full-service Generative Engine Optimization (GEO) including AI visibility optimization, AI mention growth, AI reputation management, citation strategy, and AI search traffic growth.',
  openGraph: {
    title: 'GEO Services — AI Search Optimization Agency | HyperMind',
    description:
      'Full-service GEO agency services to optimize your brand\'s visibility, mentions, and reputation across AI search platforms.',
    url: 'https://www.hypermindai.tech/services',
    siteName: 'HyperMind',
  },
  alternates: {
    canonical: '/services/',
  },
}

interface ServiceItem {
  title: string
  href: string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    title: 'AI Visibility Optimization',
    href: '/services/ai-visibility-optimization',
    description:
      'Increase how often AI assistants recommend your brand. We optimize your content, authority signals, and digital knowledge graph so AI models choose you over competitors.',
  },
  {
    title: 'AI Mention Growth',
    href: '/services/ai-mention-growth',
    description:
      'Grow the frequency and quality of your brand mentions in AI-generated answers through targeted content strategy and authority building.',
  },
  {
    title: 'AI Reputation Management',
    href: '/services/ai-reputation-management',
    description:
      'Control how AI describes your brand. We monitor AI sentiment, correct inaccuracies, and shape the narrative AI assistants use about your company.',
  },
  {
    title: 'AI Citation Strategy',
    href: '/services/ai-citation-strategy',
    description:
      'Become a primary source that AI models cite in their answers. We build citation authority through strategic content placement and link engineering.',
  },
  {
    title: 'AI Search Traffic Growth',
    href: '/services/ai-search-traffic-growth',
    description:
      'Convert AI mentions into measurable website traffic and leads. We optimize the full funnel from AI recommendation to conversion.',
  },
  {
    title: 'AI Narrative Control',
    href: '/services/ai-narrative-control',
    description:
      'Shape the story AI tells about your brand. We engineer the content ecosystem so AI assistants frame your brand exactly how you want.',
  },
  {
    title: 'AI Answer Optimization',
    href: '/services/ai-answer-optimization',
    description:
      'Optimize how AI platforms answer questions about your category. Ensure your brand appears in the right context with accurate, favorable positioning.',
  },
  {
    title: 'AI Knowledge Graph Strategy',
    href: '/services/ai-knowledge-graph-strategy',
    description:
      'Strengthen your brand\'s presence in the knowledge graphs AI models rely on. We build entity authority, structured data, and semantic connections.',
  },
]

export default function ServicesPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.hypermindai.tech/services/' },
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
            GEO Agency Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            HyperMind is a full-service Generative Engine Optimization (GEO) agency. We help brands get recommended, cited, and trusted by AI assistants — from ChatGPT and Gemini to Perplexity and Claude. Our services cover every dimension of AI search visibility.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get a Free GEO Audit
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our GEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is designed to improve a specific dimension of your brand&apos;s AI search presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:underline">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Our engagement model is designed for measurable outcomes at every stage.
            </p>
          </div>
          <div className="space-y-10">
            {[
              { step: '01', title: 'AI Visibility Audit', text: 'We assess your brand\'s current standing across every major AI platform — mentions, sentiment, citations, and competitive positioning.' },
              { step: '02', title: 'Strategy Development', text: 'We build a custom GEO strategy targeting the AI platforms, prompts, and categories that matter most to your business.' },
              { step: '03', title: 'Execution & Optimization', text: 'Our team implements the strategy — content optimization, authority building, citation engineering, and knowledge graph enhancements.' },
              { step: '04', title: 'Reporting & Iteration', text: 'Monthly reporting with clear metrics: AI mention growth, visibility score changes, traffic attribution, and ROI.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-mono text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free GEO audit and we&apos;ll show you exactly how AI assistants talk about your brand — and what we can do about it.
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
