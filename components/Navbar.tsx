'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/40 backdrop-blur-xl shadow-sm' 
        : 'bg-white/20 backdrop-blur-md'
    } border-b border-gray-200/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image 
              src="/asset/logo.png" 
              alt="HyperMind Logo" 
              width={40} 
              height={40} 
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-black">
              HyperMind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#hero" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-gray-900 transition">
              Resources
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://forms.gle/QA6WWgN4cpRHW5VF7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition inline-block"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#hero" className="text-gray-700 hover:text-gray-900 transition">
                Home
              </Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-gray-900 transition">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-gray-900 transition">
                Resources
              </Link>
              <a 
                href="https://forms.gle/QA6WWgN4cpRHW5VF7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition inline-block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


