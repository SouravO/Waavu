import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Trophy, ArrowUpRight, Linkedin, Youtube, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalFooter = () => {
  return (
    <footer className="relative w-full bg-black text-white font-sans border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <Activity size={400} className="text-white" />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* UPPER SECTION: IMPACT MESSAGE */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Strategic Impact</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8">
              Empowering <br />
              <span className="text-white/20">The Next</span> <br />
              Generation.
            </h2>
          </div>
          
          <Link 
            to="/contact" 
            className="group relative bg-white text-black p-10 md:p-14 hover:bg-[#224e72] hover:text-white transition-all duration-500 flex flex-col gap-4"
          >
            <ArrowUpRight className="absolute top-6 right-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            <span className="text-3xl font-black italic uppercase leading-none tracking-tighter">Join The <br />Mission</span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Discovery Mode Active</span>
          </Link>
        </div>

        {/* MIDDLE SECTION: CORE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-24">
          {[
            { icon: <Target size={24} />, title: "Precision Training", desc: "Elite coaching for promising talents." },
            { icon: <Shield size={24} />, title: "Holistic Support", desc: "Education and life skills development." },
            { icon: <Trophy size={24} />, title: "Legacy Building", desc: "Creating future leaders in football." }
          ].map((pillar, i) => (
            <div key={i} className="p-10 bg-black hover:bg-white/5 transition-colors group">
              <div className="text-[#224e72] mb-8 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4">{pillar.title}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: LINKS & LEGAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/10">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black italic tracking-tighter">WAWU</span>
              <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase">Foundation</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-loose max-w-xs">
              A walking work of art. Bridging the gap between raw talent and real opportunity.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/wawu-foundation" className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com/@wawu.foundation" className="text-white/40 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#224e72]">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'About', 'Services', 'Support', 'Contact'].map(link => (
                  <li key={link}>
                    <Link to={`/${link === 'Home' ? '' : link.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#224e72]">Resources</h4>
              <ul className="flex flex-col gap-3">
                {['Programs', 'Impact Report', 'Privacy Policy', 'Terms of Service'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#224e72]">System Status</h4>
              <div className="p-4 border border-white/10 bg-white/5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Operation</span>
                  <span className="text-[8px] font-black text-green-500 uppercase">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Regions</span>
                  <span className="text-[8px] font-black text-white uppercase">Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-bold uppercase tracking-[0.5em] text-white/20">
          <p>© 2026 WAWU FOUNDATION. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR EXCELLENCE // REFINING THE GAME</p>
        </div>
      </div>
    </footer>
  );
};

export default TechnicalFooter;