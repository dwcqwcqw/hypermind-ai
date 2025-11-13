import Link from 'next/link'

type ArticleContentProps = {
  title: string
  coverImage?: string
  content: string
  displayDate: string
  author?: string
}

export default function ArticleContent({ title, coverImage, content, displayDate, author }: ArticleContentProps) {
  return (
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
          ARTICLE | {displayDate}
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        {author && (
          <div className="text-gray-600">
            By {author}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {coverImage && (
        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div
        className="prose prose-lg prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-img:rounded-lg prose-img:my-6 max-w-none"
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.75',
          color: '#374151'
        }}
        dangerouslySetInnerHTML={{ __html: content }}
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
  )
}

