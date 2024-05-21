import React, { useState } from "react"
import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { Program } from "./Components/Programs/Program"
import { Title } from "./Components/Title/Title"
import { About } from "./Components/About/About"
import { Campus } from "./Components/Campus/Campus"
import { Testimonial } from "./Components/Testimonial/Testimonial"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

function App() {
 
  const [playState, setPlayState] = useState(false)

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle = 'Our PROGRAM' title = 'What We Offer' />
     <Program/>
     <About setPlayState = {setPlayState} />
     <Title subtitle = 'Gallery' title = 'Campus Photos' />
     <Campus/>
     <Title subtitle = 'TESTIMONIALS' title = 'What Student says' />
     <Testimonial/>
     <Title subtitle = 'COntact Us' title = 'Get in Touch' />
     <Contact/>
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}  />
    </>
  )
}

export default App
