'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ArticleStructuredData from '@/components/ArticleStructuredData'

type Post = {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
}

type StaticArticle = {
  title: string
  date: string
  author?: string
  image: string
  content: string
}

type Props = {
  staticArticles: Record<string, StaticArticle>
}

export default function ClientArticle({ staticArticles }: Props) {
  const params = useParams()
  const slug = params.slug as string
  
  const [dynamicPost, setDynamicPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  
  const staticArticle = staticArticles[slug] || null

  useEffect(() => {
    if (staticArticle) {
      setLoading(false)
    } else {
      // Try to fetch from API
      fetch('/api/posts')
        .then(res => res.json() as Promise<Post[]>)
        .then((posts) => {
          const found = posts.find((p: Post) => p.slug === slug)
          if (found) {
            setDynamicPost(found)
          }
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }, [slug, staticArticle])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">Loading...</div>
          </div>
        </main>
      </>
    )
  }

  const article = staticArticle || dynamicPost

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">Article not found</div>
            <Link
              href="/resources"
              className="mt-4 inline-block text-gray-600 hover:text-gray-900"
            >
              ← Back to Resources
            </Link>
          </div>
        </main>
      </>
    )
  }

  // Determine if it's a static article
  const isStatic = !!staticArticle
  
  // Type-safe access
  const displayDate = isStatic 
    ? (article as StaticArticle).date 
    : new Date((article as unknown as Post).publishAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })

  const coverImage = isStatic 
    ? (article as StaticArticle).image 
    : (article as unknown as Post).coverImage

  // Prepare structured data
  const articleUrl = `https://www.hypermindai.tech/resources/${slug}`
  const articleImage = isStatic 
    ? `https://www.hypermindai.tech${(article as StaticArticle).image}` 
    : `https://www.hypermindai.tech${(article as unknown as Post).coverImage}`
  
  const articleDate = isStatic
    ? new Date((article as StaticArticle).date).toISOString().split('T')[0]
    : new Date((article as unknown as Post).publishAt).toISOString().split('T')[0]
  
  const articleDescription = isStatic
    ? article.content.replace(/<[^>]*>/g, '').substring(0, 200)
    : (article as unknown as Post).excerpt || article.content.replace(/<[^>]*>/g, '').substring(0, 200)

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        url={articleUrl}
        image={articleImage}
        datePublished={articleDate}
        dateModified={articleDate}
        description={articleDescription}
        content={article.content}
      />
      <Navbar />
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
              ARTICLE | {displayDate}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            {isStatic && (article as StaticArticle).author && (
              <div className="text-gray-600">
                By {(article as StaticArticle).author}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {coverImage && (
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
              <img
                src={coverImage}
                alt={article.title}
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
            dangerouslySetInnerHTML={{ __html: article.content }}
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
      </main>
    </>
  )
}

