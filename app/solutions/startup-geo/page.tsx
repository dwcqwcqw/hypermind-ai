import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO for Startups | HyperMind',
  description:
    'Generative Engine Optimization for startups. Build AI visibility from day one and outpace incumbents in AI recommendations. Early-mover advantage in AI search is the new competitive moat.',
  openGraph: {
    title: 'GEO for Startups | HyperMind',
    description:
      'Build AI visibility from day one. HyperMind helps startups establish presence in AI recommendations before competitors take the space.',
    url: 'https://www.hypermindai.tech/solutions/startup-geo',
    siteName: 'HyperMind',
  },
}

const AI_QUERIES = [
  'Best new project management tools in 2025',
  'Top AI-powered marketing platforms for startups',
  'Which startup tools have the best free tiers?',
  'Best alternatives to [incumbent product]',
  'New SaaS tools that are disrupting [category]',
  'What tools do Y Combinator startups use?',
  'Best affordable CRM for a 10-person team',
  'Emerging fintech apps worth trying',
]

const GEO_GAPS = [
  {
    title: 'Zero Brand Salience',
    description:
      'New startups have no pre-training data in AI models. Unlike incumbents who benefit from years of web mentions baked into model training data, startups must build AI visibility entirely through RAG-retrievable content and fresh citations.',
  },
  {
    title: 'Thin Citation Profile',
    description:
      'Startups typically have few or no third-party citations. Without mentions on review sites, comparison articles, or industry publications, AI has no external validation to support recommending your product.',
  },
  {
    title: 'Competing Against Incumbents',
    description:
      'AI defaults to well-known brands with extensive coverage. Startups must create disproportionately strong signals in narrow, specific niches to break through the incumbent advantage in AI recommendations.',
  },
  {
    title: 'Resource Constraints',
    description:
      'Startups cannot run broad GEO campaigns across all channels simultaneously. Strategic prioritization — focusing on the 3–5 highest-impact prompts and the 2–3 most important citation sources — is essential.',
  },
]

const EXAMPLE_PROMPTS = [
  { prompt: 'What are the best new productivity tools in 2025?', context: 'Discovery query — AI looks for recently-launched products with strong early signals' },
  { prompt: 'Best alternative to Notion for team wikis', context: 'Alternative query — startups can win by positioning as the specific alternative to an incumbent' },
  { prompt: 'Which AI writing tools are startups using?', context: 'Community-validated query — AI weights YC, Product Hunt, and community mentions' },
  { prompt: 'Affordable customer support tools for early-stage startups', context: 'Budget-conscious query — AI matches startup-friendly pricing and feature sets' },
  { prompt: 'New CRM tools that are better than Salesforce for small teams', context: 'Challenger positioning — AI recommends based on specific advantages over incumbents' },
  { prompt: 'Best tools to launch a SaaS product quickly', context: 'Stack recommendation — AI bundles startup-friendly tools across categories' },
]

export default function StartupGeoPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Industry Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO for Startups
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            AI search is the great equalizer for startups. While incumbents rely on years of SEO dominance, AI recommendations are rebuilt from scratch with every query. Startups that invest in GEO early can outpace established brands in AI-generated answers — building a compounding advantage from day one.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get a Startup GEO Audit
          </a>
        </div>
      </section>

      {/* AI Queries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            AI Queries That Surface Startups
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Certain query patterns give startups an outsized opportunity to appear in AI recommendations. Users asking for &ldquo;new,&rdquo; &ldquo;alternative,&rdquo; and &ldquo;affordable&rdquo; solutions create openings that incumbents cannot dominate:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_QUERIES.map((query) => (
              <div
                key={query}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800"
              >
                &ldquo;{query}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Recommends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How Startups Get into AI Recommendations
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Startups face a different GEO challenge than established brands. Without pre-training data, startups must build AI visibility through high-quality RAG-retrievable signals and strategic citation placement.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Niche Dominance Strategy',
                text: 'Instead of competing broadly, startups should dominate a narrow niche. If you cannot win "best CRM," win "best CRM for remote-first startups under 50 people." AI recommends niche leaders when queries are specific.',
              },
              {
                step: '2',
                title: 'Community Signal Building',
                text: 'AI weighs community validation: Product Hunt launches, Y Combinator affiliation, Hacker News discussions, and Reddit mentions. These signals are disproportionately powerful for startups because they signal genuine user adoption.',
              },
              {
                step: '3',
                title: 'Comparison Content Strategy',
                text: 'Position your startup explicitly against incumbents in comparison content: "Why teams are switching from [Incumbent] to [Your Product]." AI retrieves this content when users ask for alternatives.',
              },
              {
                step: '4',
                title: 'Speed to Citation',
                text: 'Get reviewed on G2, Capterra, or category-specific platforms as early as possible. Even a small number of high-quality reviews gives AI enough signal to include you in recommendations — while competitors with zero reviews cannot be considered.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Gaps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Common GEO Gaps for Startups
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Startups face unique GEO challenges that require different strategies than established brands. These are the most common barriers to startup AI visibility:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GEO_GAPS.map((gap) => (
              <div
                key={gap.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-black mb-2">{gap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Example Prompts That Create Startup Opportunities
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            These prompt patterns are where startups have the best chance of appearing alongside — or instead of — incumbents:
          </p>
          <div className="space-y-4">
            {EXAMPLE_PROMPTS.map((item) => (
              <div
                key={item.prompt}
                className="border border-gray-200 rounded-xl p-5"
              >
                <p className="text-black font-medium mb-1">&ldquo;{item.prompt}&rdquo;</p>
                <p className="text-xs text-gray-500">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Case Study: Seed-Stage Startup Outranks Incumbents in AI Search
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A seed-stage collaboration tool with 500 users was completely invisible to AI assistants. Despite a superior product, AI consistently recommended only established competitors with 100× more users and years of accumulated web presence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { metric: '0→18', label: 'AI recommendation appearances in 90 days' },
              { metric: '156%', label: 'Increase in organic signups' },
              { metric: '3 weeks', label: 'Time to first AI mention' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-black mb-2">{item.metric}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            HyperMind executed a lean startup GEO strategy: targeting only the 5 highest-intent prompts in their niche; launching on Product Hunt with a structured landing page optimized for AI retrieval; building 15 reviews on G2 and Capterra; and publishing 3 comparison articles positioning the product against incumbents. Within 90 days, the startup appeared in AI recommendations for 18 category queries — competing alongside products 50× their size.
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
              { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
              { label: 'AI Mention Growth Service', href: '/services/ai-mention-growth' },
              { label: 'AI Search Statistics', href: '/resources/ai-search-statistics' },
              { label: 'AI Visibility Checker Tool', href: '/tools/ai-visibility-checker' },
              { label: 'All Industry Solutions', href: '/solutions' },
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
            Build Your Startup&apos;s AI Visibility From Day One
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll audit your startup&apos;s current AI presence, identify the niche queries you can win, and build a lean GEO strategy that punches above your weight in AI recommendations.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Startup GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
