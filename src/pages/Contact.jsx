import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Trophy, Target, Users, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* TACTICAL BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #0a0f1e 0%, #224e72 40%, #000000 100%)'
        }}
      >
        {/* Field Markings Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <rect x="20%" y="30%" width="60%" height="40%" fill="none" stroke="white" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="4" />
        </svg>

        {/* Interactive Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#98ff98]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#224e72]/20 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#98ff98] text-black px-4 py-2 text-[10px] font-black uppercase italic mb-6"
          >
            <Target size={14} /> Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white italic leading-[0.85] tracking-tighter uppercase mb-4"
          >
            CONTACT <span className="text-[#98ff98]">US</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto"
          >
            Building the Future, One Pitch at a Time
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 p-8 backdrop-blur-md"
          >
            <h2 className="text-2xl font-black text-white italic uppercase mb-8 flex items-center gap-3">
              <Send size={20} className="text-[#98ff98]" />
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-[#98ff98] outline-none transition-all placeholder:text-white/20"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-[#98ff98] outline-none transition-all placeholder:text-white/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-[#98ff98] outline-none transition-all placeholder:text-white/20"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-[#98ff98] outline-none transition-all placeholder:text-white/20 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full h-14 bg-[#98ff98] hover:bg-[#88ee88] rounded-lg overflow-hidden transition-all"
              >
                <span className="relative z-10 text-black text-xs font-black flex items-center justify-center gap-2 uppercase tracking-widest">
                  Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* INFO CARDS */}
            {[
              { icon: Mail, label: 'Email', value: 'contact@waavufoundation.org', sub: 'We respond within 24 hours' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', sub: 'Mon-Fri, 9AM-6PM EST' },
              { icon: MapPin, label: 'Location', value: 'Global Operations', sub: 'Building pitches worldwide' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:border-[#98ff98]/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#98ff98]/10 rounded-lg group-hover:bg-[#98ff98]/20 transition-all">
                    <item.icon size={24} className="text-[#98ff98]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-black text-white italic">{item.value}</p>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider mt-1">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* STATS SECTION */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Response Time', value: '< 24hrs', icon: Clock },
                { label: 'Projects', value: '75+', icon: Trophy },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 backdrop-blur-md"
                >
                  <stat.icon size={20} className="text-[#98ff98] mb-3" />
                  <p className="text-3xl font-black text-white italic">{stat.value}</p>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA BOX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="relative bg-[#224e72] p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
              <div className="relative z-10">
                <Trophy size={32} className="text-[#98ff98] mb-4" />
                <h3 className="text-xl font-black text-white italic uppercase mb-2">Want to Make an Impact?</h3>
                <p className="text-white/60 text-sm font-bold mb-4">Join our mission to build the future of football.</p>
                <a href="/donate" className="inline-block bg-white text-black px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-[#98ff98] transition-colors">
                  Donate Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
