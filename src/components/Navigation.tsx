'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname?.startsWith(href)
    }

    return (
        <nav className="bg-forestGreen text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Logo showText={true} size="md" className="text-white" />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href)
                                        ? 'bg-freshGreen text-forestGreen'
                                        : 'text-gray-300 hover:bg-freshGreen/20 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/contact"
                            className="bg-freshGreen hover:bg-green-600 text-forestGreen px-6 py-2 rounded-md text-sm font-semibold transition-colors"
                        >
                            Free Quote
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-300 hover:bg-freshGreen/20"
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
                <div className="md:hidden bg-forestGreen border-t border-freshGreen/20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.href)
                                        ? 'bg-freshGreen text-forestGreen'
                                        : 'text-gray-300 hover:bg-freshGreen/20 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block bg-freshGreen hover:bg-green-600 text-forestGreen px-3 py-2 rounded-md text-base font-semibold text-center"
                        >
                            Free Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

