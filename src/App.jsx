import React, { useEffect, useState } from 'react';
import Lanterns from './components/Lanterns';
import AudioPlayer from './components/AudioPlayer';
import Section1Hero from './components/Section1Hero';
import Section2Temple from './components/Section2Temple';
import Section3Details from './components/Section3Details';
import Section4Telugu from './components/Section4Telugu';
import Section5Map from './components/Section5Map';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full bg-water min-h-screen text-white relative">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Global Elements */}
      <Lanterns />
      <AudioPlayer />
      
      {/* Content Wrapper */}
      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Sections */}
        <Section1Hero />
        <Section2Temple />
        <Section3Details />
        <Section4Telugu />
        <Section5Map />
      </div>

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none z-0"></div>
    </main>
  );
}
