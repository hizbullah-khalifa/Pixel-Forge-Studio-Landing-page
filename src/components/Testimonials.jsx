import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { SectionHeading } from '../lib/motion'

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0])

  const paginate = useCallback((dir) => {
    setIndex(([i]) => [(i + dir + TESTIMONIALS.length) % TESTIMONIALS.length, dir])
  }, [])

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000)
    return () => clearInterval(id)
  }, [paginate])

  const { quote, name, role, initials, gradient } = TESTIMONIALS[index]

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-slate-50 py-24 sm:py-32 dark:bg-navy-900/40"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client love"
          title="Don't take our word for it"
        />

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12 dark:border-white/10 dark:bg-navy-900">
          <Quote
            aria-hidden
            className="absolute right-8 top-8 h-16 w-16 text-brand-500/10"
          />
          <div className="relative min-h-44 sm:min-h-36">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="text-xl leading-relaxed text-slate-700 sm:text-2xl dark:text-slate-200">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br text-base font-bold text-white shadow-lg ${gradient}`}
                  >
                    {initials}
                  </span>
                  <div>
                    <p className="font-display font-bold text-slate-900 dark:text-white">
                      {name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {role}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-white/10">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-8 bg-brand-500'
                      : 'w-2.5 bg-slate-300 hover:bg-brand-400/60 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-500/50 hover:text-brand-500 dark:border-white/10 dark:text-slate-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-500/50 hover:text-brand-500 dark:border-white/10 dark:text-slate-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
