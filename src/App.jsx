import { Email } from "./components/Email"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { MiddleSection } from "./components/MiddleSection"
import { Navbar } from "./components/Navbar"
import { Section } from "./components/Section"
import { Testimonials } from "./components/Testimonials"

function App() {
 
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <HeroSection/>
      <MiddleSection/>
      <Testimonials/>
      <Section/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default App
