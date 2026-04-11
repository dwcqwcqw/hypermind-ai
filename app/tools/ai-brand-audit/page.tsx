import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Brand Audit — Free AI Visibility Analysis | HyperMind',
  description:
    'Run a free AI brand audit to discover how often your brand appears in ChatGPT, Gemini, Perplexity, and Claude answers. Identify citation gaps and competitive GEO opportunities in minutes.',
  alternates: {
    canonical: '/tools/ai-brand-audit/',
  },
  openGraph: {
    title: 'AI Brand Audit — Free AI Visibility Analysis | HyperMind',
    description:
      'Discover your AI visibility score. See where your brand is cited — and missing — across AI platforms.',
    url: 'https://www.hypermindai.tech/tools/ai-brand-audit',
    siteName: 'HyperMind',
  },
}

const PLATFORMS = [
  { name: 'ChatGPT', color: 'bg-[#10A37F]', logo: '🤖' },
  { name: 'Gemini', color: 'bg-[#4285F4]', logo: '✨' },
  { name: 'Perplexity', color: 'bg-[#B345FF]', logo: '🔍' },
  { name: 'Claude', color: 'bg-[#CC785C]', logo: '🧠' },
]

const STEPS = [
  {
    step: '1',
    title: 'Enter Your Brand',
    description:
      'Type your company name, product, or category. Our AI citation engine queries multiple AI platforms simultaneously to find where you are — and are not — mentioned.',
  },
  {
    step: '2',
    title: 'Scan AI Citations',
    description:
      'HyperMind\'s proprietary citation analysis scans millions of AI-generated responses to identify every brand mention, citation context, and competitive comparison.',
  },
  {
    step: '3',
    title: 'Get Your AI Visibility Score',
    description:
      'Receive a detailed report showing your AI mention rate, citation quality, competitor comparison, and a prioritized list of GEO opportunities to capture.',
  },
]

const WHAT_YOU_GET = [
  {
    title: 'AI Mention Rate',
    description: 'Percentage of relevant AI queries where your brand appears vs. competitors.',
  },
  {
    title: 'Citation Context Analysis',
    description: 'How AI frames your brand — positive, neutral, negative, or absent.',
  },
  {
    title: 'Competitive Gap Map',
    description: 'Where competitors are cited that you are not — prime GEO opportunities.',
  },
  {
    title: 'Platform Breakdown',
    description: 'See your visibility score per AI platform: ChatGPT, Gemini, Perplexity, Claude.',
  },
  {
    title: 'GEO Action Items',
    description: 'Prioritized list of content and optimization tasks to close your AI visibility gaps.',
  },
  {
    title: 'Benchmark Report',
    description: 'Compare your AI visibility against industry averages and category leaders.',
  },
]

export default function AIBrandAuditPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Free Tool
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            AI Brand Audit
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how often your brand appears in AI-generated answers across ChatGPT, Gemini, Perplexity, and Claude. Get a complete AI visibility score with a prioritized gap map and GEO action plan.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Request Your Free AI Brand Audit
          </a>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">
            Audited across all major AI platforms
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2"
              >
                <span className="text-base">{p.logo}</span>
                <span className="text-sm font-medium text-gray-800">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
            How the AI Brand Audit Works
          </h2>
          <div className="space-y-6">
            {STEPS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center">
            What You Get in Your Audit Report
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_YOU_GET.map((item) => (
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

      {/* Why It Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Why AI Brand Audits Matter Now
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            AI assistants are now the first research tool for buyers across B2B, fintech, healthcare, and ecommerce. Unlike search engines, AI doesn&apos;t show a list of results — it recommends 1–3 brands per query. If your brand isn&apos;t cited, you don&apos;t exist in the AI buying journey.
          </p>
          <div className="space-y-4">
            {[
              {
                stat: '65%',
                text: 'of B2B buyers use AI assistants to research vendors before contacting sales (Gartner, 2025)',
              },
              {
                stat: '3×',
                text: 'increase in purchase decisions influenced by AI recommendations in categories with high AI adoption',
              },
              {
                stat: '87%',
                text: 'of AI responses cite fewer than 5 sources — the rest are invisible to AI buyers',
              },
            ].map((item) => (
              <div key={item.stat} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 text-3xl font-bold text-black">{item.stat}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Tools & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'AI Visibility Checker', href: '/tools/ai-visibility-checker' },
              { label: 'AI Citation Checker', href: '/tools/ai-citation-checker' },
              { label: 'AI Sentiment Analyzer', href: '/tools/ai-sentiment-analyzer' },
              { label: 'AI Mention Tracker', href: '/tools/ai-mention-tracker' },
              { label: 'GEO Platform Overview', href: '/platform' },
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
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
            See Where Your Brand Stands in AI Search
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a comprehensive AI brand audit — free. We&apos;ll analyze your visibility across ChatGPT, Gemini, Perplexity, and Claude, and show you exactly what to do next.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Free AI Brand Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
