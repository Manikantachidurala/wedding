import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section1Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Cinematic fade-in + slight zoom + glow pulse
    gsap.fromTo(textRef.current, 
      { opacity: 0, scale: 0.95, textShadow: "0 0 0px rgba(255,255,255,0)" }, 
      { 
        opacity: 1, 
        scale: 1, 
        textShadow: "0 0 15px rgba(217,119,6,0.6)",
        duration: 2.5, 
        ease: "power3.out" 
      }
    );

    // Fade out as it scrolls up
    gsap.to(textRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 py-10">
      
      <div ref={textRef} className="relative z-20 flex flex-col items-center text-center px-4 w-full">
        
        <p className="font-serif text-xl md:text-2xl text-gold-light mb-8 opacity-90 tracking-widest drop-shadow-md">
          ॐ Shubha Vivaha
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-white tracking-widest font-semibold drop-shadow-2xl text-gradient-gold">
          Chi. Gireesh
        </h1>
        
        <p className="font-calligraphy text-2xl md:text-4xl text-gold-light mb-6 opacity-90 drop-shadow-md">
          weds
        </p>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-12 text-white tracking-widest font-semibold drop-shadow-2xl text-gradient-gold">
          Chi. Sow. Sri Soumya
        </h1>

        <div className="flex flex-col items-center gap-2 mb-10 animate-bounce">
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-white/70 uppercase">
            Scroll to begin
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <p className="font-serif text-sm md:text-base text-gold-light/80 tracking-widest drop-shadow-sm uppercase">
          ॥ Srirasthu !! Shubhamasthu !! Avighnamasthu ॥
        </p>

      </div>
    </section>
  );
};

export default Section1Hero;
