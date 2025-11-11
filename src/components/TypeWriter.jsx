import { useEffect, useState } from 'react';

const TypeWriter = ({ text = '', speed = 50, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Start the typing effect after the delay
  useEffect(() => {
    if (!text || typeof text !== 'string') {
      console.error('TypeWriter: Invalid text prop');
      return;
    }

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      setDisplayText('');
      setCurrentIndex(0);
      setIsTyping(false);
    };
  }, [text, delay]);

  // Handle the typing effect
  useEffect(() => {
    if (!isTyping || !text) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isTyping]);

  // If something goes wrong, just render the text
  if (!text) {
    console.warn('TypeWriter: No text provided');
    return <span className={className}></span>;
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-1 h-8 bg-purple-400 ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

export default TypeWriter;
