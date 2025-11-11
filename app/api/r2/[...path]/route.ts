import { NextResponse } from 'next/server'
import { getBindings } from '@/lib/cloudflare'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const bindings = getBindings()
    if (!bindings.IMAGES_R2) {
      return NextResponse.json(
        { error: 'R2 storage not available' },
        { status: 500 }
      )
    }

    const key = params.path.join('/')
    const object = await bindings.IMAGES_R2.get(key)

    if (!object || !object.body) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      )
    }

    const headers = new Headers()
    headers.set(
      'Content-Type',
      object.httpMetadata?.contentType || 'image/jpeg'
    )
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')

    return new Response(object.body, { headers })
  } catch (error) {
    console.error('R2 fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    )
  }
}

