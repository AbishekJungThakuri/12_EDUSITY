import React from "react"
import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { Program } from "./Components/Programs/Program"
import { Title } from "./Components/Title/Title"
import { About } from "./Components/About/About"
import { Campus } from "./Components/Campus/Campus"
import { Testimonial } from "./Components/Testimonial/Testimonial"

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle = 'Our PROGRAM' title = 'What We Offer' />
     <Program/>
     <About/>
     <Title subtitle = 'Gallery' title = 'Campus Photos' />
     <Campus/>
     <Title subtitle = 'TESTIMONIALS' title = 'What Student says' />
     <Testimonial/>
     </div>
    </>
  )
}

export default App
