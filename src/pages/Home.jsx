import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, Hash, Command, MoveRight, Users, Trophy, MapPin, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BrochurePDF from '../assets/brochure.pdf';

const StudioNeoWAWU = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] selection:bg-[#125487] selection:text-white antialiased font-sans">
      
      {/* --- 0. PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#125487] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- 1. NAVIGATION (Implicit) --- */}
     

      {/* --- 2. THE HERO --- */}
      <section className="pt-32 pb-20 border-b border-black/5 px-4 md:px-6 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-9">
              <motion.h1 
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] md:text-[11vw] font-serif leading-[0.8] tracking-tighter break-words"
              >
                Building <br />
                <span className="italic font-light text-[#125487]">Dreams</span>
              </motion.h1>
            </div>
            <div className="md:col-span-3 pb-4">
              <p className="text-[10px] md:text-sm uppercase tracking-widest font-medium text-black/40 mb-6">
                [Since 2017] — Empowering India
              </p>
              <p className="text-base md:text-lg leading-relaxed italic">
                A dedicated non-profit ecosystem designed to elevate underprivileged football talent into global icons.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* --- 4. CORE MISSION (Horizontal Shift) --- */}
      <section className="border-b border-black/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto md:h-screen border-b md:border-b-0 md:border-r border-black/5 overflow-hidden group relative">
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Indian Football Talent"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
              Mission_Ref: 01_Talent_Discovery
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 md:p-20 bg-[#F5F5F5]">
            <div className="space-y-8 md:space-y-12">
              <Target className="text-[#125487]" size={32} />
              <h2 className="text-5xl md:text-7xl font-serif text-[#125487] leading-tight">Bridging the <br className="hidden md:block"/> Opportunity Gap.</h2>
              <p className="max-w-md text-lg md:text-xl font-light leading-relaxed">
                We uncover raw talent in rural and underserved areas, ensuring that financial limitations never bench a future star.
              </p>
            </div>

            <div className="pt-12">
              <button className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase">
                Support Our Mission
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#125487] group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- 3. OUR MISSION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
                  alt="Our Mission - Young Footballers"
                  className="w-full h-[500px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#125487]/10 -z-10" />
              </motion.div>
            </div>

            <div className="md:col-span-7 md:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Target className="text-[#125487]" size={40} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40">Our Mission</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                  To bridge the gap between <span className="italic text-[#125487]">talent</span> and <span className="italic text-[#125487]">access</span>.
                </h2>

                <p className="text-lg md:text-xl font-light leading-relaxed text-black/70 max-w-2xl mb-12">
                  We identify and nurture promising young footballers through world-class training, educational support, and life skills development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Trophy, label: "World-Class Training" },
                    { icon: Users, label: "Educational Support" },
                    { icon: MapPin, label: "Life Skills Development" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#125487]/10 flex items-center justify-center text-[#125487]">
                        <item.icon size={18} />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    

      {/* --- 4. IMPACT METRICS --- */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5 shadow-2xl">
          {[
            { label: "Youth Reached", value: "1,369+" },
            { label: "Talents Scouted", value: "128+" },
            { label: "Events Conducted", value: "32+" },
            { label: "Districts Covered", value: "9+" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-12 hover:bg-[#125487] hover:text-white transition-colors group">
              <p className="text-[10px] font-mono opacity-40 uppercase mb-4 group-hover:text-white/60">{item.label}</p>
              <p className="text-2xl md:text-4xl font-serif italic">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SERVICES & CAPABILITIES --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 border-b border-black/10 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter">Services</h2>
          </div>
          <div className="divide-y divide-black/10">
            {[
              { id: "01", title: "Talent Identification", desc: "Camps and high-quality coaching programs that uncover raw potential in rural regions.", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80" },
              { id: "02", title: "Holistic Support", desc: "Full scholarships covering athletic and educational needs to ensure sustainable growth.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" },
              { id: "03", title: "Professional Training", desc: "Mentorship from experienced coaches to guide players toward national club careers.", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80" }
            ].map((item) => (
              <div key={item.id} className="group grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 items-center hover:bg-[#F5F5F5] transition-colors px-4">
                <span className="md:col-span-1 font-mono text-sm opacity-30 mb-2 md:mb-0">{item.id}</span>
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-4xl font-serif">{item.title}</h3>
                </div>
                <p className="md:col-span-4 text-black/60 max-w-sm mt-4 md:mt-0 text-sm md:text-base">{item.desc}</p>
                <div className="md:col-span-3 flex justify-start md:justify-end mt-6 md:mt-0">
                  <img src={item.img} alt={item.title} className="w-full md:w-32 h-40 md:h-20 object-cover md:scale-0 md:group-hover:scale-100 transition-transform duration-500 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. LEADERSHIP SPOTLIGHT --- */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-0 border border-white/10">
            <div className="flex-1 p-12 md:p-24 space-y-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 border border-[#125487] text-[#125487] text-[10px] font-bold tracking-[0.3em] uppercase w-fit">Foundation Leadership</span>
              <h3 className="text-6xl font-serif italic">The Dream Team</h3>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Led by visionaries like CK Vineeth (Ambassador), Sharath K (Founder), and Shafi Shoukath (Co-Founder), we drive excellence through dedication.
              </p>
              <div className="pt-8">
                <p className="font-mono text-sm uppercase tracking-widest text-[#125487]">Join the movement to uplift India's football stars.</p>
              </div>
            </div>
            <div className="flex-1 min-h-[500px] relative">
              <img 
                src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80" 
                alt="Leadership Vision" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. INLL 2026 --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 border-b border-black/5 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#125487]/5 rounded-full blur-3xl group-hover:bg-[#125487]/10 transition-colors" />
                <img 
                  src="src/assets/Inll.png" 
                  alt="India's Next Legend League" 
                  className="relative z-10 w-full max-w-lg mx-auto transform group-hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            </div>

            <div className="md:col-span-6 md:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40">Event Spotlight</span>
                  <div className="h-px w-12 bg-[#125487]/30" />
                </div>

                <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                  India's Next <br />
                  <span className="italic text-[#125487]">Legend</span> League <span className="text-black/20">2026</span>
                </h2>

                <div className="space-y-6 mb-12">
                  <p className="text-lg md:text-xl font-light leading-relaxed text-black/70 italic border-l-2 border-[#125487]/30 pl-6">
                    "The hunt for India's next football sensation begins! WAWU Foundation brings you the ultimate scouting event where raw talent meets opportunity."
                  </p>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-black/70 italic border-l-2 border-[#125487]/30 pl-6">
                    "Top 10 players will receive scholarships & direct academy placements! Don't miss this chance to take your football dreams to the next level."
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 items-center">
                  <button className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase">
                    Register Now
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#125487] group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </button>
                  
                  <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-black/10 pb-1 hover:border-[#125487] transition-colors flex items-center gap-2">
                    Download Brochure
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 bg-[#F5F5F5] p-12 flex flex-col justify-end relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="INLL Event" />
               <h4 className="text-5xl font-serif relative z-10 text-[#125487]">Next Legend <br/> League 2025.</h4>
               <p className="relative z-10 font-mono text-xs mt-4 tracking-widest uppercase">Registration Now Open</p>
            </div>
            <div className="bg-black text-white p-8 flex flex-col justify-between">
              <Trophy className="text-[#125487]" />
              <p className="text-xs font-mono uppercase tracking-widest">Scholarships <br/> & Academy Placements</p>
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Training" />
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Football Gear" />
            </div>
            <div  
              onClick={() => navigate('/contact')}
              className="bg-[#125487] text-white p-8 flex items-center justify-center text-center group cursor-pointer"
            >
              <p className="text-2xl font-serif italic group-hover:scale-110 transition-transform">Donate Now <ArrowUpRight className="inline ml-2" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-black/5 text-center">
        <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
          © 2025 WAWU Foundation | Bengaluru, Karnataka | enq.wawufoundation@gmail.com
        </p>
      </footer>

    </div>
  );
};

export default StudioNeoWAWU;