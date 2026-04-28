import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section2Temple = () => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const portalGlowRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Pin at the bottom of the temple to open the doors
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom", // Pin when the bottom of the temple hits the bottom of the viewport
          end: "+=250%", // Keep it pinned for longer to feel cinematic
          pin: true,
          scrub: 1.5, // Smoother scrub
          pinSpacing: true, 
          onUpdate: (self) => {
            // Dispatch event when door starts opening significantly
            if (self.progress > 0.3 && !self.doorOpened) {
              self.doorOpened = true;
              window.dispatchEvent(new Event('templeDoorOpening'));
            } else if (self.progress <= 0.3 && self.doorOpened) {
              self.doorOpened = false;
              window.dispatchEvent(new Event('templeDoorClosing'));
            }
          }
        }
      });

      // 1. Realistic Camera Effect: Move up and slight scale
      tl.to(containerRef.current, {
        y: "-15vh",
        scale: 1.05,
        transformOrigin: "center bottom",
        ease: "power1.inOut",
        duration: 1
      }, 0);

      // 2. Open doors with 3D depth and slide
      tl.to(leftDoorRef.current, { rotateY: -105, xPercent: -15, ease: "power2.inOut", duration: 0.8 }, 0.1);
      tl.to(rightDoorRef.current, { rotateY: 105, xPercent: 15, ease: "power2.inOut", duration: 0.8 }, 0.1);

      // 3. Brighten the portal glow heavily to simulate divine entering
      tl.to(portalGlowRef.current, {
        opacity: 1,
        scale: 1.5,
        boxShadow: "inset 0 0 120px rgba(255, 215, 0, 1), 0 0 80px rgba(217, 119, 6, 0.6)",
        ease: "power2.in",
        duration: 0.5
      }, 0.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // No explicit height restrictions. The image dictates the height, 
    // ensuring a massive scrolling world (easily >300vh on most devices).
    <section ref={containerRef} className="relative w-full min-h-[100svh] z-10 flex flex-col justify-end items-center overflow-hidden bg-transparent">
      
      <div className="relative w-full flex flex-col items-center">
        <img 
          src="/temple-vector.jpg" 
          alt="Temple Scrolling World" 
          className="w-full h-auto object-cover filter drop-shadow-2xl" 
          onLoad={() => ScrollTrigger.refresh()}
        />

      {/* The door container is placed exactly at the bottom center where the doorway is */}
      {/* We use percentage-based sizing relative to the massive width to ensure it scales perfectly on all devices */}
      <div 
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[22%] aspect-[3/4] flex perspective-[1200px] z-30"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* The glowing interior of the temple (starts invisible, fades in as doors open) */}
        <div ref={portalGlowRef} className="absolute inset-0 bg-[#020617] opacity-0 shadow-[inset_0_0_80px_rgba(217,119,6,0.8)] z-0 rounded-t-full blur-sm"></div>
        
        {/* Left Door */}
        <div 
          ref={leftDoorRef}
          className="w-1/2 h-full bg-[#1c0d06] border-r-2 border-black origin-left shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-end pr-[5%] z-10 relative"
        >
          <div className="w-[10%] aspect-square rounded-full bg-gradient-to-br from-gold-light to-gold shadow-md"></div>
        </div>
        
        {/* Right Door */}
        <div 
          ref={rightDoorRef}
          className="w-1/2 h-full bg-[#1c0d06] border-l-2 border-black origin-right shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] flex items-center justify-start pl-[5%] z-10 relative"
        >
          <div className="w-[10%] aspect-square rounded-full bg-gradient-to-bl from-gold-light to-gold shadow-md"></div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default Section2Temple;
