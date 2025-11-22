'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <main className="min-h-screen">
            {/* Contact Form Section - Green Background */}
            <section className="bg-forestGreen py-16 px-4">
                <div className="max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-white text-center mb-2">
                        Contact Us Today For A Free Quote
                    </h1>
                    <p className="text-white text-center mb-8 opacity-90">
                        From concept to completion, we make your dream yard a reality
                    </p>

                    {submitted ? (
                        <div className="bg-white rounded-lg p-6 text-center">
                            <div className="text-4xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-forestGreen mb-2">Thank You!</h3>
                            <p className="text-gray-700">
                                We've received your request and will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden"
                                    placeholder="First Name*"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden"
                                    placeholder="Last Name*"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden"
                                    placeholder="Email Address*"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden"
                                    placeholder="Phone Number*"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden"
                                    placeholder="Service*"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-darkGreen hover:bg-black text-white py-3 rounded-lg font-medium transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Support Section - White Background */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-xl font-bold text-forestGreen mb-4">
                        Need To Contact Support?
                    </h2>
                    <a
                        href="mailto:support@evergreenlandscapingokc.com"
                        className="inline-block bg-forestGreen text-white px-8 py-3 rounded font-medium hover:bg-darkGreen transition-colors"
                    >
                        Email
                    </a>
                </div>
            </section>
        </main>
    )
}
