export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-deepForest via-deepForest to-vibrantGreen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Evergreen Landscaping OKC
        </h1>
        <p className="text-xl md:text-3xl mb-4 font-light">
          Oklahoma City's Premier Year-Round Property Care Partner
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90">
          80+ Services • 10+ Cities Served • Licensed, Insured, Bonded
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#quote"
            className="bg-sunsetOrange hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Get Free Quote
          </a>
          <a
            href="#services"
            className="bg-white text-deepForest hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Our Services
          </a>
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
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm uppercase tracking-wide">Available</div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section id="services" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-deepForest">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Lawn Care & Maintenance',
              'Landscape Design & Installation',
              'Seasonal & Specialty Services',
              'Hardscaping & Outdoor Living',
              'Irrigation & Drainage',
              'Exterior Cleaning & Maintenance',
              'Snow & Ice Management',
              'Commercial Property Services'
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-vibrantGreen/10 to-skyBlue/10 rounded-lg p-6 border border-vibrantGreen/20 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-deepForest mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="bg-gradient-to-r from-skyBlue to-vibrantGreen py-20 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Quote Today</h2>
          <p className="text-xl mb-8">
            Ready to transform your property? Contact us for a free consultation.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-block bg-sunsetOrange hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deepForest text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Evergreen Landscaping OKC</p>
          <p className="text-sm opacity-75">
            Licensed • Insured • Bonded • Serving Oklahoma City & Surrounding Areas
          </p>
        </div>
      </footer>
    </main>
  )
}

