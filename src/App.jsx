import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <BrowserRouter>
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-[700px]">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
