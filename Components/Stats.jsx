import React from 'react'

const Stats = () => {
  return (
    <section className="bg-primary text-primary-foreground py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="opacity-90 text-sm md:text-base">Years Experience</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="opacity-90 text-sm md:text-base">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats