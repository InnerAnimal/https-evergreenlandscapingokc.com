import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-forestGreen mb-6 leading-tight">
            We bring life and beauty to your outdoors
          </h1>
          <p className="text-lg text-darkText mb-8 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to helping homeowners and businesses transform their properties into spaces that stand out year-round, with quality, reliability, and care you can trust.
          </p>

          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-12">
            <img
              src="/images/hero-lawn.jpg"
              alt="Professional lawn with striped mowing pattern"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Lawn Care & Maintenance */}
          <div className="text-center">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src="/images/lawn-care.jpg"
                alt="Close-up of perfect green lawn with striped pattern"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-forestGreen mb-4">Lawn Care & Maintenance</h2>
            <p className="text-darkText leading-relaxed">
              A healthy, well-kept lawn is the foundation of every great landscape. Our professional lawn care services ensure your yard stays lush, green, and perfectly maintained throughout the season. We handle everything from mowing, trimming, and edging to fertilization and weed control- keeping your grass strong and vibrant. With consistent maintenance and attention to detail, we take the stress out of lawn care so you can simply enjoy a beautiful, polished yard that stands out in your neighborhood.
            </p>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button className="bg-forestGreen text-white px-8 py-3 rounded font-medium hover:bg-darkGreen transition-colors">
              Next
            </button>
          </div>

          {/* Landscaping & Design */}
          <div className="text-center">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src="/images/landscaping.jpg"
                alt="Beautiful home with professional landscaping"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-forestGreen mb-4">Landscaping & Design</h2>
            <p className="text-darkText leading-relaxed">
              Your landscape should reflect your style and enhance your property's beauty. Whether you're starting from scratch or refreshing an existing design, we create customized landscaping solutions that bring your vision to life. From plant selection and flower bed design to mulch installation and decorative rock layouts, we focus on details that make your home look its best. Our goal is to create outdoor spaces that not only look amazing, but are functional, sustainable, and easy to maintain.
            </p>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button className="bg-forestGreen text-white px-8 py-3 rounded font-medium hover:bg-darkGreen transition-colors">
              Next
            </button>
          </div>

          {/* Seasonal Services */}
          <div className="text-center">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src="/images/seasonal.jpg"
                alt="Beautiful autumn tree with red and orange leaves"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-forestGreen mb-4">Seasonal Services</h2>
            <p className="text-darkText leading-relaxed">
              Each season brings new challenges for your landscape- from falling leaves in autumn to overgrown beds in spring. Our seasonal cleanup services keep your property looking clean, healthy, and ready for whatever the weather brings. We remove leaves, sticks, and debris; refresh mulch, trim plants; and prepare your lawn and flower beds for the next season. Whether it's a quick spruce-up or a full property cleanup, we make sure your yard looks well cared for year-round so you can relax and enjoy your outdoor space.
            </p>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button className="bg-forestGreen text-white px-8 py-3 rounded font-medium hover:bg-darkGreen transition-colors">
              Next
            </button>
          </div>

          {/* Pressure Washing */}
          <div className="text-center">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src="/images/pressure-washing.jpg"
                alt="Person pressure washing a garage door"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-forestGreen mb-4">Pressure Washing</h2>
            <p className="text-darkText leading-relaxed">
              Over time, dirt, mold, algae, and grime can dull your home's appearance and damage outdoor surfaces. Our pressure washing services restore your property's clean, fresh look by safely removing built-up residue from driveways, patios, siding, decks, and walkways. We use professional-grade equipment to achieve a deep clean without harming your surfaces. A simple wash can make your home look newer, brighter, and well cared for- boosting curb appeal and protecting your investment for years to come.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
