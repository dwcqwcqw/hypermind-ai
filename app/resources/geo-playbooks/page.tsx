import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Playbooks — Step-by-Step Action Guides | HyperMind',
  description:
    'Step-by-step GEO playbooks for increasing AI mentions, controlling AI narrative, becoming an AI citation source, and winning AI recommendations. Practical action guides for Generative Engine Optimization.',
  openGraph: {
    title: 'GEO Playbooks — Step-by-Step Action Guides | HyperMind',
    description:
      'Practical GEO playbooks with step-by-step instructions. Learn exactly how to increase AI mentions, control AI narrative, and win AI recommendations.',
    url: 'https://www.hypermindai.tech/resources/geo-playbooks',
    siteName: 'HyperMind',
  },
}

interface Playbook {
  title: string
  description: string
  steps: string[]
  relatedLink: { label: string; href: string }
}

const PLAYBOOKS: Playbook[] = [
  {
    title: 'How to Increase AI Mentions of Your Brand',
    description:
      'A step-by-step guide to increasing how frequently AI assistants mention your brand when answering relevant queries. This playbook covers the complete process from baseline measurement through ongoing optimization.',
    steps: [
      'Establish a baseline by querying your brand across ChatGPT, Gemini, Perplexity, and Claude for 20+ relevant prompts',
      'Identify the top 5–10 high-intent prompts where you want to appear but currently do not',
      'Audit which competitors appear for those prompts and identify the sources AI cites for them',
      'Build citations on the same high-authority sources (G2, Capterra, industry publications, Wikipedia)',
      'Create AI-optimized content pages that directly answer your target prompts with clear, structured information',
      'Distribute consistent brand messaging across 10+ authoritative platforms',
      'Monitor mention frequency weekly using HyperMind or manual prompt tracking',
      'Iterate based on which prompts respond fastest and double down on winning strategies',
    ],
    relatedLink: { label: 'AI Mention Growth Service', href: '/services/ai-mention-growth' },
  },
  {
    title: 'How to Control Your AI Narrative',
    description:
      'AI assistants may describe your brand inaccurately, emphasize the wrong features, or position you in the wrong category. This playbook teaches you how to shape what AI says about your brand.',
    steps: [
      'Audit AI sentiment and positioning across all major platforms — record exactly how AI describes your brand',
      'Identify inaccuracies: wrong product descriptions, outdated information, incorrect comparisons, or negative framing',
      'Create a "brand truth document" defining your correct positioning, key messages, and competitive differentiators',
      'Update all owned properties (website, social profiles, press pages) with consistent, accurate brand messaging',
      'Publish authoritative content that explicitly corrects common misconceptions about your brand',
      'Secure coverage on trusted publications that frames your brand according to your desired narrative',
      'Update structured data (Schema.org markup) to provide AI with accurate entity information',
      'Monitor AI sentiment monthly and respond to narrative drift by reinforcing correct positioning',
    ],
    relatedLink: { label: 'AI Reputation Management Service', href: '/services/ai-reputation-management' },
  },
  {
    title: 'How to Become an AI Citation Source',
    description:
      'AI platforms like Perplexity explicitly cite their sources. Becoming a cited source means your website appears in AI answers with a direct link — driving referral traffic and reinforcing brand authority.',
    steps: [
      'Identify the query topics where you want your content cited by AI assistants',
      'Create definitive, comprehensive content for each topic — aim for the most authoritative resource on the web for that query',
      'Structure content with clear definitions, structured headings, concise paragraphs, and factual claims',
      'Include original data, statistics, or research that AI cannot find elsewhere',
      'Build high-authority backlinks to your content pages to improve RAG retrieval ranking',
      'Ensure technical SEO excellence: fast load times, clean crawlable structure, proper Schema.org markup',
      'Monitor which content pages are being cited by Perplexity and other citation-providing AI platforms',
      'Update cited content regularly to maintain freshness signals and accuracy',
    ],
    relatedLink: { label: 'AI Citation Strategy Service', href: '/services/ai-citation-strategy' },
  },
  {
    title: 'How to Win AI Recommendations in Your Category',
    description:
      'Being mentioned is good. Being recommended as "the best" is better. This playbook covers the strategy for positioning your brand as the top recommendation in your category across AI platforms.',
    steps: [
      'Define your target category clearly — AI cannot recommend you as "the best" if it does not know what category you belong to',
      'Audit AI recommendations for your category across all platforms — identify who is currently recommended as #1',
      'Analyze the recommendation leader\'s GEO profile: which sources cite them, what content they rank for, where they have presence',
      'Build a competitive citation advantage by earning citations on more authoritative sources than the current leader',
      'Create category-defining content that positions your brand at the center of the category conversation',
      'Secure "best of" placements on editorial review sites (Wirecutter, G2, industry-specific publications)',
      'Build social proof at scale: customer reviews, case studies, testimonials, and user community signals',
      'Execute a long-term authority campaign: thought leadership, speaking engagements, and media coverage that reinforces category leadership',
    ],
    relatedLink: { label: 'AI Visibility Optimization Service', href: '/services/ai-visibility-optimization' },
  },
]

export default function GeoPlaybooksPage() {
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
            GEO Playbooks
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step-by-step action guides for Generative Engine Optimization. Each playbook provides a clear, sequential process you can execute to improve your brand&apos;s visibility in AI-generated answers.
          </p>
        </div>
      </section>

      {/* Playbook Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          {PLAYBOOKS.map((playbook, index) => (
            <div
              key={playbook.title}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h2 className="text-xl font-bold text-black">
                  {playbook.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {playbook.description}
              </p>

              <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
                Step-by-Step Process
              </h3>
              <ol className="space-y-3 mb-6">
                {playbook.steps.map((step, stepIndex) => (
                  <li key={step} className="flex gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-xs font-medium">
                      {stepIndex + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <Link
                href={playbook.relatedLink.href}
                className="inline-block text-sm font-medium text-black border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 hover:border-gray-300 transition"
              >
                {playbook.relatedLink.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'GEO Guides', href: '/resources/geo-guides' },
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
              { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
              { label: 'AI Search Library', href: '/resources/ai-search-library' },
              { label: 'Prompt Database', href: '/resources/prompt-database' },
              { label: 'Complete GEO Strategy Guide', href: '/resources/complete-geo-strategy-guide' },
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
            Need Help Executing These Playbooks?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Our team executes GEO strategies at scale. If you want expert execution instead of DIY, we&apos;ll audit your current AI visibility and build a custom playbook for your brand.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Get Expert GEO Execution
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
