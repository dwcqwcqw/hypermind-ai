'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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

export default function DynamicArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json() as Promise<Post[]>)
      .then((posts) => {
        const found = posts.find((p: Post) => p.slug === slug)
        if (found) {
          setPost(found)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [slug])

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

  if (!post) {
    return null // Will be handled by static page
  }

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
              ARTICLE | {new Date(post.publishAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          {post.coverImage && (
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
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
            dangerouslySetInnerHTML={{ __html: post.content }}
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

