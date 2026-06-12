import React from 'react'
import { Truck } from "lucide-react"
const Navbar = () => {
  return (
  <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        
        <div className="flex items-center gap-2">
                  <Truck />
          <span className="font-semibold">JG EXPRESS INC</span>
        </div>

        <div className="hidden md:flex gap-8">
     <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar