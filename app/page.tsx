import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroLogos from '@/components/HeroLogos'

export const revalidate = 3600

const GEO_STEPS = [
  {
    step: '01',
    title: 'Monitor',
    description: 'We track how AI assistants mention (or ignore) your brand across ChatGPT, Gemini, Perplexity, Claude, and more — in real time.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description: 'We analyze why competitors outrank you in AI answers, identify content gaps, and map the prompts your audience actually uses.',
  },
  {
    step: '03',
    title: 'Optimize',
    description: 'We restructure your content, build authoritative citations, and engineer your digital presence so AI models recommend you by name.',
  },
  {
    step: '04',
    title: 'Measure',
    description: 'We continuously track AI mention share, sentiment, citation rates, and referral traffic — proving ROI with hard data.',
  },
]

const CLIENT_RESULTS = [
  { metric: 'AI Mentions', before: '5', after: '42', label: 'monthly mentions across AI platforms' },
  { metric: 'AI Referral Traffic', before: '—', after: '+280%', label: 'growth in AI-driven site visits' },
  { metric: 'AI Share of Voice', before: '3%', after: '31%', label: 'category share in AI answers' },
  { metric: 'Citation Rate', before: '0', after: '18', label: 'unique AI citations per month' },
]

const INDUSTRIES = [
  { title: 'B2B SaaS', href: '/solutions/b2b-saas-geo', description: 'Get your product recommended when prospects ask AI for software solutions.' },
  { title: 'Fintech', href: '/solutions/fintech-geo', description: 'Become the trusted financial brand AI assistants recommend to users.' },
  { title: 'Ecommerce', href: '/solutions/ecommerce-geo', description: 'Appear in AI-powered shopping recommendations and product comparisons.' },
  { title: 'Enterprise', href: '/solutions/enterprise-geo', description: 'Dominate AI search across complex B2B buying journeys.' },
  { title: 'Startups', href: '/solutions/startup-geo', description: 'Build AI visibility from day one and outpace incumbent competitors.' },
]

const AI_STATS = [
  { value: '40%', label: 'of Gen Z prefers AI search over Google' },
  { value: '79%', label: 'of consumers will use AI search by 2027' },
  { value: '900M+', label: 'monthly active ChatGPT users' },
  { value: '$0', label: 'cost per click from AI referral traffic' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f5f3f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-black animate-slide-in-1">The GEO Agency</span>
                  <span className="block italic text-black animate-slide-in-2">for AI Search</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 animate-slide-in-3">
                  We help brands get recommended in AI answers across ChatGPT, Gemini, Perplexity, Claude, and every AI assistant your customers use.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-4">
                <a
                  href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition text-center"
                >
                  Get a Free GEO Audit
                </a>
                <Link
                  href="/resources/what-is-geo"
                  className="border border-gray-300 text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white transition text-center"
                >
                  What is GEO?
                </Link>
              </div>
            </div>
            <HeroLogos />
          </div>
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            What is Generative Engine Optimization?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            <strong>GEO (Generative Engine Optimization)</strong> is the practice of optimizing your brand&apos;s visibility in AI-generated answers. Unlike traditional SEO that targets search engine rankings, GEO ensures your brand is the one AI assistants <em>recommend</em>, <em>cite</em>, and <em>trust</em> when users ask for solutions.
          </p>
          <Link
            href="/resources/what-is-geo"
            className="inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:opacity-70 transition"
          >
            Read the full GEO guide
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why AI Search Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why AI Search Matters Now
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The way people find products, services, and information is fundamentally changing. AI search isn&apos;t coming — it&apos;s here.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {AI_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-black mb-3">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HyperMind GEO Agency Model */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              The HyperMind GEO Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proprietary four-step methodology turns AI invisibility into AI dominance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GEO_STEPS.map((item) => (
              <div
                key={item.step}
                className="border border-gray-200 rounded-xl p-8 hover:border-black transition-colors group"
              >
                <div className="text-sm font-mono text-gray-400 mb-4 group-hover:text-black transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Powered by Our AI Visibility Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our proprietary platform monitors your brand mentions across every major AI assistant in real time. See exactly how AI talks about you, track competitor visibility, and measure the impact of every optimization.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Real-time AI mention tracking across 9+ platforms',
                  'Prompt intelligence: see what users ask about your category',
                  'AI sentiment analysis for your brand',
                  'Competitor benchmarking in AI search',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-black mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Explore the Platform
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <Image
                  src="/asset/dashboard.jpg"
                  alt="HyperMind AI Visibility Platform Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Results Our Clients See
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real outcomes from brands that invested in Generative Engine Optimization with HyperMind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLIENT_RESULTS.map((result) => (
              <div key={result.metric} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="text-sm font-medium text-gray-500 mb-4">{result.metric}</div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-2xl text-gray-400 line-through">{result.before}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-3xl font-bold text-black">{result.after}</span>
                </div>
                <p className="text-xs text-gray-500">{result.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:opacity-70 transition"
            >
              View case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How GEO Works (Process) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              How GEO Works
            </h2>
            <p className="text-lg text-gray-600">
              Generative Engine Optimization at the highest level — from audit to ongoing growth.
            </p>
          </div>
          <div className="space-y-12">
            {[
              {
                num: '1',
                title: 'AI Visibility Audit',
                text: 'We query every major AI platform with the prompts your customers use and map exactly where your brand stands — mentions, sentiment, citations, and competitive position.',
              },
              {
                num: '2',
                title: 'Content & Authority Strategy',
                text: 'We identify what AI models need to see in order to recommend you: structured content, authoritative backlinks, entity signals, and semantic coverage gaps.',
              },
              {
                num: '3',
                title: 'Implementation & Optimization',
                text: 'Our team executes the strategy — restructuring content, placing citations on high-authority sources, optimizing your digital knowledge graph, and building trust signals.',
              },
              {
                num: '4',
                title: 'Continuous Measurement & Iteration',
                text: 'We track results weekly through our platform, refining the strategy based on real data. You get monthly reports showing AI mention growth, traffic impact, and ROI.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              GEO for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI search impacts every vertical. We bring specialized GEO strategies to each.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-bold text-black mb-2 group-hover:underline">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </Link>
            ))}
            <Link
              href="/solutions"
              className="flex items-center justify-center border border-dashed border-gray-300 rounded-xl p-6 hover:border-black transition-colors text-gray-500 hover:text-black font-medium"
            >
              View all solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest GEO Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Latest GEO Research & Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the AI search curve with our research, playbooks, and data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'What is GEO? The Complete Guide',
                description: 'Everything you need to know about Generative Engine Optimization — what it is, why it matters, and how to start.',
                href: '/resources/what-is-geo',
              },
              {
                title: 'GEO Guides & Playbooks',
                description: 'Step-by-step frameworks for optimizing your brand\'s visibility across ChatGPT, Gemini, Perplexity, and more.',
                href: '/resources/geo-guides',
              },
              {
                title: 'AI Search Library',
                description: 'Deep dives into how each AI platform discovers, evaluates, and recommends brands in their answers.',
                href: '/resources/ai-search-library',
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block bg-white border border-gray-200 rounded-xl p-8 hover:border-black hover:shadow-md transition-all group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                <span className="text-sm font-medium text-black">Read more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/resources/geo-guides"
              className="inline-flex items-center gap-2 text-black font-medium border-b-2 border-black pb-1 hover:opacity-70 transition"
            >
              Browse all resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Recommended by AI?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free GEO audit and see exactly how AI assistants talk about your brand today — and what it takes to become their top recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Get a Free GEO Audit
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
