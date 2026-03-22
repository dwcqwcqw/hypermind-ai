import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Free AI Visibility Tools | HyperMind',
  description:
    'Free AI visibility tools from HyperMind. Check your AI visibility score, track AI mentions, analyze AI sentiment, audit AI citations, and get a full AI brand audit.',
  openGraph: {
    title: 'Free AI Visibility Tools | HyperMind',
    description:
      'Free tools to check your brand\'s visibility, mentions, sentiment, and citations across AI search platforms.',
    url: 'https://www.hypermindai.tech/tools',
    siteName: 'HyperMind',
  },
  alternates: {
    canonical: '/tools/',
  },
}

interface ToolItem {
  title: string
  href: string
  description: string
  cta: string
}

const TOOLS: ToolItem[] = [
  {
    title: 'AI Visibility Checker',
    href: '/tools/ai-visibility-checker',
    description:
      'Enter your brand name and get an instant AI visibility score. See how often AI assistants like ChatGPT, Gemini, and Perplexity mention your brand compared to competitors.',
    cta: 'Check Your Visibility',
  },
  {
    title: 'AI Mention Tracker',
    href: '/tools/ai-mention-tracker',
    description:
      'Track every time an AI assistant mentions your brand. Get alerts for new mentions, see full prompt-response context, and monitor mention trends over time.',
    cta: 'Track Your Mentions',
  },
  {
    title: 'AI Sentiment Analyzer',
    href: '/tools/ai-sentiment-analyzer',
    description:
      'Analyze how AI describes your brand. See if AI assistants frame your company positively, negatively, or neutrally — and identify narrative issues to fix.',
    cta: 'Analyze Sentiment',
  },
  {
    title: 'AI Citation Checker',
    href: '/tools/ai-citation-checker',
    description:
      'Find out which sources AI models cite when answering questions about your industry. Discover if your content is being used as an AI citation source.',
    cta: 'Check Citations',
  },
  {
    title: 'AI Brand Audit',
    href: '/tools/ai-brand-audit',
    description:
      'Get a comprehensive audit of your brand\'s AI presence. Covers visibility score, mention frequency, sentiment, citation sources, and competitive positioning across all major AI platforms.',
    cta: 'Start Your Audit',
  },
]

export default function ToolsPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.hypermindai.tech/tools/' },
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
            Free AI Visibility Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Use HyperMind&apos;s free tools to instantly measure your brand&apos;s visibility in AI search. Check your AI visibility score, track mentions, analyze sentiment, and audit your presence across ChatGPT, Gemini, Perplexity, Claude, and more.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOOLS.map((tool) => (
              <div
                key={tool.href}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-black mb-3">{tool.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="inline-block bg-black text-white text-center px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                >
                  {tool.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use These Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why Check Your AI Visibility?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Most brands have no idea how AI assistants talk about them. These free tools give you instant clarity — so you know exactly where you stand before investing in a full GEO strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Instant Results', text: 'Get your AI visibility data in seconds — no sign-up required for basic checks.' },
              { title: 'Multi-Platform', text: 'See your brand across ChatGPT, Gemini, Perplexity, Claude, and other major AI platforms.' },
              { title: 'Actionable Insights', text: 'Each tool provides specific recommendations for improving your AI search presence.' },
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
            Need a Full GEO Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Our free tools give you the starting picture. For a complete AI visibility strategy, talk to our GEO experts.
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
