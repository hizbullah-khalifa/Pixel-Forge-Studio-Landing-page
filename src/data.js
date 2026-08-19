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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Nordic Coffee Roasters',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
  },
  {
    title: 'FitTrack Fitness App',
    category: 'Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  },
  {
    title: 'Launch Ad Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop',
  },
  {
    title: 'Product Launch Film',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1492619267744-4bcb6f45f30c?w=600&h=400&fit=crop',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Minimal Brand Identity',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
  },
  {
    title: 'Booking Mobile App',
    category: 'Apps',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
  },
  {
    title: 'Growth & SEO Engine',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
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