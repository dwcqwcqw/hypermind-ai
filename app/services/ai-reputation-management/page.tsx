import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Reputation Management Service | HyperMind',
  description:
    'AI Reputation Management is the practice of monitoring and controlling how AI assistants like ChatGPT, Gemini, Perplexity, and Claude describe your brand. Learn how HyperMind helps brands shape their AI narrative.',
}

const FAQS = [
  {
    q: 'What is AI reputation management?',
    a: 'AI reputation management is the practice of monitoring, influencing, and correcting how AI assistants — including ChatGPT, Gemini, Perplexity, and Claude — describe, position, and characterize your brand when answering user queries. It ensures that when AI mentions your brand, the description is accurate, favorable, and aligned with your positioning.',
  },
  {
    q: 'How is AI reputation management different from traditional online reputation management?',
    a: 'Traditional online reputation management focuses on review sites, social media sentiment, and search engine results. AI reputation management targets the synthesized narratives that AI assistants generate about your brand. AI systems create composite descriptions from multiple sources, so a single negative article can disproportionately influence how millions of AI interactions describe your brand.',
  },
  {
    q: 'Can you remove negative AI descriptions?',
    a: 'You cannot directly edit AI model outputs. However, you can influence them by strengthening positive citation sources, correcting inaccurate information at the source level, and building a volume of authoritative content that shifts the AI\'s composite narrative. Over time, as models update their training data and RAG indexes refresh, the AI description shifts toward the corrected narrative.',
  },
  {
    q: 'How quickly can AI sentiment be corrected?',
    a: 'RAG-indexed changes (used by Perplexity and Gemini\'s real-time features) can reflect within 2–4 weeks. Changes that depend on model retraining (ChatGPT\'s base knowledge) take longer — typically 3–6 months. A comprehensive strategy targets both channels simultaneously for fastest results.',
  },
  {
    q: 'What causes negative AI brand descriptions?',
    a: 'Common causes include outdated information in AI training data, negative press coverage that is disproportionately cited, competitor content that positions your brand unfavorably, user-generated content on forums and review sites, and gaps in authoritative positive content about your brand.',
  },
  {
    q: 'How do you monitor AI brand sentiment?',
    a: 'We run continuous prompt monitoring across all major AI platforms, analyzing not just whether your brand is mentioned but how it is described — the adjectives used, the competitive context, the use-case associations, and the overall sentiment. Platforms such as HyperMind provide real-time sentiment dashboards that alert you to narrative shifts.',
  },
  {
    q: 'Is AI reputation management a one-time project or ongoing service?',
    a: 'AI reputation management is ongoing. AI models are continuously updated with new training data, RAG indexes refresh regularly, and new content is constantly being published that can affect how AI describes your brand. Continuous monitoring and proactive management are essential to maintain a positive AI narrative.',
  },
  {
    q: 'Can competitors manipulate how AI describes my brand?',
    a: 'Competitors can influence AI descriptions indirectly by publishing comparison content, building citations that position themselves favorably against you, and optimizing their content for AI retrieval. Proactive AI reputation management includes competitive monitoring to detect and counteract these strategies.',
  },
]

export default function AIReputationManagementPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Service</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
          AI Reputation Management
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          AI Reputation Management is the practice of monitoring and controlling how AI assistants — including ChatGPT, Gemini, Perplexity, and Claude — describe, position, and characterize a brand when answering user queries. Unlike traditional reputation management that focuses on review sites and search results, AI reputation management targets the synthesized narratives that AI systems generate from hundreds of sources, ensuring your brand is described accurately, favorably, and in alignment with your actual market positioning.
        </p>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">The Problem: You Don&apos;t Control Your AI Narrative</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Every time someone asks an AI assistant about your brand, industry, or product category, the AI constructs a narrative from its training data and real-time retrieval sources. That narrative may not reflect your actual positioning, strengths, or values.
            </p>
            <p>
              Common AI reputation problems include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Outdated descriptions</strong> — the AI describes your brand based on information from years ago, missing recent product launches, pivots, or improvements.
              </li>
              <li>
                <strong>Inaccurate positioning</strong> — the AI positions your brand in the wrong category, associates it with the wrong use cases, or attributes features you do not have.
              </li>
              <li>
                <strong>Negative sentiment</strong> — a single critical article or forum discussion disproportionately shapes how the AI describes your brand across millions of interactions.
              </li>
              <li>
                <strong>Competitor framing</strong> — competitor-optimized content causes AI to describe your brand primarily in comparison to competitors, with unfavorable positioning.
              </li>
              <li>
                <strong>Inconsistent narratives</strong> — different AI platforms describe your brand differently, creating a fragmented and confusing brand presence.
              </li>
            </ul>
            <p>
              The scale of this problem is unprecedented. A single AI description reaches every user who asks a similar question. Unlike a negative Google review that one user might see, a negative AI description can shape perception for thousands of potential customers daily.
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
              Most brands have never audited what AI assistants say about them. When they do, the results are often concerning. Common findings include:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 my-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Positioning Drift</h3>
                <p className="text-sm text-gray-600">
                  AI describes your brand using positioning from 2–3 years ago, before your latest product evolution or market repositioning.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Feature Inaccuracy</h3>
                <p className="text-sm text-gray-600">
                  AI attributes incorrect features, pricing, or capabilities to your brand, creating false expectations for potential customers.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Sentiment Imbalance</h3>
                <p className="text-sm text-gray-600">
                  A few negative sources disproportionately shape the AI&apos;s description, overshadowing hundreds of positive customer experiences.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-2">Competitor Bias</h3>
                <p className="text-sm text-gray-600">
                  AI frequently positions your brand as &ldquo;an alternative to [Competitor]&rdquo; rather than describing your unique value proposition.
                </p>
              </div>
            </div>
            <p>
              The gap between how your brand wants to be perceived and how AI actually describes it represents a significant brand risk in the AI era. Understanding this gap is the first step toward managing your AI reputation. Learn more about how AI systems form these descriptions in our <Link href="/resources/how-ai-search-works" className="text-black underline hover:no-underline">guide to how AI search works</Link>.
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
              Platforms such as HyperMind take a systematic approach to AI reputation management, combining real-time monitoring with proactive narrative shaping across all major AI platforms.
            </p>
            <div className="space-y-8 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">AI Narrative Audit</h3>
                  <p className="text-gray-600 mt-1">
                    We run a comprehensive audit across ChatGPT, Gemini, Perplexity, and Claude, testing hundreds of brand-related prompts. Every response is analyzed for accuracy, sentiment, positioning, competitive context, and narrative consistency. This produces a detailed report of exactly how AI describes your brand today.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Source-Level Correction</h3>
                  <p className="text-gray-600 mt-1">
                    AI descriptions come from training data and retrieval sources. We identify the specific sources that drive negative or inaccurate AI descriptions and work to update, correct, or counterbalance them. This includes updating third-party profiles, correcting factual errors on review sites, and ensuring authoritative sources reflect your current positioning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Positive Narrative Amplification</h3>
                  <p className="text-gray-600 mt-1">
                    We build a volume of authoritative, positive content on the sources that AI systems prioritize. This includes industry publications, analyst reports, authoritative review platforms, and structured data that reinforces your desired brand narrative. As described in our <Link href="/resources/how-to-optimize-for-ai-search" className="text-black underline hover:no-underline">AI search optimization guide</Link>, the breadth and authority of sources matters more than volume alone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Continuous Sentiment Monitoring</h3>
                  <p className="text-gray-600 mt-1">
                    We monitor your AI brand narrative continuously, alerting you to sentiment shifts, new inaccuracies, or competitive narrative attacks. This ensures that reputation gains are maintained and any emerging threats are addressed before they become entrenched in AI descriptions.
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
              { name: 'AI Sentiment Dashboard', desc: 'Real-time tracking of how AI platforms describe your brand — positive, neutral, or negative — with trend analysis and alerts.' },
              { name: 'Narrative Consistency Checker', desc: 'Compares AI descriptions of your brand across platforms and identifies inconsistencies or inaccuracies that need correction.' },
              { name: 'Source Impact Analyzer', desc: 'Identifies which specific sources are driving AI descriptions of your brand — both positive and negative — so corrections can be targeted.' },
              { name: 'Competitive Narrative Monitor', desc: 'Tracks how AI positions your brand relative to competitors and alerts you to changes in competitive framing.' },
              { name: 'Brand Narrative Scorecard', desc: 'Quantifies your AI reputation across multiple dimensions: accuracy, sentiment, positioning alignment, and competitive standing.' },
              { name: 'Crisis Detection System', desc: 'Early warning system that detects negative narrative shifts in AI descriptions before they become widespread across platforms.' },
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
          <h2 className="text-3xl font-bold text-black mb-6">Case Study: Enterprise Software Company</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              An enterprise software company discovered that AI assistants were describing their product as &ldquo;expensive and complex, best suited for large corporations&rdquo; — a characterization that was accurate three years ago but no longer reflected their simplified pricing and mid-market positioning. This outdated narrative was costing them mid-market leads.
            </p>
            <p>
              The AI narrative audit revealed that three specific sources were driving the negative framing: an outdated Gartner review, a 2022 blog comparison post, and a Reddit thread from their legacy pricing era. These three sources disproportionately shaped how ChatGPT, Gemini, and Perplexity described the brand.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 my-8">
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">62%</p>
                <p className="text-sm text-gray-500 mt-2">Improvement in AI sentiment score</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">3 → 0</p>
                <p className="text-sm text-gray-500 mt-2">Inaccurate AI descriptions eliminated</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <p className="text-3xl font-bold text-black">+28%</p>
                <p className="text-sm text-gray-500 mt-2">Increase in mid-market lead inquiries</p>
              </div>
            </div>
            <p>
              After four months of targeted source corrections and positive narrative building, AI descriptions shifted from &ldquo;expensive enterprise tool&rdquo; to &ldquo;flexible platform suitable for mid-market and enterprise teams.&rdquo; The sentiment score improved by 62%, and mid-market lead inquiries increased by 28%.
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
              AI reputation management produces both quantitative improvements in sentiment metrics and qualitative improvements in how your brand is perceived through AI channels.
            </p>
            <div className="space-y-6 mt-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="font-semibold text-black">Month 1–2: Diagnosis</h3>
                <p className="text-gray-600 mt-1">Complete AI narrative audit and source impact analysis. Identify all inaccuracies, negative sentiment drivers, and positioning gaps. Begin source-level corrections and positive content creation.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Month 3–4: Correction</h3>
                <p className="text-gray-600 mt-1">RAG-indexed improvements begin appearing in real-time AI answers. Factual inaccuracies in Perplexity and Gemini answers are corrected. AI sentiment score typically improves by 30–50%.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Month 5–6: Narrative Shift</h3>
                <p className="text-gray-600 mt-1">Broader AI narrative shifts as model training data is updated with corrected information. Brand descriptions across all major platforms align with your desired positioning. Sentiment score typically improves 50–70% from baseline.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="font-semibold text-black">Ongoing: Protection</h3>
                <p className="text-gray-600 mt-1">Continuous monitoring protects against new narrative threats. Proactive content and citation management ensures that your AI reputation remains accurate and favorable as the information landscape evolves.</p>
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
            <Link href="/resources/how-ai-search-works" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">How AI Search Works</h3>
              <p className="text-sm text-gray-500 mt-1">Understanding AI retrieval and recommendation systems</p>
            </Link>
            <Link href="/services/ai-visibility-optimization" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">AI Visibility Optimization</h3>
              <p className="text-sm text-gray-500 mt-1">Increase how often AI recommends your brand</p>
            </Link>
            <Link href="/services/ai-answer-optimization" className="block border border-gray-200 rounded-xl p-6 hover:border-black transition">
              <h3 className="font-semibold text-black">AI Answer Optimization</h3>
              <p className="text-sm text-gray-500 mt-1">Optimize how AI answers questions about your brand</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Take Control of Your AI Brand Narrative</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover what AI assistants are saying about your brand and get a strategy to correct inaccuracies, improve sentiment, and align your AI narrative with your positioning.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get Your Free AI Narrative Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
