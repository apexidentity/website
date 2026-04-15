import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Terms from '@/components/Terms'

export const metadata = {
  title: 'Terms of Service — Apex Identity',
}

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <Terms />
      <Footer />
    </main>
  )
}