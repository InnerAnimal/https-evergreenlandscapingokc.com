import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Evergreen Landscaping OKC | Oklahoma City Property Care',
  description: 'Oklahoma City\'s Premier Year-Round Property Care Partner - 80+ Services, 10+ Cities Served',
  keywords: 'landscaping, lawn care, Oklahoma City, OKC, property maintenance, snow removal, pressure washing',
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

