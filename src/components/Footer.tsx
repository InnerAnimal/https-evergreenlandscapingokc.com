import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forestGreen py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-4">
          <img
            src="/images/evergreen-logo.svg"
            alt="Evergreen Landscaping Logo"
            className="h-16 w-16 mx-auto"
          />
        </Link>

        {/* Copyright */}
        <p className="text-white text-sm">
          © {new Date().getFullYear()}, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
