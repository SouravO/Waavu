import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Target, Maximize, Trophy, ArrowUpRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);

  const modules = [
    {
      id: "01",
      title: "Talent Identification",
      description: "Advanced scouting and player assessment using biometric data and AI-driven analytics to find the next generation of football stars.",
      icon: <Dna size={24} />,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
      specs: ["Biometric Tracking", "Mechanical Analysis", "Growth Projection"],
      path: "/services/talent-identification"
    },
    {
      id: "02",
      title: "Comprehensive Support",
      description: "Holistic player development programs encompassing physical, mental, and tactical growth to ensure long-term success.",
      icon: <Target size={24} />,
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80",
      specs: ["Positioning IQ", "Set-Piece Logic", "Decision Matrix"],
      path: "/services/comprehensive-support"
    },
    {
      id: "03",
      title: "Professional Training",
      description: "Elite coaching and skill enhancement sessions led by former professionals and experts to refine your game.",
      icon: <Maximize size={24} />,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
      specs: ["Technical Drills", "Tactical Workshops", "Physical Conditioning"],
      path: "/services/professional-training"
    },
    {
      id: "04",
      title: "Mentorship & Guidance",
      description: "Career guidance and mentorship from industry veterans to navigate the complex path to professional football.",
      icon: <Trophy size={24} />,
      image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80",
      specs: ["Career Pathways", "Mental Resilience", "Networking"],
      path: "/services/mentorship-guidance"
    }
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Service_Ecosystem</p>
          <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12 break-words">
            Strategic <br />
            <span className="italic font-light">Operations.</span>
          </h1>
        </div>
      </section>

      {/* MAIN INTERFACE */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* List Block */}
          <div className="lg:col-span-5 border-r border-black/5 flex flex-col order-2 lg:order-1">
            {modules.map((module, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setFocusedIndex(idx)}
                onClick={() => navigate(module.path)}
                className={`relative p-8 md:p-12 cursor-pointer border-b border-black/5 transition-all duration-500 group overflow-hidden ${focusedIndex === idx ? 'bg-[#F5F5F5]' : 'bg-white'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#125487] transition-transform duration-500 ${focusedIndex === idx ? 'scale-y-100' : 'scale-y-0'}`} />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-black/30 uppercase tracking-[0.3em]">Ref_{module.id}</span>
                    <h3 className={`text-2xl md:text-3xl font-serif italic transition-colors duration-500 ${focusedIndex === idx ? 'text-[#125487]' : 'text-black/40 group-hover:text-black'}`}>
                      {module.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${focusedIndex === idx ? 'bg-[#125487] text-white border-[#125487]' : 'group-hover:bg-black group-hover:text-white'}`}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail Block */}
          <div className="lg:col-span-7 bg-[#F5F5F5] min-h-[400px] md:min-h-[600px] flex flex-col justify-between p-8 md:p-20 relative overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 border-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={focusedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 space-y-8 md:space-y-12"
              >
                <div className="space-y-6 md:space-y-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#125487] flex items-center justify-center text-white shadow-xl">
                    {modules[focusedIndex].icon}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-serif leading-tight">
                    {modules[focusedIndex].title}
                  </h2>
                  <p className="max-w-xl text-lg md:text-xl font-light text-black/60 leading-relaxed">
                    {modules[focusedIndex].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-black/10">
                  {modules[focusedIndex].specs.map((spec, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Parameter_{i+1}</p>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{spec}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 md:pt-12">
                  <button 
                    onClick={() => navigate(modules[focusedIndex].path)}
                    className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
                  >
                    Initiate Discovery 
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#125487] transition-all">
                      <Zap size={18} />
                    </div>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Image Preview */}
            <motion.div 
              key={`img-${focusedIndex}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.05, scale: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <img src={modules[focusedIndex].image} alt="" className="w-full h-full object-cover grayscale" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DATA STRIP */}
      <section className="py-12 px-6 bg-white border-b border-black/5 overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-24 opacity-20">
              <span className="text-[8px] font-black tracking-[1em] uppercase">System_Active_v4.0</span>
              <span className="text-[8px] font-black tracking-[1em] uppercase">Global_Command_Center</span>
              <span className="text-[8px] font-black tracking-[1em] uppercase">Auth_Verified</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
