import { ArrowRight, Sparkles, Rocket, Gem, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealOnScroll, FadeIn, SlideInFromLeft, ScaleOnHover } from '../components/Animations';
import EnhancedTypeWriter from '../components/EnhancedTypeWriter';
import HeroBackground from '../components/HeroBackground';
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const scrollToSection = (target) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Hero Section */}
      <div className="flex-1 w-full max-w-full flex items-center justify-center px-6 py-20 mx-0 relative z-30">
        <div className="max-w-4xl mx-auto text-center relative w-full">
          {/* Animated Background */}
          <div className="absolute -inset-8 -z-10 overflow-hidden rounded-2xl">
            <HeroBackground />
          </div>
          <div className="relative z-40">
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
              <div className="block whitespace-pre-line">
                <span className="text-white">Simplifying Technology,</span>
                <br />
                <EnhancedTypeWriter
                  text={["Delivering Excellence"]}
                  as="span"
                  typingSpeed={40}
                  deletingSpeed={30}
                  pauseDuration={5000}
                  className="text-blue-400"
                  textColors={['#60a5fa']}
                  cursorCharacter="|"
                  cursorClassName="text-purple-400"
                  startOnVisible={true}
                />
              </div>
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
      </div>
    </section>
  )
}

export default Home
