import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Soon from '@/components/Soon'

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