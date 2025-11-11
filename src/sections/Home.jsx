import { ArrowRight, Sparkles, Rocket, Gem, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealOnScroll, FadeIn, SlideInFromLeft, ScaleOnHover } from '../components/Animations';
import EnhancedTypeWriter from '../components/EnhancedTypeWriter';

const Home = () => {
  const scrollToSection = (target) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen w-full flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 w-full max-w-full flex items-center justify-center px-6 py-20 mx-0">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <div className="inline-block mb-8 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              <span className="text-sm flex items-center gap-2 text-purple-300">
                <motion.span 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.span>
                EASYWAY TECHNOLOGIES
              </span>
            </div>
          </RevealOnScroll>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <EnhancedTypeWriter
              text={["Simplifying Technology,\nDelivering Excellence"]}
              as="div"
              typingSpeed={40}
              deletingSpeed={30}
              pauseDuration={5000}
              className="block whitespace-pre-line"
              textColors={['#ffffff']}
              cursorCharacter="|"
              cursorClassName="text-purple-400"
              startOnVisible={true}
            />
          </h1>
          
          <RevealOnScroll delay={0.4}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              We craft beautiful, responsive websites and applications tailored to your business needs.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4">
              <ScaleOnHover>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScaleOnHover>
              <ScaleOnHover>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="px-8 py-3 bg-transparent border border-zinc-700 hover:bg-zinc-800/50 rounded-lg font-medium transition-all duration-300"
                >
                  Our Services
                </button>
              </ScaleOnHover>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose <span className="text-purple-400">Easy Way</span>
            </h2>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.2} className="h-full">
              <ScaleOnHover>
                <div className="h-full p-8 bg-purple-950/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
                  <p className="text-gray-400">Quick turnaround times without compromising quality</p>
                </div>
              </ScaleOnHover>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4} className="h-full">
              <ScaleOnHover>
                <div className="h-full p-8 bg-blue-950/30 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Gem className="w-12 h-12 text-blue-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
                  <p className="text-gray-400">Exceptional results using the latest technologies</p>
                </div>
              </ScaleOnHover>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6} className="h-full">
              <ScaleOnHover>
                <div className="h-full p-8 bg-purple-950/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Headphones className="w-12 h-12 text-purple-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
                  <p className="text-gray-400">Always here to help you succeed</p>
                </div>
              </ScaleOnHover>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
