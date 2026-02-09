import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Database, Workflow, Target, 
  ChevronRight, Box, Radio, Activity,
  Maximize2, Binary, HardDrive, Terminal, X, Code
} from 'lucide-react';

const AboutBlueprintExtended = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [bootLog, setBootLog] = useState([]);

  // Simulate a live diagnostic feed
  useEffect(() => {
    const logs = [
      "EXTRACTING_CORE_ASSETS...", "ENCRYPTING_TUNNEL_01...", 
      "UPLINK_STABLE", "CACHE_CLEARED", "SYNCING_ARCH_V2"
    ];
    const interval = setInterval(() => {
      setBootLog(prev => [...prev.slice(-4), logs[Math.floor(Math.random() * logs.length)]]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    { title: "Frontend Architecture", level: "98%", status: "OPTIMIZED", details: "React / Tailwind / Framer / Canvas" },
    { title: "Backend Systems", level: "92%", status: "STABLE", details: "Node.js / PostgreSQL / Redis" },
    { title: "Cloud Infrastructure", level: "85%", status: "SCALING", details: "AWS / Docker / Kubernetes" }
  ];

  return (
    <div className={`relative transition-colors duration-700 ${isSourceMode ? 'bg-[#0a0a0a]' : 'bg-[#EBEBEB]'} text-black font-sans overflow-x-hidden`}>
      
      {/* 01. THE SOURCE CODE OVERLAY */}
      <AnimatePresence>
        {isSourceMode && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl p-10 font-mono text-[#224e72] overflow-hidden pointer-events-none"
          >
            <div className="opacity-40 text-[10px] leading-relaxed">
              {Array.from({ length: 50 }).map((_, i) => (
                <p key={i}>0x{i.toString(16).toUpperCase()} // IMPORT_MODULE_SYSTEM_KERNEL_EXEC_INIT_AUTH_TRUE_000{i}</p>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto">
                <Code size={80} className="mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl font-black uppercase tracking-[0.5em]">Source_View_Enabled</h2>
                <button 
                  onClick={() => setIsSourceMode(false)}
                  className="mt-8 border border-[#224e72] px-6 py-2 hover:bg-[#224e72] hover:text-white transition-all text-xs font-black uppercase"
                >
                  Exit_Terminal
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 02. THE HUD */}
      <nav className="fixed top-0 w-full z-50 px-10 py-6 border-b border-black/10 backdrop-blur-md flex justify-between items-center bg-white/50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#224e72] flex items-center justify-center text-white font-black text-xs">B</div>
          <div className="hidden md:block">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase">Blueprint_OS</span>
            <div className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] font-mono opacity-50 uppercase">Auth: Root_User</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest items-center">
          <button onClick={() => setIsSourceMode(true)} className="flex items-center gap-2 hover:text-[#224e72]">
            <Terminal size={14} /> <span>View_Source</span>
          </button>
          <a href="#" className="hidden sm:block hover:text-[#224e72]">Manifest</a>
          <a href="#" className="text-[#224e72] border-b-2 border-[#224e72]">Core_Structure</a>
        </div>
      </nav>

      {/* 03. HERO WITH RADAR SCANNER */}
      <section className="relative pt-40 pb-20 px-10 md:px-24 border-b border-black/10 overflow-hidden">
        {/* Animated Radar Sensor */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] opacity-20 hidden lg:block">
            <div className="absolute inset-0 border border-[#224e72] rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-10 border border-[#224e72] rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-full bg-[#224e72] animate-spin" style={{ animationDuration: '8s' }} />
            </div>
        </div>
        
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-[14vw] md:text-[10vw] font-black uppercase leading-[0.75] tracking-tighter mb-8">
            Build<br /><span className="text-[#224e72]">Intelligent</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 border-2 border-black flex items-center gap-2 bg-white">
              <Activity size={14} className="text-[#224e72] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Active_Uplink</span>
            </div>
            <div className="px-4 py-2 bg-black text-white flex items-center gap-2">
              <Binary size={14} className="text-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-widest italic font-mono">L3_KERNEL_V.9</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 04. INTERACTIVE MODULE DIAGNOSTICS */}
      <section className="flex flex-col md:flex-row min-h-[700px] border-b border-black/10">
        <div className="w-full md:w-1/2 p-10 md:px-24 py-20 border-r border-black/10 bg-white">
          <div className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#224e72] mb-2">Diagnostic_Scan</h2>
            <p className="text-sm opacity-40 font-mono">Select a module to view internal schematics.</p>
          </div>
          
          <div className="space-y-4">
            {modules.map((m, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveModule(i)}
                className={`w-full text-left p-6 flex justify-between items-center transition-all duration-500 group relative overflow-hidden ${
                  activeModule === i ? 'bg-black text-white' : 'bg-[#f5f5f5] hover:bg-black/5'
                }`}
              >
                {activeModule === i && (
                  <motion.div layoutId="tab" className="absolute left-0 w-2 h-full bg-[#224e72]" />
                )}
                <div>
                  <p className="text-[9px] font-mono opacity-50 uppercase mb-1">Module_0{i+1}</p>
                  <p className="text-2xl font-black uppercase">{m.title}</p>
                </div>
                <ChevronRight className={`${activeModule === i ? 'text-[#224e72]' : 'opacity-20'}`} />
              </button>
            ))}
          </div>

          {/* Real-time terminal box */}
          <div className="mt-12 p-6 bg-black text-[#224e72] font-mono text-[10px] space-y-1">
             <p className="opacity-40 font-black mb-2 underline tracking-widest uppercase">System_Live_Log</p>
             {bootLog.map((log, i) => (
                <p key={i}>{">"} {log}</p>
             ))}
             <div className="w-2 h-4 bg-[#224e72] animate-pulse inline-block mt-2" />
          </div>
        </div>

        {/* Display Panel */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 md:p-24 relative overflow-hidden flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="px-3 py-1 bg-[#224e72] text-[10px] font-black uppercase tracking-widest">Efficiency: {modules[activeModule].level}</div>
                <div className="text-[10px] font-mono opacity-40">ST: {modules[activeModule].status}</div>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 tracking-tighter">
                {modules[activeModule].title.split(' ')[0]}<br />
                <span className="text-[#224e72]">{modules[activeModule].title.split(' ')[1]}</span>
              </h3>
              
              <p className="max-w-md text-sm font-mono opacity-50 mb-12 uppercase leading-relaxed">
                 [TECH_STACK]: {modules[activeModule].details} <br /><br />
                 DEPLOYING ADVANCED ARCHITECTURAL PATTERNS TO ENSURE MAXIMUM STABILITY AND THROUGHPUT IN LIVE ENVIRONMENTS.
              </p>

              <button className="flex items-center gap-4 py-4 px-8 border border-white/20 hover:border-[#224e72] transition-colors group">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Launch_Full_Audit</span>
                <Maximize2 size={16} className="text-[#224e72] group-hover:scale-125 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle background decoration */}
          <div className="absolute bottom-[-50px] right-[-50px] opacity-10">
              <Cpu size={400} strokeWidth={0.5} className="text-[#224e72]" />
          </div>
        </div>
      </section>

      {/* 05. DEPLOYMENT GRID (CARGO BOXES) */}
      <section className="p-10 md:p-24 bg-[#EBEBEB]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[#224e72] font-black text-[10px] uppercase tracking-[0.4em]">Index_Registry</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Deployments</h2>
          </div>
          <p className="text-[10px] font-mono opacity-40 uppercase max-w-[200px] text-right">Records of structural implementations across sector 7-G.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={item} 
              className="group relative bg-white border border-black/10 p-8 hover:border-[#224e72] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-[#224e72] group-hover:bg-[#224e72] group-hover:text-white transition-colors">
                    <Box size={20} />
                </div>
                <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">ID: 088{item}</span>
              </div>
              <h4 className="text-xl font-black uppercase mb-2">Project_Alpha_0{item}</h4>
              <p className="text-[10px] font-mono opacity-40 uppercase mb-8">Role: Lead_Developer</p>
              
              <div className="pt-6 border-t border-black/5 flex justify-between items-center group-hover:border-[#224e72]/20 transition-colors">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] group-hover:text-[#224e72]">View_Archive</span>
                <ChevronRight size={14} className="opacity-20 group-hover:opacity-100 text-[#224e72]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 06. FOOTER */}
      <footer className="bg-black text-white p-10 md:p-24">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="max-w-sm">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 underline decoration-[#224e72] decoration-4 underline-offset-8">Blueprint</h2>
            <p className="text-xs font-mono opacity-50 uppercase leading-relaxed mb-8">
              A design and development system predicated on the absolute alignment of logic and aesthetic. 
            </p>
            <div className="flex gap-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#224e72] transition-colors"><Radio size={18} /></div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#224e72] transition-colors"><Database size={18} /></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1">
             <div>
                <p className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] mb-6">Directory</p>
                <ul className="text-xs font-black uppercase space-y-4 tracking-widest">
                  <li className="hover:text-[#224e72] cursor-pointer">/ Home</li>
                  <li className="hover:text-[#224e72] cursor-pointer">/ Modules</li>
                  <li className="hover:text-[#224e72] cursor-pointer">/ Logs</li>
                </ul>
             </div>
             <div>
                <p className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] mb-6">Social_Grid</p>
                <ul className="text-xs font-black uppercase space-y-4 tracking-widest">
                  <li className="hover:text-[#224e72] cursor-pointer">/ Twitter</li>
                  <li className="hover:text-[#224e72] cursor-pointer">/ GitHub</li>
                  <li className="hover:text-[#224e72] cursor-pointer">/ LinkedIn</li>
                </ul>
             </div>
             <div className="col-span-2 md:col-span-1">
                <div className="p-6 border border-white/10 bg-white/5">
                   <p className="text-[9px] font-mono uppercase opacity-40 mb-2">Core_Status</p>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#224e72] rounded-full animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest">System_Online</span>
                   </div>
                   <p className="text-[9px] font-mono opacity-20 mt-4 uppercase tracking-tighter">© 2026 // BP-SYS-V2</p>
                </div>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AboutBlueprintExtended;