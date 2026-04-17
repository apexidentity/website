import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apex Identity — Where Your Career Reaches Its Peak',
  description: 'Premium career identity services. CV, LinkedIn, Personal Branding, and Career Strategy.',
  icons: {
    icon: 'https://res.cloudinary.com/dncdx1dm9/image/upload/q_auto/f_auto/v1776413344/siteicon_o3ialq.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}