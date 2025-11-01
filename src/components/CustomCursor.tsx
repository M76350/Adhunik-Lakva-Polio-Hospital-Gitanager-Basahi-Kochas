import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Medical-themed cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Animated medical icon */}
        <div className="relative w-8 h-8 animate-pulse">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary drop-shadow-lg">
            <path 
              fill="currentColor" 
              d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
            />
          </svg>
        </div>
      </div>
      
      {/* Trailing particles effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out opacity-60"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm" />
        </div>
      </div>
      
      {/* Medicine pill trail */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-700 ease-out opacity-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%) rotate(45deg)',
        }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent">
          <path 
            fill="currentColor" 
            d="M4.22 11.29l7.07-7.07c1.17-1.17 3.07-1.17 4.24 0l4.24 4.25c1.17 1.17 1.17 3.07 0 4.24l-7.07 7.07c-1.17 1.17-3.07 1.17-4.24 0l-4.25-4.25c-1.16-1.16-1.16-3.07.01-4.24zM12 8L8 12l4 4 4-4-4-4z"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
