import Link from 'next/link'

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forestGreen to-freshGreen text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Evergrow Landscaping</h1>
          <p className="text-xl opacity-90">
            Oklahoma City's trusted partner for professional landscaping and property care services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-forestGreen mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Evergrow Landscaping was founded with a simple mission: to help homeowners and businesses in Oklahoma City create and maintain beautiful outdoor spaces they can be proud of. We believe that every property deserves professional care and attention to detail.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our team of experienced professionals is dedicated to delivering exceptional results on every project, whether it's routine lawn maintenance or a complete landscape transformation. We take pride in our work and stand behind every service we provide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a locally owned and operated business, we understand the unique challenges that Oklahoma's climate presents. From scorching summers to unpredictable weather patterns, we have the expertise to keep your property looking its best year-round.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-forestGreen mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-forestGreen mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never cut corners. Every job is completed to the highest standards of quality and craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-forestGreen mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and deliver results that exceed expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-forestGreen mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, every time. You can count on us to be there when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-forestGreen mb-8">Why Choose Evergrow?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-freshGreen text-2xl mr-3">✓</span>
              <div>
                <strong className="text-forestGreen">Licensed & Insured</strong>
                <p className="text-gray-600">Fully licensed, insured, and bonded for your protection.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-freshGreen text-2xl mr-3">✓</span>
              <div>
                <strong className="text-forestGreen">Experienced Team</strong>
                <p className="text-gray-600">Our skilled professionals bring years of landscaping expertise.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-freshGreen text-2xl mr-3">✓</span>
              <div>
                <strong className="text-forestGreen">Free Estimates</strong>
                <p className="text-gray-600">No-obligation quotes for all projects, big or small.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-freshGreen text-2xl mr-3">✓</span>
              <div>
                <strong className="text-forestGreen">Satisfaction Guaranteed</strong>
                <p className="text-gray-600">We're not happy until you're happy with the results.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-forestGreen to-freshGreen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation and estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-forestGreen hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
