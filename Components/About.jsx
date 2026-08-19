import React from 'react'
import { Shield, Award } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Why Choose JG Express inc?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are committed to providing top-tier freight and logistics services across local city. 
            Our reputation is built on reliability, safety, and customer satisfaction.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          
          {/* Safety First */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg text-black font-semibold mb-1">Safety First</h4>
              <p className="text-muted-foreground leading-relaxed">
                All drivers are certified and undergo regular safety training. Our fleet exceeds industry standards.
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Industry Leading */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg text-black font-semibold mb-1">Industry Leading</h4>
              <p className="text-muted-foreground leading-relaxed">
                Award-winning service with numerous accolades for on-time delivery and customer satisfaction.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About