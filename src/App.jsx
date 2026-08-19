import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <Team />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}