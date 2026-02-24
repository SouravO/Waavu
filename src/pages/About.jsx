import React from 'react';
import { motion } from 'framer-motion';
import { Star, Target, Trophy, Shield, ArrowUpRight } from 'lucide-react';

const About = () => {
  const sections = [
    {
      id: "01",
      title: "The Founder",
      subtitle: "FOUNDER & CHAIRMAN",
      header: "Sharath Kuniyil",
      body: "A trailblazing Indian goalkeeper who represented Kerala in the Santhosh Trophy and played for elite I-League clubs like Bengaluru FC and Gokulam Kerala FC. As the first Kerala goalkeeper to captain an I-League team, he brings professional discipline and top-tier expertise to the foundation.",
      list: ["I-League Captain", "Kerala Legend", "Elite Goalkeeper", "Pro Mentor"],
      image: "https://images.unsplash.com/photo-1526232759533-36001e2531d4?auto=format&fit=crop&q=80",
      icon: <Star size={20} />
    },
    {
      id: "02",
      title: "Our Mission",
      subtitle: "THE STRATEGIC PURPOSE",
      header: "Bridging the Gap",
      body: "To bridge the gap between talent and access by identifying and nurturing promising young footballers through world-class training, educational support, and essential life skills development.",
      list: ["Talent Access", "Global Training", "Education", "Life Skills"],
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
      icon: <Target size={20} />
    },
    {
      id: "03",
      title: "Our Vision",
      subtitle: "THE FUTURE LEGACY",
      header: "Building Leaders",
      body: "To bridge social and economic gaps through football by building a new generation of sports leaders who inspire positive change within their communities and beyond.",
      list: ["Social Mobility", "Community Change", "New Generation", "Excellence"],
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
      icon: <Trophy size={20} />
    },
    {
      id: "04",
      title: "Core Values",
      subtitle: "THE ORGANIZATIONAL ETHOS",
      header: "WAWU Foundations",
      body: "Our culture is built on four non-negotiable pillars that define how we train, how we compete, and how we treat our community. These values are the heartbeat of everything we do.",
      list: ["Inclusivity", "Integrity", "Dedication", "Empowerment"],
      image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80",
      icon: <Shield size={20} />
    }
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">About_The_Studio</p>
          <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12 break-words">
            The Vision <br />
            <span className="italic font-light">Behind The Icon.</span>
          </h1>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, idx) => (
        <section key={section.id} className="border-b border-black/5 overflow-hidden">
          <div className={`grid grid-cols-1 md:grid-cols-2`}>
            {/* Image Block */}
            <div className={`aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden group relative ${idx % 2 === 1 ? 'md:order-2' : 'border-r border-black/5'}`}>
              <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={section.image}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt={section.title}
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                Ref_Identity: {section.id}
              </div>
            </div>

            {/* Content Block */}
            <div className={`flex flex-col justify-between p-8 md:p-20 bg-white ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="space-y-8 md:space-y-12">
                <div className="text-[#125487] flex items-center gap-4">
                  {section.icon}
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40">{section.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-serif leading-tight">{section.header}</h2>
                <p className="max-w-md text-lg md:text-xl font-light text-black/60 leading-relaxed">
                  {section.body}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {section.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#125487]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-12">
                <button className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase">
                  Learn More 
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section> 
      ))}
    </div>
  );
};

export default About;
