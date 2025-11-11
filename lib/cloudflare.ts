import { getRequestContext } from '@cloudflare/next-on-pages'

export type KVNamespace = {
  get: (key: string) => Promise<string | null>
  put: (key: string, value: string) => Promise<void>
  list: (options?: { prefix?: string }) => Promise<{ keys: Array<{ name: string }> }>
}

export type R2Object = {
  body: ReadableStream | null
  httpMetadata?: { contentType?: string }
}

export type R2Bucket = {
  get: (key: string) => Promise<R2Object | null>
  put: (
    key: string,
    value: ReadableStream | ArrayBuffer | string | Uint8Array,
    options?: { httpMetadata?: { contentType?: string } }
  ) => Promise<void>
  delete: (key: string) => Promise<void>
}

export type CloudflareBindings = {
  POSTS_KV: KVNamespace
  IMAGES_R2: R2Bucket
}

export function getBindings(): Partial<CloudflareBindings> {
  try {
    const context = getRequestContext()
    return (context.env as unknown as CloudflareBindings) || {}
  } catch {
    return {}
  }
}

