import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Evergrow Landscaping | Oklahoma City Property Care',
  description: 'Oklahoma City\'s Premier Year-Round Property Care Partner. Professional landscaping, lawn care, seasonal services, and pressure washing.',
  keywords: 'landscaping, lawn care, Oklahoma City, OKC, property maintenance, pressure washing, seasonal cleanup',
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
