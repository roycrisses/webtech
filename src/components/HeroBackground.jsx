import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import WavyBackground from './WavyBackground';

const HeroBackground = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [shootingStars, setShootingStars] = useState([]);

  // Generate shooting stars
  const createShootingStar = () => {
    if (dimensions.width === 0) return null;
    
    // Random start position (top of the container)
    const startX = Math.random() * dimensions.width;
    const startY = -20;
    
    // Random end position (somewhere in the lower half)
    const endX = startX + (Math.random() * 200 - 100);
    const endY = dimensions.height * (0.3 + Math.random() * 0.7);
    
    // Random size and opacity
    const size = 8 + Math.random() * 12; // 8-20px
    const opacity = 0.8 + Math.random() * 0.2; // 0.8-1.0
    
    // Random duration between 1-2 seconds
    const duration = 1 + Math.random();
    
    // Create trail effect
    const trailLength = 10; // Increased trail length to 10
    const trail = Array.from({ length: trailLength }).map((_, i) => ({
      id: `trail-${Date.now()}-${i}`,
      size: size * (1 - (i / trailLength) * 0.7),
      opacity: opacity * (1 - (i / trailLength) * 0.8),
    }));
    
    return {
      id: `star-${Date.now()}`,
      startX,
      startY,
      endX,
      endY,
      size,
      opacity,
      duration,
      trail,
      delay: Math.random() * 2, // Random delay before starting
    };
  };

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Create shooting stars at intervals
  useEffect(() => {
    if (dimensions.width === 0) return;
    
    const interval = setInterval(() => {
      setShootingStars(prev => {
        // Remove old stars
        const newStars = prev.filter(star => 
          Date.now() - parseInt(star.id.split('-')[1]) < 5000
        );
        // Add new star
        return [...newStars, createShootingStar()];
      });
    }, 500); // New star every 0.5 seconds
    
    return () => clearInterval(interval);
  }, [dimensions]);

  // Using WavyBackground component for waves

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div key={star?.id} className="absolute inset-0">
          {star?.trail.map((trail, i) => (
            <motion.div
              key={`${star.id}-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${trail.size}px`,
                height: `${trail.size}px`,
                left: star.startX,
                top: star.startY,
                opacity: 0,
                boxShadow: '0 0 12px 2px rgba(167, 139, 250, 0.9)',
              }}
              animate={{
                x: [0, star.endX - star.startX],
                y: [0, star.endY - star.startY],
                opacity: [0, trail.opacity, 0],
              }}
              transition={{
                x: {
                  duration: star.duration,
                  ease: 'linear',
                  delay: star.delay + (i * 0.03),
                },
                y: {
                  duration: star.duration,
                  ease: 'linear',
                  delay: star.delay + (i * 0.03),
                },
                opacity: {
                  duration: star.duration * 0.2,
                  times: [0, 0.1, 1],
                  delay: star.delay + (i * 0.03),
                },
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Wavy background with purple/blue tint */}
      <div className="absolute inset-0 overflow-hidden">
        <WavyBackground position="background" />
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default HeroBackground;
