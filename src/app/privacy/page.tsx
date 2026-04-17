import Navbar from '@/components/navbar/Navbar.server'
import Footer from '@/components/footer/Footer.server'
import Privacy from '@/components/Privacy/Privacy.server'

export const metadata = {
  title: 'Privacy Policy — Apex Identity',
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <Privacy />
      <Footer />
    </main>
  )
}