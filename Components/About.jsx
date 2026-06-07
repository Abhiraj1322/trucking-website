import React from 'react'
import{Shield ,TrendingUp,Award} from "lucide-react"
const About = () => {
  return (
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-black font-semibold">Why Choose Titan Transport?</h2>
              <p className="text-muted-foreground mb-8">
                Since 1999, we've been committed to providing exceptional transportation services across North America.
                Our reputation is built on reliability, safety, and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-black font-semibold">Safety First</h4>
                    <p className="text-muted-foreground">
                      All drivers are certified and undergo regular safety training. Our fleet exceeds industry standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-black font-semibold ">Industry Leading</h4>
                    <p className="text-muted-foreground">
                      Award-winning service with numerous accolades for on-time delivery and customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1  text-black font-semibold">Advanced Technology</h4>
                    <p className="text-muted-foreground">
                      Real-time tracking, automated updates, and digital documentation for complete transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1721937127582-ed331de95a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBjYXJnb3xlbnwxfHx8fDE3ODA3NzEyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Warehouse with cargo"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About