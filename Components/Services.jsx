import React from 'react'
import { MapPin } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Delivery",
      desc: "Quick and efficient local delivery services within your city.",
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

      {/* Centered Single Card Layout */}
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center flex flex-col items-center"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>

            <h3 className="text-2xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services