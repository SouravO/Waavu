import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Target, Zap, Shield, Globe, Cpu, LayoutGrid, ChevronRight, Activity } from 'lucide-react';

const AtmosHome = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Depth & Reveal Animations
  const heroScale = useTransform(smoothY, [0, 0.2], [1, 1.3]);
  const heroY = useTransform(smoothY, [0, 0.2], [0, -100]);
  const bgSkew = useTransform(smoothY, [0.1, 0.4], [0, -5]);
  const gateLeft = useTransform(smoothY, [0, 0.2], ["0%", "-100%"]);
  const gateRight = useTransform(smoothY, [0, 0.2], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="bg-[#010101] text-white selection:bg-[#00ffcc] selection:text-black overflow-x-hidden">
      
      {/* --- STADIUM GATES: THE OPENING ANIMATION --- */}
      <motion.div style={{ x: gateLeft }} className="fixed top-0 left-0 w-1/2 h-full bg-white z-[200] flex items-center justify-end border-r border-black">
         <span className="text-black font-[1000] text-[10vw] translate-x-1/2 uppercase italic">WA</span>
      </motion.div>
      <motion.div style={{ x: gateRight }} className="fixed top-0 right-0 w-1/2 h-full bg-white z-[200] flex items-center justify-start border-l border-black">
         <span className="text-black font-[1000] text-[10vw] -translate-x-1/2 uppercase italic">WU</span>
      </motion.div>

      {/* --- NAVIGATION: HUD MODE --- */}
      <nav className="fixed top-0 left-0 w-full z-[150] p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-3xl font-[1000] italic uppercase tracking-tighter">WAWU.</div>
        <div className="flex gap-4">
           <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
              <Activity size={18} className="text-[#00ffcc]" />
           </div>
           <button className="bg-white text-black px-8 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#00ffcc] transition-colors">
              Access System
           </button>
        </div>
      </nav>

      {/* --- HERO: THE PITCH DEPTH --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, y: heroY }}
          className="relative z-10 text-center"
        >
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-[10px] font-black tracking-[1em] uppercase mb-8 text-[#00ffcc]"
          >
             Synchronizing Talent...
          </motion.div>
          <h1 className="text-[15vw] font-[1000] leading-none uppercase italic tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>FUTURE</span> <br /> OF POWER.
          </h1>
        </motion.div>

        {/* Tactical Radar Background */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
           <div className="w-[100vw] h-[100vw] border-[1px] border-white/20 rounded-full" />
           <div className="absolute w-[70vw] h-[70vw] border-[1px] border-white/20 rounded-full" />
           <div className="absolute w-[40vw] h-[40vw] border-[1px] border-white/20 rounded-full" />
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent" 
           />
        </div>
      </section>

      {/* --- SECTION 2: THE 3D SKEW BENTO --- */}
      <motion.section 
        style={{ skewY: bgSkew }}
        className="relative py-32 px-4 md:px-10 z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-[1700px] mx-auto">
          
          {/* Card: Bio-Metrics */}
          <div className="md:col-span-8 bg-[#0a0a0a] border border-white/5 p-12 md:p-24 rounded-[60px] relative overflow-hidden group">
            <Cpu className="text-[#00ffcc] mb-8" size={48} />
            <h2 className="text-6xl md:text-9xl font-[1000] uppercase tracking-tighter leading-none mb-8">
               Digital <br /> Scouting.
            </h2>
            <p className="max-w-xl text-xl text-white/40 font-bold uppercase tracking-tight">
               We replace subjective scouting with objective data. Every touch, every sprint, every decision mapped in 3D space.
            </p>
            <div className="absolute bottom-10 right-10 flex gap-2">
               {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-8 bg-[#00ffcc] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>

          {/* Card: The Vision */}
          <div className="md:col-span-4 bg-[#00ffcc] text-black p-12 rounded-[60px] flex flex-col justify-between group cursor-pointer">
             <Target size={60} strokeWidth={3} />
             <div>
                <h4 className="text-5xl font-[1000] uppercase tracking-tighter leading-none mb-4">Elite <br/> Only.</h4>
                <div className="w-full h-1 bg-black/10 relative overflow-hidden">
                   <motion.div 
                     whileInView={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute inset-0 bg-black"
                   />
                </div>
             </div>
          </div>

          {/* Card: Global Grid */}
          <div className="md:col-span-4 bg-white text-black p-12 rounded-[60px] flex flex-col justify-between">
             <Globe size={40} />
             <h4 className="text-4xl font-[1000] uppercase tracking-tighter">Universal <br/> Access.</h4>
          </div>

          <div className="md:col-span-8 bg-[#111] border border-white/10 rounded-[60px] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-md">
                <Shield size={40} className="text-[#00ffcc] mb-6" />
                <h4 className="text-4xl font-[1000] uppercase">Secure Integrity</h4>
                <p className="text-white/40 mt-4 uppercase font-bold text-sm tracking-widest">Powered by Blockchain. Verified by Results.</p>
             </div>
             <LayoutGrid className="text-white/5" size={200} />
          </div>
        </div>
      </motion.section>

      {/* --- SECTION 3: THE PLAYER HEATMAP --- */}
      <section className="py-40 bg-white text-black px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-20">
           <div className="w-full md:w-1/2">
              <h2 className="text-8xl md:text-[10vw] font-[1000] tracking-tighter uppercase leading-none italic">ZONE <br /> <span className="text-[#00ffcc] drop-shadow-lg" style={{ WebkitTextStroke: '2px black' }}>CONTROL.</span></h2>
           </div>
           <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-10">
                 {[
                   { label: "Identification", val: "99.2%" },
                   { label: "Acceleration", val: "+14%" },
                   { label: "Retention", val: "88%" },
                   { label: "Placement", val: "128" }
                 ].map((stat, i) => (
                   <div key={i} className="border-t-4 border-black pt-6">
                      <p className="text-5xl font-[1000]">{stat.val}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE "FIELD" REVEAL --- */}
      <section className="h-screen w-full flex items-center justify-center relative bg-black px-6">
        <div className="text-center z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[15vw] font-[1000] tracking-tighter uppercase leading-none italic mb-12"
          >
            ENTER THE <br /> <span className="text-[#00ffcc]">ARENA.</span>
          </motion.h2>
          <button className="group relative bg-white text-black px-20 py-10 rounded-full font-[1000] text-2xl uppercase tracking-tighter overflow-hidden">
             <span className="relative z-10">Join the Collective</span>
             <div className="absolute inset-0 bg-[#00ffcc] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
        {/* Decorative Grid Lines */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#00ffcc]/10 to-transparent" />
      </section>

      {/* --- MINIMALIST SYSTEM FOOTER --- */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black">
        <div className="text-3xl font-[1000] italic">WAWU.</div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
           <span className="hover:text-[#00ffcc] cursor-pointer transition">Terminal</span>
           <span className="hover:text-[#00ffcc] cursor-pointer transition">Instagram</span>
           <span className="hover:text-[#00ffcc] cursor-pointer transition">API</span>
        </div>
        <div className="text-[9px] font-black uppercase tracking-widest opacity-20">System ID: 002-WAWU-2026</div>
      </footer>
    </div>
  );
};

export default AtmosHome;