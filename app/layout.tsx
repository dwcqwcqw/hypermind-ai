import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hypermindgeo.com'),
  title: {
    default: 'HyperMind - Agentic GEO Agency for AI Search Visibility',
    template: '%s | HyperMind',
  },
  description: 'HyperMind is an agentic GEO agency and AI visibility execution partner helping brands get mentioned, cited, and recommended across ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Copilot.',
  icons: {
    icon: '/asset/logo.png',
    shortcut: '/asset/logo.png',
    apple: '/asset/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HyperMind - Agentic GEO Agency for AI Search Visibility',
    description: 'HyperMind helps brands get cited and recommended in AI answers with prompt research, citation strategy, answer-ready content, source development, and AI search attribution.',
    url: 'https://hypermindgeo.com/',
    siteName: 'HyperMind',
    images: [
      {
        url: '/asset/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'HyperMind agentic GEO agency for AI search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperMind - Agentic GEO Agency for AI Search Visibility',
    description: 'HyperMind helps brands get cited and recommended in AI answers with prompt research, citation strategy, answer-ready content, source development, and AI search attribution.',
    images: ['/asset/dashboard.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGPY1N4763"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-VGPY1N4763');

(function () {
  try {
    var url = new URL(window.location.href);
    var utmSourceRaw = (url.searchParams.get('utm_source') || '').trim();
    var utmMedium = (url.searchParams.get('utm_medium') || '').trim();
    var utmCampaign = (url.searchParams.get('utm_campaign') || '').trim();
    var utmContent = (url.searchParams.get('utm_content') || '').trim();
    var utmTerm = (url.searchParams.get('utm_term') || '').trim();

    var referrer = document.referrer || '';
    var ref = referrer.toLowerCase();
    var utmSource = utmSourceRaw.toLowerCase();

    function normalizeAI(value) {
      if (!value) return null;
      if (value.includes('chatgpt') || value.includes('openai')) return 'chatgpt';
      if (value.includes('gemini') || value.includes('bard')) return 'gemini';
      if (value.includes('perplexity')) return 'perplexity';
      if (value.includes('claude') || value.includes('anthropic')) return 'claude';
      return null;
    }

    var aiSource = normalizeAI(utmSource);

    if (!aiSource) {
      if (ref.includes('chatgpt.com') || ref.includes('openai.com')) {
        aiSource = 'chatgpt';
      } else if (ref.includes('gemini.google.com') || ref.includes('bard.google.com')) {
        aiSource = 'gemini';
      } else if (ref.includes('perplexity.ai')) {
        aiSource = 'perplexity';
      } else if (ref.includes('claude.ai') || ref.includes('anthropic.com')) {
        aiSource = 'claude';
      }
    }

    if (aiSource) {
      gtag('event', 'ai_citation_visit', {
        ai_source: aiSource,
        ai_source_detected_by: utmSource ? 'utm' : 'referrer',
        utm_source: utmSourceRaw,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
        referrer_url: referrer,
        page_location: window.location.href,
      });
    }
  } catch (e) {
    // noop
  }
})();`}
        </Script>
        <Script
          src="https://seo-fixer.writesonic.com/site-audit/fixer-script/index.js"
          id="wsAiSeoMb"
          strategy="beforeInteractive"
        />
        <Script id="wsAiSeoInitScript" strategy="beforeInteractive">
          {`wsSEOfixer.configure({
            hostURL: 'https://seo-fixer.writesonic.com',
            siteID: '69bf80b396e413f1736f2705'
          });`}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="mq44eqQWWH9wMf1zEqBftw"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

