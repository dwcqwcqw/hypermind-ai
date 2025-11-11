/// <reference types="@cloudflare/workers-types" />

declare module '@cloudflare/next-on-pages' {
  export function getRequestContext(): {
    env: {
      POSTS_KV: KVNamespace
      IMAGES_R2: R2Bucket
    }
    cf: IncomingRequestCfProperties
    ctx: ExecutionContext
  }
}

