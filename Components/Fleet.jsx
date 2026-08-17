import React from 'react'

const Fleet = () => {
  return (
    <section id="fleet" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-black font-bold text-3xl">Our Fleet</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern, well-maintained vehicles equipped with the latest tracking technology
          </p>
        </div>

        {/* Single Fleet Card (Centered) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center">
            
            {/* Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto self-stretch">
              <img
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzgwNzcxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dry Van Trailer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 p-8">
              <h3 className="mb-3 text-black font-bold text-2xl">Dry Van Trailers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standard 53ft enclosed trailers engineered for safe, secure, and weatherproof freight transport across long distances.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Fleet