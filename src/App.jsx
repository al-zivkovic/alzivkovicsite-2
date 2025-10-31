import { BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import AdditionalInfo from "./components/AdditionalInfo"

function App() {
  const components = [
    {
      component: <Experience />,
      id: "experience"
    },
    {
      component: <Projects />,
      id: "projects"
    },
    {
      component: <AdditionalInfo />,
      id: "other-interests"
    },
  ]
  
  return (
    <BrowserRouter>
    <div className="flex items-center justify-center p-10 pb-20 md:pb-10">
      <Navbar />
      <div className="flex flex-col items-start w-[700px]">
        <Hero />
        {components.map((component) => (
          <div key={component.id} className="mt-20">
            {component.component}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App
