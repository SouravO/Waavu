import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Zap, MoveRight } from 'lucide-react';

const Contact = () => {
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
      const mailtoLink = `mailto:hello@wawu.studio?subject=${subject}&body=${body}`;
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
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20">
      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Communication_Link</p>
          <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12">
            Establish <br />
            <span className="italic font-light">Connection.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Info Block */}
          <div className="md:col-span-5 border-r border-black/5 p-8 md:p-20 space-y-20 bg-white">
            <div className="space-y-12">
              <div className="group">
                <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.3em] block mb-4">Direct Email</span>
                <p className="text-3xl md:text-4xl font-serif hover:text-[#125487] transition-colors cursor-pointer">
                  hello@wawu.studio
                </p>
              </div>
              
              <div className="group">
                <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.3em] block mb-4">Studio Location</span>
                <p className="text-3xl md:text-4xl font-serif">
                  Lagos / London <br />
                  Remote Ecosystem
                </p>
              </div>

              <div className="group">
                <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.3em] block mb-4">Social Presence</span>
                <div className="flex flex-col gap-2 text-xl font-serif italic">
                  <span className="hover:text-[#125487] cursor-pointer transition-colors w-fit">Instagram</span>
                  <span className="hover:text-[#125487] cursor-pointer transition-colors w-fit">LinkedIn</span>
                  <span className="hover:text-[#125487] cursor-pointer transition-colors w-fit">Are.na</span>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-black/5">
              <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest leading-relaxed">
                WE ARE ALWAYS OPEN TO CONVERSATION WITH VISIONARIES, BUILDERS, AND TALENTED INDIVIDUALS READY TO DEFINE THE FUTURE.
              </p>
            </div>
          </div>

          {/* Form Block */}
          <div className="md:col-span-7 p-8 md:p-20 bg-[#F5F5F5] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:border-[#125487] outline-none transition-all font-serif italic text-2xl placeholder:text-black/5"
                          placeholder="Sharath K."
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Return Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:border-[#125487] outline-none transition-all font-serif italic text-2xl placeholder:text-black/5"
                          placeholder="email@studio.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Subject Header</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:border-[#125487] outline-none transition-all font-serif italic text-2xl placeholder:text-black/5"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Message Payload</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-transparent border border-black/10 p-6 text-black focus:border-[#125487] outline-none transition-all font-sans text-lg placeholder:text-black/5 resize-none"
                        placeholder="Tell us about your vision..."
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
                    >
                      {isSubmitting ? "Processing..." : "Initiate Transfer"}
                      <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#125487] transition-all">
                        {isSubmitting ? <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" /> : <MoveRight size={24} />}
                      </div>
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
                  <div className="w-24 h-24 bg-[#125487] rounded-full flex items-center justify-center mb-10 text-white shadow-2xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif mb-6">Transmission <br /> Successful.</h2>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-12">System will reset shortly</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] hover:text-[#125487] transition-colors"
                  >
                    Send New Transmission <ArrowUpRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
