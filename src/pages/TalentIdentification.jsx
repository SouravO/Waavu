import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Dna, CheckCircle, TrendingUp, Users, Target, Zap, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TalentIdentification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specs = [
    { title: 'VO2 Max Tracking', desc: 'Measure aerobic capacity and endurance potential with medical precision.' },
    { title: 'Mechanical Analysis', desc: 'Detailed biomechanical movement pattern assessment for peak performance.' },
    { title: 'Growth Projection', desc: 'Data-driven physical development trajectory prediction.' },
  ];

  const pillars = [
    { icon: Target, title: 'Precision Scouting', desc: 'Utilizing high-speed capture and data analysis to identify talent often overlooked by traditional methods.' },
    { icon: TrendingUp, title: 'Metric Analytics', desc: 'Real-time performance tracking and comparative benchmarking against elite professional standards.' },
    { icon: Users, title: 'Global Network', desc: 'Connecting identified talent with state, national, and international pathways for career progression.' },
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
            className="flex items-center gap-3 text-black/40 hover:text-[#FF4F00] transition-colors mb-12 group uppercase text-[10px] font-mono tracking-widest"
          >
            <ArrowLeft size={14} />
            <span>Back_to_Modules</span>
          </motion.button>

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#FF4F00] mb-8 uppercase">Service_Module_01</p>
          <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12">
            Talent <br />
            <span className="italic font-light text-[#FF4F00]">Identification.</span>
          </h1>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Block */}
          <div className="aspect-square md:aspect-auto md:h-[80vh] border-r border-black/5 overflow-hidden group relative">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Talent Identification"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
              Field_Analysis: BIO_01
            </div>
          </div>

          {/* Specs Block */}
          <div className="flex flex-col justify-between p-8 md:p-20 bg-[#F5F5F5]">
            <div className="space-y-12">
              <Dna className="text-[#FF4F00]" size={32} />
              <h2 className="text-5xl md:text-7xl font-serif italic">System <br/> Specifications.</h2>
              <div className="space-y-8">
                {specs.map((spec, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] mt-2" />
                    <div>
                      <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest mb-1">Spec_{i+1}</p>
                      <p className="text-xl font-serif italic text-black mb-1">{spec.title}</p>
                      <p className="text-sm font-light text-black/60 leading-relaxed">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24 px-6 border-b border-black/5 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-12 hover:bg-[#FF4F00] hover:text-white transition-colors group">
              <div className="text-[#FF4F00] group-hover:text-white transition-colors mb-8">
                <pillar.icon size={32} />
              </div>
              <h4 className="text-3xl font-serif italic mb-4">{pillar.title}</h4>
              <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#FF4F00] mb-8 uppercase">Initiate_Protocol</p>
          <h2 className="text-6xl md:text-9xl font-serif leading-none tracking-tighter mb-12">
            Begin Your <br />
            <span className="italic">Scouting.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Contact Command 
            <div className="w-16 h-16 rounded-full bg-[#FF4F00] flex items-center justify-center text-white group-hover:scale-110 transition-all">
              <Zap size={24} />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TalentIdentification;
