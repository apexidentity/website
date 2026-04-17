import Navbar from '@/components/navbar/Navbar.server'
import Footer from '@/components/footer/Footer.server'
import Soon from '@/components/ComingSoon/ComingSoon.server'

export const metadata = {
  title: 'Comming Soon — Apex Identity',
}

export default function SoonPage() {
  return (
    <main>
      <Navbar />
      <Soon />
      <Footer />
    </main>
  )
}