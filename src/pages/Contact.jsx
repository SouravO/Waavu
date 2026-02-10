import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, Zap, BarChart3, ChevronRight, User, Target } from 'lucide-react';

const StrikerBlueprint = () => {
  const [power, setPower] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '', position: 'ST' });
  const [hasScored, setHasScored] = useState(false);

  useEffect(() => {
    if (isExecuting) return;
    const interval = setInterval(() => {
      setPower((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);
    return () => clearInterval(interval);
  }, [isExecuting]);

  const handleStrike = (e) => {
    e.preventDefault();
    if (isExecuting) return;
    setIsExecuting(true);
    
    setTimeout(() => {
      setHasScored(true);
      setTimeout(() => {
        setIsExecuting(false);
        setHasScored(false);
      }, 2000);
    }, 600);
  };

  return (
    <div className="w-full h-[500px] bg-[#080808] flex border-y border-zinc-800 overflow-hidden font-mono text-zinc-400">
      
      {/* LEFT HALF: THE FORM */}
      <div className="w-1/2 h-full border-r border-zinc-800 p-10 flex flex-col justify-center bg-black relative">
        <div className="max-w-md mx-auto w-full space-y-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 mb-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Data_Entry_Node</span>
            </div>
            <h2 className="text-4xl font-black italic text-white leading-none uppercase">Apex Striker</h2>
          </div>

          <form className="space-y-4" onSubmit={handleStrike}>
            <div className="relative group">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500" />
              <input 
                type="text" 
                placeholder="STRIKER NAME"
                className="w-full bg-zinc-900/30 border border-zinc-800 p-4 pl-10 text-white text-sm focus:border-emerald-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="SQD #"
                className="w-24 bg-zinc-900/30 border border-zinc-800 p-4 text-white text-sm focus:border-emerald-500 outline-none"
                value={formData.number}
                onChange={(e) => setFormData({...formData, number: e.target.value})}
              />
              <select 
                className="flex-1 bg-zinc-900/30 border border-zinc-800 p-4 text-white text-sm focus:border-emerald-500 outline-none"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
              >
                <option>ST - STRIKER</option>
                <option>LW - WINGER</option>
                <option>RW - WINGER</option>
              </select>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold text-zinc-600 uppercase">Power Output</span>
                <span className="text-emerald-500 font-bold">{power}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div className="h-full bg-emerald-500" animate={{ width: `${power}%` }} />
              </div>
              
              <button 
                type="submit"
                disabled={isExecuting}
                className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 font-black italic uppercase text-sm hover:bg-emerald-500 hover:text-white transition-all active:scale-[0.98]"
              >
                {isExecuting ? 'STRIKING...' : 'EXECUTE STRIKE'} <ChevronRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT HALF: THE GROUND */}
      <div className="w-1/2 h-full relative bg-[#050505] overflow-hidden">
        
        {/* TOP HALF: THE GOAL */}
        <div className="h-[40%] flex items-end justify-center pb-2">
          <div className="w-4/5 h-full border-x-4 border-t-4 border-zinc-800/50 bg-emerald-950/10 relative">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 10px)' }} />
            
            <motion.div 
              animate={{ x: isExecuting ? 120 : [-20, 20, -20], y: isExecuting ? -40 : [0, 10, 0] }}
              transition={{ repeat: isExecuting ? 0 : Infinity, duration: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500/30"
            >
              <Target size={100} strokeWidth={1} />
            </motion.div>
          </div>

          <AnimatePresence>
            {hasScored && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-50 text-6xl font-black italic text-white drop-shadow-2xl"
              >
                GOAL
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM HALF: THE PITCH */}
        <div className="h-[60%] bg-[#0a0a0a] relative" style={{ perspective: '800px' }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <motion.div 
            initial={{ y: 80, x: 0, scale: 1.2 }}
            animate={isExecuting ? { 
              y: -280, 
              x: 140, 
              scale: 0.3,
              rotate: 360
            } : { 
              y: 80, 
              x: 0, 
              scale: 1.2 
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 z-40"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <Zap className="text-black fill-black" size={24} />
            </div>
            
            {!isExecuting && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <div className="text-[11px] font-black text-white uppercase tracking-widest">{formData.name || "STRIKER"}</div>
                <div className="text-[9px] text-emerald-500 font-bold">#{formData.number || "00"} // {formData.position}</div>
              </div>
            )}
          </motion.div>
        </div>

        {/* HUD OVERLAY */}
        <div className="absolute bottom-6 right-6 flex items-center gap-4 text-[9px] font-black text-zinc-700">
           <div className="flex items-center gap-2 border border-zinc-900 px-3 py-1">
              <BarChart3 size={12} /> xG: 0.94
           </div>
           <div className="border border-zinc-900 px-3 py-1 uppercase">
              Trajectory: Optimal
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrikerBlueprint;