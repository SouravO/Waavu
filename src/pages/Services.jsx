import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dna,
  ShieldCheck,
  Maximize,
  Terminal,
  Zap,
  ArrowRight,
  Activity,
  Target,
  Trophy,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnicalServices = () => {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modules = [
    {
      id: "MODULE_01",
      title: "Talent Identification",
      description: "Advanced scouting and player assessment using biometric data and AI-driven analytics to find the next generation of football stars.",
      icon: <Dna size={24} />,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000&auto=format&fit=crop",
      specs: ["Biometric Tracking", "Mechanical Analysis", "Growth Projection"],
      path: "/services/talent-identification"
    },
    {
      id: "MODULE_02",
      title: "Comprehensive Support",
      description: "Holistic player development programs encompassing physical, mental, and tactical growth to ensure long-term success.",
      icon: <Target size={24} />,
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop",
      specs: ["Positioning IQ", "Set-Piece Logic", "Decision Matrix"],
      path: "/services/comprehensive-support"
    },
    {
      id: "MODULE_03",
      title: "Professional Training",
      description: "Elite coaching and skill enhancement sessions led by former professionals and experts to refine your game.",
      icon: <Maximize size={24} />,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
      specs: ["Technical Drills", "Tactical Workshops", "Physical Conditioning"],
      path: "/services/professional-training"
    },
    {
      id: "MODULE_04",
      title: "Mentorship & Guidance",
      description: "Career guidance and mentorship from industry veterans to navigate the complex path to professional football.",
      icon: <Trophy size={24} />,
      image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=2000&auto=format&fit=crop",
      specs: ["Career Pathways", "Mental Resilience", "Networking"],
      path: "/services/mentorship-guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#224e72] overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#224e7233_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Service Ecosystem</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Strategic <br />
              <span className="text-white/20">Operations</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              MULTIDISCIPLINARY APPROACH TO ATHLETIC EXCELLENCE // SYSTEM VERSION 4.0
            </p>
          </div>
        </div>

        {/* MAIN INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          {/* NAVIGATION LIST */}
          <div className="lg:col-span-5 bg-black flex flex-col">
            {modules.map((module, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setFocusedIndex(idx)}
                onClick={() => navigate(module.path)}
                className={`relative p-8 lg:p-12 cursor-pointer border-b border-white/10 transition-all duration-500 group overflow-hidden ${focusedIndex === idx ? 'bg-white/5' : 'hover:bg-white/2'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#224e72] transition-transform duration-500 ${focusedIndex === idx ? 'scale-y-100' : 'scale-y-0'}`} />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{module.id}</span>
                    <h3 className={`text-2xl lg:text-3xl font-black italic uppercase tracking-tighter transition-colors duration-500 ${focusedIndex === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                      {module.title}
                    </h3>
                  </div>
                  <div className={`p-2 border rounded-full transition-all duration-500 ${focusedIndex === idx ? 'border-[#224e72] text-[#224e72] rotate-90' : 'border-white/10 text-white/20'}`}>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* BACKGROUND PREVIEW ON HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                   <img src={module.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            ))}
          </div>

          {/* DETAIL VIEW */}
          <div className="lg:col-span-7 bg-black min-h-[500px] lg:min-h-0 relative overflow-hidden flex flex-col justify-center p-8 lg:p-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={focusedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="mb-12">
                  <div className="w-16 h-16 bg-[#224e72] flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(34,78,114,0.3)]">
                    {modules[focusedIndex].icon}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-8">
                    {modules[focusedIndex].title}
                  </h2>
                  <p className="text-lg md:text-xl font-medium text-white/60 leading-relaxed max-w-xl">
                    {modules[focusedIndex].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-10">
                  {modules[focusedIndex].specs.map((spec, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-1 bg-[#224e72] rotate-45" />
                        <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">Metric_{i+1}</span>
                      </div>
                      <p className="text-xs font-black uppercase tracking-widest text-white">{spec}</p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => navigate(modules[focusedIndex].path)}
                  className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#224e72] hover:text-white transition-all duration-300 flex items-center gap-4"
                >
                  Initiate Discovery <Zap size={14} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* BACKGROUND DECOR */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
              <Activity size={600} className="absolute -bottom-40 -right-40 text-white" />
            </div>
          </div>
        </div>

        {/* BOTTOM HUD */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> System Online</span>
             <span>Region: Global</span>
          </div>
          <div className="flex gap-8">
             <span>Data Sync: 100%</span>
             <span>Auth: WAWU_SECURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServices;