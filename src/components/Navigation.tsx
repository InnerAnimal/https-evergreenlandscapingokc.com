'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
        { href: '/location', label: 'Location' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname?.startsWith(href)
    }

    return (
        <header className="bg-white shadow-sm">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center py-6 px-4">
                <Link href="/" className="flex flex-col items-center">
                    <img
                        src="/images/evergreen-logo.svg"
                        alt="Evergreen Landscaping Logo"
                        className="h-20 w-20 mb-3"
                    />
                    <h1 className="text-2xl font-bold text-forestGreen tracking-wide">
                        EVERGREEN LANDSCAPING
                    </h1>
                    <p className="text-sm text-golden tracking-widest mt-1">
                        LANDSCAPING & PRESSURE WASHING
                    </p>
                </Link>
            </div>

            {/* Navigation Tabs */}
            <nav className="border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`py-4 px-2 text-sm font-medium transition-colors relative ${
                                    isActive(link.href)
                                        ? 'text-forestGreen'
                                        : 'text-gray-600 hover:text-forestGreen'
                                }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forestGreen"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex justify-center py-2">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-forestGreen"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-3 px-4 text-center text-sm font-medium border-b border-gray-100 ${
                                        isActive(link.href)
                                            ? 'text-forestGreen bg-gray-50'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
