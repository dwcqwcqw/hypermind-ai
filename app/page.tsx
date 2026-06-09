import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroLogos from '@/components/HeroLogos'

export const revalidate = 3600

const BASE_URL = 'https://hypermindgeo.com'

const RESEARCH_SIGNALS = [
  {
    source: 'AgenticGEO, arXiv 2603.20213',
    finding:
      'The newest GEO research frames optimization as a self-evolving control problem: maintain a diverse strategy archive, use a critic to predict likely engine feedback, test selectively, and keep adapting as engines change.',
    href: 'https://arxiv.org/abs/2603.20213',
  },
  {
    source: 'Google Search Central',
    finding:
      'AI Overviews and AI Mode rely on the same eligibility foundation as Google Search: crawlability, indexability, internal links, textual content, page experience, and structured data that matches visible content.',
    href: 'https://developers.google.com/search/docs/appearance/ai-overviews',
  },
  {
    source: 'GEO: Generative Engine Optimization, KDD 2024',
    finding:
      'Visibility in generative answers can be improved with answer-friendly writing patterns such as source citation, statistics, quotation, fluency, and domain-specific optimization.',
    href: 'https://arxiv.org/abs/2311.09735',
  },
  {
    source: 'Profound citation pattern research',
    finding:
      'AI platforms cite different source pools. ChatGPT, Google AI Overviews, and Perplexity often require different citation and content distribution strategies.',
    href: 'https://www.tryprofound.com/blog/ai-platform-citation-patterns',
  },
  {
    source: 'Semrush AI Visibility Toolkit documentation',
    finding:
      'Modern AI visibility work now tracks prompts, mentions, citations, sentiment, competitors, and AI referral traffic alongside classic SEO signals.',
    href: 'https://www.semrush.com/kb/1626-ai-visibility-features',
  },
]

const METHOD_STEPS = [
  {
    step: '01',
    title: 'Prompt Demand Mapping',
    description:
      'Build the buying, comparison, problem, and category prompts where a model could recommend your brand, then segment them by intent, market, and platform.',
  },
  {
    step: '02',
    title: 'Strategy Archive Selection',
    description:
      'Maintain a living archive of GEO tactics by content type, prompt intent, source class, and platform behavior so each page gets a content-conditioned strategy instead of a generic checklist.',
  },
  {
    step: '03',
    title: 'Critic-Guided Prioritization',
    description:
      'Estimate which rewrites, schema changes, citations, and distribution moves are most likely to improve visibility before spending expensive testing cycles on live AI engines.',
  },
  {
    step: '04',
    title: 'Citation Supply Chain Audit',
    description:
      'Identify the pages, publishers, communities, review sites, knowledge bases, and competitors that AI systems already use to answer those prompts.',
  },
  {
    step: '05',
    title: 'Answer-Ready Content Engineering',
    description:
      'Rewrite priority pages into extractable definitions, direct answers, comparison tables, claims with evidence, FAQs, and schema that matches visible text.',
  },
  {
    step: '06',
    title: 'Source Development',
    description:
      'Grow trustworthy third-party signals across earned media, review platforms, documentation, partner pages, community discussions, and data pages.',
  },
  {
    step: '07',
    title: 'Model Testing and Iteration',
    description:
      'Test ChatGPT, Google AI Overviews, AI Mode, Gemini, Perplexity, Claude, and Copilot for mentions, citations, sentiment, and recommendation rank.',
  },
]

const DIFFERENTIATORS = [
  {
    category: 'Profound AI',
    marketPattern: 'Enterprise analytics for answer-engine visibility, citations, sentiment, and share of voice.',
    hypermindDifference:
      'HyperMind uses visibility data as the input, then executes the content, schema, source, and conversion work needed to change AI answers.',
  },
  {
    category: 'Peec AI',
    marketPattern: 'AI search analytics for marketing teams that need fast prompt tracking and competitor benchmarking.',
    hypermindDifference:
      'HyperMind is built for teams that need strategy plus implementation: prompt research, page rewrites, citation source development, and weekly answer testing.',
  },
  {
    category: 'Semrush',
    marketPattern: 'A broad SEO suite with AI visibility modules, prompt databases, site audit checks, and traffic benchmarking.',
    hypermindDifference:
      'HyperMind focuses narrowly on GEO execution for brands that want to become the cited source or recommended vendor in commercial AI answers.',
  },
  {
    category: 'Writesonic GEO',
    marketPattern: 'A content and GEO workflow for monitoring visibility and creating AI-search-friendly content.',
    hypermindDifference:
      'HyperMind emphasizes citation supply chain strategy, entity clarity, external authority building, and revenue attribution beyond content production.',
  },
]

const OFFER_AREAS = [
  {
    title: 'AI Visibility Audit',
    href: '/tools/ai-brand-audit',
    description:
      'Measure where your brand appears, where it is absent, which competitors are recommended, and which source types influence the answer.',
  },
  {
    title: 'AI Citation Strategy',
    href: '/services/ai-citation-strategy',
    description:
      'Prioritize the publishers, communities, review profiles, partner pages, and data assets most likely to be retrieved by AI systems.',
  },
  {
    title: 'AI Answer Optimization',
    href: '/services/ai-answer-optimization',
    description:
      'Shape answer language around accurate positioning, clear entities, concise definitions, comparison-ready tables, and evidence-rich claims.',
  },
  {
    title: 'AI Search Traffic Growth',
    href: '/services/ai-search-traffic-growth',
    description:
      'Connect AI mentions and citations to landing pages, analytics, forms, attribution, and pipeline reporting.',
  },
]

const SEARCH_SITELINK_TARGETS = [
  {
    title: 'Try Free AI Visibility Audit',
    href: '/tools/ai-brand-audit',
    description:
      'Check where your brand appears across ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Copilot.',
  },
  {
    title: 'AI Visibility Monitoring',
    href: '/platform/ai-visibility-monitoring',
    description:
      'Track brand mentions, citations, sentiment, share of voice, and competitor visibility in AI answers.',
  },
  {
    title: 'AI Citation Strategy',
    href: '/services/ai-citation-strategy',
    description:
      'Build the source graph that helps AI systems cite, trust, and recommend your brand.',
  },
  {
    title: 'See Pricing Plans',
    href: '/pricing',
    description:
      'Choose a GEO plan for AI visibility monitoring, prompt intelligence, answer optimization, and managed execution.',
  },
  {
    title: 'Compare HyperMind vs Peec',
    href: '/compare/hypermind-vs-peec',
    description:
      'Compare AI visibility tracking with HyperMind implementation workflows for source repair and answer growth.',
  },
]

const CORE_RESOURCES = [
  {
    title: 'AI Visibility Platform vs GEO Agency',
    href: '/resources/ai-visibility-platform-vs-geo-agency',
    description:
      'Decision guide comparing Profound, Peec AI, Writesonic GEO, Semrush-style tooling, and HyperMind execution.',
  },
  {
    title: 'How to Optimize for AI Search',
    href: '/resources/how-to-optimize-for-ai-search',
    description:
      'A practical guide to crawlability, answer formatting, structured data, source authority, and AI answer testing.',
  },
  {
    title: 'AI Citation Sources Database',
    href: '/data/ai-citation-sources-database',
    description:
      'Research hub for the source types that influence AI answers, including owned, earned, social, institutional, and review citations.',
  },
]

const FAQS = [
  {
    question: 'What is HyperMind?',
    answer:
      'HyperMind is a GEO agency and AI visibility execution partner. It helps brands become mentioned, cited, and recommended in AI answers across ChatGPT, Google AI Overviews, Google AI Mode, Gemini, Perplexity, Claude, Copilot, and other answer engines.',
  },
  {
    question: 'How is HyperMind different from Profound AI, Peec AI, Semrush, and Writesonic?',
    answer:
      'Profound, Peec AI, Semrush, and Writesonic primarily help teams measure AI visibility, research prompts, or create AI-search content. HyperMind combines measurement with implementation: prompt strategy, answer-ready content, structured data, citation source development, entity cleanup, and conversion attribution.',
  },
  {
    question: 'What makes content more likely to be cited by AI systems?',
    answer:
      'The strongest pattern is not a single trick. Pages need to be indexable, internally linked, text-rich, clearly structured, source-backed, entity-specific, and reinforced by trusted third-party references. AI systems also vary by platform, so a citation strategy must be tested across multiple answer engines.',
  },
  {
    question: 'Does GEO replace SEO?',
    answer:
      'No. Google states that the same search fundamentals still matter for AI Overviews and AI Mode. GEO extends SEO by optimizing for AI answer selection, source citation, narrative framing, and recommendation behavior rather than only blue-link ranking.',
  },
]

function HomeStructuredData() {
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'HyperMind',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/asset/logo.png`,
      description:
        'HyperMind is a GEO agency and AI visibility execution partner that helps brands become cited and recommended in AI answers.',
      sameAs: [
        'https://hypermindgeo.com/',
      ],
      knowsAbout: [
        'Generative Engine Optimization',
        'Answer Engine Optimization',
        'AI visibility',
        'AI citation strategy',
        'AI Overviews optimization',
        'LLM brand visibility',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'HyperMind',
      url: `${BASE_URL}/`,
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/#geo-service`,
      name: 'GEO agency and AI visibility optimization',
      provider: { '@id': `${BASE_URL}/#organization` },
      serviceType: 'Generative Engine Optimization',
      areaServed: 'Global',
      description:
        'Research-backed GEO execution for AI answer visibility, citation growth, prompt testing, entity optimization, and AI search traffic attribution.',
      audience: {
        '@type': 'Audience',
        audienceType: 'B2B SaaS, fintech, ecommerce, startup, and enterprise marketing teams',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/#homepage`,
      name: 'HyperMind - Agentic GEO Agency for AI Search Visibility',
      url: `${BASE_URL}/`,
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      primaryImageOfPage: `${BASE_URL}/asset/dashboard.jpg`,
      description:
        'HyperMind helps brands earn mentions, citations, and recommendations in AI answers through GEO strategy, AI visibility monitoring, citation strategy, answer optimization, and traffic attribution.',
      hasPart: SEARCH_SITELINK_TARGETS.map((item) => ({
        '@type': 'WebPage',
        name: item.title,
        url: `${BASE_URL}${item.href}/`,
        description: item.description,
      })),
    },
    {
      '@type': 'ItemList',
      name: 'HyperMind GEO methodology',
      itemListElement: METHOD_STEPS.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Popular HyperMind pages',
      itemListElement: SEARCH_SITELINK_TARGETS.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${BASE_URL}${item.href}/`,
        description: item.description,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HomeStructuredData />

      <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#f7f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-4">
                  Research-backed GEO agency for AI answer visibility
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-black">
                  Become the brand AI recommends
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  HyperMind helps brands earn mentions, citations, and recommendations in ChatGPT, Google AI Overviews, Google AI Mode, Gemini, Perplexity, Claude, and Copilot with an agentic GEO system: strategy archive, critic-guided prioritization, live model testing, and hands-on execution.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {['Strategy archive', 'Critic-guided tests', 'Citation supply chain'].map((item) => (
                  <div key={item} className="border border-gray-200 bg-white rounded-lg px-4 py-3 font-medium text-gray-800">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition text-center"
                >
                  Get a Free AI Visibility Audit
                </a>
                <Link
                  href="/resources/ai-visibility-platform-vs-geo-agency"
                  className="border border-gray-300 text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white transition text-center"
                >
                  Compare GEO options
                </Link>
              </div>

              <nav
                aria-label="Popular HyperMind pages"
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <p className="px-5 pt-4 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Popular HyperMind pages
                </p>
                <div className="divide-y divide-gray-200">
                  {SEARCH_SITELINK_TARGETS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-gray-50 transition"
                    >
                      <span className="min-w-0">
                        <span className="block text-base sm:text-lg font-semibold text-blue-700 group-hover:underline">
                          {item.title}
                        </span>
                        <span className="block text-sm text-gray-600 leading-relaxed mt-1">
                          {item.description}
                        </span>
                      </span>
                      <span aria-hidden="true" className="text-2xl text-gray-400 group-hover:text-black shrink-0">
                        &rsaquo;
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <div className="space-y-6 max-w-full overflow-hidden">
              <HeroLogos />
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  What HyperMind optimizes for
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['Mentions', 'Is the brand named?'],
                    ['Citations', 'Is the page sourced?'],
                    ['Sentiment', 'Is the framing useful?'],
                    ['Revenue', 'Do AI visits convert?'],
                  ].map(([title, body]) => (
                    <div key={title} className="border border-gray-100 rounded-lg p-4">
                      <div className="text-lg font-bold text-black">{title}</div>
                      <div className="text-xs text-gray-500 mt-1">{body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              GEO is now a citation and selection problem
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AI search visibility is won when models can find, trust, summarize, and cite your brand. HyperMind designs the full system around that reality: technical eligibility, extractable answers, source authority, entity clarity, and continuous model testing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESEARCH_SIGNALS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-black transition bg-gray-50 break-words"
              >
                <div className="text-sm font-semibold text-black mb-2">{item.source}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.finding}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
              HyperMind methodology
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              An agentic operating system for AI citation growth
            </h2>
            <p className="text-lg text-gray-600">
              The core product is not another static visibility score. Inspired by AgenticGEO-style research, HyperMind treats GEO as a self-improving execution loop: keep a strategy archive, predict which actions are likely to work, test the highest-value candidates, and feed the results back into the next optimization cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4">
            {METHOD_STEPS.map((item) => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
                <div className="text-xs font-mono text-gray-400 mb-4">{item.step}</div>
                <h3 className="text-base lg:text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                Product difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                HyperMind is the execution layer after AI visibility analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Many platforms show that your brand is missing. HyperMind fixes why it is missing: insufficient source authority, unclear entity language, weak comparison pages, thin evidence, poor internal linking, missing schema alignment, and no repeatable AI answer testing.
              </p>
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                View competitor comparisons
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {DIFFERENTIATORS.map((row) => (
                <div key={row.category} className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 last:border-b-0">
                  <div className="bg-gray-50 p-5 font-bold text-black">{row.category}</div>
                  <div className="p-5 text-sm text-gray-600 border-t md:border-t-0 md:border-l border-gray-200">
                    {row.marketPattern}
                  </div>
                  <div className="p-5 text-sm text-gray-800 border-t md:border-t-0 md:border-l border-gray-200">
                    {row.hypermindDifference}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
                From answer visibility to pipeline
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Measure the model, change the sources, prove the outcome
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                HyperMind tracks the same commercial journey your buyers take: category discovery, vendor comparison, shortlisting, pricing research, risk validation, and final recommendation. Each prompt cluster maps to content changes, citation targets, and conversion pages.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ['Prompt clusters', 'Buying intent, competitor intent, and problem intent'],
                  ['Source classes', 'Owned, earned, social, institutional, review, and partner'],
                  ['Answer metrics', 'Mention, citation, sentiment, rank, and claim accuracy'],
                  ['Business metrics', 'AI referrals, assisted conversions, demos, and pipeline'],
                ].map(([title, body]) => (
                  <div key={title} className="border border-white/10 rounded-lg p-4">
                    <div className="font-semibold text-white">{title}</div>
                    <div className="text-xs text-gray-400 mt-2">{body}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/asset/dashboard.jpg"
                alt="HyperMind AI visibility dashboard showing AI mentions, citations, competitors, and prompt performance"
                width={900}
                height={560}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What HyperMind delivers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The service model is designed for teams that need AI answer visibility to become an acquisition channel, not just another dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFER_AREAS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-md transition group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                <span className="inline-block mt-5 text-sm font-semibold text-black">Explore &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Start with the pages AI systems can quote
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These pages are designed as citation targets for prompts about GEO agencies, AI visibility platforms, AI search optimization, and citation source strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_RESOURCES.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block bg-white border border-gray-200 rounded-xl p-8 hover:border-black hover:shadow-md transition group"
              >
                <h3 className="text-lg font-bold text-black mb-3 group-hover:underline">{resource.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{resource.description}</p>
                <span className="text-sm font-semibold text-black">Read resource &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              GEO questions AI engines should be able to answer
            </h2>
            <p className="text-lg text-gray-600">
              Clear Q&A blocks help both buyers and answer engines understand the category, the product difference, and the implementation model.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Find out why AI does or does not recommend your brand
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free AI visibility audit with prompt gaps, competitor mentions, citation sources, page recommendations, and the first implementation priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Request Free Audit
            </a>
            <Link
              href="/services/ai-visibility-optimization"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition"
            >
              See GEO service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
