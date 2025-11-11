import { getBindings } from './cloudflare'

export type Post = {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
  createdAt: string
  updatedAt: string
}

const KV_KEY_PREFIX = 'post:'

async function getKV() {
  const bindings = getBindings()
  if (!bindings.POSTS_KV) {
    throw new Error('POSTS_KV binding not available')
  }
  return bindings.POSTS_KV
}

export async function getAllPosts(): Promise<Post[]> {
  const kv = await getKV()
  const { keys } = await kv.list({ prefix: KV_KEY_PREFIX })
  
  const posts: Post[] = []
  for (const key of keys) {
    const value = await kv.get(key.name)
    if (value) {
      try {
        posts.push(JSON.parse(value))
      } catch (e) {
        console.error('Failed to parse post:', key.name, e)
      }
    }
  }
  
  return posts.sort((a, b) => 
    new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
  )
}

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  const now = Date.now()
  return posts.filter(post => new Date(post.publishAt).getTime() <= now)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> {
  const kv = await getKV()
  const now = new Date().toISOString()
  
  const newPost: Post = {
    ...post,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  }
  
  await kv.put(`${KV_KEY_PREFIX}${newPost.id}`, JSON.stringify(newPost))
  return newPost
}

export async function updatePost(id: string, updates: Partial<Post>): Promise<Post | null> {
  const kv = await getKV()
  const existing = await kv.get(`${KV_KEY_PREFIX}${id}`)
  
  if (!existing) {
    return null
  }
  
  const post: Post = JSON.parse(existing)
  const updatedPost: Post = {
    ...post,
    ...updates,
    id: post.id,
    createdAt: post.createdAt,
    updatedAt: new Date().toISOString(),
  }
  
  await kv.put(`${KV_KEY_PREFIX}${id}`, JSON.stringify(updatedPost))
  return updatedPost
}

export async function deletePost(id: string): Promise<boolean> {
  const kv = await getKV()
  const existing = await kv.get(`${KV_KEY_PREFIX}${id}`)
  
  if (!existing) {
    return false
  }
  
  // Note: KV doesn't have delete in our type, we'll just set it to empty
  // In production, you'd want to implement actual deletion
  await kv.put(`${KV_KEY_PREFIX}${id}`, '')
  return true
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
