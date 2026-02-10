import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CinematicFootball = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Transforms
  const videoScale = useTransform(smoothProgress, [0, 0.2], [1, 1.5]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.15], [0.6, 0]);
  const blurValue = useTransform(smoothProgress, [0, 0.1], [0, 10]);

  return (
    <div ref={containerRef} className="relative bg-[#08090a] font-sans">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />

      <section className="relative h-[800vh]"> {/* Increased height for the extra section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* LAYER 1: HERO BACKGROUND */}
          <motion.div 
            style={{ scale: videoScale, filter: `blur(${blurValue}px)`, opacity: videoOpacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#08090a] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale contrast-125"
              alt="Empty pitch"
            />
          </motion.div>

          {/* SECTION 1: THE MISSION */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
              y: useTransform(smoothProgress, [0, 0.15], [0, -100]) 
            }}
            className="relative z-20 text-center px-4"
          >
            <h2 className="text-[10px] tracking-[0.8em] text-white/40 uppercase mb-6">Established with Purpose</h2>
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-tighter">
              BEYOND <br /> <span className="italic font-serif">THE 90'.</span>
            </h1>
          </motion.div>

          {/* SECTION 2: THE FLOW CAROUSEL */}
          <CardCarousel scroll={smoothProgress} />

          {/* SECTION 3: THE ACADEMY MASK */}
          <AcademyMask scroll={smoothProgress} />

          {/* SECTION 4: IMPACT STATS */}
          <ImpactStats scroll={smoothProgress} />

          {/* NEW SECTION 5: TACTICAL PHILOSOPHY */}
          <TacticalSection scroll={smoothProgress} />
          
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

const CardCarousel = ({ scroll }) => {
  const x = useTransform(scroll, [0.15, 0.4], ["100%", "-100%"]);
  const opacity = useTransform(scroll, [0.1, 0.15, 0.35, 0.4], [0, 1, 1, 0]);

  return (
    <motion.div style={{ x, opacity }} className="absolute inset-0 flex items-center gap-32 px-[20vw] z-30 pointer-events-none">
      <div className="min-w-[400px]">
        <h3 className="text-orange-500 font-mono text-xs mb-4 uppercase tracking-widest">Revenue Model</h3>
        <p className="text-3xl text-white font-light leading-tight">Every ticket sold feeds a community for a week.</p>
      </div>
      <div className="min-w-[500px] aspect-video bg-zinc-800/50 backdrop-blur-3xl border border-white/10 p-1">
        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60" alt="community" />
      </div>
    </motion.div>
  );
};

const AcademyMask = ({ scroll }) => {
  const maskScale = useTransform(scroll, [0.4, 0.55, 0.7], [0, 1, 20]);
  const contentOpacity = useTransform(scroll, [0.45, 0.5, 0.55, 0.6], [0, 1, 1, 0]);

  return (
    <motion.div 
      style={{ scale: maskScale }}
      className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
    >
      <div className="w-[40vw] h-[40vw] rounded-full bg-zinc-100 flex items-center justify-center p-20 overflow-hidden">
        <motion.div style={{ opacity: contentOpacity }} className="text-black text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">The Academy</span>
            <h2 className="text-5xl font-light mt-4 tracking-tighter">Forging the <br /> Next Leaders.</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ImpactStats = ({ scroll }) => {
  const containerOpacity = useTransform(scroll, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const yOffset = useTransform(scroll, [0.65, 0.85], [100, -50]);

  return (
    <motion.div 
      style={{ opacity: containerOpacity }} 
      className="absolute inset-0 z-50 flex items-center justify-center bg-[#08090a] px-10"
    >
      <motion.div style={{ y: yOffset }} className="max-w-6xl w-full">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h3 className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em] mb-2">Impact Report</h3>
          <h2 className="text-5xl text-white font-light tracking-tighter italic">By the numbers.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Reach", val: "140+", desc: "Villages connected via local scouting." },
            { label: "Growth", val: "82%", desc: "Increase in local sports employment." },
            { label: "Output", val: "24k", desc: "Nutritional meals served annually." }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 flex flex-col justify-between hover:border-orange-500/30 transition-colors group">
              <div>
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{stat.label}</span>
                <h4 className="text-7xl text-white font-bold italic tracking-tighter mt-4 group-hover:text-orange-500 transition-colors">
                  {stat.val}
                </h4>
              </div>
              <p className="text-zinc-400 text-xs mt-8 uppercase tracking-widest leading-loose">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TacticalSection = ({ scroll }) => {
  // Syncs with the end of the Impact section and the start of CTA
  const opacity = useTransform(scroll, [0.82, 0.88, 0.95, 0.98], [0, 1, 1, 0]);
  const y = useTransform(scroll, [0.82, 0.95], [100, 0]);
  const imageScale = useTransform(scroll, [0.82, 0.98], [1.2, 1]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-[55] flex items-center justify-center bg-zinc-900 px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl items-center">
        <motion.div style={{ y }} className="space-y-8">
          <h3 className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em]">Tactical Philosophy</h3>
          <h2 className="text-6xl text-white font-light tracking-tighter leading-none">
            Precision <br /> 
            <span className="italic font-serif text-zinc-500">meets</span> <br /> 
            Passion.
          </h2>
          <p className="text-zinc-400 max-w-sm text-sm leading-relaxed uppercase tracking-wider">
            Our blueprint transcends the pitch. We utilize spatial data and psychological profiling to develop athletes who are as sharp mentally as they are physically.
          </p>
          <div className="flex gap-4">
            <div className="h-[1px] w-12 bg-orange-500 self-center" />
            <span className="text-white font-mono text-[10px] tracking-widest uppercase">Methodology v.4.2</span>
          </div>
        </motion.div>

        <div className="relative aspect-[4/5] md:aspect-square bg-zinc-800 overflow-hidden border border-white/10">
          <motion.img 
            style={{ scale: imageScale }}
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            alt="Tactical Board"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white text-xs font-light leading-relaxed">
              "The game is won in the half-spaces of the mind."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FinalCTA = () => (
  <section className="relative h-screen bg-zinc-100 flex flex-col justify-between p-12 z-[60]">
    <div className="mt-20">
      <h2 className="text-[12vw] leading-[0.8] font-bold text-black tracking-tighter uppercase">
        Join the <br /> Squad.
      </h2>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-8 pb-4">
      <div className="max-w-xs space-y-4 text-black">
        <p className="text-sm italic">"Football is a vehicle for social mobility."</p>
        <p className="text-[10px] uppercase font-bold tracking-widest">— Director of Operations</p>
      </div>
      <button className="h-32 w-32 rounded-full bg-black text-white flex items-center justify-center text-[10px] uppercase tracking-widest hover:scale-110 transition-all active:scale-95">
        Partner
      </button>
    </div>
  </section>
);

export default CinematicFootball;