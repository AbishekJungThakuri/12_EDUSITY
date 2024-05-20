import React from "react"
import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { Program } from "./Components/Programs/Program"
import { Title } from "./Components/Title/Title"

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle = 'Our PROGRAM' title = 'What We Offer' />
     <Program/>
     </div>
    </>
  )
}

export default App
