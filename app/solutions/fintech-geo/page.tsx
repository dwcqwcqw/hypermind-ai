import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO for Fintech Companies | HyperMind',
  description:
    'Generative Engine Optimization for fintech companies. Build trust-based AI visibility so financial products are recommended when users ask AI assistants for financial guidance and product comparisons.',
  alternates: {
    canonical: '/solutions/fintech-geo/',
  },
  openGraph: {
    title: 'GEO for Fintech Companies | HyperMind',
    description:
      'Get your fintech product recommended in AI-generated answers. Trust-signal optimization for financial services.',
    url: 'https://www.hypermindai.tech/solutions/fintech-geo',
    siteName: 'HyperMind',
  },
}

const AI_QUERIES = [
  'What is the best investment app for beginners?',
  'Top neobanks with the highest savings rates',
  'Best payment processing platform for small businesses',
  'Which budgeting app is most accurate?',
  'Compare Stripe vs Square for online payments',
  'Safest cryptocurrency exchange for new investors',
  'Best business credit card for startups',
  'Which robo-advisor has the lowest fees?',
]

const GEO_GAPS = [
  {
    title: 'Regulatory Trust Gap',
    description:
      'AI assistants heavily weight regulatory compliance and licensing in financial recommendations. Fintech brands that lack visible compliance credentials — FDIC, SEC, PCI-DSS mentions — are deprioritized in AI answers.',
  },
  {
    title: 'Credibility Source Deficit',
    description:
      'Financial AI recommendations depend on citations from trusted sources: NerdWallet, Bankrate, Forbes Advisor, and regulatory databases. Without presence on these platforms, AI cannot verify your credibility.',
  },
  {
    title: 'Risk-Averse AI Behavior',
    description:
      'AI models are trained to be cautious with financial recommendations. They default to established brands with extensive track records. Newer fintechs must build disproportionately strong trust signals to overcome this bias.',
  },
  {
    title: 'Missing Comparison Positioning',
    description:
      'Users frequently ask AI to compare financial products. If your fintech does not appear in authoritative comparison content from trusted financial publications, AI will exclude you from head-to-head recommendations.',
  },
]

const EXAMPLE_PROMPTS = [
  { prompt: 'What is the safest app to invest in stocks?', context: 'Trust-weighted query — AI prioritizes brands with strong regulatory credentials' },
  { prompt: 'Best neobank for freelancers with no minimum balance', context: 'Feature-specific query — AI matches product features to user persona' },
  { prompt: 'Compare Robinhood vs Fidelity for long-term investing', context: 'Head-to-head comparison — AI cites financial review sites and analyst opinions' },
  { prompt: 'Which payment processor has the lowest transaction fees?', context: 'Cost-comparison query — AI needs structured pricing data to answer accurately' },
  { prompt: 'Is Chime a good bank? What are the pros and cons?', context: 'Brand evaluation query — AI synthesizes reviews, ratings, and editorial content' },
  { prompt: 'Best crypto wallet for security in 2025', context: 'Security-focused query — AI weighs security audit mentions and compliance certifications' },
]

export default function FintechGeoPage() {
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
            GEO for Fintech Companies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Consumers increasingly ask AI assistants for financial product recommendations. In an industry where trust is everything, AI visibility determines which fintech brands get recommended — and which get ignored. HyperMind builds the trust signals AI needs to recommend your product.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get a Fintech GEO Audit
          </a>
        </div>
      </section>

      {/* AI Queries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            AI Queries in Fintech
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Financial product research is one of the fastest-growing use cases for AI assistants. Users trust AI to filter through complex financial offerings and provide personalized recommendations. These are the query patterns driving AI-powered fintech discovery:
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
            How AI Recommends Financial Products
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            AI recommendations in finance differ from other industries because of the heightened trust and accuracy requirements. Models apply additional verification layers before recommending financial products.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Trust Verification',
                text: 'AI first checks whether a financial brand has verifiable credentials: regulatory licensing, FDIC insurance, compliance certifications. Brands without visible trust markers are filtered out early.',
              },
              {
                step: '2',
                title: 'Authority Source Cross-Reference',
                text: 'The model cross-references information from financial authority sites — NerdWallet, Bankrate, Forbes Advisor, Consumer Finance Protection Bureau — to validate claims about fees, rates, and features.',
              },
              {
                step: '3',
                title: 'Risk Assessment',
                text: 'AI applies a higher safety threshold for financial recommendations. It avoids recommending products with limited track records, negative regulatory mentions, or insufficient review coverage unless counterbalanced by strong positive signals.',
              },
              {
                step: '4',
                title: 'Personalized Ranking',
                text: 'Based on the user\'s specific query context (investor experience level, business size, risk tolerance), AI ranks products by relevance, typically recommending 3–5 options with specific pros and cons for each.',
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
            Common GEO Gaps for Fintech Companies
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Fintech GEO requires a trust-first approach that differs significantly from other industries. These are the most common gaps we find in fintech AI visibility:
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
            These are real prompts driving AI-powered financial product discovery. Each query type triggers different trust and validation requirements from the AI:
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
            Case Study: Neobank Achieves 5× AI Recommendation Growth
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A digital banking startup with strong product-market fit was completely absent from AI recommendations in the neobanking category. Despite having 200K+ active users and competitive rates, AI assistants consistently recommended only established players.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { metric: '5×', label: 'AI recommendation growth' },
              { metric: '67%', label: 'Increase in organic signups' },
              { metric: '90 days', label: 'Time to first AI mention' },
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
            HyperMind executed a trust-first strategy: building citations on NerdWallet, Bankrate, and Forbes Advisor; creating structured content highlighting regulatory compliance and FDIC insurance; and establishing comparison presence against incumbent banks. Within 90 days, the neobank appeared in AI answers for 22 high-intent financial queries.
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
              { label: 'AI Citation Strategy Service', href: '/services/ai-citation-strategy' },
              { label: 'AI Reputation Management', href: '/services/ai-reputation-management' },
              { label: 'Complete GEO Strategy Guide', href: '/resources/complete-geo-strategy-guide' },
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
            Build AI Trust for Your Fintech Brand
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll audit your fintech AI visibility, map the trust signals AI requires in your category, and build a strategy to get your product recommended by AI assistants.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Fintech GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
