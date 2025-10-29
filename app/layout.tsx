import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HyperMind - 10x your traffic from AI Search Engines',
  description: 'Turn AI mentions on ChatGPT, Perplexity, and Google AI into traffic and customers.',
  icons: {
    icon: '/asset/logo.png',
    shortcut: '/asset/logo.png',
    apple: '/asset/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/asset/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


