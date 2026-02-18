import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Target, ArrowRight, Trophy, Star } from 'lucide-react';

const FootballSystem = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  const sections = [
    {
      id: "01",
      title: "The Founder",
      subtitle: "FOUNDER & CHAIRMAN",
      icon: <Star size={20} className="text-white" />,
      theme: "text-white",
      accent: "bg-[#224e72]",
      image: "https://images.unsplash.com/photo-1526232759533-36001e2531d4?q=80&w=2000&auto=format&fit=crop",
      content: {
        header: "Sharath Kuniyil",
        body: "A trailblazing Indian goalkeeper who represented Kerala in the Santhosh Trophy and played for elite I-League clubs like Bengaluru FC and Gokulam Kerala FC. As the first Kerala goalkeeper to captain an I-League team, he brings professional discipline and top-tier expertise to the foundation.",
        list: ["I-League Captain", "Kerala Legend", "Elite Goalkeeper", "Pro Mentor"]
      }
    },
    {
      id: "02",
      title: "Our Mission",
      subtitle: "THE STRATEGIC PURPOSE",
      icon: <Target size={20} className="text-white" />,
      theme: "text-white",
      accent: "bg-[#224e72]",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
      content: {
        header: "Bridging the Gap",
        body: "To bridge the gap between talent and access by identifying and nurturing promising young footballers through world-class training, educational support, and essential life skills development.",
        list: ["Talent Access", "Global Training", "Education", "Life Skills"]
      }
    },
    {
      id: "03",
      title: "Our Vision",
      subtitle: "THE FUTURE LEGACY",
      icon: <Trophy size={20} className="text-white" />,
      theme: "text-white",
      accent: "bg-[#224e72]",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000&auto=format&fit=crop",
      content: {
        header: "Building Leaders",
        body: "To bridge social and economic gaps through football by building a new generation of sports leaders who inspire positive change within their communities and beyond.",
        list: ["Social Mobility", "Community Change", "New Generation", "Excellence"]
      }
    },
    {
      id: "04",
      title: "Core Values",
      subtitle: "THE ORGANIZATIONAL ETHOS",
      icon: <Shield size={20} className="text-white" />,
      theme: "text-white",
      accent: "bg-[#224e72]",
      image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=2000&auto=format&fit=crop",
      content: {
        header: "WAWU Foundations",
        body: "Our culture is built on four non-negotiable pillars that define how we train, how we compete, and how we treat our community. These values are the heartbeat of everything we do.",
        list: ["Inclusivity", "Integrity", "Dedication", "Empowerment"]
      }
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-screen overflow-x-hidden lg:overflow-hidden font-sans bg-black select-none pt-10"
    >
      {/* GLOBAL HUD */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference text-white pointer-events-none">
        <h1 className="text-xl font-black italic tracking-tighter leading-none opacity-80">ABOUT<br/>US</h1>
      </div>

      {sections.map((section, i) => (
        <motion.section
          key={i}
          onMouseEnter={() => setHoveredSection(i)}
          onMouseLeave={() => setHoveredSection(null)}
          animate={{
            flex: hoveredSection === null ? 1 : hoveredSection === i ? 4 : 0.6,
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex flex-col justify-between p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 last:border-none overflow-hidden min-h-[400px] lg:min-h-0 ${section.theme}`}
        >
          {/* IMAGE BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              src={section.image}
              alt={section.title}
              className="h-full w-full object-cover"
              animate={{ 
                scale: hoveredSection === i ? 1.05 : 1.2,
                filter: hoveredSection === i ? 'grayscale(0%)' : 'grayscale(100%)'
              }}
              transition={{ duration: 1.5 }}
            />
            <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredSection === i ? 'opacity-70' : 'opacity-90'}`} 
                 style={{ backgroundColor: i % 2 === 0 ? '#0a0f1e' : '#224e72', mixBlendMode: 'multiply' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>

          {/* BACKGROUND DECOR (ID NUMBER) */}
          <div className="absolute top-0 right-0 p-4 opacity-20 z-10">
            <span className="text-7xl lg:text-9xl font-black italic tracking-tighter text-white">{section.id}</span>
          </div>

          {/* TOP: ICON (Reduced noise in top left) */}
          <div className="relative z-20 flex justify-end items-start">
            <div className="p-3 rounded-full border border-white/30 backdrop-blur-sm bg-white/10">
              {section.icon}
            </div>
          </div>

          {/* MIDDLE: CONTENT EXPANSION */}
          <div className="relative z-20 flex flex-col justify-center h-full py-8 lg:py-0">
            <AnimatePresence mode="wait">
              {hoveredSection === i ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="max-w-3xl"
                >
                  {/* EYEBROW HEADING - Placed right above the name/header */}
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a0aec0] mb-2">
                    {section.subtitle}
                  </p>
                  
                  <h3 className="text-3xl lg:text-6xl font-black uppercase italic tracking-tighter mb-4 lg:mb-6 leading-none text-white drop-shadow-2xl">
                    {section.content.header}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
                    <div className="md:col-span-3">
                      <p className="text-sm lg:text-base leading-relaxed font-medium text-white/90">
                        {section.content.body}
                      </p>
                    </div>
                    
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-50 border-b border-white/20 pb-2">Key Highlights</p>
                      <ul className="grid grid-cols-2 md:grid-cols-1 gap-2">
                        {section.content.list.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider">
                            <div className={`w-2 h-2 rotate-45 ${section.accent} shadow-[0_0_10px_rgba(34,78,114,0.8)]`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center lg:items-start"
                >
                   {/* VERTICAL TITLE FOR COLLAPSED STATE */}
                   <div className="rotate-180 [writing-mode:vertical-lr] items-center hidden lg:flex">
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50 whitespace-nowrap">
                       {section.title.toUpperCase()}
                     </span>
                   </div>
                   {/* MOBILE COLLAPSED TITLE */}
                   <h2 className="lg:hidden text-2xl font-black uppercase italic italic text-white/80">
                     {section.title}
                   </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOTTOM: INTERACTION */}
          <div className="relative z-20">
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-white/70 transition-colors">
                <span>Discovery Mode</span>
                <ArrowRight size={14} />
              </button>
              <div className="w-12 h-[2px] bg-white opacity-40" />
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default FootballSystem;