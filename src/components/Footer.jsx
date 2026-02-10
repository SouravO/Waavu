import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, ArrowUpRight, Instagram, Twitter } from 'lucide-react';

const StadiumTacticalFooter = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer 
      onMouseMove={handleMouseMove}
      className="relative w-full block bg-black overflow-hidden font-sans border-t border-white/5"
    >
      {/* 1. TACTICAL OVERLAY BACKGROUND */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #F0F0F0 0%, #224e72 40%, #000000 100%)'
        }}
      >
        {/* Field Markings Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="100%" r="300" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <rect x="20%" y="80%" width="60%" height="40%" fill="none" stroke="white" strokeWidth="2" />
          <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="4" />
        </svg>

        {/* Interactive "Player" Nodes */}
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="absolute w-64 h-64 bg-[#98ff98]/10 blur-[100px] rounded-full pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* UPPER: BIG IMPACT HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-[#98ff98] text-black px-3 py-1 text-[10px] font-black uppercase italic w-fit">
              <Target size={12} /> Strategic Impact
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white italic leading-[0.8] tracking-tighter uppercase">
              GOAL <br /> <span className="opacity-40 text-transparent stroke-text">ORIENTED.</span>
            </h2>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#98ff98] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white p-8 rounded-none border-r-8 border-b-8 border-[#224e72]">
              <p className="text-black font-black text-xl mb-1 italic">DONATE NOW</p>
              <p className="text-black/50 text-xs font-bold uppercase tracking-widest">Fuel the Foundation</p>
              <ArrowUpRight className="absolute top-4 right-4 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* MIDDLE: THE "SQUAD" GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Community", val: "75+", icon: Users },
            { label: "Pitches Built", val: "12", icon: Target },
            { label: "Scholarships", val: "250", icon: Trophy },
            { label: "Regions", val: "Global", icon: Users },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <stat.icon size={20} className="text-[#98ff98] mb-4" />
              <p className="text-3xl font-black text-white italic">{stat.val}</p>
              <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM: FOOTER NAV */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-8">
          <div className="flex gap-10">
            <div className="space-y-2">
              <p className="text-white font-black text-xs uppercase tracking-widest italic">Follow the Game</p>
              <div className="flex gap-4 text-white/40">
                <Instagram className="hover:text-white transition-colors cursor-pointer" size={20} />
                <Twitter className="hover:text-white transition-colors cursor-pointer" size={20} />
              </div>
            </div>
            <div className="space-y-2 border-l border-white/10 pl-10">
              <p className="text-white font-black text-xs uppercase tracking-widest italic">Legal</p>
              <div className="flex gap-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Audit</a>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 FOOTBALL FOUNDATION NGO
            </p>
            <p className="text-[#224e72] text-[10px] font-black uppercase tracking-[0.2em]">
              Building the Future, One Pitch at a Time.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default StadiumTacticalFooter;