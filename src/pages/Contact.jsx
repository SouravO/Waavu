import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Activity, ChevronRight, Trophy, Cpu, Zap, Crosshair } from 'lucide-react';

const CyberFootball = () => {
  const [power, setPower] = useState(0);
  const [isStriking, setIsStriking] = useState(false);
  const [showGoal, setShowGoal] = useState(false);
  const [stats, setStats] = useState({ name: 'UNIT_01', num: '10' });

  useEffect(() => {
    if (isStriking) return;
    const interval = setInterval(() => {
      setPower(p => (p >= 100 ? 0 : p + 2));
    }, 30);
    return () => clearInterval(interval);
  }, [isStriking]);

  const handleStrike = (e) => {
    e.preventDefault();
    if (isStriking) return;
    setIsStriking(true);
    
    // Sequence: Strike -> Impact -> Reset
    setTimeout(() => {
      setShowGoal(true);
      setTimeout(() => {
        setIsStriking(false);
        setShowGoal(false);
      }, 2500);
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-sans overflow-hidden flex items-center justify-center p-6">
      
      {/* UPDATED BLUE CYBER AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-100" />
        
        {/* Floating Tech Icons */}
        <div className="absolute top-10 left-10"><Cpu size={40} className="text-indigo-500/10" /></div>
        <div className="absolute bottom-10 right-10"><Zap size={40} className="text-indigo-500/10" /></div>
        
        {/* Digital Grid in Indigo */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(#6366f108 1px, transparent 1px), linear-gradient(90deg, #6366f108 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <main className="relative z-10 w-full max-w-5xl h-[580px] bg-zinc-950 border border-slate-800 rounded-2xl flex flex-row overflow-hidden shadow-[0_0_50px_-12px_rgba(30,41,59,0.5)]">
        
        {/* LEFT PANEL */}
        <section className="w-[35%] p-8 flex flex-col justify-between border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
          <div className="space-y-6">
            <header className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Crosshair className="text-emerald-500" size={20} />
              </div>
              <div>
                <h1 className="text-sm font-black tracking-[0.2em] uppercase">Tactical_OS</h1>
                <p className="text-[8px] text-zinc-500 font-mono">v4.0.2-STRIKE</p>
              </div>
            </header>

            <form onSubmit={handleStrike} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase">Striker_ID</label>
                <input 
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs focus:border-emerald-500 outline-none transition-all font-mono placeholder:text-zinc-700"
                  onChange={(e) => setStats({...stats, name: e.target.value.toUpperCase() || 'UNIT_01'})}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase">Squad#</label>
                  <input 
                    type="text"
                    placeholder="10"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-xs focus:border-emerald-500 outline-none font-mono"
                    onChange={(e) => setStats({...stats, num: e.target.value || '10'})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-zinc-500 uppercase">Status</label>
                  <div className="w-full bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3 text-[10px] text-emerald-500 font-bold">READY</div>
                </div>
              </div>

              <button 
                disabled={isStriking}
                className="group relative w-full h-14 bg-emerald-500 hover:bg-emerald-400 rounded-lg overflow-hidden transition-all active:scale-95 mt-4 disabled:opacity-50"
              >
                <span className="relative z-10 text-black text-xs font-black flex items-center justify-center gap-2">
                  {isStriking ? 'CALCULATING TRAJECTORY...' : 'INIT_STRIKE'} <ChevronRight size={16} />
                </span>
              </button>
            </form>
          </div>

          <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Power_Output</span>
              <span className="text-[10px] font-mono text-emerald-400">{power}%</span>
            </div>
            <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden p-[2px]">
              <motion.div 
                className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"
                animate={{ width: `${power}%` }}
              />
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: THE FIELD */}
        <section className="w-[65%] relative bg-[#020402] overflow-hidden perspective-1000">
          
          {/* Pitch 3D Floor */}
          <div className="absolute inset-0" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(0deg, #0a150a 0, #0a150a 40px, #050a05 40px, #050a05 80px)',
                 transform: 'perspective(600px) rotateX(45deg)',
                 transformOrigin: 'bottom',
                 height: '150%',
                 bottom: '-20%'
               }} 
          />

          {/* GOAL POST & NET */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-40">
            <div className="absolute inset-0 border-t-4 border-l-4 border-r-4 border-white/60 rounded-t-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="w-full h-full opacity-20" 
                     style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L10 0 L20 10 L10 20 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '12px 12px'
                     }} 
                />
            </div>
            <div className="absolute bottom-0 left-[-20%] right-[-20%] h-[2px] bg-white/10" />
          </div>

          {/* DYNAMIC SHADOW */}
          <motion.div
            className="absolute left-1/2 bg-black/60 blur-md rounded-full"
            animate={isStriking ? {
              bottom: '80%',
              scale: 0.2,
              opacity: 0.1,
              width: 20,
              height: 10
            } : {
              bottom: 60,
              scale: 1,
              opacity: 0.6,
              width: 60,
              height: 20
            }}
            style={{ x: '-50%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* THE BALL */}
          <motion.div
            initial={{ bottom: 60, x: '-50%', scale: 1 }}
            animate={isStriking ? { 
              bottom: ['15%', '85%', '82%'],
              x: ['-50%', '-10%', '5%'],
              scale: [1, 0.4, 0.35],
              rotate: 1080
            } : { 
              bottom: 60, 
              x: '-50%',
              scale: 1,
              rotate: 0
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 z-30"
          >
            <div className="relative w-16 h-16 rounded-full bg-white shadow-2xl border-2 border-zinc-400">
               <div className="absolute inset-0" 
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px' 
                    }} />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/60 rounded-full" />
            </div>
            
            <AnimatePresence>
              {!isStriking && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900/90 backdrop-blur-md text-[10px] px-3 py-1.5 border border-emerald-500/30 rounded-full font-mono shadow-xl"
                >
                  {stats.name} <span className="text-emerald-500 font-bold ml-1">#{stats.num}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* GOAL OVERLAY */}
          <AnimatePresence>
            {showGoal && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-40 bg-emerald-950/20 backdrop-blur-md flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ y: 20 }} animate={{ y: 0 }}
                  className="bg-zinc-950 border-2 border-emerald-500 p-8 rounded-2xl flex flex-col items-center shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                >
                  <Trophy size={64} className="text-yellow-500 mb-4 animate-bounce" />
                  <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none">Goal!</h2>
                  <div className="mt-4 flex items-center gap-4 text-xs font-mono">
                    <span className="text-zinc-500">POWER: {power}%</span>
                    <span className="text-emerald-500 underline decoration-2 underline-offset-4 tracking-wider">CRITICAL_STRIKE</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD ELEMENTS */}
          <div className="absolute top-6 right-6">
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500/60 bg-black/60 px-3 py-1.5 rounded-full border border-emerald-500/20 backdrop-blur-sm">
              <span className="animate-pulse">OS_ONLINE</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CyberFootball;