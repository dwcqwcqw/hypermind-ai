'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ResourcesPage() {
  const articles = [
    {
      id: 2,
      title: 'Top 10 AI Marketing Vendors for Prompt Simulation in 2025',
      date: 'Nov 8, 2024',
      category: 'ARTICLE',
      image: '/resources/article2 image.png',
      description: 'Explore the leading AI marketing vendors specializing in prompt simulation, featuring comprehensive insights into platforms that help brands optimize their AI presence, test messaging strategies, and enhance campaign effectiveness through advanced simulation capabilities.',
      slug: 'top-10-ai-marketing-vendors-prompt-simulation-2025',
    },
    {
      id: 1,
      title: 'The Definitive Comparison of HyperMind vs Top AI Marketing Platforms',
      date: 'Oct 1, 2024',
      category: 'ARTICLE',
      image: '/resources/article1 image.png',
      description: 'Discover how HyperMind stands apart as the only B2B SaaS platform specializing in Generative Engine Optimization (GEO), offering proprietary AI visibility tracking, secure data governance, and actionable intelligence that converts AI-driven brand mentions into measurable traffic and revenue.',
      slug: 'hypermind-vs-top-ai-marketing-platforms',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f3f0] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600">
            Learn how to optimize your content for AI search engines
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/resources/${article.slug}`}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-gray-500 mb-2">
                  {article.category} | {article.date}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 flex-1">
                  {article.description}
                </p>
                <div className="mt-4 text-black font-semibold group-hover:underline">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </main>
    </>
  )
}

