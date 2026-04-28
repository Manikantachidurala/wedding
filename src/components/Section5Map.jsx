import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section5Map = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Fade and slide up the map card
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        }
      }
    );
  }, []);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.444265438867!2d79.8242488!3d17.6186088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a333f2187d377b5%3A0xc3af7790b79df71!2sThorrur%2C%20Telangana%20506163!5e0!3m2!1sen!2sin!4v1714285925345!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Sri+Venkateswara+Kalyana+Mandapam,+Thorrur,+Mahabubabad";

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center z-10 px-4">
      
      {/* Frosted Glass Card Container - Max Width 800px for map */}
      <div 
        ref={cardRef} 
        className="w-full max-w-[800px] relative z-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 md:p-10 flex flex-col items-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold mb-4 text-center">
          Find Us Here
        </h2>
        <p className="font-sans text-sm md:text-base text-white mb-8 text-center max-w-md" style={{ lineHeight: '1.8' }}>
          Sri Venkateswara Kalyana Mandapam, Kantayapalem Road, Thorrur, Mahabubabad
        </p>

        {/* Map Container */}
        <div className="w-full aspect-square md:aspect-[21/9] rounded-xl overflow-hidden border border-white/20 shadow-inner mb-8 relative group">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location"
            className="filter contrast-125 transition-all duration-500"
          ></iframe>
        </div>

        {/* Get Directions Button */}
        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gold/80 backdrop-blur-md border border-gold font-sans rounded-full hover:bg-gold shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.8)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
        >
          <span className="relative flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Get Directions
          </span>
        </a>
      </div>

      {/* Footer / End tag */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full">
         <p className="font-sans text-xs text-gray-400 uppercase tracking-[0.2em]">
           Looking forward to celebrating with you
         </p>
      </div>

    </section>
  );
};

export default Section5Map;
