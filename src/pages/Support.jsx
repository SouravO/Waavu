import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, ArrowRight, Zap, Heart, Target, Users, Trophy, User, Mail, Phone, Shield } from 'lucide-react';

export default function SupportPage() {
  const [copied, setCopied] = useState('');
  const [activeTab, setActiveTab] = useState('donate');

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleRazorpay = () => {
    if (!userData.email || !userData.name) {
      alert("Please provide your details in the form below first.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: 50000,
      currency: "INR",
      name: "WAWU Foundation",
      description: "Athletic Development Fund - Palakkad",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact
      },
      notes: {
        address: "WAWU Foundation Office, Palakkad"
      },
      theme: {
        color: "#98ff98"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden pt-20">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #0a0f1e 0%, #224e72 40%, #000000 100%)'
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="300" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="2" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="white" strokeWidth="2" />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#98ff98]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#224e72]/20 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#98ff98] text-black px-4 py-2 text-[10px] font-black uppercase italic mb-6">
            <Shield size={14} /> Support & Donate
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase leading-[0.85] tracking-tighter mb-4">
            Support Our <span className="text-[#98ff98]">Mission</span>
          </h1>
          <p className="text-white/40 text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Building the Future of Football, One Athlete at a Time
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('donate')}
            className={`px-8 py-3 text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === 'donate'
                ? 'bg-[#98ff98] text-black'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Donate
          </button>
          <button
            onClick={() => setActiveTab('internship')}
            className={`px-8 py-3 text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === 'internship'
                ? 'bg-[#98ff98] text-black'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            Internship
          </button>
        </div>

        {activeTab === 'donate' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* DONATION CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#98ff98]/10 rounded-lg">
                  <Heart size={24} className="text-[#98ff98]" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase">Make a Donation</h2>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Your support changes lives</p>
                </div>
              </div>

              <button
                onClick={handleRazorpay}
                className="w-full bg-[#98ff98] text-black py-5 flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] hover:bg-[#88ee88] transition-all mb-8 rounded"
              >
                Donate Now <Zap size={18} fill="currentColor" />
              </button>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Bank Transfer Details</p>
                <BankDetail label="Account Number" value="10810200024800" onCopy={() => copy("10810200024800", 'a')} active={copied === 'a'} />
                <BankDetail label="IFSC Code" value="FDRL0001081" onCopy={() => copy("FDRL0001081", 'i')} active={copied === 'i'} />
              </div>

              <div className="mt-8 p-4 bg-[#224e72]/20 border border-[#224e72]/30 rounded-lg">
                <p className="text-[10px] text-white/50 font-bold">
                  <span className="text-[#98ff98] font-black">✓</span> All donations are tax-deductible under 80G
                </p>
              </div>
            </motion.div>

            {/* IMPACT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#98ff98]/10 rounded-lg">
                  <Target size={24} className="text-[#98ff98]" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase">Your Impact</h2>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">See where your money goes</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { amount: '₹500', impact: 'Provides training kit for 1 athlete', icon: Trophy },
                  { amount: '₹2,000', impact: 'Covers monthly nutrition support', icon: Target },
                  { amount: '₹5,000', impact: 'Funds tournament participation fees', icon: Users },
                  { amount: '₹10,000', impact: 'Sponsors equipment for entire team', icon: Heart },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 hover:border-[#98ff98]/30 transition-all"
                  >
                    <div className="p-2 bg-[#98ff98]/10 rounded">
                      <item.icon size={16} className="text-[#98ff98]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-[#98ff98]">{item.amount}</p>
                      <p className="text-xs text-white/50">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          /* INTERNSHIP SECTION */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#98ff98]/10 rounded-lg">
                  <Users size={24} className="text-[#98ff98]" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase">Join Our Team</h2>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">2026 Internship Program</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Talent Scouting', desc: 'Identify and assess rural athletes' },
                  { title: 'Operations Management', desc: 'Coordinate championships & events' },
                  { title: 'Community Outreach', desc: 'Build partnerships with local schools' },
                  { title: 'Content Creation', desc: 'Document athlete journeys & success stories' },
                ].map((role, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-lg border border-white/5">
                    <p className="text-sm font-black text-white uppercase mb-1">{role.title}</p>
                    <p className="text-xs text-white/50">{role.desc}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#98ff98] text-black py-5 flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] hover:bg-[#88ee88] transition-all rounded">
                Apply for Internship <ArrowRight size={18} />
              </button>
            </div>

            {/* PROFILE FORM */}
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#98ff98]/10 rounded-lg">
                  <User size={24} className="text-[#98ff98]" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase">Your Profile</h2>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Required for application</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <InputField
                  label="Full Name"
                  placeholder="John Doe"
                  icon={<User size={16} />}
                  value={userData.name}
                  onChange={(v) => setUserData({ ...userData, name: v })}
                />
                <InputField
                  label="Email Address"
                  placeholder="john@example.com"
                  icon={<Mail size={16} />}
                  value={userData.email}
                  onChange={(v) => setUserData({ ...userData, email: v })}
                />
                <InputField
                  label="Phone Number"
                  placeholder="+91 00000 00000"
                  icon={<Phone size={16} />}
                  value={userData.contact}
                  onChange={(v) => setUserData({ ...userData, contact: v })}
                />
              </div>
              <p className="mt-6 text-[10px] font-bold text-white/30 uppercase tracking-widest text-center">
                These details are used for your application and donation receipts.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function BankDetail({ label, value, onCopy, active }) {
  return (
    <div className="flex justify-between items-center bg-black/30 p-4 border border-white/10 rounded-lg group hover:border-[#98ff98]/30 transition-all">
      <div>
        <span className="block text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</span>
        <span className="font-mono text-sm font-bold text-white group-hover:text-[#98ff98] transition-colors">{value}</span>
      </div>
      <button onClick={onCopy} className="p-2 hover:bg-white/5 rounded-md transition-colors">
        {active ? <CheckCircle size={16} className="text-[#98ff98]" /> : <Copy size={16} className="text-white/20 group-hover:text-white/60" />}
      </button>
    </div>
  );
}

function InputField({ label, placeholder, icon, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-white/40">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">{icon}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-black/30 border border-white/10 py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-[#98ff98] focus:ring-1 focus:ring-[#98ff98] transition-all text-white placeholder:text-white/20 rounded"
        />
      </div>
    </div>
  );
}