import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Prompt Database — Top Prompts by Industry | HyperMind',
  description:
    'Database of the most common prompts users ask AI assistants, organized by industry. Discover which prompts drive AI recommendations in SaaS, CRM, AI Tools, Fintech, and Ecommerce.',
  alternates: {
    canonical: '/resources/prompt-database/',
  },
  openGraph: {
    title: 'AI Prompt Database — Top Prompts by Industry | HyperMind',
    description:
      'Discover the prompts that drive AI recommendations in your industry. Track what users ask ChatGPT, Gemini, and Perplexity about your category.',
    url: 'https://www.hypermindai.tech/resources/prompt-database',
    siteName: 'HyperMind',
  },
}

interface PromptCategory {
  industry: string
  description: string
  prompts: string[]
}

const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    industry: 'SaaS & Software',
    description:
      'Software buyers use AI to discover, compare, and shortlist tools. These prompts represent the highest-intent software discovery queries that directly influence purchasing decisions.',
    prompts: [
      'What is the best project management tool for remote teams?',
      'Top CRM platforms for B2B sales teams',
      'Best marketing automation software for small businesses',
      'Compare Slack vs Microsoft Teams for company communication',
      'Which analytics platform is best for product-led growth?',
      'Best customer support software with AI features',
      'Top no-code platforms for building internal tools',
      'Which SaaS tools have the best free tiers?',
      'Best HR software for companies with 100-500 employees',
      'What tools do successful startups use for operations?',
    ],
  },
  {
    industry: 'CRM & Sales',
    description:
      'CRM is one of the most competitive categories in AI search. Buyers ask highly specific questions about features, integrations, and use-case fit, making prompt-level optimization critical.',
    prompts: [
      'Best CRM for startups with limited budget',
      'Compare Salesforce vs HubSpot for enterprise sales',
      'Which CRM has the best email automation?',
      'Top CRM platforms with built-in AI features',
      'Best CRM for real estate agents',
      'What CRM integrates best with Gmail and Google Workspace?',
      'Most affordable CRM for a 10-person sales team',
      'Best CRM for managing B2B enterprise accounts',
      'Which CRM has the best mobile app?',
      'Top alternatives to Salesforce for mid-market companies',
    ],
  },
  {
    industry: 'AI Tools & Platforms',
    description:
      'The AI tools category is exploding with new entrants. Users rely on AI assistants to navigate an overwhelming landscape of AI-powered products across writing, design, development, and analytics.',
    prompts: [
      'Best AI writing tools for content marketing',
      'Top AI image generators compared',
      'Which AI coding assistant is best for developers?',
      'Best AI tools for social media management',
      'Compare ChatGPT Plus vs Claude Pro for business use',
      'Top AI video editing tools in 2025',
      'Best AI tools for data analysis and visualization',
      'Which AI meeting assistant is most accurate?',
      'Top AI-powered design tools for non-designers',
      'Best AI tools for SEO and content optimization',
    ],
  },
  {
    industry: 'Fintech & Financial Services',
    description:
      'Financial product queries carry high trust requirements. AI assistants apply extra caution when recommending financial products, making trust-signal optimization essential for fintech brands.',
    prompts: [
      'Best investment app for beginners',
      'Top neobanks with highest savings interest rates',
      'Which budgeting app is most accurate?',
      'Compare Robinhood vs Fidelity for stock trading',
      'Safest cryptocurrency exchange for new investors',
      'Best business credit card for startups',
      'Which robo-advisor has the lowest fees?',
      'Best payment processing platform for small businesses',
      'Top personal finance apps for tracking expenses',
      'Which online bank has the best customer service?',
    ],
  },
  {
    industry: 'Ecommerce & DTC',
    description:
      'Product recommendation queries are among the most common AI use cases. Shoppers use AI to filter through thousands of products and get personalized, curated recommendations based on specific needs.',
    prompts: [
      'Best noise-canceling headphones under $300',
      'Top skincare products for sensitive skin',
      'What is the best mattress for back pain?',
      'Compare Nike vs Adidas running shoes for flat feet',
      'Best sustainable fashion brands for women',
      'Top coffee machines for home espresso',
      'Best laptop for college students in 2025',
      'Which standing desk is best for home office?',
      'Best kitchen gadgets worth buying',
      'Top organic baby products recommended by pediatricians',
    ],
  },
]

export default function PromptDatabasePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            AI Prompt Database
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The prompts users ask AI assistants determine which brands get recommended. This database catalogs the most common AI prompts by industry — the exact queries that drive AI-powered product and service discovery.
          </p>
        </div>
      </section>

      {/* Why Prompts Matter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why Tracking AI Prompts Matters for GEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Prompts Are the New Keywords',
                text: 'In traditional SEO, keywords drive strategy. In GEO, prompts drive strategy. Each prompt triggers a unique AI answer — and your brand either appears in that answer or it does not.',
              },
              {
                title: 'Intent Is Explicit',
                text: 'AI prompts carry more explicit intent than search queries. When a user asks "What is the best CRM for startups?", the intent is unmistakable — they are actively evaluating solutions to buy.',
              },
              {
                title: 'Competitive Intelligence',
                text: 'By tracking which prompts trigger competitor recommendations, you can identify gaps in your AI visibility and build targeted content to appear in those specific answer contexts.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Categories */}
      {PROMPT_CATEGORIES.map((category) => (
        <section
          key={category.industry}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white odd:bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              {category.industry} Prompts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {category.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.prompts.map((prompt) => (
                <div
                  key={prompt}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-800"
                >
                  &ldquo;{prompt}&rdquo;
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How to Use This Data */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            How to Use Prompt Data for GEO
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Identify Your Target Prompts',
                text: 'Select the 5–10 highest-intent prompts in your category. These are the prompts where appearing in the AI answer would directly drive business outcomes.',
              },
              {
                step: '2',
                title: 'Audit Current AI Answers',
                text: 'Query each target prompt across ChatGPT, Gemini, Perplexity, and Claude. Record which brands appear, their positioning, and the sources AI cites.',
              },
              {
                step: '3',
                title: 'Analyze Competitor Presence',
                text: 'Identify which competitors consistently appear in your target prompt answers. Analyze what content and citations give them AI visibility.',
              },
              {
                step: '4',
                title: 'Build Targeted Content',
                text: 'Create content specifically designed to be cited when AI answers your target prompts. Structure it with clear definitions, factual claims, and category alignment.',
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

      {/* Related Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
              { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
              { label: 'AI Search Library', href: '/resources/ai-search-library' },
              { label: 'GEO Playbooks', href: '/resources/geo-playbooks' },
              { label: 'GEO Solutions by Industry', href: '/solutions' },
              { label: 'Prompt Intelligence Platform', href: '/platform/prompt-intelligence' },
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
            Track the Prompts That Mention Your Brand
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            HyperMind&apos;s Prompt Intelligence feature automatically discovers and monitors the AI prompts that mention your brand — and the ones that mention your competitors instead.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Start Tracking AI Prompts
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
