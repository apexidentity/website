import FloatingButtons from '@/components/FloatingButtons'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Founders from '@/components/Founders'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

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
