'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

type Post = {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
}

type Props = {
  slug: string
  staticArticle: any | null
}

export default function ClientArticlePage({ slug, staticArticle }: Props) {
  const [dynamicPost, setDynamicPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(!staticArticle)

  useEffect(() => {
    if (!staticArticle) {
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
          </div>
        </main>
      </>
    )
  }

  // Determine if it's a static article
  const isStatic = !!staticArticle
  const displayDate = isStatic 
    ? article.date 
    : new Date(article.publishAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })

  return (
    <>
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
            {isStatic && article.author && (
              <div className="text-gray-600">
                By {article.author}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {(article.image || article.coverImage) && (
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
              <img
                src={article.image || article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
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

