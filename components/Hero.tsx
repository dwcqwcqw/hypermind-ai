'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const logos = [
    { src: '/asset/chatgpt-logo.png', alt: 'ChatGPT', delay: 0 },
    { src: '/asset/gemini-logo.png', alt: 'Gemini', delay: 1 },
    { src: '/asset/perplexity-logo.png', alt: 'Perplexity', delay: 2 },
    { src: '/asset/claude-logo.png', alt: 'Claude', delay: 3 },
    { src: '/asset/deepseek-logo.webp', alt: 'DeepSeek', delay: 4 },
    { src: '/asset/ggrok-logo.png', alt: 'Grok', delay: 5 },
    { src: '/asset/Meta-logo.png', alt: 'Meta', delay: 6 },
    { src: '/asset/Microsoft_Copilot-logo.png', alt: 'Copilot', delay: 7 },
    { src: '/asset/Tongyi_Qianwen-Logo.png', alt: 'Tongyi', delay: 8 },
  ]

  const platforms = ['ChatGPT', 'Claude', 'Google AI', 'Grok', 'Perplexity', 'Deepseek']
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platforms.length)
    }, 2000) // 每2秒切换一次

    return () => clearInterval(interval)
  }, [platforms.length])

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Main heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-black animate-slide-in-1">10x your traffic from</span>
                <span className="block italic text-black animate-slide-in-2">
                  AI Search Engines
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 animate-slide-in-3">
                Empower AI platforms like{' '}
                <span className="inline-block min-w-[140px] text-center">
                  <span
                    key={currentPlatformIndex}
                    className="inline-block font-semibold text-black animate-fade-in"
                  >
                    {platforms[currentPlatformIndex]}
                  </span>
                </span>{' '}
                to feature your brand more — and transform those mentions into real business results.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-in-4">
              <a 
                href="https://forms.gle/QA6WWgN4cpRHW5VF7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition inline-block"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right side - Rotating logos animation */}
          <div className="relative w-full h-[500px] flex items-center justify-center animate-slide-in-3">
            {/* Center core image - circular */}
            <div className="absolute z-10">
              <div className="w-52 h-52 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl flex items-center justify-center border-4 border-white">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src="/asset/core.png"
                    alt="HyperMind Core"
                    width={185}
                    height={185}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Orbiting logos */}
            <div className="absolute w-full h-full">
              {logos.map((logo, index) => {
                const angle = (index * 360) / logos.length
                return (
                  <div
                    key={index}
                    className="logo-orbit"
                    style={{
                      '--angle': `${angle}deg`,
                      '--delay': `${logo.delay}s`,
                    } as React.CSSProperties}
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border-2 border-gray-100">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={48}
                        height={48}
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          animation: rotate 20s linear infinite;
          animation-delay: calc(var(--delay) * -2.22s);
        }

        .logo-orbit > div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-220px) rotate(calc(-1 * var(--angle)));
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @media (max-width: 1024px) {
          .logo-orbit > div {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-170px) rotate(calc(-1 * var(--angle)));
          }
        }
      `}</style>
    </section>
  )
}


