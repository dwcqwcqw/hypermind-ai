import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export interface SeoLandingPageSection {
  title: string
  body: string
}

export interface SeoLandingPageRelatedLink {
  label: string
  href: string
}

export interface SeoLandingPageProps {
  eyebrow: string
  title: string
  description: string
  summary: string
  bullets: string[]
  sections: SeoLandingPageSection[]
  related: SeoLandingPageRelatedLink[]
  ctaLabel?: string
}

export default function SeoLandingPage({
  eyebrow,
  title,
  description,
  summary,
  bullets,
  sections,
  related,
  ctaLabel = 'Request a GEO audit',
}: SeoLandingPageProps) {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-black leading-tight mb-6 break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-4">Short answer</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {bullets.map((bullet) => (
              <div key={bullet} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-sm font-medium text-gray-800">
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Related GEO resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-sm font-semibold text-gray-900 hover:border-black transition break-words"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">Turn this page into an AI answer advantage</h2>
          <p className="text-gray-300 mb-8">
            HyperMind can audit the prompts, citations, source gaps, and answer language behind this topic for your brand.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            {ctaLabel}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
