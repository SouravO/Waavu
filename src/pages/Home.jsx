import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, Hash, Command, MoveRight, Users, Trophy, MapPin, Target } from 'lucide-react';

const StudioNeoWAWU = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] selection:bg-[#344ca5] selection:text-white antialiased font-sans">
      
      {/* --- 0. PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#344ca5] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- 1. NAVIGATION (Implicit) --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <span className="font-serif text-2xl tracking-tighter italic">WAWU.</span>
        <div className="flex gap-8 text-[10px] font-black tracking-widest uppercase">
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#inll" className="hover:opacity-50 transition-opacity text-[#344ca5]">INLL 2025</a>
          <a href="#donate" className="hover:opacity-50 transition-opacity">Donate</a>
        </div>
      </nav>

      {/* --- 2. THE HERO --- */}
      <section className="pt-32 pb-20 border-b border-black/5 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-9">
              <motion.h1 
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[14vw] md:text-[11vw] font-serif leading-[0.8] tracking-tighter"
              >
                Building <br />
                <span className="italic font-light text-[#344ca5]">Dreams</span>
              </motion.h1>
            </div>
            <div className="md:col-span-3 pb-4">
              <p className="text-sm uppercase tracking-widest font-medium text-black/40 mb-6">
                [Since 2017] — Empowering India
              </p>
              <p className="text-lg leading-relaxed italic">
                A dedicated non-profit ecosystem designed to elevate underprivileged football talent into global icons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CORE MISSION (Horizontal Shift) --- */}
      <section className="border-b border-black/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:h-screen border-r border-black/5 overflow-hidden group relative">
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
            <div className="space-y-12">
              <Target className="text-[#344ca5]" size={32} />
              <h2 className="text-5xl md:text-7xl font-serif text-[#344ca5] ">Bridging the <br/> Opportunity Gap.</h2>
              <p className="max-w-md text-xl font-light leading-relaxed">
                We uncover raw talent in rural and underserved areas, ensuring that financial limitations never bench a future star.
              </p>
            </div>
            
            <div className="pt-12">
              <button className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase">
                Support Our Mission 
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#344ca5] group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. IMPACT METRICS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-black/5 border border-black/5 shadow-2xl">
          {[
            { label: "Youth Reached", value: "1,369+" },
            { label: "Talents Scouted", value: "128+" },
            { label: "Events Conducted", value: "32+" },
            { label: "Districts Covered", value: "9+" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:bg-[#344ca5] hover:text-white transition-colors group">
              <p className="text-[10px] font-mono opacity-40 uppercase mb-4 group-hover:text-white/60">{item.label}</p>
              <p className="text-4xl font-serif italic">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. SERVICES & CAPABILITIES --- */}
      <section className="py-32 px-6 border-b border-black/10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <h2 className="text-8xl font-serif tracking-tighter">Services</h2>
          </div>
          <div className="divide-y divide-black/10">
            {[
              { id: "01", title: "Talent Identification", desc: "Camps and high-quality coaching programs that uncover raw potential in rural regions.", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80" },
              { id: "02", title: "Holistic Support", desc: "Full scholarships covering athletic and educational needs to ensure sustainable growth.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" },
              { id: "03", title: "Professional Training", desc: "Mentorship from experienced coaches to guide players toward national club careers.", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80" }
            ].map((item) => (
              <div key={item.id} className="group grid grid-cols-1 md:grid-cols-12 py-12 items-center hover:bg-[#F5F5F5] transition-colors px-4">
                <span className="md:col-span-1 font-mono text-sm opacity-30">{item.id}</span>
                <div className="md:col-span-4">
                  <h3 className="text-4xl font-serif">{item.title}</h3>
                </div>
                <p className="md:col-span-4 text-black/60 max-w-sm mt-4 md:mt-0">{item.desc}</p>
                <div className="md:col-span-3 flex justify-end">
                  <img src={item.img} alt={item.title} className="w-32 h-20 object-cover scale-0 group-hover:scale-100 transition-transform duration-500 rounded-sm" />
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
              <span className="inline-block px-3 py-1 border border-[#344ca5] text-[#344ca5] text-[10px] font-bold tracking-[0.3em] uppercase w-fit">Foundation Leadership</span>
              <h3 className="text-6xl font-serif italic">The Dream Team</h3>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Led by visionaries like CK Vineeth (Ambassador), Sharath K (Founder), and Shafi Shoukath (Co-Founder), we drive excellence through dedication.
              </p>
              <div className="pt-8">
                <p className="font-mono text-sm uppercase tracking-widest text-[#344ca5]">Join the movement to uplift India's football stars.</p>
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

      {/* --- 7. INLL 2025 CTA --- */}
      <section className="py-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 bg-[#F5F5F5] p-12 flex flex-col justify-end relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="INLL Event" />
               <h4 className="text-5xl font-serif relative z-10 text-[#344ca5]">Next Legend <br/> League 2025.</h4>
               <p className="relative z-10 font-mono text-xs mt-4 tracking-widest uppercase">Registration Now Open</p>
            </div>
            <div className="bg-black text-white p-8 flex flex-col justify-between">
              <Trophy className="text-[#344ca5]" />
              <p className="text-xs font-mono uppercase tracking-widest">Scholarships <br/> & Academy Placements</p>
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Training" />
            </div>
            <div className="overflow-hidden">
              <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Football Gear" />
            </div>
            <div className="bg-[#344ca5] text-white p-8 flex items-center justify-center text-center group cursor-pointer">
              <p className="text-2xl font-serif italic group-hover:scale-110 transition-transform">Donate Now <ArrowUpRight className="inline ml-2" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-black/5 text-center">
        <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
          © 2025 WAWU Foundation | Bengaluru, Karnataka | info@wawu.foundation
        </p>
      </footer>

    </div>
  );
};

export default StudioNeoWAWU;