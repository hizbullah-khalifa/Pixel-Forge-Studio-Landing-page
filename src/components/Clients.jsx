import { CLIENT_LOGOS } from '../data'

export default function Clients() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS]
  return (
    <section className="border-y border-slate-200 bg-white py-10 dark:border-white/5 dark:bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          Powering teams & brands around the world
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {logos.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-bold tracking-tight text-slate-300 transition hover:text-brand-500 dark:text-slate-600 dark:hover:text-brand-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
