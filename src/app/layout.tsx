import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Evergreen Landscaping | Oklahoma City Landscaping & Pressure Washing',
  description: 'Oklahoma City\'s premier landscaping and pressure washing service. Over 50 professional services for homes and businesses.',
  keywords: 'landscaping, lawn care, pressure washing, Oklahoma City, OKC, property maintenance, seasonal cleanup',
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
