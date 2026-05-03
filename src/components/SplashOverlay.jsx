import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const SplashOverlay = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    gsap.to(".splash-content", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.inOut"
    });
    gsap.to(".splash-overlay", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
        onEnter();
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="splash-overlay fixed inset-0 z-[200] bg-[#020617] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gold opacity-20"></div>
      
      <div className="splash-content relative z-10 flex flex-col items-center text-center px-6">
        <p className="font-serif text-lg md:text-2xl text-gold-light mb-4 tracking-widest opacity-80">
          ॥ Srirasthu !! Shubhamasthu !! Avighnamasthu ॥
        </p>
        
        <h1 className="font-serif text-3xl md:text-5xl text-gold mb-8 drop-shadow-lg leading-tight">
          తవిడిశెట్టి వారి పెళ్లి పిలుపు
        </h1>

        <button 
          onClick={handleEnter}
          className="group relative px-10 py-4 bg-transparent border border-gold/50 rounded-full overflow-hidden transition-all duration-500 hover:border-gold hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
        >
          <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-all duration-500"></div>
          <span className="relative font-serif text-xl md:text-2xl text-gold-light tracking-widest uppercase">
            Open Invitation
          </span>
        </button>
        
        <p className="mt-8 font-sans text-xs text-white/40 tracking-[0.3em] uppercase">
          Tap to begin the experience
        </p>
      </div>
    </div>
  );
};

export default SplashOverlay;
