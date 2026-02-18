import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize, CheckCircle, Trophy, Activity, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalTraining = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden pt-20">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #0a0f1e 0%, #224e72 40%, #000000 100%)'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#98ff98]/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-white/60 hover:text-[#98ff98] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Services</span>
        </motion.button>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#98ff98] text-black px-4 py-2 text-[10px] font-black uppercase italic mb-6">
            <Maximize size={14} /> TRN-03
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase leading-[0.85] tracking-tighter mb-6">
            Professional <span className="text-[#98ff98]">Training</span>
          </h1>
          <p className="text-xl text-white/60 font-medium max-w-3xl">
            Elite coaching and skill enhancement sessions led by former professionals and experts to elevate your game to the highest level.
          </p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-80 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
              alt="Professional Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>

          {/* KEY FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-lg"
          >
            <h3 className="text-2xl font-black text-white italic uppercase mb-6">Key Features</h3>
            <div className="space-y-4">
              {[
                { title: 'Technical Drills', desc: 'Ball mastery, passing accuracy, and shooting precision' },
                { title: 'Tactical Workshops', desc: 'Game intelligence and strategic understanding' },
                { title: 'Physical Conditioning', desc: 'Strength, speed, and endurance optimization' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle size={20} className="text-[#98ff98] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-black text-white uppercase">{feature.title}</p>
                    <p className="text-xs text-white/40">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DETAILED SECTIONS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Trophy,
              title: 'Pro Coaching',
              desc: 'Learn from former professional players and UEFA-certified coaches with real-world experience at the highest levels.',
            },
            {
              icon: Activity,
              title: 'Performance Tracking',
              desc: 'Monitor progress with detailed analytics, video analysis, and regular assessment sessions.',
            },
            {
              icon: Users,
              title: 'Team Training',
              desc: 'Collaborative sessions that build chemistry, communication, and collective tactical understanding.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 backdrop-blur-md rounded-lg hover:border-[#98ff98]/30 transition-all"
            >
              <item.icon size={32} className="text-[#98ff98] mb-4" />
              <h4 className="text-lg font-black text-white italic uppercase mb-2">{item.title}</h4>
              <p className="text-sm text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#224e72] p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-black text-white italic uppercase mb-4">Train Like a Pro?</h3>
          <p className="text-white/60 mb-6">Our elite training programs are designed to transform dedicated players into professionals.</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#98ff98] text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#88ee88] transition-colors"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfessionalTraining;
