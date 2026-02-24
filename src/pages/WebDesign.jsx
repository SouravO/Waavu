import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Zap, ArrowUpRight, BarChart2, Radio, Search, Target, Link as LinkIcon, Globe, Layout, Eye, MapPin, Activity, Shield } from 'lucide-react';

const TechnicalINL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#224e72] overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -top-40 -left-40 text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#224e7233_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Flagship Tournament // INLL_2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Elite <br />
              <span className="text-white/20">DNA.</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              HIGH-PERFORMANCE ECOSYSTEM // SCOUTING hidden TALENTS // NATIONAL STAGE
            </p>
          </div>
        </div>

        {/* HERO IMAGE PANEL */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-white/10 mb-24 group">
           <img 
            src="https://images.unsplash.com/photo-1575361330880-28233383824a?auto=format&fit=crop&q=80&w=1600" 
            alt="Stadium" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">India Next Legend League</h2>
             <p className="text-lg text-white/60 font-medium leading-relaxed">
               Bridging the gap between raw potential and global professional football through a nationwide discovery platform.
             </p>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 mb-24">
          <div className="lg:col-span-4 bg-black p-12 flex flex-col justify-center">
             <span className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] block mb-6">Mission Objective</span>
             <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-8 leading-none">Scout. Nurture. <br />Connect.</h3>
             <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-loose">
               INLL is WAWU's premier platform empowering aspiring players to showcase skills, gain visibility, and receive holistic support.
             </p>
          </div>
          
          <div className="lg:col-span-8 bg-black grid md:grid-cols-2 gap-px bg-white/10">
             {[
               { icon: <Search />, title: "Rural Scouting", desc: "Identifying promising players from grassroots levels across the nation." },
               { icon: <Target />, title: "Competitive Format", desc: "Providing an elite stage for players to showcase skills under pressure." },
               { icon: <LinkIcon />, title: "Pro Pathways", desc: "Linking talents with professional clubs, mentors, and global sponsors." },
               { icon: <Shield />, title: "Holistic Support", desc: "Ensuring athletes receive training and education for complete success." }
             ].map((item, i) => (
               <div key={i} className="p-12 bg-black hover:bg-white/5 transition-colors group">
                  <div className="text-[#224e72] mb-8 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-[#224e72] p-12 lg:p-20 text-center relative overflow-hidden group">
           <Globe size={400} className="absolute -bottom-40 -right-40 text-white/5 group-hover:rotate-12 transition-transform duration-1000" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">Begin Your <br /> Evaluation</h3>
             <p className="text-white/70 font-medium text-lg mb-12 uppercase tracking-widest">The journey to the First XI starts here. All systems nominal.</p>
             <button className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-4 mx-auto">
                Enquire Now <ArrowUpRight size={14} />
             </button>
           </div>
        </div>

        {/* FOOTER HUD */}
        <div className="mt-12 flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
           <span>Status: Decoding Talent // INLL_V4</span>
           <span>© 2026 INDIA NEXT LEGEND LEAGUE</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalINL;
