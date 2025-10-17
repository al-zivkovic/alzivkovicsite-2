import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

function App() {
  return (
    <BrowserRouter>
    <div className="flex items-center justify-center p-10 pb-20 md:pb-10">
      <div className="flex flex-col items-start w-[700px] gap-10">
        <Hero />
        <Experience />
        <Projects />
      </div>
      <Navbar />
    </div>
    </BrowserRouter>
  )
}

export default App
