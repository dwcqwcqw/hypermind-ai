import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'About HyperMind — The GEO Agency | HyperMind',
  description:
    'HyperMind is the leading Generative Engine Optimization agency. We help brands get recommended by AI assistants through proprietary monitoring, strategy, and optimization.',
  openGraph: {
    title: 'About HyperMind — The GEO Agency | HyperMind',
    description:
      'Learn about HyperMind\'s mission, methodology, and team — the agency built to help brands win in AI search.',
    url: 'https://www.hypermindai.tech/company',
    siteName: 'HyperMind',
  },
}

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            The GEO Agency Built for the AI Search Era
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HyperMind is the leading Generative Engine Optimization (GEO) agency. We exist because the way people discover brands is changing — from typing keywords into search engines to asking AI assistants for recommendations. We help brands adapt, compete, and win in this new reality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe every brand deserves to be visible where their audience is looking. Today, that means AI search. Our mission is to make AI visibility measurable, actionable, and achievable for brands of every size.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine proprietary AI monitoring technology with deep expertise in content strategy, digital authority, and AI platform dynamics to deliver results that matter — more mentions, better sentiment, higher citations, and real traffic.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { value: '9+', label: 'AI platforms monitored' },
                { value: '100+', label: 'Brands optimized for AI search' },
                { value: '280%', label: 'Average AI traffic lift for clients' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6 border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="text-3xl font-bold text-black shrink-0 w-24 text-right">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              The HyperMind GEO Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proprietary framework turns AI invisibility into AI dominance through four integrated phases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                phase: 'Monitor',
                description: 'Track how every major AI assistant mentions your brand in real time — across ChatGPT, Gemini, Perplexity, Claude, and more.',
              },
              {
                phase: 'Diagnose',
                description: 'Analyze why competitors outrank you in AI answers. Identify content gaps, citation weaknesses, and prompt opportunities.',
              },
              {
                phase: 'Optimize',
                description: 'Restructure content, build authoritative citations, and engineer your digital presence so AI models recommend you by name.',
              },
              {
                phase: 'Measure',
                description: 'Continuously track AI mention share, sentiment, citation rates, and referral traffic — proving ROI with hard data.',
              },
            ].map((item) => (
              <div key={item.phase} className="border border-gray-200 rounded-xl p-8 hover:border-black transition-colors">
                <h3 className="text-xl font-bold text-black mb-3">{item.phase}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/company/methodology"
              className="inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:opacity-70 transition"
            >
              Read the full methodology
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Over Opinions',
                text: 'Every recommendation is backed by real AI monitoring data. We don\'t guess — we measure, test, and prove.',
              },
              {
                title: 'Transparency First',
                text: 'You see the same data we see. Our platform gives you full visibility into your AI presence and our optimization work.',
              },
              {
                title: 'Results That Matter',
                text: 'We measure success by business impact — traffic, leads, and revenue from AI search — not vanity metrics.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-lg font-bold text-black mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/company/methodology"
              className="block border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
            >
              <h3 className="text-xl font-bold text-black mb-3 group-hover:underline">
                GEO Methodology
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Deep dive into our proprietary four-phase framework for AI search optimization.
              </p>
            </Link>
            <Link
              href="/company/trust"
              className="block border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
            >
              <h3 className="text-xl font-bold text-black mb-3 group-hover:underline">
                Trust &amp; Security
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                How we protect your data, ensure compliance, and maintain the highest standards of operational security.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with a free AI visibility audit. We&apos;ll show you exactly where your brand stands in AI search and what it takes to win.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Get a Free GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
