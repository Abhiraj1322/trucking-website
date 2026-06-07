import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react"
const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to move your freight? Contact us today for a free quote
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg text-center shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Call Us</h4>
              <p className="text-muted-foreground">1-800-TITAN-GO</p>
              <p className="text-muted-foreground">(1-800-848-2646)</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Email Us</h4>
              <p className="text-muted-foreground">quotes@titantransport.com</p>
              <p className="text-muted-foreground">support@titantransport.com</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Visit Us</h4>
              <p className="text-muted-foreground">4500 Logistics Way</p>
              <p className="text-muted-foreground">Dallas, TX 75201</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact