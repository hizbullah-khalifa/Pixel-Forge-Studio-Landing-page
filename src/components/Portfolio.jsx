import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECT_CATEGORIES, PROJECTS } from '../data'
import { Reveal, SectionHeading } from '../lib/motion'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section
      id="work"
      className="scroll-mt-20 bg-slate-50 py-24 sm:py-32 dark:bg-navy-900/40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Work that does the talking"
          description="A snapshot of recent projects across every service — filter by what you care about."
        />

        <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-brand-500/40 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                layout
                key={project.title}
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-navy-900"
              >
                <div className="relative flex aspect-[4/3] items-end overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative z-10 p-6 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      {project.category}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="absolute right-5 top-5 z-10 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}