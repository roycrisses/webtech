import Dock from './components/Dock'
import Home from './sections/Home'
import Services from './sections/Services'
import OurExpertise from './sections/OurExpertise'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <Home />
      <Services />
      <OurExpertise />
      <Contact />
      <Dock />
    </div>
  )
}

export default App
