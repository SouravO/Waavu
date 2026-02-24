import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Fingerprint, Plus, ArrowRight, Shield, Zap, Star, Globe, Terminal, Anchor, Activity } from 'lucide-react';

const WAWUStrategicFoundation = () => {
  const horizontalRef = useRef(null);
  
  // Track vertical scroll within the specific horizontal container
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });

  // Spring for "heavy" mechanical movement
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Translate the horizontal div based on vertical scroll depth
  // -75% assumes 4 panels total (0%, -25%, -50%, -75%)
  const xTranslate = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="bg-black text-white selection:bg-[#2c518a] antialiased font-sans">
      
      {/* 1. INITIAL VERTICAL HERO (WHITE THEME) */}
      <section className="relative h-screen flex items-center px-12 md:px-32 bg-[#F5F5F7] text-black overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-6xl z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-white border border-[#2c518a] shadow-sm">
              <Anchor size={32} className="text-[#2c518a]" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] text-[#2c518a] block uppercase text-nowrap">ID_VER_4.0</span>
              <span className="text-[8px] font-bold text-black/30 uppercase underline decoration-[#2c518a]">Manifesto_Init</span>
            </div>
          </motion.div>
          
          <h1 className="text-[10vw] leading-[0.85] font-black italic tracking-tighter uppercase mb-12 text-[#1a1a1a]">
            A Walking <br /> <span className="text-[#2c518a] not-italic">Work of Art.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold max-w-xl leading-tight text-black/60 uppercase tracking-tight">
            Empowering Talent // <span className="text-black">Elevating Communities.</span> 
          </p>
        </div>

        {/* SCROLL PROMPT */}
        <div className="absolute bottom-10 left-12 flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-[#2c518a]" />
               <span className="text-[8px] font-black tracking-[0.5em] uppercase text-[#2c518a]">Scroll_To_Audit</span>
            </div>
            <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-12 bg-black/20 ml-6" 
            />
        </div>
      </section>

      {/* 2. THE HORIZONTAL PIVOT TRACK */}
      {/* Container height determines the "speed" of the horizontal scroll */}
      <section ref={horizontalRef} className="relative h-[500vh] bg-black">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div style={{ x: xTranslate }} className="flex h-full w-[400vw]">
            
            {/* PANEL 1: SYSTEM LOG / THE MISSION */}
            <section className="relative w-screen h-full flex-shrink-0 flex items-center px-12 md:px-32 border-r border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#2c518a] flex items-center justify-center text-[#2c518a] text-[10px] font-black">01</div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#2c518a]">MISSION_SCRAPE</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-white">
                          Bridging <br/><span className="text-white/20">The Gap.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-white/70 max-w-lg leading-relaxed uppercase">
                          Transforming raw talent into real-world <span className="text-[#2c518a]">opportunity</span> for young athletes from underserved clusters.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-[#2c518a]/10 mix-blend-overlay z-10" />
                        <img src="https://images.unsplash.com/photo-1526232761682-d26e47ac1740?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000" alt="pitch" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <Terminal size={20} className="text-[#2c518a] mb-2" />
                            <p className="text-[8px] font-black text-white/40 tracking-widest uppercase">System_Entry_Log: OK</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PANEL 2: TECHNICAL GRID (NAVY THEME) */}
            <section className="relative w-screen h-full flex-shrink-0 bg-[#2c518a] flex items-center px-12 md:px-32">
                <div className="max-w-7xl w-full">
                    <div className="mb-16 flex items-end justify-between">
                        <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] text-white">
                          Holistic <br /><span className="text-black/40">Empowerment.</span>
                        </h2>
                        <Activity className="text-black/20" size={100} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20 shadow-2xl">
                        {[
                            { icon: <Shield size={28} />, title: "Integrity", id: "P_01", desc: "Highest moral standards in every match." },
                            { icon: <Zap size={28} />, title: "Discipline", id: "P_02", desc: "Excellence both on and off the field." },
                            { icon: <Star size={28} />, title: "Inclusivity", id: "P_03", desc: "A tool for every aspiring athlete." }
                        ].map((spec, i) => (
                            <div key={i} className="bg-[#2c518a] p-12 space-y-12 hover:bg-white hover:text-[#2c518a] transition-all duration-500 group">
                                <div className="flex justify-between items-start">
                                    <div className="group-hover:scale-110 transition-transform">{spec.icon}</div>
                                    <span className="text-[8px] font-black opacity-40">[{spec.id}]</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-black italic uppercase leading-none">{spec.title}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest leading-loose opacity-70 group-hover:opacity-100">{spec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PANEL 3: GLOBAL SYNERGY */}
            <section className="relative w-screen h-full flex-shrink-0 bg-black flex items-center px-12 md:px-32">
                <div className="grid lg:grid-cols-12 gap-20 w-full items-center">
                    <div className="lg:col-span-6 space-y-10">
                        <Globe className="text-[#2c518a]" size={48} />
                        <h2 className="text-7xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter text-white">
                          Global <br/><span className="text-white/20">Synergy.</span>
                        </h2>
                        <p className="text-sm md:text-lg font-bold text-white/50 uppercase tracking-[0.1em] leading-relaxed border-l-4 border-[#2c518a] pl-8 max-w-md">
                          Bridging the gap to professional stages on state and national levels.
                        </p>
                        <button className="bg-white text-black px-10 py-5 text-[10px] font-black tracking-[0.4em] uppercase flex items-center gap-4 hover:bg-[#2c518a] hover:text-white transition-all">
                            CONNECT_NOW <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="lg:col-span-6 aspect-video bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2c518a22_0%,_transparent_70%)]" />
                        <div className="text-center z-10">
                            <p className="text-[10px] font-black tracking-[0.5em] text-[#2c518a] mb-4">MAP_DATA_REDACTED</p>
                            <span className="text-[10vw] font-black opacity-10 leading-none">2026</span>
                        </div>
                    </div>
                </div>
            </section>

          </motion.div>
        </div>
      </section>

      {/* 3. FINAL VERTICAL FOOTER */}
      <footer className="relative bg-black border-t border-white/10 p-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="text-[12rem] md:text-[20rem] leading-[0.7] font-black text-white/5 italic tracking-tighter select-none">
            WAWU.
          </div>
          <div className="text-right pb-12 space-y-4">
            <span className="text-[10px] font-black tracking-[0.5em] text-[#2c518a] uppercase">Operational_End_Sequence</span>
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-widest leading-loose">
                Nigeria // Lagos <br/>
                London // HQ <br/>
                © 2026 All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WAWUStrategicFoundation;