import React from 'react'
import{Truck,Package,MapPin,Clock} from "lucide-react"
const Services = () => {
      const services = [
    {
      icon: <Truck />,
      title: "Long Haul Transport",
      desc: "Reliable long-distance trucking across states with safe and on-time delivery.",
    },
    {
      icon: <Package />,
      title: "Freight Delivery",
      desc: "Fast and secure freight transportation for all types of cargo.",
    },
    {
      icon: <MapPin />,
      title: "Local Delivery",
      desc: "Quick and efficient local delivery services within your city or region.",
    },
    {
      icon: <Clock />,
      title: "24/7 Logistics Support",
      desc: "Round-the-clock tracking and support for all shipments.",
    },
  ]
  return (
      <section id="services" className="py-20 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 mt-3">
          We provide reliable trucking and logistics solutions
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>

            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services