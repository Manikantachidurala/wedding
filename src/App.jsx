import React from 'react';
import Lanterns from './components/Lanterns';
import AudioPlayer from './components/AudioPlayer';
import Section1Hero from './components/Section1Hero';
import Section2Temple from './components/Section2Temple';
import Section3Details from './components/Section3Details';
import Section4Telugu from './components/Section4Telugu';
import Section5Map from './components/Section5Map';

export default function App() {
  return (
    <main className="w-full bg-water min-h-[500vh] text-white">
      {/* Global Elements */}
      <Lanterns />
      <AudioPlayer />
      
      {/* Sections */}
      <Section1Hero />
      <Section2Temple />
      <Section3Details />
      <Section4Telugu />
      <Section5Map />
    </main>
  );
}
