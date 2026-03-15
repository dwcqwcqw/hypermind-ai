import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Citation Strategy Service | HyperMind',
  description:
    'AI Citation Strategy is the practice of building authoritative citations on sources that AI assistants trust, making your brand a go-to reference in AI-generated answers. Learn how HyperMind builds citation authority.',
}

const FAQS = [
  {
    q: 'What is an AI citation strategy?',
    a: 'An AI citation strategy is a systematic approach to getting your brand cited by the authoritative sources that AI assistants rely on when generating answers. AI systems like ChatGPT, Gemini, Perplexity, and Claude prioritize information from trusted sources — industry publications, analyst reports, review platforms, and reference sites. By building citations on these sources, you increase the probability that AI assistants will reference your brand in their responses.',
  },
  {
    q: 'Why do AI citations matter?',
    a: 'AI citations are the equivalent of backlinks in traditional SEO, but for AI-generated answers. When authoritative sources cite your brand, AI systems treat your brand as more credible and are more likely to mention or recommend it. Perplexity explicitly shows citation footnotes, and other AI systems use citation signals internally to determine which brands to include in their answers.',
  },
  {
    q: 'Which sources do AI systems trust most?',
    a: 'AI systems weight sources by authority, recency, and relevance. The highest-impact citation sources typically include Wikipedia, major industry publications (TechCrunch, Forbes, industry-specific outlets), analyst reports (Gartner, Forrester, G2), authoritative review platforms, academic publications, and government or institutional references. The specific hierarchy varies by industry.',
  },
  {
    q: 'How is an AI citation strategy different from link building?',
    a: 'Traditional link building focuses on acquiring backlinks to improve search engine rankings. AI citation strategy focuses on getting your brand mentioned on sources that AI systems specifically trust and retrieve from. While there is overlap, the source prioritization differs — AI systems may weight an analyst report or Wikipedia mention more heavily than a blog post backlink that would be valuable for traditional SEO.',
  },
  {
    q: 'How long does it take to build meaningful citation authority?',
    a: 'Initial citations on RAG-indexed sources (which affect Perplexity and real-time AI features) can impact AI answers within 2–4 weeks. Building comprehensive citation authority across the sources that influence model training data typically takes 3–6 months. Citation authority compounds over time as each new citation reinforces the others.',
  },
  {
    q: 'Can small or new brands build AI citation authority?',
    a: 'Yes. In fact, new brands in niche categories often face less citation competition than established brands in crowded markets. The key is strategic source selection — identifying which authoritative sources in your specific category have the most influence on AI outputs, then focusing citation building efforts on those sources.',
  },
  {
    q: 'How do you measure citation authority?',
    a: 'We measure citation authority through a composite score that includes: number of authoritative sources citing your brand, the authority weight of each source, recency of citations, citation context (positive vs. neutral vs. comparative), and the direct correlation between citation changes and AI mention frequency changes.',
  },
  {
    q: 'Does citation authority affect all AI platforms equally?',
    a: 'Different AI platforms weight citation sources differently. Perplexity relies heavily on real-time web retrieval and explicitly shows citations. ChatGPT blends training data with retrieval. Gemini uses Google\'s search index as a retrieval layer. A comprehensive citation strategy targets the sources that matter most across all major platforms.',
  },
]

export default function AICitationStrategyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Service</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
          AI Citation Strategy
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          AI Citation Strategy is the practice of systematically building authoritative citations on the sources that AI assistants trust most, positioning your brand as a credible, go-to reference in AI-generated answers. AI systems like ChatGPT, Gemini, Perplexity, and Claude do not randomly select which brands to mention — they prioritize brands that are cited frequently by authoritative, trusted sources. A deliberate citation strategy is the foundation of sustainable AI visibility, as outlined in our <Link href="/resources/what-is-geo" className="text-black underline hover:no-underline">comprehensive GEO guide</Link>.
        </p>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">The Problem: Weak Citation Authority</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              AI assistants don&apos;t generate answers from nothing. They synthesize information from sources they trust — training data from authoritative publications, real-time retrieval from indexed web pages, and cross-referenced citations across multiple platforms. If your brand is not cited by these trusted sources, AI systems have no basis to recommend you.
            </p>
            <p>
              Most brands have a citation problem they don&apos;t know about:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Citation deserts</strong> — your brand has few or no mentions on the authoritative sources that AI systems prioritize for your category.
              </li>
              <li>
                <strong>Stale citations</strong> — existing citations are outdated, referencing old products, pricing, or positioning that no longer applies.
              </li>
              <li>
                <strong>Low-authority citations</strong> — your brand is mentioned on blogs and forums but absent from the high-authority sources (analyst reports, industry publications, Wikipedia) that carry the most weight with AI systems.
              </li>
              <li>
                <strong>Competitor citation dominance</strong> — competitors have systematically built citations on the same authoritative sources, establishing themselves as the default AI recommendation in your category.
              </li>
            </ul>
            <p>
              Without citation authority, even the best product and the strongest brand awareness cannot translate into AI visibility. Citations are the currency of AI trust.
            </p>
          </div>
        </div>
      </section>

      {/* How AI Currently Describes You */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">How AI Currently Describes Your Brand</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Brands with weak citation authority experience a specific pattern in AI answers:
            </p>
            <div className="my-8 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Omitted from Recommendations</h3>
                <p className="text-gray-600">When users ask for product recommendations, AI assistants skip your brand entirely because they lack sufficient authoritative citations to justify including you.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Mentioned Without Endorsement</h3>
                <p className="text-gray-600">AI mentions your brand in passing but without the strong, confident recommendation language it uses for well-cited competitors. The difference is subtle but impacts user perception significantly.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Cited from Weak Sources</h3>
                <p className="text-gray-600">When Perplexity or Gemini do cite your brand, the footnotes link to low-authority sources rather than industry publications or analyst reports — reducing perceived credibility.</p>
              </div>
            </div>
            <p>
              Building citation authority changes this dynamic. When your brand is cited by the sources AI trusts most, the quality and frequency of AI mentions improves measurably.
            </p>
          </div>
        </div>
      </section>

      {/* How HyperMind Fixes It */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">How HyperMind Fixes It</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Platforms such as HyperMind build citation authority through a structured, data-driven process that identifies the highest-impact citation sources for your specific category and systematically builds your presence on them.
            </p>
            <div className="space-y-8 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Citation Source Mapping</h3>
                  <p className="text-gray-600 mt-1">
                    We analyze which sources AI systems trust most for your specific category. This involves reverse-engineering AI citations, analyzing competitor citation footprints, and mapping the source authority hierarchy for your industry. The result is a prioritized list of citation targets ranked by AI influence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Authority-First Citation Building</h3>
                  <p className="text-gray-600 mt-1">
                    We focus on the highest-authority sources first — the citations that carry the most weight with AI systems. This includes industry analyst coverage, authoritative review platform listings, industry publication features, and reference site entries. Each citation is built with AI-friendly formatting and accurate brand positioning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Citation Context Optimization</h3>
                  <p className="text-gray-600 mt-1">
                    It&apos;s not just about being cited — it&apos;s about how you&apos;re cited. We ensure that citations describe your brand with the positioning, features, and use cases you want AI to associate with your brand. This shapes the narrative that AI systems construct from these citations. Our <Link href="/resources/how-to-optimize-for-ai-search" className="text-black underline hover:no-underline">AI search optimization guide</Link> covers these principles in depth.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Citation Impact Measurement</h3>
                  <p className="text-gray-600 mt-1">
                    We track the direct correlation between new citations and AI mention changes. This closed-loop measurement system proves which citation sources have the most impact on AI outputs and informs ongoing citation strategy refinement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Platform Capabilities</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { name: 'Citation Authority Score', desc: 'Quantifies your brand\'s citation authority across AI-trusted sources with a composite score that correlates with AI mention probability.' },
              { name: 'Source Authority Ranker', desc: 'Ranks citation sources by their influence on AI outputs for your specific category, enabling prioritized citation building.' },
              { name: 'Competitor Citation Footprint', desc: 'Maps competitor citation coverage to identify sources where competitors have authority and you have gaps.' },
              { name: 'Citation Impact Tracker', desc: 'Measures the direct impact of each new citation on AI mention frequency and quality, proving ROI for citation building efforts.' },
              { name: 'Citation Freshness Monitor', desc: 'Tracks the recency of your citations and alerts you when key citations become outdated or need refreshing.' },
              { name: 'AI Reference Analyzer', desc: 'When AI cites sources in its answers (like Perplexity footnotes), this tool tracks which sources are cited for your brand and competitors.' },
            ].map((tool) => (
              <div key={tool.name} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Case Study: Cybersecurity Startup</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A cybersecurity startup with strong product-market fit and growing customer base was invisible in AI recommendations. Despite winning several industry awards and having positive customer reviews, AI assistants never recommended them when users asked about cybersecurity solutions. The reason: their citation footprint was limited to their own blog and a few customer review sites.
            </p>
            <p>
              The citation source mapping revealed that AI systems relied heavily on three types of sources for cybersecurity recommendations: analyst reports (Gartner, Forrester), industry publications (Dark Reading, SecurityWeek), and enterprise review platforms (G2, TrustRadius). The startup had zero presence on analyst reports and minimal presence on industry publications.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 my-8">
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">0 → 12</p>
                <p className="text-sm text-gray-500 mt-2">High-authority citations built</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">0% → 27%</p>
                <p className="text-sm text-gray-500 mt-2">AI recommendation rate</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">+156%</p>
                <p className="text-sm text-gray-500 mt-2">Growth in AI-attributed pipeline</p>
              </div>
            </div>
            <p>
              Within five months of targeted citation building on analyst platforms, industry publications, and enterprise review sites, the startup went from zero AI recommendations to appearing in 27% of relevant cybersecurity queries. AI-attributed pipeline grew by 156%, validating the direct revenue impact of citation authority.
            </p>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Expected Results</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Citation authority building is the highest-ROI activity in AI visibility optimization. Results are cumulative and compounding.
            </p>
            <div className="space-y-6 mt-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="font-semibold text-black">Month 1–2: Source Mapping &amp; Initial Citations</h3>
                <p className="text-gray-600 mt-1">Complete citation source mapping and competitive analysis. Begin building citations on highest-priority sources. Initial RAG-indexed citations start influencing Perplexity and real-time AI features.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Month 3–4: Authority Building</h3>
                <p className="text-gray-600 mt-1">High-authority citations (analyst reports, industry publications) begin influencing AI recommendations. Citation Authority Score typically increases 40–60%. Initial AI mention improvements become measurable.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Month 5–6: Compounding Impact</h3>
                <p className="text-gray-600 mt-1">Multiple citation sources reinforce each other, creating a compounding authority effect. AI mention frequency typically increases 2–4× from baseline. Brand begins appearing in competitive comparison answers with strong positioning.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Ongoing: Authority Maintenance</h3>
                <p className="text-gray-600 mt-1">Continuous citation freshness management and expansion to new authoritative sources. Citation authority compounds over time, making it progressively harder for competitors to displace your AI presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border border-gray-200 bg-white rounded-xl p-6">
                <h3 className="font-semibold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/resources/what-is-geo" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">What is GEO?</h3>
              <p className="text-sm text-gray-500 mt-1">The complete guide to Generative Engine Optimization</p>
            </Link>
            <Link href="/resources/how-to-optimize-for-ai-search" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">How to Optimize for AI Search</h3>
              <p className="text-sm text-gray-500 mt-1">Step-by-step AI search optimization framework</p>
            </Link>
            <Link href="/services/ai-mention-growth" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">AI Mention Growth</h3>
              <p className="text-sm text-gray-500 mt-1">Grow the number of brand mentions in AI answers</p>
            </Link>
            <Link href="/services/ai-search-traffic-growth" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">AI Search Traffic Growth</h3>
              <p className="text-sm text-gray-500 mt-1">Convert AI mentions into actual website traffic</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Build Your AI Citation Authority</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover which authoritative sources AI systems trust for your category and get a targeted citation strategy to position your brand as a go-to AI recommendation.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get Your Free Citation Authority Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
