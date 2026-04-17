import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apex Identity — Where Your Career Reaches Its Peak',
  description: 'Premium career identity services. CV, LinkedIn, Personal Branding, and Career Strategy.',
  icons: {
    icon: '/siteicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}