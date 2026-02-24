import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Target, Link as LinkIcon, Shield, Globe, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnicalINL = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Search size={24} />, title: "Rural Scouting", desc: "Identifying promising players from grassroots levels across the nation." },
    { icon: <Target size={24} />, title: "Competitive Format", desc: "Providing an elite stage for players to showcase skills under pressure." },
    { icon: <LinkIcon size={24} />, title: "Pro Pathways", desc: "Linking talents with professional clubs, mentors, and global sponsors." },
    { icon: <Shield size={24} />, title: "Holistic Support", desc: "Ensuring athletes receive training and education for complete success." }
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20">
      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-3 text-black/40 hover:text-[#125487] transition-colors mb-12 group uppercase text-[10px] font-mono tracking-widest"
          >
            <ArrowLeft size={14} />
            <span>Back_to_Modules</span>
          </motion.button>

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Flagship_Tournament: INLL_2026</p>
          <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12">
            Elite <br />
            <span className="italic font-light text-[#125487]">DNA.</span>
          </h1>
        </div>
      </section>

      {/* HERO IMAGE PANEL */}
      <section className="border-b border-black/5 overflow-hidden">
        <div className="relative aspect-[21/9] w-full overflow-hidden group">
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1575361330880-28233383824a?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt="Stadium"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-2xl text-white">
             <h2 className="text-4xl md:text-6xl font-serif italic mb-6">India Next Legend League</h2>
             <p className="text-xl font-light opacity-80 leading-relaxed">
               Bridging the gap between raw potential and global professional football through a nationwide discovery platform.
             </p>
          </div>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="border-b border-black/5 bg-[#F5F5F5]">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 border-r border-black/5 p-12 md:p-20 flex flex-col justify-center">
             <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.3em] block mb-6">Mission Objective</span>
             <h3 className="text-5xl font-serif italic mb-8 leading-none">Scout. <br /> Nurture. <br /> Connect.</h3>
             <p className="text-sm font-light text-black/60 leading-relaxed">
               INLL is WAWU's premier platform empowering aspiring players to showcase skills, gain visibility, and receive holistic support.
             </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2">
             {features.map((item, i) => (
               <div key={i} className="p-12 md:p-20 border-b border-r border-black/5 bg-white hover:bg-[#125487] hover:text-white transition-colors group">
                  <div className="text-[#125487] group-hover:text-white transition-colors mb-8">
                    {item.icon}
                  </div>
                  <h4 className="text-3xl font-serif italic mb-4">{item.title}</h4>
                  <p className="text-sm font-light opacity-60 group-hover:opacity-100 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Initiate_Evaluation</p>
          <h2 className="text-6xl md:text-9xl font-serif leading-none tracking-tighter mb-12">
            The First XI <br />
            <span className="italic">Starts Here.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Enquire Now 
            <div className="w-16 h-16 rounded-full bg-[#125487] flex items-center justify-center text-white group-hover:scale-110 transition-all">
              <ArrowUpRight size={24} />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnicalINL;
