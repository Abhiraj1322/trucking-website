import React from 'react'

const Hero = () => {
  return (

   <section className="relative h-[600px] flex items-center justify-center">
      
      <img
        src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-4 animate-slide-in">
          Reliable Freight Solutions Across America
        </h1>

        <p className="mb-6">
          Over 25 years of excellence in logistics
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded">
            Get a Quote
          </button>
          <button className="border px-6 py-3 rounded">
            Track Shipment
          </button>
        </div>
      </div>

    </section>


   
  )
}

export default Hero