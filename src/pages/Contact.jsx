import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Shield, Target, Zap, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

const TechnicalContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || 'Contact Form Inquiry');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:contact@waavufoundation.org?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_self');
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#224e72] overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -top-40 -left-40 text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#224e7233_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Communication Link</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Establish <br />
              <span className="text-white/20">Connection</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              SECURE CHANNEL // ENCRYPTED TRANSMISSION // GLOBAL COMMAND CENTER
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          {/* CONTACT INFO PANEL */}
          <div className="lg:col-span-4 bg-black p-8 lg:p-12 space-y-12">
            <div className="space-y-8">
              <div className="group">
                <span className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] block mb-4">Direct Email</span>
                <a href="mailto:contact@waavufoundation.org" className="text-xl md:text-2xl font-black italic uppercase tracking-tighter hover:text-[#224e72] transition-colors break-all">
                  contact@waavufoundation.org
                </a>
              </div>
              
              <div className="group">
                <span className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] block mb-4">Command Center</span>
                <p className="text-xl md:text-2xl font-black italic uppercase tracking-tighter">
                  Global Operations // Remote
                </p>
              </div>

              <div className="group">
                <span className="text-[10px] font-black text-[#224e72] uppercase tracking-[0.3em] block mb-4">Availability</span>
                <p className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-green-500">
                  24/7/365 // Active
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <div className="p-6 bg-white/5 border border-white/10 flex items-center gap-4">
                <Shield size={24} className="text-[#224e72]" />
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Security Status</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Encrypted & Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM PANEL */}
          <div className="lg:col-span-8 bg-black p-8 lg:p-20 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Operator Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:border-[#224e72] outline-none transition-all font-bold uppercase tracking-widest text-xs"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Return Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:border-[#224e72] outline-none transition-all font-bold uppercase tracking-widest text-xs"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Subject Header</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:border-[#224e72] outline-none transition-all font-bold uppercase tracking-widest text-xs"
                        placeholder="Purpose of Inquiry"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Message Payload</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 p-6 text-white focus:border-[#224e72] outline-none transition-all font-bold tracking-widest text-xs resize-none"
                        placeholder="Detailed Transmission..."
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="group relative w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#224e72] hover:text-white transition-all duration-500 flex items-center justify-center gap-4 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? "Processing..." : "Initiate Transfer"}
                        <Zap size={14} className={isSubmitting ? "animate-pulse" : ""} />
                      </span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-[#224e72] rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(34,78,114,0.4)]">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">Transmission <br /> Successful</h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-12">System will reset in 5.0 seconds</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72] hover:text-white transition-colors"
                  >
                    Send New Transmission <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalContact;