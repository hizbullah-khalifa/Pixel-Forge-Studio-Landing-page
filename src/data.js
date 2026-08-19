import {
  Code2,
  Smartphone,
  Palette,
  Clapperboard,
  Megaphone,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Insights', href: '#insights' },
]

export const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Blazing-fast, scalable websites and web apps built with modern stacks that convert visitors into customers.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps designed for smooth experiences — from first prototype to app-store launch.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Memorable brand identities, logos, and campaigns that make your business instantly recognizable.',
  },
  {
    icon: Clapperboard,
    title: 'Video Production',
    description:
      'Cinematic brand films, product demos, and social cutdowns that tell your story with impact.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Data-driven SEO, paid ads, and content strategies that grow your reach and revenue on autopilot.',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Web', 'Apps', 'Design', 'Video', 'Marketing']

export const PROJECTS = [
  {
    title: 'Nova Finance Dashboard',
    category: 'Web',
    gradient: 'from-indigo-500 via-violet-500 to-fuchsia-500',
  },
  {
    title: 'Nordic Coffee Roasters',
    category: 'Design',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    title: 'FitTrack Fitness App',
    category: 'Apps',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    title: 'Launch Ad Campaign',
    category: 'Marketing',
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
  },
  {
    title: 'Product Launch Film',
    category: 'Video',
    gradient: 'from-rose-500 via-pink-500 to-purple-600',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    gradient: 'from-violet-500 via-purple-600 to-indigo-800',
  },
  {
    title: 'Minimal Brand Identity',
    category: 'Design',
    gradient: 'from-slate-500 via-gray-600 to-slate-800',
  },
  {
    title: 'Booking Mobile App',
    category: 'Apps',
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
  },
  {
    title: 'Growth & SEO Engine',
    category: 'Marketing',
    gradient: 'from-lime-500 via-green-600 to-emerald-700',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We dig into your goals, audience, and market to map a strategy nobody else will give you.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Moodboards become wireframes, then polished, on-brand visuals you actually love.',
  },
  {
    step: '03',
    title: 'Develop',
    description:
      'Clean code, rigorous testing, and obsessive detail — shipped on time, built to scale.',
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'Launch day is just the start. We measure, optimize, and grow your results together.',
  },
]

export const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 12, suffix: '', label: 'Industry Awards' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Pixel Forge Studio rebuilt our platform from the ground up. Conversions jumped 3x in the first quarter. They are the partner we’d trust with anything.',
    name: 'Maya Kowalski',
    role: 'CEO, Nova Finance',
    initials: 'MK',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    quote:
      'The brand identity they created is the best investment we’ve made. Our DMs, sales, and store traffic have never been healthier.',
    name: 'Daniel Reyes',
    role: 'Founder, Nordic Coffee',
    initials: 'DR',
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    quote:
      'From launch film to the App Store, the whole process felt effortless on our side. Detail-oriented, fast, and genuinely creative.',
    name: 'Aisha Bennett',
    role: 'Product Lead, FitTrack',
    initials: 'AB',
    gradient: 'from-emerald-500 to-cyan-500',
  },
]

export const TEAM = [
  {
    name: 'Jonas Hale',
    role: 'Founder & Creative Director',
    initials: 'JH',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Head of Design',
    initials: 'SM',
    gradient: 'from-sky-500 to-indigo-600',
  },
  {
    name: 'Liam Okafor',
    role: 'Lead Engineer',
    initials: 'LO',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Strategist',
    initials: 'PN',
    gradient: 'from-rose-500 to-pink-600',
  },
]

export const PRICING = [
  {
    name: 'Basic',
    price: '$1,499',
    description: 'Perfect for new brands getting off the ground.',
    features: [
      'Landing page or 5-page website',
      'Logo & brand kit',
      'SEO basics',
      '1 revision round',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$3,999',
    description: 'For businesses ready to scale with a full kit.',
    features: [
      'Full custom website + CMS',
      'Web application or mobile app',
      'Complete brand identity',
      'On-page SEO & analytics',
      '3 revision rounds',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'End-to-end partnerships for complex products.',
    features: [
      'Dedicated product squad',
      'Web, app, video & marketing',
      'Design system & motion',
      'Continuous optimization',
      'Dedicated account manager',
    ],
    featured: false,
  },
]

export const POSTS = [
  {
    tag: 'Web',
    title: 'The 2026 Web Trends Shaping Digital Experiences',
    excerpt:
      'From AI-assisted interfaces to performance-first design, here’s what defines standout websites this year.',
    date: 'Aug 10, 2026',
    readTime: '6 min read',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    tag: 'Marketing',
    title: 'How to Turn Your Raving Fans Into a Growth Engine',
    excerpt:
      'Referral loops, communities, and micro-influencers — building marketing that compounds without ad spend.',
    date: 'Jul 28, 2026',
    readTime: '4 min read',
    gradient: 'from-emerald-500 to-cyan-600',
  },
  {
    tag: 'Design',
    title: 'Designing for Motion: When Brands Feel Alive',
    excerpt:
      'Micro-interactions and scroll-driven animation are more than decoration. They communicate brand personality.',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    gradient: 'from-rose-500 to-pink-600',
  },
]

export const CLIENT_LOGOS = [
  'NOVA',
  'nordic coffee',
  'FITT RACK',
  'Bloom & Co',
  'argo',
  'Lunara',
  'Kitepay',
]