import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Trophy, Target, Zap, Clock, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate "Premium" Processing
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || 'Contact Form Inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:contact@waavufoundation.org?subject=${subject}&body=${body}`;

      // This is the fix: window.open is more reliable than location.href for mailto
      window.open(mailtoLink, '_self');
      
      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* TACTICAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #224e72 40%, #000000 100%)' }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <rect x="20%" y="30%" width="60%" height="40%" fill="none" stroke="white" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:pt-32">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#98ff98] text-black px-4 py-2 text-[10px] font-black uppercase italic mb-6 shadow-[0_0_20px_rgba(152,255,152,0.3)]"
          >
            <Target size={14} /> Establish Connection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white italic leading-[0.8] tracking-tighter uppercase mb-4"
          >
            PING <span className="text-[#98ff98]">US</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FORM CONTAINER */}
          <motion.div
            layout
            className="relative bg-white/5 border border-white/10 p-8 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <h2 className="text-2xl font-black text-white italic uppercase mb-8 flex items-center gap-3">
                    <Send size={20} className="text-[#98ff98]" />
                    Send Transmission
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Operator Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-[#98ff98] outline-none transition-all"
                          placeholder="S. OROUCH"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Return Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-[#98ff98] outline-none transition-all"
                          placeholder="agent@waavu.org"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Subject Header</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-[#98ff98] outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Encrypted Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-[#98ff98] outline-none transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="group relative w-full h-16 bg-[#98ff98] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(152,255,152,0.2)]"
                    >
                      <span className="relative z-10 text-black text-sm font-black flex items-center justify-center gap-3 uppercase italic">
                        {isSubmitting ? "Processing..." : "Initiate Transfer"}
                        <Zap size={18} fill="currentColor" className={isSubmitting ? "animate-pulse" : ""} />
                      </span>
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-[#98ff98] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(152,255,152,0.4)]"
                  >
                    <CheckCircle2 size={48} className="text-black" />
                  </motion.div>
                  <h2 className="text-4xl font-black italic uppercase text-[#98ff98] mb-2">Transmission Sent</h2>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Opening your secure mail client...</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CONTACT INFO GRID */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                <Clock className="text-[#98ff98] mb-4" size={24} />
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Uptime</p>
                <p className="text-2xl font-black italic">24/7/365</p>
              </div>
              <div className="bg-[#224e72] p-6 rounded-2xl shadow-xl border border-white/10">
                <Trophy className="text-[#98ff98] mb-4" size={24} />
                <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Status</p>
                <p className="text-2xl font-black italic text-white uppercase">Operational</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md group hover:border-[#98ff98]/50 transition-all cursor-pointer">
              <Mail className="text-[#98ff98] mb-6" size={32} />
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Direct Access</p>
              <a href="mailto:contact@waavufoundation.org" className="text-2xl md:text-3xl font-black italic break-all group-hover:text-[#98ff98] transition-colors">
                contact@waavufoundation.org
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-2xl">
              <MapPin className="text-[#98ff98] mb-6" size={32} />
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Command Center</p>
              <p className="text-2xl font-black italic text-white uppercase">Global Operations / Remote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;