import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data'
import { SectionHeading, Stagger, StaggerItem } from '../lib/motion'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your brand needs to move"
          description="One partner, five crafts. We pair strategy with craft to ship work that looks incredible and performs even better."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <StaggerItem
              key={service.title}
              className={
                i === 0
                  ? 'lg:col-span-2'
                  : i === 3
                    ? 'sm:col-span-2 lg:col-span-1'
                    : ''
              }
            >
              <a
                href="#contact"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-navy-900"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-500/15 to-sky-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div>
                  <span className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-brand-600/15 text-brand-600 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white dark:text-brand-300">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-500 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-300">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
