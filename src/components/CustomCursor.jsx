import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const isTouchDevice =
    'ontouchstart' in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let cursorScale = 1;
    let targetScale = 1;
    let animationId;

    // linear interpolation helper
    const lerp = (a, b, n) => a + (b - a) * n;

    const update = () => {
      // Smoothly follow the mouse
      followerX = lerp(followerX, mouseX, 0.12);
      followerY = lerp(followerY, mouseY, 0.12);

      // Smooth cursor movement
      const cursorX = lerp(mouseX, followerX, 0.35);
      const cursorY = lerp(mouseY, followerY, 0.35);

      // Smooth scale transition
      cursorScale = lerp(cursorScale, targetScale, 0.15);

      // Apply transforms
      cursor.style.transform = `translate3d(${cursorX - 4}px, ${cursorY - 4}px, 0) scale(${cursorScale})`;
      follower.style.transform = `translate3d(${followerX - 18}px, ${followerY - 18}px, 0)`;

      animationId = requestAnimationFrame(update);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnter = () => {
      targetScale = 1.4;
    };

    const onMouseLeave = () => {
      targetScale = 1;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(66, 204, 209, 1)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: 0,
          top: 0,
          willChange: 'transform',
          mixBlendMode: 'difference',
          transition: 'transform 0.2s ease-out',
        }}
      />
      {/* Outer ring */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          border: '2px solid rgba(66, 204, 209, 0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          left: 0,
          top: 0,
          willChange: 'transform',
          transition: 'border-color 0.3s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
