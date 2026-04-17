import Navbar from '@/components/navbar/Navbar.server'
import Footer from '@/components/footer/Footer.server'
import Terms from '@/components/Terms/Terms.server'

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