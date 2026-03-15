import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Search Library — How Each AI Platform Works | HyperMind',
  description:
    'Understand how each AI platform generates recommendations. Deep dives into ChatGPT ranking factors, Perplexity citation model, Gemini answer generation, Claude search capabilities, and Copilot AI recommendations.',
  openGraph: {
    title: 'AI Search Library — How Each AI Platform Works | HyperMind',
    description:
      'How ChatGPT, Perplexity, Gemini, Claude, and Copilot decide which brands to recommend. Platform-by-platform AI search analysis.',
    url: 'https://www.hypermindai.tech/resources/ai-search-library',
    siteName: 'HyperMind',
  },
}

interface PlatformCard {
  name: string
  id: string
  description: string
  rankingFactors: string[]
  geoImplication: string
}

const PLATFORMS: PlatformCard[] = [
  {
    name: 'ChatGPT (OpenAI)',
    id: 'chatgpt',
    description:
      'ChatGPT is the most widely used AI assistant with over 200 million monthly active users. It generates recommendations using a combination of pre-training knowledge (GPT-4 model data) and web browsing via Bing integration for real-time retrieval.',
    rankingFactors: [
      'Pre-training data frequency — brands mentioned more often in training data have higher baseline recall',
      'Bing search integration — real-time retrieval for current information and verification',
      'Source authority — content from high-domain-authority sites weighted more heavily',
      'Structured content — clear definitions, lists, and factual claims are easier to extract',
      'Brand consistency — consistent naming and positioning across sources improves recall accuracy',
    ],
    geoImplication:
      'To optimize for ChatGPT, focus on building presence across high-authority websites that are likely in both training data and Bing\'s index. Consistent brand positioning across multiple sources strengthens recall probability.',
  },
  {
    name: 'Perplexity AI',
    id: 'perplexity',
    description:
      'Perplexity processes over 10 million daily queries with a search-first approach. Unlike ChatGPT, Perplexity always retrieves fresh web results before generating answers, making it more responsive to recent content changes. It provides numbered citations linking to source pages.',
    rankingFactors: [
      'Real-time web retrieval — Perplexity searches the web for every query, making fresh content immediately discoverable',
      'Citation prominence — sources that appear in top search results are cited more frequently',
      'Content freshness — recently published or updated content receives retrieval priority',
      'Structured data — pages with clear headings, definitions, and structured content are cited more accurately',
      'Source diversity — Perplexity cites multiple sources and weights pages that appear across different queries',
    ],
    geoImplication:
      'Perplexity is the most SEO-aligned AI platform. Strong traditional SEO directly improves Perplexity visibility because it retrieves from web search results. Focus on ranking for target queries in traditional search to improve Perplexity citations.',
  },
  {
    name: 'Google Gemini',
    id: 'gemini',
    description:
      'Gemini powers Google\'s AI Overviews (appearing in 35%+ of search queries) and the standalone Gemini assistant. It has unique access to Google\'s search index, Knowledge Graph, and real-time web data — making it the AI assistant most tightly integrated with traditional search.',
    rankingFactors: [
      'Google Search ranking — pages ranking on page one are heavily prioritized in Gemini answers',
      'Knowledge Graph data — structured entity data (Wikipedia, Wikidata, company profiles) is a primary source',
      'Google Business Profile — for local and business queries, GBP data directly feeds Gemini answers',
      'Review aggregation — Google Reviews, along with data from trusted review sites, influence product recommendations',
      'Content freshness — Google\'s freshness signals apply, with recently updated content preferred',
    ],
    geoImplication:
      'Gemini optimization overlaps heavily with traditional Google SEO. Ensure your Google Knowledge Panel is claimed and accurate, Google Business Profile is optimized, and your site ranks well for target queries. Structured data markup (Schema.org) is especially important for Gemini.',
  },
  {
    name: 'Claude (Anthropic)',
    id: 'claude',
    description:
      'Claude is Anthropic\'s AI assistant, known for nuanced, detailed responses. Claude relies primarily on pre-training data with selective web search capabilities. It tends to provide more cautious, balanced recommendations with explicit caveats.',
    rankingFactors: [
      'Pre-training data quality — Claude heavily relies on the quality and authority of training sources',
      'Balanced representation — Claude tends to present multiple options with pros/cons rather than a single recommendation',
      'Safety-conscious filtering — Claude applies conservative safety filters, especially for financial and health recommendations',
      'Academic and authoritative sources — Claude weights peer-reviewed, academic, and institutional sources more heavily',
      'Contextual nuance — Claude excels at understanding complex queries and providing nuanced answers',
    ],
    geoImplication:
      'To optimize for Claude, focus on building presence in high-quality, authoritative sources — academic publications, industry reports, and institutional content. Claude rewards depth and accuracy over volume.',
  },
  {
    name: 'Microsoft Copilot',
    id: 'copilot',
    description:
      'Microsoft Copilot integrates AI across the Microsoft ecosystem — Bing, Edge, Windows, and Microsoft 365. It uses Bing search as its primary retrieval source and is particularly relevant for enterprise and productivity-related queries.',
    rankingFactors: [
      'Bing search ranking — Copilot retrieves primarily from Bing, making Bing SEO critical',
      'Microsoft ecosystem integration — brands present in LinkedIn, GitHub, and Microsoft Marketplace get preference for relevant queries',
      'Enterprise trust signals — for B2B queries, Copilot weights enterprise credibility indicators',
      'Content recency — Bing\'s freshness signals apply, with recently indexed content preferred',
      'Structured content — clear, well-organized content is more likely to be accurately cited',
    ],
    geoImplication:
      'Copilot optimization requires Bing-specific SEO alongside Microsoft ecosystem presence. For B2B brands, ensure strong LinkedIn company presence and consider Microsoft Marketplace listings. Bing Webmaster Tools is essential for monitoring Copilot-related visibility.',
  },
]

export default function AISearchLibraryPage() {
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
            AI Search Library
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each AI platform generates recommendations differently. Understanding how ChatGPT, Perplexity, Gemini, Claude, and Copilot decide which brands to mention is essential for effective Generative Engine Optimization. This library provides platform-by-platform analysis of AI search mechanics.
          </p>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              id={platform.id}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-black mb-3">
                {platform.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {platform.description}
              </p>

              <h3 className="text-lg font-bold text-black mb-3">Key Ranking Factors</h3>
              <ul className="space-y-2 mb-6">
                {platform.rankingFactors.map((factor) => (
                  <li key={factor} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-black mt-1 flex-shrink-0">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-black mb-1">GEO Implication</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {platform.geoImplication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Platform Strategy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Cross-Platform GEO Strategy
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              While each AI platform has unique ranking factors, several principles apply universally across all AI search engines:
            </p>
            <ul className="space-y-3">
              {[
                'Build citations on high-authority, widely-indexed sources (Wikipedia, industry publications, review platforms)',
                'Structure content with clear definitions, concise paragraphs, and factual claims that AI can easily extract',
                'Maintain consistent brand positioning across all platforms — conflicting information confuses AI models',
                'Invest in both pre-training signals (long-term authority) and RAG-retrievable content (immediate visibility)',
                'Monitor AI mentions across all platforms simultaneously to identify platform-specific gaps',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-black mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
              { label: 'GEO Guides', href: '/resources/geo-guides' },
              { label: 'AI Visibility Monitoring Guide', href: '/resources/ai-visibility-monitoring-guide' },
              { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
              { label: 'Prompt Database', href: '/resources/prompt-database' },
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
            Monitor Your Brand Across All AI Platforms
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            HyperMind tracks your brand mentions across ChatGPT, Gemini, Perplexity, Claude, and Copilot in real time. See exactly how each platform describes and recommends your brand.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Start Monitoring AI Platforms
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
