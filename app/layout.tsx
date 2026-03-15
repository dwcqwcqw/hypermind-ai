import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
  description: 'HyperMind is the leading GEO agency helping brands get recommended in AI answers. We optimize your visibility across ChatGPT, Gemini, Perplexity, Claude and other AI assistants through Generative Engine Optimization.',
  icons: {
    icon: '/asset/logo.png',
    shortcut: '/asset/logo.png',
    apple: '/asset/logo.png',
  },
  openGraph: {
    title: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
    description: 'HyperMind is the leading GEO agency helping brands get recommended in AI answers. We optimize your visibility across ChatGPT, Gemini, Perplexity, Claude and other AI assistants through Generative Engine Optimization.',
    url: 'https://www.hypermindai.tech/',
    siteName: 'HyperMind',
    images: [
      {
        url: 'https://www.hypermindai.tech/asset/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'HyperMind — The GEO Agency for AI Search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
    description: 'HyperMind is the leading GEO agency helping brands get recommended in AI answers. We optimize your visibility across ChatGPT, Gemini, Perplexity, Claude and other AI assistants.',
    images: ['https://www.hypermindai.tech/asset/dashboard.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" href="/asset/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


