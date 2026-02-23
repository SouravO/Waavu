import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dna,
  ShieldCheck,
  Maximize,
  MousePointer2,
  Terminal,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesDashboard = () => {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);

  const modules = [
    {
      id: "BIO-01",
      title: "Talent Identification",
      description: "Advanced scouting and player assessment using biometric data and AI-driven analytics.",
      icon: <Dna size={24} />,
      color: "#224e72",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000&auto=format&fit=crop",
      specs: ["VO2 Max Tracking", "Mechanical Analysis", "Growth Projection"],
      path: "/services/talent-identification"
    },
    {
      id: "DEV-02",
      title: "Comprehensive Support",
      description: "Holistic player development programs encompassing physical, mental, and tactical growth.",
      icon: <Terminal size={24} />,
      color: "#1a3a54",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop",
      specs: ["Positioning IQ", "Set-Piece Logic", "Decision Matrix"],
      path: "/services/comprehensive-support"
    },
    {
      id: "TRN-03",
      title: "Professional Training",
      description: "Elite coaching and skill enhancement sessions led by former professionals and experts.",
      icon: <Maximize size={24} />,
      color: "#224e72",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
      specs: ["Technical Drills", "Tactical Workshops", "Physical Conditioning"],
      path: "/services/professional-training"
    },
    {
      id: "MNT-04",
      title: "Mentorship and Guidance",
      description: "Career guidance and mentorship from industry veterans to navigate the path to professionalism.",
      icon: <ShieldCheck size={24} />,
      color: "#1a3a54",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
      specs: ["Career Pathways", "Mental Resilience", "Networking Opportunities"],
      path: "/services/mentorship-guidance"
    }
  ];
 
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#224e72] overflow-x-hidden relative pt-20 md:pt-24">

      {/* BACKGROUND AMBIENCE */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          {modules[focusedIndex].image ? (
            <motion.img
              key={`img-${focusedIndex}`}
              src={modules[focusedIndex].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.25, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover saturate-[1.2]"
            />
          ) : (
            <motion.div
              key={`bg-${focusedIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
              style={{ backgroundColor: modules[focusedIndex].color }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-2">
            Service<br /><span className="text-[#224e72]">Modules</span>
          </h1>
          <p className="text-[10px] font-bold tracking-[0.3em] opacity-40 mt-4">SYSTEM VERSION 3.1 // 2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT COLUMN: MODULE SELECTOR */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                onClick={() => navigate(module.path)}
                onMouseEnter={() => setFocusedIndex(idx)}
                whileHover={{ x: 8, scale: 1.02 }}
                className={`relative cursor-pointer p-5 lg:p-6 border transition-all duration-300 overflow-hidden rounded-lg flex-1 ${
                  focusedIndex === idx
                    ? 'border-[#224e72] ring-1 ring-[#224e72]/50 shadow-lg shadow-[#224e72]/20'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* CONDITIONAL IMAGE OR COLOR BACKGROUND */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${focusedIndex === idx ? 'opacity-60' : 'opacity-20'}`}>
                  {module.image ? (
                    <img
                      src={module.image}
                      alt=""
                      className="w-full h-full object-cover saturate-[0.8] hover:saturate-[1.2] transition-all duration-700"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(45deg, ${module.color}, #000)`,
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 ">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black opacity-60 tracking-widest">{module.id}</span>
                    {focusedIndex === idx ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#224e72] text-[10px] font-black px-3 py-1 flex items-center gap-1 italic"
                      >
                        NOW <ArrowRight size={10} />
                      </motion.span>
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-white/20" />
                    )}
                  </div>
                  <h3 className="text-lg lg:text-xl font-black italic uppercase mt-2">{module.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: DATA DISPLAY */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg relative overflow-hidden group min-h-[600px] lg:min-h-[300px]">
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 " />

            <AnimatePresence mode="wait" >
              <motion.div
                key={focusedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-6 lg:p-12 h-full flex flex-col justify-between "
              >
                <div className=''>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block p-4 bg-white text-black mb-6 lg:mb-8 rounded-lg"
                  >
                    {modules[focusedIndex].icon}
                  </motion.div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4 lg:mb-6">
                    {modules[focusedIndex].title}
                  </h2>

                  <p className="text-base lg:text-xl text-gray-400 font-medium leading-relaxed">
                    {modules[focusedIndex].description}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-8">
                    {modules[focusedIndex].specs.map((spec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p className="text-[9px] lg:text-[10px] font-black text-[#224e72] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                          <Zap size={10} /> Metric_{i + 1}
                        </p>
                        <p className="font-bold text-xs lg:text-sm uppercase tracking-wider">{spec}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => navigate(modules[focusedIndex].path)}
                    className="mt-8 bg-[#98ff98] text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#88ee88] transition-colors inline-flex items-center gap-2 rounded"
                  >
                    Learn More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 text-white/10 flex items-center gap-2">
              <MousePointer2 size={12} />
              <span className="text-[8px] font-black tracking-widest uppercase">System_Active // {modules[focusedIndex].id}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #224e72;
        }
      `}</style>
    </div>
  );
};

export default ServicesDashboard;