import React from 'react'

const Fleet = () => {
  return (
     <section id="fleet" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
      <h2 className="mb-4 text-black font-bold text-2xl">Our Fleet</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Modern, well-maintained vehicles equipped with the latest technology
      </p>
    </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzgwNzcxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Semi truck"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-black font-semibold">Dry Van Trailers</h3>
                <p className="text-muted-foreground">
                  Standard 53ft trailers for general freight. Temperature controlled options available.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzgwNzcxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Refrigerated truck"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-black font-semibold">Refrigerated Units</h3>
                <p className="text-muted-foreground">
                  Climate-controlled trailers for perishable goods and temperature-sensitive cargo.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1592805144716-feeccccef5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzZW1pJTIwdHJ1Y2slMjBoaWdod2F5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzgwNzcxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Flatbed truck"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-black font-semibold">Flatbed Trailers</h3>
                <p className="text-muted-foreground">
                  Specialized hauling for oversized loads, construction materials, and heavy equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Fleet