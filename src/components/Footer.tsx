import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-deepForest text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo showText={false} size="md" className="mb-4" />
            <h3 className="text-xl font-bold mb-4 text-vibrantGreen">Evergreen Landscaping OKC</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Oklahoma City's Premier Year-Round Property Care Partner
                        </p>
                        <p className="text-xs text-gray-400">
                            Licensed • Insured • Bonded
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-vibrantGreen transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-vibrantGreen transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-vibrantGreen transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/location" className="text-gray-300 hover:text-vibrantGreen transition-colors">
                                    Service Area
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Lawn Care & Maintenance</li>
                            <li>Landscape Design</li>
                            <li>Seasonal Services</li>
                            <li>Pressure Washing</li>
                            <li>Snow Removal</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="/contact" className="hover:text-vibrantGreen transition-colors">
                                    Request Free Quote
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="hover:text-vibrantGreen transition-colors">
                                    Call: (123) 456-7890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-vibrantGreen/20 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Evergreen Landscaping OKC. All Rights Reserved.</p>
                    <p className="mt-2">Serving Oklahoma City & Surrounding Areas</p>
                </div>
            </div>
        </footer>
    )
}

