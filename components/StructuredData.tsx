export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hypermindai.tech/#organization",
        "name": "HyperMind",
        "url": "https://www.hypermindai.tech/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.hypermindai.tech/asset/logo.png",
          "width": 185,
          "height": 185
        },
        "description": "HyperMind is a Generative Engine Optimization (GEO) platform that helps brands 10x their traffic from AI search engines by monitoring and optimizing brand visibility across AI-powered platforms like ChatGPT, Claude, Perplexity, and more.",
        "foundingDate": "2024"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hypermindai.tech/#website",
        "url": "https://www.hypermindai.tech/",
        "name": "HyperMind - AI Search Engine Optimization Platform",
        "description": "10x your traffic from AI Search Engines. Empower AI platforms to feature your brand more and transform those mentions into real business results.",
        "publisher": {
          "@id": "https://www.hypermindai.tech/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hypermindai.tech/#webpage",
        "url": "https://www.hypermindai.tech/",
        "name": "HyperMind - 10x Your Traffic from AI Search Engines",
        "description": "Empower AI platforms like ChatGPT, Claude, Perplexity, and DeepSeek to feature your brand more and transform those mentions into real business results.",
        "isPartOf": {
          "@id": "https://www.hypermindai.tech/#website"
        },
        "about": {
          "@id": "https://www.hypermindai.tech/#service"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Service",
        "@id": "https://www.hypermindai.tech/#service",
        "serviceType": "Generative Engine Optimization Software",
        "name": "HyperMind GEO Platform",
        "provider": {
          "@id": "https://www.hypermindai.tech/#organization"
        },
        "description": "Track and optimize your brand's visibility across AI-powered search engines and chatbots. Get real-time insights, simulate prompts, and increase brand mentions in AI-generated responses across platforms like ChatGPT, Claude, Google AI, Grok, Perplexity, and DeepSeek.",
        "url": "https://www.hypermindai.tech/",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "HyperMind GEO Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Basic Plan",
                "description": "Perfect for small businesses getting started with GEO. Includes up to 50 prompt simulations, 2 blog post generation, track responses from 100+ countries, and Slack support."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pro Plan",
                "description": "For growing teams who need advanced GEO analysis. Includes up to 200 prompt simulations, 20 blog post generation, email outreach to popular blogs, one seat for a member included, and track responses from 100+ countries."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Plan",
                "description": "For organizations that need custom GEO solutions at scale. Everything in Pro plus dedicated GEO specialist, professionally edited blogs, unlimited topics and prompts, and custom integrations."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.hypermindai.tech/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is Generative Engine Optimization any different to Search Engine Optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO focuses specifically on optimizing your content for AI-powered search engines and chatbots, while traditional SEO targets conventional search engines like Google."
            }
          },
          {
            "@type": "Question",
            "name": "Can I just use normal SEO to optimize for AI Search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While traditional SEO principles still apply, AI search engines evaluate content differently. GEO requires specific strategies to ensure your brand is properly represented in AI-generated responses."
            }
          },
          {
            "@type": "Question",
            "name": "How does HyperMind get its data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HyperMind simulates thousands of prompts across multiple AI platforms to track how and when your brand is mentioned, providing comprehensive visibility analytics."
            }
          },
          {
            "@type": "Question",
            "name": "Can you select prompts to simulate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can customize the prompts we simulate based on your industry, target audience, and specific use cases to get the most relevant insights."
            }
          },
          {
            "@type": "Question",
            "name": "Have you increased someone's visibility on AI Search before?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our clients have seen significant increases in AI mentions and referral traffic from AI-powered platforms after implementing our GEO strategies."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free consultations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer free consultations to discuss your specific needs and how HyperMind can help improve your AI search visibility."
            }
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.hypermindai.tech/resources#webpage",
        "url": "https://www.hypermindai.tech/resources",
        "name": "Resources - HyperMind",
        "description": "Learn how to optimize your content for AI search engines",
        "isPartOf": {
          "@id": "https://www.hypermindai.tech/#website"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.hypermindai.tech/resources/top-7-mobile-ai-marketing-apps-2025#article",
        "headline": "Top 7 Mobile AI Marketing Apps for Instant Insights in 2025",
        "url": "https://www.hypermindai.tech/resources/top-7-mobile-ai-marketing-apps-2025",
        "image": "https://www.hypermindai.tech/resources/article3_image.png",
        "datePublished": "2025-01-28",
        "dateModified": "2025-01-28",
        "author": {
          "@type": "Organization",
          "name": "HyperMind Team",
          "url": "https://www.hypermindai.tech/#organization"
        },
        "publisher": {
          "@id": "https://www.hypermindai.tech/#organization"
        },
        "description": "Discover the best mobile AI marketing apps delivering real-time competitive intelligence, brand monitoring, and actionable insights. Learn how these powerful tools help marketers make data-driven decisions on the go in an AI-powered marketing landscape.",
        "articleBody": "The marketing landscape has transformed dramatically, with AI-powered tools becoming essential for competitive intelligence and real-time decision making. With the AI industry projected to reach $244 billion in 2025 and surge to over $1 trillion by 2031, mobile AI marketing apps have become critical for brands seeking instant, actionable insights.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.hypermindai.tech/resources/top-7-mobile-ai-marketing-apps-2025"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.hypermindai.tech/resources/top-10-ai-marketing-vendors-prompt-simulation-2025#article",
        "headline": "Top 10 AI Marketing Vendors for Prompt Simulation in 2025",
        "url": "https://www.hypermindai.tech/resources/top-10-ai-marketing-vendors-prompt-simulation-2025",
        "image": "https://www.hypermindai.tech/resources/article2_image.png",
        "datePublished": "2025-01-05",
        "dateModified": "2025-01-05",
        "author": {
          "@type": "Organization",
          "name": "HyperMind Team",
          "url": "https://www.hypermindai.tech/#organization"
        },
        "publisher": {
          "@id": "https://www.hypermindai.tech/#organization"
        },
        "description": "The landscape of AI marketing is rapidly evolving, with prompt simulation emerging as a critical capability for brands seeking to understand, optimize, and predict AI-generated behaviors that impact digital visibility and campaign success.",
        "articleBody": "The landscape of AI marketing is rapidly evolving, with prompt simulation emerging as a critical capability for brands seeking to understand, optimize, and predict AI-generated behaviors that impact digital visibility and campaign success. Prompt simulation enables marketers to test AI responses, refine messaging strategies, and optimize their presence across AI-powered platforms before launching campaigns.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.hypermindai.tech/resources/top-10-ai-marketing-vendors-prompt-simulation-2025"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Article",
        "@id": "https://www.hypermindai.tech/resources/hypermind-vs-top-ai-marketing-platforms#article",
        "headline": "The Definitive Comparison of HyperMind vs Top AI Marketing Platforms",
        "url": "https://www.hypermindai.tech/resources/hypermind-vs-top-ai-marketing-platforms",
        "image": "https://www.hypermindai.tech/resources/article1_image.png",
        "datePublished": "2024-10-01",
        "dateModified": "2024-10-01",
        "author": {
          "@type": "Organization",
          "name": "HyperMind Team",
          "url": "https://www.hypermindai.tech/#organization"
        },
        "publisher": {
          "@id": "https://www.hypermindai.tech/#organization"
        },
        "description": "The AI marketing landscape has transformed dramatically, with platforms offering everything from basic automation to sophisticated Generative Engine Optimization (GEO). HyperMind stands apart as the only B2B SaaS platform specializing in GEO.",
        "articleBody": "The AI marketing landscape has transformed dramatically, with platforms offering everything from basic automation to sophisticated Generative Engine Optimization (GEO). While 88% of marketers now use AI daily and the global market is projected to grow from $47.32B in 2025 to $107.5B by 2028, choosing the right platform remains critical for marketing teams seeking measurable results.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.hypermindai.tech/resources/hypermind-vs-top-ai-marketing-platforms"
        },
        "inLanguage": "en"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

