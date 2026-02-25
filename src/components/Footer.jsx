import React from 'react';
import { motion } from 'framer-motion';
import { Plus, MoveRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5 selection:bg-white selection:text-black overflow-hidden">
      {/* 5a. The Infinite Marquee */}
      <div className="py-12 border-b border-white/5 overflow-hidden whitespace-nowrap flex group cursor-default">
        {[1, 2, 3, 4].map((i) => (
          <motion.div 
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 px-6"
          >
            <span className="text-[15vw] md:text-[10vw] font-serif italic leading-none tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-[#125487] transition-all duration-700">
             We Are With You (WAWU)
            </span>
            <Plus size={40} className="text-[#125487] opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* 5b. Main Footer Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Left Block: Big CTA */}
        <Link to="/contact" className="md:col-span-7 p-8 md:p-20 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
          <div className="relative z-10">
            <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Initiate_Collaboration</p>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Let's create <br /> 
              <span className="italic">The Icon.</span>
            </h2>
          </div>
          
          <div className="mt-12 md:mt-20 flex items-center gap-6 group-hover:translate-x-4 transition-transform duration-500 relative z-10">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#125487] flex items-center justify-center">
              <MoveRight size={20} className="md:w-6 md:h-6" />
            </div>
          </div>

          {/* Background Hover Effect */}
          <div className="absolute inset-0 bg-[#125487]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
        </Link>

        {/* Right Block: Contacts & Details */}
        <div className="md:col-span-5 flex flex-col">
          <div className="p-8 md:p-12 border-b border-white/5 md:h-1/2 flex flex-col justify-end">
            <p className="text-[10px] font-mono opacity-40 uppercase mb-4 tracking-widest">Inquiries</p>
            <p className="text-2xl md:text-2xl font-serif hover:text-[#125487] transition-colors cursor-pointer break-all">
                info@wawu.foundation
            </p>
          </div>
          
          <div className="p-8 md:p-12 md:h-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Social</p>
              <ul className="text-[10px] md:text-xs font-bold tracking-widest uppercase space-y-2">
                <li className="hover:text-[#125487] cursor-pointer transition-colors">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="hover:text-[#125487] cursor-pointer transition-colors">
                  <a href="https://www.linkedin.com/in/wawu-foundation/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className="hover:text-[#125487] cursor-pointer transition-colors">
                  <a href="https://youtube.com/@wawu.foundation?si=ttkPTwfNFnR4k06S" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Location</p>
              <p className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase leading-relaxed">
                WAWU Foundation<br />
                Startup Park, Opp.Madiwala Police Station,<br />
                Hosur Road, Madiwala,<br />
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5c. The Grid Bottom Bar */}
      <div className="grid grid-cols-2 md:grid-cols-12 w-full text-[9px] font-bold uppercase tracking-[0.3em] min-h-20 py-6 md:py-0 items-center px-6 border-t border-white/5 opacity-40">
        <div className="col-span-1 md:col-span-3">©2026 WAWU STUDIO</div>
        <div className="hidden md:block md:col-span-6 text-center italic font-serif lowercase tracking-normal text-lg">
          "A walking work of art."
        </div>
        <div className="col-span-1 md:col-span-3 text-right flex justify-end gap-4">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
