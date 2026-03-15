import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Platform — AI Visibility Monitoring & Intelligence | HyperMind',
  description:
    'The HyperMind GEO Platform provides AI visibility monitoring, AI mention tracking, sentiment analysis, prompt intelligence, and competitor benchmarking across ChatGPT, Gemini, Perplexity, and every major AI assistant.',
  openGraph: {
    title: 'GEO Platform — AI Visibility Monitoring & Intelligence | HyperMind',
    description:
      'Monitor, measure, and optimize your brand\'s presence in AI-generated answers with HyperMind\'s GEO Platform.',
    url: 'https://www.hypermindai.tech/platform',
    siteName: 'HyperMind',
  },
}

interface PlatformFeature {
  title: string
  href: string
  description: string
}

const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    title: 'AI Visibility Monitoring',
    href: '/platform/ai-visibility-monitoring',
    description:
      'Track your brand\'s visibility score across every major AI assistant in real time. Know exactly when and how AI mentions your brand.',
  },
  {
    title: 'AI Mention Tracking',
    href: '/platform/ai-mention-tracking',
    description:
      'Monitor every instance where AI assistants mention your brand, products, or competitors — with full prompt and response context.',
  },
  {
    title: 'AI Sentiment Analysis',
    href: '/platform/ai-sentiment-analysis',
    description:
      'Understand the tone, accuracy, and framing AI uses when describing your brand. Identify narrative gaps and reputation risks.',
  },
  {
    title: 'AI Citation Source Analysis',
    href: '/platform/ai-citation-source-analysis',
    description:
      'Discover which sources AI models cite when recommending brands in your category, and how to become one of those cited sources.',
  },
  {
    title: 'Prompt Intelligence',
    href: '/platform/prompt-intelligence',
    description:
      'See the exact prompts and questions users ask AI about your industry, category, and competitors — and where your brand appears in responses.',
  },
  {
    title: 'Competitor AI Visibility',
    href: '/platform/competitor-ai-visibility',
    description:
      'Benchmark your AI visibility against direct competitors. Track share of voice, mention frequency, and sentiment differentials.',
  },
  {
    title: 'AI Traffic Attribution',
    href: '/platform/ai-traffic-attribution',
    description:
      'Measure the traffic, leads, and revenue driven by AI search referrals. Attribute conversions back to specific AI platforms.',
  },
]

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            The GEO Platform for AI Search Intelligence
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            The HyperMind GEO Platform is an AI visibility monitoring and intelligence suite that tracks how AI assistants like ChatGPT, Gemini, Perplexity, and Claude mention, recommend, and cite your brand. It provides the data foundation for every GEO strategy.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Request Platform Access
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to monitor, measure, and improve your brand&apos;s presence in AI-generated answers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORM_FEATURES.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Covered */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              AI Platforms We Monitor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform tracks your brand across every AI assistant that matters to your audience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Microsoft Copilot', 'Meta AI', 'Grok', 'SearchGPT', 'DeepSeek'].map(
              (platform) => (
                <div
                  key={platform}
                  className="border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900">{platform}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See How AI Talks About Your Brand
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free AI visibility audit and discover exactly where your brand stands in AI search — across every platform, prompt, and competitor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Get Started Free
            </a>
            <Link
              href="/pricing"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
