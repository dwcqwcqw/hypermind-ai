import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Compare GEO Platforms | HyperMind',
  description:
    'Compare HyperMind\'s GEO platform and agency services against alternatives including Profound, Peec, Writesonic, traditional SEO tools, and PR agencies.',
  openGraph: {
    title: 'Compare GEO Platforms | HyperMind',
    description:
      'See how HyperMind stacks up against alternative approaches to AI search visibility.',
    url: 'https://www.hypermindai.tech/compare',
    siteName: 'HyperMind',
  },
}

interface ComparisonItem {
  title: string
  slug: string
  description: string
  hypermindAdvantage: string
}

const COMPARISONS: ComparisonItem[] = [
  {
    title: 'HyperMind vs Profound',
    slug: 'hypermind-vs-profound',
    description:
      'Both platforms track AI visibility, but HyperMind combines monitoring with full-service GEO agency execution. See the detailed feature comparison.',
    hypermindAdvantage: 'Full-service agency + platform vs monitoring only',
  },
  {
    title: 'HyperMind vs Peec',
    slug: 'hypermind-vs-peec',
    description:
      'Compare HyperMind\'s comprehensive GEO approach with Peec\'s AI analytics. Understand the differences in coverage, methodology, and execution support.',
    hypermindAdvantage: 'Broader AI platform coverage + execution services',
  },
  {
    title: 'HyperMind vs Writesonic',
    slug: 'hypermind-vs-writesonic',
    description:
      'Writesonic focuses on AI content generation. HyperMind focuses on getting your brand recommended by AI. Two fundamentally different approaches.',
    hypermindAdvantage: 'AI visibility optimization vs AI content generation',
  },
  {
    title: 'HyperMind vs SEO Tools',
    slug: 'hypermind-vs-seo-tools',
    description:
      'Traditional SEO tools like Ahrefs, SEMrush, and Moz track Google rankings. HyperMind tracks AI search visibility — a completely different competitive landscape.',
    hypermindAdvantage: 'AI search intelligence vs traditional search tracking',
  },
  {
    title: 'HyperMind vs PR Agencies',
    slug: 'hypermind-vs-pr-agencies',
    description:
      'PR agencies build media placements. HyperMind builds AI visibility. While there\'s overlap in authority building, the strategy, measurement, and optimization differ entirely.',
    hypermindAdvantage: 'AI-native optimization vs traditional media relations',
  },
]

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Compare GEO Platforms
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evaluating your options for AI search visibility? See how HyperMind&apos;s GEO platform and agency services compare against alternative tools and approaches — from AI monitoring platforms to traditional SEO tools and PR agencies.
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPARISONS.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="text-xs font-medium text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-gray-400">HyperMind edge:</span>{' '}
                  {item.hypermindAdvantage}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why HyperMind */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why Brands Choose HyperMind
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Platform + Agency',
                text: 'Most competitors offer either a monitoring tool or consulting services. HyperMind delivers both — proprietary technology combined with hands-on execution.',
              },
              {
                title: '9+ AI Platforms',
                text: 'We monitor and optimize across ChatGPT, Gemini, Perplexity, Claude, Copilot, Meta AI, Grok, SearchGPT, and DeepSeek — the broadest coverage available.',
              },
              {
                title: 'Proven Methodology',
                text: 'Our four-phase GEO methodology (Monitor → Diagnose → Optimize → Measure) has delivered measurable results for 100+ brands across industries.',
              },
              {
                title: 'Measurable ROI',
                text: 'We tie every optimization to business outcomes: AI mention growth, traffic attribution, lead generation, and revenue impact — not just vanity scores.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See the Difference for Yourself
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free AI visibility audit and see what HyperMind can do for your brand in AI search.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Get a Free GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
