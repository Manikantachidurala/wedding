
import React, { useEffect, useState } from 'react';

const Lanterns = () => {
  const [lanterns, setLanterns] = useState([]);

  useEffect(() => {
    // Reduce lantern count for mobile to preserve performance
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 15;
    
    const lanternArray = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random start position 0-100vw
      animationDuration: Math.random() * 10 + 15, // 15s to 25s for slow float
      animationDelay: Math.random() * 15, // 0 to 15s delay
      scale: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 scale
      opacity: Math.random() * 0.3 + 0.6, // 0.6 to 0.9
    }));
    setLanterns(lanternArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="lantern"
          style={{
            left: `${lantern.left}vw`,
            width: '40px',
            height: '60px',
            opacity: lantern.opacity,
            animation: `lantern-float ${lantern.animationDuration}s ease-in-out ${lantern.animationDelay}s infinite`,
            transform: `scale(${lantern.scale})`,
            transformOrigin: 'bottom center',
          }}
        >
        </div>
      ))}
    </div>
  );
};

export default Lanterns;
