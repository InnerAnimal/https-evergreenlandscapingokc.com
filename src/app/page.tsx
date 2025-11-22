import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forestGreen via-forestGreen to-freshGreen text-white">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Landscaping Services
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light max-w-3xl">
            Oklahoma City's Premier Year-Round Property Care Partner
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90">
            We're dedicated to helping homeowners and businesses transform their properties into spaces that stand out year-round.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-freshGreen hover:bg-green-600 text-forestGreen px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-white text-forestGreen hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-forestGreen">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive property care solutions for residential and commercial properties throughout Oklahoma City and surrounding areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lawn Care & Maintenance */}
            <div className="bg-gradient-to-br from-freshGreen/10 to-forestGreen/5 rounded-lg p-8 border border-freshGreen/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-forestGreen mb-4">Lawn Care & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season. We handle everything from mowing, trimming, and edging to fertilization and weed control- keeping your grass strong and vibrant. With consistent maintenance and attention to detail, we take the stress out of lawn care so you can simply enjoy a beautiful, polished yard that stands out in your neighborhood.
              </p>
            </div>

            {/* Landscaping & Design */}
            <div className="bg-gradient-to-br from-forestGreen/5 to-freshGreen/10 rounded-lg p-8 border border-forestGreen/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold text-forestGreen mb-4">Landscaping & Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Your landscape should reflect your style and enhance your property's beauty. Whether you're starting from scratch or refreshing an existing design, we create customized landscaping solutions that bring your vision to life. From plant selection and flower bed design to mulch installation and decorative rock layouts, we focus on details that make your home look its best. Our goal is to create outdoor spaces that not only look amazing, but are functional, sustainable, and easy to maintain.
              </p>
            </div>

            {/* Seasonal Services */}
            <div className="bg-gradient-to-br from-earthBrown/10 to-freshGreen/10 rounded-lg p-8 border border-earthBrown/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-2xl font-bold text-forestGreen mb-4">Seasonal Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Each season brings new challenges for your landscape- from falling leaves in autumn to overgrown beds in spring. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings. We remove leaves, sticks, and debris; refresh mulch, trim plants; and prepare your lawn and flower beds for the next season. Whether it's a quick spruce-up or a full property cleanup, we make sure your yard looks well cared for year-round so you can relax and enjoy your outdoor space.
              </p>
            </div>

            {/* Pressure Washing */}
            <div className="bg-gradient-to-br from-freshGreen/10 to-earthBrown/10 rounded-lg p-8 border border-freshGreen/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-forestGreen mb-4">Pressure Washing</h3>
              <p className="text-gray-700 leading-relaxed">
                Over time, dirt, mold, algae, and grime can dull your home's appearance and damage outdoor surfaces. Our pressure washing services restore your property's clean, fresh look by safely removing built-up residue from driveways, patios, siding, decks, and walkways. We use professional-grade equipment to achieve a deep clean without harming your surfaces. A simple wash can make your home look newer, brighter, and well cared for- boosting curb appeal and protecting your investment for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-forestGreen">
            Why Choose Evergrow Landscaping?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-forestGreen mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, insured, and bonded for your protection and peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-forestGreen mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with a satisfaction guarantee on all services.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-forestGreen mb-2">Free Consultations</h3>
              <p className="text-gray-600">No-obligation estimates and consultations for all projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-forestGreen to-freshGreen py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8">
            Get your free quote today and see why Oklahoma City trusts Evergrow Landscaping for all their property care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-forestGreen hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-freshGreen/20 hover:bg-freshGreen/30 border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
