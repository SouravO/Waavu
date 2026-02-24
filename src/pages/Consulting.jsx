import React, { useEffect } from 'react';
import { Activity, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnicalConsulting = () => {
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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Consulting Module // STRATEGY</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
            Expert <br />
            <span className="text-white/20">Advisory.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          <div className="lg:col-span-8 bg-black p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
             <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8">Consulting Services</h2>
             <p className="text-lg text-white/60 font-medium leading-relaxed mb-12">
               Strategic guidance for football academies, local clubs, and organizations aiming to implement professional standards and sustainable growth models.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-white/5 bg-white/2">
                   <p className="text-xs font-black uppercase tracking-widest text-white mb-2">Infrastructure</p>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Facility design and operational protocol optimization.</p>
                </div>
                <div className="p-6 border border-white/5 bg-white/2">
                   <p className="text-xs font-black uppercase tracking-widest text-white mb-2">Technical</p>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Curriculum development and performance audit systems.</p>
                </div>
             </div>
          </div>
          <div className="lg:col-span-4 bg-black p-12 flex flex-col items-center justify-center gap-8">
             <Shield size={48} className="text-[#224e72]" />
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Authorized Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalConsulting;
