import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Privacy from '@/components/Privacy'

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