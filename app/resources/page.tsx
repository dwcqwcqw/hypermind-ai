import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Resources — Generative Engine Optimization Knowledge Hub | HyperMind',
  description: 'Comprehensive GEO knowledge base including guides, playbooks, AI search library, prompt database, and the latest research on Generative Engine Optimization.',
}

const PILLAR_GUIDES = [
  {
    title: 'What is Generative Engine Optimization (GEO)?',
    href: '/resources/what-is-geo',
    description: 'The definitive guide to GEO — how it works, why it matters, and how it differs from traditional SEO.',
    tag: 'Pillar Guide',
  },
  {
    title: 'How AI Search Works',
    href: '/resources/how-ai-search-works',
    description: 'Understand how AI assistants generate answers, select citations, and recommend brands.',
    tag: 'Pillar Guide',
  },
  {
    title: 'How to Optimize for AI Search',
    href: '/resources/how-to-optimize-for-ai-search',
    description: 'Step-by-step guide to increasing your visibility in AI-generated answers.',
    tag: 'Pillar Guide',
  },
  {
    title: 'AI Visibility Monitoring Guide',
    href: '/resources/ai-visibility-monitoring-guide',
    description: 'How to track, measure, and benchmark your brand presence across AI platforms.',
    tag: 'Pillar Guide',
  },
  {
    title: 'Complete GEO Strategy Guide',
    href: '/resources/complete-geo-strategy-guide',
    description: 'From audit to results — build a comprehensive GEO strategy for your brand.',
    tag: 'Pillar Guide',
  },
  {
    title: 'AI Search Statistics',
    href: '/resources/ai-search-statistics',
    description: 'Key data, trends, and market insights on AI search adoption and brand visibility.',
    tag: 'Data & Research',
  },
]

const RESOURCE_SECTIONS = [
  {
    title: 'GEO Guides',
    href: '/resources/geo-guides',
    description: 'Comprehensive knowledge base covering every aspect of Generative Engine Optimization.',
    icon: '📖',
  },
  {
    title: 'AI Search Library',
    href: '/resources/ai-search-library',
    description: 'Deep dives into how ChatGPT, Gemini, Perplexity, Claude, and Copilot rank and cite content.',
    icon: '🔬',
  },
  {
    title: 'Prompt Database',
    href: '/resources/prompt-database',
    description: 'Industry-specific AI prompts that drive brand discovery and recommendations.',
    icon: '💬',
  },
  {
    title: 'GEO Playbooks',
    href: '/resources/geo-playbooks',
    description: 'Step-by-step action guides for specific GEO objectives.',
    icon: '🎯',
  },
  {
    title: 'Blog',
    href: '/resources/blog',
    description: 'Latest articles, insights, and analysis on AI search and GEO.',
    icon: '✍️',
  },
]

export default function ResourcesHub() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            GEO Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Generative Engine Optimization (GEO) is the practice of optimizing how brands appear in AI-generated answers.
            Explore our comprehensive guides, research, and tools to master AI search visibility.
          </p>
        </section>

        {/* Pillar Guides */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLAR_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-black hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 bg-gray-100 px-2 py-1 rounded">
                  {guide.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm">{guide.description}</p>
                <span className="inline-block mt-4 text-black font-semibold text-sm group-hover:underline">
                  Read Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Resource Sections */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCE_SECTIONS.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-200"
                >
                  <span className="text-3xl mb-4 block">{section.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/data" className="bg-gray-900 text-white rounded-2xl p-6 hover:bg-black transition">
              <h3 className="font-bold mb-1">AI Search Data Hub</h3>
              <p className="text-gray-300 text-sm">Leaderboards, rankings, and trend data</p>
            </Link>
            <Link href="/tools" className="bg-gray-900 text-white rounded-2xl p-6 hover:bg-black transition">
              <h3 className="font-bold mb-1">Free AI Tools</h3>
              <p className="text-gray-300 text-sm">Check your AI visibility score</p>
            </Link>
            <Link href="/case-studies" className="bg-gray-900 text-white rounded-2xl p-6 hover:bg-black transition">
              <h3 className="font-bold mb-1">Case Studies</h3>
              <p className="text-gray-300 text-sm">Real GEO results and client success stories</p>
            </Link>
            <Link href="/services" className="bg-gray-900 text-white rounded-2xl p-6 hover:bg-black transition">
              <h3 className="font-bold mb-1">GEO Services</h3>
              <p className="text-gray-300 text-sm">Professional AI visibility optimization</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Improve Your AI Visibility?
            </h2>
            <p className="text-gray-300 mb-8">
              Get a free GEO audit and discover how AI assistants currently describe your brand.
            </p>
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Get a Free GEO Audit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
