import Link from 'next/link'

export const metadata = {
  title: 'Services | Evergreen Landscaping OKC',
  description: '80+ professional landscaping and property care services in Oklahoma City. Lawn care, design, seasonal services, pressure washing, and more.',
}

const serviceCategories = [
  {
    id: 'lawn-care',
    title: 'Lawn Care & Maintenance',
    icon: '🌱',
    description: 'Complete lawn care services to keep your yard healthy and beautiful year-round.',
    services: [
      'Lawn Mowing',
      'Weed-Eating',
      'Edging',
      'Blowing',
      'Lawn Dethatching',
      'Lawn Aeration',
      'Lawn Fertilizing',
      'Overseeding',
      'Hydroseeding',
      'Top Dressing',
      'Watering Services',
    ],
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Design',
    icon: '🌳',
    description: 'Custom landscape design and installation to transform your outdoor space.',
    services: [
      'Bed Cleanups',
      'Mulch Installation',
      'Rock Installation',
      'Landscape Fabric Installation',
      'Bed Edging (Stone, Brick, & Steel)',
      'Bed Reshaping',
      'Flower Bed Installation',
      'Planting (Flowers, Shrubs, & Trees)',
      'Removing Plants (Shrubs & Trees)',
      'Raised Garden Beds',
      'Vegetable Garden Installation',
      'Garden Soil Improvement',
      'Compost Installation',
      'Landscape Lighting Installation',
    ],
  },
  {
    id: 'seasonal',
    title: 'Seasonal & Cleanup Services',
    icon: '🍂',
    description: 'Seasonal maintenance and cleanup to keep your property looking its best.',
    services: [
      'Leaf Cleanup',
      'Leaf Removal',
      'Storm Debris Cleanup',
      'Bush-Hogging',
      'Fence Line Mowing',
      'Gravel Road Vegetation Clearing',
      'Weed Pulling',
      'Small Tree Trimming',
      'Stump Grinding',
      'Hedge Shearing',
      'Shrub Shaping',
    ],
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping & Outdoor Living',
    icon: '🏗️',
    description: 'Create beautiful outdoor living spaces with professional hardscaping services.',
    services: [
      'Patios (Paver & Concrete)',
      'Walkways (Stone & Brick)',
      'Paver Driveways',
      'Retaining Walls (Stone, Block, & Boulder)',
      'Fire Pits',
      'Fences (Wooden, Vinyl, & Steel)',
      'Gravel Installation',
      'Drains (French & Trench)',
      'Grading',
      'Sod Installation',
      'Path Lighting',
      'Fountain Installation',
      'Waterfall Features',
      'Koi Ponds',
    ],
  },
  {
    id: 'pest-control',
    title: 'Pest & Weed Control',
    icon: '🐛',
    description: 'Professional pest and weed control to protect your property.',
    services: [
      'Pre-Emergent',
      'Post-Emergent',
      'Pavement Weed Control',
      'Fence-Line Vegetation Kill',
      'Poison Ivy Removal',
      'Fire Ant Treatments',
      'Mosquito Spraying',
      'Flea & Tick Yard Treatment',
      'Perimeter House Insect Barrier',
      'Soil Testing',
    ],
  },
  {
    id: 'irrigation',
    title: 'Irrigation & Drainage',
    icon: '💧',
    description: 'Complete irrigation system installation, repair, and maintenance.',
    services: [
      'Sprinkler Repair',
      'Sprinkler Head Replacement',
      'Valve Replacement',
      'Controller Installation',
      'System Troubleshooting',
      'System Winterization',
      'Drip Irrigation System',
      'Irrigation System',
      'Water Pressure Testing',
      'Add-On Sprinkler Zones',
      'Rain Sensor Installation',
    ],
  },
  {
    id: 'pressure-washing',
    title: 'Exterior Cleaning & Maintenance',
    icon: '🧹',
    description: 'Professional cleaning services to restore your property\'s appearance.',
    services: [
      'Soft Washing (Roof & Siding)',
      'Pressure Washing (Siding, Deck, Fence, Driveway, Sidewalk, Patio, & Parking Lot)',
      'Surface Sealing (Driveway, Sidewalk, Patio, & Parking Lot)',
      'Gutter Cleaning',
      'Roof Cleaning',
      'Fence Line Clearing',
      'Window Cleaning',
    ],
  },
  {
    id: 'winter',
    title: 'Winter & Specialty Services',
    icon: '❄️',
    description: 'Year-round specialty services including winter maintenance and holiday decorations.',
    services: [
      'Snow Removal',
      'De-Icing',
      'Salting',
      'Holiday Lights Installation',
      'Firewood Delivery',
      'Outdoor Furniture Installation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-deepForest to-vibrantGreen text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Comprehensive Property Care Solutions
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Over 80 professional services to keep your property looking its best year-round. From lawn care to hardscaping, we've got you covered.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-deepForest mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 text-lg">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {category.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-vibrantGreen/5 to-skyBlue/5 border border-vibrantGreen/20 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-vibrantGreen">✓</span>
                        <span className="text-deepForest font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-sunsetOrange text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offer: 25% OFF</h2>
          <p className="text-xl mb-6">
            Sign up for roof maintenance services between November 17th-30th to get 25% off - ALL season long!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-sunsetOrange hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-deepForest mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Did you find services that interest you? Contact us today for a free quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-sunsetOrange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-deepForest hover:bg-deepForest/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

