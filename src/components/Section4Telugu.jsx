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
    <section ref={containerRef} className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center z-10 px-4">
      
      {/* EXACT Identical Frosted Glass Card Container to English Details */}
      <div 
        ref={cardRef} 
        className="w-[90%] max-w-[600px] relative z-10 rounded-[20px] bg-[#020617]/50 backdrop-blur-xl border border-gold/30 shadow-[0_8px_32px_rgba(217,119,6,0.15)] p-[20px] md:p-[40px] text-center flex flex-col items-center mx-auto"
      >
        
        {/* Top Header */}
        <p className="font-telugu text-xs md:text-sm text-gold-light tracking-widest opacity-90 mb-6 drop-shadow-sm">
          శ్రీరస్తు! &nbsp;&nbsp;&nbsp; శుభమస్తు!! &nbsp;&nbsp;&nbsp; అవిఘ్నమస్తు!!!
        </p>

        {/* Title */}
        <h2 className="font-telugu text-4xl md:text-6xl text-gold mb-6 drop-shadow-lg font-bold">
          శుభలేఖ
        </h2>

        {/* Shloka */}
        <p className="font-telugu text-xs md:text-sm text-gold-light italic mb-6 leading-loose" style={{ lineHeight: '1.8' }}>
          శ్లో॥ ఆదిత్యాది నవగ్రహేభ్యో నమః! సర్వేషాం మంగళం భవతు యయోరుద్వాహ పత్రికా: !!
        </p>

        {/* Date & Muhurtham Text */}
        <p className="font-telugu text-sm md:text-base text-white font-light tracking-wide mb-6" style={{ lineHeight: '1.8' }}>
          స్వస్తిశ్రీ చాంద్రమానేన పరాభవ నామ సంవత్సర వైశాఖ శు॥ షష్టి <br/>
          తేది. <span className="text-gold-light font-bold">08-05-2026</span> శుక్రవారం ఉ॥ గం॥ <span className="text-gold-light font-bold">09-26</span> ని॥లకు <br/>
          ఉత్తరాషాడ నక్షత్రయుక్త మిధున లగ్న పుష్కరాంశ సుముహూర్తమున <br/>
          మా జ్యేష్ఠ పుత్రుడు చి॥ రవిందర్-నాగలక్ష్మి దంపతుల <br/>
          <span className="text-gray-300 italic text-xs md:text-sm">జ్యేష్ఠ పుత్రుడు</span>
        </p>

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
        <p className="font-telugu text-xs md:text-sm text-gray-300 italic mb-8" style={{ lineHeight: '1.8' }}>
          (శ్రీమతి, శ్రీ పాల జయప్రకాష్-పద్మ గార్ల జ్యేష్ఠ పుత్రిక)తో జరుగును.
        </p>

        <p className="font-telugu text-sm md:text-base text-white font-light tracking-wide mb-8" style={{ lineHeight: '1.8' }}>
          కావున తామెల్లరు సకుటుంబ సపరివార సమేతంగా విచ్చేసి నూతన వధూవరులను
          ఆశీర్వదించి, మా ఆతిథ్యమును స్వీకరించి మమ్మానందింపజేయ ప్రార్థన.
        </p>

        {/* Venue & Lunch Box */}
        <div className="w-full mb-8">
          <h4 className="font-telugu text-lg md:text-xl text-gold font-bold mb-2">కళ్యాణ వేదిక:</h4>
          <p className="font-telugu text-sm md:text-base text-white drop-shadow-sm mb-4" style={{ lineHeight: '1.8' }}>
            శ్రీవేంకటేశ్వర కళ్యాణ మండపం, కంటాయపాలెం రోడ్ గ్రా॥ మం॥ తొర్రూర్, <br/>
            జి॥ మహబూబాబాద్.
          </p>
          <p className="font-telugu text-sm md:text-base text-gold font-bold mt-4 mb-1">విందు:</p>
          <p className="font-telugu text-sm md:text-base text-gold-light italic">
            వివాహానంతరం
          </p>
        </div>

        {/* Invited By */}
        <div className="w-full pt-6 border-t border-gold/20 flex flex-col items-center">
          <p className="font-telugu text-sm md:text-base text-gray-300 mb-2">ఆహ్వానీయులు:</p>
          <p className="font-telugu text-base md:text-lg text-gold font-bold tracking-wider mb-4" style={{ lineHeight: '1.8' }}>
            శ్రీమతి & శ్రీ తవిడిశెట్టి ప్రేమలీల-రామకిష్టయ్య
          </p>
          <p className="font-telugu text-xs md:text-sm text-white opacity-80" style={{ lineHeight: '1.8' }}>
            చిదురాల పారిజాతం-మల్లికార్జున్, విజయలక్ష్మి-కృష్ణమూర్తి, తవిడిశెట్టి సంధ్య-మోహన్, <br/>
            చిదురాల భాగ్యలక్ష్మి-వెంకటేశ్వర్లు, అనిత-నీలకంఠం గార్లు మరియు బంధుమిత్రుల <br/>
            అభినందనలతో...
          </p>
        </div>

      </div>

    </section>
  );
};

export default Section4Telugu;
