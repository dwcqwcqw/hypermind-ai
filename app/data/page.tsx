import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Search Data Hub — AI Visibility Leaderboards & Research | HyperMind',
  description:
    'Explore HyperMind\'s AI Search Data Hub — AI visibility leaderboards, brand mention indexes, citation source databases, search trends, prompt trends, and brand sentiment indexes.',
  openGraph: {
    title: 'AI Search Data Hub — AI Visibility Leaderboards & Research | HyperMind',
    description:
      'The most comprehensive AI search data available. Leaderboards, indexes, and trend reports for AI visibility.',
    url: 'https://www.hypermindai.tech/data',
    siteName: 'HyperMind',
  },
}

interface DataProduct {
  title: string
  href: string
  description: string
}

const DATA_PRODUCTS: DataProduct[] = [
  {
    title: 'AI Visibility Leaderboard',
    href: '/data/ai-visibility-leaderboard',
    description:
      'Rankings of the most visible brands in AI search, updated weekly. See which companies AI assistants recommend most frequently across categories.',
  },
  {
    title: 'AI Brand Mention Index',
    href: '/data/ai-brand-mention-index',
    description:
      'Comprehensive index of brand mention frequency across ChatGPT, Gemini, Perplexity, and other AI platforms. Track mention trends over time.',
  },
  {
    title: 'AI Citation Sources Database',
    href: '/data/ai-citation-sources-database',
    description:
      'Discover which websites, publications, and sources AI models cite most often when generating answers. The definitive guide to AI citation authority.',
  },
  {
    title: 'AI Search Trends',
    href: '/data/ai-search-trends',
    description:
      'Emerging patterns in how users interact with AI search. Track shifts in prompt behavior, platform usage, and category dynamics.',
  },
  {
    title: 'AI Prompt Trends',
    href: '/data/ai-prompt-trends',
    description:
      'The most common prompts users ask AI assistants by industry and category. Understand what your audience is asking AI about.',
  },
  {
    title: 'AI Brand Sentiment Index',
    href: '/data/ai-brand-sentiment-index',
    description:
      'How positively or negatively AI assistants describe brands across categories. Track sentiment shifts and compare against competitors.',
  },
]

export default function DataPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            AI Search Data Hub
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            The HyperMind AI Search Data Hub provides the most comprehensive AI search intelligence available — leaderboards, mention indexes, citation databases, and trend reports that reveal how AI assistants recommend brands across every category. This data powers smarter GEO strategies and helps brands understand the AI search landscape.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Access the Data Hub
          </a>
        </div>
      </section>

      {/* Data Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Explore Our Data
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI search data that turns AI visibility from a mystery into a measurable discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA_PRODUCTS.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Data Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why AI Search Data Matters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            AI citations are the new backlinks. The brands that AI assistants recommend get free, high-intent traffic from millions of daily AI searches. But unlike traditional search, AI recommendation algorithms are opaque — you can&apos;t see rankings the way you see Google results. Our data makes AI search transparent, measurable, and actionable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {[
              { value: '9+', label: 'AI platforms tracked' },
              { value: '10K+', label: 'Brands monitored' },
              { value: 'Weekly', label: 'Data updates' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get Your Brand&apos;s AI Data
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            See exactly how your brand ranks in AI search — visibility scores, mention frequency, sentiment, and competitive positioning.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request a Free Report
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
