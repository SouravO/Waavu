import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize, CheckCircle, Trophy, Activity, Users, Shield, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalTraining = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -top-40 -right-40 text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#224e7233_0%,_transparent_70%)]" />
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
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Service Module TRN_03</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Professional <br />
              <span className="text-white/20">Training</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              ELITE COACHING // SKILL ENHANCEMENT // PERFORMANCE OPTIMIZATION
            </p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 mb-24">
          {/* IMAGE PANEL */}
          <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
              alt="Training Session"
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 p-4 bg-black/80 backdrop-blur-md border-l-2 border-[#224e72]">
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Elite Protocol Active</span>
            </div>
          </div>

          {/* FEATURES PANEL */}
          <div className="lg:col-span-5 bg-black p-8 lg:p-12 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8">Training Elements</h3>
              <div className="space-y-6">
                {[
                  { title: 'Technical Drills', desc: 'Refining ball mastery, passing accuracy, and clinical shooting precision.' },
                  { title: 'Tactical Workshops', desc: 'Developing deep game intelligence and advanced strategic understanding.' },
                  { title: 'Conditioning', desc: 'Strength, speed, and endurance optimization for professional level competition.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 p-4 border border-white/5 hover:border-white/10 transition-colors bg-white/2">
                    <div className="p-2 h-fit bg-[#224e72] shadow-[0_0_15px_rgba(34,78,114,0.3)]">
                      <Maximize size={14} />
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
            { icon: Trophy, title: 'Pro Mentorship', desc: 'Direct coaching from former professional players and UEFA-certified tactical experts.' },
            { icon: Activity, title: 'Live Tracking', desc: 'Continuous performance monitoring using high-precision telemetry and video analysis.' },
            { icon: Users, title: 'Squad Training', desc: 'High-intensity collective sessions designed to build chemistry and tactical cohesion.' },
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
           <Target size={400} className="absolute -top-40 -left-40 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">Elevate Your <br /> Performance</h3>
             <p className="text-white/70 font-medium text-lg mb-12 uppercase tracking-widest">Transforming dedication into professional excellence on the pitch.</p>
             <button 
                onClick={() => navigate('/contact')}
                className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-4 mx-auto"
             >
                Join Training <Zap size={14} />
             </button>
           </div>
        </div>

        {/* FOOTER HUD */}
        <div className="mt-12 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
           <span>Module: Pro Training // TRN_03</span>
           <span>Status: High Intensity Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTraining;
