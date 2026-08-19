import { PROCESS_STEPS } from '../data'
import { SectionHeading, Stagger, StaggerItem } from '../lib/motion'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum"
          description="No guesswork, no surprises. A proven path from first call to launch and beyond."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
          />
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.step} className="relative">
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
                  <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-brand-500/25 bg-white text-lg font-bold text-brand-600 shadow-lg shadow-brand-500/10 dark:bg-navy-900 dark:text-brand-300">
                    {step.step}
                    <span
                      aria-hidden
                      className={`absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-brand-500/20 to-sky-500/20 blur-lg ${
                        i % 2 ? 'opacity-70' : 'opacity-100'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
