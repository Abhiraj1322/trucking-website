import React from 'react'
import  {Truck} from "lucide-react"
const Footer = () => {
  return (
<footer className="bg-primary text-primary-foreground py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <span>© 2026 JG EXPRESS INC. All rights reserved.</span>
            </div>
         <div className="flex gap-6">
   <a href="#about" className="hover:opacity-80 transition-opacity">
    Home
  </a>
  <a href="#about" className="hover:opacity-80 transition-opacity">
    About Us
  </a>
  <a href="#services" className="hover:opacity-80 transition-opacity">
    Services
  </a>
  <a href="#contact" className="hover:opacity-80 transition-opacity">
    Contact
  </a>
</div>
          </div>
        </div>
      </footer>
  )
}

export default Footer