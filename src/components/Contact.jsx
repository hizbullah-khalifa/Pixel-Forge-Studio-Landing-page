import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { SERVICES } from '../data'
import { Reveal } from '../lib/motion'

const inputClasses =
  'w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1400)
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_35rem_at_top_left,#7c3aed_0%,transparent_65%)] opacity-70"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
              Let's talk
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to build something{' '}
              <span className="bg-gradient-to-r from-brand-300 via-sky-300 to-white bg-clip-text text-transparent">
                that moves?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-400">
              Tell us where you want to go. We'll reply within 24 hours with a
              free strategy call and a no-strings proposal.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 space-y-5">
            {[
              {
                icon: Mail,
                label: 'Email us',
                value: 'hello@pixelforgestudio.com',
              },
              { icon: Phone, label: 'Call us', value: '+1 (555) 012-3456' },
              {
                icon: MapPin,
                label: 'Visit us',
                value: '128 Creative Ave, Brooklyn, NY',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brand-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {item.label}
                  </p>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-brand-950/40 backdrop-blur sm:p-10">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-96 flex-col items-center justify-center text-center"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-xl shadow-emerald-500/30">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Message sent!
                </h3>
                <p className="mt-3 max-w-sm text-slate-400">
                  Thanks, {form.name || 'friend'}. We'll get back to you within
                  24 hours to schedule your free strategy call.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', service: '', message: '' })
                  }}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-300"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Smith"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                    Service needed
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={update('service')}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title} className="text-slate-800">
                        {s.title}
                      </option>
                    ))}
                    <option value="Other" className="text-slate-800">
                      Something else
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your project, timeline, and budget…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:shadow-brand-500/50 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      Get a Free Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}