import React from 'react';
import { motion } from 'framer-motion';

const Wave = ({ className = '', flipY = false, opacity = 0.1, speed = 20, delay = 0 }) => (
  <motion.div 
    className={`absolute w-full h-full ${className}`}
    initial={{ x: '0%' }}
    animate={{ x: ['0%', '-50%'] }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: 'linear',
      delay,
    }}
  >
    <svg 
      viewBox="0 0 1200 120" 
      className="w-[200%] h-full"
      preserveAspectRatio="none"
      style={{ transform: flipY ? 'scaleY(-1)' : 'none' }}
    >
      <path 
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,52.5,583.67,67.8c69.27,15.5,139.33,24.2,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
        className="fill-current"
        style={{ opacity }}
      />
    </svg>
  </motion.div>
);

const WavyBackground = ({ position = 'top' }) => {
  if (position === 'background') {
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <Wave className="top-0 left-0" opacity={0.03} speed={50} />
        <Wave className="top-0 left-0" opacity={0.02} speed={60} delay={1} flipY />
      </div>
    );
  }

  const isTop = position === 'top';
  const containerClass = isTop ? 'top-0 -mt-24' : 'bottom-0';
  
  return (
    <div className={`absolute left-0 w-full h-24 overflow-hidden ${containerClass} z-10`}>
      <Wave opacity={0.15} speed={25} flipY={!isTop} />
      <Wave opacity={0.1} speed={30} delay={0.5} flipY={!isTop} />
    </div>
  );
};

export default WavyBackground;
