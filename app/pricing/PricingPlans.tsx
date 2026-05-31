'use client'

import Link from 'next/link'
import { useState } from 'react'

type BillingCycle = 'monthly' | 'yearly'

interface PricingTier {
  name: string
  tagline: string
  monthlyPrice: string
  yearlyPrice: string
  monthlyNote: string
  yearlyNote: string
  creditLine: string
  cta: string
  highlighted?: boolean
  included: string[]
  unavailable?: string[]
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    tagline: 'Trial credits for new users',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    monthlyNote: '2,000 trial credits on sign-up',
    yearlyNote: 'One-time grant, valid for one year',
    creditLine: '2,000 trial credits',
    cta: 'Current Plan',
    included: [
      'AI GEO diagnostics',
      'Competitor tracking',
      'Content gap analysis',
      'Basic keyword research',
      'Up to 1 project',
      '1 market per project',
      '50 prompts',
      'Up to 1 AI engine per project',
      '2,000 trial credits',
      'Trial credits valid for one year',
      'Community support',
    ],
    unavailable: [
      'Advanced skills',
      'More project capacity',
      'More prompt capacity',
      'Priority processing',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Core toolkit for AI visibility growth',
    monthlyPrice: '$99',
    yearlyPrice: '$79',
    monthlyNote: 'per month',
    yearlyNote: 'per month, billed yearly at $950',
    creditLine: '30,000 credits / month',
    cta: 'Upgrade',
    highlighted: true,
    included: [
      'Everything in Free',
      'AI visibility performance analysis',
      'Website health and technical audit',
      'Ongoing AI visibility monitoring',
      'Growth strategy and action plan generation',
      'GEO and SEO content production',
      'Executive summary reports',
      'Up to 3 projects',
      '1 market per project',
      '50 prompts',
      'Up to 3 AI engines per project',
      '30,000 credits / month',
      'Add credits while membership is active',
      'Priority email support',
    ],
    unavailable: [
      'Unlimited projects',
      '200-prompt capacity',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Max',
    tagline: 'Advanced workspace for high-frequency growth teams',
    monthlyPrice: '$299',
    yearlyPrice: '$239',
    monthlyNote: 'per month',
    yearlyNote: 'per month, billed yearly at $2,870',
    creditLine: '100,000 credits / month, lower unit cost',
    cta: 'Upgrade',
    included: [
      'Everything in Pro',
      'Unlimited projects',
      'Up to 200 prompts per project',
      'Up to 3 AI engines per project',
      '100,000 credits / month, lower unit cost',
      'Add credits while membership is active',
      '20 GB file storage',
      'Dedicated account manager',
      'Priority processing queue',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Set the growth target. We make it happen.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    monthlyNote: 'tiered pricing by delivery complexity',
    yearlyNote: 'annual scopes available for managed operations',
    creditLine: 'Custom GEO, SEO, and social operations',
    cta: 'Talk to Sales',
    included: [
      'You set the growth target; our ops team delivers it',
      'No self-serve system work required',
      'Managed GEO and SEO optimization steps',
      'Managed social content, publishing, and account operations',
      'Tiered custom quote based on target difficulty',
      'Private audience operations and conversion support',
      'Cross-platform growth reviews, optimization, and execution',
      'Dedicated account and delivery management',
    ],
  },
]

const FEATURE_COMPARISON = [
  { feature: 'Projects', tiers: ['1', '3', 'Unlimited', 'Custom'] },
  { feature: 'Markets per project', tiers: ['1', '1', 'Custom', 'Custom'] },
  { feature: 'Prompt capacity', tiers: ['50', '50', '200 per project', 'Custom'] },
  { feature: 'AI engines per project', tiers: ['1', '3', '3', 'Custom'] },
  { feature: 'Credits', tiers: ['2,000 trial credits', '30,000 / month', '100,000 / month', 'Custom'] },
  { feature: 'AI visibility monitoring', tiers: ['Diagnostics', true, true, true] },
  { feature: 'Website technical audit', tiers: [false, true, true, true] },
  { feature: 'Growth strategy generation', tiers: [false, true, true, true] },
  { feature: 'GEO and SEO content production', tiers: [false, true, true, true] },
  { feature: 'Managed social operations', tiers: [false, false, false, true] },
  { feature: 'Dedicated account manager', tiers: [false, false, true, true] },
  { feature: 'Priority processing', tiers: [false, false, true, true] },
]

function renderTierValue(value: boolean | string) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-emerald-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (value === false) {
    return <span className="text-gray-300">-</span>
  }
  return <span className="text-sm text-gray-700">{value}</span>
}

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 shrink-0 ${muted ? 'text-gray-300' : 'text-emerald-600'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {muted ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      )}
    </svg>
  )
}

function BillingToggle({
  billingCycle,
  onChange,
}: {
  billingCycle: BillingCycle
  onChange: (billingCycle: BillingCycle) => void
}) {
  return (
    <div
      className="mt-8 inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1 text-sm font-semibold text-gray-700"
      role="group"
      aria-label="Billing cycle"
    >
      {(['monthly', 'yearly'] as const).map((cycle) => {
        const active = billingCycle === cycle
        return (
          <button
            key={cycle}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(cycle)}
            className={`rounded-lg px-4 py-2 transition ${
              active
                ? 'bg-white text-gray-950 shadow-sm'
                : 'text-gray-600 hover:bg-white/70 hover:text-gray-950'
            }`}
          >
            {cycle === 'monthly' ? 'Monthly' : (
              <>
                Yearly <span className="text-emerald-600">Save 20%</span>
              </>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
            Membership & Credits
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Membership & Credit Plans
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            New users receive 2,000 one-time trial credits valid for one year. Max supports self-serve upgrades; Enterprise lets you set the growth target while our operations team executes GEO, SEO, and managed social operations with tiered custom pricing by target difficulty.
          </p>
          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRICING_TIERS.map((tier) => {
              const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice
              const note = billingCycle === 'monthly' ? tier.monthlyNote : tier.yearlyNote
              const isPaidPrice = price.startsWith('$')

              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-6 flex flex-col border ${
                    tier.highlighted
                      ? 'bg-white border-violet-500 shadow-[0_0_0_1px_rgba(139,92,246,0.35),0_24px_70px_rgba(124,58,237,0.16)]'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 right-5 rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">
                      Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-500 min-h-[40px]">{tier.tagline}</p>

                  <div className="mt-6 rounded-xl border border-gray-200 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {billingCycle}
                    </div>
                    <div className="mt-2 flex items-end gap-1 text-black">
                      <span className="text-5xl font-bold leading-none">{price}</span>
                      {isPaidPrice && <span className="pb-1 text-sm text-gray-500">/mo</span>}
                    </div>
                    <p className="mt-3 min-h-[36px] text-sm text-gray-500">{note}</p>
                  </div>

                  <p className="mt-4 text-sm font-semibold text-violet-700">{tier.creditLine}</p>
                  <a
                    href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block rounded-lg px-5 py-3 text-center text-sm font-bold transition ${
                      tier.highlighted
                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                        : tier.name === 'Free'
                          ? 'border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {tier.cta}
                  </a>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.included.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {tier.unavailable?.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckIcon muted />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Plan Limits and Service Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Compare credits, projects, prompt capacity, AI engines, and managed operations.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-5 text-sm font-medium text-gray-500 w-1/3">Feature</th>
                  {PRICING_TIERS.map((tier) => (
                    <th key={tier.name} className="py-4 px-5 text-sm font-bold text-black text-center">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-5 text-sm text-gray-700">{row.feature}</td>
                    {row.tiers.map((value, i) => (
                      <td key={i} className="py-4 px-5 text-center">
                        {renderTierValue(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              FAQ
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: 'How are credits used?',
                a: 'Credits measure AI work. Prompt analysis, visibility scans, reports, and content generation consume credits based on complexity.',
              },
              {
                q: 'Can I change plans?',
                a: 'Yes. Upgrades take effect immediately; downgrades apply after the current billing cycle.',
              },
              {
                q: 'Do free credits roll over?',
                a: 'New users receive 2,000 trial credits once. They are valid for one year and do not refresh daily.',
              },
              {
                q: 'Who is Enterprise for?',
                a: 'Enterprise is for teams that want to set growth targets and have our operations team execute GEO, SEO, and social-media optimization end to end, with tiered custom pricing based on delivery complexity.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-6 bg-white">
                <h3 className="text-lg font-bold text-black mb-3">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Choose the Plan That Matches Your Growth Target
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with trial credits, upgrade to self-serve visibility growth, or set an enterprise target and let the HyperMind operations team execute the plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Talk to Sales
            </a>
            <Link
              href="/case-studies"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
