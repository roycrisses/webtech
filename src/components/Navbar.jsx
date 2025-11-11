import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span>Easy Way Technology</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/expertise" className="hover:text-purple-400 transition-colors">
              Our Expertise
            </Link>
            <Link to="#services" className="hover:text-purple-400 transition-colors">
              Services
            </Link>
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
