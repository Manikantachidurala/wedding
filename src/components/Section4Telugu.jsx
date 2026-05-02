import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section4Telugu = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Exact same entry animation as the English card
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
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

  return (
    <section ref={containerRef} className="relative w-full min-h-[100svh] py-12 md:py-24 flex flex-col items-center justify-center z-10 px-4">
      
      {/* EXACT Identical Frosted Glass Card Container to English Details */}
      <div 
        ref={cardRef} 
        className="w-full max-w-[600px] relative z-10 rounded-[20px] bg-[#020617]/50 backdrop-blur-xl border border-gold/30 shadow-[0_8px_32px_rgba(217,119,6,0.15)] p-5 md:p-10 text-center flex flex-col items-center mx-auto will-change-gpu"
      >
        
        {/* Top Header */}
        <p className="font-telugu text-[10px] md:text-sm text-gold-light tracking-widest opacity-90 mb-4 md:mb-6 drop-shadow-sm">
          శ్రీరస్తు! &nbsp;&nbsp;&nbsp; శుభమస్తు!! &nbsp;&nbsp;&nbsp; అవిఘ్నమస్తు!!!
        </p>

        {/* Title */}
        <h2 className="font-telugu text-4xl md:text-6xl text-gold mb-4 md:mb-6 drop-shadow-lg font-bold leading-tight">
          శుభలేఖ
        </h2>

        {/* Shloka */}
        <p className="font-telugu text-[10px] md:text-xs text-gold-light italic mb-6 leading-relaxed opacity-90" style={{ lineHeight: '1.6' }}>
          శ్లో॥ ఆదిత్యాది నవగ్రహేభ్యో నమః! సర్వేషాం మంగళం భవతు యయోరుద్వాహ పత్రికా: !!
        </p>

        {/* Date & Muhurtham Text */}
        <div className="font-telugu text-sm md:text-base text-white font-light tracking-wide mb-6 px-2" style={{ lineHeight: '1.6' }}>
          <p>స్వస్తిశ్రీ చాంద్రమానేన పరాభవ నామ సంవత్సర వైశాఖ శు॥ షష్టి</p>
          <p>తేది. <span className="text-gold-light font-bold">08-05-2026</span> శుక్రవారం ఉ॥ గం॥ <span className="text-gold-light font-bold">09-26</span> ని॥లకు</p>
          <p className="text-xs md:text-sm mt-1 opacity-90">ఉత్తరాషాడ నక్షత్రయుక్త మిధున లగ్న పుష్కరాంశ సుముహూర్తమున</p>
          <p className="mt-2 text-gray-300 italic text-xs md:text-sm">మా జ్యేష్ఠ పుత్రుడు చి॥ రవిందర్-నాగలక్ష్మి దంపతుల జ్యేష్ఠ పుత్రుడు</p>
        </div>

        {/* Groom */}
        <h3 className="font-telugu text-2xl md:text-4xl text-gold mb-2 font-bold tracking-wider">
          చి॥ గిరీష్
        </h3>

        <p className="font-telugu text-xl md:text-2xl text-gold-light mb-2">
          వివాహము
        </p>

        {/* Bride */}
        <h3 className="font-telugu text-2xl md:text-4xl text-gold mb-1 font-bold tracking-wider">
          చి॥ల॥సౌ॥ శ్రీసౌమ్య
        </h3>
        <p className="font-telugu text-[10px] md:text-sm text-gray-300 italic mb-6 md:mb-8 px-2" style={{ lineHeight: '1.6' }}>
          (శ్రీమతి, శ్రీ పాల జయప్రకాష్-పద్మ గార్ల జ్యేష్ఠ పుత్రిక)తో జరుగును.
        </p>

        <p className="font-telugu text-sm md:text-base text-white/90 font-light tracking-wide mb-6 md:mb-8 px-4" style={{ lineHeight: '1.6' }}>
          కావున తామెల్లరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి నూతన వధూవరులను
          ఆశీర్వదించి, మా ఆతిథ్యమును స్వీకరించి మమ్మానందింపజేయ ప్రార్థన.
        </p>

        {/* Venue & Lunch Box */}
        <div className="w-full mb-6 md:mb-8 px-2">
          <h4 className="font-telugu text-base md:text-lg text-gold font-bold mb-2">కళ్యాణ వేదిక:</h4>
          <p className="font-telugu text-sm md:text-base text-white drop-shadow-sm mb-3" style={{ lineHeight: '1.6' }}>
            శ్రీవేంకటేశ్వర కళ్యాణ మండపం, కంటాయపాలెం రోడ్ గ్రా॥ మం॥ తొర్రూర్, <br/>
            జి॥ మహబూబాబాద్.
          </p>
          <p className="font-telugu text-sm md:text-base text-gold font-bold mt-4 mb-1">విందు:</p>
          <p className="font-telugu text-sm md:text-base text-gold-light italic">
            వివాహానంతరం
          </p>
        </div>

        {/* Invited By */}
        <div className="w-full pt-4 md:pt-6 border-t border-gold/20 flex flex-col items-center">
          <p className="font-telugu text-xs md:text-sm text-gray-300 mb-2">ఆహ్వానీయులు:</p>
          <p className="font-telugu text-sm md:text-lg text-gold font-bold tracking-wider mb-3 px-2 leading-relaxed">
            శ్రీమతి & శ్రీ తవిడిశెట్టి ప్రేమలీల-రామకిష్టయ్య
          </p>
          <p className="font-telugu text-[10px] md:text-sm text-white/70 px-2 leading-relaxed" style={{ lineHeight: '1.6' }}>
            చిదురాల పారిజాతం-మల్లికార్జున్, విజయలక్ష్మి-కృష్ణమూర్తి, తవిడిశెట్టి సంధ్య-మోహన్, <br className="hidden md:block"/>
            చిదురాల భాగ్యలక్ష్మి-వెంకటేశ్వర్లు, అనిత-నీలకంఠం గార్లు మరియు బంధుమిత్రుల <br className="hidden md:block"/>
            అభినందనలతో...
          </p>
        </div>

      </div>

    </section>
  );
};

export default Section4Telugu;
