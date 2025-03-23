
import { useEffect, useRef } from 'react';

interface StarFieldProps {
  starCount?: number;
  speed?: number;
}

const StarField = ({ starCount = 200, speed = 0.05 }: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    interface Star {
      x: number;
      y: number;
      radius: number;
      velocity: number;
      alpha: number;
      direction: number; // 1 or -1 for different directions
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocity: (Math.random() * 0.05) + 0.025,
        alpha: Math.random() * 0.5 + 0.5,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Animation loop
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        
        // Move stars
        star.y += star.velocity * speed * star.direction;
        
        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
        } else if (star.y < 0) {
          star.y = canvas.height;
        }
        
        // Twinkle effect
        star.alpha += 0.01 * star.direction;
        if (star.alpha >= 1 || star.alpha <= 0.5) {
          star.direction *= -1; // Reverse direction
        }
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, speed]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" />;
};

export default StarField;
