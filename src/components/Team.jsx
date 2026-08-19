import { ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from '../lib/icons'
import { TEAM } from '../data'
import { SectionHeading, Stagger, StaggerItem } from '../lib/motion'

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet the team"
          title="The minds behind the pixels"
          description="Designers, engineers, and strategists obsessed with the details that make work unforgettable."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-navy-900">
                <div
                  className={`relative flex aspect-square place-items-end bg-gradient-to-br p-5 ${member.gradient}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"
                  />
                  <div className="absolute inset-6 grid place-items-center">
                    <span className="grid h-24 w-24 place-items-center rounded-full border-2 border-white/60 bg-white/15 text-3xl font-bold text-white backdrop-blur">
                      {member.initials}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`LinkedIn — ${member.name}`}
                    className="absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-white/90 text-navy-800 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-navy-800 dark:text-white"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    {member.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-brand-600 transition hover:gap-3 dark:text-brand-300"
          >
            Want to work with us?
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}