import Link from 'next/link'

export const metadata = {
    title: 'Services | Evergrow Landscaping',
    description: 'Professional landscaping services in Oklahoma City. Lawn care, landscaping design, seasonal services, and pressure washing.',
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-forestGreen to-freshGreen text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl opacity-90">
                        Professional landscaping and property care services for Oklahoma City homes and businesses.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Lawn Care & Maintenance */}
                        <div className="bg-gradient-to-br from-freshGreen/10 to-forestGreen/5 rounded-lg p-8 border border-freshGreen/20">
                            <div className="text-4xl mb-4">🌱</div>
                            <h2 className="text-2xl font-bold text-forestGreen mb-4">Lawn Care & Maintenance</h2>
                            <p className="text-gray-700 leading-relaxed">
                                A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season. We handle everything from mowing, trimming, and edging to fertilization and weed control- keeping your grass strong and vibrant. With consistent maintenance and attention to detail, we take the stress out of lawn care so you can simply enjoy a beautiful, polished yard that stands out in your neighborhood.
                            </p>
                        </div>

                        {/* Landscaping & Design */}
                        <div className="bg-gradient-to-br from-forestGreen/5 to-freshGreen/10 rounded-lg p-8 border border-forestGreen/20">
                            <div className="text-4xl mb-4">🌳</div>
                            <h2 className="text-2xl font-bold text-forestGreen mb-4">Landscaping & Design</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your landscape should reflect your style and enhance your property's beauty. Whether you're starting from scratch or refreshing an existing design, we create customized landscaping solutions that bring your vision to life. From plant selection and flower bed design to mulch installation and decorative rock layouts, we focus on details that make your home look its best. Our goal is to create outdoor spaces that not only look amazing, but are functional, sustainable, and easy to maintain.
                            </p>
                        </div>

                        {/* Seasonal Services */}
                        <div className="bg-gradient-to-br from-earthBrown/10 to-freshGreen/10 rounded-lg p-8 border border-earthBrown/20">
                            <div className="text-4xl mb-4">🍂</div>
                            <h2 className="text-2xl font-bold text-forestGreen mb-4">Seasonal Services</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Each season brings new challenges for your landscape- from falling leaves in autumn to overgrown beds in spring. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings. We remove leaves, sticks, and debris; refresh mulch, trim plants; and prepare your lawn and flower beds for the next season. Whether it's a quick spruce-up or a full property cleanup, we make sure your yard looks well cared for year-round so you can relax and enjoy your outdoor space.
                            </p>
                        </div>

                        {/* Pressure Washing */}
                        <div className="bg-gradient-to-br from-freshGreen/10 to-earthBrown/10 rounded-lg p-8 border border-freshGreen/20">
                            <div className="text-4xl mb-4">💧</div>
                            <h2 className="text-2xl font-bold text-forestGreen mb-4">Pressure Washing</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Over time, dirt, mold, algae, and grime can dull your home's appearance and damage outdoor surfaces. Our pressure washing services restore your property's clean, fresh look by safely removing built-up residue from driveways, patios, siding, decks, and walkways. We use professional-grade equipment to achieve a deep clean without harming your surfaces. A simple wash can make your home look newer, brighter, and well cared for- boosting curb appeal and protecting your investment for years to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-forestGreen to-freshGreen py-16 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Contact us today for a free estimate on any of our services.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-forestGreen hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                    >
                        Get Free Quote
                    </Link>
                </div>
            </section>
        </main>
    )
}
