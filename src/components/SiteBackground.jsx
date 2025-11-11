import React, { useEffect, useRef } from 'react';

const SiteBackground = () => {
  const canvasRef = useRef(null);
  const nodes = useRef([]);
  const connections = useRef([]);
  const animationFrameId = useRef();
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const createNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 20000);
      return Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1 + Math.random() * 1.5
      }));
    };

    // Initialize nodes and connections
    nodes.current = createNodes();
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Add a node at mouse position
      if (Math.random() > 0.7) {
        nodes.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: 0,
          vy: 0,
          radius: 1.5,
          isMouse: true
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.current = nodes.current.filter(node => {
        // Update position
        if (!node.isMouse) {
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, 0.5)`;
        ctx.fill();
        
        // Remove if it's a mouse node and too old
        return !(node.isMouse && node.radius > 0.1 && (node.radius -= 0.01));
      });
      
      // Draw connections
      const maxDistance = 150;
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const dx = nodes.current[i].x - nodes.current[j].x;
          const dy = nodes.current[i].y - nodes.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes.current[i].x, nodes.current[i].y);
            ctx.lineTo(nodes.current[j].x, nodes.current[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Add new node occasionally
      if (Math.random() > 0.97) {
        nodes.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() > 0.5 ? 0 : canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1 + Math.random() * 1.5
        });
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-900 w-screen">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-screen h-full opacity-60"
        style={{ left: 0, right: 0 }}
      />
    </div>
  );
};

export default SiteBackground;
