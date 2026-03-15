import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface RelatedLink {
  label: string
  href: string
}

interface PillarContentProps {
  title: string
  summaryDefinition: string
  quickAnswer: string[]
  keyTakeaways: string[]
  sections: Array<{
    title: string
    content: string
  }>
  framework?: {
    title: string
    steps: Array<{
      name: string
      description: string
    }>
  }
  statistics?: string[]
  faq: FAQItem[]
  relatedLinks: RelatedLink[]
  aiSummary: string
}

export default function PillarContent({
  title,
  summaryDefinition,
  quickAnswer,
  keyTakeaways,
  sections,
  framework,
  statistics,
  faq,
  relatedLinks,
  aiSummary,
}: PillarContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        {title}
      </h1>

      {/* AI Summary Block — high citation probability */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">AI Summary</h2>
        <p className="text-gray-800 text-lg leading-relaxed">{aiSummary}</p>
      </div>

      {/* Summary Definition */}
      <div className="mb-10">
        <p className="text-xl text-gray-700 leading-relaxed">{summaryDefinition}</p>
      </div>

      {/* Quick Answer */}
      <div className="bg-white border-2 border-gray-900 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h2>
        <ol className="list-decimal list-inside space-y-2">
          {quickAnswer.map((item, i) => (
            <li key={i} className="text-gray-700">{item}</li>
          ))}
        </ol>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Key Takeaways</h2>
        <ul className="space-y-2">
          {keyTakeaways.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-black font-bold mt-0.5">&#8226;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Guide Sections */}
      {sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{section.content}</div>
        </div>
      ))}

      {/* Framework */}
      {framework && (
        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">{framework.title}</h2>
          <div className="space-y-4">
            {framework.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.name}</h3>
                  <p className="text-gray-300 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Statistics */}
      {statistics && statistics.length > 0 && (
        <div className="border-l-4 border-black pl-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Statistics</h2>
          <ul className="space-y-3">
            {statistics.map((stat, i) => (
              <li key={i} className="text-gray-700 text-lg">{stat}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Links — internal linking for topic cluster */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Learn More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition group"
            >
              <span className="text-black group-hover:translate-x-1 transition-transform">&rarr;</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
