import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Citation Sources Database — Which Sites AI Models Cite Most | HyperMind',
  description:
    'Discover which websites, publications, and sources AI models cite most often when generating answers. The definitive guide to AI citation authority and how to become a preferred source.',
  alternates: {
    canonical: '/data/ai-citation-sources-database/',
  },
  openGraph: {
    title: 'AI Citation Sources Database | HyperMind',
    description:
      'Which websites does ChatGPT cite most? Which publications influence AI answers? Explore the AI citation landscape.',
    url: 'https://hypermindgeo.com/data/ai-citation-sources-database',
    siteName: 'HyperMind',
  },
}

const PLATFORM_COLUMNS = [
  {
    platform: 'ChatGPT',
    icon: '🤖',
    description: 'Trained on web data through 2023. Cited sources tend to be well-indexed, authoritative publications.',
    color: 'text-[#10A37F]',
    topSources: [
      'Academic journals and arXiv preprints',
      'Wikipedia and encyclopedic content',
      'Major news publications (NYT, The Guardian, BBC)',
      'Government and institutional websites',
      'Stack Overflow and technical documentation',
    ],
  },
  {
    platform: 'Perplexity',
    icon: '🔍',
    description: 'Real-time web search with inline citations. Shows which specific pages it retrieves from for each answer.',
    color: 'text-[#B345FF]',
    topSources: [
      'News and current events sites',
      'Company blogs and product documentation',
      'Reddit and community discussions',
      'Academic papers via Semantic Scholar',
      'Industry publications and trade media',
    ],
  },
  {
    platform: 'Gemini (Google)',
    icon: '✨',
    description: 'Integrates Google Search with AI. Heavily cites sites ranked well in Google Search, especially featured snippets and People Also Ask sources.',
    color: 'text-[#4285F4]',
    topSources: [
      'Google-indexed websites with strong SEO',
      'YouTube transcripts and video descriptions',
      'Google Scholar and academic databases',
      'Government and educational institution sites',
      'Well-structured FAQ and how-to content',
    ],
  },
  {
    platform: 'Claude',
    icon: '🧠',
    description: 'Constitutional AI trained with human feedback. Cites sources based on relevance, accuracy, and helpfulness signals.',
    color: 'text-[#CC785C]',
    topSources: [
      'Academic papers and research publications',
      'Official documentation and APIs',
      'Long-form educational content',
      'Primary sources and original research',
      'Established authoritative publications',
    ],
  },
]

const WHAT_ARE_CITATIONS = [
  {
    title: 'Direct Citations',
    description:
      'AI explicitly names your brand or quotes your content as a source. Strongest form of GEO — you appear as an authoritative reference.',
  },
  {
    title: 'Implicit Mentions',
    description:
      'AI uses information from your site without naming you directly. Your content shaped the answer but you don\'t get the credit.',
  },
  {
    title: 'Category Positioning',
    description:
      'Your brand is mentioned as an example within a category description. Moderate visibility — you exist in the AI\'s mental model.',
  },
]

const HOW_TO_BECOME_CITED = [
  {
    title: 'Publish Primary Research',
    description:
      'AI prioritizes original data, studies, and surveys. Publish proprietary research that other sites reference — they\'ll carry your insights into the AI training corpus.',
  },
  {
    title: 'Optimize for Retrieval',
    description:
      'Structure content for chunking and RAG retrieval. Use clear headings, bullet points, and concise answers to common questions at the top of pages.',
  },
  {
    title: 'Build Authoritative Backlinks',
    description:
      'AI citation correlates strongly with backlink authority. High-authority backlinks from respected publications signal that your content is worth citing.',
  },
  {
    title: 'Target Featured Snippet Positions',
    description:
      'AI often draws from featured snippets and People Also Ask boxes. SEO-optimized short answers become AI training data for the same queries.',
  },
  {
    title: 'Publish Long-Form Expertise',
    description:
      'Comprehensive guides and definitive resources (the "10x content" standard) are heavily cited by AI that needs thorough background on a topic.',
  },
  {
    title: 'Get Cited by Cited Sources',
    description:
      'If a major news outlet or academic journal cites your data, AI will often trace back to you as an authoritative source in related queries.',
  },
]

export default function AICitationSourcesDatabasePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            AI Search Data
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            AI Citation Sources Database
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover which websites, publications, and sources AI models cite most often when generating answers. Learn how to position your brand as a preferred AI citation source.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get Your AI Citation Strategy Audit
          </a>
        </div>
      </section>

      {/* What Are Citations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
            What Counts as an AI Citation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_ARE_CITATIONS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Platform */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            What Each AI Platform Cites
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Each AI assistant uses different training data and retrieval methods, leading to distinct citation patterns. Understanding these differences is key to a platform-specific GEO strategy.
          </p>
          <div className="space-y-6">
            {PLATFORM_COLUMNS.map((p) => (
              <div key={p.platform} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className={`text-xl font-bold ${p.color}`}>{p.platform}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{p.description}</p>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Most Cited Source Types</p>
                  <ul className="space-y-1">
                    {p.topSources.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 mt-0.5">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Cited */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How to Become a Preferred AI Citation Source
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Not all content gets cited equally. The following strategies correlate with higher AI citation rates based on our analysis of 50,000+ AI-generated responses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOW_TO_BECOME_CITED.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'AI Visibility Leaderboard', href: '/data/ai-visibility-leaderboard' },
              { label: 'AI Brand Mention Index', href: '/data/ai-brand-mention-index' },
              { label: 'AI Prompt Trends', href: '/data/ai-prompt-trends' },
              { label: 'AI Search Trends', href: '/data/ai-search-trends' },
              { label: 'AI Citation Strategy Service', href: '/services/ai-citation-strategy' },
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition"
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
            Make Your Brand an AI Citation Source
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll analyze which sources AI cites in your category, identify your citation gaps, and build a strategy to make your brand the preferred reference for AI-generated answers.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Get Your AI Citation Strategy Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
