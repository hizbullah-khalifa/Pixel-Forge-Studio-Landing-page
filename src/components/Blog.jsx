import { ArrowUpRight, Calendar } from 'lucide-react'
import { POSTS } from '../data'
import { Reveal, SectionHeading, Stagger, StaggerItem } from '../lib/motion'

export default function Blog() {
  return (
    <section id="insights" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Fresh thinking from the studio"
            description="Guides and opinions on design, tech, and growth — straight from the team."
          />
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 font-semibold text-brand-600 dark:text-brand-300"
            >
              View all articles
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <StaggerItem key={post.title}>
              <a
                href="#contact"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-navy-900"
              >
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${post.gradient}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:22px_22px]"
                  />
                  <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                    <span className="mx-1">·</span>
                    {post.readTime}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-300">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}