import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const dockItems = [
  { label: 'Home', target: '#home' },
  { label: 'Services', target: '#services' },
  { label: 'Our Expertise', target: '#expertise' },
  { label: 'Contact', target: '#contact' },
]

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const sections = ['home', 'services', 'expertise', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(`#${sectionId}`);
          }
        }
      });
    };

    const observers = [];
    
    // Create an observer for each section
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        observer.observe(section);
        observers.push({ observer, element: section });
      }
    });

    // Initial check for the first section
    const firstSection = document.getElementById(sections[0]);
    if (firstSection) {
      const rect = firstSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setActiveSection(`#${sections[0]}`);
      }
    }

    // Cleanup function
    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []); // Empty dependency array means this runs once on mount
  
  // Update URL hash when active section changes
  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, '', activeSection);
    }
  }, [activeSection]);

  const getScale = (index) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(hoveredIndex - index)
    if (distance === 0) return 1.3
    if (distance === 1) return 1.1
    return 1
  }

  const scrollToSection = (target) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-zinc-900/90 backdrop-blur-2xl rounded-full border border-zinc-800 px-8 py-4 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1">
          {dockItems.map((item, index) => {
            const isActive = activeSection === item.target
            const scale = getScale(index)
            
            return (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Text Label */}
                <div
                  className={`
                    px-6 py-2 transition-all duration-300 font-medium whitespace-nowrap
                    ${isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-gray-200'
                    }
                  `}
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s'
                  }}
                >
                  {item.label}
                </div>

                {/* Active indicator with animation */}
                <motion.div 
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-colors ${
                    isActive ? 'bg-purple-400' : 'bg-gray-500/30'
                  }`}
                  initial={false}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    opacity: isActive ? 1 : 0.3,
                    y: isActive ? -2 : 0
                  }}
                  transition={{
                    scale: { duration: 0.3, repeat: isActive ? Infinity : 0, repeatType: 'reverse' },
                    y: { duration: 0.2 },
                    opacity: { duration: 0.1 }
                  }}
                  style={{
                    boxShadow: isActive 
                      ? '0 0 10px 2px rgba(167, 139, 250, 0.7)' 
                      : 'none'
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dock
