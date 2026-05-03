import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

const BASE_URL = 'https://hypermindgeo.com'

export const metadata: Metadata = {
  title: 'HyperMind Methodology - Agentic GEO for AI Visibility',
  description:
    'HyperMind uses an agentic GEO methodology inspired by current generative engine optimization research: strategy archives, critic-guided prioritization, live AI answer testing, citation source development, and revenue attribution.',
  alternates: {
    canonical: '/company/methodology/',
  },
  openGraph: {
    title: 'HyperMind Methodology - Agentic GEO for AI Visibility',
    description:
      'How HyperMind turns AI visibility research into an execution system for mentions, citations, recommendations, and AI search revenue.',
    url: `${BASE_URL}/company/methodology/`,
    siteName: 'HyperMind',
  },
}

const METHODOLOGY = [
  {
    title: 'Content-conditioned strategy archive',
    description:
      'HyperMind maintains a strategy library by prompt intent, source type, page template, market, and AI platform. A product comparison page, a help center page, and a third-party review profile should not receive the same GEO treatment.',
  },
  {
    title: 'Critic-guided opportunity scoring',
    description:
      'Before spending cycles on live answer-engine tests, each candidate action is scored for likely impact, implementation cost, confidence, and business value. This reduces waste and lets teams focus on the actions most likely to change AI answers.',
  },
  {
    title: 'Selective live engine evaluation',
    description:
      'High-value candidates are tested against ChatGPT, Google AI Overviews, Google AI Mode, Gemini, Perplexity, Claude, and Copilot using controlled prompt sets. HyperMind records mention, citation, sentiment, rank, and claim accuracy changes.',
  },
  {
    title: 'Citation supply chain development',
    description:
      'HyperMind maps the domains and source classes that models use for a category, then builds or improves owned, earned, partner, review, social, institutional, and data sources that can support future AI answers.',
  },
  {
    title: 'Replay learning loop',
    description:
      'Every prompt result, page change, citation placement, and conversion signal becomes training memory for the next cycle. The system gets more specific to the brand and less dependent on static GEO heuristics over time.',
  },
]

const PRODUCT_TRANSLATION = [
  {
    layer: 'Dashboard',
    product: 'Show prompt clusters, model-specific source pools, competitor recommendations, cited URLs, and AI referral outcomes in one view.',
  },
  {
    layer: 'Planner',
    product: 'Turn visibility gaps into ranked tasks: rewrite this section, add this definition, create this comparison page, pitch this source, fix this schema.',
  },
  {
    layer: 'Content Studio',
    product: 'Generate several candidate rewrites with different strategy genotypes: statistical answer, source-backed answer, comparison table, FAQ block, entity clarification, or citation-first summary.',
  },
  {
    layer: 'Critic',
    product: 'Score candidates before live testing, using learned patterns from prior prompt outcomes and platform behavior.',
  },
  {
    layer: 'Evaluator',
    product: 'Run live tests on selected prompts, capture model outputs, compare before and after answers, and log which strategies improved inclusion or attribution.',
  },
]

export default function MethodologyPage() {
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
                  { '@type': 'ListItem', position: 2, name: 'Company', item: `${BASE_URL}/company/` },
                  { '@type': 'ListItem', position: 3, name: 'Methodology', item: `${BASE_URL}/company/methodology/` },
                ],
              },
              {
                '@type': 'TechArticle',
                headline: 'HyperMind Methodology: Agentic GEO for AI Visibility',
                description:
                  'A product and service methodology for improving brand inclusion and attribution in generative AI answers.',
                author: { '@type': 'Organization', name: 'HyperMind', url: BASE_URL },
                publisher: { '@type': 'Organization', name: 'HyperMind', url: BASE_URL },
                mainEntityOfPage: `${BASE_URL}/company/methodology/`,
                about: [
                  { '@type': 'Thing', name: 'AgenticGEO' },
                  { '@type': 'Thing', name: 'Generative Engine Optimization' },
                  { '@type': 'Thing', name: 'AI visibility optimization' },
                  { '@type': 'Thing', name: 'AI citation strategy' },
                ],
              },
            ],
          }),
        }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            Methodology
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Agentic GEO for brands that need AI answers to change
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            HyperMind applies the newest GEO research to commercial growth. Instead of using a static checklist, we treat AI visibility as a self-improving control loop: choose the right strategy for each content context, predict likely impact, test selectively against live engines, and feed results back into the next optimization cycle.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8">
            What AgenticGEO changes for product design
          </h2>
          <div className="space-y-4">
            {METHODOLOGY.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-black mb-4">
              Product modules HyperMind should emphasize
            </h2>
            <p className="text-gray-600 leading-relaxed">
              AgenticGEO gives HyperMind a stronger product story than generic monitoring. The platform should be presented as an execution engine that learns which GEO strategies work for each brand, category, and AI platform.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {PRODUCT_TRANSLATION.map((row) => (
              <div key={row.layer} className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 last:border-b-0">
                <div className="bg-gray-50 p-5 font-bold text-black">{row.layer}</div>
                <div className="md:col-span-3 p-5 text-sm text-gray-700 border-t md:border-t-0 md:border-l border-gray-200">
                  {row.product}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            The message: HyperMind is not just AI visibility monitoring
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            The clearest positioning is: HyperMind is the agentic GEO execution layer for AI search. Profound, Peec AI, Semrush, and Writesonic help teams see or create parts of the AI visibility problem. HyperMind helps teams run the full optimization loop from prompt discovery to source development to answer testing to revenue attribution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Not a static GEO checklist',
              'Not only prompt monitoring',
              'A self-improving answer optimization loop',
            ].map((item) => (
              <div key={item} className="border border-white/10 rounded-xl p-5 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Apply the methodology to your brand
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Start with a prompt and citation audit, then use the strategy archive to prioritize which pages, sources, and answer claims should change first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
            >
              Request an Agentic GEO Audit
            </a>
            <Link
              href="/resources/ai-visibility-platform-vs-geo-agency"
              className="border border-gray-300 text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition"
            >
              Read the buyer guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
