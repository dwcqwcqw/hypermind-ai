import Hero from '@/components/Hero'
import Dashboard from '@/components/Dashboard'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Dashboard />
      <FeaturesShowcase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}


