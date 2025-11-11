import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const isTouchDevice = 'ontouchstart' in window || 
                       (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
                       (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let animationId;
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let isVisible = true;

    // Initialize cursor positions
    const init = () => {
      mouseX = window.innerWidth / 2;
      mouseY = window.innerHeight / 2;
      followerX = mouseX;
      followerY = mouseY;
      updateCursorPosition();
    };

    // Update cursor position with requestAnimationFrame
    const updateCursorPosition = () => {
      if (!isVisible) return;
      
      // Smooth the follower movement
      followerX += (mouseX - followerX) * 0.2;
      followerY += (mouseY - followerY) * 0.2;

      // Update cursor positions
      cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      follower.style.transform = `translate3d(${followerX - 18}px, ${followerY - 18}px, 0)`;
      
      animationId = requestAnimationFrame(updateCursorPosition);
    };

    // Handle mouse movement
    const onMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Handle window resize
    const onResize = () => {
      if (mouseX > window.innerWidth) mouseX = window.innerWidth;
      if (mouseY > window.innerHeight) mouseY = window.innerHeight;
    };

    // Handle visibility changes
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
      } else {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
      }
    };

    // Initialize
    init();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start animation
    animationId = requestAnimationFrame(updateCursorPosition);

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
      isVisible = false;
    };

    const handleMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(66, 204, 209, 0.95)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: '0',
          top: '0',
          willChange: 'transform',
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'opacity 0.15s ease'
        }}
      />
      
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          left: '0',
          top: '0',
          willChange: 'transform',
          transform: 'translate3d(-50%, -50%, 0)',
          transition: 'opacity 0.15s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;