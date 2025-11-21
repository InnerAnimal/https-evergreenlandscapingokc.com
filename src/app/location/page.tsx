import Link from 'next/link'

export const metadata = {
  title: 'Service Area | Evergreen Landscaping OKC',
  description: 'Serving Oklahoma City, Moore, Norman, Edmond, and surrounding areas with professional landscaping and property care services.',
}

const serviceAreas = [
  'Oklahoma City, OK',
  'Moore',
  'Norman',
  'Edmond',
  'Newcastle',
  'Mustang',
  'Nichols Hills',
  'Yukon',
  'Bethany',
  'Midwest City',
]

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deepForest to-vibrantGreen text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Service Area</h1>
          <p className="text-xl md:text-2xl mb-4">
            Proudly Serving Oklahoma City & Surrounding Communities
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We bring professional property care services to homeowners and businesses throughout the greater Oklahoma City metropolitan area.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deepForest mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Oklahoma City to surrounding suburbs, we're your trusted property care partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceAreas.map((city, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-vibrantGreen/10 to-skyBlue/10 rounded-lg p-6 border border-vibrantGreen/20 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  <h3 className="text-xl font-bold text-deepForest">{city}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg p-12 mb-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-deepForest mb-2">Service Area Map</h3>
            <p className="text-gray-600 mb-4">
              Interactive map coming soon. Contact us to confirm service availability in your area.
            </p>
            <p className="text-sm text-gray-500">
              We serve a 30-mile radius from Oklahoma City, including all listed cities and surrounding communities.
            </p>
          </div>

          {/* Coverage Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-vibrantGreen/20 rounded-lg p-8">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-deepForest mb-4">Residential Services</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive property care for homeowners throughout our service area, from routine lawn maintenance to complete landscape transformations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Single-family homes</li>
                <li>• Townhomes & condos</li>
                <li>• Estate properties</li>
                <li>• Vacation homes</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-skyBlue/20 rounded-lg p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-deepForest mb-4">Commercial Services</h3>
              <p className="text-gray-700 mb-4">
                Professional property maintenance for businesses, HOAs, and property management companies across the metro area.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Office buildings</li>
                <li>• Retail centers</li>
                <li>• HOA communities</li>
                <li>• Property management</li>
              </ul>
            </div>
          </div>

          {/* Not Sure If We Serve Your Area? */}
          <div className="bg-gradient-to-r from-skyBlue/10 to-vibrantGreen/10 rounded-lg p-8 border border-skyBlue/20 text-center">
            <h3 className="text-2xl font-bold text-deepForest mb-4">
              Not Sure If We Serve Your Area?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Contact us to confirm service availability. We're always expanding our service area to better serve our community.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sunsetOrange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-deepForest mb-12">
            Why Choose a Local Oklahoma City Company?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                We understand Oklahoma's unique climate, soil conditions, and seasonal challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Local teams mean faster response times and better availability for your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-deepForest mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We're invested in our community and committed to building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-skyBlue to-vibrantGreen py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Whether you're in Oklahoma City or a surrounding community, we're here to help transform your property.
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

