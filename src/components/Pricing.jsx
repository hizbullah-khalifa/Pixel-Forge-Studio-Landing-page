import { Check, Sparkles } from 'lucide-react'
import { PRICING } from '../data'
import { SectionHeading, Stagger, StaggerItem } from '../lib/motion'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-slate-50 py-24 sm:py-32 dark:bg-navy-900/40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Simple pricing that scales"
          description="Pick a starting point or let us scope something custom. Every project includes strategy, design, and support."
        />

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-brand-600 via-brand-700 to-navy-800 text-white shadow-2xl shadow-brand-500/30'
                    : 'border border-slate-200 bg-white hover:shadow-2xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-navy-900'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-brand-600 shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display text-lg font-bold ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${plan.featured ? 'text-brand-100' : 'text-slate-500 dark:text-slate-400'}`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span
                      className={`text-sm ${plan.featured ? 'text-brand-200' : 'text-slate-400'}`}
                    >
                      / project
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          plan.featured
                            ? 'bg-white/20 text-white'
                            : 'bg-brand-500/10 text-brand-600 dark:text-brand-300'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${plan.featured ? 'text-brand-50' : 'text-slate-600 dark:text-slate-300'}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-9 rounded-full py-3.5 text-center text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-white text-brand-700 hover:bg-brand-50'
                      : 'border border-slate-300 text-slate-800 hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-300'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Get Custom Quote' : 'Choose ' + plan.name}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          All packages include a 14-day free revision window. Not sure what you
          need?
          <a
            href="#contact"
            className="ml-1 font-semibold text-brand-600 hover:underline dark:text-brand-300"
          >
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  )
}