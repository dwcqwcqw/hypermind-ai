import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Solutions by Industry | HyperMind',
  description:
    'Industry-specific Generative Engine Optimization solutions. HyperMind delivers tailored GEO strategies for B2B SaaS, Fintech, Ecommerce, Enterprise, and Startup companies.',
  openGraph: {
    title: 'GEO Solutions by Industry | HyperMind',
    description:
      'Tailored GEO strategies for your industry. Get your brand recommended by AI assistants in your specific vertical.',
    url: 'https://www.hypermindai.tech/solutions',
    siteName: 'HyperMind',
  },
}

interface SolutionItem {
  title: string
  href: string
  description: string
  highlight: string
}

const SOLUTIONS: SolutionItem[] = [
  {
    title: 'B2B SaaS GEO',
    href: '/solutions/b2b-saas-geo',
    description:
      'Get your SaaS product recommended when decision-makers ask AI for software solutions. We optimize for high-intent prompts like "best CRM for startups" and "top project management tools."',
    highlight: 'AI mentions in software recommendation prompts',
  },
  {
    title: 'Fintech GEO',
    href: '/solutions/fintech-geo',
    description:
      'Become the trusted financial brand AI assistants recommend to users. We build authority in regulated verticals where accuracy and trust signals are critical for AI inclusion.',
    highlight: 'Trust-signal optimization for financial services',
  },
  {
    title: 'Ecommerce GEO',
    href: '/solutions/ecommerce-geo',
    description:
      'Appear in AI-powered shopping recommendations and product comparisons. We optimize your product catalog, reviews, and brand signals for AI shopping assistants.',
    highlight: 'Product-level AI visibility across shopping prompts',
  },
  {
    title: 'Enterprise GEO',
    href: '/solutions/enterprise-geo',
    description:
      'Dominate AI search across complex B2B buying journeys. We build multi-touchpoint AI visibility strategies that influence procurement teams at every stage.',
    highlight: 'Multi-stakeholder AI visibility strategies',
  },
  {
    title: 'Startup GEO',
    href: '/solutions/startup-geo',
    description:
      'Build AI visibility from day one and outpace incumbents in AI recommendations. We help early-stage companies establish AI presence before competitors take the space.',
    highlight: 'Early-mover advantage in AI search',
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO Solutions by Industry
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Every industry has unique AI search dynamics. HyperMind delivers tailored Generative Engine Optimization strategies designed for your specific vertical — because the prompts users ask, the sources AI trusts, and the competitive landscape differ dramatically across industries.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get an Industry GEO Audit
          </a>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all group"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:underline">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <div className="text-xs font-medium text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  {solution.highlight}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific GEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why Industry-Specific GEO Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Different Prompts',
                text: 'Users ask vastly different questions by industry. A SaaS buyer asks "best CRM for startups" while a fintech user asks "safest investment app." Your GEO strategy must target the right prompts.',
              },
              {
                title: 'Different Trust Signals',
                text: 'AI models weigh different authority signals per vertical. Healthcare needs clinical sources. Finance needs regulatory compliance. Ecommerce needs review aggregators.',
              },
              {
                title: 'Different Competitors',
                text: 'Your AI search competitors may not be your traditional competitors. We map the actual competitive landscape in AI answers for your specific category.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get a GEO Strategy Built for Your Industry
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us about your business and we&apos;ll show you exactly how AI search impacts your specific market — and what it takes to win.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Industry Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
