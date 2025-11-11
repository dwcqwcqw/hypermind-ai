import { NextResponse } from 'next/server'
import { getBindings } from '@/lib/cloudflare'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const bindings = getBindings()
    if (!bindings.IMAGES_R2) {
      return NextResponse.json(
        { error: 'R2 storage not available' },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const ext = file.name.split('.').pop() || 'jpg'
    const filename = `${Date.now()}-${crypto.randomUUID()}.${ext}`
    const key = `hypermind/images/${filename}`

    // Upload to R2
    const arrayBuffer = await file.arrayBuffer()
    await bindings.IMAGES_R2.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type || 'image/jpeg',
      },
    })

    // Return the URL path
    const url = `/api/r2/${key}`
    
    return NextResponse.json({ url, key })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

