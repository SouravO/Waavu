import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Heart, Search, Zap, Award, BarChart3, Globe, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TalentIdentification = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content extracted from the screenshot sections
  const specs = [
    {
      title: 'Discover Talent',
      desc: 'Every child deserves a chance to shine. Our Discover Talent initiative focuses on identifying and supporting raw sports talent in rural and under-resourced areas.'
    },
    {
      title: 'Talent Scouting',
      desc: 'Through dedicated camps, talent scouting events, and collaborations with local schools and communities, we aim to provide these young athletes with the right training, mentorship, and exposure to excel in their sporting careers.'
    },
    {
      title: 'Nurture & Guide',
      desc: 'We don\'t just scout talent—we nurture it, guide it, and help it rise to national and international levels.'
    },
  ];

  const pillars = [
    {
        icon: Search,
        title: 'Identify',
        desc: 'Unearthing India\'s future champions by identifying raw sports talent in under-resourced areas.'
    },
    {
        icon: Heart,
        title: 'Nurture',
        desc: 'We don\'t just scout talent—we nurture it, guide it, and provide the mentorship needed to grow.'
    },
    {
        icon: Award,
        title: 'Rise',
        desc: 'Helping young athletes rise to national and international levels through elite pathways.'
    },
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20 overflow-hidden">
      {/* HERO SECTION - CONTENT FROM HEADER */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5">
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

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Discover_Talent_Initiative</p>
          <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12 break-words">
            Unearthing <br />
            <span className="italic font-light text-[#125487]">India's Future Champions.</span>
          </h1>
        </div>
      </section>

      {/* FEATURE SECTION - CONTENT FROM THE MAIN BODY BOXES */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Block - Representing the "Elite Talent" visual */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[80vh] border-b md:border-b-0 md:border-r border-black/5 overflow-hidden group relative">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80" // Soccer field theme
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Elite Talent Scouting"
            />
            <div className="absolute top-8 left-8 bg-[#FFD700] px-4 py-2 text-[10px] font-black tracking-widest uppercase text-black">
              ★ Elite_Talent_Hunt
            </div>
          </div>

          {/* Specs Block - Content from the Blue and Orange UI boxes */}
          <div className="flex flex-col justify-center p-8 md:p-20 bg-[#F5F5F5]">
            <div className="space-y-8 md:space-y-12">
              <Target className="text-[#125487]" size={32} />
              <h2 className="text-4xl md:text-7xl font-serif italic leading-tight">Our <br/> Mission_Scope.</h2>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#125487] via-[#125487]/60 to-[#125487]/20 rounded-full" />
                <div className={`text-base md:text-lg font-light text-black/70 leading-loose italic transition-all duration-500 ${isExpanded ? '' : 'line-clamp-3'}`}>
                  <p>
                    Every child deserves a chance to shine. Our Discover Talent initiative focuses on identifying and supporting raw sports talent in rural and under-resourced areas.
                  </p>
                  <br />
                  <p>
                    Through dedicated camps, talent scouting events, and collaborations with local schools and communities, we aim to provide these young athletes with the right training, mentorship, and exposure to excel in their sporting careers.
                  </p>
                  <br />
                  <p>
                    We don't just scout talent—we nurture it, guide it, and help it rise to national and international levels.
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#125487] hover:text-black transition-colors group"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <MoveRight size={14} className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION - CONTENT FROM THE 01, 02, 03 BOTTOM TABS */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 md:p-12 hover:bg-[#125487] hover:text-white transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div className="text-[#125487] group-hover:text-white transition-colors">
                  <pillar.icon size={32} />
                </div>
                <span className="text-4xl font-mono font-black opacity-10 group-hover:opacity-30">0{i+1}</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-serif italic mb-4 leading-tight">{pillar.title}</h4>
              <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Initiate_Discovery</p>
          <h2 className="text-5xl md:text-9xl font-serif leading-none tracking-tighter mb-12">
            Support The <br />
            <span className="italic">Champions.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-6 md:gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Join the Foundation 
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#125487] flex items-center justify-center text-white group-hover:scale-110 transition-all">
              <Zap size={20} className="md:w-6 md:h-6" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TalentIdentification;