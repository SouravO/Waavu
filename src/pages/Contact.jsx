import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Fingerprint, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

const InteractiveContact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  const steps = [
    { id: 'name', label: 'IDENTIFY SUBJECT', placeholder: 'ENTER FULL NAME...', icon: <Fingerprint size={20} /> },
    { id: 'email', label: 'COMMUNICATION CHANNEL', placeholder: 'USR@DOMAIN.COM', icon: <Terminal size={20} /> },
    { id: 'project', label: 'OBJECTIVE PARAMETERS', placeholder: 'DESCRIBE SCOPE...', icon: <Zap size={20} /> }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step < steps.length - 1) setStep(s => s + 1);
    else alert("TRANSMISSION SUCCESSFUL"); 
  };

  return (
    <section className="relative w-screen min-h-screen bg-black text-white flex items-center justify-center overflow-hidden font-sans">
      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      {/* RADIAL BLUE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#224e72] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-4xl p-6 md:p-12">
        {/* HEADER STATUS BAR */}
        <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#224e72] mb-1">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Secure Link Established</span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">System Contact</h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono opacity-40 uppercase">Step {step + 1} of 3</p>
            <div className="flex gap-1 mt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1 w-8 transition-colors duration-500 ${i <= step ? 'bg-[#224e72]' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* INTERACTIVE FORM ENGINE */}
        <div className="grid md:grid-cols-[1fr_300px] gap-12">
          <form onSubmit={handleNext} className="min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <div className="flex items-center gap-4 mb-4 text-[#224e72]">
                  {steps[step].icon}
                  <span className="text-xs font-black tracking-widest uppercase">{steps[step].label}</span>
                </div>
                
                <input 
                  autoFocus
                  className="w-full bg-transparent border-none text-4xl md:text-6xl font-black uppercase outline-none placeholder:opacity-10 caret-[#224e72]"
                  placeholder={steps[step].placeholder}
                  value={formData[steps[step].id]}
                  onChange={(e) => setFormData({...formData, [steps[step].id]: e.target.value})}
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center gap-8">
              <button 
                type="submit"
                className="group flex items-center gap-4 bg-[#224e72] hover:bg-white hover:text-black transition-all px-8 py-4 font-black uppercase text-sm tracking-[0.2em]"
              >
                {step === 2 ? 'Execute Sync' : 'Next Phase'}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              {step > 0 && (
                <button 
                  type="button" 
                  onClick={() => setStep(s => s - 1)}
                  className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                >
                  [ Revert ]
                </button>
              )}
            </div>
          </form>

          {/* TECHNICAL READOUT PANEL */}
          <div className="border-l border-white/10 pl-8 hidden md:flex flex-col justify-center space-y-8">
            <div>
              <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-2">Metadata</p>
              <ul className="space-y-2 font-mono text-[10px] opacity-60">
                <li>LOC: 40.7128° N</li>
                <li>ENC: AES-256-GCM</li>
                <li>BUF: {formData.name.length + formData.email.length + formData.project.length} BYTES</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white/5 border border-white/10">
              <p className="text-[10px] font-black text-[#224e72] uppercase mb-2">Input Log</p>
              <p className="font-mono text-[10px] break-all">
                {">"} {formData.name || "..."} <br />
                {">"} {formData.email || "..."} <br />
                {">"} {formData.project || "..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE CORNER MARKS */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/30" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/30" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/30" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/30" />
    </section>
  );
};

export default InteractiveContact;