import React from 'react'

const Stats = () => {
  return (
  <section className="bg-primary text-primary-foreground py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2">15+</div>
              <div className="opacity-90">Years Experience</div>
            </div>
          
            <div>
              <div className="mb-2">98%</div>
              <div className="opacity-90">On-Time Delivery</div>
            </div>
            <div>
              <div className="mb-2">50K+</div>
              <div className="opacity-90">Loads Delivered</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Stats