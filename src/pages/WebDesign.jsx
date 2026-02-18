import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap, ArrowUpRight, BarChart2, Radio } from 'lucide-react';

const INLLNeoGlass = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-black text-white">L</div>
          <span className="font-black tracking-widest text-sm uppercase">INLL_2026</span>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Enquire Now
        </button>
      </nav>

      {/* --- HERO: THE VIRTUAL PITCH --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* PHOTO 1: THE ATMOSPHERE (Background Depth) */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1575361330880-28233383824a?auto=format&fit=crop&q=80&w=1600" 
            alt="Cinematic stadium background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-xl mb-6"
          >
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">Status: Decoding Talent</span>
          </motion.div>
          <h1 className="text-6xl md:text-[10vw] font-black italic tracking-tighter leading-none uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/20">
            ELITE DNA<span className="text-cyan-500">.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            The India Next Legend League is a high-performance ecosystem designed to bridge the gap between raw potential and global professional football.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: PERFORMANCE METRICS --- */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid md:grid-cols-12 gap-6">
        {/* PHOTO 2: THE PLAYER (Floating Card) */}
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1526232761682-d26e4fca61d5?auto=format&fit=crop&q=80&w=800" 
              alt="Young athlete in motion" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-1">Live Tracking</p>
              <h3 className="text-2xl font-black italic uppercase">Vanguard Trials</h3>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: <BarChart2 />, title: "Neuro-Analytics", desc: "Measuring cognitive reaction speed and spatial awareness under fatigue." },
            { icon: <Users />, title: "Pro Pathway", desc: "Partnerships with top-tier clubs in Spain, Germany, and the UK." },
            { icon: <Radio />, title: "Broadcasting", desc: "Final stages of trials are broadcast live to global scouting networks." },
            { icon: <Trophy />, title: "Sponsorship", desc: "Full kit and gear sponsorship for the top 50 selected finalists." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold uppercase italic mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE GLOBAL REACH --- */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-cyan-900/10">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative">
          {/* PHOTO 3: THE VISION (Panoramic) */}
          <img 
            src="https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&q=80&w=1600" 
            alt="Football field aerial view" 
            className="w-full h-[400px] object-cover brightness-50 contrast-125"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 backdrop-blur-[2px]">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8">
              The Journey to <br /> <span className="text-cyan-400 underline decoration-white/20">The First XI</span>
            </h2>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-10 py-4 rounded-full font-black uppercase tracking-widest flex items-center gap-4 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Start Your Evaluation <ArrowUpRight />
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">
          © 2026 INDIA NEXT LEGEND LEAGUE // ALL SYSTEMS NOMINAL
        </div>
        <div className="flex gap-12 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="text-cyan-500">Instagram</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default INLLNeoGlass;