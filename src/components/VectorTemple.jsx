import React from 'react';

const VectorTemple = () => {
  return (
    <svg 
      className="w-full h-auto drop-shadow-2xl filter saturate-[1.2] contrast-[1.1]" 
      viewBox="0 0 1000 1500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients for premium 3D look */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="doorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="50%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* TIER 3 (Back/Top) */}
      <g className="temple-tier-3">
        {/* Base of Tier 3 */}
        <path d="M 350 400 L 650 400 L 620 550 L 380 550 Z" fill="url(#tealGrad)" />
        <rect x="330" y="550" width="340" height="30" fill="url(#goldGrad)" rx="5" />
        {/* Mini pillars */}
        <rect x="380" y="420" width="20" height="130" fill="url(#goldGrad)" />
        <rect x="440" y="420" width="20" height="130" fill="url(#goldGrad)" />
        <rect x="540" y="420" width="20" height="130" fill="url(#goldGrad)" />
        <rect x="600" y="420" width="20" height="130" fill="url(#goldGrad)" />
        {/* Arch decoration */}
        <path d="M 460 550 Q 500 450 540 550" fill="none" stroke="url(#goldGrad)" strokeWidth="15" />
      </g>

      {/* TIER 2 (Middle) */}
      <g className="temple-tier-2">
        <path d="M 280 580 L 720 580 L 680 780 L 320 780 Z" fill="url(#greenGrad)" />
        <rect x="260" y="780" width="480" height="40" fill="url(#goldGrad)" rx="8" />
        {/* Decorative Statues/Shapes */}
        <circle cx="340" cy="680" r="30" fill="url(#redGrad)" stroke="url(#goldGrad)" strokeWidth="5" />
        <circle cx="660" cy="680" r="30" fill="url(#redGrad)" stroke="url(#goldGrad)" strokeWidth="5" />
        {/* Central Arch */}
        <path d="M 400 780 Q 500 580 600 780" fill="none" stroke="url(#goldGrad)" strokeWidth="20" />
        <rect x="485" y="650" width="30" height="130" fill="url(#goldGrad)" />
      </g>

      {/* TIER 1 (Lower) */}
      <g className="temple-tier-1">
        <path d="M 200 820 L 800 820 L 750 1050 L 250 1050 Z" fill="url(#redGrad)" />
        <rect x="180" y="1050" width="640" height="50" fill="url(#goldGrad)" rx="10" />
        {/* Statues/Ornaments */}
        <path d="M 250 1050 L 250 900 L 320 900 L 320 1050 Z" fill="url(#tealGrad)" stroke="url(#goldGrad)" strokeWidth="8"/>
        <path d="M 750 1050 L 750 900 L 680 900 L 680 1050 Z" fill="url(#tealGrad)" stroke="url(#goldGrad)" strokeWidth="8"/>
        <circle cx="285" cy="950" r="15" fill="url(#goldGrad)" />
        <circle cx="715" cy="950" r="15" fill="url(#goldGrad)" />
        
        {/* Central Grand Arch */}
        <path d="M 380 1050 Q 500 750 620 1050" fill="none" stroke="url(#goldGrad)" strokeWidth="30" />
      </g>

      {/* TOP DOME / KALASHAMS */}
      <g className="temple-top">
        {/* Main curved roof */}
        <path d="M 350 400 Q 500 250 650 400" fill="url(#redGrad)" stroke="url(#goldGrad)" strokeWidth="15" />
        <rect x="330" y="380" width="340" height="20" fill="url(#goldGrad)" rx="10" />
        {/* Kalashams (Gold spires) */}
        {/* Center */}
        <path d="M 480 300 L 500 150 L 520 300 Z" fill="url(#goldGrad)" />
        <circle cx="500" cy="280" r="25" fill="url(#goldGrad)" filter="url(#glow)" />
        <circle cx="500" cy="150" r="10" fill="url(#goldGrad)" />
        {/* Left */}
        <path d="M 400 330 L 420 220 L 440 330 Z" fill="url(#goldGrad)" />
        <circle cx="420" cy="310" r="20" fill="url(#goldGrad)" />
        <circle cx="420" cy="220" r="8" fill="url(#goldGrad)" />
        {/* Right */}
        <path d="M 560 330 L 580 220 L 600 330 Z" fill="url(#goldGrad)" />
        <circle cx="580" cy="310" r="20" fill="url(#goldGrad)" />
        <circle cx="580" cy="220" r="8" fill="url(#goldGrad)" />
      </g>

      {/* MAIN BASE & DOORS */}
      <g className="temple-base">
        {/* Ground Block */}
        <rect x="100" y="1100" width="800" height="300" fill="url(#tealGrad)" rx="15" />
        <rect x="80" y="1400" width="840" height="40" fill="url(#goldGrad)" rx="5" />
        
        {/* Decorative side panels */}
        <rect x="150" y="1150" width="100" height="250" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="10" />
        <rect x="750" y="1150" width="100" height="250" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="10" />
        
        {/* Door Frame */}
        <path d="M 330 1400 L 330 1150 Q 500 1000 670 1150 L 670 1400 Z" fill="#1C1917" stroke="url(#goldGrad)" strokeWidth="20" />
        
        {/* The Inside Glow / Void behind doors */}
        <path d="M 350 1400 L 350 1160 Q 500 1030 650 1160 L 650 1400 Z" fill="url(#goldGrad)" opacity="0.3" filter="url(#glow)"/>
        
        {/* Left Door */}
        <g className="temple-door-left" style={{ transformOrigin: "350px 1400px" }}>
          <path d="M 350 1400 L 350 1160 Q 425 1095 500 1105 L 500 1400 Z" fill="url(#doorGrad)" stroke="#1C1917" strokeWidth="4" />
          {/* Door panels/studs */}
          <rect x="370" y="1200" width="110" height="80" fill="none" stroke="url(#goldGrad)" strokeWidth="5" />
          <rect x="370" y="1300" width="110" height="80" fill="none" stroke="url(#goldGrad)" strokeWidth="5" />
          <circle cx="480" cy="1250" r="8" fill="url(#goldGrad)" />
        </g>
        
        {/* Right Door */}
        <g className="temple-door-right" style={{ transformOrigin: "650px 1400px" }}>
          <path d="M 650 1400 L 650 1160 Q 575 1095 500 1105 L 500 1400 Z" fill="url(#doorGrad)" stroke="#1C1917" strokeWidth="4" />
          <rect x="520" y="1200" width="110" height="80" fill="none" stroke="url(#goldGrad)" strokeWidth="5" />
          <rect x="520" y="1300" width="110" height="80" fill="none" stroke="url(#goldGrad)" strokeWidth="5" />
          <circle cx="520" cy="1250" r="8" fill="url(#goldGrad)" />
        </g>
      </g>
    </svg>
  );
};

export default VectorTemple;
