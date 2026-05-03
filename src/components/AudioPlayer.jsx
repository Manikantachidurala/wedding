import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const bellAudioRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    console.log("AudioPlayer: Initializing...");
    
    // 1. Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      console.log("AudioPlayer: Initializing YT Player...");
      if (playerRef.current) return; // Already initialized

      playerRef.current = new window.YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: 'DlEIVZE0YC0',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          loop: 1,
          playlist: 'DlEIVZE0YC0',
          start: 11,
          mute: 0,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            console.log("AudioPlayer: YT Player Ready");
            setIsPlayerReady(true);
            event.target.setVolume(20);
            
            // Attempt autoplay
            event.target.playVideo();
          },
          onStateChange: (event) => {
            console.log("AudioPlayer: YT State Change:", event.data);
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          },
          onError: (e) => {
            console.error("AudioPlayer: YT Error:", e.data);
          }
        },
      });
    };

    // Callback for YouTube API
    window.onYouTubeIframeAPIReady = initPlayer;

    // Check if API already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    // Fallback interaction listener
    const playOnInteraction = () => {
      console.log("AudioPlayer: Interaction detected");
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        try {
          playerRef.current.unMute();
          playerRef.current.setVolume(20);
          playerRef.current.playVideo();
          
          // Remove listeners after success
          window.removeEventListener('click', playOnInteraction);
          window.removeEventListener('scroll', playOnInteraction);
          window.removeEventListener('touchstart', playOnInteraction);
          window.removeEventListener('mousedown', playOnInteraction);
          window.removeEventListener('keydown', playOnInteraction);
        } catch (e) {
          console.error("AudioPlayer: Play on interaction failed", e);
        }
      }
    };

    window.addEventListener('click', playOnInteraction);
    window.addEventListener('scroll', playOnInteraction);
    window.addEventListener('touchstart', playOnInteraction);
    window.addEventListener('mousedown', playOnInteraction);
    window.addEventListener('keydown', playOnInteraction);

    return () => {
      window.removeEventListener('click', playOnInteraction);
      window.removeEventListener('scroll', playOnInteraction);
      window.removeEventListener('touchstart', playOnInteraction);
      window.removeEventListener('mousedown', playOnInteraction);
      window.removeEventListener('keydown', playOnInteraction);
    };
  }, []);

  useEffect(() => {
    const handleDoorOpen = () => {
      if (bellAudioRef.current) {
        bellAudioRef.current.volume = 0.6;
        bellAudioRef.current.play().catch(e => console.log("Bell sound failed", e));
      }
      if (playerRef.current && isPlayerReady && isPlaying) {
        const volumeObj = { vol: playerRef.current.getVolume() };
        gsap.to(volumeObj, {
          vol: 60,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => playerRef.current.setVolume(volumeObj.vol)
        });
      }
    };

    const handleDoorClose = () => {
      if (playerRef.current && isPlayerReady && isPlaying) {
        const volumeObj = { vol: playerRef.current.getVolume() };
        gsap.to(volumeObj, {
          vol: 20,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => playerRef.current.setVolume(volumeObj.vol)
        });
      }
    };

    window.addEventListener('templeDoorOpening', handleDoorOpen);
    window.addEventListener('templeDoorClosing', handleDoorClose);

    return () => {
      window.removeEventListener('templeDoorOpening', handleDoorOpen);
      window.removeEventListener('templeDoorClosing', handleDoorClose);
    };
  }, [isPlaying, isPlayerReady]);

  const togglePlay = () => {
    if (!isPlayerReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.unMute();
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-[110]">
      <div id="youtube-audio-player" className="hidden pointer-events-none absolute -left-[9999px]"></div>
      <audio
        ref={bellAudioRef}
        // Higher quality temple bell
        src="https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a17852.mp3"
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
