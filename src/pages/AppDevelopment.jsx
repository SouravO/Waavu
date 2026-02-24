import React, { useEffect } from 'react';
import { Activity, Zap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnicalAppDev = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#224e72] overflow-x-hidden pt-32 pb-24">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -bottom-40 -right-40 text-white" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors mb-12 group">
          <div className="p-2 border border-white/10 group-hover:border-white/40 transition-colors"><ArrowLeft size={16} /></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Previous</span>
        </button>

        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#224e72]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Program Module // QUEST</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
            Digital <br />
            <span className="text-white/20">Evolution.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          <div className="lg:col-span-8 bg-black p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
             <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8">Quest Program</h2>
             <p className="text-lg text-white/60 font-medium leading-relaxed mb-12">
               Exploring the intersection of technology and athletic performance. Our Quest program focuses on digital solutions for modern football development.
             </p>
             <div className="p-8 border border-white/5 bg-white/2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-loose">
                  [ System Status: Developmental ] <br />
                  Integration of mobile tracking, wearable analytics, and cloud-based performance dashboards for elite sporting environments.
                </p>
             </div>
          </div>
          <div className="lg:col-span-4 bg-black p-12 flex flex-col items-center justify-center gap-8">
             <Zap size={48} className="text-[#224e72] animate-pulse" />
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAppDev;
