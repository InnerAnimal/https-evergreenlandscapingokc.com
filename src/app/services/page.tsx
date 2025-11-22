import Link from 'next/link'

export const metadata = {
    title: 'Services | Evergreen Landscaping',
    description: 'Professional landscaping services in Oklahoma City. Over 50 services including lawn care, landscaping, pressure washing, and more.',
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Title */}
            <section className="py-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-forestGreen border-b-2 border-forestGreen inline-block pb-2">
                        Services
                    </h1>
                </div>
            </section>

            {/* Services List */}
            <section className="py-8 px-4">
                <div className="max-w-2xl mx-auto">
                    <ul className="text-forestGreen space-y-2 text-left">
                        {/* Lawn Services */}
                        <li>Lawn Mowing</li>
                        <li>Weed-Eating</li>
                        <li>Edging</li>
                        <li>Blowing</li>
                        <li>Lawn Dethatching</li>
                        <li>Lawn Aeration</li>
                        <li>Lawn Fertilizing</li>
                        <li>Overseeding</li>
                        <li>Hydroseeding</li>
                        <li>Top Dressing</li>

                        {/* Seasonal/Cleanup */}
                        <li>Leaf Cleanup</li>
                        <li>Leaf Removal</li>
                        <li>Storm Debris Cleanup</li>
                        <li>Bush-Hogging</li>
                        <li>Fence Line Mowing</li>
                        <li>Gravel Road Vegetation Clearing</li>
                        <li>Weed Pulling</li>
                        <li>Bed Cleanups</li>

                        {/* Landscaping */}
                        <li>Watering Services</li>
                        <li>Mulch Installation</li>
                        <li>Rock Installation</li>
                        <li>Landscape Fabric Installation</li>
                        <li>Bed Edging (Stone, Brick, & Steel)</li>
                        <li>Bed Reshaping</li>
                        <li>Flower Bed Installation</li>
                        <li>Planting (Flowers, Shrubs, & Trees)</li>
                        <li>Removing Plants (Shrubs & Trees)</li>

                        {/* Weed & Pest Control */}
                        <li>Pre-Emergent</li>
                        <li>Post-Emergent</li>
                        <li>Pavement Weed Control</li>
                        <li>Fence-Line Vegetation Kill</li>
                        <li>Poison Ivy Removal</li>
                        <li>Fire Ant Treatments</li>
                        <li>Mosquito Spraying</li>
                        <li>Flea & Tick Yard Treatment</li>
                        <li>Perimeter House Insect Barrier</li>
                        <li>Soil Testing</li>

                        {/* Irrigation */}
                        <li>Sprinkler Repair</li>
                        <li>Sprinkler Head Replacement</li>
                        <li>Valve Replacement</li>
                        <li>Controller Installation</li>
                        <li>System Troubleshooting</li>
                        <li>System Winterization</li>
                        <li>Drip Irrigation System</li>
                        <li>Irrigation System</li>
                        <li>Water Pressure Testing</li>
                        <li>Add-On Sprinkler Zones</li>
                        <li>Rain Sensor Installation</li>

                        {/* Washing & Cleaning */}
                        <li>Soft Washing (Roof & Siding)</li>
                        <li>Pressure Washing (Siding, Deck, Fence, Driveway, Sidewalk, Patio, & Parking Lot)</li>
                        <li>Surface Sealing (Driveway, Sidewalk, Patio, & Parking Lot)</li>
                        <li>Gutter Cleaning</li>
                        <li>Roof Cleaning</li>
                        <li>Fence Line Clearing</li>
                        <li>Window Cleaning</li>

                        {/* Seasonal/Special */}
                        <li>Holiday Lights Installation</li>
                        <li>Firewood Delivery</li>
                        <li>Snow Removal</li>
                        <li>De-Icing</li>
                        <li>Salting</li>
                        <li>Outdoor Furniture Installation</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-forestGreen text-lg mb-6">
                        Did you find any services that you want? If so, get started TODAY!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-forestGreen text-white px-8 py-3 rounded font-medium hover:bg-darkGreen transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </main>
    )
}
