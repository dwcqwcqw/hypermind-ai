import Link from 'next/link'
import { marked } from 'marked'
import { getCategoryById } from '@/lib/blogConfig'

interface RelatedArticle {
  title: string
  slug: string
  category?: string
  excerpt?: string
}

interface ArticleContentProps {
  title: string
  coverImage?: string
  content: string
  displayDate: string
  author?: string
  category?: string
  tags?: string[]
  tldr?: string
  keyTakeaways?: string[]
  relatedArticles?: RelatedArticle[]
}

function getHtmlFromContent(content: string): string {
  const looksLikeHtml = /<\/(p|h1|h2|h3|h4|h5|h6|ul|ol|li|strong|em|div|section|article)>/i.test(content)
  return looksLikeHtml ? content : (marked.parse(content, { breaks: true }) as string)
}

export default function ArticleContent({
  title,
  coverImage,
  content,
  displayDate,
  author,
  category,
  tags,
  tldr,
  keyTakeaways,
  relatedArticles,
}: ArticleContentProps) {
  const html = getHtmlFromContent(content)
  const cat = category ? getCategoryById(category) : undefined

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
        <span>›</span>
        <Link href="/resources" className="hover:text-gray-900 transition-colors">Resources</Link>
        <span>›</span>
        <Link href="/resources/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
        {cat && (
          <>
            <span>›</span>
            <Link href={`/resources/blog?category=${category}`} className="hover:text-gray-900 transition-colors">
              {cat.label}
            </Link>
          </>
        )}
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        {/* Category + Date row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {cat ? (
            <Link
              href={`/resources/blog?category=${category}`}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-opacity hover:opacity-80 ${cat.color} ${cat.textColor}`}
            >
              {cat.label}
            </Link>
          ) : (
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">ARTICLE</span>
          )}
          <span className="text-sm text-gray-500">{displayDate}</span>
          {author && <span className="text-sm text-gray-500">by {author}</span>}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words">{title}</h1>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 border border-gray-200 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {coverImage && (
        <div className="relative w-full h-56 sm:h-96 mb-10 rounded-2xl overflow-hidden">
          <img src={coverImage} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* TL;DR Box — AI-extractable quick answer */}
      {tldr && (
        <div className="mb-8 p-5 sm:p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">TL;DR</span>
          </div>
          <p className="text-gray-800 leading-relaxed">{tldr}</p>
        </div>
      )}

      {/* Key Takeaways — structured for AI extraction */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="mb-10 p-5 sm:p-6 bg-gray-50 border border-gray-200 rounded-2xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            {keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-black shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body */}
      <div
        className="prose prose-base sm:prose-lg prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-4 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:mb-1 prose-img:rounded-xl prose-img:my-6 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-table:block prose-table:w-full prose-table:overflow-x-auto max-w-none break-words"
        style={{ lineHeight: '1.8', color: '#374151' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((article) => {
              const relCat = article.category ? getCategoryById(article.category) : undefined
              return (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-white transition-all"
                >
                  {relCat && (
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full mb-2 ${relCat.color} ${relCat.textColor}`}>
                      {relCat.label}
                    </span>
                  )}
                  <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
                  )}
                  <span className="mt-2 inline-block text-sm font-medium text-black group-hover:underline">
                    Read →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Internal linking: pillar pages */}
      <div className="mt-10 p-5 sm:p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-3">Explore GEO Knowledge Hub</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'What is GEO?', href: '/resources/what-is-geo' },
            { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
            { label: 'AI Search Optimization', href: '/resources/how-to-optimize-for-ai-search' },
            { label: 'AI Visibility Monitoring', href: '/resources/ai-visibility-monitoring-guide' },
            { label: 'Complete GEO Strategy', href: '/resources/complete-geo-strategy-guide' },
            { label: 'AI Search Statistics', href: '/resources/ai-search-statistics' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 hover:text-black transition-all break-words"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 sm:p-8 bg-gray-900 rounded-2xl text-center text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          Ready to optimize your brand for AI search?
        </h3>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          HyperMind tracks your AI visibility across ChatGPT, Perplexity, and Gemini — and shows you exactly how to get cited more.
        </p>
        <a
          href="https://forms.gle/QA6WWgN4cpRHW5VF7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Get Started Free →
        </a>
      </div>
    </article>
  )
}
