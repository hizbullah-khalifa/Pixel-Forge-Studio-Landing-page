import { useState } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../lib/icons'
import { NAV_LINKS, SERVICES } from '../data'

const SOCIALS = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-8 pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Pixel Forge<span className="text-brand-400"> Studio</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs leading-relaxed">
              A full-service digital agency crafting websites, apps, brands,
              films, and campaigns for teams that want to move.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-brand-500/60 hover:text-brand-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="transition hover:text-brand-300">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Stay in the loop
            </h3>
            <p className="mt-5 leading-relaxed">
              One email a month. Studio news, behind-the-scenes, and the best
              of what we're learning.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                You're in! Check your inbox for a hello.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-l-2xl border border-r-0 border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid w-14 shrink-0 place-items-center rounded-r-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white transition hover:from-brand-400 hover:to-brand-500"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Pixel Forge Studio. All rights reserved. By Hizbullah Khalifa</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-brand-300">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-brand-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}