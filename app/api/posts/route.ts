import { NextResponse } from 'next/server'
import { getAllPosts, createPost, slugify } from '@/lib/posts'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Get posts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      title: string
      content: string
      coverImage: string
      publishAt: string
      excerpt?: string
      category?: string
      tags?: string[]
      tldr?: string
      keyTakeaways?: string[]
    }

    const { title, content, coverImage, publishAt, excerpt, category, tags, tldr, keyTakeaways } = body

    if (!title || !content || !coverImage || !publishAt) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content, coverImage, publishAt' },
        { status: 400 }
      )
    }

    const slug = slugify(title)

    const post = await createPost({
      title,
      slug,
      content,
      coverImage,
      publishAt,
      excerpt: excerpt ?? '',
      category,
      tags,
      tldr,
      keyTakeaways,
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Create post error:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
