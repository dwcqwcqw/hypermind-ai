import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Guides — Generative Engine Optimization Knowledge Base | HyperMind',
  description:
    'The complete GEO knowledge base. In-depth guides covering what GEO is, how AI search works, how to optimize for AI search, AI visibility monitoring, and complete GEO strategy frameworks.',
  openGraph: {
    title: 'GEO Guides — Generative Engine Optimization Knowledge Base | HyperMind',
    description:
      'Comprehensive guides on Generative Engine Optimization. Learn everything about GEO from foundational concepts to advanced strategies.',
    url: 'https://www.hypermindai.tech/resources/geo-guides',
    siteName: 'HyperMind',
  },
}

interface GuideItem {
  title: string
  href: string
  description: string
  topics: string[]
}

const GUIDES: GuideItem[] = [
  {
    title: 'What is Generative Engine Optimization (GEO)?',
    href: '/resources/what-is-geo',
    description:
      'The foundational guide to GEO. Covers the definition of Generative Engine Optimization, how it differs from traditional SEO, why it matters, and the core framework for optimizing your brand\'s presence in AI-generated answers.',
    topics: ['GEO definition', 'GEO vs SEO', 'AI visibility', 'LLM SEO', 'The GEO Framework'],
  },
  {
    title: 'How AI Search Works: A Complete Guide',
    href: '/resources/how-ai-search-works',
    description:
      'A technical deep-dive into how AI assistants generate answers. Covers pre-training, Retrieval-Augmented Generation (RAG), citation ranking, and how models like ChatGPT, Gemini, and Perplexity decide which brands to recommend.',
    topics: ['RAG pipelines', 'Pre-training data', 'Citation ranking', 'AI answer generation', 'Platform differences'],
  },
  {
    title: 'How to Optimize for AI Search',
    href: '/resources/how-to-optimize-for-ai-search',
    description:
      'A practical, step-by-step guide to optimizing your content and brand presence for AI search. Covers content structuring, citation building, authority signals, and the specific tactics that increase AI mention frequency.',
    topics: ['Content optimization', 'Citation building', 'Authority signals', 'AI-friendly formatting', 'Measurement'],
  },
  {
    title: 'AI Visibility Monitoring Guide',
    href: '/resources/ai-visibility-monitoring-guide',
    description:
      'How to monitor what AI assistants say about your brand. Covers monitoring methodologies, key metrics to track, platform-specific monitoring strategies, and how to use monitoring data to improve your GEO strategy.',
    topics: ['Mention tracking', 'Sentiment analysis', 'Competitive monitoring', 'AI metrics', 'Reporting'],
  },
  {
    title: 'Complete GEO Strategy Guide',
    href: '/resources/complete-geo-strategy-guide',
    description:
      'The comprehensive playbook for building and executing a full GEO strategy. Covers strategy development, team structure, budget allocation, timeline planning, and how to integrate GEO with existing marketing operations.',
    topics: ['Strategy framework', 'Budget planning', 'Team structure', 'Integration', 'ROI measurement'],
  },
  {
    title: 'AI Search Statistics and Trends',
    href: '/resources/ai-search-statistics',
    description:
      'Data-driven analysis of AI search adoption, usage patterns, and market trends. Includes statistics on ChatGPT, Gemini, Perplexity usage, AI referral traffic benchmarks, and growth projections for AI-powered discovery.',
    topics: ['Usage statistics', 'Growth trends', 'Traffic benchmarks', 'Platform data', 'Market projections'],
  },
]

export default function GeoGuidesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO Guides
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Generative Engine Optimization (GEO) is the practice of optimizing your brand&apos;s digital presence so AI assistants — ChatGPT, Gemini, Perplexity, Claude — mention, recommend, or cite your brand when answering user queries. These guides cover everything from foundational concepts to advanced strategy execution.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h2 className="text-xl font-bold text-black mb-3 group-hover:underline">
                  {guide.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is GEO Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            What is GEO?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Generative Engine Optimization (GEO) is the emerging discipline of making your brand visible inside AI-generated answers. Unlike traditional SEO, which focuses on ranking in a list of blue links, GEO focuses on getting your brand mentioned, recommended, or cited when an AI assistant answers a question.
            </p>
            <p>
              As AI search grows — with over 200 million monthly ChatGPT users and Perplexity processing 10+ million daily queries — GEO has become essential for any brand that depends on digital discovery. The shift from link-based to answer-based discovery requires fundamentally new optimization strategies.
            </p>
            <p>
              The core GEO cycle follows four stages: <strong>Monitor</strong> (track what AI says about your brand), <strong>Diagnose</strong> (identify gaps and inaccuracies), <strong>Optimize</strong> (improve content and citations), and <strong>Measure</strong> (quantify results). This cycle repeats continuously as AI models evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">More Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'AI Search Library', href: '/resources/ai-search-library' },
              { label: 'Prompt Database', href: '/resources/prompt-database' },
              { label: 'GEO Playbooks', href: '/resources/geo-playbooks' },
              { label: 'GEO Solutions by Industry', href: '/solutions' },
              { label: 'AI Visibility Checker', href: '/tools/ai-visibility-checker' },
              { label: 'Case Studies', href: '/case-studies' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-white hover:border-gray-300 transition"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Implement GEO?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Our guides give you the knowledge. Our platform and services give you the execution. Start with a free AI visibility audit to see where your brand stands.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Get a Free AI Visibility Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
