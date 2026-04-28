import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const bellAudioRef = useRef(null);

  useEffect(() => {
    const handleDoorOpen = () => {
      if (bellAudioRef.current) {
        bellAudioRef.current.volume = 0.6;
        bellAudioRef.current.play().catch(e => console.log("Bell autoplay prevented", e));
      }
      if (audioRef.current && isPlaying) {
        gsap.to(audioRef.current, { volume: 0.6, duration: 2, ease: "power2.inOut" });
      }
    };

    const handleDoorClose = () => {
      if (audioRef.current && isPlaying) {
        gsap.to(audioRef.current, { volume: 0.2, duration: 2, ease: "power2.inOut" });
      }
    };

    window.addEventListener('templeDoorOpening', handleDoorOpen);
    window.addEventListener('templeDoorClosing', handleDoorClose);

    return () => {
      window.removeEventListener('templeDoorOpening', handleDoorOpen);
      window.removeEventListener('templeDoorClosing', handleDoorClose);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Low, peaceful volume
      
      // Attempt to auto-play
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          // Autoplay was prevented by browser (normal behavior)
          console.log("Autoplay prevented. User interaction required.");
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-[110]">
      <audio 
        ref={audioRef} 
        loop
        // A placeholder for a traditional flute/veena instrumental track
        src="https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=indian-classical-music-126284.mp3" 
      />
      <audio 
        ref={bellAudioRef}
        // Soft temple bell sound
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      />
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gold/20 border border-gold backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-gold/40 shadow-[0_0_15px_rgba(217,119,6,0.5)] group"
      >
        {isPlaying ? (
          // Playing Animation (Sound waves)
          <div className="flex items-end justify-center gap-1 w-6 h-6">
            <div className="w-1 bg-gold-light rounded-full animate-[bounce_1s_infinite] h-4"></div>
            <div className="w-1 bg-gold-light rounded-full animate-[bounce_1.2s_infinite_0.1s] h-6"></div>
            <div className="w-1 bg-gold-light rounded-full animate-[bounce_0.8s_infinite_0.2s] h-3"></div>
          </div>
        ) : (
          // Play Icon (Music note)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-light animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
