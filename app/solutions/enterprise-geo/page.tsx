import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO for Enterprise Brands | HyperMind',
  description:
    'Generative Engine Optimization for enterprise brands. Dominate AI search across complex B2B buying journeys with multi-touchpoint AI visibility strategies that influence procurement teams.',
  alternates: {
    canonical: '/solutions/enterprise-geo/',
  },
  openGraph: {
    title: 'GEO for Enterprise Brands | HyperMind',
    description:
      'Multi-stakeholder AI visibility strategies for enterprise brands. Influence procurement teams at every stage of the AI-powered buying journey.',
    url: 'https://www.hypermindai.tech/solutions/enterprise-geo',
    siteName: 'HyperMind',
  },
}

const AI_QUERIES = [
  'Best enterprise CRM platforms for 10,000+ employees',
  'Top cloud infrastructure providers compared',
  'Which ERP system is best for manufacturing?',
  'Enterprise cybersecurity solutions for financial institutions',
  'Compare SAP vs Oracle for supply chain management',
  'Best enterprise data analytics platforms',
  'Top HR management systems for large organizations',
  'Which enterprise AI platform has the best ROI?',
]

const GEO_GAPS = [
  {
    title: 'Analyst Coverage Gap',
    description:
      'Enterprise AI recommendations heavily cite industry analyst reports from Gartner, Forrester, and IDC. Brands not positioned in Magic Quadrants or Wave reports are systematically excluded from AI recommendations for enterprise queries.',
  },
  {
    title: 'Multi-Stakeholder Visibility',
    description:
      'Enterprise buying involves 6–10 decision-makers across IT, finance, operations, and C-suite. AI serves different answers to technical vs. business queries about the same product category. Most brands optimize for only one stakeholder persona.',
  },
  {
    title: 'Complex Category Definition',
    description:
      'Enterprise products often span multiple categories. A platform that does "CRM, marketing automation, and customer success" confuses AI categorization. Clear primary category positioning is essential for consistent AI recommendations.',
  },
  {
    title: 'Gated Content Problem',
    description:
      'Enterprise brands often gate their best content behind forms. AI cannot access gated content for RAG retrieval or citation building. Critical thought leadership and technical documentation must be accessible for AI indexing.',
  },
]

const EXAMPLE_PROMPTS = [
  { prompt: 'What are the top enterprise cloud platforms for a Fortune 500 company?', context: 'Scale-qualified query — AI filters for platforms with proven enterprise deployments' },
  { prompt: 'Best cybersecurity solutions for healthcare organizations', context: 'Industry-specific enterprise query — AI cross-references compliance and scale requirements' },
  { prompt: 'Compare Salesforce vs Microsoft Dynamics for enterprise CRM', context: 'Head-to-head enterprise comparison — AI cites Gartner, Forrester, and peer reviews' },
  { prompt: 'Which AI platform should our enterprise adopt for internal operations?', context: 'Strategic technology query — AI recommends based on analyst reports and case studies' },
  { prompt: 'Enterprise data governance tools that comply with GDPR and SOC 2', context: 'Compliance-driven query — AI prioritizes platforms with verifiable certifications' },
  { prompt: 'Total cost of ownership for enterprise ERP implementation', context: 'Financial evaluation query — AI needs detailed pricing and TCO data to answer accurately' },
]

export default function EnterpriseGeoPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Industry Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            GEO for Enterprise Brands
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Enterprise procurement teams are using AI assistants to research, compare, and shortlist vendors. With buying committees of 6–10 stakeholders each asking AI different questions, your brand must appear across every touchpoint. HyperMind builds multi-stakeholder AI visibility that influences the entire buying journey.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Get an Enterprise GEO Audit
          </a>
        </div>
      </section>

      {/* AI Queries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            AI Queries in Enterprise
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Enterprise buyers use AI for vendor research at every stage — from initial discovery to final procurement evaluation. These queries involve higher stakes, longer evaluation cycles, and more rigorous source requirements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_QUERIES.map((query) => (
              <div
                key={query}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-800"
              >
                &ldquo;{query}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Recommends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How AI Recommends Enterprise Vendors
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Enterprise AI recommendations are uniquely complex because they must satisfy multiple stakeholder perspectives and verify claims against authoritative industry sources.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Analyst Report Priority',
                text: 'AI heavily weights Gartner Magic Quadrants, Forrester Waves, and IDC MarketScape reports. Enterprise queries trigger retrieval of analyst content as a primary source. Brands not featured in these reports start at a significant disadvantage.',
              },
              {
                step: '2',
                title: 'Multi-Persona Matching',
                text: 'Enterprise queries often come from different stakeholder roles. A CTO asks about technical architecture while a CFO asks about TCO. AI tailors its recommendation framing based on the query context, requiring brands to have content addressing multiple personas.',
              },
              {
                step: '3',
                title: 'Scale and Compliance Verification',
                text: 'AI verifies enterprise readiness signals: SOC 2, GDPR, HIPAA compliance, uptime SLAs, and customer scale indicators. Brands with visible enterprise credentials receive recommendation priority.',
              },
              {
                step: '4',
                title: 'Case Study Weighting',
                text: 'For enterprise recommendations, AI actively looks for published case studies and customer logos from recognizable enterprises. Peer validation from Fortune 500 deployments significantly boosts recommendation probability.',
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

      {/* GEO Gaps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Common GEO Gaps for Enterprise Brands
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Enterprise GEO requires a multi-dimensional approach that addresses the unique complexity of B2B buying committees and analyst-driven ecosystems:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GEO_GAPS.map((gap) => (
              <div
                key={gap.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-black mb-2">{gap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{gap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Example Prompts Enterprise Buyers Ask AI
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            These prompts represent real enterprise buying research conducted through AI assistants. Each involves multiple evaluation criteria and higher accuracy requirements:
          </p>
          <div className="space-y-4">
            {EXAMPLE_PROMPTS.map((item) => (
              <div
                key={item.prompt}
                className="border border-gray-200 rounded-xl p-5"
              >
                <p className="text-black font-medium mb-1">&ldquo;{item.prompt}&rdquo;</p>
                <p className="text-xs text-gray-500">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Case Study: Enterprise SaaS Dominates AI Vendor Recommendations
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            An enterprise data analytics platform ranked in Gartner&apos;s Magic Quadrant but was absent from AI-generated vendor recommendations. Procurement teams using AI assistants were being steered toward competitors who had better AI-optimized content.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { metric: '280%', label: 'Increase in AI vendor recommendations' },
              { metric: '45%', label: 'More enterprise demo requests' },
              { metric: '$2.4M', label: 'Pipeline influenced by AI visibility' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-black mb-2">{item.metric}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            HyperMind executed a four-phase enterprise strategy: ungating critical technical documentation for AI indexing; publishing accessible case studies with quantifiable ROI metrics; building executive thought leadership on LinkedIn and industry publications; and optimizing analyst report positioning for AI retrieval. Within 120 days, the platform appeared in AI recommendations across 19 enterprise buying queries.
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'What is GEO?', href: '/resources/what-is-geo' },
              { label: 'Complete GEO Strategy Guide', href: '/resources/complete-geo-strategy-guide' },
              { label: 'AI Citation Strategy Service', href: '/services/ai-citation-strategy' },
              { label: 'AI Visibility Monitoring Guide', href: '/resources/ai-visibility-monitoring-guide' },
              { label: 'AI Answer Optimization Service', href: '/services/ai-answer-optimization' },
              { label: 'All Industry Solutions', href: '/solutions' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition"
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
            Dominate AI Search for Enterprise Buying Queries
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We&apos;ll audit your enterprise AI visibility across every stakeholder persona, identify gaps in analyst and thought leadership coverage, and build a multi-touchpoint strategy.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Request Your Enterprise GEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
