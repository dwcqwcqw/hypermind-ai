'use client'

import Image from 'next/image'

export default function Dashboard() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative group cursor-pointer">
          {/* Dashboard Image with hover effect */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
            <div className="relative w-full aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-105">
              <Image
                src="/asset/dashboard.jpg"
                alt="HyperMind Dashboard"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Floating animation on hover */}
          <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}

