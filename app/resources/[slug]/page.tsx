'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Generate static paths for all articles
export function generateStaticParams() {
  return [
    { slug: 'how-to-write-geo-content' },
    { slug: 'top-10-geo-tools-2025' },
    { slug: 'seo-vs-geo-strategy' },
  ]
}

export default function ArticlePage() {
  const params = useParams()
  
  const articles: Record<string, any> = {
    'how-to-write-geo-content': {
      title: 'How to Write Generative Engine Optimized (GEO) Content for AI Search?',
      date: 'Oct 22, 2025',
      author: 'HyperMind Team',
      image: '/resources/article1 image.png',
      content: `
        <h2>What is Generative Engine Optimization (GEO)?</h2>
        <p>Generative Engine Optimization (GEO) is the practice of optimizing your content to rank higher in AI-powered search engines and language models like ChatGPT, Claude, Google Gemini, and Perplexity.</p>
        
        <h2>Why GEO Matters</h2>
        <p>As more users turn to AI chatbots for information, traditional SEO strategies are no longer enough. AI models retrieve and synthesize information differently than traditional search engines, requiring a new approach to content optimization.</p>
        
        <h2>Key Principles of GEO Content</h2>
        <h3>1. Structure and Clarity</h3>
        <p>AI models prefer well-structured content with clear hierarchies. Use descriptive headings, bullet points, and concise paragraphs to make your content easily parseable.</p>
        
        <h3>2. Authority and Citations</h3>
        <p>Include credible sources and data to establish authority. AI models are more likely to reference content that demonstrates expertise and reliability.</p>
        
        <h3>3. Comprehensive Coverage</h3>
        <p>Provide thorough, in-depth information on your topic. AI models favor content that comprehensively answers user queries.</p>
        
        <h3>4. Natural Language</h3>
        <p>Write in a conversational, natural tone that mirrors how people ask questions to AI assistants.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Use question-answer formats that align with common user queries</li>
          <li>Include relevant keywords naturally throughout your content</li>
          <li>Keep paragraphs concise and scannable</li>
          <li>Add context and background information</li>
          <li>Update content regularly to maintain freshness</li>
        </ul>
        
        <h2>Measuring GEO Success</h2>
        <p>Track how often your brand is mentioned in AI responses using tools like HyperMind. Monitor citation frequency, sentiment, and the accuracy of AI-generated information about your brand.</p>
        
        <h2>Conclusion</h2>
        <p>GEO is becoming essential for modern digital marketing. By optimizing your content for AI search engines, you can increase your brand visibility and reach audiences where they're increasingly turning for information.</p>
      `,
    },
  }

  const article = articles[params.slug as string] || articles['how-to-write-geo-content']

  return (
    <main className="min-h-screen bg-white pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link 
          href="/resources" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          ← Back to Resources
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-4">
            ARTICLE | {article.date}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          <div className="text-gray-600">
            By {article.author}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to optimize your content for AI search?
          </h3>
          <p className="text-gray-600 mb-6">
            Get started with HyperMind and track your AI visibility today.
          </p>
          <a
            href="https://forms.gle/QA6WWgN4cpRHW5VF7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </div>
      </article>

      <style jsx>{`
        :global(.prose h2) {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          color: #111;
        }
        
        :global(.prose h3) {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111;
        }
        
        :global(.prose p) {
          margin-bottom: 1.5rem;
          color: #374151;
        }
        
        :global(.prose ul) {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        :global(.prose li) {
          margin-bottom: 0.5rem;
          color: #374151;
        }
      `}</style>
    </main>
  )
}

