import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepForest via-deepForest to-vibrantGreen text-white">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Bring Life and Beauty to Your Outdoors
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light max-w-3xl">
            Oklahoma City's Premier Year-Round Property Care Partner
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90">
            We're dedicated to helping homeowners and businesses transform their properties into spaces that stand out year-round, with quality, reliability, and care you can trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="bg-sunsetOrange hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-white text-deepForest hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-sm uppercase tracking-wide">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm uppercase tracking-wide">Cities Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-deepForest">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive property care solutions for residential and commercial properties throughout Oklahoma City and surrounding areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Lawn Care */}
            <div className="bg-gradient-to-br from-vibrantGreen/10 to-skyBlue/10 rounded-lg p-8 border border-vibrantGreen/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Lawn Care & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Mowing, trimming, and edging</li>
                <li>• Fertilization and weed control</li>
                <li>• Aeration and dethatching</li>
                <li>• Consistent maintenance programs</li>
              </ul>
              <Link href="/services#lawn-care" className="text-vibrantGreen font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Landscaping */}
            <div className="bg-gradient-to-br from-skyBlue/10 to-vibrantGreen/10 rounded-lg p-8 border border-skyBlue/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Landscaping & Design</h3>
              <p className="text-gray-700 mb-4">
                Your landscape should reflect your style and enhance your property's beauty. We create customized landscaping solutions that bring your vision to life.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Custom design and installation</li>
                <li>• Plant selection and flower beds</li>
                <li>• Mulch and decorative rock</li>
                <li>• Sustainable, low-maintenance designs</li>
              </ul>
              <Link href="/services#landscaping" className="text-skyBlue font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Seasonal Services */}
            <div className="bg-gradient-to-br from-earthBrown/10 to-vibrantGreen/10 rounded-lg p-8 border border-earthBrown/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Seasonal Services</h3>
              <p className="text-gray-700 mb-4">
                Each season brings new challenges for your landscape. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Leaf removal and cleanup</li>
                <li>• Spring and fall preparation</li>
                <li>• Storm debris removal</li>
                <li>• Year-round maintenance</li>
              </ul>
              <Link href="/services#seasonal" className="text-earthBrown font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Pressure Washing */}
            <div className="bg-gradient-to-br from-sunsetOrange/10 to-vibrantGreen/10 rounded-lg p-8 border border-sunsetOrange/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Pressure Washing</h3>
              <p className="text-gray-700 mb-4">
                Over time, dirt, mold, algae, and grime can dull your home's appearance. Our pressure washing services restore your property's clean, fresh look safely and effectively.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Driveways and patios</li>
                <li>• Siding and decks</li>
                <li>• Walkways and parking lots</li>
                <li>• Professional-grade equipment</li>
              </ul>
              <Link href="/services#pressure-washing" className="text-sunsetOrange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-deepForest hover:bg-deepForest/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              View All 80+ Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-deepForest">
            Why Choose Evergreen Landscaping?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed, insured, and bonded for your protection and peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with a satisfaction guarantee on all services.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Free Consultations</h3>
              <p className="text-gray-600">No-obligation estimates and consultations for all projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-skyBlue to-vibrantGreen py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8">
            Get your free quote today and see why Oklahoma City trusts Evergreen Landscaping for all their property care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-sunsetOrange hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-white text-deepForest hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

