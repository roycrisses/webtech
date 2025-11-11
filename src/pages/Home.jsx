import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse">
            <span className="text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Simplifying Technology, Delivering Excellence
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            The web, made fluid at
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              your fingertips.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We transform your ideas into digital reality with cutting-edge technology and innovative solutions
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Easy Way Technology?</h2>
            <p className="text-xl text-gray-400">We deliver excellence in every project</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-400">Quick turnaround times without compromising quality</p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-400">Exceptional results using the latest technologies</p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">Always here to help you succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-4xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
