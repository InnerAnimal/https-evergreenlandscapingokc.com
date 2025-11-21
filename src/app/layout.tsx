import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evergreen Landscaping OKC | Oklahoma City Property Care',
  description: 'Oklahoma City\'s Premier Year-Round Property Care Partner - 80+ Services, 10+ Cities Served',
  keywords: 'landscaping, lawn care, Oklahoma City, OKC, property maintenance, snow removal, pressure washing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

