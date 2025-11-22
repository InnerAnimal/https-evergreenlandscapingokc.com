'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const serviceOptions = [
        'Lawn Care & Maintenance',
        'Landscaping & Design',
        'Seasonal Services',
        'Pressure Washing',
        'Other',
    ]

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-forestGreen to-freshGreen text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl mb-4">
                        Get Your Free Quote Today
                    </p>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        From concept to completion, we make your dream yard a reality. Get started with a free consultation today.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white border-2 border-freshGreen/20 rounded-lg p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-forestGreen mb-6">Request Your Free Quote</h2>

                                {submitted ? (
                                    <div className="bg-freshGreen/10 border-2 border-freshGreen rounded-lg p-6 text-center">
                                        <div className="text-4xl mb-4">✓</div>
                                        <h3 className="text-2xl font-bold text-forestGreen mb-2">Thank You!</h3>
                                        <p className="text-gray-700">
                                            We've received your request and will contact you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-semibold text-forestGreen mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-semibold text-forestGreen mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-forestGreen mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-forestGreen mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                                placeholder="(123) 456-7890"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-forestGreen mb-2">
                                                Service Interested In *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                            >
                                                <option value="">Select a service...</option>
                                                {serviceOptions.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-forestGreen mb-2">
                                                Message (Optional)
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-freshGreen focus:outline-none transition-colors"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-freshGreen hover:bg-green-600 text-forestGreen px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                                        >
                                            Send Request
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-freshGreen/10 to-forestGreen/5 rounded-lg p-6 border border-freshGreen/20">
                                <h3 className="text-xl font-bold text-forestGreen mb-4">Get In Touch</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                                        <a href="tel:+1234567890" className="text-forestGreen hover:text-freshGreen font-semibold">
                                            (123) 456-7890
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                                        <a href="mailto:info@evergrowlandscaping.com" className="text-forestGreen hover:text-freshGreen font-semibold">
                                            info@evergrowlandscaping.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600 mb-1">Service Area</p>
                                        <p className="text-forestGreen">
                                            Oklahoma City & Surrounding Areas
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-forestGreen/5 to-freshGreen/10 rounded-lg p-6 border border-forestGreen/20">
                                <h3 className="text-xl font-bold text-forestGreen mb-4">Why Choose Us?</h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-freshGreen font-bold">✓</span>
                                        <span>Free consultations & estimates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-freshGreen font-bold">✓</span>
                                        <span>Licensed, insured & bonded</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-freshGreen font-bold">✓</span>
                                        <span>Professional service</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-freshGreen font-bold">✓</span>
                                        <span>Satisfaction guaranteed</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-freshGreen/10 rounded-lg p-6 border border-freshGreen/20">
                                <h3 className="text-xl font-bold text-forestGreen mb-2">Need Immediate Help?</h3>
                                <p className="text-sm text-gray-700 mb-4">
                                    For urgent matters, please call us directly.
                                </p>
                                <a
                                    href="tel:+1234567890"
                                    className="block bg-forestGreen hover:bg-green-800 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
