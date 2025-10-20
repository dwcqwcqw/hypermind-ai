export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses getting started with GEO',
      price: '199',
      period: '/m',
      features: [
        'Up to 50 prompt simulations',
        '2 blog post generation',
        'Track responses from 100+ countries',
        'Slack support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      badge: 'Most Popular',
      description: 'For growing teams who need advanced GEO analysis',
      price: '500',
      period: '/m',
      features: [
        'Up to 200 prompt simulations',
        '20 blog post generation',
        'Email outreach to popular blogs',
        'One seat for a member included',
        'Track responses from 100+ countries',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations that need custom GEO solutions at scale',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Pro',
        'Dedicated GEO specialist',
        'Professionally edited blogs',
        'Unlimited topics and prompts',
        'Custom Integrations',
      ],
      cta: 'Book a Demo',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple pricing plans.
          </h2>
          <p className="text-xl text-gray-600">
            We've designed our pricing to maximize your ROI.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-black text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              } transition-transform hover:scale-105`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                </span>
                {plan.period && (
                  <span className={`text-xl ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                  <svg
                    className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-lg font-semibold transition inline-block text-center ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


