import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

function BrowserMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/90 shadow-2xl shadow-brand-900/20 backdrop-blur dark:bg-navy-800/80">
      <div className="flex items-center gap-2 border-b border-slate-200/80 px-4 py-3 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[11px] text-slate-400 dark:bg-white/5">
          pixelforgestudio.com
        </span>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-3 w-28 rounded-full bg-slate-200 dark:bg-white/15" />
            <div className="h-2.5 w-20 rounded-full bg-slate-100 dark:bg-white/10" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600" />
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-600" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-20 rounded-xl bg-gradient-to-br ${[
                'from-brand-400/80 to-brand-600/80',
                'from-sky-400/80 to-indigo-600/80',
                'from-emerald-400/80 to-teal-600/80',
              ][i]}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 flex-1 rounded-full bg-slate-200 dark:bg-white/15" />
          <div className="h-2.5 flex-1 rounded-full bg-slate-100 dark:bg-white/10" />
          <div className="h-8 w-20 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600" />
        </div>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="w-36 overflow-hidden rounded-[1.6rem] border-4 border-navy-900 bg-white shadow-2xl shadow-brand-900/30 dark:border-navy-700 sm:w-44">
      <div className="flex items-center justify-center bg-navy-900 py-1.5 dark:bg-navy-700">
        <span className="h-1 w-10 rounded-full bg-white/30" />
      </div>
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-14 rounded-full bg-slate-200" />
          <div className="h-5 w-5 rounded-full bg-brand-500" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-14 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300" />
          <div className="h-14 rounded-lg bg-gradient-to-br from-brand-300 to-brand-500" />
          <div className="h-14 rounded-lg bg-gradient-to-br from-sky-300 to-sky-500" />
          <div className="h-14 rounded-lg bg-gradient-to-br from-rose-300 to-rose-500" />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-slate-100 px-2.5 py-2">
          <div className="h-2 w-12 rounded-full bg-slate-300" />
          <div className="h-2 w-2.5 rounded-full bg-brand-500" />
        </div>
      </div>
    </div>
  )
}

function FloatingCard({
  className = '',
  animate = 'animate-float',
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
      className={`absolute z-10 rounded-2xl border border-white/20 bg-white/90 p-3 shadow-xl shadow-brand-900/10 backdrop-blur dark:bg-navy-800/90 ${animate} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-slate-50 dark:from-navy-900 dark:via-navy-950 dark:to-navy-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_top_right,#8b5cf6_0%,transparent_60%),radial-gradient(50rem_35rem_at_bottom_left,#7c3aed_0%,transparent_60%)] opacity-40 dark:opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 animate-pulse rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-40">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-600 shadow-sm backdrop-blur dark:bg-white/5 dark:text-brand-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl dark:text-white"
          >
            We Build Brands That{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-sky-500 bg-clip-text text-transparent">
              Move
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl dark:text-slate-400"
          >
            Pixel Forge Studio is a full-service digital agency crafting
            websites, apps, brands, films, and campaigns that turn attention
            into momentum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:shadow-brand-500/50"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/60 px-7 py-4 text-base font-semibold text-slate-800 backdrop-blur transition hover:border-brand-500/50 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
            >
              <Play className="h-4 w-4 fill-current" />
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {['from-brand-400 to-brand-600', 'from-sky-400 to-indigo-600', 'from-rose-400 to-pink-600', 'from-emerald-400 to-teal-600'].map(
                (g, i) => (
                  <span
                    key={i}
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br text-xs font-bold text-white dark:border-navy-950 ${g}`}
                  >
                    {['MK', 'DR', 'AB', 'LN'][i]}
                  </span>
                ),
              )}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-slate-800 dark:text-white">
                  4.9/5
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Trusted by 50+ ambitious teams
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="animate-float-slow"
            >
              <BrowserMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="absolute -right-4 -bottom-16 animate-float sm:-right-8"
            >
              <PhoneMockup />
            </motion.div>

            <FloatingCard className="-left-3 top-6 sm:-left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    +312%
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Avg. growth in 6 months
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="-bottom-10 left-4 sm:left-8"
              animate="animate-float"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Launch Film Ready
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Shot, edited & delivered in 2 weeks
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  )
}
