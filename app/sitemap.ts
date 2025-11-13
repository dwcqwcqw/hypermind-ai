import { MetadataRoute } from 'next'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

type Post = {
  slug: string
  publishAt: string
  updatedAt: string
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://www.hypermindai.tech/api/posts', {
      cache: 'no-store'
    })
    if (!res.ok) return []
    const posts = await res.json() as any[]
    return posts.map((p: any) => ({
      slug: p.slug,
      publishAt: p.publishAt,
      updatedAt: p.updatedAt
    }))
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hypermindai.tech'
  
  // Static articles
  const staticArticles = [
    {
      slug: 'top-7-mobile-ai-marketing-apps-2025',
      date: '2025-01-28',
    },
    {
      slug: 'top-10-ai-marketing-vendors-prompt-simulation-2025',
      date: '2025-01-05',
    },
    {
      slug: 'hypermind-vs-top-ai-marketing-platforms',
      date: '2024-10-01',
    },
  ]

  // Get dynamic posts
  const dynamicPosts = await getPosts()

  // Combine all articles
  const allArticles = [
    ...staticArticles.map(article => ({
      url: `${baseUrl}/resources/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...dynamicPosts.map(post => ({
      url: `${baseUrl}/resources/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...allArticles,
  ]
}

