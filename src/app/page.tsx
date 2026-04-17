import FloatingButtons from '@/components/FloatingButtons/FloatingButtons.server'
import Navbar from '@/components/navbar/Navbar.server'
import Hero from '@/components/hero/Hero.server'
import About from '@/components/about/About.server'
import Founders from '@/components/founders/Founders.server'
import Services from '@/components/services/Services.server'
import Packages from '@/components/packages/Packages.server'
import Portfolio from '@/components/portfolio/Portfolio.server'
import Testimonials from '@/components/testimonials/Testimonials.server'
import Footer from '@/components/footer/Footer.server'

export default function Home() {
  return (
    <main>
      <FloatingButtons />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Portfolio />
      <Testimonials />
      <Founders />
      <Footer />
    </main>
  )
}
