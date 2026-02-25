import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Brain, Heart, Shield, Zap, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComprehensiveSupport = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Nutrition & Fitness', desc: 'Personalized nutrition plans and access to fitness equipment tailored for young athletes.' },
    { title: 'Wellness & Counseling', desc: 'Emotional wellness support and academic counseling to ensure holistic growth.' },
    { title: 'Travel & Recovery', desc: 'Support for travel arrangements, injury recovery, and psychological mentoring.' },
  ];

  const pillars = [
    { icon: Heart, title: 'On-Field Excellence', desc: 'Building resilience and unlocking potential through a 360-degree support ecosystem.' },
    { icon: Brain, title: 'Off-Field Growth', desc: 'Empowering children to manage their lives and careers with confidence and awareness.' },
    { icon: Shield, title: 'Balanced Individuals', desc: 'Raising not only champions, but balanced and aware individuals who excel on and off the field.' },
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20 overflow-hidden">
      {/* HERO SECTION */}
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

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Comprehensive_Support_Program</p>
          <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12 break-words">
            Empowering Athletes <br />
            <span className="italic font-light text-[#125487]">On and Off the Field.</span>
          </h1>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Block */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[80vh] border-b md:border-b-0 md:border-r border-black/5 overflow-hidden group relative">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Support System"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
              Integration_Ref: DEV_02
            </div>
          </div>

          {/* Features Block */}
          <div className="flex flex-col justify-center p-8 md:p-20 bg-[#F5F5F5]">
            <div className="space-y-8 md:space-y-12">
              <Target className="text-[#125487]" size={32} />
              <h2 className="text-4xl md:text-7xl font-serif italic leading-tight">Holistic <br/> Support System.</h2>
              <div className="relative pl-8 md:pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#125487] via-[#125487]/60 to-[#125487]/20 rounded-full" />
                <div className={`text-base md:text-lg font-light text-black/70 leading-loose italic transition-all duration-500 ${isExpanded ? '' : 'line-clamp-3'}`}>
                  <p>
                    At WAWU Foundation, we believe that excellence in sports stems from balance. Our Comprehensive Support program goes beyond traditional coaching to provide an all-rounded structure that takes care of every young athlete's needs.
                  </p>
                  <br />
                  <p>
                    From personalized nutrition plans and access to fitness equipment, to emotional wellness and academic counseling, we ensure players grow as individuals—not just performers. We also support travel arrangements, injury recovery, and psychological mentoring.
                  </p>
                  <br />
                  <p>
                    This 360-degree ecosystem helps unlock potential, build resilience, and empower children to manage their lives and careers more confidently. We aim to raise not only champions, but balanced and aware individuals who excel on and off the field.
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

      {/* PILLARS SECTION */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 md:p-12 hover:bg-[#125487] hover:text-white transition-colors group">
              <div className="text-[#125487] group-hover:text-white transition-colors mb-6 md:mb-8">
                <pillar.icon size={32} />
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
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Initiate_Empowerment</p>
          <h2 className="text-5xl md:text-9xl font-serif leading-none tracking-tighter mb-12">
            Empower Your <br />
            <span className="italic">Future.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-6 md:gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Connect With Us 
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#125487] flex items-center justify-center text-white group-hover:scale-110 transition-all">
              <Zap size={20} className="md:w-6 md:h-6" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveSupport;
