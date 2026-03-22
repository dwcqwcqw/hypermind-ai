import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO for B2B SaaS Companies | HyperMind',
  description:
    'Generative Engine Optimization for B2B SaaS companies. Get your software recommended when decision-makers ask AI assistants like ChatGPT, Gemini, and Perplexity for product recommendations.',
  alternates: {
    canonical: '/solutions/b2b-saas-geo/',
  },
  openGraph: {
    title: 'GEO for B2B SaaS Companies | HyperMind',
    description:
      'Get your SaaS product recommended in AI-generated answers. HyperMind delivers tailored GEO strategies for B2B software companies.',
    url: 'https://www.hypermindai.tech/solutions/b2b-saas-geo',
    siteName: 'HyperMind',
  },
}

const AI_QUERIES = [
  'What is the best CRM for startups?',
  'Top project management tools for remote teams',
  'Best customer support software for SaaS companies',
  'Which marketing automation platform should I use?',
  'Compare HubSpot vs Salesforce for small businesses',
  'Best analytics tools for product-led growth',
  'Top collaboration tools for engineering teams',
  'What SaaS tools do fast-growing startups use?',
]

const GEO_GAPS = [
  {
    title: 'Low Citation Authority',
    description:
      'Many SaaS brands rely on their own blog for authority. AI assistants prioritize third-party citations from review sites like G2, Capterra, and industry analyst reports. Without these, your product is invisible.',
  },
  {
    title: 'Feature-First Content',
    description:
      'Product pages that list features without context fail in AI search. AI needs comparative, problem-solution content — "best tool for X" rather than "our product does Y."',
  },
  {
    title: 'Missing Category Definition',
    description:
      'If AI does not associate your brand with a clear category, it cannot recommend you. Many SaaS brands lack structured content that explicitly defines what category they compete in.',
  },
  {
    title: 'Weak Comparison Presence',
    description:
      'AI assistants heavily weight comparison and review content. If third-party comparison pages do not feature your product, AI will recommend competitors who do appear in those comparisons.',
  },
]

const EXAMPLE_PROMPTS = [
  { prompt: 'What is the best CRM for a 50-person startup?', context: 'High-intent buying query — AI typically lists 3–5 products' },
  { prompt: 'Compare Monday.com and Asana for project management', context: 'Head-to-head comparison — AI cites review sites and feature comparisons' },
  { prompt: 'What tools do I need to launch a SaaS product?', context: 'Stack recommendation — AI bundles multiple product categories' },
  { prompt: 'Best customer success platforms for reducing churn', context: 'Problem-solution query — AI matches tools to specific outcomes' },
  { prompt: 'Which email marketing tool has the best automation?', context: 'Feature-specific query — AI compares automation capabilities across tools' },
  { prompt: 'Top alternatives to Zendesk for customer support', context: 'Alternative query — AI lists competitors and compares strengths' },
]

export default function B2BSaaSGeoPage() {
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
            GEO for B2B SaaS Companies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Decision-makers are using AI assistants to research and shortlist software. If your product is not in the AI-generated answer, you are losing pipeline to competitors who are. HyperMind builds your AI visibility so you appear in the recommendations that matter.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get a SaaS GEO Audit
          </a>
        </div>
      </section>

      {/* AI Queries in This Industry */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            AI Queries in B2B SaaS
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            SaaS buyers increasingly ask AI assistants for product recommendations instead of searching Google. These queries carry extremely high purchase intent — the user is actively evaluating solutions. Here are the types of prompts driving AI-powered software discovery:
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

      {/* How AI Recommends SaaS Vendors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How AI Recommends SaaS Vendors
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            When a user asks an AI assistant for a SaaS recommendation, the model synthesizes information from multiple sources to generate a shortlist. Understanding this process is critical for GEO strategy.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Source Aggregation',
                text: 'AI retrieves information from review platforms (G2, Capterra, TrustRadius), comparison articles, industry analyst reports, and vendor websites. Products with presence across multiple high-authority sources rank higher.',
              },
              {
                step: '2',
                title: 'Category Matching',
                text: 'The model identifies the software category the user is asking about and matches it against its knowledge of which products belong to that category. Clear category association is essential.',
              },
              {
                step: '3',
                title: 'Signal Weighting',
                text: 'AI weighs factors including user review sentiment, market share indicators, pricing accessibility, feature alignment with the query, and recency of information. Products with strong signals across all dimensions get recommended.',
              },
              {
                step: '4',
                title: 'Answer Generation',
                text: 'The AI generates a structured answer, typically listing 3–7 products with brief descriptions of why each fits the user\'s needs. Position in this list matters — the first-mentioned product receives disproportionate attention.',
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

      {/* Common GEO Gaps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Common GEO Gaps for SaaS Companies
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Most SaaS companies have significant gaps in their AI visibility. These are the most common issues we diagnose when auditing B2B software brands:
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
            Example Prompts Users Ask AI
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            These are real prompts that SaaS buyers use when researching software through AI assistants. Each prompt type triggers a different recommendation pattern:
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
            Case Study: SaaS Platform Increases AI Mentions by 340%
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A mid-market project management SaaS company came to HyperMind after discovering they were absent from AI recommendations in their primary category. Despite strong Google rankings, they appeared in zero AI-generated product recommendation lists.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { metric: '340%', label: 'Increase in AI mentions' },
              { metric: '12→4', label: 'Weeks to first AI recommendation' },
              { metric: '28%', label: 'Increase in demo requests from AI referrals' },
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
            HyperMind executed a three-phase strategy: first, building citations across G2, Capterra, and industry comparison articles; second, restructuring product content for AI comprehension; third, establishing the brand in category-defining content. Within 90 days, the product appeared in AI recommendations for 14 high-intent prompts.
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
              { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
              { label: 'Complete GEO Strategy Guide', href: '/resources/complete-geo-strategy-guide' },
              { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
              { label: 'AI Visibility Monitoring Guide', href: '/resources/ai-visibility-monitoring-guide' },
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
            Get Your SaaS Product Recommended by AI
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll audit your current AI visibility, identify the prompts that matter for your category, and build a strategy to get your product into AI-generated recommendations.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your SaaS GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
