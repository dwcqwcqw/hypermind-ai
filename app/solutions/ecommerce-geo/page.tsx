import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO for Ecommerce Brands | HyperMind',
  description:
    'Generative Engine Optimization for ecommerce brands. Get your products recommended when shoppers ask AI assistants like ChatGPT, Gemini, and Perplexity for product recommendations and comparisons.',
  openGraph: {
    title: 'GEO for Ecommerce Brands | HyperMind',
    description:
      'Get your products recommended in AI-powered shopping answers. HyperMind delivers product-level AI visibility for ecommerce brands.',
    url: 'https://www.hypermindai.tech/solutions/ecommerce-geo',
    siteName: 'HyperMind',
  },
}

const AI_QUERIES = [
  'Best running shoes for flat feet under $150',
  'Top organic skincare brands for sensitive skin',
  'What is the best mattress for back pain?',
  'Compare Dyson V15 vs Shark Stratos vacuum',
  'Best wireless earbuds for working out',
  'Top sustainable fashion brands for women',
  'Which coffee maker makes the best espresso at home?',
  'Best laptop for college students in 2025',
]

const GEO_GAPS = [
  {
    title: 'Review Signal Weakness',
    description:
      'AI shopping recommendations are heavily influenced by aggregated review data. Brands with thin review coverage on Amazon, Wirecutter, or Reddit are overlooked in favor of heavily-reviewed competitors.',
  },
  {
    title: 'Product Data Fragmentation',
    description:
      'Many ecommerce brands have inconsistent product information across platforms. AI struggles to synthesize conflicting specs, prices, and availability data, leading it to recommend brands with cleaner, more consistent product information.',
  },
  {
    title: 'Missing Editorial Coverage',
    description:
      'AI heavily weights editorial review sites — Wirecutter, CNET, Good Housekeeping, Reviewed. Products not featured in these outlets are nearly invisible in AI product recommendations.',
  },
  {
    title: 'Weak Category Association',
    description:
      'AI needs clear category signals to match products to queries. If your product page says "premium audio device" but the user asks for "best wireless earbuds," misaligned categorization means missed recommendations.',
  },
]

const EXAMPLE_PROMPTS = [
  { prompt: 'What are the best noise-canceling headphones under $300?', context: 'Budget-constrained product query — AI compares price-to-performance across brands' },
  { prompt: 'Best moisturizer for dry skin recommended by dermatologists', context: 'Authority-weighted query — AI prioritizes products with expert endorsements' },
  { prompt: 'Compare Nike Air Max vs Adidas Ultraboost for daily running', context: 'Head-to-head comparison — AI cites running review sites and user testimonials' },
  { prompt: 'What kitchen appliances are worth the investment?', context: 'Value-assessment query — AI recommends products with strong durability and review signals' },
  { prompt: 'Best gifts for a 30-year-old woman who likes cooking', context: 'Gift recommendation — AI curates products across categories with personalization' },
  { prompt: 'Most comfortable office chair for long hours of work', context: 'Comfort-focused query — AI weighs ergonomic reviews and expert recommendations' },
]

export default function EcommerceGeoPage() {
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
            GEO for Ecommerce Brands
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Shoppers are asking AI assistants for product recommendations instead of scrolling through search results. AI-powered shopping is the fastest-growing product discovery channel — and your products need to be in those answers. HyperMind builds product-level AI visibility that drives purchases.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get an Ecommerce GEO Audit
          </a>
        </div>
      </section>

      {/* AI Queries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            AI Queries in Ecommerce
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Product recommendation queries are among the most common use cases for AI assistants. Shoppers use AI to filter through thousands of options and get personalized, curated recommendations. These are the query patterns driving AI-powered shopping:
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
            How AI Recommends Products
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            AI product recommendations synthesize information from editorial reviews, user reviews, product specifications, and pricing data. The recommendation engine differs significantly from traditional search-based shopping.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Review Aggregation',
                text: 'AI scans and synthesizes reviews from Amazon, Wirecutter, Reddit, CNET, and specialized review sites. Products with consistent positive sentiment across multiple review sources rank highest.',
              },
              {
                step: '2',
                title: 'Feature Matching',
                text: 'The model extracts specific features from the user\'s query (budget, use case, preferences) and matches them against product specifications. Structured product data is essential for accurate matching.',
              },
              {
                step: '3',
                title: 'Editorial Authority',
                text: 'AI strongly weights editorial "best of" lists and expert reviews. Products featured in Wirecutter, Good Housekeeping, or CNET receive a significant recommendation boost over products without editorial coverage.',
              },
              {
                step: '4',
                title: 'Curated Recommendation',
                text: 'AI generates a curated list of 3–7 products, often organized by subcriteria (best overall, best budget, best premium). Position as "best overall" drives the most purchase intent.',
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
            Common GEO Gaps for Ecommerce Brands
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Ecommerce GEO requires product-level optimization that goes beyond brand awareness. These are the most common gaps preventing products from appearing in AI shopping recommendations:
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
            Example Prompts Shoppers Ask AI
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            These are real prompts driving AI-powered product discovery. Each query type triggers different recommendation patterns based on the shopper&apos;s intent:
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
            Case Study: DTC Brand Captures AI Shopping Recommendations
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A direct-to-consumer skincare brand was invisible in AI product recommendations despite having 15K+ five-star reviews on their site. The problem: AI assistants could not find or verify these reviews because they existed only on the brand&apos;s own platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { metric: '420%', label: 'Increase in AI product mentions' },
              { metric: '35%', label: 'Revenue lift from AI-referred traffic' },
              { metric: '8', label: 'AI platforms now recommending products' },
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
            HyperMind executed a multi-channel strategy: distributing review signals to Amazon, Sephora, and Ulta; earning editorial features on Allure and Byrdie; and structuring product data with consistent specifications across all platforms. Within 60 days, the brand appeared in AI recommendations for 31 high-intent skincare queries.
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
              { label: 'AI Search Statistics', href: '/resources/ai-search-statistics' },
              { label: 'AI Visibility Optimization Service', href: '/services/ai-visibility-optimization' },
              { label: 'AI Mention Growth Service', href: '/services/ai-mention-growth' },
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
            Get Your Products Recommended by AI
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll audit your product-level AI visibility, identify the shopping prompts that matter for your category, and build a strategy to get your products into AI shopping recommendations.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Ecommerce GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
