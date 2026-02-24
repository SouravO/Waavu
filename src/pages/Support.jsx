import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Target, Users, Mail, Phone, Zap, Trophy, 
  CheckCircle, Copy, ArrowUpRight, Sparkles, HandHeart,
  Banknote, ClipboardList, Activity, Shield, Globe
} from 'lucide-react';

export default function SupportPage() {
  const [copied, setCopied] = useState('');
  const [userData, setUserData] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
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
      description: "Athletic Development Fund",
      handler: function (response) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact
      },
      theme: { color: "#224e72" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const impactItems = [
    { amount: '₹500', impact: 'Training Kit for 1 Athlete', icon: Trophy },
    { amount: '₹2,000', impact: 'Monthly Nutrition Support', icon: Heart },
    { amount: '₹5,000', impact: 'Tournament Participation', icon: Target },
    { amount: '₹10,000', impact: 'Team Equipment Sponsor', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#224e72] overflow-x-hidden pt-32 pb-24">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Activity size={800} className="absolute -bottom-40 -left-40 text-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#224e7233_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#224e72]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#224e72]">Financial & Support Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              Fuel The <br />
              <span className="text-white/20">Movement</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 max-w-xs">
              SECURE CONTRIBUTIONS // TAX-DEDUCTIBLE // DIRECT IMPACT TRACKING
            </p>
          </div>
        </div>

        {/* MAIN INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 mb-24">
          {/* DONATION PANEL */}
          <div className="lg:col-span-8 bg-black p-8 lg:p-16 space-y-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#224e72] shadow-[0_0_20px_rgba(34,78,114,0.3)]">
                  <HandHeart size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter">Support Excellence</h2>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Transaction Module v4.0</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                 <InputField placeholder="Your Name" value={userData.name} onChange={(v) => setUserData({...userData, name: v})} />
                 <InputField placeholder="Email Address" value={userData.email} onChange={(v) => setUserData({...userData, email: v})} />
                 <InputField placeholder="Contact Number" value={userData.contact} onChange={(v) => setUserData({...userData, contact: v})} />
              </div>

              <button
                onClick={handleRazorpay}
                className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#224e72] hover:text-white transition-all duration-500 flex items-center justify-center gap-4"
              >
                Initiate Donation <Zap size={14} />
              </button>
            </div>

            <div className="pt-12 border-t border-white/10 space-y-6">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] block">Direct Transfer Protocols</span>
              <div className="grid md:grid-cols-2 gap-4">
                <BankDetail label="Account Number" value="10810200024800" onCopy={() => copyToClipboard("10810200024800", 'acc')} active={copied === 'acc'} />
                <BankDetail label="IFSC Code" value="FDRL0001081" onCopy={() => copyToClipboard("FDRL0001081", 'ifsc')} active={copied === 'ifsc'} />
              </div>
              <div className="p-4 bg-white/5 border border-white/10 flex items-center gap-4">
                <Shield size={16} className="text-[#224e72]" />
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                  80G Tax Exemption Certified // Secure Encryption Verified
                </p>
              </div>
            </div>
          </div>

          {/* IMPACT PANEL */}
          <div className="lg:col-span-4 bg-black p-8 lg:p-12">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-12 flex items-center gap-4">
              <Target size={24} className="text-[#224e72]" />
              Impact Matrix
            </h2>
            <div className="space-y-4">
              {impactItems.map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/2 hover:border-[#224e72]/50 transition-colors flex items-center gap-6">
                  <div className="p-3 bg-[#224e72]/10 text-[#224e72]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-black italic uppercase tracking-tighter text-[#224e72]">{item.amount}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS HUD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-12">
           {[
             { label: "Athletes", value: "500+" },
             { label: "Partner Schools", value: "50+" },
             { label: "Transparency", value: "100%" },
             { label: "Ops Status", value: "Active" }
           ].map((stat, i) => (
             <div key={i} className="p-10 bg-black text-center group">
               <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4 group-hover:text-[#224e72] transition-colors">{stat.label}</p>
               <p className="text-4xl font-black italic uppercase tracking-tighter">{stat.value}</p>
             </div>
           ))}
        </div>

        {/* BOTTOM NAV HUD */}
        <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-white/20">
           <span>Module: Support_Hub // v4.0</span>
           <span>Auth: WAWU_SECURE_PAY</span>
        </div>
      </div>
    </div>
  );
}

function BankDetail({ label, value, onCopy, active }) {
  return (
    <div className="flex justify-between items-center bg-white/5 p-4 border border-white/10 group hover:border-[#224e72] transition-all">
      <div>
        <span className="block text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{label}</span>
        <span className="font-mono text-sm font-bold text-white group-hover:text-[#224e72] transition-colors uppercase tracking-widest">{value}</span>
      </div>
      <button onClick={onCopy} className="p-2 text-white/20 hover:text-white transition-colors">
        {active ? <CheckCircle size={16} className="text-[#224e72]" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 py-4 px-4 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-[#224e72] transition-all text-white placeholder:text-white/20"
    />
  );
}
