'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How is Generative Engine Optimization any different to Search Engine Optimization?',
      answer: 'GEO focuses specifically on optimizing your content for AI-powered search engines and chatbots, while traditional SEO targets conventional search engines like Google.',
    },
    {
      question: 'Can I just use normal SEO to optimize for AI Search?',
      answer: 'While traditional SEO principles still apply, AI search engines evaluate content differently. GEO requires specific strategies to ensure your brand is properly represented in AI-generated responses.',
    },
    {
      question: 'How does HyperMind get its data?',
      answer: 'HyperMind simulates thousands of prompts across multiple AI platforms to track how and when your brand is mentioned, providing comprehensive visibility analytics.',
    },
    {
      question: 'Can you select prompts to simulate?',
      answer: 'Yes, you can customize the prompts we simulate based on your industry, target audience, and specific use cases to get the most relevant insights.',
    },
    {
      question: 'Have you increased someone\'s visibility on AI Search before?',
      answer: 'Yes, our clients have seen significant increases in AI mentions and referral traffic from AI-powered platforms after implementing our GEO strategies.',
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free consultations to discuss your specific needs and how HyperMind can help improve your AI search visibility.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-xl text-gray-600">
            Generative Engine Optimization is still very new. We've got you covered.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


