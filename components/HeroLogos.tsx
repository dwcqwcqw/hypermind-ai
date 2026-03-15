'use client'

import Image from 'next/image'

const LOGOS = [
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

export default function HeroLogos() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] flex items-center justify-center animate-slide-in-3">
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

      <div className="absolute w-full h-full">
        {LOGOS.map((logo, index) => {
          const angle = (index * 360) / LOGOS.length
          return (
            <div
              key={logo.alt}
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

        @media (max-width: 640px) {
          .logo-orbit > div {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-120px) rotate(calc(-1 * var(--angle)));
          }
        }
      `}</style>
    </div>
  )
}
