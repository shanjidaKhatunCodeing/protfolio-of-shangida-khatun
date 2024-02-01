

import About from "./components/layout/About"
import Banner from "./components/layout/Banner"
import Contact from "./components/layout/Contact"
import Education from "./components/layout/Education"
import Fotter from "./components/layout/Fotter"
import Navbar from "./components/layout/Navbar"
import Project from "./components/layout/Project"
import Service from "./components/layout/Service"
import {Skill}  from "./components/layout/Skill"


function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Project/>
      <Skill/>
      <Education/>
      <Contact/>
      <Fotter/>
    </>
  )
}

export default App
