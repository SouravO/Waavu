import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, ArrowRight, Target } from 'lucide-react';

const FootballTriad = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "01",
      title: "Tactical Core",
      subtitle: "The Strategy",
      icon: <Target className="text-[#224e72]" />,
      details: ["High Pressing", "Positional Play", "Data Analytics"],
      theme: "bg-white text-black",
      accent: "text-[#224e72]"
    },
    {
      id: "02",
      title: "First Eleven",
      subtitle: "The Squad",
      icon: <Users className="text-white" />,
      details: ["Global Talent", "Academy Path", "Peak Fitness"],
      theme: "bg-[#224e72] text-white",
      accent: "text-white"
    },
    {
      id: "03",
      title: "Blue Arena",
      subtitle: "The Stadium",
      icon: <MapPin className="text-[#224e72]" />,
      details: ["60k Capacity", "Fan Village", "Matchday Hub"],
      theme: "bg-black text-white",
      accent: "text-[#224e72]"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden font-sans bg-black">
      
      {/* GLOBAL HUD OVERLAY */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference text-white pointer-events-none">
        <h1 className="text-2xl font-black italic tracking-tighter leading-none">CLUB<br/>SYSTEM</h1>
      </div>

      {sections.map((section, i) => (
        <motion.section
          key={i}
          onMouseEnter={() => setHoveredSection(i)}
          onMouseLeave={() => setHoveredSection(null)}
          // Dynamic Flex Logic: 
          // If something is hovered and it's ME: flex-3 (75%)
          // If something is hovered and it's NOT ME: flex-0.5 (12.5% each)
          // If nothing is hovered: flex-1 (equal 33% each)
          animate={{
            flex: hoveredSection === null ? 1 : hoveredSection === i ? 3 : 0.5,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex flex-col justify-between p-8 lg:p-12 border-r border-white/10 last:border-r-0 overflow-hidden ${section.theme}`}
        >
          {/* BACKGROUND DECOR */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-current" />
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-current" />
          </div>

          {/* TOP: IDENTIFIER */}
          <div className="relative z-10 flex justify-between items-start">
            <motion.span 
              animate={{ opacity: hoveredSection === i ? 0.4 : 0.1 }}
              className="text-7xl lg:text-9xl font-black font-mono tracking-tighter"
            >
              {section.id}
            </motion.span>
            <div className={`p-4 rounded-full border ${i === 1 ? 'border-white/20 bg-white/10' : 'border-black/10'}`}>
              {section.icon}
            </div>
          </div>

          {/* MIDDLE: MAIN TITLE */}
          <div className="relative z-10">
            <motion.div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60 italic">
                {section.subtitle}
              </p>
              <h2 className="text-5xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic whitespace-nowrap">
                {section.title.split(' ')[0]}<br/>
                <span className={i !== 1 ? 'text-[#224e72]' : 'text-white/50'}>
                  {section.title.split(' ')[1]}
                </span>
              </h2>
            </motion.div>

            {/* EXPANDABLE CONTENT - Only visible when 75% width */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: hoveredSection === i ? 1 : 0,
                x: hoveredSection === i ? 0 : -20,
                display: hoveredSection === i ? 'block' : 'none'
              }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                    <div className="w-2 h-2 bg-[#224e72] rotate-45" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* BOTTOM: ACTION */}
          <div className="relative z-10 pt-8">
             <motion.div 
               animate={{ opacity: hoveredSection === i ? 1 : 0 }}
               className="flex items-center justify-between border-t border-current/20 pt-4"
             >
                <button className="group flex items-center gap-4 font-black uppercase text-sm tracking-[0.2em]">
                  <span>View Operations</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
             </motion.div>
          </div>
        </motion.section>
      ))}

      {/* FOOTER BAR */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-black hidden lg:flex justify-between text-[9px] font-black uppercase tracking-[0.4em] z-50">
        <div className="flex gap-8">
          <span>EST. 1924</span>
          <span>LONDON_HQ</span>
        </div>
        <div className="flex items-center gap-2 text-[#224e72]">
          <div className="w-2 h-2 bg-[#224e72] rounded-full animate-pulse" />
          ACTIVE_SYSTEM_v4.0
        </div>
      </div>
    </div>
  );
};

export default FootballTriad;