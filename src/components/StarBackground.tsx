
import React, { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Star properties - defined before functions that use them
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    
    // Draw stars on canvas
    function drawStars() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Create gradient for stars to make them glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0, 
          star.x, star.y, star.size * 2
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(240, 240, 255, ${star.opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    }
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Only redraw stars if they have been initialized
      if (stars.length > 0) {
        drawStars();
      }
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Generate random stars
    const starCount = Math.min(window.innerWidth * window.innerHeight / 8000, 200);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.15 + 0.05 // Increased speed by 3x
      });
    }
    
    // Initialize the first drawing of stars
    drawStars();
    
    // Animate stars with subtle twinkling effect
    let animationFrameId: number;
    function animateStars() {
      stars.forEach(star => {
        // Create subtle twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.03; // Increased twinkling effect
        star.opacity = Math.max(0.2, Math.min(star.opacity, 0.9));
        
        // Move stars faster
        star.y -= star.speed;
        
        // Reset star position if it moves off screen
        if (star.y < -5) {
          star.y = canvas.height + 5;
          star.x = Math.random() * canvas.width;
        }
      });
      
      drawStars();
      animationFrameId = requestAnimationFrame(animateStars);
    }
    
    animateStars();
    
    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default StarBackground;
