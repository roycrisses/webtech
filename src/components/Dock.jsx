import { useState } from 'react'
import { motion } from 'framer-motion'

const dockItems = [
  { label: 'Home', target: '#home' },
  { label: 'Services', target: '#services' },
  { label: 'Our Expertise', target: '#expertise' },
  { label: 'Contact', target: '#contact' },
]

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Removed active section indication

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
            const scale = getScale(index);
            
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
                  className="px-6 py-2 transition-all duration-300 font-medium whitespace-nowrap text-gray-400 hover:text-gray-200"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s'
                  }}
                >
                  {item.label}
                </div>

                {/* Removed active indicator */}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dock
