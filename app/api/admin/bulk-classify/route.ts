/**
 * POST /api/admin/bulk-classify
 *
 * Iterates all KV posts, applies getAutoCategory() to any post
 * without a category, and writes the updated post back to KV.
 * Returns a summary of how many posts were updated and the
 * distribution across categories.
 *
 * This endpoint is idempotent: calling it multiple times is safe —
 * posts that already have a category are left unchanged.
 */

import { NextResponse } from 'next/server'
import { getAllPosts, updatePost } from '@/lib/posts'
import { getAutoCategory } from '@/lib/blogConfig'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

interface ClassifyResult {
  total: number
  updated: number
  alreadyClassified: number
  distribution: Record<string, number>
  errors: number
}

export async function POST() {
  try {
    const posts = await getAllPosts()
    const result: ClassifyResult = {
      total: posts.length,
      updated: 0,
      alreadyClassified: 0,
      distribution: {},
      errors: 0,
    }

    // Process in batches of 10 to avoid overwhelming KV
    const BATCH_SIZE = 10
    for (let i = 0; i < posts.length; i += BATCH_SIZE) {
      const batch = posts.slice(i, i + BATCH_SIZE)
      await Promise.all(
        batch.map(async (post) => {
          try {
            const assignedCategory = post.category ?? getAutoCategory(post.title, post.slug)

            // Track distribution across all posts
            result.distribution[assignedCategory] = (result.distribution[assignedCategory] ?? 0) + 1

            if (post.category) {
              result.alreadyClassified++
              return
            }

            // Persist the auto-assigned category to KV
            await updatePost(post.id, { category: assignedCategory })
            result.updated++
          } catch (err) {
            console.error(`Failed to classify post ${post.id}:`, err)
            result.errors++
          }
        })
      )
    }

    return NextResponse.json({
      success: true,
      message: `Classified ${result.updated} posts. ${result.alreadyClassified} already had categories.`,
      ...result,
    })
  } catch (error) {
    console.error('Bulk classify error:', error)
    return NextResponse.json(
      { success: false, error: 'Bulk classification failed' },
      { status: 500 }
    )
  }
}
