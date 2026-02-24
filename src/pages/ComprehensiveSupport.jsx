import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, CheckCircle, Brain, Heart, Shield, Activity, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComprehensiveSupport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -bottom-40 -right-40 text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#224e7233_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-3 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <div className="p-2 border border-white/10 group-hover:border-white/40 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Modules</span>
        </motion.button>

        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Service Module DEV_02</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Comprehensive <br />
              <span className="text-white/20">Support</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              HOLISTIC DEVELOPMENT // MENTAL CONDITIONING // TACTICAL INTELLIGENCE
            </p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 mb-24">
          {/* IMAGE PANEL */}
          <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop"
              alt="Support System"
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 p-4 bg-black/80 backdrop-blur-md border-l-2 border-[#224e72]">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Holistic Integration Active</span>
            </div>
          </div>

          {/* FEATURES PANEL */}
          <div className="lg:col-span-5 bg-black p-8 lg:p-12 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8">Development Pillars</h3>
              <div className="space-y-6">
                {[
                  { title: 'Positioning IQ', desc: 'Developing advanced spatial awareness and tactical positioning intelligence.' },
                  { title: 'Set-Piece Logic', desc: 'Strategic corner and free-kick methodologies for game-changing impact.' },
                  { title: 'Decision Matrix', desc: 'Real-time analysis and optimized response protocols for high-pressure situations.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 p-4 border border-white/5 hover:border-white/10 transition-colors bg-white/2">
                    <div className="p-2 h-fit bg-[#224e72] shadow-[0_0_15px_rgba(34,78,114,0.3)]">
                      <Target size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-widest mb-1">{feature.title}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED CARDS */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-24">
          {[
            { icon: Brain, title: 'Mental Resilience', desc: 'Psychological conditioning to maintain peak performance under extreme competition pressure.' },
            { icon: Heart, title: 'Wellness Protocols', desc: 'Comprehensive nutrition, recovery, and physiological monitoring for long-term health.' },
            { icon: Shield, title: 'Career Guidance', desc: 'Educational support and professional networking to build a sustainable career beyond the pitch.' },
          ].map((item, i) => (
            <div key={i} className="p-10 bg-black hover:bg-white/5 transition-all group">
              <div className="text-[#224e72] mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="bg-[#224e72] p-12 lg:p-20 text-center relative overflow-hidden group">
           <Terminal size={400} className="absolute -bottom-40 -right-40 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">Empower Your <br /> Future Today</h3>
             <p className="text-white/70 font-medium text-lg mb-12 uppercase tracking-widest">Ensuring every athlete has the tools to succeed on and off the field.</p>
             <button 
                onClick={() => navigate('/contact')}
                className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-4 mx-auto"
             >
                Connect With Us <Zap size={14} />
             </button>
           </div>
        </div>

        {/* FOOTER HUD */}
        <div className="mt-12 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
           <span>Module: Comp Support // DEV_02</span>
           <span>Status: Holistic System Active</span>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveSupport;
