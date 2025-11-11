'use client'

export default function FeaturesShowcase() {
  const features = [
    {
      title: 'Understand What AI is Saying About Your Brand',
      description: 'See how AI platforms describe your brand, and use those insights to shape your strategy.',
      image: '/asset/Understand What AI is Saying About Your Brand.jpg',
      span: 'col-span-1 lg:col-span-2',
    },
    {
      title: 'Track AI Visibility',
      description: 'Measure how often you\'re mentioned and track progress over time.',
      image: '/asset/Track AI Visibility.avif',
      span: 'col-span-1',
    },
    {
      title: 'Find Sources Referenced by AI',
      description: 'Discover the exact sources AI pulls from, so you can optimize the content that drives visibility.',
      image: '/asset/Find Sources Referenced by AI.avif',
      span: 'col-span-1',
    },
    {
      title: 'Compare Competitors',
      description: 'Benchmark your brand against competitors and spot opportunities to outrank them.',
      image: '/asset/Compare Competitors.avif',
      span: 'col-span-1',
    },
    {
      title: 'Boost Product Visibility',
      description: 'Get clear, prioritized steps to turn mentions in customers',
      image: '/asset/Boost Product Visibility.avif',
      span: 'col-span-1',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Own your visibility on AI Search.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track and grow your <span className="font-bold text-gray-900">AI reach.</span>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            See exactly where you stand, track competitors, and get clear actions to turn AI mentions into growth.
          </p>
        </div>
        {/* Top row - 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Understand What AI is Saying - takes 2/3 width */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 group">
            <div className="p-8 pb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                {features[0].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {features[0].description}
              </p>
            </div>
            <div className="relative px-8 pb-8">
              <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Track AI Visibility - takes 1/3 width */}
          <div className="lg:col-span-1 bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 group">
            <div className="p-8 pb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {features[1].title}
              </h3>
              <p className="text-base text-gray-600 mb-6">
                {features[1].description}
              </p>
            </div>
            <div className="relative px-8 pb-8">
              <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={features[1].image}
                  alt={features[1].title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(2).map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="p-8 pb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  {feature.description}
                </p>
              </div>
              <div className="relative px-8 pb-8">
                <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

