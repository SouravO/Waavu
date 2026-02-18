import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Globe, Shield, Star, Zap, Anchor } from 'lucide-react';

/**
 * WAWU Foundation - Home Page
 * Primary Blue: #2c518a
 */

const WAWUVelvet = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });

  return (
    <div ref={containerRef} className="bg-white text-[#1a1a1a] font-['Poppins',sans-serif] selection:bg-[#2c518a] selection:text-white">
      {/* MINIMALIST HUD */}
      <nav className="fixed top-0 w-full p-10 flex justify-between items-center z-[110] mix-blend-difference">
        <div className="flex items-center gap-2">
           <div className="w-10 h-[1px] bg-[#2c518a]" />
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">WAWU_FOUNDATION</span>
        </div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest opacity-60 text-white cursor-pointer">
          <span>About Us</span>
          <span>Initiatives</span>
          <span>Contact</span>
        </div>
      </nav>

      <section className="relative h-[800vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          <MonolithHero progress={smoothProgress} />
          <ExpandingWindow progress={smoothProgress} />
          <TechnicalGrid progress={smoothProgress} />
          <LiquidMap progress={smoothProgress} />

        </div>
      </section>
    </div>
  );
};

/* --- 1. MONOLITH HERO --- */
const MonolithHero = ({ progress }) => {
  const opacity = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.15], [0, -100]);
  const letterSpacing = useTransform(progress, [0, 0.15], ["-0.05em", "0.1em"]);
  const videoOpacity = useTransform(progress, [0, 0.12], [0.4, 0]);

  // Using a cinematic football background video
  const videoId = "V-G_m069jS8"; 
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0`;

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col items-center justify-center">
      <motion.div style={{ opacity: videoOpacity }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2">
          <iframe className="w-full h-full scale-110 grayscale contrast-125 brightness-50" src={embedUrl} title="WAWU Hero" allow="autoplay; encrypted-media" frameBorder="0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-10">
        <motion.h1 style={{ letterSpacing }} className="text-[10vw] font-light italic leading-[0.85] text-center uppercase">
          A Walking <br /> 
          <span className="font-black not-italic text-[#2c518a]">Work of Art.</span>
        </motion.h1>
        
        <div className="mt-12 flex flex-col items-center gap-4">
          <motion.div initial={{ height: 0 }} animate={{ height: 80 }} transition={{ duration: 1.5, ease: "circOut" }} className="w-[1px] bg-[#2c518a]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-zinc-400">
            Empowering Talent // Elevating Communities
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* --- 2. EXPANDING WINDOW: THE MISSION --- */
const ExpandingWindow = ({ progress }) => {
  const width = useTransform(progress, [0.15, 0.3, 0.4], ["2px", "80vw", "100vw"]);
  const height = useTransform(progress, [0.15, 0.3, 0.4], ["20vh", "60vh", "100vh"]);
  const borderRadius = useTransform(progress, [0.35, 0.4], ["40px", "0px"]);
  const opacity = useTransform(progress, [0.12, 0.18, 0.45, 0.5], [0, 1, 1, 0]);

  return (
    <motion.div style={{ width, height, borderRadius, opacity }} className="absolute overflow-hidden bg-[#1a1a1a] z-40 shadow-2xl">
      <img src="https://images.unsplash.com/photo-1526232761682-d26e47ac1740?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-30 scale-110" alt="Football Pitch" />
      <div className="absolute inset-0 flex items-center justify-center p-10 md:p-20 text-center">
        <div className="max-w-4xl space-y-8">
            <h2 className="text-white text-3xl md:text-5xl font-medium italic leading-tight">
            "Bridging the gap between <span className="text-[#2c518a] font-bold">raw talent</span> and <span className="text-[#2c518a] font-bold">real opportunity.</span>"
            </h2>
            <p className="text-white/60 text-sm md:text-lg uppercase tracking-widest font-light leading-relaxed">
                WAWU Foundation is dedicated to the upliftment of young players from communities with limited access to opportunities.
            </p>
        </div>
      </div>
    </motion.div>
  );
};

/* --- 3. TECHNICAL GRID: CORE VALUES --- */
const TechnicalGrid = ({ progress }) => {
  const opacity = useTransform(progress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.45, 0.75], [100, -100]);
  
  const specs = [
    { icon: <Shield size={28} />, title: "Integrity", desc: "Upholding the highest moral standards in every match and mentorship.", coord: "PILLAR_01" },
    { icon: <Zap size={28} />, title: "Discipline", desc: "Fostering the dedication required to excel both on and off the field.", coord: "PILLAR_02" },
    { icon: <Star size={28} />, title: "Inclusivity", desc: "Ensuring football remains a powerful tool for every aspiring athlete.", coord: "PILLAR_03" }
  ];

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 z-50 bg-[#2c518a] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl h-full flex flex-col justify-center px-10">
        <div className="grid grid-cols-12 gap-4 items-end mb-20">
            <div className="col-span-12 lg:col-span-8">
                <h2 className="text-white text-[7vw] font-black uppercase leading-[0.85] tracking-tighter">
                    Holistic <br /><span className="text-[#1a1a1a]">Empowerment.</span>
                </h2>
            </div>
            <div className="hidden lg:block col-span-4 border-l border-white/20 pl-8 pb-4">
                <p className="text-white/60 text-[10px] font-medium tracking-[0.2em] leading-relaxed uppercase">
                    ACADEMIC ACCESS<br />
                    CLUB PLACEMENT<br />
                    NATIONAL PATHWAYS
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {specs.map((spec, i) => (
            <div key={i} className="bg-[#2c518a] p-10 space-y-8 hover:bg-white group transition-all duration-500">
               <div className="flex justify-between items-start">
                  <div className="text-white group-hover:text-[#2c518a] transition-colors">{spec.icon}</div>
                  <span className="text-[9px] font-bold text-white/40 group-hover:text-[#2c518a]/40 tracking-widest">[{spec.coord}]</span>
               </div>
               <div className="space-y-4">
                  <h3 className="text-3xl font-bold italic text-white group-hover:text-[#1a1a1a] transition-colors leading-none uppercase">
                    {spec.title}
                  </h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-[#2c518a] leading-loose">
                    {spec.desc}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* --- 4. LIQUID MAP: GLOBAL REACH --- */
const LiquidMap = ({ progress }) => {
  const opacity = useTransform(progress, [0.75, 0.82, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0.75, 0.9], [0.95, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center z-20 px-10 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-10 md:gap-20">
        <div className="col-span-1 lg:col-span-5 space-y-10">
          <Globe className="text-[#2c518a]" size={40} />
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">Global <br/> Synergy.</h2>
          <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest leading-loose border-l-2 border-[#2c518a] pl-6">
            From raw talent to professional stages. We represent teams at state and national levels, bridging the gap to excellence.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-7 bg-[#1a1a1a] aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2c518a]/30 to-transparent opacity-50" />
            <div className="absolute bottom-10 left-10 space-y-2">
                <span className="text-[10px] font-bold text-[#2c518a] uppercase tracking-[0.4em]">Mission Status: Active</span>
                <p className="text-white font-bold text-2xl italic tracking-wide">Transforming Communities Through Football</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WAWUVelvet;