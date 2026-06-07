import React from 'react'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Contact from '../Components/Contact'
import Fleet from '../Components/Fleet'
import FadeSection from '../Components/FadeSection'
import About from '../Components/About'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <FadeSection>
        <Hero/>
        </FadeSection>
        <FadeSection>
         <Stats/>
        </FadeSection>
        <FadeSection>
         <Services/>
        </FadeSection>
        <FadeSection>
        <Fleet/>
        </FadeSection>
       <FadeSection>
         <About/>
       </FadeSection>
        <FadeSection>
         <Contact/>
        </FadeSection>
        <FadeSection>
            <Footer/>
        </FadeSection>
 
        
    </div>
  )
}

export default Home